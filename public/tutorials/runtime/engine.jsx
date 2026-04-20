// tutorials/runtime/engine.jsx
// Declarative tutorial runtime. Consumes a script (JSON) + a scene component,
// produces a fully animated tutorial frame inside a <Stage>.
//
// Globals required: React, Easing, clamp, useTime (from animations.jsx)

const { useTime, Easing, clamp } = window;

// ─── Compile script.steps into a stream of derived state per t ────────────
//   - cursor path (from click/hover targets, eased between)
//   - click events (from `click`)
//   - typewriter values per target
//   - active caption
//   - active toast
//   - active effects
//   - scene page + state at time t
function compileScript(script) {
  const steps = [...(script.steps || [])].sort((a, b) => a.at - b.at);

  // Cursor keyframes: each step that has click/hover/type contributes a target
  const cursorKeys = [];
  for (const s of steps) {
    let target = null, click = false;
    if (s.click) { target = s.click; click = true; }
    else if (s.hover) target = s.hover;
    else if (s.type && s.type.target) target = s.type.target;
    if (target) cursorKeys.push({ t: s.at, target, click });
  }

  // Page changes (sorted)
  const pageKeys = steps.filter(s => s.page).map(s => ({ t: s.at, page: s.page }));

  // State patches over time — accumulate as patches; runtime applies all up to t
  const statePatches = steps.filter(s => s.state).map(s => ({ t: s.at, patch: s.state }));

  // Typewriter declarations
  const typeDecls = steps.filter(s => s.type).map(s => ({
    t: s.at, target: s.type.target, text: s.type.text, cps: s.type.cps || 22,
  }));

  // Captions
  const captions = steps.filter(s => s.caption).map(s => ({
    t: s.at, text: s.caption, hold: s.captionHold || 3.0,
  }));

  // Toasts
  const toasts = steps.filter(s => s.toast).map(s => ({
    t: s.at, text: s.toast, hold: s.toastHold || 3.5,
  }));

  // Effects (burst, shimmer, etc) tied to a target (uses last cursor target if none)
  const effects = steps.filter(s => s.effect).map(s => ({
    t: s.at, kind: s.effect, target: s.effectTarget || s.click || s.hover || null,
  }));

  return { cursorKeys, pageKeys, statePatches, typeDecls, captions, toasts, effects };
}

// ─── Resolve scene page at time t ─────────────────────────────────────────
function pageAt(pageKeys, fallback, t) {
  let page = fallback;
  for (const k of pageKeys) {
    if (t >= k.t) page = k.page; else break;
  }
  return page;
}

// ─── Resolve scene state at time t (accumulated patches) ──────────────────
function stateAt(patches, t) {
  const out = {};
  for (const p of patches) {
    if (t >= p.t) Object.assign(out, p.patch); else break;
  }
  return out;
}

// ─── Typewriter values per target at time t ───────────────────────────────
function typingAt(decls, t) {
  const out = {};
  for (const d of decls) {
    if (t < d.t) continue;
    const elapsed = t - d.t;
    const fullChars = Math.floor(elapsed * d.cps);
    out[d.target] = d.text.slice(0, Math.min(fullChars, d.text.length));
  }
  return out;
}

// ─── Active caption at time t ─────────────────────────────────────────────
function activeCaption(captions, t) {
  // Last caption whose [start, start+hold] window contains t
  let active = null;
  for (const c of captions) {
    if (t >= c.t - 0.2 && t <= c.t + c.hold + 0.2) active = c;
  }
  return active;
}

// ─── Active toast at time t ────────────────────────────────────────────────
function activeToast(toasts, t) {
  let active = null;
  for (const c of toasts) {
    if (t >= c.t - 0.2 && t <= c.t + c.hold + 0.2) active = c;
  }
  return active;
}

// ─── Cursor position from cursor keys + measured target rects ─────────────
function cursorPositionAt(keys, rects, t) {
  if (keys.length === 0) return null;
  if (t <= keys[0].t) {
    const r = rects[keys[0].target];
    return r ? { x: r.x, y: r.y } : null;
  }
  if (t >= keys[keys.length - 1].t) {
    const r = rects[keys[keys.length - 1].target];
    return r ? { x: r.x, y: r.y } : null;
  }
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i], b = keys[i + 1];
    if (t >= a.t && t <= b.t) {
      const ra = rects[a.target], rb = rects[b.target];
      if (!ra && !rb) return null;
      if (!ra) return { x: rb.x, y: rb.y };
      if (!rb) return { x: ra.x, y: ra.y };
      const span = b.t - a.t;
      const local = span === 0 ? 1 : clamp((t - a.t) / span, 0, 1);
      const eased = Easing.easeInOutCubic(local);
      return { x: ra.x + (rb.x - ra.x) * eased, y: ra.y + (rb.y - ra.y) * eased };
    }
  }
  return null;
}

// ─── Click times (from cursor keys with click=true) ───────────────────────
function clickTimesFrom(keys) {
  return keys.filter(k => k.click).map(k => k.t);
}

// ─── Live target rect measurer (compensates for Stage CSS scale) ──────────
function useTargetRects(rootRef) {
  const [rects, setRects] = React.useState({});
  React.useEffect(() => {
    let raf;
    const measure = () => {
      const root = rootRef.current;
      if (!root) { raf = requestAnimationFrame(measure); return; }
      const rootRect = root.getBoundingClientRect();
      const sx = root.clientWidth  > 0 ? root.clientWidth  / rootRect.width  : 1;
      const sy = root.clientHeight > 0 ? root.clientHeight / rootRect.height : 1;
      const next = {};
      root.querySelectorAll('[data-cursor-target]').forEach(el => {
        const id = el.getAttribute('data-cursor-target');
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        next[id] = {
          x: (r.left - rootRect.left + r.width / 2) * sx,
          y: (r.top  - rootRect.top  + r.height / 2) * sy,
          w: r.width * sx, h: r.height * sy,
        };
      });
      setRects(next);
      raf = requestAnimationFrame(measure);
    };
    raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [rootRef]);
  return rects;
}

Object.assign(window, {
  compileScript, pageAt, stateAt, typingAt, activeCaption, activeToast,
  cursorPositionAt, clickTimesFrom, useTargetRects,
});
