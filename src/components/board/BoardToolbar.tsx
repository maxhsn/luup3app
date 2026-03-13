import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface BoardToolbarProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFit: () => void;
  activeSection: string;
  sections: string[];
  onSectionChange: (section: string) => void;
}

const TAB_META: Record<string, { desc: string; icon: string }> = {
  Strategy: { desc: "Vision, positioning & strategic shifts", icon: "🎯" },
  Architecture: { desc: "Platform layers, participants & ecosystems", icon: "🏗️" },
  Product: { desc: "Feature stack, deliverables & onboarding", icon: "📦" },
  Growth: { desc: "User journeys, referrals & go-to-market", icon: "🚀" },
  Commercial: { desc: "Pricing, messaging & positioning", icon: "💰" },
};

const BoardToolbar = ({ zoom, onZoomIn, onZoomOut, onFit, activeSection, sections, onSectionChange }: BoardToolbarProps) => {
  const meta = TAB_META[activeSection];
  const activeIdx = sections.indexOf(activeSection);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <div>
              <h1 className="font-display font-extrabold text-lg text-foreground leading-none">LUUP 3.0</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Strategy Board</p>
            </div>
          </div>
          <nav className="flex gap-1 bg-muted rounded-xl p-1">
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => onSectionChange(s)}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                  activeSection === s
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* Tab context */}
          {meta && (
            <div className="flex items-center gap-2 mr-2">
              <span className="text-base">{meta.icon}</span>
              <span className="text-xs text-muted-foreground max-w-[200px] leading-tight">{meta.desc}</span>
            </div>
          )}
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-1 bg-muted rounded-xl p-1">
            <button onClick={onZoomOut} className="p-2 hover:bg-card rounded-lg text-muted-foreground hover:text-foreground transition-colors">
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-muted-foreground w-12 text-center">{Math.round(zoom * 100)}%</span>
            <button onClick={onZoomIn} className="p-2 hover:bg-card rounded-lg text-muted-foreground hover:text-foreground transition-colors">
              <ZoomIn className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-border" />
            <button onClick={onFit} className="p-2 hover:bg-card rounded-lg text-muted-foreground hover:text-foreground transition-colors">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Progress bar */}
      <div className="h-0.5 bg-muted relative">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((activeIdx + 1) / sections.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default BoardToolbar;
