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
      <div className="flex items-end gap-6 mb-10">
        {number && <span className="section-number">{number}</span>}
        <div className="pb-2">
          {tag && <span className="tag-accent mb-2 inline-block">{tag}</span>}
          <h2 className="font-display text-3xl font-extrabold text-foreground">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BoardSection;
