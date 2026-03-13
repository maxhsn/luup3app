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
    <div className={`section-frame p-8 relative animate-fade-in ${className}`}>
      <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full glass border border-border font-semibold text-sm text-foreground tracking-tight flex items-center gap-2">
        {color && <span>{color}</span>}
        {title}
      </div>
      {subtitle && (
        <p className="text-[13px] text-muted-foreground mt-2 mb-5 font-normal tracking-tight">{subtitle}</p>
      )}
      <div className="mt-5">
        {children}
      </div>
    </div>
  );
};

export default BoardSection;
