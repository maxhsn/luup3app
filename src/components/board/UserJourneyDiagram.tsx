import { useState } from "react";
import { Smartphone, Wallet, Users, Target, Pencil, Link, QrCode, Mail, Share2, UserPlus, Trophy, BarChart3, ShoppingCart, DollarSign, TrendingUp, Network, Store, Megaphone, ArrowRight, RotateCcw } from "lucide-react";

type StageKey = "discovery" | "onboarding" | "participation" | "conversion" | "earnings" | "network";

const STAGES: { key: StageKey; label: string; number: string }[] = [
  { key: "discovery", label: "Discovery", number: "01" },
  { key: "onboarding", label: "Onboarding", number: "02" },
  { key: "participation", label: "Participation", number: "03" },
  { key: "conversion", label: "Conversion", number: "04" },
  { key: "earnings", label: "Earnings", number: "05" },
  { key: "network", label: "Network Growth", number: "06" },
];

const SWIMLANES = [
  { id: "user", label: "User", sub: "Customer / Creator / Affiliate", icon: Users },
  { id: "app", label: "LUUP App", sub: "Mobile & Web Platform", icon: Smartphone },
  { id: "brand", label: "Brand / Merchant", sub: "Commerce Partner", icon: Store },
  { id: "activate", label: "LUUP Activate", sub: "Merchant Dashboard", icon: BarChart3 },
  { id: "commerce", label: "Commerce Layer", sub: "Wallet + Referral Engine", icon: Wallet },
];

interface CellData {
  items: { icon: React.ElementType; label: string; accent?: boolean }[];
}

const DATA: Record<string, Record<StageKey, CellData>> = {
  user: {
    discovery: { items: [
      { icon: Link, label: "Brand invitation link" },
      { icon: QrCode, label: "QR code scan" },
      { icon: Share2, label: "Social media post" },
      { icon: Users, label: "Creator referral" },
      { icon: Target, label: "Ecosystem discovery" },
    ]},
    onboarding: { items: [
      { icon: UserPlus, label: "Creates profile" },
      { icon: Target, label: "Selects interests" },
      { icon: Store, label: "Joins brand community" },
      { icon: Trophy, label: "Receives starter missions" },
    ]},
    participation: { items: [
      { icon: Trophy, label: "Completes missions" },
      { icon: Share2, label: "Shares codes" },
      { icon: Pencil, label: "Posts content" },
      { icon: UserPlus, label: "Invites friends" },
    ]},
    conversion: { items: [
      { icon: Share2, label: "Shares referral link", accent: true },
      { icon: ShoppingCart, label: "Friend purchases" },
    ]},
    earnings: { items: [
      { icon: DollarSign, label: "Views earnings dashboard" },
      { icon: Wallet, label: "Withdrawal options" },
      { icon: Trophy, label: "Leaderboard ranking" },
    ]},
    network: { items: [
      { icon: Users, label: "Builds personal community" },
      { icon: UserPlus, label: "Invites sub-affiliates" },
      { icon: Store, label: "Curates storefront", accent: true },
    ]},
  },
  app: {
    discovery: { items: [
      { icon: Store, label: "Brand join page" },
      { icon: UserPlus, label: "Prompts profile creation" },
      { icon: Smartphone, label: "Download prompt (optional)" },
    ]},
    onboarding: { items: [
      { icon: Wallet, label: "Creates wallet" },
      { icon: Link, label: "Generates referral code" },
      { icon: Target, label: "Mission dashboard" },
    ]},
    participation: { items: [
      { icon: BarChart3, label: "Tracks activity" },
      { icon: Trophy, label: "Updates leaderboards" },
      { icon: DollarSign, label: "Rewards completion" },
    ]},
    conversion: { items: [
      { icon: Target, label: "Attributes conversion", accent: true },
      { icon: BarChart3, label: "Updates analytics" },
    ]},
    earnings: { items: [
      { icon: DollarSign, label: "Displays earnings" },
      { icon: TrendingUp, label: "Shows tier breakdown" },
    ]},
    network: { items: [
      { icon: Network, label: "4-tier referral engine", accent: true },
      { icon: TrendingUp, label: "Tracks network growth" },
    ]},
  },
  brand: {
    discovery: { items: [
      { icon: Megaphone, label: "Sends invitation links" },
      { icon: QrCode, label: "Places QR codes" },
      { icon: Share2, label: "Social campaigns" },
    ]},
    onboarding: { items: [
      { icon: Store, label: "Appears on brand feed" },
      { icon: Trophy, label: "Activates onboarding missions" },
    ]},
    participation: { items: [
      { icon: Pencil, label: "Receives UGC" },
      { icon: Link, label: "Referral traffic" },
      { icon: Users, label: "Engages community" },
    ]},
    conversion: { items: [
      { icon: ShoppingCart, label: "Sale recorded", accent: true },
      { icon: DollarSign, label: "Revenue attributed" },
    ]},
    earnings: { items: [
      { icon: BarChart3, label: "Performance analytics" },
      { icon: TrendingUp, label: "ROI tracking" },
    ]},
    network: { items: [
      { icon: Users, label: "Community scales" },
      { icon: TrendingUp, label: "Compounding benefits" },
    ]},
  },
  activate: {
    discovery: { items: [
      { icon: Link, label: "Generates invite links" },
      { icon: BarChart3, label: "Campaign setup" },
    ]},
    onboarding: { items: [
      { icon: Trophy, label: "Configures missions" },
      { icon: Target, label: "Sets reward tiers" },
    ]},
    participation: { items: [
      { icon: BarChart3, label: "Real-time dashboards" },
      { icon: Users, label: "Community analytics" },
    ]},
    conversion: { items: [
      { icon: BarChart3, label: "Conversion reporting" },
      { icon: DollarSign, label: "Commission config" },
    ]},
    earnings: { items: [
      { icon: DollarSign, label: "Payout management" },
      { icon: BarChart3, label: "Revenue analytics" },
    ]},
    network: { items: [
      { icon: TrendingUp, label: "Growth metrics" },
      { icon: Network, label: "Network visualization" },
    ]},
  },
  commerce: {
    discovery: { items: [
      { icon: Link, label: "Referral link generation" },
    ]},
    onboarding: { items: [
      { icon: Wallet, label: "Wallet provisioning" },
      { icon: Link, label: "Code assignment" },
    ]},
    participation: { items: [
      { icon: BarChart3, label: "Activity tracking" },
      { icon: DollarSign, label: "Reward distribution" },
    ]},
    conversion: { items: [
      { icon: DollarSign, label: "Commission distribution", accent: true },
      { icon: Target, label: "Attribution engine" },
    ]},
    earnings: { items: [
      { icon: DollarSign, label: "Direct commission" },
      { icon: TrendingUp, label: "Tier earnings" },
      { icon: Trophy, label: "Mission rewards" },
      { icon: Wallet, label: "Wallet update", accent: true },
    ]},
    network: { items: [
      { icon: Network, label: "4-tier referral calc" },
      { icon: TrendingUp, label: "Earning potential increase", accent: true },
    ]},
  },
};

