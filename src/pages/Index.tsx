import { useState, useRef, useCallback } from "react";
import BoardToolbar from "@/components/board/BoardToolbar";
import StrategySection from "@/components/board/StrategySection";
import ArchitectureSection from "@/components/board/ArchitectureSection";
import MVPSection from "@/components/board/MVPSection";
import UserJourneySection from "@/components/board/UserJourneySection";
import CommercialSection from "@/components/board/CommercialSection";

const SECTIONS = ["Strategy", "Architecture", "Product", "Growth", "Commercial"];

const Index = () => {
  const [zoom, setZoom] = useState(1);
  const [activeSection, setActiveSection] = useState("Strategy");
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.1, 2)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.1, 0.3)), []);
  const handleFit = useCallback(() => setZoom(1), []);

  const handleSectionChange = useCallback((section: string) => {
    if (section === activeSection) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      if (containerRef.current) containerRef.current.scrollTop = 0;
      setTimeout(() => setTransitioning(false), 50);
    }, 200);
  }, [activeSection]);

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
        onSectionChange={handleSectionChange}
      />
      <div
        ref={containerRef}
        className="flex-1 board-grid overflow-auto pt-16 md:pt-20"
        onWheel={handleWheel}
      >
        <div
          className="p-4 md:p-12 origin-top-left transition-transform duration-200"
          style={{ transform: `scale(${zoom})` }}
        >
          <div
            className={`max-w-[1800px] mx-auto transition-all duration-200 ${
              transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            {activeSection === "Strategy" && <StrategySection />}
            {activeSection === "Architecture" && <ArchitectureSection />}
            {activeSection === "Product" && <MVPSection />}
            {activeSection === "Growth" && <UserJourneySection />}
            {activeSection === "Commercial" && <CommercialSection />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
