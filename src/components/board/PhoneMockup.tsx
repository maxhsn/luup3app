import { ReactNode } from "react";

interface PhoneMockupProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const PhoneMockup = ({ title, children, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="wireframe-shell w-[220px] overflow-hidden shadow-lg">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[9px] text-muted-foreground font-medium">9:41</span>
          <div className="w-16 h-4 rounded-full bg-foreground/10" />
          <div className="flex gap-1">
            <div className="w-3 h-2 rounded-sm bg-muted-foreground/30" />
            <div className="w-3 h-2 rounded-sm bg-muted-foreground/30" />
          </div>
        </div>
        {/* Nav bar */}
        <div className="px-4 py-2 border-b border-border">
          <p className="text-[11px] font-semibold text-foreground text-center tracking-tight">{title}</p>
        </div>
        {/* Content */}
        <div className="p-3 space-y-2 min-h-[280px]">
          {children}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center py-2">
          <div className="w-24 h-1 rounded-full bg-foreground/15" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;

// Reusable wireframe blocks
export const WireBlock = ({ label, height = "h-8", accent }: { label: string; height?: string; accent?: boolean }) => (
  <div className={`${height} rounded-lg ${accent ? "bg-primary/10 border border-primary/20" : "bg-muted border border-border"} flex items-center justify-center`}>
    <span className={`text-[9px] font-medium ${accent ? "text-primary" : "text-muted-foreground"}`}>{label}</span>
  </div>
);

export const WireList = ({ items }: { items: string[] }) => (
  <div className="space-y-1.5">
    {items.map((item, i) => (
      <div key={i} className="flex items-center gap-2 py-1 px-2 rounded-md bg-muted/50">
        <div className="w-4 h-4 rounded bg-muted border border-border flex-shrink-0" />
        <span className="text-[9px] text-muted-foreground truncate">{item}</span>
      </div>
    ))}
  </div>
);
