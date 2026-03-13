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

const BoardToolbar = ({ zoom, onZoomIn, onZoomOut, onFit, activeSection, sections, onSectionChange }: BoardToolbarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-border px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl font-display">L</span>
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground tracking-tight leading-none">LUUP 3.0</h1>
            <p className="text-xs text-muted-foreground font-mono mt-0.5">STRATEGY_BOARD</p>
          </div>
        </div>
        <div className="h-7 w-px bg-border" />
        <nav className="flex gap-0.5 bg-secondary rounded-xl p-1">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => onSectionChange(s)}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                activeSection === s
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1 bg-secondary rounded-xl p-1">
        <button onClick={onZoomOut} className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors">
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-xs font-mono text-muted-foreground w-12 text-center">{Math.round(zoom * 100)}%</span>
        <button onClick={onZoomIn} className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors">
          <ZoomIn className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-border" />
        <button onClick={onFit} className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BoardToolbar;
