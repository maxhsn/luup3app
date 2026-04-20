// merchant-ui.jsx — LUUP Activate (merchant dashboard) UI
// Built from real tokens in src/index.css. The Activate platform uses the base
// LUUP brand color (--eco-accent: 239 84% 59% — indigo). Combat Market is the
// CONSUMER side that overrides to red; the merchant Activate dashboard does NOT.
// The Combat Athletics merchant in our scenes is a brand using the standard
// indigo Activate UI to manage their Hayabusa-style apparel network.
// Layout: 220px sidebar + main canvas, dense bento cards, Outfit/Inter

const M_TOK = {
  bg: 'hsl(40 20% 96%)',
  card: 'hsl(0 0% 100%)',
  fg: 'hsl(20 10% 10%)',
  muted: 'hsl(40 12% 92%)',
  mutedSoft: 'hsl(40 12% 96%)',
  mutedFg: 'hsl(20 8% 50%)',
  border: 'hsl(40 10% 88%)',
  borderSoft: 'hsl(40 10% 94%)',
  accent: 'hsl(239 84% 59%)',         // LUUP indigo — the real --eco-accent base
  accentDeep: 'hsl(239 70% 48%)',
  accentSoft: 'hsla(239, 84%, 59%, 0.08)',
  accentTint: 'hsla(239, 84%, 59%, 0.16)',
  accentRing: 'hsla(239, 84%, 59%, 0.30)',
  emerald: 'hsl(160 70% 38%)',
  emeraldSoft: 'hsla(160, 70%, 38%, 0.08)',
  amber: 'hsl(38 95% 50%)',
};

