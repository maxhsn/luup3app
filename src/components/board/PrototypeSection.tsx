import { useState } from "react";
import {
  Home, ShoppingBag, User, Flame, Users,
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

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="wireframe-shell w-[340px] md:w-[380px] overflow-hidden relative">
        {/* Status bar */}
        <div className="flex items-center justify-between px-7 pt-3 pb-1">
          <span className="text-xs font-medium text-muted-foreground">9:41</span>
          <div className="w-28 h-7 rounded-full bg-foreground/10" />
          <div className="flex gap-1">
            <div className="w-4 h-2.5 rounded-sm bg-muted-foreground/30" />
          </div>
        </div>

        {/* Screen content */}
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
          {screen === "edit-profile" && <EditProfileScreen onBack={goBack} />}
          {screen === "saved-items" && <SavedItemsScreen onBack={goBack} onNavigate={navigate} />}
          {screen === "referral-code" && <ReferralCodeScreen onBack={goBack} />}
          {screen === "share-storefront" && <ShareStorefrontScreen onBack={goBack} />}
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
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1.5 rounded-full bg-foreground/10" />
        </div>
      </div>

      <button
        onClick={() => { setScreen("login"); setHistory(["login"]); }}
        className="mt-4 px-5 py-2 text-xs font-medium text-muted-foreground bg-muted hover:bg-muted/80 hover:text-foreground rounded-full transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default PrototypeSection;

const TabBtn = ({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>
    <span className="w-5 h-5">{icon}</span>
    <span className="text-[10px] font-semibold">{label}</span>
  </button>
);
