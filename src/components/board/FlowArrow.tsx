interface FlowArrowProps {
  direction?: "right" | "down";
  label?: string;
  className?: string;
}

const FlowArrow = ({ direction = "right", label, className = "" }: FlowArrowProps) => {
  if (direction === "down") {
    return (
      <div className={`flex flex-col items-center gap-1 py-3 ${className}`}>
        <div className="w-px h-8 bg-border" />
        {label && (
          <span className="text-xs text-muted-foreground font-medium px-2.5 py-0.5 bg-muted rounded-full">
            {label}
          </span>
        )}
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-border">
          <path d="M5 6L0 0h10z" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1.5 px-1 flex-shrink-0 ${className}`}>
      <div className="h-px w-8 bg-border" />
      {label && (
        <span className="text-xs text-muted-foreground font-medium whitespace-nowrap px-2 py-0.5 bg-muted rounded-full">
          {label}
        </span>
      )}
      <svg width="6" height="10" viewBox="0 0 6 10" className="text-border">
        <path d="M6 5L0 0v10z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default FlowArrow;
