import { useState } from "react";
import {
  Home, ShoppingBag, Trophy, User, Flame, Users, Wallet, Bell,
  Search, ChevronRight, TrendingUp, Star, Heart, Share2, Gift,
  MessageCircle, Bot, Settings, LogOut, ChevronDown, Bookmark,
  Crown, Zap, Award, Eye, BarChart3, Globe, Link, Filter,
  ArrowUpRight, Check, Plus
} from "lucide-react";

export type WebScreen =
  | "dashboard" | "missions" | "brands" | "community"
  | "wallet" | "leaderboard" | "profile" | "brand-detail"
  | "notifications" | "settings";

/* ═══════ SIDEBAR NAV ═══════ */
const SidebarNav = ({ active, onNavigate }: { active: WebScreen; onNavigate: (s: WebScreen) => void }) => {
  const items: { icon: React.ReactNode; label: string; screen: WebScreen }[] = [
    { icon: <Home className="w-4 h-4" />, label: "Dashboard", screen: "dashboard" },
    { icon: <Flame className="w-4 h-4" />, label: "Missions", screen: "missions" },
    { icon: <ShoppingBag className="w-4 h-4" />, label: "Brands", screen: "brands" },
    { icon: <Users className="w-4 h-4" />, label: "Community", screen: "community" },
    { icon: <Wallet className="w-4 h-4" />, label: "Wallet", screen: "wallet" },
    { icon: <Trophy className="w-4 h-4" />, label: "Leaderboard", screen: "leaderboard" },
  ];

  return (
    <div className="w-[180px] bg-card border-r border-border flex flex-col h-full">
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-black text-[9px] text-primary-foreground">L</span>
          </div>
          <span className="font-display font-bold text-xs text-foreground">LUUP</span>
        </div>
      </div>
      <div className="flex-1 p-2 space-y-0.5">
        {items.map((item) => (
          <button
            key={item.screen}
            onClick={() => onNavigate(item.screen)}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium transition-colors ${
              active === item.screen ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-2 border-t border-border space-y-0.5">
        <button onClick={() => onNavigate("profile")} className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium transition-colors ${active === "profile" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>
          <User className="w-4 h-4" /> Profile
        </button>
        <button onClick={() => onNavigate("settings")} className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] font-medium transition-colors ${active === "settings" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>
          <Settings className="w-4 h-4" /> Settings
        </button>
      </div>
    </div>
  );
};

/* ═══════ TOP BAR ═══════ */
const TopBar = ({ onNavigate }: { onNavigate: (s: WebScreen) => void }) => (
  <div className="h-10 border-b border-border bg-card flex items-center justify-between px-4">
    <div className="flex items-center gap-2 bg-muted rounded-lg px-2.5 py-1.5 w-52">
      <Search className="w-3 h-3 text-muted-foreground" />
      <span className="text-[10px] text-muted-foreground">Search missions, brands...</span>
    </div>
    <div className="flex items-center gap-2">
      <button onClick={() => onNavigate("notifications")} className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center relative">
        <Bell className="w-3.5 h-3.5 text-muted-foreground" />
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-destructive" />
      </button>
      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-[9px] font-bold text-primary">AR</span>
      </div>
    </div>
  </div>
);

/* ═══════ DASHBOARD ═══════ */
const DashboardScreen = ({ onNavigate }: { onNavigate: (s: WebScreen) => void }) => (
  <div className="p-4 space-y-4 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <div>
        <p className="font-display font-bold text-sm text-foreground">Welcome back, Alex 👋</p>
        <p className="text-[10px] text-muted-foreground">Here's your LUUP overview for today</p>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10">
        <Crown className="w-3 h-3 text-primary" />
        <span className="text-[10px] font-bold text-primary">Silver Scout</span>
      </div>
    </div>

    {/* Stats Row */}
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Total Earnings", value: "$2,840", change: "+12%", icon: <Wallet className="w-3.5 h-3.5" /> },
        { label: "Active Missions", value: "5", change: "2 due soon", icon: <Flame className="w-3.5 h-3.5" /> },
        { label: "Referrals", value: "48", change: "+8 this week", icon: <Users className="w-3.5 h-3.5" /> },
        { label: "Rank", value: "#12", change: "↑ 3 spots", icon: <Trophy className="w-3.5 h-3.5" /> },
      ].map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{stat.icon}</div>
            <span className="text-[8px] font-semibold text-primary">{stat.change}</span>
          </div>
          <p className="font-display font-black text-lg text-foreground">{stat.value}</p>
          <p className="text-[9px] text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-3">
      {/* Earnings Chart */}
      <div className="col-span-2 rounded-xl border border-border bg-card p-3">
        <div className="flex items-center justify-between mb-3">
          <p className="font-display font-bold text-xs text-foreground">Earnings Overview</p>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-muted text-[9px] font-medium text-muted-foreground">Last 30 days <ChevronDown className="w-3 h-3" /></div>
        </div>
        <div className="flex items-end gap-[3px] h-[80px]">
          {[30, 45, 25, 55, 40, 65, 50, 70, 60, 75, 68, 80, 72, 85, 78].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px] bg-primary/60 transition-all hover:bg-primary" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8px] text-muted-foreground">Mar 1</span>
          <span className="text-[8px] text-muted-foreground">Mar 15</span>
          <span className="text-[8px] text-muted-foreground">Mar 30</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border border-border bg-card p-3 space-y-2">
        <p className="font-display font-bold text-xs text-foreground">Quick Actions</p>
        {[
          { label: "Browse Missions", screen: "missions" as WebScreen, icon: <Flame className="w-3 h-3" /> },
          { label: "My Storefront", screen: "profile" as WebScreen, icon: <Globe className="w-3 h-3" /> },
          { label: "Share Link", screen: "profile" as WebScreen, icon: <Link className="w-3 h-3" /> },
          { label: "View Wallet", screen: "wallet" as WebScreen, icon: <Wallet className="w-3 h-3" /> },
        ].map((a) => (
          <button key={a.label} onClick={() => onNavigate(a.screen)} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-[10px] font-medium text-foreground transition-colors">
            <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary">{a.icon}</div>
            {a.label}
            <ChevronRight className="w-3 h-3 ml-auto text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>

    {/* Active Missions */}
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="font-display font-bold text-xs text-foreground">Active Missions</p>
        <button onClick={() => onNavigate("missions")} className="text-[9px] font-semibold text-primary">View All →</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { title: "Share 3 Products", brand: "Venum", progress: 67, reward: "150 XP" },
          { title: "Post Training Video", brand: "Hayabusa", progress: 33, reward: "200 XP" },
          { title: "Refer 5 Friends", brand: "LUUP", progress: 80, reward: "$25" },
        ].map((m) => (
          <button key={m.title} onClick={() => onNavigate("missions")} className="rounded-lg border border-border p-2.5 text-left hover:border-primary/30 transition-colors active:scale-[0.99]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-5 h-5 rounded bg-muted flex items-center justify-center text-[8px] font-bold text-muted-foreground">{m.brand[0]}</div>
              <span className="text-[8px] text-muted-foreground">{m.brand}</span>
            </div>
            <p className="text-[10px] font-bold text-foreground">{m.title}</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: `${m.progress}%` }} />
              </div>
              <span className="text-[8px] font-bold text-primary">{m.reward}</span>
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Trending Brands */}
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="font-display font-bold text-xs text-foreground">Trending Brands</p>
        <button onClick={() => onNavigate("brands")} className="text-[9px] font-semibold text-primary">Browse All →</button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { name: "Venum", royalty: "12%", products: 24 },
          { name: "Hayabusa", royalty: "10%", products: 18 },
          { name: "Sanabul", royalty: "15%", products: 32 },
          { name: "RDX", royalty: "8%", products: 45 },
        ].map((b) => (
          <button key={b.name} onClick={() => onNavigate("brand-detail")} className="rounded-lg border border-border p-2 text-center hover:border-primary/30 transition-colors active:scale-[0.99]">
            <div className="w-8 h-8 rounded-lg bg-muted mx-auto mb-1 flex items-center justify-center text-[10px] font-bold text-muted-foreground">{b.name[0]}</div>
            <p className="text-[10px] font-bold text-foreground">{b.name}</p>
            <p className="text-[8px] text-primary font-semibold">{b.royalty} royalty</p>
            <p className="text-[8px] text-muted-foreground">{b.products} products</p>
          </button>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ MISSIONS ═══════ */
const WebMissionsScreen = ({ onNavigate }: { onNavigate: (s: WebScreen) => void }) => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="p-4 space-y-3 overflow-y-auto h-full">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-sm text-foreground">Mission Center</p>
        <div className="flex items-center gap-1.5">
          {["all", "active", "completed", "available"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-2.5 py-1 rounded-lg text-[9px] font-semibold capitalize transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{f}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-3">
        {[
          { label: "Active", value: "5", color: "text-primary" },
          { label: "Completed", value: "23", color: "text-foreground" },
          { label: "Earned", value: "$1,240", color: "text-primary" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-3 text-center">
            <p className={`font-display font-black text-lg ${s.color}`}>{s.value}</p>
            <p className="text-[9px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { title: "Share 3 Products on Social", brand: "Venum", type: "Social", reward: "150 XP + $10", deadline: "2 days left", progress: 67, slots: "12/20" },
          { title: "Post Training Video Review", brand: "Hayabusa", type: "Content", reward: "200 XP + $15", deadline: "5 days left", progress: 33, slots: "8/15" },
          { title: "Refer 5 New Users", brand: "LUUP", type: "Referral", reward: "$25 + 300 XP", deadline: "1 week left", progress: 80, slots: "45/100" },
          { title: "Write Product Review", brand: "Sanabul", type: "Content", reward: "100 XP + $8", deadline: "3 days left", progress: 0, slots: "5/10" },
          { title: "Attend Live Training", brand: "RDX", type: "Event", reward: "250 XP", deadline: "Tomorrow", progress: 0, slots: "18/25" },
        ].map((m) => (
          <div key={m.title} className="rounded-xl border border-border bg-card p-3 flex items-center gap-3 hover:border-primary/30 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
              <Flame className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-bold text-foreground">{m.title}</p>
                <span className="px-1.5 py-0.5 rounded bg-muted text-[8px] font-semibold text-muted-foreground">{m.type}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[9px] text-muted-foreground">{m.brand}</span>
                <span className="text-[9px] text-muted-foreground">·</span>
                <span className="text-[9px] text-muted-foreground">{m.deadline}</span>
                <span className="text-[9px] text-muted-foreground">·</span>
                <span className="text-[9px] text-muted-foreground">{m.slots} slots</span>
              </div>
              {m.progress > 0 && (
                <div className="mt-1.5 flex items-center gap-2">
                  <div className="flex-1 h-1 rounded-full bg-muted max-w-[120px]">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${m.progress}%` }} />
                  </div>
                  <span className="text-[8px] font-bold text-primary">{m.progress}%</span>
                </div>
              )}
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-[10px] font-bold text-primary">{m.reward}</p>
              <button className={`mt-1 px-2.5 py-1 rounded-lg text-[9px] font-bold ${m.progress > 0 ? "bg-primary/10 text-primary" : "bg-primary text-primary-foreground"}`}>
                {m.progress > 0 ? "Continue" : "Join"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════ BRANDS ═══════ */
const WebBrandsScreen = ({ onNavigate }: { onNavigate: (s: WebScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-sm text-foreground">Brand Partners</p>
      <div className="flex items-center gap-1.5 bg-muted rounded-lg px-2.5 py-1.5">
        <Search className="w-3 h-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground">Search brands...</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { name: "Venum", category: "MMA Gear", royalty: "12%", products: 24, rating: 4.8, followers: "12.5k" },
        { name: "Hayabusa", category: "Fight Wear", royalty: "10%", products: 18, rating: 4.9, followers: "8.2k" },
        { name: "Sanabul", category: "Training Equipment", royalty: "15%", products: 32, rating: 4.6, followers: "5.1k" },
        { name: "RDX", category: "Boxing Gear", royalty: "8%", products: 45, rating: 4.5, followers: "15.3k" },
        { name: "Elite Sports", category: "BJJ Gear", royalty: "11%", products: 28, rating: 4.7, followers: "6.8k" },
        { name: "Fairtex", category: "Muay Thai", royalty: "9%", products: 36, rating: 4.8, followers: "9.4k" },
      ].map((b) => (
        <button key={b.name} onClick={() => onNavigate("brand-detail")} className="rounded-xl border border-border bg-card p-3 text-left hover:border-primary/30 transition-colors active:scale-[0.99]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-sm font-bold text-muted-foreground">{b.name[0]}</div>
            <div>
              <p className="text-[11px] font-bold text-foreground">{b.name}</p>
              <p className="text-[8px] text-muted-foreground">{b.category}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div className="text-center">
              <p className="text-[10px] font-bold text-primary">{b.royalty}</p>
              <p className="text-[7px] text-muted-foreground">Royalty</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-foreground">{b.products}</p>
              <p className="text-[7px] text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-foreground">{b.rating}★</p>
              <p className="text-[7px] text-muted-foreground">Rating</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[8px] text-muted-foreground">{b.followers} followers</span>
            <span className="px-2 py-0.5 rounded bg-primary/10 text-[8px] font-bold text-primary">View →</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ COMMUNITY ═══════ */
const WebCommunityScreen = () => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <p className="font-display font-bold text-sm text-foreground">Community Hub</p>
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2 space-y-2">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Feed</p>
        {[
          { user: "Mike T.", action: "shared a product review", time: "2h ago", likes: 24, comments: 8 },
          { user: "Sarah K.", action: "completed 'Share 3 Products' mission", time: "4h ago", likes: 15, comments: 3 },
          { user: "James R.", action: "reached Gold Ambassador tier", time: "6h ago", likes: 42, comments: 12 },
          { user: "Lena V.", action: "posted training gear comparison", time: "8h ago", likes: 31, comments: 7 },
        ].map((post, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary">{post.user[0]}</div>
              <div>
                <p className="text-[10px] font-bold text-foreground"><span className="text-primary">{post.user}</span> {post.action}</p>
                <p className="text-[8px] text-muted-foreground">{post.time}</p>
              </div>
            </div>
            <div className="h-16 rounded-lg bg-muted/50 mb-2" />
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-[9px] text-muted-foreground hover:text-primary"><Heart className="w-3 h-3" /> {post.likes}</button>
              <button className="flex items-center gap-1 text-[9px] text-muted-foreground hover:text-primary"><MessageCircle className="w-3 h-3" /> {post.comments}</button>
              <button className="flex items-center gap-1 text-[9px] text-muted-foreground hover:text-primary"><Share2 className="w-3 h-3" /> Share</button>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Groups</p>
        {[
          { name: "MMA Gear Reviews", members: "2.4k", posts: "150+" },
          { name: "Training Tips", members: "1.8k", posts: "200+" },
          { name: "Affiliate Strategies", members: "950", posts: "80+" },
          { name: "Brand Ambassadors", members: "3.2k", posts: "300+" },
        ].map((g) => (
          <div key={g.name} className="rounded-xl border border-border bg-card p-2.5">
            <p className="text-[10px] font-bold text-foreground">{g.name}</p>
            <p className="text-[8px] text-muted-foreground">{g.members} members · {g.posts} posts</p>
            <button className="mt-1.5 w-full py-1 rounded-lg bg-primary/10 text-[9px] font-bold text-primary">Join</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ WALLET ═══════ */
const WebWalletScreen = () => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <p className="font-display font-bold text-sm text-foreground">Wallet & Earnings</p>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Total Balance", value: "$2,840.50", sub: "Across all ecosystems" },
        { label: "Pending", value: "$340.00", sub: "Processing" },
        { label: "This Month", value: "$680.25", sub: "+18% vs last month" },
        { label: "Lifetime", value: "$8,420.00", sub: "Since joining" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-3">
          <p className="text-[9px] text-muted-foreground">{s.label}</p>
          <p className="font-display font-black text-lg text-foreground mt-0.5">{s.value}</p>
          <p className="text-[8px] text-primary font-semibold mt-0.5">{s.sub}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2 rounded-xl border border-border bg-card p-3">
        <p className="font-display font-bold text-xs text-foreground mb-2">Transaction History</p>
        <div className="space-y-1.5">
          {[
            { desc: "Mission Reward — Share Products", amount: "+$10.00", date: "Mar 22", type: "Mission" },
            { desc: "Referral Commission — Tier 1", amount: "+$24.50", date: "Mar 21", type: "Referral" },
            { desc: "Withdrawal to Bank", amount: "-$500.00", date: "Mar 20", type: "Withdrawal" },
            { desc: "Brand Royalty — Venum", amount: "+$15.75", date: "Mar 19", type: "Royalty" },
            { desc: "Mission Reward — Video Review", amount: "+$15.00", date: "Mar 18", type: "Mission" },
            { desc: "Referral Commission — Tier 2", amount: "+$8.20", date: "Mar 17", type: "Referral" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[8px] ${t.amount.startsWith("+") ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
                {t.amount.startsWith("+") ? <TrendingUp className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-180" />}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-medium text-foreground">{t.desc}</p>
                <p className="text-[8px] text-muted-foreground">{t.date} · {t.type}</p>
              </div>
              <p className={`text-[10px] font-bold ${t.amount.startsWith("+") ? "text-primary" : "text-destructive"}`}>{t.amount}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-xl border border-border bg-card p-3">
          <p className="font-display font-bold text-xs text-foreground mb-2">Earnings Breakdown</p>
          {[
            { label: "Missions", value: "$1,240", pct: 44 },
            { label: "Referrals", value: "$980", pct: 35 },
            { label: "Royalties", value: "$420", pct: 15 },
            { label: "Bonuses", value: "$200", pct: 6 },
          ].map((e) => (
            <div key={e.label} className="mb-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-foreground font-medium">{e.label}</span>
                <span className="text-[9px] font-bold text-foreground">{e.value}</span>
              </div>
              <div className="h-1 rounded-full bg-muted mt-0.5">
                <div className="h-full rounded-full bg-primary" style={{ width: `${e.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-card p-3 space-y-1.5">
          <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">Withdraw Funds</button>
          <button className="w-full py-2 rounded-lg border border-border text-[10px] font-bold text-foreground">Redeem Points</button>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════ LEADERBOARD ═══════ */
const WebLeaderboardScreen = () => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <p className="font-display font-bold text-sm text-foreground">Leaderboard</p>
    <div className="grid grid-cols-3 gap-3">
      {/* Podium */}
      <div className="col-span-2 rounded-xl border border-border bg-card p-4">
        <div className="flex items-end justify-center gap-3 mb-3 h-[100px]">
          {[
            { name: "Sarah K.", xp: "12,400", pos: 2, h: "h-[70px]" },
            { name: "Marcus J.", xp: "15,200", pos: 1, h: "h-[90px]" },
            { name: "Alex R.", xp: "11,800", pos: 3, h: "h-[55px]" },
          ].map((p) => (
            <div key={p.pos} className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold ${p.pos === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{p.name[0]}</div>
              <div className={`w-16 ${p.h} rounded-t-lg flex flex-col items-center justify-end pb-2 ${p.pos === 1 ? "bg-primary/20" : "bg-muted/60"}`}>
                <span className="text-[14px] font-black text-foreground">#{p.pos}</span>
                <span className="text-[8px] font-bold text-foreground">{p.name}</span>
                <span className="text-[7px] text-primary font-semibold">{p.xp} XP</span>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {[4, 5, 6, 7, 8, 9, 10].map((pos) => (
            <div key={pos} className={`flex items-center gap-2 py-1.5 px-2 rounded-lg ${pos === 6 ? "bg-primary/5 border border-primary/20" : ""}`}>
              <span className="text-[10px] font-bold text-muted-foreground w-5">#{pos}</span>
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[8px] font-bold text-muted-foreground">U</div>
              <span className="text-[10px] font-medium text-foreground flex-1">{pos === 6 ? "You" : `User ${pos}`}</span>
              <span className="text-[9px] font-bold text-primary">{(15200 - pos * 800).toLocaleString()} XP</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-xl border border-border bg-card p-3">
          <p className="font-display font-bold text-xs text-foreground mb-2">Your Stats</p>
          {[
            { label: "Rank", value: "#6" },
            { label: "Total XP", value: "11,800" },
            { label: "Streak", value: "12 days" },
            { label: "Missions Done", value: "23" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between py-1 border-b border-border last:border-0">
              <span className="text-[9px] text-muted-foreground">{s.label}</span>
              <span className="text-[10px] font-bold text-foreground">{s.value}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-card p-3">
          <p className="font-display font-bold text-xs text-foreground mb-1">Next Milestone</p>
          <p className="text-[9px] text-muted-foreground">200 XP to reach #5</p>
          <div className="h-1.5 rounded-full bg-muted mt-1.5">
            <div className="h-full rounded-full bg-primary" style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════ PROFILE ═══════ */
const WebProfileScreen = ({ onNavigate }: { onNavigate: (s: WebScreen) => void }) => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <span className="font-display font-bold text-xl text-primary">AR</span>
        </div>
        <div className="flex-1">
          <p className="font-display font-bold text-base text-foreground">Alex Rivera</p>
          <p className="text-[10px] text-muted-foreground">@alexrivera · Los Angeles, CA</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-[9px] font-bold text-primary">Silver Scout</span>
            <span className="px-2 py-0.5 rounded bg-muted text-[9px] font-bold text-muted-foreground">MMA</span>
          </div>
        </div>
        <button onClick={() => onNavigate("settings")} className="px-3 py-1.5 rounded-lg border border-border text-[10px] font-bold text-foreground">Edit Profile</button>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Products", value: "12" },
        { label: "Sales", value: "2.4k" },
        { label: "Followers", value: "8.2k" },
        { label: "Rating", value: "4.9★" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-card p-2.5 text-center">
          <p className="font-display font-black text-base text-foreground">{s.value}</p>
          <p className="text-[8px] text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="font-display font-bold text-xs text-foreground mb-2">My Storefront</p>
      <div className="grid grid-cols-4 gap-2">
        {["Venum Gloves", "Hayabusa Rashguard", "RDX Wraps", "Sanabul Gi"].map((p) => (
          <div key={p} className="rounded-lg border border-border p-2 text-center">
            <div className="h-12 rounded bg-muted/50 mb-1.5" />
            <p className="text-[9px] font-bold text-foreground">{p}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ BRAND DETAIL ═══════ */
const WebBrandDetailScreen = ({ onNavigate }: { onNavigate: (s: WebScreen) => void }) => {
  const [following, setFollowing] = useState(false);
  return (
    <div className="p-4 space-y-3 overflow-y-auto h-full">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
        <div className="p-4 -mt-8">
          <div className="flex items-end gap-3">
            <div className="w-14 h-14 rounded-2xl bg-card border-2 border-background shadow-lg flex items-center justify-center text-lg font-bold text-primary">V</div>
            <div className="flex-1 pb-1">
              <p className="font-display font-bold text-sm text-foreground">Venum</p>
              <p className="text-[9px] text-muted-foreground">Premium MMA Gear · 24 Products</p>
            </div>
            <button onClick={() => setFollowing(!following)} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold ${following ? "border border-border text-foreground" : "bg-primary text-primary-foreground"}`}>
              {following ? "Following" : "Follow"}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {[
              { label: "Royalty Rate", value: "12%" },
              { label: "Products", value: "24" },
              { label: "Ambassadors", value: "156" },
              { label: "Avg. Rating", value: "4.8★" },
            ].map((s) => (
              <div key={s.label} className="text-center p-2 rounded-lg bg-muted/50">
                <p className="text-[11px] font-bold text-primary">{s.value}</p>
                <p className="text-[8px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { name: "Challenger 3.0 Gloves", price: "$79.99", royalty: "12%" },
          { name: "Elite Rashguard", price: "$54.99", royalty: "12%" },
          { name: "Contender Shorts", price: "$44.99", royalty: "12%" },
          { name: "Impact Shinguards", price: "$64.99", royalty: "12%" },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border border-border bg-card p-2">
            <div className="h-16 rounded-lg bg-muted/50 mb-1.5" />
            <p className="text-[10px] font-bold text-foreground">{p.name}</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[10px] font-bold text-primary">{p.price}</span>
              <span className="text-[8px] text-muted-foreground">{p.royalty}</span>
            </div>
            <button className="mt-1.5 w-full py-1 rounded-lg bg-primary/10 text-[8px] font-bold text-primary">Add to Storefront</button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════ NOTIFICATIONS ═══════ */
const WebNotificationsScreen = () => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <p className="font-display font-bold text-sm text-foreground">Notifications</p>
    <div className="space-y-1.5">
      {[
        { title: "Mission Completed!", desc: "You earned 150 XP from 'Share 3 Products'", time: "2h ago", read: false },
        { title: "New Follower", desc: "Mike T. started following your storefront", time: "4h ago", read: false },
        { title: "Referral Reward", desc: "You earned $24.50 from a Tier 1 referral", time: "1d ago", read: true },
        { title: "New Mission Available", desc: "'Post Training Video' from Hayabusa is now live", time: "2d ago", read: true },
        { title: "Rank Up!", desc: "You moved up to #12 on the leaderboard", time: "3d ago", read: true },
      ].map((n, i) => (
        <div key={i} className={`rounded-xl border bg-card p-3 flex items-center gap-3 ${!n.read ? "border-primary/30 bg-primary/5" : "border-border"}`}>
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${!n.read ? "bg-primary" : "bg-transparent"}`} />
          <div className="flex-1">
            <p className="text-[10px] font-bold text-foreground">{n.title}</p>
            <p className="text-[9px] text-muted-foreground">{n.desc}</p>
          </div>
          <span className="text-[8px] text-muted-foreground flex-shrink-0">{n.time}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ═══════ SETTINGS ═══════ */
const WebSettingsScreen = () => (
  <div className="p-4 space-y-3 overflow-y-auto h-full">
    <p className="font-display font-bold text-sm text-foreground">Settings</p>
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-border bg-card p-3 space-y-2">
        <p className="font-display font-bold text-xs text-foreground">Account</p>
        {["Display Name", "Username", "Email", "Password"].map((f) => (
          <div key={f} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
            <span className="text-[10px] text-muted-foreground">{f}</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-card p-3 space-y-2">
        <p className="font-display font-bold text-xs text-foreground">Preferences</p>
        {["Notifications", "Privacy", "Connected Accounts", "Payment Methods"].map((f) => (
          <div key={f} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
            <span className="text-[10px] text-muted-foreground">{f}</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ MAIN WEB APP PROTOTYPE ═══════ */
export const WebAppPrototype = () => {
  const [screen, setScreen] = useState<WebScreen>("dashboard");

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
            <span>app.luup.io/{screen === "dashboard" ? "" : screen}</span>
          </div>
        </div>
      </div>

      {/* App Layout */}
      <div className="flex h-[520px]">
        <SidebarNav active={screen} onNavigate={setScreen} />
        <div className="flex-1 flex flex-col bg-background overflow-hidden">
          <TopBar onNavigate={setScreen} />
          <div className="flex-1 overflow-hidden">
            {screen === "dashboard" && <DashboardScreen onNavigate={setScreen} />}
            {screen === "missions" && <WebMissionsScreen onNavigate={setScreen} />}
            {screen === "brands" && <WebBrandsScreen onNavigate={setScreen} />}
            {screen === "community" && <WebCommunityScreen />}
            {screen === "wallet" && <WebWalletScreen />}
            {screen === "leaderboard" && <WebLeaderboardScreen />}
            {screen === "profile" && <WebProfileScreen onNavigate={setScreen} />}
            {screen === "brand-detail" && <WebBrandDetailScreen onNavigate={setScreen} />}
            {screen === "notifications" && <WebNotificationsScreen />}
            {screen === "settings" && <WebSettingsScreen />}
          </div>
        </div>
      </div>
    </div>
  );
};
