import { useState } from "react";
import { Building2, Users, ShoppingBag, Smartphone, Target, Sparkles, Bot } from "lucide-react";

const groups = [
  {
    label: "Merchant Tools",
    icon: Building2,
    color: "var(--stage-onboarding)",
    features: ["Core Activation Engine", "Merchant Dashboard", "Join Pages & Funnels", "Template Pages"],
    side: "left" as const,
    y: 0,
  },
  {
    label: "Customer & Creator",
    icon: Users,
    color: "var(--stage-participation)",
    features: ["User Profiles", "Creator Applications", "Personal Communities"],
    side: "left" as const,
    y: 1,
  },
  {
    label: "Storefronts & Commerce",
    icon: ShoppingBag,
    color: "var(--stage-conversion)",
    features: ["Personal Storefronts", "Codes & Referrals", "Wallet & Withdrawals", "4-Tier Referral Engine"],
    side: "left" as const,
    y: 2,
  },
  {
    label: "Social & Content",
    icon: Smartphone,
    color: "var(--stage-network)",
    features: ["Brand Pages", "Social Wall Feed", "UGC Engine"],
    side: "right" as const,
    y: 0,
  },
  {
    label: "Engagement",
    icon: Target,
    color: "var(--stage-earnings)",
    features: ["Missions Engine", "Leaderboards", "Notifications"],
    side: "right" as const,
    y: 1,
  },
  {
    label: "Discovery & AI",
    icon: Sparkles,
    color: "var(--stage-discovery)",
    features: ["Ecosystem Layer", "Ecosystem Tagging", "AI Automation"],
    side: "right" as const,
    y: 2,
  },
];

const ProductEcosystemChart = () => {
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  const leftGroups = groups.filter(g => g.side === "left");
  const rightGroups = groups.filter(g => g.side === "right");

  return (
    <div className="relative">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-center min-h-[600px]">
        {/* Left Side */}
        <div className="flex flex-col gap-6 items-end pr-8">
          {leftGroups.map((group, gi) => {
            const Icon = group.icon;
            const globalIdx = groups.indexOf(group);
            const isHovered = hoveredGroup === globalIdx;
            return (
              <div
                key={group.label}
                className="flex items-center gap-4 transition-all duration-300"
                onMouseEnter={() => setHoveredGroup(globalIdx)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                {/* Features */}
                <div className={`flex flex-col gap-1.5 items-end transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
                  {group.features.map((f) => (
                    <div
                      key={f}
                      className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground shadow-sm whitespace-nowrap transition-all duration-300"
                      style={isHovered ? { borderColor: `hsl(${group.color})`, background: `hsl(${group.color} / 0.06)` } : {}}
                    >
                      {f}
                    </div>
                  ))}
                </div>
                {/* Group Node */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-sm font-display font-bold text-foreground">{group.label}</span>
                    <span className="text-[10px] font-mono text-muted-foreground">{group.features.length} features</span>
                  </div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 flex-shrink-0"
                    style={{
                      background: `hsl(${group.color})`,
                      boxShadow: isHovered ? `0 8px 24px hsl(${group.color} / 0.4)` : `0 4px 12px hsl(${group.color} / 0.2)`,
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <Icon size={20} className="text-card" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Hub */}
        <div className="flex flex-col items-center gap-3 relative px-12">
          {/* Connecting Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            {/* Left curves */}
            {[0, 1, 2].map(i => {
              const centerY = 300;
              const yOffsets = [-180, 0, 180];
              const targetY = centerY + yOffsets[i];
              return (
                <path
                  key={`left-${i}`}
                  d={`M 0,${targetY} C 30,${targetY} 20,${centerY} 48,${centerY}`}
                  fill="none"
                  stroke={`hsl(${groups[i].color})`}
                  strokeWidth={hoveredGroup === i ? 2.5 : 1.5}
                  strokeDasharray={hoveredGroup === i ? "none" : "4 4"}
                  opacity={hoveredGroup === null || hoveredGroup === i ? 0.6 : 0.15}
                  className="transition-all duration-300"
                />
              );
            })}
            {/* Right curves */}
            {[0, 1, 2].map(i => {
              const centerY = 300;
              const yOffsets = [-180, 0, 180];
              const targetY = centerY + yOffsets[i];
              const gi = i + 3;
              return (
                <path
                  key={`right-${i}`}
                  d={`M 96,${centerY} C 76,${centerY} 66,${targetY} 96,${targetY}`}
                  fill="none"
                  stroke={`hsl(${groups[gi].color})`}
                  strokeWidth={hoveredGroup === gi ? 2.5 : 1.5}
                  strokeDasharray={hoveredGroup === gi ? "none" : "4 4"}
                  opacity={hoveredGroup === null || hoveredGroup === gi ? 0.6 : 0.15}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center shadow-lg" style={{ boxShadow: '0 8px 32px hsl(var(--primary) / 0.35)' }}>
              <Bot size={32} className="text-primary-foreground" />
            </div>
            <div className="text-center">
              <p className="text-lg font-display font-black text-foreground tracking-tight">LUUP 3.0</p>
              <p className="text-[10px] font-mono text-muted-foreground">PLATFORM</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6 items-start pl-8">
          {rightGroups.map((group) => {
            const Icon = group.icon;
            const globalIdx = groups.indexOf(group);
            const isHovered = hoveredGroup === globalIdx;
            return (
              <div
                key={group.label}
                className="flex items-center gap-4 transition-all duration-300"
                onMouseEnter={() => setHoveredGroup(globalIdx)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                {/* Group Node */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 flex-shrink-0"
                    style={{
                      background: `hsl(${group.color})`,
                      boxShadow: isHovered ? `0 8px 24px hsl(${group.color} / 0.4)` : `0 4px 12px hsl(${group.color} / 0.2)`,
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <Icon size={20} className="text-card" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-display font-bold text-foreground">{group.label}</span>
                    <span className="text-[10px] font-mono text-muted-foreground">{group.features.length} features</span>
                  </div>
                </div>
                {/* Features */}
                <div className={`flex flex-col gap-1.5 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
                  {group.features.map((f) => (
                    <div
                      key={f}
                      className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground shadow-sm whitespace-nowrap transition-all duration-300"
                      style={isHovered ? { borderColor: `hsl(${group.color})`, background: `hsl(${group.color} / 0.06)` } : {}}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductEcosystemChart;
