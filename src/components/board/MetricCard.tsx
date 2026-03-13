interface MetricCardProps {
  label: string;
  value: string;
  detail?: string;
  icon?: string;
  accent?: boolean;
}

const MetricCard = ({ label, value, detail, icon, accent }: MetricCardProps) => (
  <div className={`card-elevated p-6 flex flex-col gap-2 animate-scale-in min-w-[170px] ${accent ? 'bg-foreground text-background' : ''}`}>
    <div className="flex items-center gap-2.5">
      {icon && <span className="text-lg">{icon}</span>}
      <span className={`text-xs font-semibold uppercase tracking-widest ${accent ? 'text-background/60' : 'text-muted-foreground'}`}>{label}</span>
    </div>
    <span className={`text-4xl font-display font-bold tracking-tighter leading-none mt-1 ${accent ? 'text-background' : 'text-foreground'}`}>{value}</span>
    {detail && <span className={`text-sm mt-1 ${accent ? 'text-background/60' : 'text-muted-foreground'}`}>{detail}</span>}
  </div>
);

export default MetricCard;
