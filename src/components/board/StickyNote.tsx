import { useState } from "react";

export type StickyColor = "yellow" | "blue" | "green" | "pink" | "orange" | "purple";

interface StickyNoteProps {
  title: string;
  items?: string[];
  description?: string;
  color: StickyColor;
  className?: string;
  icon?: string;
  compact?: boolean;
}

const colorMap: Record<StickyColor, { bg: string; fg: string; accent: string }> = {
  yellow: { bg: "bg-sticky-yellow", fg: "text-sticky-yellow-fg", accent: "bg-sticky-yellow-fg/10" },
  blue: { bg: "bg-sticky-blue", fg: "text-sticky-blue-fg", accent: "bg-sticky-blue-fg/10" },
  green: { bg: "bg-sticky-green", fg: "text-sticky-green-fg", accent: "bg-sticky-green-fg/10" },
  pink: { bg: "bg-sticky-pink", fg: "text-sticky-pink-fg", accent: "bg-sticky-pink-fg/10" },
  orange: { bg: "bg-sticky-orange", fg: "text-sticky-orange-fg", accent: "bg-sticky-orange-fg/10" },
  purple: { bg: "bg-sticky-purple", fg: "text-sticky-purple-fg", accent: "bg-sticky-purple-fg/10" },
};

const StickyNote = ({ title, items, description, color, className = "", icon, compact }: StickyNoteProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const c = colorMap[color];

  return (
    <div
      className={`${c.bg} ${c.fg} rounded-2xl ${compact ? 'p-5' : 'p-6'} sticky-shadow hover:sticky-shadow-hover transition-all duration-300 cursor-pointer select-none animate-scale-in ${className}`}
      style={{ minWidth: compact ? 160 : 220, maxWidth: compact ? 220 : 340 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <span className={`text-lg flex-shrink-0 w-9 h-9 ${c.accent} rounded-xl flex items-center justify-center`}>
            {icon}
          </span>
        )}
        <h3 className="font-display font-bold text-base leading-snug tracking-tight">{title}</h3>
      </div>
      {description && (
        <p className={`text-sm mt-3 opacity-70 leading-relaxed font-normal ${!isExpanded && items && items.length > 0 ? "line-clamp-2" : ""}`}>
          {description}
        </p>
      )}
      {items && items.length > 0 && (
        <ul className={`mt-3 space-y-1.5 text-sm opacity-70 ${!isExpanded ? "max-h-24 overflow-hidden" : ""}`}>
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-50" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
      {items && items.length > 3 && (
        <p className="text-xs mt-3 opacity-40 font-semibold tracking-wide uppercase">
          {isExpanded ? "Collapse" : `+${items.length - 2} more`}
        </p>
      )}
    </div>
  );
};

export default StickyNote;
