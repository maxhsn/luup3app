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

const sectionIcons: Record<string, string> = {
  "Strategy": "◆",
  "MVP Features": "▣",
  "User Journey": "◎",
};

const BoardToolbar = ({ zoom, onZoomIn, onZoomOut, onFit, activeSection, sections, onSectionChange }: BoardToolbarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-border px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-foreground flex items-center justify-center">
            <span className="text-background font-bold text-lg font-display">L</span>
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground tracking-tight leading-none">LUUP 3.0</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Strategy Board</p>
          </div>
        </div>
        <div className="h-8 w-px bg-border" />
        <nav className="flex gap-1 bg-muted/60 rounded-2xl p-1.5">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => onSectionChange(s)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 ${
                activeSection === s
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-xs opacity-40">{sectionIcons[s]}</span>
              {s}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1.5 bg-muted/60 rounded-2xl p-1.5">
        <button onClick={onZoomOut} className="p-2.5 hover:bg-card rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200">
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-muted-foreground w-12 text-center tabular-nums">{Math.round(zoom * 100)}%</span>
        <button onClick={onZoomIn} className="p-2.5 hover:bg-card rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200">
          <ZoomIn className="w-4 h-4" />
        </button>
        <div className="w-px h-5 bg-border" />
        <button onClick={onFit} className="p-2.5 hover:bg-card rounded-xl text-muted-foreground hover:text-foreground transition-all duration-200">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BoardToolbar;
