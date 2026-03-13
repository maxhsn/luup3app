import { ZoomIn, ZoomOut, Maximize2, Layers } from "lucide-react";

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
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Layers className="w-4 h-4 text-primary-foreground" />
          </div>
          <h1 className="font-display font-bold text-base text-foreground">LUUP 3.0 Strategy Board</h1>
        </div>
        <div className="h-5 w-px bg-border mx-1" />
        <div className="flex gap-1">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => onSectionChange(s)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                activeSection === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
        <button onClick={onZoomOut} className="p-1.5 hover:bg-card rounded text-muted-foreground hover:text-foreground transition-colors">
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-xs font-medium text-muted-foreground w-12 text-center">{Math.round(zoom * 100)}%</span>
        <button onClick={onZoomIn} className="p-1.5 hover:bg-card rounded text-muted-foreground hover:text-foreground transition-colors">
          <ZoomIn className="w-4 h-4" />
        </button>
        <div className="w-px h-4 bg-border" />
        <button onClick={onFit} className="p-1.5 hover:bg-card rounded text-muted-foreground hover:text-foreground transition-colors">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BoardToolbar;
