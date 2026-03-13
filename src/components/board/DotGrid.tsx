interface DotGridProps {
  rows?: number;
  cols?: number;
  color?: string;
  size?: number;
  gap?: number;
  className?: string;
  pattern?: "full" | "triangle" | "wave" | "scatter" | "chart";
}

const DotGrid = ({ rows = 8, cols = 12, color = "hsl(var(--primary))", size = 4, gap = 12, className = "", pattern = "full" }: DotGridProps) => {
  const dots: { x: number; y: number; opacity: number }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let opacity = 1;
      let show = true;

      switch (pattern) {
        case "triangle":
          show = c <= r * (cols / rows);
          break;
        case "wave":
          opacity = Math.abs(Math.sin((c / cols) * Math.PI * 2 + (r / rows) * Math.PI)) * 0.8 + 0.2;
          break;
        case "scatter":
          show = Math.random() > 0.4;
          opacity = Math.random() * 0.6 + 0.4;
          break;
        case "chart": {
          const chartY = Math.floor(rows - (Math.sin((c / cols) * Math.PI * 1.5 + 0.5) * rows * 0.6 + rows * 0.2));
          show = r >= chartY;
          opacity = r === chartY ? 1 : 0.3;
          break;
        }
        default:
          break;
      }

      if (show) {
        dots.push({ x: c * gap, y: r * gap, opacity });
      }
    }
  }

  const width = (cols - 1) * gap + size;
  const height = (rows - 1) * gap + size;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className}>
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.x + size / 2} cy={dot.y + size / 2} r={size / 2} fill={color} opacity={dot.opacity} />
      ))}
    </svg>
  );
};

export default DotGrid;
