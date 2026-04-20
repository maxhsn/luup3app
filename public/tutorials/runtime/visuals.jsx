// tutorials/runtime/visuals.jsx
// Visual primitives shared by all tutorials: cursor, captions, toast,
// success burst, ambient dust, vignette pulse, breathing camera.

const { useTime, Easing, clamp } = window;

// ─── Cursor ────────────────────────────────────────────────────────────────
function TutorialCursor({ pos, accent, clickTimes, time }) {
  if (!pos) return null;
  let clickScale = 1, ringOpacity = 0, ringScale = 1, shockOp = 0, shockScale = 1;
  for (const ct of (clickTimes || [])) {
    const dt = time - ct;
    if (dt >= -0.18 && dt < 1.2) {
      if (dt < 0) clickScale = 1 - (1 + dt / 0.18) * 0.18;
      else if (dt < 0.7) {
        const p = clamp(dt / 0.7, 0, 1);
        ringOpacity = (1 - p) * 0.6;
        ringScale = 1 + p * 2.6;
        clickScale = 0.82 + 0.18 * Easing.easeOutBack(p);
      } else clickScale = 1;
      if (dt >= 0 && dt < 1.2) {
        const p = clamp(dt / 1.2, 0, 1);
        shockOp = (1 - p) * 0.35;
        shockScale = 1 + p * 4.5;
      }
    }
  }
  return (
    <div style={{
      position: 'absolute', left: pos.x, top: pos.y, zIndex: 200,
      pointerEvents: 'none', transform: 'translate(-6px, -4px)',
      willChange: 'left, top',
    }}>
      <div style={{
        position: 'absolute', left: -32, top: -32, width: 64, height: 64,
        borderRadius: 64,
        background: `radial-gradient(circle, ${accent}33 0%, ${accent}00 70%)`,
        filter: 'blur(2px)', mixBlendMode: 'multiply',
      }} />
      <div style={{
        position: 'absolute', left: -22, top: -22, width: 44, height: 44,
        borderRadius: 44, border: `1.5px solid ${accent}`,
        opacity: shockOp, transform: `scale(${shockScale})`,
      }} />
      <div style={{
        position: 'absolute', left: -16, top: -16, width: 32, height: 32,
        borderRadius: 32, border: `2px solid ${accent}`,
        opacity: ringOpacity, transform: `scale(${ringScale})`,
      }} />
      <div style={{ transform: `scale(${clickScale})`, transformOrigin: 'top left' }}>
        <svg width="22" height="26" viewBox="0 0 24 28" style={{
          filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.45)) drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
        }}>
          <path d="M2 2 L2 22 L8 17 L11 24 L14 23 L11 16 L19 16 Z"
                fill="#fff" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Caption ──────────────────────────────────────────────────────────────
function TutorialCaption({ caption, time, font }) {
  if (!caption) return null;
  const start = caption.t, end = caption.t + caption.hold;
  if (time < start - 0.2 || time > end + 0.2) return null;
  const fadeIn = clamp((time - start) / 0.3, 0, 1);
  const fadeOut = 1 - clamp((time - (end - 0.3)) / 0.3, 0, 1);
  const opacity = Math.min(fadeIn, fadeOut);
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 36,
      display: 'flex', justifyContent: 'center',
      opacity, pointerEvents: 'none', zIndex: 90,
      transform: `translateY(${(1 - fadeIn) * 8}px)`,
    }}>
      <div style={{
        background: 'rgba(20, 15, 10, 0.92)', backdropFilter: 'blur(12px)',
        color: '#fff', fontFamily: font, fontSize: 18, fontWeight: 700,
        letterSpacing: '-0.02em', padding: '10px 18px', borderRadius: 999,
        boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
      }}>{caption.text}</div>
    </div>
  );
}

