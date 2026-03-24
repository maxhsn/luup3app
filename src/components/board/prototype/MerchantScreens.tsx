import { useState } from "react";
import {
  BarChart3, Users, ShoppingBag, Flame, Settings, TrendingUp,
  ChevronRight, ChevronDown, Plus, Search, Eye, Star, ArrowUpRight,
  DollarSign, Target, Zap, Award, Filter, Calendar, Clock,
  Globe, Bell, Package, Check, X, Edit, Megaphone, LayoutGrid
} from "lucide-react";

export type MerchantScreen =
  | "dashboard" | "campaigns" | "products" | "ambassadors"
  | "campaign-detail" | "product-detail" | "ambassador-detail" | "settings";

/* ═══════ SIDEBAR ═══════ */
const MerchantSidebar = ({ active, onNavigate }: { active: MerchantScreen; onNavigate: (s: MerchantScreen) => void }) => {
  const items: { icon: React.ReactNode; label: string; screen: MerchantScreen }[] = [
    { icon: <BarChart3 className="w-4 h-4" />, label: "Dashboard", screen: "dashboard" },
    { icon: <Megaphone className="w-4 h-4" />, label: "Campaigns", screen: "campaigns" },
    { icon: <Package className="w-4 h-4" />, label: "Products", screen: "products" },
    { icon: <Users className="w-4 h-4" />, label: "Ambassadors", screen: "ambassadors" },
  ];

  return (
    <div className="w-[180px] bg-card border-r border-border flex flex-col h-full">
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-foreground flex items-center justify-center">
            <span className="font-display font-black text-[9px] text-background">L</span>
          </div>
          <div>
            <span className="font-display font-bold text-xs text-foreground">LUUP</span>
            <span className="text-[8px] text-primary font-semibold ml-1">Activate</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-2 space-y-0.5">
        {items.map((item) => (
          <button key={item.screen} onClick={() => onNavigate(item.screen)}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium transition-colors ${active === item.screen ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
            {item.icon}{item.label}
          </button>
        ))}
      </div>
      <div className="p-2 border-t border-border">
        <button onClick={() => onNavigate("settings")} className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium text-muted-foreground hover:text-foreground`}>
          <Settings className="w-4 h-4" /> Settings
        </button>
      </div>
    </div>
  );
};

/* ═══════ DASHBOARD ═══════ */
const MerchantDashboardScreen = ({ onNavigate }: { onNavigate: (s: MerchantScreen) => void }) => (
  <div className="p-4 space-y-4 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <div>
        <p className="font-display font-bold text-sm text-foreground">Brand Dashboard</p>
        <p className="text-[10px] text-muted-foreground">Venum · Combat Sports Ecosystem</p>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted text-[9px] font-medium text-muted-foreground">
        <Calendar className="w-3 h-3" /> Last 30 days <ChevronDown className="w-3 h-3" />
      </div>
    </div>

    {/* KPIs */}
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Revenue via LUUP", value: "$48,250", change: "+22%", icon: <DollarSign className="w-3.5 h-3.5" /> },
        { label: "Active Ambassadors", value: "156", change: "+12", icon: <Users className="w-3.5 h-3.5" /> },
        { label: "Campaign ROI", value: "4.2x", change: "+0.6x", icon: <Target className="w-3.5 h-3.5" /> },
        { label: "Total Impressions", value: "2.4M", change: "+340k", icon: <Eye className="w-3.5 h-3.5" /> },
      ].map((kpi) => (
        <div key={kpi.label} className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{kpi.icon}</div>
            <span className="text-[8px] font-semibold text-primary">{kpi.change}</span>
          </div>
          <p className="font-display font-black text-lg text-foreground">{kpi.value}</p>
          <p className="text-[9px] text-muted-foreground">{kpi.label}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-3">
      {/* Revenue Chart */}
      <div className="col-span-2 rounded-xl border border-border bg-card p-3">
        <div className="flex items-center justify-between mb-3">
          <p className="font-display font-bold text-xs text-foreground">Revenue & Commissions</p>
          <div className="flex items-center gap-2 text-[8px]">
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-primary" /> Revenue</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm bg-primary/30" /> Commissions</span>
          </div>
        </div>
        <div className="flex items-end gap-[2px] h-[90px]">
          {[40, 55, 45, 60, 52, 70, 62, 78, 68, 82, 75, 88, 80, 92, 85].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col gap-[1px]">
              <div className="rounded-t-[2px] bg-primary/30" style={{ height: `${h * 0.3}%` }} />
              <div className="rounded-t-[2px] bg-primary" style={{ height: `${h * 0.7}%` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Top Campaigns */}
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Top Campaigns</p>
        {[
          { name: "Spring Launch", roi: "5.2x", status: "Active" },
          { name: "Product Review Drive", roi: "3.8x", status: "Active" },
          { name: "Referral Blitz", roi: "4.1x", status: "Ended" },
        ].map((c) => (
          <button key={c.name} onClick={() => onNavigate("campaign-detail")} className="w-full flex items-center gap-2 py-1.5 border-b border-border last:border-0 hover:bg-muted/30 rounded transition-colors">
            <Flame className="w-3 h-3 text-primary flex-shrink-0" />
            <div className="flex-1 text-left">
              <p className="text-[10px] font-bold text-foreground">{c.name}</p>
              <p className="text-[8px] text-muted-foreground">ROI: {c.roi}</p>
            </div>
            <span className={`px-1.5 py-0.5 rounded text-[7px] font-bold ${c.status === "Active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{c.status}</span>
          </button>
        ))}
        <button onClick={() => onNavigate("campaigns")} className="w-full mt-2 py-1.5 rounded-lg bg-primary/10 text-[9px] font-bold text-primary">View All Campaigns</button>
      </div>
    </div>

    {/* Top Ambassadors */}
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="font-display font-bold text-xs text-foreground">Top Ambassadors</p>
        <button onClick={() => onNavigate("ambassadors")} className="text-[9px] font-semibold text-primary">View All →</button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {[
          { name: "Alex R.", sales: 142, revenue: "$4,280", tier: "Silver" },
          { name: "Sarah K.", sales: 128, revenue: "$3,840", tier: "Gold" },
          { name: "Mike T.", sales: 95, revenue: "$2,850", tier: "Silver" },
          { name: "James R.", sales: 87, revenue: "$2,610", tier: "Bronze" },
          { name: "Lena V.", sales: 76, revenue: "$2,280", tier: "Silver" },
        ].map((a) => (
          <button key={a.name} onClick={() => onNavigate("ambassador-detail")} className="rounded-lg border border-border p-2 text-center hover:border-primary/30 transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/10 mx-auto mb-1 flex items-center justify-center text-[9px] font-bold text-primary">{a.name[0]}</div>
            <p className="text-[9px] font-bold text-foreground">{a.name}</p>
            <p className="text-[8px] text-primary font-semibold">{a.revenue}</p>
            <p className="text-[7px] text-muted-foreground">{a.sales} sales · {a.tier}</p>
          </button>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ CAMPAIGNS ═══════ */
const CampaignsScreen = ({ onNavigate }: { onNavigate: (s: MerchantScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-sm text-foreground">Campaign Manager</p>
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">
        <Plus className="w-3 h-3" /> New Campaign
      </button>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-2">
      {[
        { label: "Active", value: "4" },
        { label: "Total Reach", value: "2.4M" },
        { label: "Avg ROI", value: "4.2x" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2.5 text-center">
          <p className="font-display font-black text-lg text-primary">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="space-y-2">
      {[
        { name: "Spring Launch 2026", type: "Product Review", status: "Active", ambassadors: 45, submissions: 128, budget: "$5,000", spent: "$3,200", roi: "5.2x" },
        { name: "Referral Blitz March", type: "Referral", status: "Active", ambassadors: 80, submissions: 340, budget: "$8,000", spent: "$6,100", roi: "4.1x" },
        { name: "Social Share Challenge", type: "Social", status: "Active", ambassadors: 62, submissions: 215, budget: "$3,500", spent: "$2,800", roi: "3.8x" },
        { name: "Product Review Drive", type: "Content", status: "Draft", ambassadors: 0, submissions: 0, budget: "$4,000", spent: "$0", roi: "—" },
        { name: "Winter Collection Push", type: "Multi", status: "Ended", ambassadors: 55, submissions: 420, budget: "$6,000", spent: "$6,000", roi: "6.1x" },
      ].map((c) => (
        <button key={c.name} onClick={() => onNavigate("campaign-detail")} className="w-full rounded-xl border border-border bg-card p-3 flex items-center gap-3 text-left hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Megaphone className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-[11px] font-bold text-foreground">{c.name}</p>
              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${c.status === "Active" ? "bg-primary/10 text-primary" : c.status === "Draft" ? "bg-muted text-muted-foreground" : "bg-muted text-muted-foreground"}`}>{c.status}</span>
            </div>
            <p className="text-[9px] text-muted-foreground">{c.type} · {c.ambassadors} ambassadors · {c.submissions} submissions</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-[10px] font-bold text-primary">ROI {c.roi}</p>
            <p className="text-[8px] text-muted-foreground">{c.spent} / {c.budget}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ PRODUCTS ═══════ */
const ProductsScreen = ({ onNavigate }: { onNavigate: (s: MerchantScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-sm text-foreground">Product Catalog</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-muted rounded-lg px-2.5 py-1.5">
          <Search className="w-3 h-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Search products...</span>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">
          <Plus className="w-3 h-3" /> Add Product
        </button>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { name: "Challenger 3.0 Gloves", price: "$79.99", royalty: "12%", sales: 342, revenue: "$8,240", status: "Active" },
        { name: "Elite Rashguard", price: "$54.99", royalty: "12%", sales: 218, revenue: "$4,560", status: "Active" },
        { name: "Contender 2.0 Shorts", price: "$44.99", royalty: "12%", sales: 156, revenue: "$2,880", status: "Active" },
        { name: "Impact Shinguards", price: "$64.99", royalty: "12%", sales: 124, revenue: "$3,120", status: "Active" },
        { name: "Undisputed 2.0 MMA Gloves", price: "$89.99", royalty: "10%", sales: 95, revenue: "$2,640", status: "Active" },
        { name: "Training Bag 70lb", price: "$149.99", royalty: "8%", sales: 67, revenue: "$4,200", status: "Low Stock" },
        { name: "Pro Hand Wraps", price: "$14.99", royalty: "15%", sales: 580, revenue: "$2,100", status: "Active" },
        { name: "Compression Tights", price: "$39.99", royalty: "12%", sales: 0, revenue: "$0", status: "Draft" },
      ].map((p) => (
        <button key={p.name} onClick={() => onNavigate("product-detail")} className="rounded-xl border border-border bg-card p-2.5 text-left hover:border-primary/30 transition-colors">
          <div className="h-16 rounded-lg bg-muted/50 mb-2 relative">
            <span className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-[7px] font-bold ${p.status === "Active" ? "bg-primary/10 text-primary" : p.status === "Low Stock" ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}>{p.status}</span>
          </div>
          <p className="text-[10px] font-bold text-foreground truncate">{p.name}</p>
          <p className="text-[10px] font-bold text-primary mt-0.5">{p.price}</p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-[8px] text-muted-foreground">{p.sales} sales</span>
            <span className="text-[8px] font-semibold text-primary">{p.revenue}</span>
          </div>
          <p className="text-[8px] text-muted-foreground mt-0.5">Royalty: {p.royalty}</p>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ AMBASSADORS ═══════ */
const AmbassadorsScreen = ({ onNavigate }: { onNavigate: (s: MerchantScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-sm text-foreground">Ambassador Network</p>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted text-[10px] font-medium text-muted-foreground"><Filter className="w-3 h-3" /> Filter</button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold"><Plus className="w-3 h-3" /> Invite</button>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2 mb-2">
      {[
        { label: "Total", value: "156" },
        { label: "Gold", value: "12" },
        { label: "Silver", value: "48" },
        { label: "Bronze", value: "96" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2.5 text-center">
          <p className="font-display font-black text-lg text-foreground">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="grid grid-cols-6 gap-2 px-3 py-2 bg-muted/50 text-[8px] font-bold text-muted-foreground uppercase">
        <span>Ambassador</span><span>Tier</span><span>Sales</span><span>Revenue</span><span>Conversion</span><span>Actions</span>
      </div>
      {[
        { name: "Alex Rivera", tier: "Silver", sales: 142, revenue: "$4,280", conversion: "8.2%" },
        { name: "Sarah Kim", tier: "Gold", sales: 128, revenue: "$3,840", conversion: "9.1%" },
        { name: "Mike Torres", tier: "Silver", sales: 95, revenue: "$2,850", conversion: "7.4%" },
        { name: "James Reed", tier: "Bronze", sales: 87, revenue: "$2,610", conversion: "6.8%" },
        { name: "Lena Volkov", tier: "Silver", sales: 76, revenue: "$2,280", conversion: "7.9%" },
        { name: "Carlos M.", tier: "Bronze", sales: 62, revenue: "$1,860", conversion: "5.2%" },
        { name: "Nina P.", tier: "Gold", sales: 180, revenue: "$5,400", conversion: "10.3%" },
      ].map((a) => (
        <button key={a.name} onClick={() => onNavigate("ambassador-detail")} className="w-full grid grid-cols-6 gap-2 px-3 py-2 border-t border-border hover:bg-muted/30 transition-colors text-left">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-bold text-primary">{a.name[0]}</div>
            <span className="text-[10px] font-medium text-foreground">{a.name}</span>
          </div>
          <span className={`text-[9px] font-bold self-center ${a.tier === "Gold" ? "text-stage-earnings" : a.tier === "Silver" ? "text-primary" : "text-muted-foreground"}`}>{a.tier}</span>
          <span className="text-[10px] text-foreground self-center">{a.sales}</span>
          <span className="text-[10px] font-bold text-primary self-center">{a.revenue}</span>
          <span className="text-[10px] text-foreground self-center">{a.conversion}</span>
          <div className="flex items-center gap-1 self-center">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-[8px] font-bold text-primary cursor-pointer">View</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ CAMPAIGN DETAIL ═══════ */
const CampaignDetailScreen = ({ onNavigate }: { onNavigate: (s: MerchantScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center gap-2">
      <button onClick={() => onNavigate("campaigns")} className="text-[10px] text-primary font-semibold">← Campaigns</button>
      <span className="text-[10px] text-muted-foreground">/</span>
      <span className="text-[10px] font-bold text-foreground">Spring Launch 2026</span>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Participants", value: "45" },
        { label: "Submissions", value: "128" },
        { label: "Impressions", value: "840k" },
        { label: "ROI", value: "5.2x" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2.5 text-center">
          <p className="font-display font-black text-lg text-primary">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Mission Pipeline</p>
        <div className="space-y-1.5">
          {[
            { stage: "Open", count: 12, color: "bg-muted" },
            { stage: "Joined", count: 28, color: "bg-primary/30" },
            { stage: "In Review", count: 15, color: "bg-stage-earnings/30" },
            { stage: "Approved", count: 85, color: "bg-stage-participation/30" },
          ].map((s) => (
            <div key={s.stage} className="flex items-center gap-2">
              <span className="text-[9px] text-muted-foreground w-16">{s.stage}</span>
              <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${s.color.replace("/30", "")}`} style={{ width: `${(s.count / 85) * 100}%` }} />
              </div>
              <span className="text-[9px] font-bold text-foreground w-8 text-right">{s.count}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Recent Submissions</p>
        {[
          { user: "Alex R.", type: "Video Review", status: "Pending" },
          { user: "Sarah K.", type: "Social Post", status: "Approved" },
          { user: "Mike T.", type: "Product Photo", status: "Pending" },
          { user: "Lena V.", type: "Blog Post", status: "Approved" },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[7px] font-bold text-primary">{s.user[0]}</div>
            <div className="flex-1">
              <p className="text-[9px] font-medium text-foreground">{s.user} · {s.type}</p>
            </div>
            <span className={`px-1.5 py-0.5 rounded text-[7px] font-bold ${s.status === "Approved" ? "bg-primary/10 text-primary" : "bg-stage-earnings/10 text-stage-earnings"}`}>{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ PRODUCT DETAIL ═══════ */
const ProductDetailScreen = ({ onNavigate }: { onNavigate: (s: MerchantScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <button onClick={() => onNavigate("products")} className="text-[10px] text-primary font-semibold">← Products</button>
    <div className="grid grid-cols-3 gap-3">
      <div className="rounded-xl border border-border bg-card p-3">
        <div className="h-32 rounded-lg bg-muted/50 mb-2" />
        <p className="font-display font-bold text-xs text-foreground">Challenger 3.0 Gloves</p>
        <p className="text-[10px] font-bold text-primary">$79.99</p>
        <p className="text-[9px] text-muted-foreground mt-1">Royalty: 12% · SKU: VEN-CHL-30</p>
      </div>
      <div className="col-span-2 space-y-2">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Total Sales", value: "342" },
            { label: "Revenue", value: "$8,240" },
            { label: "Storefronts", value: "28" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-2.5 text-center">
              <p className="font-display font-black text-base text-primary">{s.value}</p>
              <p className="text-[8px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-card p-3">
          <p className="font-display font-bold text-xs text-foreground mb-2">Top Sellers</p>
          {["Alex R. — 42 sales", "Sarah K. — 38 sales", "Nina P. — 31 sales"].map((s) => (
            <p key={s} className="text-[9px] text-muted-foreground py-1 border-b border-border last:border-0">{s}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ═══════ AMBASSADOR DETAIL ═══════ */
const AmbassadorDetailScreen = ({ onNavigate }: { onNavigate: (s: MerchantScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <button onClick={() => onNavigate("ambassadors")} className="text-[10px] text-primary font-semibold">← Ambassadors</button>
    <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">AR</div>
      <div className="flex-1">
        <p className="font-display font-bold text-sm text-foreground">Alex Rivera</p>
        <p className="text-[9px] text-muted-foreground">@alexrivera · Silver Scout · Joined Jan 2026</p>
      </div>
      <div className="flex gap-1.5">
        <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">Message</button>
        <button className="px-3 py-1.5 rounded-lg border border-border text-[10px] font-bold text-foreground">Promote</button>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Sales", value: "142" },
        { label: "Revenue", value: "$4,280" },
        { label: "Conversion", value: "8.2%" },
        { label: "Avg Order", value: "$30.14" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2.5 text-center">
          <p className="font-display font-black text-base text-primary">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Mission Activity</p>
        {["Completed: Share 3 Products (150 XP)", "Active: Video Review (33%)", "Completed: Refer 5 Users ($25)"].map((m, i) => (
          <p key={i} className="text-[9px] text-muted-foreground py-1 border-b border-border last:border-0">{m}</p>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Storefront Products</p>
        {["Challenger 3.0 Gloves — 42 sales", "Elite Rashguard — 28 sales", "Contender Shorts — 18 sales"].map((p, i) => (
          <p key={i} className="text-[9px] text-muted-foreground py-1 border-b border-border last:border-0">{p}</p>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ SETTINGS ═══════ */
const MerchantSettingsScreen = () => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <p className="font-display font-bold text-sm text-foreground">Brand Settings</p>
    <div className="grid grid-cols-2 gap-3">
      {[
        { title: "Brand Profile", items: ["Brand Name", "Logo", "Description", "Category", "Website URL"] },
        { title: "Royalty Settings", items: ["Default Rate", "Product-Specific Rates", "Tier Bonuses", "Payout Schedule"] },
        { title: "Team", items: ["Team Members", "Roles & Permissions", "Invite New Member"] },
        { title: "Integrations", items: ["Shopify Connect", "Webhook URLs", "API Keys"] },
      ].map((section) => (
        <div key={section.title} className="rounded-xl border border-border bg-card p-3">
          <p className="font-display font-bold text-xs text-foreground mb-2">{section.title}</p>
          {section.items.map((item) => (
            <div key={item} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
              <span className="text-[10px] text-muted-foreground">{item}</span>
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/* ═══════ MAIN MERCHANT PROTOTYPE ═══════ */
export const MerchantPrototype = () => {
  const [screen, setScreen] = useState<MerchantScreen>("dashboard");

  return (
    <div className="rounded-xl border-2 border-border bg-card overflow-hidden shadow-xl">
      {/* Browser Chrome */}
      <div className="bg-muted border-b border-border px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-stage-earnings/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-stage-participation/60" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-card rounded-md px-4 py-1 flex items-center gap-2 text-[10px] text-muted-foreground border border-border w-80">
            <Globe className="w-3 h-3" />
            <span>activate.luup.io/{screen === "dashboard" ? "" : screen}</span>
          </div>
        </div>
      </div>

      {/* App Layout */}
      <div className="flex h-[520px]">
        <MerchantSidebar active={screen} onNavigate={setScreen} />
        <div className="flex-1 bg-background overflow-hidden">
          {screen === "dashboard" && <MerchantDashboardScreen onNavigate={setScreen} />}
          {screen === "campaigns" && <CampaignsScreen onNavigate={setScreen} />}
          {screen === "products" && <ProductsScreen onNavigate={setScreen} />}
          {screen === "ambassadors" && <AmbassadorsScreen onNavigate={setScreen} />}
          {screen === "campaign-detail" && <CampaignDetailScreen onNavigate={setScreen} />}
          {screen === "product-detail" && <ProductDetailScreen onNavigate={setScreen} />}
          {screen === "ambassador-detail" && <AmbassadorDetailScreen onNavigate={setScreen} />}
          {screen === "settings" && <MerchantSettingsScreen />}
        </div>
      </div>
    </div>
  );
};
