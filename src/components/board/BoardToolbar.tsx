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
    <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-border px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <div>
            <h1 className="font-semibold text-[15px] text-foreground tracking-tight leading-none">LUUP 3.0</h1>
            <p className="text-[11px] text-muted-foreground tracking-tight">Strategy Board</p>
          </div>
        </div>
        <div className="h-6 w-px bg-border" />
        <nav className="flex gap-1 bg-muted rounded-xl p-1">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => onSectionChange(s)}
              className={`px-4 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                activeSection === s
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-[10px] opacity-50">{sectionIcons[s]}</span>
              {s}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1 bg-muted rounded-xl p-1">
        <button onClick={onZoomOut} className="p-2 hover:bg-card rounded-lg text-muted-foreground hover:text-foreground transition-all duration-200">
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
        <span className="text-[12px] font-medium text-muted-foreground w-11 text-center tabular-nums">{Math.round(zoom * 100)}%</span>
        <button onClick={onZoomIn} className="p-2 hover:bg-card rounded-lg text-muted-foreground hover:text-foreground transition-all duration-200">
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
        <div className="w-px h-4 bg-border" />
        <button onClick={onFit} className="p-2 hover:bg-card rounded-lg text-muted-foreground hover:text-foreground transition-all duration-200">
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default BoardToolbar;
