import { useState } from "react";
import { Search, Home, ShoppingBag, Trophy, User, Heart, Star, MapPin, ChevronRight, Bell, MessageCircle, Flame, Gift, TrendingUp, Share2, Plus, Check, ArrowLeft } from "lucide-react";

type Screen = "home" | "explore" | "missions" | "store" | "profile" | "product" | "storefront";

const PrototypeSection = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [previousScreen, setPreviousScreen] = useState<Screen>("home");

  const navigate = (to: Screen) => {
    setPreviousScreen(screen);
    setScreen(to);
  };

  const goBack = () => setScreen(previousScreen);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
        <div className="h-px flex-1 bg-border" />
        <span className="tag-accent">INTERACTIVE PROTOTYPE</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex items-end gap-3 md:gap-6 mb-6 md:mb-8">
        <span className="text-[3rem] md:text-[6rem] font-display font-black tracking-[-0.06em] leading-none text-border select-none">
          APP
        </span>
        <div className="pb-1 md:pb-3 border-l-4 border-primary pl-3 md:pl-5">
          <h2 className="font-display text-xl md:text-3xl font-black text-foreground tracking-tight">Consumer App Prototype</h2>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Tap through the LUUP mobile experience</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px_1fr] gap-6 md:gap-10 items-start">
        {/* Left: Feature callouts */}
        <div className="hidden lg:flex flex-col gap-4 pt-12">
          <FeatureCallout
            icon={<Flame className="w-5 h-5" />}
            title="Mission Engine"
            desc="Complete brand missions — share, review, attend — and earn real rewards."
            active={screen === "missions"}
            onClick={() => navigate("missions")}
          />
          <FeatureCallout
            icon={<ShoppingBag className="w-5 h-5" />}
            title="Fighter Storefronts"
            desc="Every fighter gets a personalized storefront with their curated picks."
            active={screen === "storefront"}
            onClick={() => navigate("storefront")}
          />
          <FeatureCallout
            icon={<TrendingUp className="w-5 h-5" />}
            title="Referral Engine"
            desc="4-tier referral system that rewards your entire network."
            active={screen === "home"}
            onClick={() => navigate("home")}
          />
        </div>

        {/* Center: Phone */}
        <div className="flex justify-center">
          <div className="wireframe-shell w-[340px] md:w-[380px] overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-7 pt-3 pb-1">
              <span className="text-xs font-medium text-muted-foreground">9:41</span>
              <div className="w-28 h-7 rounded-full bg-foreground/10" />
              <div className="flex gap-1">
                <div className="w-4 h-2.5 rounded-sm bg-muted-foreground/30" />
              </div>
            </div>

            {/* Screen Content */}
            <div className="min-h-[620px] max-h-[620px] overflow-y-auto no-scrollbar">
              {screen === "home" && <HomeScreen onNavigate={navigate} />}
              {screen === "explore" && <ExploreScreen onNavigate={navigate} />}
              {screen === "missions" && <MissionsScreen />}
              {screen === "store" && <StoreScreen onNavigate={navigate} />}
              {screen === "profile" && <ProfileScreen />}
              {screen === "product" && <ProductScreen onBack={goBack} />}
              {screen === "storefront" && <StorefrontScreen onNavigate={navigate} onBack={goBack} />}
            </div>

            {/* Tab Bar */}
            <div className="border-t border-border bg-card px-2 pb-5 pt-2">
              <div className="flex justify-around">
                <TabBtn icon={<Home />} label="Home" active={screen === "home"} onClick={() => navigate("home")} />
                <TabBtn icon={<Search />} label="Explore" active={screen === "explore"} onClick={() => navigate("explore")} />
                <TabBtn icon={<Flame />} label="Missions" active={screen === "missions"} onClick={() => navigate("missions")} />
                <TabBtn icon={<ShoppingBag />} label="Shop" active={screen === "store"} onClick={() => navigate("store")} />
                <TabBtn icon={<User />} label="Profile" active={screen === "profile"} onClick={() => navigate("profile")} />
              </div>
            </div>

            {/* Home Indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-32 h-1.5 rounded-full bg-foreground/10" />
            </div>
          </div>
        </div>

        {/* Right: Context info */}
        <div className="hidden lg:flex flex-col gap-4 pt-12">
          <FeatureCallout
            icon={<Search className="w-5 h-5" />}
            title="Scout Discovery"
            desc="Discover fighters, brands and communities through intelligent search."
            active={screen === "explore"}
            onClick={() => navigate("explore")}
          />
          <FeatureCallout
            icon={<User className="w-5 h-5" />}
            title="Fighter Profiles"
            desc="Track earnings, rank, missions completed, and your referral network."
            active={screen === "profile"}
            onClick={() => navigate("profile")}
          />
          <FeatureCallout
            icon={<Gift className="w-5 h-5" />}
            title="Smart Rewards"
            desc="Dynamic rewards that scale with engagement — the more you do, the more you earn."
            active={screen === "store"}
            onClick={() => navigate("store")}
          />
        </div>
      </div>

      {/* Mobile feature pills */}
      <div className="flex lg:hidden gap-2 overflow-x-auto no-scrollbar mt-6 pb-2">
        {[
          { label: "Home", s: "home" as Screen },
          { label: "Explore", s: "explore" as Screen },
          { label: "Missions", s: "missions" as Screen },
          { label: "Shop", s: "store" as Screen },
          { label: "Storefront", s: "storefront" as Screen },
          { label: "Profile", s: "profile" as Screen },
        ].map((item) => (
          <button
            key={item.s}
            onClick={() => navigate(item.s)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              screen === item.s
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrototypeSection;

/* ---- Sub Components ---- */

const TabBtn = ({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>
    <span className="w-5 h-5">{icon}</span>
    <span className="text-[10px] font-semibold">{label}</span>
  </button>
);

const FeatureCallout = ({ icon, title, desc, active, onClick }: { icon: React.ReactNode; title: string; desc: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`bento-card p-5 text-left transition-all ${active ? "ring-2 ring-primary shadow-lg" : ""}`}
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
      {icon}
    </div>
    <p className="font-display font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
  </button>
);

/* ---- Screens ---- */

const HomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-4 space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-muted-foreground">Good morning</p>
        <p className="font-display font-bold text-lg text-foreground">Alex Rivera</p>
      </div>
      <div className="flex gap-2">
        <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <Bell className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>

    {/* Earnings Card */}
    <div className="rounded-2xl bg-primary p-4 text-primary-foreground">
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
    </div>

    {/* Active Missions */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="font-display font-bold text-sm text-foreground">Active Missions</p>
        <span className="text-xs text-primary font-semibold">See all</span>
      </div>
      <div className="space-y-2">
        <MissionRow emoji="📸" title="Share Venum gear photo" reward="$15" progress={60} />
        <MissionRow emoji="⭐" title="Review Hayabusa gloves" reward="$10" progress={30} />
      </div>
    </div>

    {/* Trending Storefronts */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="font-display font-bold text-sm text-foreground">Trending Storefronts</p>
        <span className="text-xs text-primary font-semibold">Explore</span>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {[
          { name: "Jake Shields", tag: "MMA Legend", sales: "2.4k" },
          { name: "Angela Hill", tag: "UFC Fighter", sales: "1.8k" },
          { name: "Sage North.", tag: "BJJ Pro", sales: "960" },
        ].map((f) => (
          <button
            key={f.name}
            onClick={() => onNavigate("storefront")}
            className="flex-shrink-0 w-[130px] rounded-2xl border border-border bg-card p-3 text-left hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-muted mb-2" />
            <p className="font-bold text-xs text-foreground truncate">{f.name}</p>
            <p className="text-[10px] text-muted-foreground">{f.tag}</p>
            <p className="text-[10px] text-primary font-semibold mt-1">{f.sales} sales</p>
          </button>
        ))}
      </div>
    </div>

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
  </div>
);

const ExploreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-4 space-y-4">
    <p className="font-display font-bold text-lg text-foreground">Explore</p>
    {/* Search */}
    <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2.5">
      <Search className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">Search fighters, brands...</span>
    </div>
    {/* Categories */}
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {["All", "MMA", "BJJ", "Boxing", "Muay Thai"].map((c, i) => (
        <div key={c} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
          {c}
        </div>
      ))}
    </div>
    {/* Featured */}
    <div className="rounded-2xl bg-primary/5 border border-primary/10 p-4">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-muted" />
        <div className="flex-1">
          <span className="tag-accent text-[10px] mb-1 inline-block">Featured Brand</span>
          <p className="font-bold text-sm text-foreground">Venum</p>
          <p className="text-xs text-muted-foreground">Official combat sports gear</p>
        </div>
      </div>
    </div>
    {/* Grid */}
    <div className="grid grid-cols-2 gap-2.5">
      {[
        { name: "Elite Rashguard", price: "$64.99", brand: "Venum" },
        { name: "Pro Boxing Gloves", price: "$89.00", brand: "Hayabusa" },
        { name: "Fight Shorts", price: "$42.00", brand: "Sanabul" },
        { name: "Mouth Guard Pro", price: "$24.99", brand: "Venum" },
      ].map((p) => (
        <button
          key={p.name}
          onClick={() => onNavigate("product")}
          className="rounded-2xl border border-border bg-card p-3 text-left hover:shadow-md transition-shadow"
        >
          <div className="aspect-square rounded-xl bg-muted mb-2" />
          <p className="font-bold text-xs text-foreground truncate">{p.name}</p>
          <p className="text-[10px] text-muted-foreground">{p.brand}</p>
          <p className="text-xs font-bold text-primary mt-1">{p.price}</p>
        </button>
      ))}
    </div>
  </div>
);

const MissionsScreen = () => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-lg text-foreground">Missions</p>
      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">3 Active</div>
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

    {/* Mission List */}
    <div className="space-y-2.5">
      <MissionCard emoji="📸" title="Share Venum gear on Instagram" brand="Venum" reward="$15" type="Social Share" difficulty="Easy" />
      <MissionCard emoji="⭐" title="Write a review for Hayabusa T3" brand="Hayabusa" reward="$10" type="Review" difficulty="Easy" />
      <MissionCard emoji="🎥" title="Post a training video with gear" brand="Sanabul" reward="$25" type="Content" difficulty="Medium" />
      <MissionCard emoji="👥" title="Refer 3 friends to LUUP" brand="LUUP" reward="$30" type="Referral" difficulty="Medium" />
      <MissionCard emoji="🏆" title="Attend local MMA event" brand="UFC" reward="$50" type="Event" difficulty="Hard" locked />
    </div>
  </div>
);

const StoreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-4 space-y-4">
    <p className="font-display font-bold text-lg text-foreground">Shop</p>
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {["For You", "New Drops", "Top Sellers", "Brands"].map((c, i) => (
        <div key={c} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
          {c}
        </div>
      ))}
    </div>
    {/* Featured Product */}
    <button onClick={() => onNavigate("product")} className="w-full rounded-2xl border border-border bg-card overflow-hidden text-left hover:shadow-md transition-shadow">
      <div className="h-36 bg-muted" />
      <div className="p-3">
        <span className="text-[10px] font-semibold text-primary">🔥 Trending</span>
        <p className="font-bold text-sm text-foreground mt-0.5">Venum Challenger 3.0 Gloves</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-bold text-base text-primary">$79.99</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-stage-earnings fill-stage-earnings" />
            <span className="text-xs text-muted-foreground">4.8 (2.1k)</span>
          </div>
        </div>
        <p className="text-[10px] text-stage-participation font-semibold mt-1">Earn $8.00 commission</p>
      </div>
    </button>
    {/* Quick list */}
    <div className="space-y-2">
      {[
        { name: "Hayabusa T3 Boxing Gloves", price: "$159.99", commission: "$16.00" },
        { name: "Sanabul Essential Rash Guard", price: "$24.99", commission: "$2.50" },
        { name: "Venum Kontact Shin Guards", price: "$49.99", commission: "$5.00" },
      ].map((p) => (
        <button key={p.name} onClick={() => onNavigate("product")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow text-left">
          <div className="w-14 h-14 rounded-xl bg-muted flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-bold text-xs text-foreground truncate">{p.name}</p>
            <p className="text-xs font-bold text-primary">{p.price}</p>
            <p className="text-[10px] text-stage-participation font-medium">+{p.commission}</p>
          </div>
          <Heart className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        </button>
      ))}
    </div>
  </div>
);

const ProfileScreen = () => (
  <div className="px-5 py-4 space-y-4">
    {/* Profile Header */}
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
      {["My Storefront", "Saved Items", "Order History", "Settings"].map((item) => (
        <div key={item} className="flex items-center justify-between py-3 px-1 border-b border-border last:border-0">
          <span className="text-sm text-foreground font-medium">{item}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      ))}
    </div>
  </div>
);

const ProductScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="space-y-0">
    {/* Back button overlaid */}
    <div className="relative">
      <div className="h-52 bg-muted" />
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
            <div key={s} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${i === 1 ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground"}`}>
              {s}
            </div>
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

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <button className="flex-1 bg-primary text-primary-foreground rounded-xl py-3 font-bold text-sm">
          Add to Cart
        </button>
        <button className="w-12 h-12 rounded-xl border border-border flex items-center justify-center">
          <Share2 className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  </div>
);

const StorefrontScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => (
  <div className="space-y-0">
    <div className="relative h-24 bg-gradient-to-br from-primary/20 to-primary/5">
      <button onClick={onBack} className="absolute top-3 left-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
        <ArrowLeft className="w-4 h-4 text-foreground" />
      </button>
    </div>
    <div className="px-5 -mt-8 space-y-4">
      {/* Fighter Profile */}
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

      {/* Products */}
      <div>
        <p className="font-display font-bold text-sm text-foreground mb-2">Jake's Picks</p>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { name: "Venum Challenger 3.0", price: "$79.99" },
            { name: "Hayabusa T3 Gloves", price: "$159.99" },
            { name: "Sanabul Rash Guard", price: "$24.99" },
            { name: "Venum Shin Guards", price: "$49.99" },
          ].map((p) => (
            <button
              key={p.name}
              onClick={() => onNavigate("product")}
              className="rounded-2xl border border-border bg-card p-2.5 text-left hover:shadow-md transition-shadow"
            >
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

/* ---- Shared Pieces ---- */

const MissionRow = ({ emoji, title, reward, progress }: { emoji: string; title: string; reward: string; progress: number }) => (
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

const MissionCard = ({ emoji, title, brand, reward, type, difficulty, locked }: { emoji: string; title: string; brand: string; reward: string; type: string; difficulty: string; locked?: boolean }) => (
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
