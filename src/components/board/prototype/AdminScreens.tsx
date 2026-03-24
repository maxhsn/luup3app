import { useState } from "react";
import {
  BarChart3, Users, Globe, Settings, Shield, DollarSign,
  ChevronRight, ChevronDown, Search, TrendingUp, Eye,
  Layers, UserCheck, AlertTriangle, Activity, Database,
  ArrowUpRight, Award, Crown, Zap, Filter, Calendar
} from "lucide-react";

export type AdminScreen =
  | "overview" | "ecosystems" | "users" | "financial"
  | "ecosystem-detail" | "user-detail" | "payout-detail" | "settings";

/* ═══════ SIDEBAR ═══════ */
const AdminSidebar = ({ active, onNavigate }: { active: AdminScreen; onNavigate: (s: AdminScreen) => void }) => {
  const items: { icon: React.ReactNode; label: string; screen: AdminScreen }[] = [
    { icon: <Activity className="w-4 h-4" />, label: "Overview", screen: "overview" },
    { icon: <Layers className="w-4 h-4" />, label: "Ecosystems", screen: "ecosystems" },
    { icon: <Users className="w-4 h-4" />, label: "Users & Roles", screen: "users" },
    { icon: <DollarSign className="w-4 h-4" />, label: "Financial", screen: "financial" },
  ];

  return (
    <div className="w-[180px] bg-foreground flex flex-col h-full">
      <div className="p-3 border-b border-foreground/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-black text-[9px] text-primary-foreground">L</span>
          </div>
          <div>
            <span className="font-display font-bold text-xs text-background">LUUP</span>
            <span className="text-[8px] text-primary font-semibold ml-1">Admin</span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-2 space-y-0.5">
        {items.map((item) => (
          <button key={item.screen} onClick={() => onNavigate(item.screen)}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium transition-colors ${
              active === item.screen ? "bg-primary/20 text-primary font-semibold" : "text-background/60 hover:text-background hover:bg-background/10"
            }`}>
            {item.icon}{item.label}
          </button>
        ))}
      </div>
      <div className="p-2 border-t border-foreground/10">
        <button onClick={() => onNavigate("settings")} className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium text-background/60 hover:text-background">
          <Settings className="w-4 h-4" /> Settings
        </button>
      </div>
    </div>
  );
};

/* ═══════ OVERVIEW ═══════ */
const OverviewScreen = ({ onNavigate }: { onNavigate: (s: AdminScreen) => void }) => (
  <div className="p-4 space-y-4 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <div>
        <p className="font-display font-bold text-sm text-foreground">Platform Overview</p>
        <p className="text-[10px] text-muted-foreground">LUUP Admin · All Ecosystems</p>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted text-[9px] font-medium text-muted-foreground">
        <Calendar className="w-3 h-3" /> Last 30 days <ChevronDown className="w-3 h-3" />
      </div>
    </div>

    {/* Global KPIs */}
    <div className="grid grid-cols-5 gap-2">
      {[
        { label: "Total Users", value: "24,850", change: "+2,140", icon: <Users className="w-3.5 h-3.5" /> },
        { label: "Active Ecosystems", value: "7", change: "+2", icon: <Layers className="w-3.5 h-3.5" /> },
        { label: "GMV", value: "$1.2M", change: "+18%", icon: <DollarSign className="w-3.5 h-3.5" /> },
        { label: "Brand Partners", value: "42", change: "+6", icon: <Globe className="w-3.5 h-3.5" /> },
        { label: "Platform Revenue", value: "$180k", change: "+24%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      ].map((kpi) => (
        <div key={kpi.label} className="rounded-xl border border-border bg-card p-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{kpi.icon}</div>
            <span className="text-[7px] font-semibold text-primary">{kpi.change}</span>
          </div>
          <p className="font-display font-black text-base text-foreground">{kpi.value}</p>
          <p className="text-[8px] text-muted-foreground">{kpi.label}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-3">
      {/* Growth Chart */}
      <div className="col-span-2 rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-3">User Growth</p>
        <div className="flex items-end gap-[3px] h-[80px]">
          {[20, 28, 32, 38, 42, 48, 52, 58, 55, 62, 68, 72, 78, 82, 88].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px] bg-primary/60 hover:bg-primary transition-colors" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8px] text-muted-foreground">Jan</span>
          <span className="text-[8px] text-muted-foreground">Feb</span>
          <span className="text-[8px] text-muted-foreground">Mar</span>
        </div>
      </div>

      {/* Ecosystem Health */}
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Ecosystem Health</p>
        {[
          { name: "Combat Sports", users: "8.4k", health: 92 },
          { name: "Fitness", users: "6.2k", health: 88 },
          { name: "Beauty", users: "4.1k", health: 85 },
          { name: "Gaming", users: "3.8k", health: 79 },
          { name: "Outdoor", users: "2.3k", health: 72 },
        ].map((e) => (
          <button key={e.name} onClick={() => onNavigate("ecosystem-detail")} className="w-full flex items-center gap-2 py-1 border-b border-border last:border-0 hover:bg-muted/30 rounded transition-colors">
            <div className="flex-1 text-left">
              <p className="text-[9px] font-bold text-foreground">{e.name}</p>
              <p className="text-[7px] text-muted-foreground">{e.users} users</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-12 h-1.5 rounded-full bg-muted">
                <div className={`h-full rounded-full ${e.health > 85 ? "bg-primary" : e.health > 75 ? "bg-stage-earnings" : "bg-destructive"}`} style={{ width: `${e.health}%` }} />
              </div>
              <span className="text-[8px] font-bold text-foreground w-6 text-right">{e.health}%</span>
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Alerts */}
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="font-display font-bold text-xs text-foreground mb-2">Platform Alerts</p>
      <div className="grid grid-cols-3 gap-2">
        {[
          { title: "Pending Payouts", desc: "12 payouts awaiting processing", severity: "warning", icon: <DollarSign className="w-3 h-3" /> },
          { title: "New Brand Applications", desc: "5 brands awaiting approval", severity: "info", icon: <Globe className="w-3 h-3" /> },
          { title: "Flagged Content", desc: "3 posts flagged for review", severity: "error", icon: <AlertTriangle className="w-3 h-3" /> },
        ].map((a) => (
          <div key={a.title} className={`rounded-lg border p-2.5 ${a.severity === "error" ? "border-destructive/30 bg-destructive/5" : a.severity === "warning" ? "border-stage-earnings/30 bg-stage-earnings/5" : "border-primary/30 bg-primary/5"}`}>
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center mb-1.5 ${a.severity === "error" ? "bg-destructive/10 text-destructive" : a.severity === "warning" ? "bg-stage-earnings/10 text-stage-earnings" : "bg-primary/10 text-primary"}`}>{a.icon}</div>
            <p className="text-[10px] font-bold text-foreground">{a.title}</p>
            <p className="text-[8px] text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ ECOSYSTEMS ═══════ */
const EcosystemsScreen = ({ onNavigate }: { onNavigate: (s: AdminScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-sm text-foreground">Ecosystem Management</p>
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">+ New Ecosystem</button>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { name: "Combat Sports", icon: "🥊", users: "8,420", brands: 12, revenue: "$420k", growth: "+15%", status: "Active" },
        { name: "Fitness", icon: "💪", users: "6,210", brands: 8, revenue: "$310k", growth: "+22%", status: "Active" },
        { name: "Beauty", icon: "💄", users: "4,150", brands: 15, revenue: "$280k", growth: "+28%", status: "Active" },
        { name: "Gaming", icon: "🎮", users: "3,800", brands: 6, revenue: "$95k", growth: "+42%", status: "Active" },
        { name: "Outdoor", icon: "🏔️", users: "2,300", brands: 5, revenue: "$68k", growth: "+18%", status: "Active" },
        { name: "Music", icon: "🎵", users: "980", brands: 3, revenue: "$24k", growth: "+35%", status: "Beta" },
        { name: "Fashion", icon: "👗", users: "0", brands: 0, revenue: "$0", growth: "—", status: "Planned" },
      ].map((eco) => (
        <button key={eco.name} onClick={() => onNavigate("ecosystem-detail")} className="rounded-xl border border-border bg-card p-3 text-left hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{eco.icon}</span>
            <div>
              <p className="text-[11px] font-bold text-foreground">{eco.name}</p>
              <span className={`px-1.5 py-0.5 rounded text-[7px] font-bold ${eco.status === "Active" ? "bg-primary/10 text-primary" : eco.status === "Beta" ? "bg-stage-earnings/10 text-stage-earnings" : "bg-muted text-muted-foreground"}`}>{eco.status}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div><p className="text-[10px] font-bold text-foreground">{eco.users}</p><p className="text-[7px] text-muted-foreground">Users</p></div>
            <div><p className="text-[10px] font-bold text-foreground">{eco.brands}</p><p className="text-[7px] text-muted-foreground">Brands</p></div>
            <div><p className="text-[10px] font-bold text-primary">{eco.revenue}</p><p className="text-[7px] text-muted-foreground">Revenue</p></div>
            <div><p className="text-[10px] font-bold text-primary">{eco.growth}</p><p className="text-[7px] text-muted-foreground">Growth</p></div>
          </div>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ USERS ═══════ */
const UsersScreen = ({ onNavigate }: { onNavigate: (s: AdminScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-sm text-foreground">User & Role Management</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-muted rounded-lg px-2.5 py-1.5">
          <Search className="w-3 h-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Search users...</span>
        </div>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted text-[10px] font-medium text-muted-foreground"><Filter className="w-3 h-3" /> Filter</button>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-2 mb-2">
      {[
        { label: "Total Users", value: "24,850" },
        { label: "Admins", value: "5" },
        { label: "Moderators", value: "18" },
        { label: "Ambassadors", value: "2,140" },
        { label: "Flagged", value: "7" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2 text-center">
          <p className="font-display font-black text-base text-foreground">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="grid grid-cols-7 gap-2 px-3 py-2 bg-muted/50 text-[8px] font-bold text-muted-foreground uppercase">
        <span>User</span><span>Email</span><span>Role</span><span>Ecosystems</span><span>Joined</span><span>Status</span><span>Actions</span>
      </div>
      {[
        { name: "Alex Rivera", email: "alex@...", role: "Ambassador", ecosystems: "Combat", joined: "Jan 2026", status: "Active" },
        { name: "Sarah Kim", email: "sarah@...", role: "Ambassador", ecosystems: "Combat, Fitness", joined: "Dec 2025", status: "Active" },
        { name: "John Admin", email: "john@...", role: "Admin", ecosystems: "All", joined: "Nov 2025", status: "Active" },
        { name: "Lisa Mod", email: "lisa@...", role: "Moderator", ecosystems: "Beauty", joined: "Feb 2026", status: "Active" },
        { name: "Mike Torres", email: "mike@...", role: "User", ecosystems: "Combat", joined: "Mar 2026", status: "Active" },
        { name: "SpamBot99", email: "spam@...", role: "User", ecosystems: "—", joined: "Mar 2026", status: "Flagged" },
        { name: "Jane Doe", email: "jane@...", role: "Ambassador", ecosystems: "Fitness", joined: "Feb 2026", status: "Suspended" },
      ].map((u) => (
        <button key={u.name} onClick={() => onNavigate("user-detail")} className="w-full grid grid-cols-7 gap-2 px-3 py-2 border-t border-border hover:bg-muted/30 transition-colors text-left">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[7px] font-bold text-primary">{u.name[0]}</div>
            <span className="text-[9px] font-medium text-foreground truncate">{u.name}</span>
          </div>
          <span className="text-[9px] text-muted-foreground self-center truncate">{u.email}</span>
          <span className={`text-[9px] font-bold self-center ${u.role === "Admin" ? "text-destructive" : u.role === "Moderator" ? "text-stage-earnings" : u.role === "Ambassador" ? "text-primary" : "text-muted-foreground"}`}>{u.role}</span>
          <span className="text-[9px] text-muted-foreground self-center truncate">{u.ecosystems}</span>
          <span className="text-[9px] text-muted-foreground self-center">{u.joined}</span>
          <span className={`text-[8px] font-bold self-center ${u.status === "Flagged" ? "text-destructive" : u.status === "Suspended" ? "text-stage-earnings" : "text-primary"}`}>{u.status}</span>
          <div className="flex items-center gap-1 self-center">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-[8px] font-bold text-primary cursor-pointer">View</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ FINANCIAL ═══════ */
const FinancialScreen = ({ onNavigate }: { onNavigate: (s: AdminScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-sm text-foreground">Financial & Payouts</p>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted text-[9px] font-medium text-muted-foreground">
        <Calendar className="w-3 h-3" /> March 2026 <ChevronDown className="w-3 h-3" />
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Total GMV", value: "$1.2M", change: "+18%" },
        { label: "Platform Revenue", value: "$180k", change: "+24%" },
        { label: "Commissions Paid", value: "$96k", change: "+15%" },
        { label: "Pending Payouts", value: "$12.4k", change: "12 pending" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2.5">
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
          <p className="font-display font-black text-lg text-foreground mt-0.5">{s.value}</p>
          <p className="text-[8px] text-primary font-semibold">{s.change}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-3">
      {/* Revenue by Ecosystem */}
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Revenue by Ecosystem</p>
        {[
          { name: "Combat Sports", revenue: "$420k", pct: 35 },
          { name: "Fitness", revenue: "$310k", pct: 26 },
          { name: "Beauty", revenue: "$280k", pct: 23 },
          { name: "Gaming", revenue: "$95k", pct: 8 },
          { name: "Other", revenue: "$95k", pct: 8 },
        ].map((e) => (
          <div key={e.name} className="mb-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-foreground font-medium">{e.name}</span>
              <span className="text-[9px] font-bold text-foreground">{e.revenue}</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted mt-0.5">
              <div className="h-full rounded-full bg-primary" style={{ width: `${e.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Commission Splits */}
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Commission Distribution</p>
        {[
          { tier: "Tier 1 (Direct)", amount: "$48,000", pct: 50 },
          { tier: "Tier 2", amount: "$24,000", pct: 25 },
          { tier: "Tier 3", amount: "$14,400", pct: 15 },
          { tier: "Tier 4", amount: "$9,600", pct: 10 },
        ].map((t) => (
          <div key={t.tier} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
            <div className="flex-1">
              <p className="text-[9px] font-medium text-foreground">{t.tier}</p>
              <p className="text-[8px] text-muted-foreground">{t.pct}% of total</p>
            </div>
            <span className="text-[10px] font-bold text-primary">{t.amount}</span>
          </div>
        ))}
      </div>

      {/* Pending Payouts */}
      <div className="rounded-xl border border-border bg-card p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="font-display font-bold text-xs text-foreground">Pending Payouts</p>
          <button className="px-2 py-0.5 rounded bg-primary text-primary-foreground text-[8px] font-bold">Process All</button>
        </div>
        {[
          { user: "Alex R.", amount: "$840", method: "Bank" },
          { user: "Sarah K.", amount: "$1,240", method: "PayPal" },
          { user: "Mike T.", amount: "$560", method: "Bank" },
          { user: "Lena V.", amount: "$920", method: "Bank" },
          { user: "Carlos M.", amount: "$380", method: "PayPal" },
        ].map((p) => (
          <div key={p.user} className="flex items-center gap-2 py-1 border-b border-border last:border-0">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[7px] font-bold text-primary">{p.user[0]}</div>
            <div className="flex-1">
              <p className="text-[9px] font-medium text-foreground">{p.user}</p>
              <p className="text-[7px] text-muted-foreground">{p.method}</p>
            </div>
            <span className="text-[9px] font-bold text-primary">{p.amount}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ ECOSYSTEM DETAIL ═══════ */
const EcosystemDetailScreen = ({ onNavigate }: { onNavigate: (s: AdminScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center gap-2">
      <button onClick={() => onNavigate("ecosystems")} className="text-[10px] text-primary font-semibold">← Ecosystems</button>
      <span className="text-[10px] text-muted-foreground">/</span>
      <span className="text-[10px] font-bold text-foreground">🥊 Combat Sports</span>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Users", value: "8,420" },
        { label: "Brands", value: "12" },
        { label: "Revenue", value: "$420k" },
        { label: "Health Score", value: "92%" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2.5 text-center">
          <p className="font-display font-black text-base text-primary">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Top Brands</p>
        {["Venum — $120k revenue", "Hayabusa — $95k revenue", "Sanabul — $72k revenue", "RDX — $58k revenue"].map((b) => (
          <p key={b} className="text-[9px] text-muted-foreground py-1 border-b border-border last:border-0">{b}</p>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Configuration</p>
        {["Categories: MMA, Boxing, BJJ, Muay Thai", "Default Royalty: 10%", "Max Tier: Platinum", "Leaderboard: Enabled"].map((c) => (
          <p key={c} className="text-[9px] text-muted-foreground py-1 border-b border-border last:border-0">{c}</p>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ USER DETAIL ═══════ */
const UserDetailScreen = ({ onNavigate }: { onNavigate: (s: AdminScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <button onClick={() => onNavigate("users")} className="text-[10px] text-primary font-semibold">← Users</button>
    <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">AR</div>
      <div className="flex-1">
        <p className="font-display font-bold text-sm text-foreground">Alex Rivera</p>
        <p className="text-[9px] text-muted-foreground">alex@email.com · Joined Jan 2026 · Silver Scout</p>
      </div>
      <div className="flex gap-1.5">
        <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">Change Role</button>
        <button className="px-3 py-1.5 rounded-lg border border-destructive text-destructive text-[10px] font-bold">Suspend</button>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Total Earnings", value: "$2,840" },
        { label: "Ecosystems", value: "2" },
        { label: "Referrals", value: "48" },
        { label: "Missions Done", value: "23" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2 text-center">
          <p className="font-display font-black text-base text-primary">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Ecosystem Memberships</p>
        {["Combat Sports — Silver Scout (11,800 XP)", "Fitness — Bronze (2,400 XP)"].map((e) => (
          <p key={e} className="text-[9px] text-muted-foreground py-1 border-b border-border last:border-0">{e}</p>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Activity Log</p>
        {["Mar 22 — Completed mission (Share Products)", "Mar 21 — Referral commission ($24.50)", "Mar 20 — Withdrew $500", "Mar 18 — Joined Fitness ecosystem"].map((a) => (
          <p key={a} className="text-[9px] text-muted-foreground py-1 border-b border-border last:border-0">{a}</p>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ SETTINGS ═══════ */
const AdminSettingsScreen = () => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <p className="font-display font-bold text-sm text-foreground">Platform Settings</p>
    <div className="grid grid-cols-2 gap-3">
      {[
        { title: "General", items: ["Platform Name", "Default Currency", "Timezone", "Maintenance Mode"] },
        { title: "Commission Rules", items: ["Global Commission Rate", "Tier Split Ratios", "Cookie Duration", "Min Payout Threshold"] },
        { title: "Security", items: ["Admin 2FA", "Rate Limiting", "Content Moderation", "Fraud Detection"] },
        { title: "Integrations", items: ["Payment Processors", "Analytics", "Email Service", "CDN Settings"] },
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

/* ═══════ MAIN ADMIN PROTOTYPE ═══════ */
export const AdminPrototype = () => {
  const [screen, setScreen] = useState<AdminScreen>("overview");

  return (
    <div className="rounded-xl border-2 border-border bg-card overflow-hidden shadow-xl">
      {/* Browser Chrome */}
      <div className="bg-foreground border-b border-foreground/10 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-stage-earnings/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-stage-participation/60" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-foreground/80 rounded-md px-4 py-1 flex items-center gap-2 text-[10px] text-background/60 border border-background/10 w-80">
            <Shield className="w-3 h-3" />
            <span>admin.luup.io/{screen === "overview" ? "" : screen}</span>
          </div>
        </div>
      </div>

      {/* App Layout */}
      <div className="flex h-[520px]">
        <AdminSidebar active={screen} onNavigate={setScreen} />
        <div className="flex-1 bg-background overflow-hidden">
          {screen === "overview" && <OverviewScreen onNavigate={setScreen} />}
          {screen === "ecosystems" && <EcosystemsScreen onNavigate={setScreen} />}
          {screen === "users" && <UsersScreen onNavigate={setScreen} />}
          {screen === "financial" && <FinancialScreen onNavigate={setScreen} />}
          {screen === "ecosystem-detail" && <EcosystemDetailScreen onNavigate={setScreen} />}
          {screen === "user-detail" && <UserDetailScreen onNavigate={setScreen} />}
          {screen === "settings" && <AdminSettingsScreen />}
        </div>
      </div>
    </div>
  );
};
