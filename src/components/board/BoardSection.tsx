import { ReactNode } from "react";

interface BoardSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  tag?: string;
  number?: string;
}

const BoardSection = ({ title, subtitle, children, className = "", tag, number }: BoardSectionProps) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      {/* Divider line */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-border" />
        {tag && <span className="tag-accent">{tag}</span>}
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex items-end gap-6 mb-8">
        {number && (
          <span className="text-[6rem] font-display font-black tracking-[-0.06em] leading-none text-border select-none">
            {number}
          </span>
        )}
        <div className="pb-3 border-l-4 border-primary pl-5">
          <h2 className="font-display text-3xl font-black text-foreground tracking-tight">{title}</h2>
          {subtitle && <p className="text-base text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BoardSection;
