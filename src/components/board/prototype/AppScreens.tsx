import { useState } from "react";
import {
  Search, Home, ShoppingBag, Trophy, User, Heart, Star, MapPin,
  ChevronRight, Bell, MessageCircle, Flame, Gift, TrendingUp,
  Share2, Plus, Check, ArrowLeft, Wallet, Send, ThumbsUp,
  Camera, Image, CreditCard, Package, Shield, ChevronDown,
  Crown, Zap, Eye, BookOpen, Settings, LogOut, X, Bot
} from "lucide-react";

export type Screen =
  | "home" | "explore" | "missions" | "store" | "profile"
  | "product" | "storefront" | "wallet" | "leaderboard"
  | "social" | "brand" | "checkout" | "notifications"
  | "order-confirm";

/* ═══════ HOME ═══════ */
export const HomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-muted-foreground">Good morning</p>
        <p className="font-display font-bold text-lg text-foreground">Alex Rivera</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onNavigate("notifications")} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center relative">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-[9px] text-destructive-foreground font-bold flex items-center justify-center">3</span>
        </button>
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>

    {/* For You / Following Toggle */}
    <div className="flex bg-muted rounded-xl p-1">
      <div className="flex-1 text-center py-1.5 rounded-lg bg-card text-xs font-bold text-foreground shadow-sm">For You</div>
      <div className="flex-1 text-center py-1.5 rounded-lg text-xs font-medium text-muted-foreground">Following</div>
    </div>

    {/* Earnings Card */}
    <button onClick={() => onNavigate("wallet")} className="w-full rounded-2xl bg-primary p-4 text-primary-foreground text-left">
      <p className="text-xs opacity-80 font-medium">Total Earnings</p>
      <p className="font-display font-black text-3xl mt-1">$1,247.80</p>
      <div className="flex items-center gap-2 mt-2">
        <TrendingUp className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold">+23% this month</span>
      </div>
      <div className="flex gap-3 mt-3">
        <div className="flex-1 rounded-xl bg-primary-foreground/15 p-2.5 text-center">
          <p className="text-[10px] opacity-80">Referrals</p>
          <p className="font-bold text-sm">$842</p>
        </div>
        <div className="flex-1 rounded-xl bg-primary-foreground/15 p-2.5 text-center">
          <p className="text-[10px] opacity-80">Missions</p>
          <p className="font-bold text-sm">$405</p>
        </div>
      </div>
    </button>

    {/* Active Mission Banner */}
    <button onClick={() => onNavigate("missions")} className="w-full rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-3 flex items-center gap-3 text-left">
      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
        <Flame className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold text-foreground">3 Active Missions</p>
        <p className="text-[10px] text-muted-foreground">$50 in rewards available</p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </button>

    {/* Active Missions */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="font-display font-bold text-sm text-foreground">Active Missions</p>
        <button onClick={() => onNavigate("missions")} className="text-xs text-primary font-semibold">See all</button>
      </div>
      <div className="space-y-2">
        <MissionRow emoji="📸" title="Share Venum gear photo" reward="$15" progress={60} />
        <MissionRow emoji="⭐" title="Review Hayabusa gloves" reward="$10" progress={30} />
      </div>
    </div>

    {/* Trending Offers */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="font-display font-bold text-sm text-foreground">Trending Offers</p>
        <button onClick={() => onNavigate("explore")} className="text-xs text-primary font-semibold">Explore</button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {[
          { name: "Hayabusa T3 Gloves", brand: "Hayabusa", royalty: "12%", price: "$89" },
          { name: "Venum Rashguard", brand: "Venum", royalty: "10%", price: "$54" },
          { name: "CBD Recovery Balm", brand: "Eagle Energy", royalty: "15%", price: "$39" },
        ].map((p) => (
          <button key={p.name} onClick={() => onNavigate("product")} className="flex-shrink-0 w-[130px] rounded-2xl border border-border bg-card p-3 text-left hover:shadow-md transition-shadow">
            <div className="w-full h-16 rounded-lg bg-muted mb-2" />
            <p className="font-bold text-xs text-foreground truncate">{p.name}</p>
            <p className="text-[10px] text-muted-foreground">{p.brand} · {p.price}</p>
            <p className="text-[10px] text-primary font-semibold mt-1">Earn {p.royalty}</p>
          </button>
        ))}
      </div>
    </div>

    {/* Leaderboard Preview */}
    <button onClick={() => onNavigate("leaderboard")} className="w-full rounded-2xl border border-border bg-card p-3 text-left">
      <div className="flex items-center gap-2 mb-2">
        <Trophy className="w-4 h-4 text-stage-earnings" />
        <p className="font-bold text-xs text-foreground">Community Leaderboard</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Your rank:</span>
        <span className="text-xs font-bold text-primary">#12</span>
        <span className="text-[10px] text-stage-participation">↑ 3 spots this week</span>
      </div>
    </button>

    {/* Referral CTA */}
    <button onClick={() => onNavigate("profile")} className="w-full rounded-2xl border border-primary/20 bg-primary/5 p-4 text-left">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Share2 className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-foreground">Invite & Earn</p>
          <p className="text-xs text-muted-foreground">Earn 10% on every referral sale</p>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </button>

    {/* Agent AI Floating Pill */}
    <AgentPill />
  </div>
);

/* ═══════ EXPLORE ═══════ */
export const ExploreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-4 space-y-4">
    <p className="font-display font-bold text-lg text-foreground">Explore</p>
    <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2.5">
      <Search className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">Search brands, products, communities...</span>
    </div>
    {/* Recent Searches */}
    <div className="flex flex-wrap gap-1.5">
      {["Venum gloves", "BJJ gear", "fight shorts"].map((q) => (
        <span key={q} className="text-[10px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">🕐 {q}</span>
      ))}
    </div>
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {["All", "MMA", "BJJ", "Boxing", "Muay Thai", "Fitness"].map((c, i) => (
        <div key={c} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
          {c}
        </div>
      ))}
    </div>
    {/* Trending Hashtags */}
    <div className="flex gap-2">
      {["#VenumSquad", "#GloveReview", "#TrainHard"].map((t) => (
        <button key={t} onClick={() => onNavigate("social")} className="px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold border border-primary/15">
          {t}
        </button>
      ))}
    </div>
    {/* Featured Brand */}
    <button onClick={() => onNavigate("brand")} className="w-full rounded-2xl bg-primary/5 border border-primary/10 p-4 text-left">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-muted" />
        <div className="flex-1">
          <span className="tag-accent text-[10px] mb-1 inline-block">Featured Brand</span>
          <p className="font-bold text-sm text-foreground">Venum</p>
          <p className="text-xs text-muted-foreground">Official combat sports gear</p>
          <p className="text-[10px] text-primary font-semibold mt-0.5">12.4k community members</p>
        </div>
      </div>
    </button>
    {/* Product Grid */}
    <div className="grid grid-cols-2 gap-2.5">
      {[
        { name: "Elite Rashguard", price: "$64.99", brand: "Venum" },
        { name: "Pro Boxing Gloves", price: "$89.00", brand: "Hayabusa" },
        { name: "Fight Shorts", price: "$42.00", brand: "Sanabul" },
        { name: "Mouth Guard Pro", price: "$24.99", brand: "Venum" },
      ].map((p) => (
        <button key={p.name} onClick={() => onNavigate("product")} className="rounded-2xl border border-border bg-card p-3 text-left hover:shadow-md transition-shadow">
          <div className="aspect-square rounded-xl bg-muted mb-2 relative">
            <button className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-card/80 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Heart className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
          <p className="font-bold text-xs text-foreground truncate">{p.name}</p>
          <p className="text-[10px] text-muted-foreground">{p.brand}</p>
          <p className="text-xs font-bold text-primary mt-1">{p.price}</p>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ MISSIONS ═══════ */
export const MissionsScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-lg text-foreground">Missions</p>
        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">3 Active</div>
      </div>

      {/* Streak Counter */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted border border-border">
        <div className="flex items-center gap-1">
          <Flame className="w-5 h-5 text-destructive" />
          <span className="font-display font-black text-xl text-foreground">7</span>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">Day Streak 🔥</p>
          <p className="text-[10px] text-muted-foreground">Keep going! 3 more days for bonus</p>
        </div>
      </div>

      {/* Weekly Challenge */}
      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4 text-primary-foreground">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4" />
          <span className="text-xs font-bold opacity-90">WEEKLY CHALLENGE</span>
        </div>
        <p className="font-display font-bold text-base">Complete 5 missions</p>
        <p className="text-xs opacity-80 mt-1">Earn a $50 bonus reward</p>
        <div className="mt-3 h-2 rounded-full bg-primary-foreground/20">
          <div className="h-full rounded-full bg-primary-foreground w-[60%]" />
        </div>
        <p className="text-[10px] mt-1 opacity-70">3 of 5 completed</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1 bg-muted rounded-xl p-1">
        {(["all", "active", "completed"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${filter === f ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Daily Reward */}
      <button onClick={() => onNavigate("wallet")} className="w-full rounded-2xl border border-stage-earnings/30 bg-stage-earnings/5 p-3 flex items-center gap-3 text-left">
        <div className="w-10 h-10 rounded-xl bg-stage-earnings/15 flex items-center justify-center">
          <Gift className="w-5 h-5 text-stage-earnings" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground">Daily Reward Ready!</p>
          <p className="text-[10px] text-muted-foreground">Claim your 50 bonus points</p>
        </div>
        <span className="px-3 py-1.5 rounded-lg bg-stage-earnings text-white text-[10px] font-bold">Claim</span>
      </button>

      {/* Mission List */}
      <div className="space-y-2.5">
        <MissionCard emoji="📸" title="Share Venum gear on Instagram" brand="Venum" reward="$15" type="Social Share" difficulty="Easy" action="share" />
        <MissionCard emoji="⭐" title="Write a review for Hayabusa T3" brand="Hayabusa" reward="$10" type="Review" difficulty="Easy" action="review" />
        <MissionCard emoji="🎥" title="Post a training video with gear" brand="Sanabul" reward="$25" type="Content" difficulty="Medium" action="upload" />
        <MissionCard emoji="👥" title="Refer 3 friends to LUUP" brand="LUUP" reward="$30" type="Referral" difficulty="Medium" action="refer" />
        <MissionCard emoji="🏆" title="Attend local MMA event" brand="UFC" reward="$50" type="Event" difficulty="Hard" locked />
      </div>
    </div>
  );
};

/* ═══════ WALLET & REWARDS ═══════ */
export const WalletScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
        <ArrowLeft className="w-4 h-4 text-foreground" />
      </button>
      <p className="font-display font-bold text-lg text-foreground">Wallet</p>
    </div>

    {/* Balance Card */}
    <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 p-5 text-primary-foreground">
      <p className="text-xs opacity-70 font-medium">Available Balance</p>
      <p className="font-display font-black text-4xl mt-1">$1,247.80</p>
      <div className="flex gap-3 mt-4">
        <button className="flex-1 rounded-xl bg-primary-foreground/20 backdrop-blur py-2.5 text-xs font-bold text-center">
          Withdraw
        </button>
        <button className="flex-1 rounded-xl bg-primary-foreground/20 backdrop-blur py-2.5 text-xs font-bold text-center">
          Redeem
        </button>
      </div>
    </div>

    {/* Tier Progress */}
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-stage-earnings" />
          <p className="font-bold text-sm text-foreground">Silver Scout</p>
        </div>
        <span className="text-xs text-muted-foreground">Next: Gold</span>
      </div>
      <div className="h-2.5 rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-to-r from-stage-earnings to-primary w-[65%]" />
      </div>
      <p className="text-[10px] text-muted-foreground mt-1.5">3,250 / 5,000 XP to Gold tier</p>
      <div className="flex gap-2 mt-3">
        {["Free Shipping", "10% Bonus", "Early Access"].map((b) => (
          <span key={b} className="text-[9px] font-semibold px-2 py-1 rounded-full bg-primary/5 text-primary border border-primary/10">{b}</span>
        ))}
      </div>
    </div>

    {/* Points Balance */}
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-xl bg-muted p-3">
        <p className="text-[10px] text-muted-foreground">Points</p>
        <p className="font-display font-black text-xl text-foreground">3,250</p>
        <p className="text-[10px] text-primary font-medium">+120 today</p>
      </div>
      <div className="rounded-xl bg-muted p-3">
        <p className="text-[10px] text-muted-foreground">Cashback</p>
        <p className="font-display font-black text-xl text-foreground">$48.20</p>
        <p className="text-[10px] text-stage-participation font-medium">Pending</p>
      </div>
    </div>

    {/* Reward Carousel */}
    <div>
      <p className="font-bold text-sm text-foreground mb-2">Available Rewards</p>
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {[
          { title: "Free Venum Gloves", points: "2,500 pts", img: "🥊" },
          { title: "20% Off Next Order", points: "1,000 pts", img: "🏷️" },
          { title: "$25 Store Credit", points: "2,000 pts", img: "💰" },
        ].map((r) => (
          <div key={r.title} className="flex-shrink-0 w-[140px] rounded-2xl border border-border bg-card p-3">
            <span className="text-2xl">{r.img}</span>
            <p className="font-bold text-xs text-foreground mt-2">{r.title}</p>
            <p className="text-[10px] text-primary font-semibold mt-1">{r.points}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Transaction History */}
    <div>
      <p className="font-bold text-sm text-foreground mb-2">Recent Transactions</p>
      <div className="space-y-1">
        {[
          { label: "Referral Commission", amount: "+$24.00", time: "2h ago", positive: true },
          { label: "Mission: Share Venum", amount: "+$15.00", time: "5h ago", positive: true },
          { label: "Reward Redeemed", amount: "-1,000 pts", time: "1d ago", positive: false },
          { label: "Sale Commission", amount: "+$8.00", time: "2d ago", positive: true },
        ].map((t) => (
          <div key={t.label + t.time} className="flex items-center justify-between py-2.5 px-3 rounded-xl border border-border bg-card">
            <div>
              <p className="text-xs font-medium text-foreground">{t.label}</p>
              <p className="text-[10px] text-muted-foreground">{t.time}</p>
            </div>
            <span className={`text-xs font-bold ${t.positive ? "text-stage-participation" : "text-muted-foreground"}`}>{t.amount}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ LEADERBOARD ═══════ */
export const LeaderboardScreen = ({ onBack }: { onBack: () => void }) => {
  const [period, setPeriod] = useState<"week" | "month" | "all">("week");
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <p className="font-display font-bold text-lg text-foreground">Leaderboard</p>
      </div>

      {/* Period Toggle */}
      <div className="flex gap-1 bg-muted rounded-xl p-1">
        {(["week", "month", "all"] as const).map((p) => (
          <button key={p} onClick={() => setPeriod(p)} className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${period === p ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
            {p === "all" ? "All Time" : p}
          </button>
        ))}
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-3 pt-4 pb-2">
        <PodiumSpot name="Sarah M." points="12.4k" rank={2} height="h-20" />
        <PodiumSpot name="Mike T." points="18.2k" rank={1} height="h-28" crown />
        <PodiumSpot name="Jess K." points="11.1k" rank={3} height="h-16" />
      </div>

      {/* Rankings List */}
      <div className="space-y-1.5">
        {[
          { rank: 4, name: "Chris W.", points: "9,840", delta: "+2" },
          { rank: 5, name: "Emily R.", points: "8,720", delta: "-1" },
          { rank: 6, name: "David L.", points: "7,650", delta: "+5" },
          { rank: 7, name: "Ana P.", points: "6,980", delta: "0" },
          { rank: 8, name: "Tom B.", points: "6,210", delta: "+1" },
        ].map((u) => (
          <div key={u.rank} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
            <span className="text-sm font-bold text-muted-foreground w-6 text-center">#{u.rank}</span>
            <div className="w-8 h-8 rounded-full bg-muted" />
            <div className="flex-1">
              <p className="text-xs font-bold text-foreground">{u.name}</p>
              <p className="text-[10px] text-muted-foreground">{u.points} pts</p>
            </div>
            <span className={`text-[10px] font-bold ${parseInt(u.delta) > 0 ? "text-stage-participation" : parseInt(u.delta) < 0 ? "text-destructive" : "text-muted-foreground"}`}>
              {parseInt(u.delta) > 0 ? `↑${u.delta}` : parseInt(u.delta) < 0 ? `↓${Math.abs(parseInt(u.delta))}` : "—"}
            </span>
          </div>
        ))}

        {/* Your Position */}
        <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-primary bg-primary/5">
          <span className="text-sm font-bold text-primary w-6 text-center">#12</span>
          <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary">AR</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">You</p>
            <p className="text-[10px] text-muted-foreground">3,250 pts</p>
          </div>
          <span className="text-[10px] font-bold text-stage-participation">↑3</span>
        </div>

        {/* Challenge CTA */}
        <button className="w-full py-2.5 rounded-xl border border-primary/30 bg-primary/5 text-xs font-bold text-primary text-center mt-2">
          ⚔️ Challenge #11 — only 120 pts away!
        </button>
      </div>
    </div>
  );
};

/* ═══════ SOCIAL WALL ═══════ */
export const SocialWallScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <p className="font-display font-bold text-lg text-foreground">Community</p>
      </div>
      <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
        <Plus className="w-4 h-4 text-primary-foreground" />
      </button>
    </div>

    {/* Posts */}
    <SocialPost
      author="Sarah Martinez"
      time="2h ago"
      content="Just finished sparring with my new Venum Challenger 3.0 gloves! These are absolutely 🔥"
      likes={42}
      comments={8}
      hasImage
      productTag="Venum Challenger 3.0"
      onProductClick={() => onNavigate("product")}
    />
    <SocialPost
      author="Mike Torres"
      time="5h ago"
      content="Week 3 of the #TrainHard challenge — loving the Hayabusa T3s. Best investment I've made 💪"
      likes={89}
      comments={15}
      hasImage
    />
    <SocialPost
      author="LUUP Official"
      time="1d ago"
      content="🎉 New mission drop! Share your favourite gear setup and earn $25. Tag #LUUPGear to get started."
      likes={234}
      comments={47}
      isBrand
    />
    <SocialPost
      author="Jess Kim"
      time="2d ago"
      content="Just hit Gold tier on LUUP!! 🏆 The rewards just keep getting better. If you haven't joined yet, use my code: JESS-LUUP"
      likes={156}
      comments={23}
    />
  </div>
);

/* ═══════ BRAND PAGE ═══════ */
export const BrandScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<"products" | "missions" | "social" | "community">("products");
  return (
    <div className="space-y-0">
      {/* Hero with parallax hint */}
      <div className="relative h-36 bg-gradient-to-br from-primary/30 to-primary/5">
        <button onClick={onBack} className="absolute top-3 left-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <button className="absolute top-3 right-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
          <Share2 className="w-4 h-4 text-foreground" />
        </button>
      </div>

      <div className="px-5 -mt-10 space-y-4">
        <div className="flex items-end gap-3">
          <div className="w-20 h-20 rounded-2xl bg-card border-2 border-card shadow-lg flex items-center justify-center">
            <span className="font-display font-black text-primary text-xl">V</span>
          </div>
          <div className="pb-1 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="font-display font-bold text-lg text-foreground">Venum</p>
              <Check className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Official combat sports gear</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span><strong className="text-foreground">12.4k</strong> members</span>
          <span><strong className="text-foreground">847</strong> products</span>
          <span><strong className="text-foreground">23</strong> active missions</span>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-primary text-primary-foreground rounded-xl py-2.5 font-bold text-xs">Follow Brand</button>
          <button className="flex-1 border border-border rounded-xl py-2.5 font-bold text-xs text-foreground">Join Community</button>
        </div>

        {/* Content Tabs */}
        <div className="flex border-b border-border">
          {(["products", "missions", "social", "community"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-xs font-semibold capitalize transition-all border-b-2 ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "products" && (
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { name: "Challenger 3.0 Gloves", price: "$79.99" },
              { name: "Elite Rashguard", price: "$64.99" },
              { name: "Kontact Shin Guards", price: "$49.99" },
              { name: "Challenger Headgear", price: "$54.99" },
            ].map((p) => (
              <button key={p.name} onClick={() => onNavigate("product")} className="rounded-2xl border border-border bg-card p-2.5 text-left">
                <div className="aspect-square rounded-xl bg-muted mb-2" />
                <p className="font-bold text-[11px] text-foreground truncate">{p.name}</p>
                <p className="text-xs font-bold text-primary mt-0.5">{p.price}</p>
              </button>
            ))}
          </div>
        )}
        {activeTab === "missions" && (
          <div className="space-y-2">
            <MissionCard emoji="📸" title="Share Venum gear photo" brand="Venum" reward="$15" type="Social" difficulty="Easy" action="share" />
            <MissionCard emoji="⭐" title="Review any Venum product" brand="Venum" reward="$10" type="Review" difficulty="Easy" action="review" />
            <MissionCard emoji="🎥" title="Create a training video" brand="Venum" reward="$25" type="Content" difficulty="Medium" action="upload" />
          </div>
        )}
        {activeTab === "social" && (
          <div className="space-y-3">
            <SocialPost author="Fan123" time="3h ago" content="Love my new Venum gear! 🔥" likes={18} comments={3} hasImage />
          </div>
        )}
        {activeTab === "community" && (
          <div className="space-y-2">
            {["Top Ambassadors", "New Members", "Most Active"].map((section) => (
              <div key={section} className="p-3 rounded-xl border border-border bg-card">
                <p className="text-xs font-bold text-foreground mb-2">{section}</p>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-muted border-2 border-card" />
                  ))}
                  <div className="w-7 h-7 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center">
                    <span className="text-[8px] font-bold text-primary">+42</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Agent AI Widget */}
        <AgentPill context="brand" />
      </div>
    </div>
  );
};

/* ═══════ BRANDS ═══════ */
export const StoreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [addedProducts, setAddedProducts] = useState<string[]>([]);

  const toggleProduct = (name: string) => {
    setAddedProducts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-lg text-foreground">Brands</p>
        <div className="flex items-center gap-2 bg-muted rounded-lg px-2.5 py-1.5">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Search brands</span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {["All Brands", "Combat", "Fitness", "Nutrition", "Apparel"].map((c, i) => (
          <div key={c} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            {c}
          </div>
        ))}
      </div>

      {/* Featured Partner */}
      <button onClick={() => onNavigate("brand")} className="w-full rounded-2xl bg-primary/5 border border-primary/15 p-4 text-left">
        <span className="tag-accent text-[10px] mb-2 inline-block">⭐ Featured Partner</span>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
            <span className="font-display font-black text-primary text-lg">V</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-foreground">Venum</p>
            <p className="text-xs text-muted-foreground">Official combat sports gear</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-[10px] text-primary font-bold">8–12% royalties</span>
              <span className="text-[10px] text-muted-foreground">847 products</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>

      {/* Brand List with Royalty Rates */}
      <div className="space-y-2">
        {[
          { name: "Hayabusa", category: "Combat Gear", royalty: "10–15%", products: 312, logo: "H" },
          { name: "Sanabul", category: "Training Equipment", royalty: "8–10%", products: 189, logo: "S" },
          { name: "Everlast", category: "Boxing & MMA", royalty: "6–9%", products: 524, logo: "E" },
          { name: "RDX Sports", category: "Fitness & Combat", royalty: "7–11%", products: 436, logo: "R" },
        ].map((b) => (
          <button key={b.name} onClick={() => onNavigate("brand")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow text-left">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-foreground">{b.logo}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-xs text-foreground">{b.name}</p>
              <p className="text-[10px] text-muted-foreground">{b.category}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-primary font-bold">{b.royalty} royalties</span>
                <span className="text-[10px] text-muted-foreground">· {b.products} products</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </button>
        ))}
      </div>

      {/* Top Products to Add to Storefront */}
      <div>
        <p className="font-display font-bold text-sm text-foreground mb-1">Top Products to Add</p>
        <p className="text-[10px] text-muted-foreground mb-3">Add products to your storefront and earn royalties on every sale</p>
        <div className="space-y-2">
          {[
            { name: "Venum Challenger 3.0 Gloves", brand: "Venum", price: "$79.99", royalty: "$8.00" },
            { name: "Hayabusa T3 Boxing Gloves", brand: "Hayabusa", price: "$159.99", royalty: "$24.00" },
            { name: "Sanabul Essential Rash Guard", brand: "Sanabul", price: "$24.99", royalty: "$2.50" },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
              <button onClick={() => onNavigate("product")} className="w-14 h-14 rounded-xl bg-muted flex-shrink-0" />
              <button onClick={() => onNavigate("product")} className="flex-1 min-w-0 text-left">
                <p className="font-bold text-xs text-foreground truncate">{p.name}</p>
                <p className="text-[10px] text-muted-foreground">{p.brand} · {p.price}</p>
                <p className="text-[10px] text-primary font-bold mt-0.5">Earn {p.royalty} per sale</p>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); toggleProduct(p.name); }}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                  addedProducts.includes(p.name)
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {addedProducts.includes(p.name) ? (
                  <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Added</span>
                ) : (
                  <span className="flex items-center gap-1"><Plus className="w-3 h-3" /> Add</span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Your Storefront CTA */}
      <button onClick={() => onNavigate("storefront")} className="w-full rounded-xl border border-primary/20 bg-primary/5 p-3 flex items-center gap-3 text-left">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
          <ShoppingBag className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground">Your Storefront</p>
          <p className="text-[10px] text-muted-foreground">{addedProducts.length > 0 ? `${addedProducts.length} products added` : "Start curating your picks"}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-primary" />
      </button>
    </div>
  );
};

/* ═══════ PRODUCT DETAIL ═══════ */
export const ProductScreen = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (s: Screen) => void }) => {
  const [selectedSize, setSelectedSize] = useState(1);
  return (
    <div className="space-y-0">
      <div className="relative">
        <div className="h-52 bg-muted" />
        {/* Image carousel dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-primary w-4" : "bg-foreground/30"}`} />
          ))}
        </div>
        <button onClick={onBack} className="absolute top-3 left-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <button className="absolute top-3 right-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
          <Heart className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      <div className="px-5 py-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground font-medium">Venum</p>
          <p className="font-display font-bold text-lg text-foreground">Challenger 3.0 Boxing Gloves</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "text-stage-earnings fill-stage-earnings" : "text-muted"}`} />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">4.8 (2,147 reviews)</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-display font-black text-2xl text-primary">$79.99</p>
            <p className="text-xs text-stage-participation font-semibold">You earn $8.00 per sale</p>
          </div>
          <div className="flex gap-2">
            {["12oz", "14oz", "16oz"].map((s, i) => (
              <button key={s} onClick={() => setSelectedSize(i)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${i === selectedSize ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Fighter endorsement */}
        <div className="flex items-center gap-3 rounded-xl bg-muted p-3">
          <div className="w-8 h-8 rounded-full bg-primary/10" />
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">Recommended by Jake Shields</p>
            <p className="text-[10px] text-muted-foreground">"Best training gloves I've ever used"</p>
          </div>
        </div>

        {/* Reviews preview */}
        <div className="rounded-xl border border-border p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-foreground">Reviews</p>
            <span className="text-[10px] text-primary font-semibold">See all 2,147</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-foreground">Sarah M. <span className="font-normal text-muted-foreground">· 3d ago</span></p>
              <p className="text-[10px] text-muted-foreground">Amazing quality for the price. Highly recommend!</p>
            </div>
          </div>
        </div>

        {/* Ask AI */}
        <button className="w-full rounded-xl border border-primary/20 bg-primary/5 p-3 flex items-center gap-3 text-left">
          <Bot className="w-5 h-5 text-primary" />
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">Ask Agent AI</p>
            <p className="text-[10px] text-muted-foreground">Questions about size, fit, or material</p>
          </div>
        </button>

        {/* Related Products */}
        <div>
          <p className="text-xs font-bold text-foreground mb-2">You might also like</p>
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
            {["Hayabusa T3", "Sanabul Gloves", "Venum Elite"].map((n) => (
              <div key={n} className="flex-shrink-0 w-[100px] rounded-xl border border-border bg-card p-2">
                <div className="aspect-square rounded-lg bg-muted mb-1.5" />
                <p className="text-[10px] font-bold text-foreground truncate">{n}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Affiliate Bar */}
        <div className="flex gap-2 pt-2 sticky bottom-0 bg-card py-3 -mx-5 px-5 border-t border-border">
          <button onClick={() => onNavigate("checkout")} className="flex-1 bg-primary text-primary-foreground rounded-xl py-3 font-bold text-sm flex items-center justify-center gap-2">
            <Share2 className="w-4 h-4" />
            Buy on Brand Site
          </button>
          <button className="w-12 h-12 rounded-xl border border-border flex items-center justify-center">
            <Heart className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ═══════ STOREFRONT ═══════ */
export const StorefrontScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => (
  <div className="space-y-0">
    <div className="relative h-24 bg-gradient-to-br from-primary/20 to-primary/5">
      <button onClick={onBack} className="absolute top-3 left-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
        <ArrowLeft className="w-4 h-4 text-foreground" />
      </button>
    </div>
    <div className="px-5 -mt-8 space-y-4">
      <div className="flex items-end gap-3">
        <div className="w-16 h-16 rounded-2xl bg-card border-2 border-card shadow-md flex items-center justify-center">
          <span className="font-display font-bold text-primary text-lg">JS</span>
        </div>
        <div className="pb-1">
          <div className="flex items-center gap-1.5">
            <p className="font-display font-bold text-base text-foreground">Jake Shields</p>
            <Check className="w-3.5 h-3.5 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground">MMA Legend · 2.4k sales</p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Welcome to my store. These are the products I personally use and recommend for training and competition.
      </p>

      <div className="flex gap-2">
        <button className="flex-1 bg-primary text-primary-foreground rounded-xl py-2.5 font-bold text-xs flex items-center justify-center gap-1.5">
          <Plus className="w-3.5 h-3.5" /> Follow
        </button>
        <button className="flex-1 border border-border rounded-xl py-2.5 font-bold text-xs text-foreground">
          Share Store
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Sales", value: "2.4k" },
          { label: "Followers", value: "8.2k" },
          { label: "Rating", value: "4.9⭐" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-muted p-2 text-center">
            <p className="font-bold text-sm text-foreground">{s.value}</p>
            <p className="text-[9px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="font-display font-bold text-sm text-foreground mb-2">Jake's Picks</p>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { name: "Venum Challenger 3.0", price: "$79.99" },
            { name: "Hayabusa T3 Gloves", price: "$159.99" },
            { name: "Sanabul Rash Guard", price: "$24.99" },
            { name: "Venum Shin Guards", price: "$49.99" },
          ].map((p) => (
            <button key={p.name} onClick={() => onNavigate("product")} className="rounded-2xl border border-border bg-card p-2.5 text-left hover:shadow-md transition-shadow">
              <div className="aspect-square rounded-xl bg-muted mb-2" />
              <p className="font-bold text-[11px] text-foreground truncate">{p.name}</p>
              <p className="text-xs font-bold text-primary mt-0.5">{p.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ═══════ AFFILIATE REDIRECT ═══════ */
export const CheckoutScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <p className="font-display font-bold text-lg text-foreground">Buy via Brand</p>
      </div>

      {/* Product Summary */}
      <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
        <div className="w-16 h-16 rounded-xl bg-muted flex-shrink-0" />
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground">Venum Challenger 3.0</p>
          <p className="text-[10px] text-muted-foreground">14oz · Black/Gold</p>
          <p className="text-sm font-bold text-foreground mt-1">$79.99 on venum.com</p>
        </div>
      </div>

      {/* Affiliate Link Info */}
      <div className="rounded-2xl bg-primary/5 border border-primary/20 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5 text-primary" />
          <p className="text-sm font-bold text-foreground">Your Affiliate Link</p>
        </div>
        <div className="rounded-xl bg-muted px-3 py-2.5 flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground font-mono truncate mr-2">venum.com/gloves?ref=luup_alexr</span>
          <button onClick={() => setCopied(true)} className="text-[10px] font-bold text-primary flex-shrink-0">
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          When anyone buys through your link, you earn commission. The link is tracked for 30 days.
        </p>
      </div>

      {/* Referral Attribution */}
      <div className="rounded-xl bg-stage-participation/5 border border-stage-participation/20 p-3 flex items-center gap-2">
        <Check className="w-4 h-4 text-stage-participation" />
        <div>
          <p className="text-xs font-bold text-foreground">Referred by Jake Shields</p>
          <p className="text-[10px] text-muted-foreground">Jake earns commission if you buy</p>
        </div>
      </div>

      {/* Earnings Breakdown */}
      <div className="rounded-xl border border-border p-3 space-y-2">
        <p className="text-xs font-bold text-foreground">Commission Breakdown</p>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Product Price</span><span className="text-foreground">$79.99</span></div>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Commission Rate</span><span className="text-primary font-medium">10%</span></div>
        <div className="flex justify-between text-xs font-bold pt-1 border-t border-border"><span className="text-foreground">You Earn</span><span className="text-primary">$8.00</span></div>
        <p className="text-[10px] text-muted-foreground">Per sale through your affiliate link</p>
      </div>

      {/* Share Options */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-foreground">Share Your Link</p>
        <div className="grid grid-cols-4 gap-2">
          {["Instagram", "TikTok", "WhatsApp", "More"].map((p) => (
            <button key={p} className="rounded-xl border border-border p-2.5 text-center">
              <div className="w-8 h-8 rounded-full bg-muted mx-auto mb-1" />
              <span className="text-[9px] text-muted-foreground">{p}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Go to Brand Site CTA */}
      <button onClick={() => onNavigate("order-confirm")} className="w-full bg-primary text-primary-foreground rounded-xl py-3.5 font-bold text-sm flex items-center justify-center gap-2">
        <ShoppingBag className="w-4 h-4" />
        Go to venum.com
      </button>
      <p className="text-[10px] text-muted-foreground text-center">You'll complete your purchase on the brand's website</p>
    </div>
  );
};

/* ═══════ LINK SHARED CONFIRMATION ═══════ */
export const OrderConfirmScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-8 space-y-5 text-center">
    {/* Success Animation */}
    <div className="flex justify-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
          <Share2 className="w-8 h-8 text-primary" />
        </div>
      </div>
    </div>

    <div>
      <p className="font-display font-bold text-xl text-foreground">Redirecting to Brand</p>
      <p className="text-sm text-muted-foreground mt-1">Your affiliate link is active</p>
    </div>

    <div className="rounded-2xl border border-border bg-card p-4 text-left">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl bg-muted" />
        <div>
          <p className="text-xs font-bold text-foreground">Venum Challenger 3.0</p>
          <p className="text-[10px] text-muted-foreground">Shopping on venum.com</p>
          <p className="text-sm font-bold text-primary mt-1">$8.00 potential commission</p>
        </div>
      </div>
    </div>

    {/* How It Works */}
    <div className="rounded-2xl bg-muted/50 border border-border p-4 text-left space-y-3">
      <p className="text-xs font-bold text-foreground">How You Earn</p>
      {[
        { step: "1", text: "Complete your purchase on the brand site" },
        { step: "2", text: "Your affiliate link tracks the sale (30-day cookie)" },
        { step: "3", text: "Commission is added to your LUUP wallet" },
      ].map((s) => (
        <div key={s.step} className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center flex-shrink-0">{s.step}</div>
          <p className="text-[11px] text-muted-foreground">{s.text}</p>
        </div>
      ))}
    </div>

    {/* Share & Earn CTA */}
    <button onClick={() => onNavigate("profile")} className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground text-left">
      <div className="flex items-center gap-3">
        <Share2 className="w-6 h-6" />
        <div>
          <p className="font-bold text-sm">Share & Earn More</p>
          <p className="text-xs opacity-80">Earn $8.00 every time someone buys through your link</p>
        </div>
      </div>
    </button>

    {/* Actions */}
    <div className="space-y-2">
      <button onClick={() => onNavigate("wallet")} className="w-full rounded-xl border border-border py-3 text-xs font-bold text-foreground flex items-center justify-center gap-2">
        <Wallet className="w-4 h-4" /> View Earnings
      </button>
      <button onClick={() => onNavigate("missions")} className="w-full rounded-xl border border-primary/20 bg-primary/5 py-3 text-xs font-bold text-primary flex items-center justify-center gap-2">
        <Flame className="w-4 h-4" /> Start a Mission — Earn More
      </button>
      <button onClick={() => onNavigate("home")} className="w-full py-3 text-xs font-medium text-muted-foreground">
        Back to Home
      </button>
    </div>
  </div>
);

/* ═══════ NOTIFICATIONS ═══════ */
export const NotificationsScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <p className="font-display font-bold text-lg text-foreground">Notifications</p>
      </div>
      <button className="text-xs text-primary font-semibold">Mark all read</button>
    </div>

    <div className="space-y-1.5">
      <NotifRow icon="🎯" title="New mission available" desc="Share Venum gear on Instagram — earn $15" time="2m ago" unread onClick={() => onNavigate("missions")} />
      <NotifRow icon="💰" title="Commission earned!" desc="$8.00 from Jake Shields' referral" time="1h ago" unread onClick={() => onNavigate("wallet")} />
      <NotifRow icon="🏆" title="You moved up!" desc="You're now #12 on the leaderboard" time="3h ago" unread onClick={() => onNavigate("leaderboard")} />
      <NotifRow icon="📦" title="Order shipped" desc="Order #LUP-28491 is on its way" time="1d ago" />
      <NotifRow icon="👥" title="New follower" desc="Sarah M. started following your store" time="1d ago" onClick={() => onNavigate("profile")} />
      <NotifRow icon="⭐" title="Review reminder" desc="How are your Venum Challenger 3.0 gloves?" time="2d ago" />
      <NotifRow icon="🔥" title="Streak reminder" desc="Don't break your 7-day streak! Complete a mission today" time="2d ago" onClick={() => onNavigate("missions")} />
    </div>
  </div>
);

/* ═══════ PROFILE ═══════ */
export const ProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
          <span className="font-display font-bold text-lg text-primary">AR</span>
        </div>
        <div>
          <p className="font-display font-bold text-lg text-foreground">Alex Rivera</p>
          <p className="text-xs text-muted-foreground">@alexrivera · Silver Scout</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-3 h-3 text-stage-earnings fill-stage-earnings" />
            <span className="text-xs font-semibold text-foreground">Level 12</span>
          </div>
        </div>
      </div>
      <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
        <Settings className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>

    {/* Ambassador Badge */}
    <button onClick={() => onNavigate("wallet")} className="w-full rounded-2xl bg-gradient-to-r from-stage-earnings/10 to-primary/10 border border-stage-earnings/20 p-3 flex items-center gap-3 text-left">
      <Crown className="w-5 h-5 text-stage-earnings" />
      <div className="flex-1">
        <p className="text-xs font-bold text-foreground">Silver Scout Ambassador</p>
        <p className="text-[10px] text-muted-foreground">1,750 XP to Gold · Unlock 15% commission</p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </button>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: "Referrals", value: "47" },
        { label: "Missions", value: "23" },
        { label: "Network", value: "182" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl bg-muted p-3 text-center">
          <p className="font-display font-black text-xl text-foreground">{s.value}</p>
          <p className="text-[10px] text-muted-foreground font-medium">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Referral Code */}
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
      <p className="font-bold text-sm text-foreground mb-1">Your Referral Code</p>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-card rounded-xl px-3 py-2 border border-border">
          <p className="font-mono text-sm text-foreground">ALEX-LUUP-2024</p>
        </div>
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <Share2 className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
      <p className="text-[10px] text-muted-foreground mt-2">Shared 24 times · 8 conversions</p>
      {/* Share to platform buttons */}
      <div className="flex gap-2 mt-3">
        {["WhatsApp", "Instagram", "TikTok"].map((p) => (
          <button key={p} className="flex-1 py-1.5 rounded-lg bg-muted text-[10px] font-semibold text-foreground border border-border">{p}</button>
        ))}
      </div>
    </div>

    {/* Earnings Breakdown */}
    <div>
      <p className="font-display font-bold text-sm text-foreground mb-2">Earnings Breakdown</p>
      <div className="space-y-2">
        <EarningsRow label="Direct Sales Commission" amount="$542.00" />
        <EarningsRow label="Referral Earnings (Tier 1)" amount="$318.40" />
        <EarningsRow label="Network Earnings (Tier 2-4)" amount="$247.40" />
        <EarningsRow label="Mission Rewards" amount="$140.00" />
      </div>
    </div>

    {/* Menu Items */}
    <div className="space-y-1">
      {[
        { label: "My Storefront", screen: "storefront" as Screen },
        { label: "Saved Items", screen: "store" as Screen },
        { label: "Order History", screen: "home" as Screen },
        { label: "My Communities", screen: "social" as Screen },
        { label: "Settings", screen: "home" as Screen },
      ].map((item) => (
        <button key={item.label} onClick={() => onNavigate(item.screen)} className="w-full flex items-center justify-between py-3 px-1 border-b border-border last:border-0 text-left">
          <span className="text-sm text-foreground font-medium">{item.label}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      ))}
    </div>

    {/* Activity Feed Preview */}
    <div className="rounded-xl border border-border p-3">
      <p className="text-xs font-bold text-foreground mb-2">Recent Activity</p>
      <div className="space-y-2">
        {[
          "Completed mission: Share Venum gear",
          "Earned $24 referral commission",
          "Moved to #12 on leaderboard",
        ].map((a) => (
          <div key={a} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <p className="text-[10px] text-muted-foreground">{a}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════ */
/* ═══════ SHARED COMPONENTS ═══════ */
/* ═══════════════════════════════════════════════════ */

export const MissionRow = ({ emoji, title, reward, progress }: { emoji: string; title: string; reward: string; progress: number }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
    <span className="text-lg">{emoji}</span>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-bold text-foreground truncate">{title}</p>
      <div className="h-1.5 rounded-full bg-muted mt-1.5">
        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
      </div>
    </div>
    <span className="text-xs font-bold text-primary flex-shrink-0">{reward}</span>
  </div>
);

const MissionCard = ({ emoji, title, brand, reward, type, difficulty, locked, action }: {
  emoji: string; title: string; brand: string; reward: string; type: string; difficulty: string; locked?: boolean; action?: string;
}) => (
  <div className={`p-3.5 rounded-2xl border bg-card ${locked ? "opacity-50 border-border" : "border-border"}`}>
    <div className="flex items-start gap-3">
      <span className="text-2xl">{emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
            difficulty === "Easy" ? "bg-stage-participation/10 text-stage-participation" :
            difficulty === "Medium" ? "bg-stage-conversion/10 text-stage-conversion" :
            "bg-stage-network/10 text-stage-network"
          }`}>{type}</span>
          {locked && <span className="text-[10px] text-muted-foreground">🔒 Locked</span>}
        </div>
        <p className="text-sm font-bold text-foreground">{title}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">by {brand}</p>
        {!locked && action && (
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">
              {action === "share" ? "Share Now" : action === "review" ? "Write Review" : action === "upload" ? "Upload" : "Invite"}
            </button>
          </div>
        )}
      </div>
      <span className="text-sm font-bold text-primary flex-shrink-0">{reward}</span>
    </div>
  </div>
);

const EarningsRow = ({ label, amount }: { label: string; amount: string }) => (
  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-muted/60 border border-border">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-xs font-bold text-foreground">{amount}</span>
  </div>
);

const SocialPost = ({ author, time, content, likes, comments, hasImage, productTag, onProductClick, isBrand }: {
  author: string; time: string; content: string; likes: number; comments: number; hasImage?: boolean; productTag?: string; onProductClick?: () => void; isBrand?: boolean;
}) => (
  <div className="rounded-2xl border border-border bg-card p-3.5 space-y-2.5">
    <div className="flex items-center gap-2.5">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBrand ? "bg-primary/10" : "bg-muted"}`}>
        {isBrand && <Zap className="w-3.5 h-3.5 text-primary" />}
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold text-foreground">{author} {isBrand && <Check className="inline w-3 h-3 text-primary" />}</p>
        <p className="text-[10px] text-muted-foreground">{time}</p>
      </div>
    </div>
    <p className="text-xs text-foreground leading-relaxed">{content}</p>
    {hasImage && (
      <div className="h-32 rounded-xl bg-muted relative">
        {productTag && (
          <button onClick={onProductClick} className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-card/90 backdrop-blur text-[10px] font-bold text-foreground border border-border flex items-center gap-1">
            <ShoppingBag className="w-3 h-3" /> {productTag}
          </button>
        )}
      </div>
    )}
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
        <Heart className="w-3.5 h-3.5" />
        <span className="text-[10px] font-medium">{likes}</span>
      </button>
      <button className="flex items-center gap-1 text-muted-foreground">
        <MessageCircle className="w-3.5 h-3.5" />
        <span className="text-[10px] font-medium">{comments}</span>
      </button>
      <button className="flex items-center gap-1 text-muted-foreground ml-auto">
        <Share2 className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
);

const NotifRow = ({ icon, title, desc, time, unread, onClick }: {
  icon: string; title: string; desc: string; time: string; unread?: boolean; onClick?: () => void;
}) => (
  <button onClick={onClick} className={`w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${unread ? "border-primary/20 bg-primary/5" : "border-border bg-card"}`}>
    <span className="text-lg">{icon}</span>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-bold text-foreground">{title}</p>
      <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{desc}</p>
      <p className="text-[9px] text-muted-foreground/60 mt-1">{time}</p>
    </div>
    {unread && <div className="w-2 h-2 rounded-full bg-primary mt-1 flex-shrink-0" />}
  </button>
);

const PodiumSpot = ({ name, points, rank, height, crown }: {
  name: string; points: string; rank: number; height: string; crown?: boolean;
}) => (
  <div className="flex flex-col items-center gap-2">
    <div className="relative">
      {crown && <Crown className="w-5 h-5 text-stage-earnings absolute -top-4 left-1/2 -translate-x-1/2" />}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${rank === 1 ? "bg-stage-earnings/20 border-2 border-stage-earnings" : "bg-muted border-2 border-border"}`}>
        <span className="text-xs font-bold text-foreground">{name.charAt(0)}{name.split(" ")[1]?.charAt(0)}</span>
      </div>
    </div>
    <div className={`${height} w-16 rounded-t-xl flex flex-col items-center justify-end pb-2 ${
      rank === 1 ? "bg-stage-earnings/20 border border-stage-earnings/30" :
      rank === 2 ? "bg-muted border border-border" :
      "bg-muted/60 border border-border"
    }`}>
      <span className="font-display font-black text-lg text-foreground">#{rank}</span>
    </div>
    <p className="text-[10px] font-bold text-foreground">{name}</p>
    <p className="text-[9px] text-muted-foreground">{points} pts</p>
  </div>
);

const AgentPill = ({ context }: { context?: string }) => (
  <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-3 flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center animate-pulse">
      <Bot className="w-4 h-4 text-primary" />
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold text-foreground">Agent AI</p>
      <p className="text-[10px] text-muted-foreground">
        {context === "brand" ? "Ask me about this brand's products" : "How can I help you today?"}
      </p>
    </div>
    <ChevronRight className="w-4 h-4 text-primary" />
  </div>
);
