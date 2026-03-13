import { useState, useRef } from "react";

export type StickyColor = "yellow" | "blue" | "green" | "pink" | "orange" | "purple";

interface StickyNoteProps {
  title: string;
  items?: string[];
  description?: string;
  color: StickyColor;
  className?: string;
  icon?: string;
}

const colorMap: Record<StickyColor, { bg: string; fg: string; border: string }> = {
  yellow: { bg: "bg-sticky-yellow", fg: "text-sticky-yellow-fg", border: "border-sticky-yellow/40" },
  blue: { bg: "bg-sticky-blue", fg: "text-sticky-blue-fg", border: "border-sticky-blue/40" },
  green: { bg: "bg-sticky-green", fg: "text-sticky-green-fg", border: "border-sticky-green/40" },
  pink: { bg: "bg-sticky-pink", fg: "text-sticky-pink-fg", border: "border-sticky-pink/40" },
  orange: { bg: "bg-sticky-orange", fg: "text-sticky-orange-fg", border: "border-sticky-orange/40" },
  purple: { bg: "bg-sticky-purple", fg: "text-sticky-purple-fg", border: "border-sticky-purple/40" },
};

const StickyNote = ({ title, items, description, color, className = "", icon }: StickyNoteProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const c = colorMap[color];

  return (
    <div
      className={`${c.bg} ${c.fg} rounded-lg p-4 sticky-shadow hover:sticky-shadow-hover transition-all duration-200 cursor-pointer select-none animate-pop-in ${className}`}
      style={{ minWidth: 180, maxWidth: 280 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start gap-2">
        {icon && <span className="text-lg flex-shrink-0">{icon}</span>}
        <h3 className="font-display font-semibold text-sm leading-tight">{title}</h3>
      </div>
      {description && (
        <p className={`text-xs mt-2 opacity-80 leading-relaxed ${!isExpanded && items && items.length > 0 ? "line-clamp-2" : ""}`}>
          {description}
        </p>
      )}
      {items && items.length > 0 && (
        <ul className={`mt-2 space-y-1 text-xs opacity-80 ${!isExpanded ? "max-h-16 overflow-hidden" : ""}`}>
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="mt-0.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {items && items.length > 3 && (
        <p className="text-[10px] mt-1.5 opacity-50 font-medium">
          {isExpanded ? "Click to collapse" : `+${items.length - 2} more · Click to expand`}
        </p>
      )}
    </div>
  );
};

export default StickyNote;
