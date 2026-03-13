import { useState, useRef, useCallback } from "react";
import BoardToolbar from "@/components/board/BoardToolbar";
import StrategySection from "@/components/board/StrategySection";
import MVPSection from "@/components/board/MVPSection";
import UserJourneySection from "@/components/board/UserJourneySection";

const SECTIONS = ["Strategy", "MVP Features", "User Journey"];

const Index = () => {
  const [zoom, setZoom] = useState(0.85);
  const [activeSection, setActiveSection] = useState("Strategy");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.1, 2)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.1, 0.3)), []);
  const handleFit = useCallback(() => setZoom(0.85), []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      setZoom((z) => Math.min(Math.max(z - e.deltaY * 0.001, 0.3), 2));
    }
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <BoardToolbar
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onFit={handleFit}
        activeSection={activeSection}
        sections={SECTIONS}
        onSectionChange={setActiveSection}
      />
      <div
        ref={containerRef}
        className="flex-1 board-grid overflow-auto pt-14"
        onWheel={handleWheel}
      >
        <div
          className="p-8 min-w-max origin-top-left transition-transform duration-200"
          style={{ transform: `scale(${zoom})` }}
        >
          <div className="max-w-[1600px] mx-auto">
            {activeSection === "Strategy" && <StrategySection />}
            {activeSection === "MVP Features" && <MVPSection />}
            {activeSection === "User Journey" && <UserJourneySection />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