const STAGE_COLORS: Record<StageKey, string> = {
  discovery: "bg-stage-discovery",
  onboarding: "bg-stage-onboarding",
  participation: "bg-stage-participation",
  conversion: "bg-stage-conversion",
  earnings: "bg-stage-earnings",
  network: "bg-stage-network",
};

const STAGE_TEXT: Record<StageKey, string> = {
  discovery: "text-stage-discovery",
  onboarding: "text-stage-onboarding",
  participation: "text-stage-participation",
  conversion: "text-stage-conversion",
  earnings: "text-stage-earnings",
  network: "text-stage-network",
};

const STAGE_BG_LIGHT: Record<StageKey, string> = {
  discovery: "bg-stage-discovery/8",
  onboarding: "bg-stage-onboarding/8",
  participation: "bg-stage-participation/8",
  conversion: "bg-stage-conversion/8",
  earnings: "bg-stage-earnings/8",
  network: "bg-stage-network/8",
};

const STAGE_BORDER: Record<StageKey, string> = {
  discovery: "border-stage-discovery/20",
  onboarding: "border-stage-onboarding/20",
  participation: "border-stage-participation/20",
  conversion: "border-stage-conversion/20",
  earnings: "border-stage-earnings/20",
  network: "border-stage-network/20",
};