const M_FONT = {
  display: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

// ── tiny inline icons (lucide-style 16px stroke) ──────────────
function MIcon({ name, size = 16, color = 'currentColor', strokeWidth = 1.75 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'dashboard': return <svg {...p}><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>;
    case 'target': return <svg {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={color}/></svg>;
    case 'shopping-bag': return <svg {...p}><path d="M5 7h14l-1.5 12a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 7z"/><path d="M9 11V6a3 3 0 0 1 6 0v5"/></svg>;
    case 'users': return <svg {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M21.5 19c0-2.5-1.5-4.5-4-4.5"/></svg>;
    case 'radar': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 4.5"/><circle cx="12" cy="12" r="1" fill={color}/></svg>;
    case 'wallet': return <svg {...p}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="17" cy="14.5" r="1" fill={color}/></svg>;
    case 'chart': return <svg {...p}><path d="M3 3v18h18"/><path d="M7 16l4-4 3 3 6-7"/></svg>;
    case 'community': return <svg {...p}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19a6 6 0 0 1 12 0M14 18.5a4.5 4.5 0 0 1 7-1"/></svg>;
    case 'shield': return <svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/></svg>;
    case 'palette': return <svg {...p}><circle cx="13.5" cy="6.5" r="1.5" fill={color}/><circle cx="17.5" cy="11" r="1.5" fill={color}/><circle cx="8.5" cy="6.5" r="1.5" fill={color}/><circle cx="6.5" cy="11" r="1.5" fill={color}/><path d="M12 21a9 9 0 1 1 0-18c4.5 0 9 3 9 7 0 2.5-2.2 3.5-4.5 3.5h-1.5a2 2 0 0 0-1 3.7c.6.4 1 1 1 1.8 0 1-1 2-3 2z"/></svg>;
    case 'settings': return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case 'help': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4"/><circle cx="12" cy="17" r="0.6" fill={color}/></svg>;
    case 'plus': return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case 'search': return <svg {...p}><circle cx="11" cy="11" r="6.5"/><path d="M16.5 16.5L21 21"/></svg>;
    case 'bell': return <svg {...p}><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>;
    case 'sparkle': return <svg {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z"/></svg>;
    case 'rocket': return <svg {...p}><path d="M5 19l3-3M9 11l4 4-2 5-3-3-5 2 6-8z"/><path d="M14 6l4 4 3-3a4 4 0 0 0-4-4l-3 3z"/><circle cx="15" cy="9" r="1.5"/></svg>;
    case 'check': return <svg {...p}><path d="M5 12l4 4 10-10"/></svg>;
    case 'chevron-down': return <svg {...p}><path d="M6 9l6 6 6-6"/></svg>;
    case 'chevron-right': return <svg {...p}><path d="M9 6l6 6-6 6"/></svg>;
    case 'arrow-right': return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'gift': return <svg {...p}><rect x="3" y="9" width="18" height="11" rx="1.5"/><path d="M3 13h18M12 9v11M8 9c-2 0-3-1-3-2.5S6 4 8 5s4 4 4 4M16 9c2 0 3-1 3-2.5S18 4 16 5s-4 4-4 4"/></svg>;
    case 'eye': return <svg {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'cursor': return <svg {...p}><path d="M5 3l3 17 3.5-7 7-2z"/></svg>;
    case 'cart': return <svg {...p}><path d="M3 4h2l2.5 12h11l2-8H6"/><circle cx="9" cy="20" r="1.5" fill={color}/><circle cx="17" cy="20" r="1.5" fill={color}/></svg>;
    case 'dollar': return <svg {...p}><path d="M12 3v18M16 7h-5a3 3 0 0 0 0 6h2a3 3 0 0 1 0 6H7"/></svg>;
    case 'upload': return <svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v13"/></svg>;
    case 'image': return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>;
    case 'flame': return <svg {...p}><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 2 2c0-3-2-4 2-8z"/></svg>;
    case 'zap': return <svg {...p}><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill={color} stroke="none"/></svg>;
    case 'panel': return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M14 8l-3 4 3 4"/></svg>;
    default: return <svg {...p}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

// ── Sidebar nav data ──────────────────────────────────────────
const M_NAV = [
  { id: 'overview',     label: 'Command Center', icon: 'dashboard' },
  { id: 'missions',     label: 'Missions',       icon: 'target', badge: '3' },
  { id: 'products',     label: 'Products',       icon: 'shopping-bag' },
  { id: 'ambassadors',  label: 'My Network',     icon: 'users' },
  { id: 'recruitment',  label: 'Recruitment',    icon: 'radar' },
  { id: 'finance',      label: 'Finance',        icon: 'wallet' },
  { id: 'analytics',    label: 'Analytics',      icon: 'chart' },
  { id: 'community',    label: 'Community',      icon: 'community' },
  { id: 'moderation',   label: 'Moderation',     icon: 'shield', badge: '5' },
  { id: 'brand',        label: 'Brand',          icon: 'palette' },
  { id: 'settings',     label: 'Settings',       icon: 'settings' },
  { id: 'support',      label: 'Support',        icon: 'help' },
];

// ── Sidebar ───────────────────────────────────────────────────
function MerchantSidebar({ active = 'overview', highlight = null, launchProgress = 60, guideExpanded = false }) {
  return (
    <div style={{
      width: 220, height: '100%', background: M_TOK.card,
      borderRight: `1px solid ${M_TOK.border}`,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
      fontFamily: M_FONT.body,
    }}>
      {/* Header */}
      <div style={{
        height: 52, padding: '0 14px', display: 'flex', alignItems: 'center',
        gap: 8, borderBottom: `1px solid ${M_TOK.border}`,
      }}>
        <img src="src/assets/luup-icon.svg" alt="LUUP" style={{ width: 20, height: 20, display: 'block' }} />
        <span style={{ fontFamily: M_FONT.display, fontWeight: 800, fontSize: 13, letterSpacing: '-0.03em', color: M_TOK.fg }}>LUUP</span>
        <span style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: M_TOK.accent,
          padding: '2px 6px', borderRadius: 4, background: M_TOK.accentSoft,
        }}>ACTIVATE</span>
        <div style={{ flex: 1 }} />
        <MIcon name="panel" size={14} color={M_TOK.mutedFg} />
      </div>

      {/* Brand selector */}
      <div style={{ padding: '8px 10px', borderBottom: `1px solid ${M_TOK.border}` }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 10px', borderRadius: 9,
          background: highlight === 'brand-selector' ? M_TOK.accentSoft : 'transparent',
          transition: 'background 200ms',
        }}>
          <div style={{
            width: 26, height: 26, borderRadius: 6, background: M_TOK.accentSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <MIcon name="zap" size={13} color={M_TOK.accent} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: M_TOK.fg, lineHeight: 1.2 }}>Combat Athletics</div>
            <div style={{ fontSize: 9.5, color: M_TOK.mutedFg, lineHeight: 1.2 }}>Founding Merchant</div>
          </div>
          <MIcon name="chevron-right" size={11} color={M_TOK.mutedFg} />
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'hidden', padding: '6px 8px' }}>
        {M_NAV.map(item => {
          const isActive = active === item.id;
          const isHover = highlight === `nav-${item.id}`;
          return (
            <div
              key={item.id}
              data-cursor-target={`nav-${item.id}`}
              style={{
                position: 'relative',
                display: 'flex', alignItems: 'center', gap: 9,
                padding: '6px 9px', marginBottom: 1,
                borderRadius: 8, fontSize: 12.5, fontWeight: 500,
                color: isActive ? M_TOK.accent : M_TOK.mutedFg,
                background: isActive ? M_TOK.accentSoft : (isHover ? M_TOK.muted : 'transparent'),
                transition: 'background 180ms, color 180ms',
              }}
            >
              {isActive && (
                <div style={{
                  position: 'absolute', left: 0, top: 7, bottom: 7,
                  width: 2.5, borderRadius: 2, background: M_TOK.accent,
                }} />
              )}
              <MIcon name={item.icon} size={15} color={isActive ? M_TOK.accent : M_TOK.mutedFg} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && (
                <span style={{
                  fontSize: 9.5, fontWeight: 700,
                  padding: '1px 6px', borderRadius: 999,
                  background: isActive ? M_TOK.accentTint : M_TOK.muted,
                  color: isActive ? M_TOK.accent : M_TOK.mutedFg,
                  minWidth: 16, textAlign: 'center',
                }}>{item.badge}</span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Launch Guide */}
      <div style={{ padding: 8 }}>
        <div data-cursor-target="launch-guide" style={{
          borderRadius: 10, border: `1px solid ${M_TOK.border}`,
          background: highlight === 'launch-guide'
            ? `linear-gradient(135deg, ${M_TOK.accentSoft}, ${M_TOK.muted})`
            : 'hsl(40 12% 96%)',
          overflow: 'hidden',
          boxShadow: highlight === 'launch-guide' ? `0 0 0 2px ${M_TOK.accentRing}` : 'none',
          transition: 'box-shadow 220ms, background 220ms',
        }}>
          <div style={{
            padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <MIcon name="sparkle" size={12} color={M_TOK.accent} />
            <span style={{ fontSize: 10.5, fontWeight: 700, color: M_TOK.fg, flex: 1 }}>Launch Guide</span>
            <span style={{ fontSize: 9.5, fontFamily: M_FONT.mono, color: M_TOK.mutedFg }}>3/5</span>
            <MIcon name="chevron-down" size={11} color={M_TOK.mutedFg} />
          </div>
          <div style={{ padding: '0 10px 8px' }}>
            <div style={{ height: 3, borderRadius: 2, background: M_TOK.border, overflow: 'hidden' }}>
              <div style={{
                width: `${launchProgress}%`, height: '100%',
                background: M_TOK.accent, borderRadius: 2,
                transition: 'width 600ms cubic-bezier(0.16,1,0.3,1)',
              }} />
            </div>
          </div>
          {guideExpanded && (
            <div style={{ padding: '0 8px 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 4px 4px' }}>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: M_TOK.accent, letterSpacing: '0.06em' }}>ACTIVATING</span>
                <span style={{ fontSize: 9, color: M_TOK.mutedFg }}>·</span>
                <span style={{ fontSize: 9.5, color: M_TOK.mutedFg, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <MIcon name="gift" size={9} color={M_TOK.mutedFg} /> 12 entries
                </span>
              </div>
              {[
                { label: 'Set up brand profile', done: true },
                { label: 'Connect product catalog', done: true },
                { label: 'Invite first ambassador', done: true },
                { label: 'Launch your first mission', done: false, entries: 5 },
                { label: 'Configure rewards', done: false, entries: 3 },
              ].map((s, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '4px 6px', borderRadius: 5,
                  background: !s.done && i === 3 ? M_TOK.accentSoft : 'transparent',
                  opacity: s.done ? 0.45 : 1,
                }}>
                  <div style={{
                    width: 14, height: 14, borderRadius: 4,
                    background: s.done ? M_TOK.emeraldSoft : M_TOK.muted,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {s.done
                      ? <MIcon name="check" size={9} color={M_TOK.emerald} strokeWidth={2.5} />
                      : <MIcon name="rocket" size={9} color={M_TOK.mutedFg} />}
                  </div>
                  <span style={{
                    fontSize: 10.5, flex: 1,
                    color: s.done ? M_TOK.mutedFg : M_TOK.fg,
                    textDecoration: s.done ? 'line-through' : 'none',
                  }}>{s.label}</span>
                  {!s.done && (
                    <span style={{ fontSize: 9.5, fontWeight: 700, color: M_TOK.accent }}>+{s.entries}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Top app bar (above main content) ──────────────────────────
function MerchantTopBar({ pageTitle = 'Command Center' }) {
  return (
    <div style={{
      height: 52, borderBottom: `1px solid ${M_TOK.border}`,
      display: 'flex', alignItems: 'center', padding: '0 24px',
      background: M_TOK.bg,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 12, color: M_TOK.mutedFg,
      }}>
        <span>Brand</span>
        <MIcon name="chevron-right" size={11} color={M_TOK.mutedFg} />
        <span style={{ color: M_TOK.fg, fontWeight: 500 }}>{pageTitle}</span>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 220, height: 30, borderRadius: 8,
          background: M_TOK.muted, display: 'flex', alignItems: 'center',
          padding: '0 10px', gap: 6,
        }}>
          <MIcon name="search" size={13} color={M_TOK.mutedFg} />
          <span style={{ fontSize: 11.5, color: M_TOK.mutedFg }}>Search</span>
          <div style={{ flex: 1 }} />
          <span style={{
            fontSize: 9, fontFamily: M_FONT.mono, color: M_TOK.mutedFg,
            padding: '1px 5px', borderRadius: 3, background: M_TOK.bg,
            border: `1px solid ${M_TOK.border}`,
          }}>⌘K</span>
        </div>
        <div style={{
          width: 30, height: 30, borderRadius: 8, background: M_TOK.muted,
          display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
        }}>
          <MIcon name="bell" size={14} color={M_TOK.mutedFg} />
          <div style={{
            position: 'absolute', top: 6, right: 6,
            width: 6, height: 6, borderRadius: 6, background: M_TOK.accent,
            border: `1.5px solid ${M_TOK.muted}`,
          }} />
        </div>
        <div style={{
          width: 30, height: 30, borderRadius: 8,
          background: `linear-gradient(135deg, ${M_TOK.accent}, ${M_TOK.accentDeep})`,
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: M_FONT.display, fontSize: 12, fontWeight: 700, letterSpacing: '-0.02em',
        }}>CA</div>
      </div>
    </div>
  );
}

// ── Stat card ─────────────────────────────────────────────────
function StatCard({ icon, label, value, change, up = true, animateValue = 1 }) {
  return (
    <div style={{
      background: M_TOK.card, border: `1px solid ${M_TOK.border}`, borderRadius: 14,
      padding: 16, display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, fontWeight: 500, color: M_TOK.mutedFg }}>{label}</span>
        <span style={{
          fontSize: 10.5, fontWeight: 600,
          color: up ? M_TOK.emerald : '#dc2626',
        }}>{change}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: M_FONT.display, fontSize: 22, fontWeight: 800,
          color: M_TOK.fg, letterSpacing: '-0.03em', lineHeight: 1,
          opacity: animateValue,
          transform: `translateY(${(1 - animateValue) * 4}px)`,
        }}>{value}</span>
      </div>
    </div>
  );
}

// ── Command Center page ───────────────────────────────────────
function CommandCenterPage({ animatePhase = 1, highlight = null }) {
  // animatePhase: 0..1 controls staggered entrance of cards/chart bars
  const stats = [
    { icon: 'eye',    label: 'Total Views',     value: '17,210',  change: '+24.3%', up: true },
    { icon: 'cursor', label: 'Clicks',          value: '4,820',   change: '+18.1%', up: true },
    { icon: 'cart',   label: 'Conversions',     value: '326',     change: '+8.4%',  up: true },
    { icon: 'dollar', label: 'Revenue',         value: '$48,750', change: '+31.2%', up: true },
  ];
  // Revenue chart bars - 12 months
  const revenueData = [22, 28, 35, 30, 42, 48, 55, 62, 58, 70, 78, 85];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  return (
    <div style={{
      flex: 1, padding: 24, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{
            margin: 0, fontFamily: M_FONT.display, fontSize: 22, fontWeight: 800,
            letterSpacing: '-0.03em', color: M_TOK.fg,
          }}>Command Center</h1>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: M_TOK.mutedFg }}>
            Combat Athletics · Real-time overview of your growth engine
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: M_TOK.mutedFg }}>
          <span>Last 30 days</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: M_TOK.fg, fontWeight: 500 }}>
            <span style={{
              width: 6, height: 6, borderRadius: 6, background: M_TOK.emerald,
              boxShadow: `0 0 0 3px ${M_TOK.emeraldSoft}`,
            }} />
            Live
          </span>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {stats.map((s, i) => {
          const stagger = Math.max(0, Math.min(1, (animatePhase - i * 0.06) / 0.4));
          return (
            <div key={i} data-cursor-target={`stat-${i}`} style={{
              opacity: stagger,
              transform: `translateY(${(1 - stagger) * 8}px)`,
              transition: 'opacity 200ms, transform 200ms',
            }}>
              <StatCard {...s} animateValue={stagger} />
            </div>
          );
        })}
      </div>

      {/* Revenue + ROI */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        {/* Revenue chart */}
        <div style={{
          background: M_TOK.card, border: `1px solid ${M_TOK.border}`, borderRadius: 14,
          padding: 18, position: 'relative',
          boxShadow: highlight === 'revenue' ? `0 0 0 2px ${M_TOK.accentRing}` : 'none',
          transition: 'box-shadow 240ms',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: M_TOK.fg }}>Revenue Overview</h3>
              <p style={{ margin: '2px 0 0', fontSize: 10.5, color: M_TOK.mutedFg }}>Monthly performance trend</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 10.5, color: M_TOK.mutedFg }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: M_TOK.accent }} /> Gross
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: M_TOK.accentTint }} /> Net
              </span>
            </div>
          </div>
          <div style={{ height: 140, display: 'flex', alignItems: 'flex-end', gap: 6 }}>
            {revenueData.map((val, i) => {
              const grossH = (val / 100) * 130;
              const netH = grossH * 0.42;
              const stagger = Math.max(0, Math.min(1, (animatePhase - 0.2 - i * 0.04) / 0.5));
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: '100%', position: 'relative', height: grossH + 4 }}>
                    <div style={{
                      position: 'absolute', bottom: 0, left: 1, right: 1,
                      height: netH * stagger, borderRadius: 4,
                      background: M_TOK.accentTint,
                      transition: 'height 600ms cubic-bezier(0.16,1,0.3,1)',
                    }} />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 1, right: 1,
                      height: grossH * stagger, borderRadius: 4,
                      background: M_TOK.accent,
                      transition: 'height 600ms cubic-bezier(0.16,1,0.3,1)',
                    }} />
                  </div>
                  <span style={{ fontSize: 9, color: M_TOK.mutedFg, fontFamily: M_FONT.mono }}>{months[i]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROI summary */}
        <div style={{
          background: M_TOK.card, border: `1px solid ${M_TOK.border}`, borderRadius: 14,
          padding: 18, display: 'flex', flexDirection: 'column',
        }}>
          <h3 style={{ margin: '0 0 14px', fontSize: 12.5, fontWeight: 600, color: M_TOK.fg }}>ROI Summary</h3>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: 14 }}>
              <p style={{
                margin: 0, fontFamily: M_FONT.display, fontSize: 38, fontWeight: 800,
                letterSpacing: '-0.04em', color: M_TOK.fg, lineHeight: 1,
              }}>
                {Math.round(347 * Math.min(1, animatePhase * 1.2))}%
              </p>
              <p style={{ margin: '6px 0 0', fontSize: 11, color: M_TOK.mutedFg }}>Overall ROI</p>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 9,
              borderTop: `1px solid ${M_TOK.border}`, paddingTop: 12,
            }}>
              {[
                { label: 'Total Spend',     value: '$14,050' },
                { label: 'Total Revenue',   value: '$48,750', highlight: true },
                { label: 'Avg. CPA',        value: '$11.26' },
                { label: 'Conversion Rate', value: '6.77%' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10.5, color: M_TOK.mutedFg }}>{row.label}</span>
                  <span style={{
                    fontSize: 12, fontWeight: 600,
                    color: row.highlight ? M_TOK.emerald : M_TOK.fg,
                  }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active missions + leaderboard */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
        <div style={{
          background: M_TOK.card, border: `1px solid ${M_TOK.border}`, borderRadius: 14, padding: 18,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: M_TOK.fg }}>Active Missions</h3>
            <span style={{ fontSize: 10.5, color: M_TOK.mutedFg, display: 'flex', alignItems: 'center', gap: 2 }}>
              View all <MIcon name="chevron-right" size={10} color={M_TOK.mutedFg} />
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { name: 'Share Your Training Setup', filled: 38, total: 50, days: 7, reward: '$25 + 250pt' },
              { name: 'Combat Camp Recap Reels',   filled: 22, total: 30, days: 12, reward: '$50 + 500pt' },
              { name: 'Gear Review — New Drop',    filled: 14, total: 25, days: 4, reward: '$35' },
            ].map((m, i) => {
              const pct = Math.round((m.filled / m.total) * 100);
              return (
                <div key={i} style={{
                  padding: 12, borderRadius: 10,
                  border: `1px solid ${M_TOK.borderSoft}`,
                  background: M_TOK.mutedSoft,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div>
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: M_TOK.fg }}>{m.name}</p>
                      <p style={{ margin: '2px 0 0', fontSize: 10, color: M_TOK.mutedFg }}>{m.days}d left · {m.reward}</p>
                    </div>
                    <span style={{
                      fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4,
                      background: M_TOK.emeraldSoft, color: M_TOK.emerald, letterSpacing: '0.05em',
                    }}>LIVE</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1, height: 3, borderRadius: 2, background: M_TOK.border, overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: M_TOK.accent, borderRadius: 2 }} />
                    </div>
                    <span style={{ fontSize: 9.5, fontFamily: M_FONT.mono, color: M_TOK.mutedFg }}>{m.filled}/{m.total}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          background: M_TOK.card, border: `1px solid ${M_TOK.border}`, borderRadius: 14, padding: 18,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: M_TOK.fg }}>Top Performers</h3>
            <span style={{ fontSize: 10.5, color: M_TOK.mutedFg }}>Leaderboard ›</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 6px 6px',
            fontSize: 9, color: M_TOK.mutedFg, letterSpacing: '0.06em', fontWeight: 500 }}>
            <span style={{ width: 16 }}>#</span>
            <span style={{ flex: 1 }}>AMBASSADOR</span>
            <span style={{ width: 40, textAlign: 'right' }}>CONV.</span>
            <span style={{ width: 56, textAlign: 'right' }}>REVENUE</span>
          </div>
          {[
            { name: 'Maya Chen',     tier: 'Captain · L7',  conv: 47, rev: '$3,920', i: '#fb7185' },
            { name: 'Jordan Reeves', tier: 'Veteran · L6',  conv: 41, rev: '$3,260', i: '#a78bfa' },
            { name: 'Sam Okafor',    tier: 'Veteran · L5',  conv: 38, rev: '$2,840', i: '#34d399' },
            { name: 'Alex Park',     tier: 'Recruit · L4',  conv: 29, rev: '$2,180', i: '#fbbf24' },
            { name: 'Riley Kim',     tier: 'Recruit · L3',  conv: 22, rev: '$1,640', i: '#60a5fa' },
          ].map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '6px 6px', borderRadius: 6,
            }}>
              <span style={{ width: 16, fontSize: 10.5, fontFamily: M_FONT.mono, color: M_TOK.mutedFg }}>{i+1}</span>
              <div style={{
                width: 22, height: 22, borderRadius: 22, background: p.i,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: M_FONT.display, fontSize: 10, fontWeight: 700,
              }}>{p.name[0]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 11.5, fontWeight: 500, color: M_TOK.fg }}>{p.name}</p>
                <p style={{ margin: 0, fontSize: 9.5, color: M_TOK.mutedFg }}>{p.tier}</p>
              </div>
              <span style={{ width: 40, textAlign: 'right', fontSize: 10.5, fontFamily: M_FONT.mono, color: M_TOK.mutedFg }}>{p.conv}</span>
              <span style={{ width: 56, textAlign: 'right', fontSize: 11, fontWeight: 600, color: M_TOK.fg, fontFamily: M_FONT.mono }}>{p.rev}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mission Manager page ──────────────────────────────────────
