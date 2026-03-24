import { useState } from "react";
import {
  Search, Home, ShoppingBag, Trophy, User, Flame, Gift,
  TrendingUp, Share2, Wallet, MessageCircle, Bell, Bot, BookOpen
} from "lucide-react";
import {
  type Screen,
  LoginScreen, StartScreen, EcosystemSetupScreen, HomeScreen, ExploreScreen, MissionsScreen, StoreScreen,
  ProfileScreen, ProductScreen, StorefrontScreen, WalletScreen,
  LeaderboardScreen, SocialWallScreen, BrandScreen, CheckoutScreen,
  OrderConfirmScreen, NotificationsScreen
} from "./prototype/AppScreens";
import { getEcosystem } from "./prototype/ecosystemData";

const PrototypeSection = () => {
  const [screen, setScreen] = useState<Screen>("login");
  const [history, setHistory] = useState<Screen[]>(["login"]);
  const [ecosystemId, setEcosystemId] = useState("combat");

  const eco = getEcosystem(ecosystemId);

  const navigate = (to: Screen) => {
    setHistory((h) => [...h, to]);
    setScreen(to);
  };

  const goBack = () => {
    setHistory((h) => {
      const next = h.slice(0, -1);
      setScreen(next[next.length - 1] || "home");
      return next.length ? next : ["home"];
    });
  };

  const handleSelectEcosystem = (id: string) => {
    setEcosystemId(id);
    navigate("ecosystem-setup");
  };

  const handleEcosystemSetupComplete = () => {
    navigate("home");
  };

  const handleSwitchEcosystem = (id: string) => {
    setEcosystemId(id);
  };

  const isTabScreen = (s: Screen) => ["home", "explore", "missions", "store", "profile"].includes(s);

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
          <p className="text-sm md:text-base text-muted-foreground mt-1">14 screens · 140+ interactions · Tap through the full LUUP experience</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px_1fr] gap-6 md:gap-10 items-start">
        {/* Left: Feature callouts */}
        <div className="hidden lg:flex flex-col gap-3 pt-12">
          <FeatureCallout icon={<Home className="w-5 h-5" />} title="Home Feed" desc="Personalised feed with earnings, missions, brands, and AI assistant." active={screen === "home"} onClick={() => navigate("home")} interactions={12} />
          <FeatureCallout icon={<Flame className="w-5 h-5" />} title="Mission Engine" desc="Gamified tasks with streaks, daily rewards, and progress tracking." active={screen === "missions"} onClick={() => navigate("missions")} interactions={6} />
          <FeatureCallout icon={<Wallet className="w-5 h-5" />} title="Wallet & Rewards" desc="Points, tiers, cashback, redemptions, and transaction history." active={screen === "wallet"} onClick={() => navigate("wallet")} interactions={7} />
          <FeatureCallout icon={<Trophy className="w-5 h-5" />} title="Leaderboard" desc="Community rankings with podium, rivalry badges, and challenges." active={screen === "leaderboard"} onClick={() => navigate("leaderboard")} interactions={6} />
          <FeatureCallout icon={<MessageCircle className="w-5 h-5" />} title="Social Wall" desc="UGC feed with product tags, likes, comments, and sharing." active={screen === "social"} onClick={() => navigate("social")} interactions={8} />
        </div>

        {/* Center: Phone */}
        <div className="flex justify-center">
          <div className="wireframe-shell w-[340px] md:w-[380px] overflow-hidden relative">
            <div className="flex items-center justify-between px-7 pt-3 pb-1">
              <span className="text-xs font-medium text-muted-foreground">9:41</span>
              <div className="w-28 h-7 rounded-full bg-foreground/10" />
              <div className="flex gap-1">
                <div className="w-4 h-2.5 rounded-sm bg-muted-foreground/30" />
              </div>
            </div>

            <div className="min-h-[620px] max-h-[620px] overflow-y-auto no-scrollbar">
              {screen === "login" && <LoginScreen onNavigate={navigate} />}
              {screen === "start" && <StartScreen onSelectEcosystem={handleSelectEcosystem} />}
              {screen === "ecosystem-setup" && <EcosystemSetupScreen ecosystem={eco} onComplete={handleEcosystemSetupComplete} />}
              {screen === "home" && <HomeScreen onNavigate={navigate} ecosystem={eco} onSwitchEcosystem={handleSwitchEcosystem} />}
              {screen === "explore" && <ExploreScreen onNavigate={navigate} />}
              {screen === "missions" && <MissionsScreen onNavigate={navigate} ecosystem={eco} />}
              {screen === "store" && <StoreScreen onNavigate={navigate} ecosystem={eco} />}
              {screen === "profile" && <ProfileScreen onNavigate={navigate} />}
              {screen === "product" && <ProductScreen onBack={goBack} onNavigate={navigate} />}
              {screen === "storefront" && <StorefrontScreen onNavigate={navigate} onBack={goBack} />}
              {screen === "wallet" && <WalletScreen onNavigate={navigate} onBack={goBack} ecosystem={eco} />}
              {screen === "leaderboard" && <LeaderboardScreen onBack={goBack} ecosystem={eco} />}
              {screen === "social" && <SocialWallScreen onNavigate={navigate} onBack={goBack} />}
              {screen === "brand" && <BrandScreen onNavigate={navigate} onBack={goBack} />}
              {screen === "checkout" && <CheckoutScreen onNavigate={navigate} onBack={goBack} />}
              {screen === "order-confirm" && <OrderConfirmScreen onNavigate={navigate} />}
              {screen === "notifications" && <NotificationsScreen onNavigate={navigate} onBack={goBack} />}
            </div>

            {isTabScreen(screen) && (
              <div className="border-t border-border bg-card px-2 pb-5 pt-2">
                <div className="flex justify-around">
                  <TabBtn icon={<Home />} label="Home" active={screen === "home"} onClick={() => navigate("home")} />
                  <TabBtn icon={<Users />} label="Community" active={screen === "explore"} onClick={() => navigate("explore")} />
                  <TabBtn icon={<Flame />} label="Missions" active={screen === "missions"} onClick={() => navigate("missions")} />
                  <TabBtn icon={<ShoppingBag />} label="Brands" active={screen === "store"} onClick={() => navigate("store")} />
                  <TabBtn icon={<User />} label="Profile" active={screen === "profile"} onClick={() => navigate("profile")} />
                </div>
              </div>
            )}

            <div className="flex justify-center pb-2">
              <div className="w-32 h-1.5 rounded-full bg-foreground/10" />
            </div>
          </div>
        </div>

        {/* Right: Context info */}
        <div className="hidden lg:flex flex-col gap-3 pt-12">
          <FeatureCallout icon={<MessageCircle className="w-5 h-5" />} title="Social Wall" desc="UGC feed with stories, product tags, likes, comments, and sharing." active={screen === "explore"} onClick={() => navigate("explore")} interactions={8} />
          <FeatureCallout icon={<ShoppingBag className="w-5 h-5" />} title="Brands & Royalties" desc="Browse brand partners, view royalty rates, and add products to your storefront." active={screen === "storefront" || screen === "store"} onClick={() => navigate("store")} interactions={7} />
          <FeatureCallout icon={<BookOpen className="w-5 h-5" />} title="Brand Pages" desc="Brand hubs with products, missions, social wall, and community." active={screen === "brand"} onClick={() => navigate("brand")} interactions={8} />
          <FeatureCallout icon={<User className="w-5 h-5" />} title="Profile & Ambassador" desc="Stats, referral tools, earnings, and ambassador tier progression." active={screen === "profile"} onClick={() => navigate("profile")} interactions={8} />
          <FeatureCallout icon={<Bot className="w-5 h-5" />} title="Affiliate & AI" desc="Affiliate link generation, brand redirect, commission tracking, and Agent AI." active={screen === "checkout" || screen === "order-confirm"} onClick={() => navigate("checkout")} interactions={6} />
        </div>
      </div>

      {/* Mobile screen pills */}
      <div className="flex lg:hidden gap-2 overflow-x-auto no-scrollbar mt-6 pb-2">
        {([
          { label: "Home", s: "home" }, { label: "Social", s: "explore" }, { label: "Missions", s: "missions" },
          { label: "Wallet", s: "wallet" }, { label: "Leaderboard", s: "leaderboard" }, { label: "Social", s: "social" },
          { label: "Brands", s: "store" }, { label: "Brand", s: "brand" }, { label: "Checkout", s: "checkout" }, { label: "Profile", s: "profile" },
        ] as { label: string; s: Screen }[]).map((item) => (
          <button key={item.s} onClick={() => navigate(item.s)} className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${screen === item.s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Screens", value: "15", desc: "navigable views" },
          { label: "Interactions", value: "140+", desc: "from interaction map" },
          { label: "State Variants", value: "60+", desc: "loading, error, empty..." },
          { label: "Micro-animations", value: "35+", desc: "transitions specified" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card/50 p-3 text-center">
            <p className="font-display font-black text-xl text-primary">{s.value}</p>
            <p className="text-xs font-bold text-foreground">{s.label}</p>
            <p className="text-[10px] text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrototypeSection;

/* ── Sub Components ── */

const TabBtn = ({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>
    <span className="w-5 h-5">{icon}</span>
    <span className="text-[10px] font-semibold">{label}</span>
  </button>
);

const FeatureCallout = ({ icon, title, desc, active, onClick, interactions }: {
  icon: React.ReactNode; title: string; desc: string; active: boolean; onClick: () => void; interactions: number;
}) => (
  <button onClick={onClick} className={`bento-card p-4 text-left transition-all ${active ? "ring-2 ring-primary shadow-lg" : ""}`}>
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-sm text-foreground">{title}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
        <p className="text-[9px] text-primary font-semibold mt-1">{interactions} interactions mapped</p>
      </div>
    </div>
  </button>
);
