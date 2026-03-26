import { useState } from "react";
import {
  Home, ShoppingBag, User, Flame, Users, Moon, Sun,
} from "lucide-react";
import {
  type Screen,
  OnboardingScreen1, OnboardingScreen2, OnboardingScreen3, OnboardingScreen4,
  LoginScreen, StartScreen, EcosystemSetupScreen, HomeScreen, ExploreScreen, MissionsScreen, StoreScreen,
  ProfileScreen, ProductScreen, StorefrontScreen, WalletScreen,
  LeaderboardScreen, SocialWallScreen, BrandScreen, CheckoutScreen,
  OrderConfirmScreen, NotificationsScreen, EditProfileScreen, SavedItemsScreen, ReferralCodeScreen, ShareStorefrontScreen
} from "./prototype/AppScreens";
import { getEcosystem } from "./prototype/ecosystemData";

const PrototypeSection = () => {
  const [screen, setScreen] = useState<Screen>("onboarding-1");
  const [history, setHistory] = useState<Screen[]>(["onboarding-1"]);
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

  const hideNav = (s: Screen) => ["onboarding-1", "onboarding-2", "onboarding-3", "onboarding-4", "login", "start", "ecosystem-setup"].includes(s);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`wireframe-shell w-[393px] overflow-hidden relative ${darkMode ? "dark" : ""}`} style={{ height: '852px' }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-7 pt-3 pb-1 bg-background">
          <span className="text-xs font-medium text-muted-foreground">9:41</span>
          <div className="w-[126px] h-[34px] rounded-full bg-foreground/10" />
          <div className="flex gap-1">
            <div className="w-4 h-2.5 rounded-sm bg-muted-foreground/30" />
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-background" style={{ height: hideNav(screen) ? 'calc(852px - 50px - 8px)' : 'calc(852px - 50px - 70px - 8px)' }}>
          <div key={screen} className="screen-enter">
            {screen === "onboarding-1" && <OnboardingScreen1 onNavigate={navigate} />}
            {screen === "onboarding-2" && <OnboardingScreen2 onNavigate={navigate} />}
            {screen === "onboarding-3" && <OnboardingScreen3 onNavigate={navigate} />}
            {screen === "onboarding-4" && <OnboardingScreen4 onNavigate={navigate} onSelectEcosystem={handleSelectEcosystem} />}
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
          <div className="border-t border-border bg-card px-2 pb-5 pt-2">
            <div className="flex justify-around">
              <TabBtn icon={<Home />} label="Home" active={screen === "home"} onClick={() => navigate("home")} />
              <TabBtn icon={<Flame />} label="Missions" active={screen === "missions"} onClick={() => navigate("missions")} />
              <TabBtn icon={<Users />} label="Community" active={screen === "explore"} onClick={() => navigate("explore")} />
              <TabBtn icon={<ShoppingBag />} label="Brands" active={screen === "store"} onClick={() => navigate("store")} />
              <TabBtn icon={<User />} label="Profile" active={screen === "profile"} onClick={() => navigate("profile")} />
            </div>
          </div>
        )}

        {/* Home indicator */}
        <div className="flex justify-center pb-2 bg-card">
          <div className="w-32 h-1.5 rounded-full bg-foreground/10" />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 text-xs font-medium text-muted-foreground bg-muted hover:bg-muted/80 hover:text-foreground rounded-full transition-colors flex items-center gap-1.5"
        >
          {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          {darkMode ? "Light" : "Dark"}
        </button>
        <button
          onClick={() => { setScreen("login"); setHistory(["login"]); }}
          className="px-5 py-2 text-xs font-medium text-muted-foreground bg-muted hover:bg-muted/80 hover:text-foreground rounded-full transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PrototypeSection;

const TabBtn = ({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) => (
  <button onClick={onClick} className={`tab-pop flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>
    <span className={`w-5 h-5 transition-transform duration-200 ${active ? "scale-110" : ""}`}>{icon}</span>
    <span className="text-[10px] font-semibold">{label}</span>
  </button>
);
