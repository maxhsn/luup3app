interface FlowArrowProps {
  direction?: "right" | "down";
  label?: string;
  className?: string;
}

const FlowArrow = ({ direction = "right", label, className = "" }: FlowArrowProps) => {
  if (direction === "down") {
    return (
      <div className={`flex flex-col items-center gap-0.5 py-2 ${className}`}>
        <div className="w-0.5 h-6 bg-muted-foreground/40" />
        {label && <span className="text-[10px] text-muted-foreground font-medium px-2">{label}</span>}
        <svg width="12" height="8" viewBox="0 0 12 8" className="text-muted-foreground/40">
          <path d="M6 8L0 0h12z" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1 px-1 flex-shrink-0 ${className}`}>
      <div className="h-0.5 w-6 bg-muted-foreground/40" />
      {label && <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">{label}</span>}
      <svg width="8" height="12" viewBox="0 0 8 12" className="text-muted-foreground/40">
        <path d="M8 6L0 0v12z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default FlowArrow;
