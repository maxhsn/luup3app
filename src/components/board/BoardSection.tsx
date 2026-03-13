import { ReactNode } from "react";

interface BoardSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  color?: string;
}

const BoardSection = ({ title, subtitle, children, className = "", color }: BoardSectionProps) => {
  return (
    <div className={`section-frame p-6 relative ${className}`}>
      <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-card font-display font-bold text-sm text-foreground border border-border">
        {color && <span className="mr-1.5">{color}</span>}
        {title}
      </div>
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-2 mb-4 font-body">{subtitle}</p>
      )}
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default BoardSection;
