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
      <div className="flex items-end gap-6 mb-8">
        {number && (
          <span className="text-[6rem] font-display font-black tracking-[-0.06em] leading-none text-border select-none">
            {number}
          </span>
        )}
        <div className="pb-3">
          {tag && <span className="tag-accent mb-2 inline-block">{tag}</span>}
          <h2 className="font-display text-3xl font-black text-foreground tracking-tight">{title}</h2>
          {subtitle && <p className="text-base text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BoardSection;
