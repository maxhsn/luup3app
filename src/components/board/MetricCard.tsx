interface MetricCardProps {
  label: string;
  value: string;
  detail?: string;
  icon?: string;
}

const MetricCard = ({ label, value, detail, icon }: MetricCardProps) => (
  <div className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-1 shadow-sm animate-scale-in min-w-[140px]">
    <div className="flex items-center gap-2">
      {icon && <span className="text-sm">{icon}</span>}
      <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">{label}</span>
    </div>
    <span className="text-2xl font-bold text-foreground tracking-tight leading-none mt-1">{value}</span>
    {detail && <span className="text-[11px] text-muted-foreground mt-0.5">{detail}</span>}
  </div>
);

export default MetricCard;