// ─── Toast (top-right of stage) ───────────────────────────────────────────
function TutorialToast({ toast, time, theme }) {
  if (!toast) return null;
  const start = toast.t, end = toast.t + toast.hold;
  if (time < start - 0.2 || time > end + 0.2) return null;
  const fadeIn = clamp((time - start) / 0.4, 0, 1);
  const fadeOut = 1 - clamp((time - (end - 0.4)) / 0.4, 0, 1);
  const opacity = Math.min(fadeIn, fadeOut);
  const slide = (1 - fadeIn) * 16;
  return (
    <div style={{
      position: 'absolute', right: 60, top: 60, zIndex: 95,
      opacity, transform: `translateY(${-slide}px)`,
      pointerEvents: 'none',
    }}>
      <div style={{
        background: theme.colors.surface, color: theme.colors.fg,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.lg,
        padding: '12px 16px 12px 14px', borderRadius: 12,
        display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: theme.fonts.body, fontSize: 13.5, fontWeight: 600,
        minWidth: 240,
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: 22, background: theme.colors.emerald,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
        </div>
        <span>{toast.text}</span>
      </div>
    </div>
  );
}

// ─── Success burst ────────────────────────────────────────────────────────
function SuccessBurst({ effects, rects, time, accent, emerald }) {
  // Render bursts for any effect kind=='burst' that's within [t, t+1.6]
  const active = effects.filter(e => e.kind === 'burst' && time >= e.t && time <= e.t + 1.6);
  if (active.length === 0) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 80 }}>
      {active.map((e, idx) => {
        const r = rects[e.target];
        if (!r) return null;
        const dt = time - e.t;
        const p = dt / 1.6;
        const particles = [];
        for (let i = 0; i < 18; i++) {
          const angle = (i / 18) * Math.PI * 2 + (i % 2) * 0.1;
          const dist = 60 + (i % 3) * 18;
          const eased = Easing.easeOutCubic(p);
          const px = Math.cos(angle) * dist * eased;
          const py = Math.sin(angle) * dist * eased - eased * 8;
          const op = (1 - p) * 0.95;
          const size = 4 + (i % 3);
          const colors = [accent, '#fbbf24', emerald, '#fff'];
          const c = colors[i % colors.length];
          particles.push(<div key={i} style={{
            position: 'absolute', left: r.x + px - size/2, top: r.y + py - size/2,
            width: size, height: size, borderRadius: size,
            background: c, opacity: op, boxShadow: `0 0 6px ${c}`,
          }} />);
        }
        const flashOp = (1 - clamp(dt / 0.4, 0, 1)) * 0.9;
        const flashScale = 1 + Easing.easeOutCubic(clamp(dt / 0.6, 0, 1)) * 3;
        return (
          <React.Fragment key={idx}>
            <div style={{
              position: 'absolute', left: r.x - 30, top: r.y - 30, width: 60, height: 60,
              borderRadius: 60,
              background: `radial-gradient(circle, ${accent}cc 0%, ${accent}00 70%)`,
              opacity: flashOp, transform: `scale(${flashScale})`,
            }} />
            {particles}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Ambient floating dust ────────────────────────────────────────────────
function AmbientDust({ count = 24, color = 'rgba(255,255,255,0.55)', stage }) {
  const time = useTime();
  const seeds = React.useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      x: (i * 137.5) % stage.width,
      y: (i * 89.3) % stage.height,
      ampX: 30 + (i % 5) * 12,
      ampY: 20 + (i % 4) * 8,
      speed: 0.15 + (i % 7) * 0.04,
      phase: i * 0.7,
      size: 1 + (i % 4) * 0.6,
      depth: 0.2 + (i % 5) * 0.18,
    })), [count, stage.width, stage.height]);
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {seeds.map((s, i) => {
        const dx = Math.sin(time * s.speed + s.phase) * s.ampX;
        const dy = Math.cos(time * s.speed * 0.7 + s.phase) * s.ampY;
        return (
          <div key={i} style={{
            position: 'absolute', left: s.x + dx, top: s.y + dy,
            width: s.size * 2, height: s.size * 2, borderRadius: 4,
            background: color, opacity: s.depth * 0.55,
            filter: `blur(${(1 - s.depth) * 1.5}px)`,
          }} />
        );
      })}
    </div>
  );
}

// ─── Vignette pulse on clicks ─────────────────────────────────────────────
function VignettePulse({ time, clickTimes }) {
  let intensity = 0.06;
  for (const ct of clickTimes) {
    const dt = time - ct;
    if (dt >= 0 && dt < 0.6) intensity += (1 - dt / 0.6) * 0.08;
  }
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 95,
      background: `radial-gradient(ellipse at 50% 45%, transparent 50%, rgba(0,0,0,${intensity}) 100%)`,
    }} />
  );
}

// ─── Breathing camera ─────────────────────────────────────────────────────
function useBreathingTransform(time, clickTimes) {
  // Default subtle drift; punch in slightly on each click
  let scale = 1.005, tx = 0, ty = 0;
  scale += Math.sin(time * 0.18) * 0.004;
  tx += Math.sin(time * 0.13) * 1.5;
  ty += Math.cos(time * 0.11) * 1.2;
  for (const ct of clickTimes) {
    const dt = time - ct;
    if (dt >= -0.2 && dt < 1.5) {
      const p = clamp((dt + 0.2) / 1.7, 0, 1);
      const punch = Math.sin(p * Math.PI) * 0.012;
      scale += punch;
      ty -= punch * 200;
    }
  }
  return { scale, tx, ty };
}

Object.assign(window, {
  TutorialCursor, TutorialCaption, TutorialToast,
  SuccessBurst, AmbientDust, VignettePulse, useBreathingTransform,
});
