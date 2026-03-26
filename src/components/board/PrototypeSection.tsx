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
      <div className={`relative w-[393px] overflow-hidden flex flex-col ${darkMode ? "dark" : ""}`} style={{
        height: '852px',
        borderRadius: '52px',
        background: darkMode ? 'hsl(222 47% 6%)' : 'hsl(220 14% 96%)',
        boxShadow: '0 0 0 1px hsl(0 0% 0% / 0.08), 0 4px 16px hsl(0 0% 0% / 0.06), 0 24px 80px -12px hsl(0 0% 0% / 0.18), inset 0 0 0 1px hsl(0 0% 100% / 0.06)',
      }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-8 pt-4 pb-1 relative z-20">
          <span className="text-[13px] font-semibold text-foreground/70 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>9:41</span>
          <div className="w-[126px] h-[36px] rounded-full bg-foreground" />
          <div className="flex items-center gap-[5px]">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" className="text-foreground/60">
              <rect x="0" y="3" width="3" height="9" rx="1" fill="currentColor" opacity="0.3"/>
              <rect x="4.5" y="2" width="3" height="10" rx="1" fill="currentColor" opacity="0.5"/>
              <rect x="9" y="1" width="3" height="11" rx="1" fill="currentColor" opacity="0.7"/>
              <rect x="13.5" y="0" width="3" height="12" rx="1" fill="currentColor"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="text-foreground/60">
              <path d="M8 2.4C10.6 2.4 12.9 3.5 14.5 5.2L15.6 4.1C13.7 2.1 11 .8 8 .8S2.3 2.1.4 4.1L1.5 5.2C3.1 3.5 5.4 2.4 8 2.4Z" fill="currentColor" opacity="0.4"/>
              <path d="M8 5.6C9.8 5.6 11.4 6.3 12.6 7.5L13.7 6.4C12.2 4.9 10.2 4 8 4S3.8 4.9 2.3 6.4L3.4 7.5C4.6 6.3 6.2 5.6 8 5.6Z" fill="currentColor" opacity="0.7"/>
              <path d="M8 8.8C9 8.8 10 9.2 10.7 9.9L8 12.6L5.3 9.9C6 9.2 7 8.8 8 8.8Z" fill="currentColor"/>
            </svg>
            <div className="flex items-center">
              <div className="w-[24px] h-[11px] rounded-[3px] border-[1.5px] border-foreground/30 relative">
                <div className="absolute inset-[1.5px] rounded-[1.5px] bg-foreground/60" style={{ width: '65%' }} />
              </div>
              <div className="w-[1.5px] h-[5px] rounded-r-sm bg-foreground/30 ml-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-background" style={{
          height: hideNav(screen) ? 'calc(852px - 54px)' : 'calc(852px - 54px - 88px)',
        }}>
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

        {/* Floating tab bar */}
        {!hideNav(screen) && (
          <div className="px-5 pb-2 pt-1.5 bg-gradient-to-t from-background via-background to-transparent">
            <div className="rounded-[28px] px-2 py-2 flex justify-around items-center" style={{
              background: darkMode ? 'hsl(222 30% 14%)' : 'hsl(222 47% 11%)',
              boxShadow: '0 8px 32px hsl(0 0% 0% / 0.2)',
            }}>
              {tabs.map((t) => {
                const active = screen === t.screen;
                return (
                  <button key={t.label} onClick={() => navigate(t.screen)}
                    className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-[20px] transition-all duration-200 ${
                      active ? "bg-background" : ""
                    }`}>
                    <span className={`transition-colors duration-200 ${active ? "text-foreground" : "text-white/40"}`}>{t.icon}</span>
                    {active && <span className="text-[8px] font-bold text-foreground">{t.label}</span>}
                  </button>
                );
              })}
            </div>
            {/* Home indicator */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-32 h-[5px] rounded-full bg-foreground/10" />
            </div>
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
