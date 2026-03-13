import { ReactNode } from "react";

interface BoardSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  tag?: string;
}

const BoardSection = ({ title, subtitle, children, className = "", tag }: BoardSectionProps) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        {tag && <span className="tag-accent font-mono">{tag}</span>}
        <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-base text-muted-foreground mb-8 -mt-3">{subtitle}</p>
      )}
      <div>
        {children}
      </div>
    </div>
  );
};

export default BoardSection;
