import { useState } from "react";
import { Building2, Users, ShoppingBag, Smartphone, Target, Sparkles, Bot } from "lucide-react";

const groups = [
  {
    label: "Merchant Tools",
    icon: Building2,
    color: "var(--stage-onboarding)",
    features: ["Core Activation Engine", "Merchant Dashboard", "Join Pages & Funnels", "Template Pages"],
    side: "left" as const,
  },
  {
    label: "Customer & Creator",
    icon: Users,
    color: "var(--stage-participation)",
    features: ["User Profiles", "Creator Applications", "Personal Communities"],
    side: "left" as const,
  },
  {
    label: "Storefronts & Commerce",
    icon: ShoppingBag,
    color: "var(--stage-conversion)",
    features: ["Personal Storefronts", "Codes & Referrals", "Wallet & Withdrawals", "4-Tier Referral Engine"],
    side: "left" as const,
  },
  {
    label: "Social & Content",
    icon: Smartphone,
    color: "var(--stage-network)",
    features: ["Brand Pages", "Social Wall Feed", "UGC Engine"],
    side: "right" as const,
  },
  {
    label: "Engagement",
    icon: Target,
    color: "var(--stage-earnings)",
    features: ["Missions Engine", "Leaderboards", "Notifications"],
    side: "right" as const,
  },
  {
    label: "Discovery & AI",
    icon: Sparkles,
    color: "var(--stage-discovery)",
    features: ["Ecosystem Layer", "Ecosystem Tagging", "AI Automation"],
    side: "right" as const,
  },
];

// Layout constants
const SVG_W = 1100;
const SVG_H = 620;
const HUB_X = SVG_W / 2;
const HUB_Y = SVG_H / 2;
const HUB_R = 44;

const LEFT_NODE_X = HUB_X - 200;
const RIGHT_NODE_X = HUB_X + 200;
const NODE_R = 28;

const LEFT_ROWS = [0, 1, 2];
const RIGHT_ROWS = [3, 4, 5];

const getNodeY = (rowIdx: number) => {
  const spacing = 170;
  const startY = HUB_Y - spacing;
  return startY + rowIdx * spacing;
};

