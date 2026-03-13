import { useState } from "react";
import { LayoutDashboard, Smartphone, Store, Brain, Bot } from "lucide-react";

const deliverables = [
  {
    label: "Merchant Dashboard",
    subtitle: "LUUP Activate",
    icon: LayoutDashboard,
    color: "var(--stage-onboarding)",
    features: [
      "Brand Profile & Setup",
      "Commission & Program Config",
      "Join Pages & Funnels",
      "Template Pages",
      "Recruitment Tools",
      "Analytics & Reporting",
    ],
    position: "top-left" as const,
  },
  {
    label: "Consumer App",
    subtitle: "LUUP Mobile",
    icon: Smartphone,
    color: "var(--stage-participation)",
    features: [
      "User Profiles & Wallet",
      "Brand Discovery Feed",
      "Missions & Challenges",
      "Leaderboards & Ranks",
      "Social Wall & UGC",
      "Notifications & Alerts",
    ],
    position: "top-right" as const,
  },
  {
    label: "Storefronts",
    subtitle: "Commerce Layer",
    icon: Store,
    color: "var(--stage-conversion)",
    features: [
      "Personal Storefronts",
      "Creator Collections",
      "Codes & Referral Links",
      "4-Tier Referral Engine",
      "Wallet & Withdrawals",
      "Community Commerce",
    ],
    position: "bottom-left" as const,
  },
  {
    label: "Platform & AI",
    subtitle: "Ecosystem Engine",
    icon: Brain,
    color: "var(--stage-discovery)",
    features: [
      "Ecosystem Categories",
      "Multi-Vertical Tagging",
      "AI Matching & Recruitment",
      "Automated Growth Loops",
      "Brand Pages & Content",
      "Creator Applications",
    ],
    position: "bottom-right" as const,
  },
];

const SVG_W = 1200;
const SVG_H = 780;
const CX = SVG_W / 2;
const CY = SVG_H / 2;

// Pills go outward (left side = pills on left, right side = pills on right)
// Labels go between node and pills
const positions: Record<string, { nx: number; ny: number; pillDir: "left" | "right"; pillAnchorX: number; labelDy: number; subtitleDy: number }> = {
  "top-left":     { nx: 370, ny: 200, pillDir: "left",  pillAnchorX: 370 - 65, labelDy: 50, subtitleDy: 65 },
  "top-right":    { nx: 830, ny: 200, pillDir: "right", pillAnchorX: 830 + 65, labelDy: 50, subtitleDy: 65 },
  "bottom-left":  { nx: 370, ny: 580, pillDir: "left",  pillAnchorX: 370 - 65, labelDy: -50, subtitleDy: -38 },
  "bottom-right": { nx: 830, ny: 580, pillDir: "right", pillAnchorX: 830 + 65, labelDy: -50, subtitleDy: -38 },
};

const PILL_W = 195;
const PILL_H = 28;
const PILL_GAP = 5;
const NODE_R = 30;