const UserJourneyDiagram = () => {
  const [activeStage, setActiveStage] = useState<StageKey | null>(null);
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[2.8rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
            LUUP Community Commerce<br />User Journey
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-[500px]">
            How a person moves from discovery to earning inside LUUP — across 5 participant layers and 6 lifecycle stages.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end max-w-[400px]">
          {STAGES.map((s) => (
            <button
              key={s.key}
              onClick={() => setActiveStage(activeStage === s.key ? null : s.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                activeStage === s.key
                  ? `${STAGE_COLORS[s.key]} text-white border-transparent shadow-md`
                  : `${STAGE_BG_LIGHT[s.key]} ${STAGE_TEXT[s.key]} ${STAGE_BORDER[s.key]} hover:shadow-sm`
              }`}
            >
              <span className="font-mono text-xs opacity-60">{s.number}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Diagram Grid */}
      <div className="bento-card overflow-hidden">
        {/* Stage Header Row */}
        <div className="grid" style={{ gridTemplateColumns: "200px repeat(6, 1fr)" }}>
          <div className="p-4 border-b border-r border-border bg-muted/30">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Swimlanes</span>
          </div>
          {STAGES.map((stage) => (
            <div
              key={stage.key}
              className={`p-4 border-b border-r border-border last:border-r-0 text-center transition-all duration-300 cursor-pointer ${
                activeStage && activeStage !== stage.key ? "opacity-30" : ""
              } ${STAGE_BG_LIGHT[stage.key]}`}
              onClick={() => setActiveStage(activeStage === stage.key ? null : stage.key)}
            >
              <div className={`w-6 h-1 rounded-full mx-auto mb-2 ${STAGE_COLORS[stage.key]}`} />
              <span className={`text-sm font-display font-bold ${STAGE_TEXT[stage.key]}`}>{stage.label}</span>
              <span className="block text-xs font-mono text-muted-foreground mt-0.5">Stage {stage.number}</span>
            </div>
          ))}
        </div>

        {/* Swimlane Rows */}
        {SWIMLANES.map((lane, laneIdx) => {
          const Icon = lane.icon;
          return (
            <div
              key={lane.id}
              className="grid"
              style={{ gridTemplateColumns: "200px repeat(6, 1fr)" }}
            >
              {/* Lane Label */}
              <div className={`p-4 border-r border-border flex items-start gap-3 ${laneIdx < SWIMLANES.length - 1 ? "border-b" : ""} bg-muted/15`}>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <span className="text-sm font-display font-bold text-foreground block leading-tight">{lane.label}</span>
                  <span className="text-[10px] text-muted-foreground">{lane.sub}</span>
                </div>
              </div>

              {/* Stage Cells */}
              {STAGES.map((stage) => {
                const cellKey = `${lane.id}-${stage.key}`;
                const cellData = DATA[lane.id]?.[stage.key];
                const isHovered = hoveredCell === cellKey;
                const isDimmed = activeStage && activeStage !== stage.key;

                return (
                  <div
                    key={cellKey}
                    className={`p-3 border-r last:border-r-0 ${laneIdx < SWIMLANES.length - 1 ? "border-b" : ""} border-border transition-all duration-300 ${
                      isDimmed ? "opacity-20" : ""
                    } ${isHovered ? `${STAGE_BG_LIGHT[stage.key]}` : ""}`}
                    onMouseEnter={() => setHoveredCell(cellKey)}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <div className="space-y-1.5">
                      {cellData?.items.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-all duration-200 ${
                              item.accent
                                ? `${STAGE_BG_LIGHT[stage.key]} ${STAGE_TEXT[stage.key]} font-semibold border ${STAGE_BORDER[stage.key]}`
                                : "text-foreground/80 hover:bg-muted/50"
                            }`}
                          >
                            <ItemIcon size={12} className={item.accent ? STAGE_TEXT[stage.key] : "text-muted-foreground"} />
                            <span className="leading-tight">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Feedback Loops */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8 bento-card p-8">
          <h3 className="text-lg font-display font-black text-foreground tracking-tight mb-5">Feedback Loops</h3>
          <div className="flex items-center gap-3 flex-wrap">
            {[
              { from: "participation", to: "conversion", fromLabel: "Participation", toLabel: "Conversion" },
              { from: "conversion", to: "earnings", fromLabel: "Conversion", toLabel: "Earnings" },
              { from: "earnings", to: "network", fromLabel: "Earnings", toLabel: "Recruitment" },
              { from: "network", to: "discovery", fromLabel: "Network", toLabel: "Discovery" },
            ].map((loop, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${STAGE_COLORS[loop.from as StageKey]}`}>
                  {loop.fromLabel}
                </span>
                <ArrowRight size={14} className="text-muted-foreground" />
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${STAGE_COLORS[loop.to as StageKey]}`}>
                  {loop.toLabel}
                </span>
                {i < 3 && <div className="w-px h-6 bg-border mx-2" />}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 bento-card-accent p-8 flex flex-col justify-between relative overflow-hidden">
          <RotateCcw size={80} className="absolute top-4 right-4 text-primary-foreground/10" />
          <span className="text-xs font-mono text-primary-foreground/40">COMPOUNDING EFFECT</span>
          <div>
            <h3 className="text-2xl font-display font-black text-primary-foreground tracking-tight">Growth Loop</h3>
            <p className="text-sm text-primary-foreground/60 mt-1">Each recruited user repeats the full journey, creating exponential network effects.</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bento-card p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Legend</span>
          <div className="flex items-center gap-6">
            {STAGES.map((s) => (
              <div key={s.key} className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${STAGE_COLORS[s.key]}`} />
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-5 rounded border border-dashed border-primary/30 bg-primary/5" />
            <span className="text-xs text-muted-foreground">Key action</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ArrowRight size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Flow direction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourneyDiagram;
