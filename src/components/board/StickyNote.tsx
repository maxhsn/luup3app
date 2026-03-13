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
      className={`${c.bg} ${c.fg} rounded-2xl p-5 sticky-shadow hover:sticky-shadow-hover transition-all duration-300 cursor-pointer select-none animate-scale-in ${className}`}
      style={{ minWidth: compact ? 140 : 200, maxWidth: compact ? 200 : 300 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start gap-2.5">
        {icon && (
          <span className={`text-base flex-shrink-0 w-7 h-7 ${c.accent} rounded-lg flex items-center justify-center`}>
            {icon}
          </span>
        )}
        <h3 className="font-semibold text-[13px] leading-snug tracking-tight">{title}</h3>
      </div>
      {description && (
        <p className={`text-[12px] mt-2.5 opacity-70 leading-relaxed font-normal ${!isExpanded && items && items.length > 0 ? "line-clamp-2" : ""}`}>
          {description}
        </p>
      )}
      {items && items.length > 0 && (
        <ul className={`mt-2.5 space-y-1 text-[12px] opacity-70 ${!isExpanded ? "max-h-20 overflow-hidden" : ""}`}>
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 w-1 h-1 rounded-full bg-current flex-shrink-0 opacity-50" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
      {items && items.length > 3 && (
        <p className="text-[10px] mt-2 opacity-40 font-medium tracking-wide uppercase">
          {isExpanded ? "Collapse" : `+${items.length - 2} more`}
        </p>
      )}
    </div>
  );
};

export default StickyNote;
