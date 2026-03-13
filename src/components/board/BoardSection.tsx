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
    <div className={`section-frame p-10 relative animate-fade-in ${className}`}>
      <div className="absolute -top-4 left-10 px-5 py-1.5 rounded-full glass border border-border font-display font-bold text-base text-foreground tracking-tight flex items-center gap-2.5 shadow-sm">
        {color && <span className="text-base">{color}</span>}
        {title}
      </div>
      {subtitle && (
        <p className="text-base text-muted-foreground mt-3 mb-6 font-normal">{subtitle}</p>
      )}
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
};

export default BoardSection;
