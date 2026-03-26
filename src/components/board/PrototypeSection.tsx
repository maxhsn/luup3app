import { useState } from "react";
import {
  Home, ShoppingBag, User, Flame, Users, Moon, Sun, RotateCcw,
} from "lucide-react";
import {
  type Screen,
  LoginScreen, StartScreen, EcosystemSetupScreen, HomeScreen, ExploreScreen, MissionsScreen, StoreScreen,
  ProfileScreen, ProductScreen, StorefrontScreen, WalletScreen,
  LeaderboardScreen, SocialWallScreen, BrandScreen, CheckoutScreen,
  OrderConfirmScreen, NotificationsScreen, EditProfileScreen, SavedItemsScreen, ReferralCodeScreen, ShareStorefrontScreen
} from "./prototype/AppScreens";
import { getEcosystem } from "./prototype/ecosystemData";

const PrototypeSection = () => {
  const [screen, setScreen] = useState<Screen>("login");
  const [history, setHistory] = useState<Screen[]>(["login"]);
  const [ecosystemId, setEcosystemId] = useState("combat");
  const [darkMode, setDarkMode] = useState(false);

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

  const hideNav = (s: Screen) => ["login", "start", "ecosystem-setup"].includes(s);

  const tabs = [
    { icon: <Home className="w-[18px] h-[18px]" />, label: "Home", screen: "home" as Screen },
    { icon: <Flame className="w-[18px] h-[18px]" />, label: "Missions", screen: "missions" as Screen },
    { icon: <Users className="w-[18px] h-[18px]" />, label: "Community", screen: "explore" as Screen },
    { icon: <ShoppingBag className="w-[18px] h-[18px]" />, label: "Brands", screen: "store" as Screen },
    { icon: <User className="w-[18px] h-[18px]" />, label: "Profile", screen: "profile" as Screen },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Phone frame */}
      <div className={`wireframe-shell w-[393px] overflow-hidden relative flex flex-col ${darkMode ? "dark" : ""}`} style={{ height: '852px' }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-7 pt-3 pb-1 bg-background/80 backdrop-blur-xl relative z-20">
          <span className="text-[11px] font-semibold text-foreground/60 tracking-tight">9:41</span>
          <div className="w-[126px] h-[34px] rounded-full bg-foreground" />
          <div className="flex items-center gap-1">
            <div className="flex gap-[2px]">
              {[10, 12, 14, 10].map((h, i) => (
                <div key={i} className={`w-[3px] rounded-sm ${i < 3 ? "bg-foreground/60" : "bg-foreground/20"}`} style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="w-[22px] h-[10px] rounded-[3px] border border-foreground/25 relative ml-0.5">
              <div className="absolute inset-[1.5px] rounded-[1.5px] bg-foreground/60" style={{ width: '60%' }} />
              <div className="absolute right-[-3px] top-[2.5px] w-[1.5px] h-[5px] rounded-r-sm bg-foreground/25" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-background" style={{ height: hideNav(screen) ? 'calc(852px - 50px - 8px)' : 'calc(852px - 50px - 80px - 8px)' }}>
          <div key={screen} className="screen-enter">
            {screen === "login" && <LoginScreen onNavigate={navigate} />}
            {screen === "start" && <StartScreen onSelectEcosystem={handleSelectEcosystem} onSkip={() => navigate("home")} />}
            {screen === "ecosystem-setup" && <EcosystemSetupScreen ecosystem={eco} onComplete={handleEcosystemSetupComplete} />}
            {screen === "home" && <HomeScreen onNavigate={navigate} ecosystem={eco} onSwitchEcosystem={handleSwitchEcosystem} />}
            {screen === "explore" && <ExploreScreen onNavigate={navigate} />}
            {screen === "missions" && <MissionsScreen onNavigate={navigate} ecosystem={eco} />}
            {screen === "store" && <StoreScreen onNavigate={navigate} ecosystem={eco} />}
            {screen === "profile" && <ProfileScreen onNavigate={navigate} />}
            {screen === "product" && <ProductScreen onBack={goBack} onNavigate={navigate} />}
            {screen === "storefront" && <StorefrontScreen onNavigate={navigate} onBack={goBack} />}
            {screen === "wallet" && <WalletScreen onNavigate={navigate} onBack={goBack} ecosystem={eco} />}
            {screen === "leaderboard" && <LeaderboardScreen onBack={goBack} ecosystem={eco} onNavigate={navigate} />}
            {screen === "social" && <SocialWallScreen onNavigate={navigate} onBack={goBack} />}
            {screen === "brand" && <BrandScreen onNavigate={navigate} onBack={goBack} />}
            {screen === "checkout" && <CheckoutScreen onNavigate={navigate} onBack={goBack} />}
            {screen === "order-confirm" && <OrderConfirmScreen onNavigate={navigate} />}
            {screen === "notifications" && <NotificationsScreen onNavigate={navigate} onBack={goBack} />}
            {screen === "edit-profile" && <EditProfileScreen onBack={goBack} />}
            {screen === "saved-items" && <SavedItemsScreen onBack={goBack} onNavigate={navigate} />}
            {screen === "referral-code" && <ReferralCodeScreen onBack={goBack} />}
            {screen === "share-storefront" && <ShareStorefrontScreen onBack={goBack} />}
          </div>
        </div>

        {/* Bottom tab bar */}
        {!hideNav(screen) && (
          <div className="bg-card/90 backdrop-blur-2xl border-t border-border/30 px-1 pb-6 pt-1.5">
            <div className="flex justify-around">
              {tabs.map((t) => {
                const active = screen === t.screen;
                return (
                  <button key={t.label} onClick={() => navigate(t.screen)}
                    className={`tab-pop flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all ${active ? "text-primary" : "text-muted-foreground/60"}`}>
                    <span className={`transition-all duration-200 ${active ? "scale-110" : ""}`}>{t.icon}</span>
                    <span className={`text-[9px] font-semibold transition-all ${active ? "text-primary" : ""}`}>{t.label}</span>
                    {active && <div className="w-4 h-[3px] rounded-full bg-primary" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Home indicator */}
        {!hideNav(screen) && (
          <div className="flex justify-center pb-1.5 bg-card/90 backdrop-blur-2xl -mt-1">
            <div className="w-32 h-[5px] rounded-full bg-foreground/10" />
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2.5 mt-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2.5 text-[11px] font-semibold text-muted-foreground bg-card border border-border hover:border-primary/30 hover:text-foreground rounded-xl transition-all flex items-center gap-2 shadow-sm"
        >
          {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={() => { setScreen("login"); setHistory(["login"]); }}
          className="px-4 py-2.5 text-[11px] font-semibold text-muted-foreground bg-card border border-border hover:border-primary/30 hover:text-foreground rounded-xl transition-all flex items-center gap-2 shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>
    </div>
  );
};

export default PrototypeSection;