function MissionManagerPage({ highlight = null, withNewMission = false, animatePhase = 1 }) {
  const baseMissions = [
    { name: 'Share Your Training Setup', type: 'UGC · Photo',     status: 'live',  difficulty: 'Easy',   filled: 38, total: 50, reward: '$25 + 250pt', days: 7,  i: '#fb7185' },
    { name: 'Combat Camp Recap Reels',   type: 'UGC · Video',     status: 'live',  difficulty: 'Medium', filled: 22, total: 30, reward: '$50 + 500pt', days: 12, i: '#a78bfa' },
    { name: 'Gear Review — New Drop',    type: 'Review',          status: 'live',  difficulty: 'Easy',   filled: 14, total: 25, reward: '$35',         days: 4,  i: '#34d399' },
    { name: 'Local Gym Check-in',        type: 'Check-in',        status: 'paused',difficulty: 'Easy',   filled: 8,  total: 40, reward: '$10',         days: 0,  i: '#fbbf24' },
    { name: 'Pre-fight Walkout Story',   type: 'Story Repost',    status: 'draft', difficulty: 'Easy',   filled: 0,  total: 100, reward: '$15',        days: 0,  i: '#94a3b8' },
  ];
  const newMission = {
    name: 'Pre-Workout Routine Reel', type: 'UGC · Video',
    status: 'live', difficulty: 'Easy',
    filled: 0, total: 50, reward: '$25 + 250pt', days: 7, i: '#fb7185', justLaunched: true,
  };
  const missions = withNewMission ? [newMission, ...baseMissions] : baseMissions;

  const statusStyles = {
    live:    { color: M_TOK.emerald, bg: M_TOK.emeraldSoft, label: 'LIVE' },
    paused:  { color: '#d97706',     bg: 'hsla(38,95%,50%,0.1)', label: 'PAUSED' },
    draft:   { color: '#64748b',     bg: 'hsla(220,10%,50%,0.1)', label: 'DRAFT' },
  };

  return (
    <div style={{
      flex: 1, padding: 24, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{
            margin: 0, fontFamily: M_FONT.display, fontSize: 22, fontWeight: 800,
            letterSpacing: '-0.03em', color: M_TOK.fg,
          }}>Mission Manager</h1>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: M_TOK.mutedFg }}>
            Create, manage, and track your missions
          </p>
        </div>
        <div data-cursor-target="create-btn" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', borderRadius: 10, background: M_TOK.accent,
          color: '#fff', fontSize: 12.5, fontWeight: 600, fontFamily: M_FONT.body,
          boxShadow: highlight === 'create-btn'
            ? `0 0 0 4px ${M_TOK.accentRing}, 0 4px 14px hsla(239, 84%, 59%, 0.3)`
            : '0 1px 3px hsla(239, 84%, 59%, 0.2)',
          transition: 'box-shadow 220ms, transform 180ms',
          transform: highlight === 'create-btn' ? 'scale(1.04)' : 'scale(1)',
        }}>
          <MIcon name="plus" size={14} color="#fff" strokeWidth={2.4} />
          Create Mission
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        padding: 3, background: M_TOK.muted, borderRadius: 10, width: 'fit-content',
      }}>
        {[
          { key: 'missions',    label: 'Missions',     active: true },
          { key: 'submissions', label: 'Submissions',  badge: 12 },
          { key: 'engine',      label: 'Mission Engine', icon: 'sparkle' },
          { key: 'analytics',   label: 'Analytics' },
        ].map((t, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 7, fontSize: 11.5, fontWeight: 500,
            background: t.active ? M_TOK.card : 'transparent',
            color: t.active ? M_TOK.fg : M_TOK.mutedFg,
            boxShadow: t.active ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
          }}>
            {t.icon && <MIcon name={t.icon} size={12} color={t.active ? M_TOK.fg : M_TOK.mutedFg} />}
            {t.label}
            {t.badge && (
              <span style={{
                fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 999,
                background: M_TOK.accentTint, color: M_TOK.accent,
              }}>{t.badge}</span>
            )}
          </div>
        ))}
      </div>

      {/* Filter row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          flex: 1, height: 32, borderRadius: 9, background: M_TOK.muted,
          display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8,
        }}>
          <MIcon name="search" size={13} color={M_TOK.mutedFg} />
          <span style={{ fontSize: 11.5, color: M_TOK.mutedFg }}>Search missions...</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 2, padding: 2,
          background: M_TOK.muted, borderRadius: 8,
        }}>
          {['All','Live','Draft','Paused','Completed'].map((s, i) => (
            <span key={i} style={{
              padding: '5px 10px', borderRadius: 6, fontSize: 10.5, fontWeight: 500,
              background: i === 0 ? M_TOK.card : 'transparent',
              color: i === 0 ? M_TOK.fg : M_TOK.mutedFg,
              boxShadow: i === 0 ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Mission rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, overflow: 'hidden' }}>
        {missions.map((m, i) => {
          const sc = statusStyles[m.status];
          const pct = m.total > 0 ? Math.round((m.filled / m.total) * 100) : 0;
          const isNew = m.justLaunched;
          return (
            <div key={i} style={{
              padding: 12, borderRadius: 12,
              background: M_TOK.card,
              border: `1px solid ${isNew ? M_TOK.accentRing : M_TOK.border}`,
              boxShadow: isNew ? `0 0 0 2px ${M_TOK.accentSoft}, 0 8px 24px hsla(239, 84%, 59%, 0.12)` : 'none',
              display: 'flex', alignItems: 'center', gap: 14,
              opacity: animatePhase,
              transform: `translateY(${(1-animatePhase)*4}px)`,
              transition: 'box-shadow 240ms, border-color 240ms',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 9, background: m.i, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: M_FONT.display, fontWeight: 700, fontSize: 16,
              }}>{m.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: M_TOK.fg }}>{m.name}</p>
                  <span style={{
                    fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4,
                    background: sc.bg, color: sc.color, letterSpacing: '0.05em',
                  }}>{sc.label}</span>
                  <span style={{
                    fontSize: 9.5, padding: '2px 6px', borderRadius: 4,
                    background: M_TOK.muted, color: M_TOK.mutedFg, fontWeight: 500,
                  }}>{m.difficulty}</span>
                  {isNew && (
                    <span style={{
                      fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 999,
                      background: M_TOK.accent, color: '#fff', letterSpacing: '0.04em',
                      display: 'flex', alignItems: 'center', gap: 3,
                    }}>
                      <MIcon name="sparkle" size={9} color="#fff" /> NEW
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 10.5, color: M_TOK.mutedFg }}>
                  <span>{m.type}</span>
                  <span>{m.reward}</span>
                  {m.days > 0 && <span>{m.days}d left</span>}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: M_TOK.fg, fontFamily: M_FONT.mono }}>{m.filled}/{m.total}</p>
                  <p style={{ margin: 0, fontSize: 9, color: M_TOK.mutedFg }}>SLOTS</p>
                </div>
                <div style={{ width: 64 }}>
                  <div style={{ height: 4, borderRadius: 2, background: M_TOK.muted, overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: M_TOK.accent, borderRadius: 2 }} />
                  </div>
                  <p style={{ margin: '3px 0 0', fontSize: 9, color: M_TOK.mutedFg, textAlign: 'center' }}>{pct}% filled</p>
                </div>
                <MIcon name="chevron-down" size={14} color={M_TOK.mutedFg} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Create Mission modal ──────────────────────────────────────
function CreateMissionModal({
  visible = false,
  title = '', description = '',
  capacity = '50', cashReward = '25', pointsReward = '250',
  difficulty = 'Easy', rewardType = 'mixed',
  highlightField = null,
  highlightLaunch = false,
  submitting = false, success = false,
  modalProgress = 1,
}) {
  if (!visible) return null;
  const opacity = modalProgress;
  const ty = (1 - modalProgress) * 24;
  const scale = 0.96 + 0.04 * modalProgress;

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 40,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: `rgba(20, 15, 10, ${0.45 * modalProgress})`,
      backdropFilter: `blur(${8 * modalProgress}px)`,
      transition: 'background 200ms',
    }}>
      <div style={{
        width: 520, maxHeight: 580, background: M_TOK.card,
        borderRadius: 18, border: `1px solid ${M_TOK.border}`,
        boxShadow: '0 32px 80px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.1)',
        display: 'flex', flexDirection: 'column',
        opacity, transform: `translateY(${ty}px) scale(${scale})`,
        transition: 'opacity 240ms, transform 240ms cubic-bezier(0.16,1,0.3,1)',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '18px 22px', borderBottom: `1px solid ${M_TOK.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{ margin: 0, fontFamily: M_FONT.display, fontSize: 16, fontWeight: 700, color: M_TOK.fg, letterSpacing: '-0.02em' }}>
              Create Mission
            </h2>
            <p style={{ margin: '2px 0 0', fontSize: 11, color: M_TOK.mutedFg }}>
              Define the task ambassadors will complete
            </p>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: 7, background: M_TOK.muted,
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: M_TOK.mutedFg,
            fontSize: 16,
          }}>×</div>
        </div>

        {/* Body */}
        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
          {/* Title */}
          <FormField label="Mission Title" highlight={highlightField === 'title'}>
            <div data-cursor-target="field-title" style={{
              ...inputStyle(highlightField === 'title'),
              minHeight: 32, display: 'flex', alignItems: 'center',
            }}>
              <span>{title}</span>
              {highlightField === 'title' && <span style={cursorBlink} />}
            </div>
          </FormField>

          {/* Description */}
          <FormField label="Description" highlight={highlightField === 'description'}>
            <div data-cursor-target="field-description" style={{ ...inputStyle(highlightField === 'description'), height: 56,
              padding: '8px 12px', whiteSpace: 'pre-wrap', textAlign: 'left',
              display: 'flex', alignItems: 'flex-start',
            }}>
              {description || <span style={{ color: M_TOK.mutedFg }}>Describe what ambassadors need to do...</span>}
              {highlightField === 'description' && <span style={cursorBlink} />}
            </div>
          </FormField>

          {/* Mission type + Submission type */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <FormField label="Mission Type">
              <div style={selectStyle}>
                <span>UGC · Video</span>
                <MIcon name="chevron-down" size={12} color={M_TOK.mutedFg} />
              </div>
            </FormField>
            <FormField label="Submission Type">
              <div style={selectStyle}>
                <span>Link / URL</span>
                <MIcon name="chevron-down" size={12} color={M_TOK.mutedFg} />
              </div>
            </FormField>
          </div>

          {/* Difficulty + Capacity + Deadline */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1.2fr', gap: 12 }}>
            <FormField label="Difficulty">
              <div style={{ display: 'flex', gap: 4 }}>
                {['Easy','Medium','Hard'].map(d => (
                  <div key={d} style={{
                    flex: 1, padding: '6px 0', textAlign: 'center', borderRadius: 7,
                    fontSize: 10.5, fontWeight: 500,
                    background: difficulty === d ? M_TOK.accentSoft : M_TOK.mutedSoft,
                    color: difficulty === d ? M_TOK.accent : M_TOK.mutedFg,
                    border: `1px solid ${difficulty === d ? M_TOK.accentRing : M_TOK.border}`,
                  }}>{d}</div>
                ))}
              </div>
            </FormField>
            <FormField label="Capacity" highlight={highlightField === 'capacity'}>
              <input data-cursor-target="field-capacity" value={capacity} readOnly style={inputStyle(highlightField === 'capacity')} />
            </FormField>
            <FormField label="Deadline">
              <div style={{ ...selectStyle, color: M_TOK.mutedFg }}>
                <span>Apr 27, 2026</span>
              </div>
            </FormField>
          </div>

          {/* Reward */}
          <FormField label="Reward Structure">
            <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
              {[
                { key: 'cash',   label: 'Cash Only' },
                { key: 'points', label: 'Points Only' },
                { key: 'mixed',  label: 'Cash + Points' },
              ].map(r => (
                <div key={r.key} style={{
                  padding: '6px 12px', borderRadius: 7,
                  fontSize: 10.5, fontWeight: 500,
                  background: rewardType === r.key ? M_TOK.accentSoft : M_TOK.mutedSoft,
                  color: rewardType === r.key ? M_TOK.accent : M_TOK.mutedFg,
                  border: `1px solid ${rewardType === r.key ? M_TOK.accentRing : M_TOK.border}`,
                }}>{r.label}</div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: 9.5, color: M_TOK.mutedFg }}>CASH AMOUNT ($)</p>
                <input data-cursor-target="field-cash" value={cashReward} readOnly style={{...inputStyle(highlightField === 'cash'), padding: '6px 12px' }} />
              </div>
              <div>
                <p style={{ margin: '0 0 4px', fontSize: 9.5, color: M_TOK.mutedFg }}>POINTS</p>
                <input value={pointsReward} readOnly style={{...inputStyle(highlightField === 'points'), padding: '6px 12px' }} />
              </div>
            </div>
          </FormField>
        </div>

        {/* Footer */}
        <div style={{
          padding: '14px 22px', borderTop: `1px solid ${M_TOK.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: M_TOK.mutedSoft,
        }}>
          <div style={{
            padding: '8px 14px', borderRadius: 9,
            border: `1px solid ${M_TOK.border}`, background: M_TOK.card,
            fontSize: 11.5, color: M_TOK.mutedFg, fontWeight: 500,
          }}>Cancel</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              padding: '8px 14px', borderRadius: 9,
              border: `1px solid ${M_TOK.border}`, background: M_TOK.card,
              fontSize: 11.5, color: M_TOK.fg, fontWeight: 500,
            }}>Save as Draft</div>
            <div data-cursor-target="launch-mission" style={{
              padding: '8px 16px', borderRadius: 9,
              background: success ? M_TOK.emerald : M_TOK.accent,
              color: '#fff', fontSize: 11.5, fontWeight: 600,
              boxShadow: highlightLaunch
                ? `0 0 0 4px ${M_TOK.accentRing}, 0 4px 14px hsla(239, 84%, 59%, 0.3)`
                : '0 1px 3px hsla(239, 84%, 59%, 0.25)',
              transform: highlightLaunch ? 'scale(1.04)' : 'scale(1)',
              transition: 'box-shadow 200ms, transform 180ms, background 180ms',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {submitting && <Spinner />}
              {success
                ? <><MIcon name="check" size={13} color="#fff" strokeWidth={2.6} /> Mission Live</>
                : submitting ? 'Launching...' : 'Launch Mission'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, highlight, children }) {
  return (
    <div style={{
      position: 'relative',
      padding: highlight ? 4 : 0, margin: highlight ? -4 : 0,
      borderRadius: 10,
      background: highlight ? M_TOK.accentSoft : 'transparent',
      transition: 'background 220ms',
    }}>
      <p style={{
        margin: '0 0 4px',
        fontSize: 10.5, fontWeight: 600, color: highlight ? M_TOK.accent : M_TOK.mutedFg,
        letterSpacing: '-0.01em',
      }}>{label}</p>
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}

function inputStyle(highlight) {
  return {
    width: '100%', boxSizing: 'border-box',
    padding: '8px 12px', borderRadius: 9,
    background: M_TOK.mutedSoft,
    border: `1px solid ${highlight ? M_TOK.accentRing : M_TOK.border}`,
    fontSize: 12, color: M_TOK.fg, fontFamily: M_FONT.body,
    outline: 'none',
  };
}

const selectStyle = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '8px 12px', borderRadius: 9, background: M_TOK.mutedSoft,
  border: `1px solid ${M_TOK.border}`, fontSize: 12, color: M_TOK.fg,
};

const cursorBlink = {
  display: 'inline-block', width: 1.5, height: 14, marginLeft: 1,
  background: M_TOK.accent, verticalAlign: 'middle',
  animation: 'blink 1s steps(1) infinite',
};

function Spinner() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" style={{ animation: 'spin 0.8s linear infinite' }}>
      <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.25)" strokeWidth="3" fill="none"/>
      <path d="M12 3a9 9 0 0 1 9 9" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ── Toast ─────────────────────────────────────────────────────
function MerchantToast({ visible = false, progress = 1 }) {
  if (!visible) return null;
  const op = Math.min(1, progress * 1.2);
  const ty = (1 - op) * 16;
  return (
    <div style={{
      position: 'absolute', bottom: 24, left: '50%',
      transform: `translateX(-50%) translateY(${-ty}px)`,
      opacity: op, zIndex: 60,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 16px 10px 12px', borderRadius: 12,
        background: 'hsl(20 12% 14%)', color: '#fff',
        boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
        fontFamily: M_FONT.body, fontSize: 12,
      }}>
        <div style={{
          width: 26, height: 26, borderRadius: 7,
          background: M_TOK.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <MIcon name="rocket" size={14} color="#fff" strokeWidth={2.2} />
        </div>
        <div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 12.5 }}>Mission live · Pre-Workout Routine Reel</p>
          <p style={{ margin: '1px 0 0', fontSize: 10.5, color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center', gap: 5 }}>
            <MIcon name="gift" size={10} color={M_TOK.accent} /> +5 entries earned · Launch Guide now 4/5
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Coach mark / spotlight tooltip ────────────────────────────
function CoachMark({ x, y, width = 240, anchor = 'right', title, body, visible, progress = 1 }) {
  if (!visible) return null;
  const op = progress;
  const ty = (1 - op) * 8;
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      transform: anchor === 'right'
        ? `translate(12px, ${-ty}px)`
        : `translate(calc(-100% - 12px), ${-ty}px)`,
      width, opacity: op, zIndex: 70,
      pointerEvents: 'none',
    }}>
      <div style={{
        background: 'hsl(20 12% 14%)', color: '#fff',
        borderRadius: 12, padding: 14,
        boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 18,
          [anchor === 'right' ? 'left' : 'right']: -6,
          width: 12, height: 12, background: 'hsl(20 12% 14%)',
          transform: 'rotate(45deg)',
        }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <MIcon name="sparkle" size={12} color={M_TOK.accent} />
          <p style={{ margin: 0, fontFamily: M_FONT.display, fontSize: 12, fontWeight: 700, color: M_TOK.accent, letterSpacing: '0.05em' }}>
            TIP
          </p>
        </div>
        <p style={{ margin: 0, fontFamily: M_FONT.display, fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</p>
        <p style={{ margin: '4px 0 0', fontSize: 11.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.45 }}>{body}</p>
      </div>
    </div>
  );
}

// ── Spotlight ring (highlights an arbitrary screen region) ────
function Spotlight({ x, y, width, height, visible, progress = 1, accent }) {
  if (!visible) return null;
  const op = progress;
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width, height,
      borderRadius: 14, pointerEvents: 'none', zIndex: 30,
      boxShadow: `0 0 0 4px hsla(239, 84%, 59%,${0.35 * op}), 0 0 0 9999px rgba(20,15,10,${0.18 * op})`,
      transition: 'box-shadow 240ms',
    }} />
  );
}

Object.assign(window, {
  MerchantSidebar, MerchantTopBar,
  CommandCenterPage, MissionManagerPage,
  CreateMissionModal, MerchantToast,
  CoachMark, Spotlight,
  M_TOK, M_FONT, MIcon,
});
