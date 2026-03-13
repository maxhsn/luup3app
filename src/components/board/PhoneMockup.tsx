import { ReactNode } from "react";

interface PhoneMockupProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const PhoneMockup = ({ title, children, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="wireframe-shell w-[260px] overflow-hidden shadow-lg">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-1">
          <span className="text-xs text-muted-foreground font-medium">9:41</span>
          <div className="w-20 h-5 rounded-full bg-foreground/10" />
          <div className="flex gap-1.5">
            <div className="w-4 h-2.5 rounded-sm bg-muted-foreground/30" />
            <div className="w-4 h-2.5 rounded-sm bg-muted-foreground/30" />
          </div>
        </div>
        {/* Nav bar */}
        <div className="px-5 py-2.5 border-b border-border">
          <p className="text-sm font-display font-bold text-foreground text-center tracking-tight">{title}</p>
        </div>
        {/* Content */}
        <div className="p-4 space-y-2.5 min-h-[320px]">
          {children}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center py-3">
          <div className="w-28 h-1.5 rounded-full bg-foreground/15" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;

// Reusable wireframe blocks
export const WireBlock = ({ label, height = "h-10", accent }: { label: string; height?: string; accent?: boolean }) => (
  <div className={`${height} rounded-xl ${accent ? "bg-primary/10 border border-primary/20" : "bg-muted border border-border"} flex items-center justify-center`}>
    <span className={`text-xs font-medium ${accent ? "text-primary" : "text-muted-foreground"}`}>{label}</span>
  </div>
);

export const WireList = ({ items }: { items: string[] }) => (
  <div className="space-y-2">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg bg-muted/50">
        <div className="w-5 h-5 rounded bg-muted border border-border flex-shrink-0" />
        <span className="text-xs text-muted-foreground truncate">{item}</span>
      </div>
    ))}
  </div>
);