const ProductEcosystemChart = () => {
  const [hoveredGroup, setHoveredGroup] = useState<number | null>(null);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="w-full h-auto"
        style={{ minWidth: 700, maxWidth: 1100 }}
      >
        <defs>
          {groups.map((g, i) => (
            <linearGradient key={`grad-${i}`} id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={`hsl(${g.color})`} stopOpacity="0.15" />
              <stop offset="100%" stopColor={`hsl(${g.color})`} stopOpacity="0.03" />
            </linearGradient>
          ))}
        </defs>

        {/* Connection lines from hub to group nodes */}
        {LEFT_ROWS.map((gi, rowIdx) => {
          const ny = getNodeY(rowIdx);
          const active = hoveredGroup === null || hoveredGroup === gi;
          return (
            <path
              key={`line-l-${gi}`}
              d={`M ${HUB_X - HUB_R - 4},${HUB_Y} C ${HUB_X - 100},${HUB_Y} ${LEFT_NODE_X + 80},${ny} ${LEFT_NODE_X + NODE_R + 4},${ny}`}
              fill="none"
              stroke={`hsl(${groups[gi].color})`}
              strokeWidth={hoveredGroup === gi ? 2.5 : 1.5}
              strokeDasharray={hoveredGroup === gi ? "none" : "6 4"}
              opacity={active ? 0.5 : 0.12}
              className="transition-all duration-300"
            />
          );
        })}
        {RIGHT_ROWS.map((gi, rowIdx) => {
          const ny = getNodeY(rowIdx);
          const active = hoveredGroup === null || hoveredGroup === gi;
          return (
            <path
              key={`line-r-${gi}`}
              d={`M ${HUB_X + HUB_R + 4},${HUB_Y} C ${HUB_X + 100},${HUB_Y} ${RIGHT_NODE_X - 80},${ny} ${RIGHT_NODE_X - NODE_R - 4},${ny}`}
              fill="none"
              stroke={`hsl(${groups[gi].color})`}
              strokeWidth={hoveredGroup === gi ? 2.5 : 1.5}
              strokeDasharray={hoveredGroup === gi ? "none" : "6 4"}
              opacity={active ? 0.5 : 0.12}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Left groups */}
        {LEFT_ROWS.map((gi, rowIdx) => {
          const g = groups[gi];
          const Icon = g.icon;
          const ny = getNodeY(rowIdx);
          const isHovered = hoveredGroup === gi;
          const featurePillW = 160;
          const featurePillH = 32;
          const featureGap = 6;
          const totalFeatureH = g.features.length * (featurePillH + featureGap) - featureGap;
          const featureStartY = ny - totalFeatureH / 2;
          const pillX = LEFT_NODE_X - NODE_R - 28 - featurePillW;

          return (
            <g
              key={g.label}
              onMouseEnter={() => setHoveredGroup(gi)}
              onMouseLeave={() => setHoveredGroup(null)}
              style={{ cursor: "default" }}
            >
              {/* Feature connection lines */}
              {g.features.map((_, fi) => {
                const fy = featureStartY + fi * (featurePillH + featureGap) + featurePillH / 2;
                return (
                  <line
                    key={fi}
                    x1={pillX + featurePillW}
                    y1={fy}
                    x2={LEFT_NODE_X - NODE_R - 6}
                    y2={ny}
                    stroke={`hsl(${g.color})`}
                    strokeWidth={1}
                    opacity={isHovered ? 0.35 : 0.12}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Feature pills */}
              {g.features.map((f, fi) => {
                const fy = featureStartY + fi * (featurePillH + featureGap);
                return (
                  <g key={f}>
                    <rect
                      x={pillX}
                      y={fy}
                      width={featurePillW}
                      height={featurePillH}
                      rx={10}
                      fill={isHovered ? `hsl(${g.color} / 0.08)` : "hsl(var(--card))"}
                      stroke={isHovered ? `hsl(${g.color} / 0.4)` : "hsl(var(--border))"}
                      strokeWidth={1}
                      className="transition-all duration-300"
                    />
                    <text
                      x={pillX + featurePillW / 2}
                      y={fy + featurePillH / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isHovered ? `hsl(${g.color})` : "hsl(var(--foreground))"}
                      fontSize={11}
                      fontFamily="Inter, sans-serif"
                      fontWeight={500}
                      className="transition-all duration-300"
                    >
                      {f}
                    </text>
                  </g>
                );
              })}

              {/* Group node circle */}
              <circle
                cx={LEFT_NODE_X}
                cy={ny}
                r={isHovered ? NODE_R + 3 : NODE_R}
                fill={`hsl(${g.color})`}
                className="transition-all duration-300"
                style={{
                  filter: isHovered
                    ? `drop-shadow(0 6px 20px hsl(${g.color} / 0.45))`
                    : `drop-shadow(0 3px 10px hsl(${g.color} / 0.25))`,
                }}
              />
              {/* Icon placeholder */}
              <foreignObject x={LEFT_NODE_X - 12} y={ny - 12} width={24} height={24}>
                <div className="flex items-center justify-center w-full h-full">
                  <Icon size={18} color="hsl(var(--card))" />
                </div>
              </foreignObject>

              {/* Label */}
              <text
                x={LEFT_NODE_X}
                y={ny + NODE_R + 18}
                textAnchor="middle"
                fill="hsl(var(--foreground))"
                fontSize={13}
                fontFamily="Space Grotesk, sans-serif"
                fontWeight={700}
              >
                {g.label}
              </text>
              <text
                x={LEFT_NODE_X}
                y={ny + NODE_R + 34}
                textAnchor="middle"
                fill="hsl(var(--muted-foreground))"
                fontSize={10}
                fontFamily="JetBrains Mono, monospace"
              >
                {g.features.length} features
              </text>
            </g>
          );
        })}

        {/* Right groups */}
        {RIGHT_ROWS.map((gi, rowIdx) => {
          const g = groups[gi];
          const Icon = g.icon;
          const ny = getNodeY(rowIdx);
          const isHovered = hoveredGroup === gi;
          const featurePillW = 160;
          const featurePillH = 32;
          const featureGap = 6;
          const totalFeatureH = g.features.length * (featurePillH + featureGap) - featureGap;
          const featureStartY = ny - totalFeatureH / 2;
          const pillX = RIGHT_NODE_X + NODE_R + 28;

          return (
            <g
              key={g.label}
              onMouseEnter={() => setHoveredGroup(gi)}
              onMouseLeave={() => setHoveredGroup(null)}
              style={{ cursor: "default" }}
            >
              {/* Feature connection lines */}
              {g.features.map((_, fi) => {
                const fy = featureStartY + fi * (featurePillH + featureGap) + featurePillH / 2;
                return (
                  <line
                    key={fi}
                    x1={RIGHT_NODE_X + NODE_R + 6}
                    y1={ny}
                    x2={pillX}
                    y2={fy}
                    stroke={`hsl(${g.color})`}
                    strokeWidth={1}
                    opacity={isHovered ? 0.35 : 0.12}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Feature pills */}
              {g.features.map((f, fi) => {
                const fy = featureStartY + fi * (featurePillH + featureGap);
                return (
                  <g key={f}>
                    <rect
                      x={pillX}
                      y={fy}
                      width={featurePillW}
                      height={featurePillH}
                      rx={10}
                      fill={isHovered ? `hsl(${g.color} / 0.08)` : "hsl(var(--card))"}
                      stroke={isHovered ? `hsl(${g.color} / 0.4)` : "hsl(var(--border))"}
                      strokeWidth={1}
                      className="transition-all duration-300"
                    />
                    <text
                      x={pillX + featurePillW / 2}
                      y={fy + featurePillH / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isHovered ? `hsl(${g.color})` : "hsl(var(--foreground))"}
                      fontSize={11}
                      fontFamily="Inter, sans-serif"
                      fontWeight={500}
                      className="transition-all duration-300"
                    >
                      {f}
                    </text>
                  </g>
                );
              })}

              {/* Group node circle */}
              <circle
                cx={RIGHT_NODE_X}
                cy={ny}
                r={isHovered ? NODE_R + 3 : NODE_R}
                fill={`hsl(${g.color})`}
                className="transition-all duration-300"
                style={{
                  filter: isHovered
                    ? `drop-shadow(0 6px 20px hsl(${g.color} / 0.45))`
                    : `drop-shadow(0 3px 10px hsl(${g.color} / 0.25))`,
                }}
              />
              <foreignObject x={RIGHT_NODE_X - 12} y={ny - 12} width={24} height={24}>
                <div className="flex items-center justify-center w-full h-full">
                  <Icon size={18} color="hsl(var(--card))" />
                </div>
              </foreignObject>

              {/* Label */}
              <text
                x={RIGHT_NODE_X}
                y={ny + NODE_R + 18}
                textAnchor="middle"
                fill="hsl(var(--foreground))"
                fontSize={13}
                fontFamily="Space Grotesk, sans-serif"
                fontWeight={700}
              >
                {g.label}
              </text>
              <text
                x={RIGHT_NODE_X}
                y={ny + NODE_R + 34}
                textAnchor="middle"
                fill="hsl(var(--muted-foreground))"
                fontSize={10}
                fontFamily="JetBrains Mono, monospace"
              >
                {g.features.length} features
              </text>
            </g>
          );
        })}

        {/* Center Hub */}
        <circle
          cx={HUB_X}
          cy={HUB_Y}
          r={HUB_R + 8}
          fill="none"
          stroke="hsl(var(--primary) / 0.15)"
          strokeWidth={1.5}
          strokeDasharray="4 3"
        />
        <circle
          cx={HUB_X}
          cy={HUB_Y}
          r={HUB_R}
          fill="hsl(var(--primary))"
          style={{ filter: "drop-shadow(0 8px 28px hsl(var(--primary) / 0.35))" }}
        />
        <foreignObject x={HUB_X - 18} y={HUB_Y - 18} width={36} height={36}>
          <div className="flex items-center justify-center w-full h-full">
            <Bot size={28} color="hsl(var(--primary-foreground))" />
          </div>
        </foreignObject>
        <text
          x={HUB_X}
          y={HUB_Y + HUB_R + 22}
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
          x={HUB_X}
          y={HUB_Y + HUB_R + 40}
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