const ProductEcosystemChart = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full h-auto"
        style={{ minWidth: 900 }}
      >
        {/* Hub-to-node connections */}
        {deliverables.map((d, i) => {
          const pos = positions[d.position];
          const active = hovered === null || hovered === i;
          return (
            <path
              key={`conn-${i}`}
              d={`M ${CX},${CY} C ${(CX + pos.nx) / 2},${CY} ${(CX + pos.nx) / 2},${pos.ny} ${pos.nx},${pos.ny}`}
              fill="none"
              stroke={`hsl(${d.color})`}
              strokeWidth={hovered === i ? 2.5 : 1.5}
              strokeDasharray={hovered === i ? "none" : "6 4"}
              opacity={active ? 0.45 : 0.1}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Deliverable groups */}
        {deliverables.map((d, i) => {
          const Icon = d.icon;
          const pos = positions[d.position];
          const isHovered = hovered === i;
          const totalPillH = d.features.length * (PILL_H + PILL_GAP) - PILL_GAP;
          const pillStartY = pos.ny - totalPillH / 2;
          const isLeft = pos.pillDir === "left";
          const pillX = isLeft ? pos.pillAnchorX - PILL_W : pos.pillAnchorX;

          return (
            <g
              key={d.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "default" }}
            >
              {/* Feature-to-node lines */}
              {d.features.map((_, fi) => {
                const fy = pillStartY + fi * (PILL_H + PILL_GAP) + PILL_H / 2;
                const lineStartX = isLeft ? pillX + PILL_W + 2 : pillX - 2;
                const lineEndX = isLeft ? pos.nx - NODE_R - 4 : pos.nx + NODE_R + 4;
                return (
                  <line
                    key={fi}
                    x1={lineStartX}
                    y1={fy}
                    x2={lineEndX}
                    y2={pos.ny}
                    stroke={`hsl(${d.color})`}
                    strokeWidth={0.8}
                    opacity={isHovered ? 0.3 : 0.08}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Feature pills */}
              {d.features.map((f, fi) => {
                const fy = pillStartY + fi * (PILL_H + PILL_GAP);
                return (
                  <g key={f}>
                    <rect
                      x={pillX}
                      y={fy}
                      width={PILL_W}
                      height={PILL_H}
                      rx={8}
                      fill={isHovered ? `hsl(${d.color} / 0.07)` : "hsl(var(--card))"}
                      stroke={isHovered ? `hsl(${d.color} / 0.35)` : "hsl(var(--border))"}
                      strokeWidth={1}
                      className="transition-all duration-200"
                    />
                    <text
                      x={pillX + PILL_W / 2}
                      y={fy + PILL_H / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isHovered ? `hsl(${d.color})` : "hsl(var(--foreground))"}
                      fontSize={11}
                      fontFamily="Inter, sans-serif"
                      fontWeight={500}
                      className="transition-all duration-200"
                    >
                      {f}
                    </text>
                  </g>
                );
              })}

              {/* Node circle */}
              <circle
                cx={pos.nx}
                cy={pos.ny}
                r={isHovered ? NODE_R + 3 : NODE_R}
                fill={`hsl(${d.color})`}
                className="transition-all duration-300"
                style={{
                  filter: isHovered
                    ? `drop-shadow(0 8px 24px hsl(${d.color} / 0.5))`
                    : `drop-shadow(0 4px 12px hsl(${d.color} / 0.25))`,
                }}
              />
              <foreignObject x={pos.nx - 14} y={pos.ny - 14} width={28} height={28}>
                <div className="flex items-center justify-center w-full h-full">
                  <Icon size={20} color="hsl(var(--card))" />
                </div>
              </foreignObject>

              {/* Labels */}
              <text
                x={pos.nx}
                y={pos.ny + pos.labelDy}
                textAnchor="middle"
                fill="hsl(var(--foreground))"
                fontSize={13}
                fontFamily="Space Grotesk, sans-serif"
                fontWeight={700}
              >
                {d.label}
              </text>
              <text
                x={pos.nx}
                y={pos.ny + pos.subtitleDy}
                textAnchor="middle"
                fill="hsl(var(--muted-foreground))"
                fontSize={10}
                fontFamily="JetBrains Mono, monospace"
              >
                {d.subtitle} · {d.features.length} features
              </text>
            </g>
          );
        })}

        {/* Center Hub */}
        <circle cx={CX} cy={CY} r={52} fill="none" stroke="hsl(var(--primary) / 0.12)" strokeWidth={1.5} strokeDasharray="4 3" />
        <circle
          cx={CX}
          cy={CY}
          r={44}
          fill="hsl(var(--primary))"
          style={{ filter: "drop-shadow(0 8px 32px hsl(var(--primary) / 0.35))" }}
        />
        <foreignObject x={CX - 18} y={CY - 18} width={36} height={36}>
          <div className="flex items-center justify-center w-full h-full">
            <Bot size={30} color="hsl(var(--primary-foreground))" />
          </div>
        </foreignObject>
        <text
          x={CX}
          y={CY + 62}
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize={18}
          fontFamily="Space Grotesk, sans-serif"
          fontWeight={800}
          letterSpacing="-0.03em"
        >
          LUUP 3.0
        </text>
        <text
          x={CX}
          y={CY + 78}
          textAnchor="middle"
          fill="hsl(var(--muted-foreground))"
          fontSize={10}
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="0.15em"
        >
          PLATFORM
        </text>
      </svg>
    </div>
  );
};

export default ProductEcosystemChart;
