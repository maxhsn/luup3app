import { useState } from "react";
import {
  Search, Home, ShoppingBag, Trophy, User, Heart, Star, MapPin,
  ChevronRight, Bell, MessageCircle, Flame, Gift, TrendingUp,
  Share2, Plus, Check, ArrowLeft, Wallet, Send, ThumbsUp,
  Camera, Image, CreditCard, Package, Shield, ChevronDown, ChevronLeft,
  Crown, Zap, Eye, BookOpen, Settings, LogOut, X, Bot,
  Bookmark, Repeat2, Award, Hash, TrendingDown, Users, Video,
  Link, ImageIcon, Upload, UserPlus, PenLine, MapPinIcon, Clock, Lock, ChevronUp, CircleDot, Copy, QrCode, ExternalLink, Download
} from "lucide-react";
import { type EcosystemData, type MissionData, type MissionSubmissionType, type MissionStatus, ecosystems } from "./ecosystemData";

export type Screen =
  | "login" | "start" | "ecosystem-setup" | "home" | "explore" | "missions" | "store" | "profile"
  | "product" | "storefront" | "wallet" | "leaderboard"
  | "social" | "brand" | "checkout" | "notifications"
  | "order-confirm" | "edit-profile" | "saved-items" | "referral-code" | "share-storefront";

/* ═══════ ECOSYSTEM STYLE HELPERS ═══════ */
const ecoIcon = (id: string, size = "w-5 h-5") => {
  const icons: Record<string, React.ReactNode> = {
    combat: <Shield className={size} />,
    fitness: <Zap className={size} />,
    outdoor: <MapPin className={size} />,
    beauty: <Star className={size} />,
    gaming: <Trophy className={size} />,
    food: <Flame className={size} />,
  };
  return icons[id] || <Zap className={size} />;
};

const ecoColors: Record<string, { bg: string; text: string; surface: string; gradient: string }> = {
  combat: { bg: "bg-destructive/10", text: "text-destructive", surface: "bg-destructive", gradient: "from-destructive to-destructive/70" },
  fitness: { bg: "bg-primary/10", text: "text-primary", surface: "bg-primary", gradient: "from-primary to-primary/70" },
  outdoor: { bg: "bg-accent-emerald/10", text: "text-accent-emerald", surface: "bg-accent-emerald", gradient: "from-accent-emerald to-accent-teal" },
  beauty: { bg: "bg-accent-coral/10", text: "text-accent-coral", surface: "bg-accent-coral", gradient: "from-accent-coral to-accent-amber" },
  gaming: { bg: "bg-info/10", text: "text-info", surface: "bg-info", gradient: "from-info to-primary" },
  food: { bg: "bg-accent-amber/10", text: "text-accent-amber", surface: "bg-accent-amber", gradient: "from-accent-amber to-accent-coral" },
};

const getEcoColors = (id: string) => ecoColors[id] || ecoColors.combat;

/* ═══════ ACTIVITY RING ═══════ */
const ActivityRing = ({ progress, size = 52, stroke = 5, color = "hsl(var(--primary))", bgColor = "hsl(var(--muted))" }: {
  progress: number; size?: number; stroke?: number; color?: string; bgColor?: string;
}) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={bgColor} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
        className="transition-all duration-700 ease-out" />
    </svg>
  );
};

/* ═══════ LOGIN ═══════ */
export const LoginScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <div className="min-h-[750px] flex flex-col relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(252 60% 18%), hsl(240 40% 8%) 50%, hsl(222 47% 6%))',
    }}>
      {/* Ambient light spots */}
      <div className="absolute top-[-15%] left-[-10%] w-[300px] h-[300px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(252 80% 55% / 0.5), transparent 65%)' }} />
      <div className="absolute bottom-[10%] right-[-15%] w-[250px] h-[250px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(165 80% 45% / 0.4), transparent 65%)' }} />

      <div className="relative z-10 px-8 flex-1 flex flex-col justify-center">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-[22px] mx-auto flex items-center justify-center mb-5" style={{
            background: 'linear-gradient(135deg, hsl(252 80% 60%), hsl(280 70% 55%))',
            boxShadow: '0 8px 32px hsl(252 80% 55% / 0.4)',
          }}>
            <span className="text-3xl font-display font-black text-white">L</span>
          </div>
          <p className="font-display font-black text-[32px] text-white tracking-tight leading-none">LUUP</p>
          <p className="text-[13px] text-white/40 mt-2 font-medium">Earn while you engage</p>
        </div>

        {/* Form area */}
        <div className="space-y-3 stagger-children">
          <button className="w-full flex items-center justify-center gap-3 h-[54px] rounded-2xl text-[13px] font-semibold text-white active:scale-[0.98] transition-all" style={{
            background: 'hsl(0 0% 100% / 0.08)',
            backdropFilter: 'blur(20px)',
          }}>
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 h-[54px] rounded-2xl bg-white text-[13px] font-semibold text-black active:scale-[0.98] transition-all">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Continue with Apple
          </button>
        </div>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[11px] text-white/25 font-medium uppercase tracking-widest">or</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="space-y-3">
          <div className="h-[54px] rounded-2xl px-5 flex items-center" style={{ background: 'hsl(0 0% 100% / 0.06)' }}>
            <span className="text-[13px] text-white/30">Email address</span>
          </div>
          <div className="h-[54px] rounded-2xl px-5 flex items-center" style={{ background: 'hsl(0 0% 100% / 0.06)' }}>
            <span className="text-[13px] text-white/30">Password</span>
          </div>
          {mode === "signup" && (
            <div className="h-[54px] rounded-2xl px-5 flex items-center" style={{ background: 'hsl(0 0% 100% / 0.06)' }}>
              <span className="text-[13px] text-white/30">Confirm password</span>
            </div>
          )}
          <button onClick={() => onNavigate("start")}
            className="w-full h-[54px] rounded-2xl text-[14px] font-bold active:scale-[0.98] transition-all text-white" style={{
              background: 'linear-gradient(135deg, hsl(252 80% 60%), hsl(280 70% 55%))',
              boxShadow: '0 8px 24px hsl(252 80% 55% / 0.35)',
            }}>
            {mode === "signup" ? "Create Account" : "Sign In"}
          </button>
        </div>

        <p className="text-center text-[13px] text-white/35 mt-6">
          {mode === "login" ? (
            <>No account? <button onClick={() => setMode("signup")} className="text-white/70 font-semibold">Sign up</button></>
          ) : (
            <>Have an account? <button onClick={() => setMode("login")} className="text-white/70 font-semibold">Sign in</button></>
          )}
        </p>
        <p className="text-[10px] text-white/15 text-center mt-4">By continuing, you agree to our Terms & Privacy Policy</p>
      </div>
    </div>
  );
};

/* ═══════ START / ONBOARDING ═══════ */
export const StartScreen = ({ onSelectEcosystem, onSkip }: { onSelectEcosystem: (id: string) => void; onSkip: () => void }) => {
  const comingSoonEcosystems = [
    { icon: <Zap className="w-4 h-4" />, label: "Fitness & Wellness", color: "text-primary", bg: "bg-primary/8" },
    { icon: <Star className="w-4 h-4" />, label: "Beauty & Skincare", color: "text-accent-coral", bg: "bg-accent-coral/8" },
    { icon: <MapPin className="w-4 h-4" />, label: "Outdoor & Adventure", color: "text-accent-emerald", bg: "bg-accent-emerald/8" },
    { icon: <Trophy className="w-4 h-4" />, label: "Gaming & Esports", color: "text-info", bg: "bg-info/8" },
  ];

  return (
    <div className="px-6 py-6 space-y-5 min-h-[700px] flex flex-col">
      <div className="text-center space-y-2 pt-4">
        <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center shadow-float" style={{
          background: 'linear-gradient(135deg, hsl(252 80% 60%), hsl(280 70% 55%))',
        }}>
          <span className="text-2xl font-display font-black text-white">L</span>
        </div>
        <p className="font-display font-black text-[22px] text-foreground tracking-tight">You're in.</p>
        <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
          Your network for brands, missions, rewards, and real earning opportunities.
        </p>
      </div>

      <button onClick={onSkip}
        className="w-full p-5 rounded-[24px] text-white active:scale-[0.98] transition-all text-left relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, hsl(252 80% 60%), hsl(280 70% 55%))',
          boxShadow: '0 12px 40px hsl(252 80% 55% / 0.3)',
        }}>
        <div className="relative flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
            <Zap className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-[15px]">Enter LUUP</p>
            <p className="text-[12px] opacity-70 mt-0.5">Full access to every brand, mission & reward</p>
          </div>
          <ChevronRight className="w-5 h-5 opacity-50" />
        </div>
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest">Go deeper</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <p className="text-[12px] text-muted-foreground leading-relaxed">
        Ecosystems are focused worlds within LUUP — tailored brands, missions, and community for a specific interest.
      </p>

      <div className="space-y-2">
        <button onClick={() => onSelectEcosystem("combat")}
          className="w-full flex items-center gap-4 p-4 rounded-[22px] bg-card shadow-card hover:shadow-float transition-all text-left">
          <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-destructive" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-display font-bold text-[14px] text-foreground">Combat Sports</p>
              <span className="px-2 py-0.5 rounded-full bg-accent-emerald/10 text-accent-emerald text-[9px] font-bold uppercase tracking-wider">Live</span>
            </div>
            <p className="text-[12px] text-muted-foreground mt-0.5">Hayabusa, Venum, Everlast & more</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-2 px-4">
          <div className="flex -space-x-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-muted border-2 border-background" />
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground">247 members earning this week</p>
        </div>
      </div>

      <div className="space-y-2.5 flex-1">
        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-widest px-1">More worlds opening soon</p>
        <div className="grid grid-cols-2 gap-2 stagger-grid">
          {comingSoonEcosystems.map((eco) => (
            <div key={eco.label} className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-card shadow-xs">
              <div className={`w-8 h-8 rounded-xl ${eco.bg} flex items-center justify-center flex-shrink-0`}>
                <span className={eco.color}>{eco.icon}</span>
              </div>
              <span className="text-[11px] text-muted-foreground font-medium truncate">{eco.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════ ECOSYSTEM PROFILE SETUP ═══════ */
export const EcosystemSetupScreen = ({ ecosystem, onComplete }: {
  ecosystem: EcosystemData; onComplete: () => void;
}) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const ec = getEcoColors(ecosystem.id);
  const categoryOptions: Record<string, string[]> = {
    combat: ["MMA", "Boxing", "Kickboxing", "Muay Thai", "BJJ", "Wrestling", "Karate", "Judo"],
    fitness: ["Bodybuilding", "Crossfit", "Powerlifting", "Calisthenics", "Running", "HIIT", "Yoga", "Swimming"],
    beauty: ["Skincare", "Makeup", "Haircare", "Fragrance", "Nails", "Wellness"],
    gaming: ["FPS", "MOBA", "Battle Royale", "RPG", "Sports", "Racing", "Sim", "Indie"],
  };
  const categories = categoryOptions[ecosystem.id] || ["Category 1", "Category 2", "Category 3"];

  return (
    <div className="px-6 py-6 space-y-5 min-h-[700px] flex flex-col">
      {/* Progress */}
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map(s => (
          <div key={s} className={`h-[5px] flex-1 rounded-full transition-all ${s <= step ? "bg-primary" : "bg-muted"}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="flex-1 flex flex-col">
          <div className="text-center space-y-2 pt-2 mb-6">
            <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center shadow-card ${ec.bg}`}>
              <span className={ec.text}>{ecoIcon(ecosystem.id)}</span>
            </div>
            <p className="font-display font-black text-xl text-foreground">Set Up Your Profile</p>
            <p className="text-[12px] text-muted-foreground">Step 1 of {totalSteps} · {ecosystem.label}</p>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center" style={{
                boxShadow: '0 6px 20px hsl(252 80% 55% / 0.3)',
              }}>
                <span className="text-lg font-black text-white">AR</span>
              </div>
              <button className="px-4 py-2.5 rounded-xl bg-card shadow-card text-[11px] font-semibold text-foreground flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" /> Change photo
              </button>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Username</p>
              <div className="h-12 rounded-2xl bg-muted/50 px-4 flex items-center gap-2">
                <span className="text-[13px] text-muted-foreground/50">@</span>
                <span className="text-[13px] text-foreground font-medium">alex_rivera</span>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Display Name</p>
              <div className="h-12 rounded-2xl bg-muted/50 px-4 flex items-center">
                <span className="text-[13px] text-foreground font-medium">Alex Rivera</span>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Bio</p>
              <div className="h-20 rounded-2xl bg-muted/50 px-4 pt-3.5">
                <span className="text-[13px] text-muted-foreground/50">Tell the {ecosystem.label} community about you...</span>
              </div>
            </div>
          </div>
          <button onClick={() => setStep(2)} className="w-full h-[52px] rounded-2xl bg-primary text-white text-[14px] font-bold mt-4 active:scale-[0.98] transition-transform shadow-lg">
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex-1 flex flex-col">
          <div className="text-center space-y-1.5 pt-2 mb-6">
            <p className="font-display font-black text-xl text-foreground">Details & Socials</p>
            <p className="text-[12px] text-muted-foreground">Step 2 of {totalSteps}</p>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Country</p>
              <div className="h-12 rounded-2xl bg-muted/50 px-4 flex items-center justify-between">
                <span className="text-[13px] text-foreground flex items-center gap-2 font-medium"><MapPin className="w-4 h-4 text-muted-foreground" /> United Kingdom</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-2.5 uppercase tracking-wider">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, i) => (
                  <button key={cat} className={`px-4 py-2.5 rounded-2xl text-[12px] font-semibold transition-all active:scale-95 ${
                    i === 0 ? "bg-primary text-white shadow-sm" : "bg-muted/50 text-foreground"
                  }`}>{cat}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground mb-2.5 uppercase tracking-wider">Social Handles</p>
              <div className="space-y-2">
                {[["Instagram", "@alex_fights"], ["TikTok", "@username"], ["YouTube", "@channel"], ["X / Twitter", "@handle"]].map(([label, val]) => (
                  <div key={label} className="h-12 rounded-2xl bg-muted/50 px-4 flex items-center gap-3">
                    <span className="text-[11px] font-semibold text-muted-foreground w-20 flex-shrink-0">{label}</span>
                    <span className="text-[13px] text-foreground">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 mt-4">
            <button onClick={() => setStep(1)} className="flex-1 h-[52px] rounded-2xl bg-muted text-[14px] font-bold text-foreground active:scale-[0.98] transition-transform">Back</button>
            <button onClick={() => setStep(3)} className="flex-[2] h-[52px] rounded-2xl bg-primary text-white text-[14px] font-bold active:scale-[0.98] transition-transform shadow-lg">Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-5 shadow-card ${ec.bg}`}>
            <span className={ec.text}>{ecoIcon(ecosystem.id, "w-8 h-8")}</span>
          </div>
          <p className="font-display font-black text-[22px] text-foreground">You're All Set</p>
          <p className="text-[13px] text-muted-foreground mt-2 max-w-[260px] leading-relaxed">
            Your {ecosystem.label} profile is ready. Start exploring brands, completing missions, and earning.
          </p>
          <div className="w-full mt-6 rounded-[22px] bg-card shadow-card p-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-black text-white">AR</span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-foreground">Alex Rivera</p>
                <p className="text-[11px] text-muted-foreground">@alex_rivera · UK · MMA</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5 mt-4 w-full stagger-grid">
            {[
              { icon: <Flame className="w-4 h-4 text-primary" />, val: String(ecosystem.missions.length), label: "Missions", bg: "bg-primary/8" },
              { icon: <ShoppingBag className="w-4 h-4 text-accent-amber" />, val: String(ecosystem.brands.length + 1), label: "Brands", bg: "bg-accent-amber/8" },
              { icon: <Trophy className="w-4 h-4 text-accent-emerald" />, val: "Bronze", label: "Tier", bg: "bg-accent-emerald/8" },
            ].map((s) => (
              <div key={s.label} className={`rounded-2xl p-3.5 text-center ${s.bg}`}>
                <div className="mx-auto w-fit mb-1.5">{s.icon}</div>
                <p className="text-[11px] font-bold text-foreground">{s.val}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <button onClick={onComplete} className="w-full h-[52px] rounded-2xl bg-primary text-white text-[14px] font-bold mt-6 active:scale-[0.98] transition-transform shadow-lg">
            Start Exploring
          </button>
        </div>
      )}
    </div>
  );
};

/* ═══════ HOME ═══════ */
export const HomeScreen = ({ onNavigate, ecosystem, onSwitchEcosystem }: {
  onNavigate: (s: Screen) => void; ecosystem: EcosystemData; onSwitchEcosystem: (id: string) => void;
}) => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const missionsComplete = ecosystem.missions.filter(m => m.status === "approved").length;
  const ec = getEcoColors(ecosystem.id);

  return (
    <div className="px-6 py-4 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate("profile")} className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-black text-white">AR</span>
          </button>
          <div>
            <p className="text-[11px] text-muted-foreground font-medium">Good afternoon</p>
            <p className="font-display font-black text-[18px] text-foreground leading-tight tracking-tight">Alex</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowSwitcher(!showSwitcher)}
            className="h-9 px-3.5 rounded-full bg-card shadow-card flex items-center gap-2 active:scale-95 transition-transform">
            <div className={`w-5 h-5 rounded-md ${ec.bg} flex items-center justify-center`}>
              <span className={ec.text}>{ecoIcon(ecosystem.id, "w-3 h-3")}</span>
            </div>
            <span className="text-[11px] font-bold text-foreground">{ecosystem.label.split(" ")[0]}</span>
            <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${showSwitcher ? "rotate-180" : ""}`} />
          </button>
          <button onClick={() => onNavigate("notifications")} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center relative">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-[8px] font-bold text-white flex items-center justify-center">3</span>
          </button>
        </div>
      </div>

      {/* Ecosystem Switcher */}
      {showSwitcher && (
        <div className="rounded-[22px] bg-card shadow-float p-2 space-y-0.5 animate-scale-in">
          {ecosystems.map((eco) => (
            <button key={eco.id} onClick={() => { onSwitchEcosystem(eco.id); setShowSwitcher(false); }}
              className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all ${eco.id === ecosystem.id ? "bg-primary/5" : "hover:bg-muted/50"}`}>
              <div className={`w-8 h-8 rounded-xl ${getEcoColors(eco.id).bg} flex items-center justify-center`}>
                <span className={getEcoColors(eco.id).text}>{ecoIcon(eco.id, "w-4 h-4")}</span>
              </div>
              <p className="text-[13px] font-semibold text-foreground flex-1">{eco.label}</p>
              {eco.id === ecosystem.id && <Check className="w-4 h-4 text-primary" />}
            </button>
          ))}
        </div>
      )}

      {/* Hero Earnings Card */}
      <button onClick={() => onNavigate("wallet")} className="w-full rounded-[24px] p-6 text-left relative overflow-hidden active:scale-[0.99] transition-transform" style={{
        background: 'linear-gradient(145deg, hsl(240 15% 8%), hsl(252 25% 14%))',
        boxShadow: '0 12px 40px hsl(0 0% 0% / 0.2)',
      }}>
        {/* Ambient light */}
        <div className="absolute top-0 right-0 w-[180px] h-[180px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(252 80% 55% / 0.5), transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[120px] h-[120px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(165 80% 45% / 0.4), transparent 60%)' }} />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">Total Earned</p>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold" style={{ background: 'hsl(165 80% 40% / 0.15)', color: 'hsl(165 80% 55%)' }}>
              <TrendingUp className="w-3 h-3" />{ecosystem.walletGrowth}
            </span>
          </div>
          <p className="font-display font-black text-[40px] leading-none tracking-tight text-white">{ecosystem.walletBalance}</p>

          {/* Mini chart */}
          <div className="flex items-end gap-[3px] h-[44px] mt-4 mb-4">
            {[28, 32, 24, 36, 40, 38, 48, 52, 50, 56, 54, 46].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: i >= 10 ? 'hsl(165 80% 45% / 0.6)' : 'hsl(0 0% 100% / 0.08)' }} />
            ))}
          </div>

          <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.06)' }}>
            {[
              { label: "Missions", val: ecosystem.missionEarnings },
              { label: "Referrals", val: ecosystem.referralEarnings },
              { label: "Points", val: ecosystem.pointsBalance },
            ].map((s) => (
              <div key={s.label} className="flex-1">
                <p className="text-[9px] uppercase tracking-widest text-white/25 font-semibold">{s.label}</p>
                <p className="text-[14px] font-bold text-white/75 mt-0.5">{s.val}</p>
              </div>
            ))}
          </div>
        </div>
      </button>

      {/* Stats Grid - Bold colored surfaces */}
      <div className="grid grid-cols-3 gap-2.5 stagger-grid">
        {[
          { icon: <Flame className="w-4 h-4" />, val: String(missionsComplete), label: "Completed", bg: "bg-primary", fg: "text-white" },
          { icon: <Trophy className="w-4 h-4" />, val: "#12", label: "Rank", bg: "bg-accent-amber", fg: "text-white" },
          { icon: <Award className="w-4 h-4" />, val: "3", label: "Badges", bg: "bg-accent-coral", fg: "text-white" },
        ].map((s) => (
          <button key={s.label} onClick={() => onNavigate(s.label === "Completed" ? "missions" : "leaderboard")}
            className={`rounded-[20px] ${s.bg} p-4 text-left active:scale-[0.97] transition-transform`}>
            <span className={`${s.fg} opacity-60`}>{s.icon}</span>
            <p className={`font-display font-black text-[22px] leading-none ${s.fg} mt-2.5 num-pop`}>{s.val}</p>
            <p className={`text-[10px] ${s.fg} opacity-60 font-medium mt-1`}>{s.label}</p>
          </button>
        ))}
      </div>

      {/* Streak & Level */}
      <button onClick={() => onNavigate("leaderboard")} className="w-full rounded-[22px] bg-card shadow-card p-4 flex items-center gap-3.5 active:scale-[0.98] transition-transform">
        <div className="relative">
          <ActivityRing progress={65} size={48} stroke={4} color="hsl(var(--primary))" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] font-black text-foreground">12</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-bold text-foreground">Silver Scout</p>
            <span className="text-[10px] font-bold text-accent-coral flex items-center gap-1"><Flame className="w-3 h-3" /> 7 day streak</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-[6px] rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: "65%" }} />
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">3,250 XP</span>
          </div>
        </div>
      </button>

      {/* Active Missions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-display font-bold text-[15px] text-foreground">Active Missions</p>
          <button onClick={() => onNavigate("missions")} className="text-[11px] text-primary font-bold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 stagger-scroll">
          {ecosystem.activeMissions.slice(0, 3).map((m, i) => {
            const colors = [
              { bg: "bg-primary", fg: "text-white" },
              { bg: "bg-accent-emerald", fg: "text-white" },
              { bg: "bg-accent-amber", fg: "text-white" },
            ];
            const c = colors[i % colors.length];
            return (
              <button key={m.title} onClick={() => onNavigate("missions")}
                className={`flex-shrink-0 w-[160px] rounded-[20px] ${c.bg} p-4 text-left active:scale-[0.97] transition-transform`}>
                <span className={`${c.fg} opacity-50 text-[10px] font-bold uppercase tracking-wider`}>In Progress</span>
                <p className={`text-[12px] font-bold ${c.fg} mt-2 leading-snug line-clamp-2`}>{m.title}</p>
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-bold ${c.fg} opacity-70`}>{m.reward}</span>
                    <span className={`text-[10px] font-bold ${c.fg} opacity-50`}>{m.progress}%</span>
                  </div>
                  <div className="h-[5px] rounded-full bg-white/20">
                    <div className="h-full rounded-full bg-white/80 transition-all" style={{ width: `${m.progress}%` }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trending Missions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-display font-bold text-[15px] text-foreground flex items-center gap-2">
            <Flame className="w-4 h-4 text-accent-coral" /> Trending
          </p>
          <button onClick={() => onNavigate("missions")} className="text-[11px] text-primary font-bold">Explore</button>
        </div>
        <div className="space-y-2 stagger-children">
          {ecosystem.missions.filter(m => m.status === "open").slice(0, 3).map((m) => (
            <button key={m.id} onClick={() => onNavigate("missions")}
              className="w-full flex items-center gap-3 p-3.5 rounded-[18px] bg-card shadow-card text-left active:scale-[0.98] transition-transform">
              <div className="w-11 h-11 rounded-2xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                {submissionTypeIcon(m.submissionType)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-bold text-foreground truncate">{m.title}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{m.brand} · {m.difficulty}</p>
              </div>
              {m.reward && <span className="px-2.5 py-1 rounded-full bg-foreground text-background text-[10px] font-black">{m.reward}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Brand */}
      <button onClick={() => onNavigate("brand")} className="w-full rounded-[22px] bg-card shadow-card p-4.5 text-left active:scale-[0.98] transition-transform">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center">
            <span className="font-display font-black text-primary text-lg">{ecosystem.featuredBrand.logo}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="font-bold text-[14px] text-foreground">{ecosystem.featuredBrand.name}</p>
              <Check className="w-4 h-4 text-primary" />
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5">{ecosystem.featuredBrand.desc}</p>
            <p className="text-[11px] text-primary font-bold mt-0.5">{ecosystem.featuredBrand.royalty} royalties</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>
    </div>
  );
};

/* ═══════ COMMUNITY / EXPLORE ═══════ */
export const ExploreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [tab, setTab] = useState<"foryou" | "following" | "brands" | "groups" | "discover">("foryou");

  return (
    <div className="px-6 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-xl text-foreground">Community</p>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="flex gap-1.5 overflow-x-auto no-scrollbar -mx-6 px-6">
        {([
          { id: "foryou" as const, label: "For You" },
          { id: "following" as const, label: "Following" },
          { id: "brands" as const, label: "Brands" },
          { id: "groups" as const, label: "Groups" },
          { id: "discover" as const, label: "Discover" },
        ]).map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
            tab === t.id ? "bg-foreground text-background" : "bg-card shadow-xs text-muted-foreground"
          }`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "foryou" && (
        <div className="space-y-3 stagger-children">
          {/* Stories */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-0.5 -mx-6 px-6">
            {[
              { name: "Your Story", isYou: true },
              { name: "Sarah M.", hasNew: true },
              { name: "Jake S.", hasNew: true, live: true },
              { name: "Venum", hasNew: true, isBrand: true },
              { name: "Mike T.", hasNew: false },
            ].map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-1.5 flex-shrink-0 relative">
                <div className={`w-14 h-14 rounded-full p-[2px] ${s.isYou ? "" : s.hasNew ? "bg-gradient-to-tr from-primary to-accent-coral" : ""}`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${
                    s.isYou ? "border-2 border-dashed border-muted-foreground/20 bg-muted" :
                    s.hasNew ? "bg-card ring-2 ring-card" : "bg-muted"
                  }`}>
                    {s.isYou ? <Plus className="w-4 h-4 text-muted-foreground/40" /> :
                     s.isBrand ? <Zap className="w-4 h-4 text-primary" /> :
                     <div className="w-full h-full rounded-full bg-muted-foreground/10" />}
                  </div>
                </div>
                {s.live && <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-1.5 rounded-sm bg-destructive text-[7px] font-bold text-white uppercase z-10">Live</span>}
                <span className="text-[10px] text-muted-foreground font-medium truncate w-14 text-center">{s.name}</span>
              </div>
            ))}
          </div>

          {/* Create post */}
          <button className="w-full flex items-center gap-3 p-4 rounded-[20px] bg-card shadow-card">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-white">AR</span>
            </div>
            <span className="text-[13px] text-muted-foreground flex-1 text-left">Share something...</span>
            <ImageIcon className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Posts */}
          <SocialPost author="Sarah M." time="2h ago" content="Just earned $45 this week from sharing my favorite combat gear. This platform is different." likes={24} comments={8} reposts={3} hasImage productTag="Hayabusa T3 Gloves" onProductClick={() => onNavigate("product")} verified badge="Gold" />
          <SocialPost author="Venum" time="4h ago" content="New mission: Share your training routine with Venum gear and earn $15. 12 spots left." likes={156} comments={42} isBrand />
          <SocialPost author="Jake S." time="6h ago" content="Hit Silver Scout today. The grind is real but worth it. 3 missions in one week." likes={18} comments={5} reposts={2} />
        </div>
      )}

      {tab === "following" && (
        <div className="space-y-3 stagger-children">
          <SocialPost author="Mike T." time="1h ago" content="Reviewed the new Everlast Pro gloves. Honest take: great padding, could improve wrist support." likes={32} comments={12} hasImage verified />
          <SocialPost author="Sarah M." time="3h ago" content="Mission complete: posted my training setup on Instagram. $15 incoming." likes={19} comments={6} />
        </div>
      )}

      {tab === "brands" && (
        <div className="space-y-3 stagger-children">
          <SocialPost author="Venum" time="2h ago" content="New arrivals: Challenger 4.0 series now available. Premium features at competitive pricing." likes={245} comments={67} hasImage isBrand />
          <SocialPost author="Hayabusa" time="8h ago" content="Flash mission: Share your T3 Gloves review for $20. First 10 only." likes={89} comments={23} isBrand />
        </div>
      )}

      {tab === "groups" && (
        <div className="space-y-3 stagger-children">
          {[
            { name: "Gear Reviews & Deals", members: "3.1k", desc: "Honest reviews and the best deals" },
            { name: "Mission Strategies", members: "1.8k", desc: "Tips to maximise your earnings" },
            { name: "Fight Camp Diaries", members: "742", desc: "Training journals and progress" },
          ].map((g) => (
            <button key={g.name} onClick={() => onNavigate("social")} className="w-full rounded-[20px] bg-card shadow-card p-4 text-left active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-foreground">{g.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{g.members} members · {g.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </button>
          ))}
          <button className="w-full rounded-[20px] border-2 border-dashed border-muted p-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Plus className="w-4 h-4" />
            <span className="text-[12px] font-bold">Start a Group</span>
          </button>
        </div>
      )}

      {tab === "discover" && (
        <div className="space-y-3 stagger-children">
          <div className="rounded-[20px] bg-primary p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center"><Trophy className="w-5 h-5" /></div>
              <div className="flex-1">
                <p className="text-[14px] font-bold">Royalty Earners Club</p>
                <p className="text-[11px] opacity-60">Tips & strategies to maximise royalties</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] opacity-50">2.4k members</span>
              <button className="px-4 py-2.5 rounded-xl bg-white text-primary text-[11px] font-bold">Join</button>
            </div>
          </div>
          {[
            { name: "Gear Reviews & Deals", members: "3.1k" },
            { name: "Affiliate Best Practices", members: "956" },
            { name: "Fight Camp Diaries", members: "742" },
          ].map((c) => (
            <button key={c.name} onClick={() => onNavigate("social")} className="w-full rounded-[20px] bg-card shadow-card p-4 text-left active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/8 flex items-center justify-center"><Users className="w-4 h-4 text-primary" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-foreground">{c.name}</p>
                  <p className="text-[11px] text-muted-foreground">{c.members} members</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ═══════ MISSIONS ═══════ */
export const MissionsScreen = ({ onNavigate, ecosystem }: { onNavigate: (s: Screen) => void; ecosystem: EcosystemData }) => {
  const [filter, setFilter] = useState<"all" | "available" | "active" | "completed">("all");
  const [expandedMission, setExpandedMission] = useState<string | null>(null);
  const [missionStates, setMissionStates] = useState<Record<string, MissionStatus>>({});

  const getStatus = (m: MissionData): MissionStatus => missionStates[m.id] || m.status;
  const handleJoin = (id: string) => setMissionStates(p => ({ ...p, [id]: "joined" }));
  const handleSubmit = (id: string) => setMissionStates(p => ({ ...p, [id]: "submitted" }));

  const filtered = ecosystem.missions.filter(m => {
    const s = getStatus(m);
    if (filter === "available") return s === "open" && !m.locked;
    if (filter === "active") return ["joined", "submitted", "in-review"].includes(s);
    if (filter === "completed") return ["approved", "rejected"].includes(s);
    return true;
  });

  return (
    <div className="px-6 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-xl text-foreground">Missions</p>
          <p className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
            <span className={getEcoColors(ecosystem.id).text}>{ecoIcon(ecosystem.id, "w-3 h-3")}</span>
            {ecosystem.label}
          </p>
        </div>
        <button onClick={() => onNavigate("leaderboard")} className="h-9 px-3.5 rounded-full bg-card shadow-card flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-accent-amber" />
          <span className="text-[11px] font-bold text-foreground">#12</span>
        </button>
      </div>

      {/* Weekly Challenge */}
      <div className="rounded-[22px] p-5 text-white" style={{
        background: 'linear-gradient(135deg, hsl(252 80% 60%), hsl(280 70% 55%))',
        boxShadow: '0 8px 32px hsl(252 80% 55% / 0.3)',
      }}>
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4 opacity-60" />
          <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Weekly Challenge</span>
        </div>
        <p className="font-display font-bold text-[17px] leading-snug">Complete 5 missions this week</p>
        <p className="text-[12px] opacity-50 mt-1">Earn a $50 bonus reward</p>
        <div className="mt-4 h-[6px] rounded-full bg-white/15">
          <div className="h-full rounded-full bg-white/80 w-[60%]" />
        </div>
        <p className="text-[11px] mt-2 opacity-40">3 of 5 completed · 7 day streak</p>
      </div>

      {/* Filters */}
      <div className="flex gap-1 bg-muted/50 rounded-full p-1">
        {(["all", "available", "active", "completed"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`flex-1 py-2.5 rounded-full text-[11px] font-semibold capitalize transition-all ${
            filter === f ? "bg-card text-foreground shadow-card" : "text-muted-foreground"
          }`}>
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-2.5 stagger-children">
        {filtered.length === 0 && (
          <div className="text-center py-10">
            <p className="text-[14px] text-muted-foreground">No missions in this category</p>
          </div>
        )}
        {filtered.map((m) => (
          <MissionCard key={m.id} mission={m} currentStatus={getStatus(m)} expanded={expandedMission === m.id}
            onToggle={() => setExpandedMission(expandedMission === m.id ? null : m.id)}
            onJoin={() => handleJoin(m.id)} onSubmit={() => handleSubmit(m.id)} />
        ))}
      </div>
    </div>
  );
};

/* ═══════ WALLET ═══════ */
export const WalletScreen = ({ onNavigate, onBack, ecosystem }: { onNavigate: (s: Screen) => void; onBack: () => void; ecosystem: EcosystemData }) => (
  <div className="px-6 py-4 space-y-5">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
      <p className="font-display font-bold text-xl text-foreground">Wallet</p>
    </div>

    {/* Balance Card */}
    <div className="rounded-[24px] p-6 text-white" style={{
      background: 'linear-gradient(145deg, hsl(240 15% 8%), hsl(252 25% 14%))',
      boxShadow: '0 12px 40px hsl(0 0% 0% / 0.2)',
    }}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-6 h-6 rounded-lg ${getEcoColors(ecosystem.id).bg} flex items-center justify-center`}>
          <span className={getEcoColors(ecosystem.id).text}>{ecoIcon(ecosystem.id, "w-3 h-3")}</span>
        </div>
        <p className="text-[11px] opacity-40 font-medium">{ecosystem.label} Balance</p>
      </div>
      <p className="font-display font-black text-[44px] leading-none text-white mt-1 tracking-tight">{ecosystem.walletBalance}</p>
      <div className="flex gap-2.5 mt-5">
        <button className="flex-1 rounded-2xl bg-white/10 py-3.5 text-[13px] font-bold text-center active:scale-95 transition-transform">Withdraw</button>
        <button className="flex-1 rounded-2xl bg-white/10 py-3.5 text-[13px] font-bold text-center active:scale-95 transition-transform">Redeem</button>
      </div>
    </div>

    {/* Tier Progress */}
    <div className="rounded-[22px] bg-card shadow-card p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-accent-amber" />
          <p className="font-bold text-[14px] text-foreground">Silver Scout</p>
        </div>
        <span className="text-[11px] text-muted-foreground">Next: Gold</span>
      </div>
      <div className="h-[6px] rounded-full bg-muted overflow-hidden">
        <div className="h-full rounded-full bg-primary w-[65%]" />
      </div>
      <p className="text-[11px] text-muted-foreground mt-2">3,250 / 5,000 XP to Gold tier</p>
    </div>

    {/* Points & Cashback */}
    <div className="grid grid-cols-2 gap-2.5 stagger-grid">
      <div className="rounded-[20px] bg-primary p-4 text-white">
        <p className="text-[11px] opacity-50 font-medium">Points</p>
        <p className="font-display font-black text-[26px] mt-1">3,250</p>
        <p className="text-[11px] opacity-60 font-semibold mt-1">+120 today</p>
      </div>
      <div className="rounded-[20px] bg-accent-amber p-4 text-white">
        <p className="text-[11px] opacity-50 font-medium">Cashback</p>
        <p className="font-display font-black text-[26px] mt-1">$48</p>
        <p className="text-[11px] opacity-60 font-semibold mt-1">Pending</p>
      </div>
    </div>

    {/* Rewards */}
    <div>
      <p className="font-display font-bold text-[15px] text-foreground mb-3">Available Rewards</p>
      <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 stagger-scroll">
        {[
          { title: `Free ${ecosystem.featuredBrand.name} Gift`, points: "2,500 pts", icon: <Gift className="w-5 h-5 text-primary" /> },
          { title: "20% Off Next Order", points: "1,000 pts", icon: <CreditCard className="w-5 h-5 text-accent-amber" /> },
          { title: "$25 Store Credit", points: "2,000 pts", icon: <Wallet className="w-5 h-5 text-accent-emerald" /> },
        ].map((r) => (
          <div key={r.title} className="flex-shrink-0 w-[150px] rounded-[20px] bg-card shadow-card p-4">
            <div className="w-10 h-10 rounded-2xl bg-muted/50 flex items-center justify-center mb-3">{r.icon}</div>
            <p className="font-bold text-[12px] text-foreground leading-snug">{r.title}</p>
            <p className="text-[11px] text-primary font-bold mt-1.5">{r.points}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Transactions */}
    <div>
      <p className="font-display font-bold text-[15px] text-foreground mb-3">Recent</p>
      <div className="space-y-2 stagger-children">
        {[
          { label: "Referral Commission", amount: "+$24.00", time: "2h ago", positive: true, icon: <UserPlus className="w-4 h-4 text-accent-emerald" /> },
          { label: "Mission Completed", amount: "+$15.00", time: "5h ago", positive: true, icon: <Check className="w-4 h-4 text-primary" /> },
          { label: "Reward Redeemed", amount: "-1,000 pts", time: "1d ago", positive: false, icon: <Gift className="w-4 h-4 text-accent-amber" /> },
        ].map((t) => (
          <div key={t.label + t.time} className="flex items-center gap-3 py-3.5 px-4 rounded-[18px] bg-card shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">{t.icon}</div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-foreground">{t.label}</p>
              <p className="text-[11px] text-muted-foreground">{t.time}</p>
            </div>
            <span className={`text-[13px] font-bold ${t.positive ? "text-accent-emerald" : "text-muted-foreground"}`}>{t.amount}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ LEADERBOARD ═══════ */
const communityLeaderboards: Record<string, {
  podium: { name: string; xp: string; earnings: string; referrals: string; streak: string }[];
  ranks: { rank: number; name: string; xp: string; earnings: string; referrals: string; streak: string; delta: string }[];
  you: { rank: number; xp: string; earnings: string; referrals: string; streak: string; delta: string; level: number; tier: string; xpCurrent: number; xpNext: number; streakDays: number };
  challenge: { title: string; reward: string; progress: number; total: number };
  totalMembers: number;
}> = {
  combat: {
    podium: [
      { name: "Sarah M.", xp: "18.2k", earnings: "$6.8k", referrals: "142", streak: "67d" },
      { name: "Mike T.", xp: "12.4k", earnings: "$4.2k", referrals: "89", streak: "42d" },
      { name: "Jess K.", xp: "11.1k", earnings: "$3.9k", referrals: "76", streak: "38d" },
    ],
    ranks: [
      { rank: 4, name: "Chris W.", xp: "9,840", earnings: "$3.1k", referrals: "64", streak: "31d", delta: "+2" },
      { rank: 5, name: "Jake S.", xp: "8,720", earnings: "$2.8k", referrals: "52", streak: "28d", delta: "-1" },
      { rank: 6, name: "David L.", xp: "7,650", earnings: "$2.4k", referrals: "48", streak: "24d", delta: "+5" },
    ],
    you: { rank: 12, xp: "3,250", earnings: "$1,247", referrals: "14", streak: "7d", delta: "+3", level: 12, tier: "Silver Scout", xpCurrent: 3250, xpNext: 5000, streakDays: 7 },
    challenge: { title: "Complete 5 combat missions", reward: "1,000 XP + Fighter badge", progress: 3, total: 5 },
    totalMembers: 2847,
  },
  fitness: {
    podium: [
      { name: "Emma L.", xp: "22.1k", earnings: "$8.4k", referrals: "198", streak: "91d" },
      { name: "Ryan P.", xp: "15.8k", earnings: "$5.1k", referrals: "112", streak: "54d" },
      { name: "Zoe C.", xp: "14.2k", earnings: "$4.7k", referrals: "95", streak: "48d" },
    ],
    ranks: [
      { rank: 4, name: "Marcus D.", xp: "12,100", earnings: "$3.8k", referrals: "78", streak: "35d", delta: "+1" },
      { rank: 5, name: "Lina W.", xp: "10,950", earnings: "$3.4k", referrals: "67", streak: "29d", delta: "+3" },
    ],
    you: { rank: 18, xp: "2,180", earnings: "$832", referrals: "9", streak: "4d", delta: "+2", level: 8, tier: "Bronze Scout", xpCurrent: 2180, xpNext: 3500, streakDays: 4 },
    challenge: { title: "Log 3 workout shares", reward: "750 XP + Iron Will badge", progress: 1, total: 3 },
    totalMembers: 5420,
  },
  outdoor: {
    podium: [
      { name: "Tyler H.", xp: "16.5k", earnings: "$5.9k", referrals: "108", streak: "73d" },
      { name: "Maya R.", xp: "13.9k", earnings: "$4.5k", referrals: "84", streak: "55d" },
      { name: "Ben C.", xp: "12.0k", earnings: "$3.8k", referrals: "71", streak: "46d" },
    ],
    ranks: [
      { rank: 4, name: "Kai N.", xp: "10,200", earnings: "$3.2k", referrals: "59", streak: "38d", delta: "+4" },
    ],
    you: { rank: 15, xp: "1,870", earnings: "$594", referrals: "7", streak: "5d", delta: "+1", level: 7, tier: "Bronze Scout", xpCurrent: 1870, xpNext: 3000, streakDays: 5 },
    challenge: { title: "Share 2 trail photos", reward: "600 XP + Summit badge", progress: 1, total: 2 },
    totalMembers: 1890,
  },
  beauty: {
    podium: [
      { name: "Ava K.", xp: "25.3k", earnings: "$9.2k", referrals: "215", streak: "102d" },
      { name: "Mia T.", xp: "19.7k", earnings: "$7.1k", referrals: "168", streak: "78d" },
      { name: "Luna S.", xp: "16.4k", earnings: "$5.8k", referrals: "134", streak: "61d" },
    ],
    ranks: [
      { rank: 4, name: "Chloe B.", xp: "14,100", earnings: "$4.9k", referrals: "112", streak: "52d", delta: "+2" },
    ],
    you: { rank: 9, xp: "4,520", earnings: "$1,089", referrals: "21", streak: "11d", delta: "+5", level: 14, tier: "Silver Scout", xpCurrent: 4520, xpNext: 6000, streakDays: 11 },
    challenge: { title: "Post 3 skincare routines", reward: "900 XP + Glow badge", progress: 2, total: 3 },
    totalMembers: 7130,
  },
  gaming: {
    podium: [
      { name: "Ace X.", xp: "31.2k", earnings: "$7.5k", referrals: "245", streak: "120d" },
      { name: "Nova Q.", xp: "24.8k", earnings: "$6.1k", referrals: "189", streak: "88d" },
      { name: "Zero D.", xp: "20.1k", earnings: "$4.9k", referrals: "156", streak: "72d" },
    ],
    ranks: [
      { rank: 4, name: "Pixel V.", xp: "17,500", earnings: "$4.2k", referrals: "128", streak: "58d", delta: "+3" },
    ],
    you: { rank: 22, xp: "5,100", earnings: "$723", referrals: "11", streak: "3d", delta: "+1", level: 10, tier: "Bronze Scout", xpCurrent: 5100, xpNext: 7500, streakDays: 3 },
    challenge: { title: "Stream 2 sessions with gear", reward: "1,200 XP + Streamer badge", progress: 0, total: 2 },
    totalMembers: 9240,
  },
  food: {
    podium: [
      { name: "Chef A.", xp: "14.8k", earnings: "$5.2k", referrals: "92", streak: "58d" },
      { name: "Tara N.", xp: "11.2k", earnings: "$3.8k", referrals: "74", streak: "43d" },
      { name: "Leo F.", xp: "9.6k", earnings: "$3.1k", referrals: "61", streak: "35d" },
    ],
    ranks: [
      { rank: 4, name: "Mila C.", xp: "8,100", earnings: "$2.6k", referrals: "52", streak: "28d", delta: "+1" },
    ],
    you: { rank: 14, xp: "1,450", earnings: "$456", referrals: "5", streak: "2d", delta: "+3", level: 6, tier: "Bronze Scout", xpCurrent: 1450, xpNext: 2500, streakDays: 2 },
    challenge: { title: "Create 1 recipe video", reward: "500 XP + Foodie badge", progress: 0, total: 1 },
    totalMembers: 1340,
  },
};

export const LeaderboardScreen = ({ onBack, ecosystem, onNavigate }: { onBack: () => void; ecosystem: EcosystemData; onNavigate: (s: Screen) => void }) => {
  const [period, setPeriod] = useState<"week" | "month" | "all">("week");
  const board = communityLeaderboards[ecosystem.id] || communityLeaderboards.combat;
  const you = board.you;
  const xpProgress = Math.round((you.xpCurrent / you.xpNext) * 100);

  return (
    <div className="px-6 py-4 space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <div className="flex-1">
          <p className="font-display font-bold text-xl text-foreground">Leaderboard</p>
          <p className="text-[11px] text-muted-foreground">{board.totalMembers.toLocaleString()} competing</p>
        </div>
      </div>

      {/* Period tabs */}
      <div className="flex gap-1 bg-muted/50 rounded-full p-1">
        {(["week", "month", "all"] as const).map((p) => (
          <button key={p} onClick={() => setPeriod(p)} className={`flex-1 py-2.5 rounded-full text-[11px] font-semibold capitalize transition-all ${
            period === p ? "bg-card text-foreground shadow-card" : "text-muted-foreground"
          }`}>{p === "all" ? "All Time" : `This ${p.charAt(0).toUpperCase() + p.slice(1)}`}</button>
        ))}
      </div>

      {/* Your Position */}
      <div className="rounded-[22px] bg-primary p-5 text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <ActivityRing progress={xpProgress} size={48} stroke={4} color="hsl(0 0% 100% / 0.8)" bgColor="hsl(0 0% 100% / 0.15)" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[11px] font-black text-white">{you.level}</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-bold">{you.tier}</p>
            <p className="text-[11px] opacity-50">{you.xpCurrent.toLocaleString()} / {you.xpNext.toLocaleString()} XP</p>
          </div>
          <div className="text-right">
            <p className="font-display font-black text-[28px] leading-none">#{you.rank}</p>
            <p className="text-[10px] opacity-50 font-semibold mt-0.5">
              <TrendingUp className="w-3 h-3 inline" /> {you.delta}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-3" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.1)' }}>
          {[
            { label: "Earnings", val: you.earnings },
            { label: "Referrals", val: you.referrals },
            { label: "Streak", val: `${you.streakDays}d` },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-[14px] font-bold">{s.val}</p>
              <p className="text-[9px] opacity-40 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-3 pt-2">
        {[1, 0, 2].map((idx) => {
          const p = board.podium[idx];
          const isFirst = idx === 0;
          return (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="relative">
                {isFirst && <Crown className="w-5 h-5 text-accent-amber absolute -top-5 left-1/2 -translate-x-1/2" />}
                <div className={`rounded-full bg-muted flex items-center justify-center font-bold text-foreground ${
                  isFirst ? "w-16 h-16 text-[14px]" : "w-12 h-12 text-[12px]"
                }`}>{p.name.charAt(0)}{p.name.split(" ")[1]?.charAt(0) || ""}</div>
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold text-foreground">{p.name}</p>
                <p className="text-[10px] text-muted-foreground">{p.xp} XP</p>
              </div>
              <div className={`w-full rounded-t-xl flex items-center justify-center font-display font-black text-white ${
                isFirst ? "h-[72px] bg-accent-amber" : idx === 1 ? "h-[56px] bg-muted-foreground/60" : "h-[44px] bg-accent-coral/60"
              }`} style={{ minWidth: isFirst ? '88px' : '72px' }}>
                {idx === 0 ? "1st" : idx === 1 ? "2nd" : "3rd"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Rankings */}
      <div className="space-y-2 stagger-children">
        {board.ranks.map((r) => (
          <div key={r.rank} className="flex items-center gap-3 py-3 px-4 rounded-[18px] bg-card shadow-xs">
            <span className="text-[14px] font-bold text-muted-foreground w-7 text-center">{r.rank}</span>
            <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-foreground">{r.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-foreground">{r.name}</p>
              <p className="text-[10px] text-muted-foreground">{r.xp} XP</p>
            </div>
            <span className={`text-[11px] font-bold ${r.delta.startsWith("+") ? "text-accent-emerald" : "text-destructive"}`}>{r.delta}</span>
          </div>
        ))}
      </div>

      {/* Weekly Challenge */}
      <div className="rounded-[22px] bg-card shadow-card p-5">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">Weekly Challenge</p>
        <p className="text-[14px] font-bold text-foreground">{board.challenge.title}</p>
        <p className="text-[12px] text-primary font-semibold mt-1">{board.challenge.reward}</p>
        <div className="mt-3 h-[6px] rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-primary" style={{ width: `${(board.challenge.progress / board.challenge.total) * 100}%` }} />
        </div>
        <p className="text-[11px] text-muted-foreground mt-2">{board.challenge.progress} of {board.challenge.total}</p>
      </div>
    </div>
  );
};

/* ═══════ SOCIAL WALL / GROUP ═══════ */
export const SocialWallScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeChannel, setActiveChannel] = useState("General");
  const [lbExpanded, setLbExpanded] = useState(false);

  const channels = ["General", "Gear", "Tips", "Events"];

  return (
    <div className="px-6 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <div className="flex-1">
          <p className="font-display font-bold text-[16px] text-foreground">Gear Reviews & Deals</p>
          <p className="text-[11px] text-muted-foreground">3.1k members</p>
        </div>
        <button className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center">
          <Search className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Group Leaderboard */}
      <div className="rounded-[20px] bg-card shadow-card p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-accent-amber" />
            <p className="text-[13px] font-bold text-foreground">Group Ranking</p>
          </div>
          <button onClick={() => setLbExpanded(!lbExpanded)} className="text-[11px] text-primary font-bold">
            {lbExpanded ? "Collapse" : "View All"}
          </button>
        </div>

        {/* Top 3 compact */}
        <div className="flex items-center gap-3">
          {[
            { name: "Sarah M.", xp: "2.4k", rank: 1 },
            { name: "Mike T.", xp: "2.1k", rank: 2 },
            { name: "Jess K.", xp: "1.8k", rank: 3 },
          ].map((p) => (
            <div key={p.rank} className="flex-1 flex items-center gap-2 py-2 px-2.5 rounded-xl bg-muted/30">
              <span className={`text-[10px] font-black ${p.rank === 1 ? "text-accent-amber" : p.rank === 2 ? "text-muted-foreground" : "text-accent-coral"}`}>{p.rank}</span>
              <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-foreground truncate">{p.name}</p>
                <p className="text-[8px] text-muted-foreground">{p.xp}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Your position */}
        <div className="mt-2 py-2.5 px-3 rounded-xl bg-primary/5 flex items-center gap-2.5">
          <span className="text-[11px] font-black text-primary">#7</span>
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">AR</span>
          </div>
          <p className="text-[11px] font-bold text-foreground flex-1">You</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-accent-emerald" />
            <span className="text-[10px] font-bold text-accent-emerald">+2</span>
          </div>
          <span className="text-[10px] text-muted-foreground">890 XP</span>
        </div>

        {lbExpanded && (
          <div className="space-y-1.5 pt-2 expand-enter">
            {[
              { rank: 4, name: "Chris W.", xp: "1.6k" },
              { rank: 5, name: "Jake S.", xp: "1.4k" },
              { rank: 6, name: "David L.", xp: "1.1k" },
            ].map((r) => (
              <div key={r.rank} className="flex items-center gap-2.5 py-2 px-3 rounded-xl">
                <span className="text-[11px] font-bold text-muted-foreground w-5">{r.rank}</span>
                <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0" />
                <p className="text-[11px] font-semibold text-foreground flex-1">{r.name}</p>
                <span className="text-[10px] text-muted-foreground">{r.xp}</span>
              </div>
            ))}
            <div className="text-center pt-1">
              <p className="text-[10px] text-primary font-bold">Top earner wins $50 weekly</p>
            </div>
          </div>
        )}
      </div>

      {/* Channel tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
        {channels.map((ch) => (
          <button key={ch} onClick={() => setActiveChannel(ch)} className={`px-4 py-2 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
            activeChannel === ch ? "bg-foreground text-background" : "bg-card shadow-xs text-muted-foreground"
          }`}>{ch}</button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-3 stagger-children">
        <SocialPost author="Sarah M." time="1h ago" content="Just tested the new Hayabusa T3 lace-ups. The wrist support is next level compared to velcro." likes={32} comments={12} hasImage productTag="Hayabusa T3 Lace" onProductClick={() => onNavigate("product")} verified badge="Gold" />
        <SocialPost author="Mike T." time="3h ago" content="Pro tip: Stack missions from the same brand to maximise your weekly earnings." likes={18} comments={6} reposts={4} />
      </div>
    </div>
  );
};

/* ═══════ BRAND PAGE ═══════ */
export const BrandScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<"products" | "missions">("products");
  const [following, setFollowing] = useState(false);
  return (
    <div className="space-y-0">
      <div className="relative h-36" style={{ background: 'linear-gradient(135deg, hsl(252 60% 92%), hsl(252 40% 85%))' }}>
        <button onClick={onBack} className="absolute top-3 left-5 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <button className="absolute top-3 right-5 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm"><Share2 className="w-4 h-4 text-foreground" /></button>
      </div>
      <div className="px-6 -mt-10 space-y-4 pb-4">
        <div className="flex items-end gap-3">
          <div className="w-20 h-20 rounded-3xl bg-card border-[3px] border-background shadow-float flex items-center justify-center">
            <span className="font-display font-black text-primary text-xl">V</span>
          </div>
          <div className="pb-1 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="font-display font-bold text-xl text-foreground">Venum</p>
              <Check className="w-4 h-4 text-primary" />
            </div>
            <p className="text-[12px] text-muted-foreground">Official combat sports gear</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
          <span><strong className="text-foreground">12.4k</strong> members</span>
          <span><strong className="text-foreground">847</strong> products</span>
        </div>
        <div className="flex gap-2.5">
          <button onClick={() => setFollowing(!following)} className={`flex-1 rounded-2xl py-3.5 font-bold text-[13px] transition-all ${following ? "bg-card shadow-card text-foreground" : "bg-primary text-white shadow-lg"}`}>
            {following ? "Following" : "Follow Brand"}
          </button>
          <button className="flex-1 bg-card shadow-card rounded-2xl py-3.5 font-bold text-[13px] text-foreground">Join Community</button>
        </div>
        <div className="flex gap-1 bg-muted/50 rounded-full p-1">
          {(["products", "missions"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} className={`flex-1 py-2.5 rounded-full text-[12px] font-semibold capitalize transition-all ${activeTab === t ? "bg-card text-foreground shadow-card" : "text-muted-foreground"}`}>{t}</button>
          ))}
        </div>
        {activeTab === "products" && (
          <div className="space-y-2.5">
            {["Challenger 3.0 Gloves", "Elite Rashguard", "Light 3.0 Shorts"].map((p) => (
              <button key={p} onClick={() => onNavigate("product")} className="w-full flex items-center gap-3 p-3.5 rounded-[18px] bg-card shadow-xs text-left active:scale-[0.98] transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[13px] text-foreground">{p}</p>
                  <p className="text-[11px] text-muted-foreground">Venum · $79.99</p>
                  <p className="text-[11px] text-primary font-bold mt-0.5">Earn 10% per sale</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        )}
        {activeTab === "missions" && (
          <div className="space-y-2.5">
            <div className="rounded-[20px] bg-card shadow-card p-4">
              <p className="text-[13px] font-bold text-foreground">Share Venum gear on Instagram</p>
              <p className="text-[11px] text-muted-foreground mt-1">Earn $15 + 150 points</p>
              <button onClick={() => onNavigate("missions")} className="mt-3 px-4 py-2.5 rounded-xl bg-primary text-white text-[11px] font-bold">Join Mission</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════ STORE / BRANDS ═══════ */
export const StoreScreen = ({ onNavigate, ecosystem }: { onNavigate: (s: Screen) => void; ecosystem: EcosystemData }) => {
  const [addedProducts, setAddedProducts] = useState<string[]>([]);
  const toggleProduct = (name: string) => setAddedProducts((prev) => prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]);

  return (
    <div className="px-6 py-4 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-xl text-foreground">Brands</p>
          <p className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
            <span className={getEcoColors(ecosystem.id).text}>{ecoIcon(ecosystem.id, "w-3 h-3")}</span>
            {ecosystem.label}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-card shadow-card rounded-full px-4 py-2.5">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground">Search</span>
        </div>
      </div>

      {/* Featured */}
      <button onClick={() => onNavigate("brand")} className="w-full rounded-[22px] bg-primary/8 p-5 text-left active:scale-[0.98] transition-transform">
        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary">Featured</span>
        <div className="flex items-center gap-3.5 mt-3">
          <div className="w-14 h-14 rounded-2xl bg-card shadow-sm flex items-center justify-center">
            <span className="font-display font-black text-primary text-lg">{ecosystem.featuredBrand.logo}</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-[14px] text-foreground">{ecosystem.featuredBrand.name}</p>
            <p className="text-[11px] text-primary font-bold mt-0.5">{ecosystem.featuredBrand.royalty} royalties</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>

      {/* Brand list */}
      <div className="space-y-2.5">
        {ecosystem.brands.map((b) => (
          <button key={b.name} onClick={() => onNavigate("brand")} className="w-full flex items-center gap-3.5 p-4 rounded-[20px] bg-card shadow-card text-left active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-foreground">{b.logo}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[13px] text-foreground">{b.name}</p>
              <p className="text-[11px] text-muted-foreground">{b.category}</p>
              <p className="text-[11px] text-primary font-bold mt-0.5">{b.royalty} royalties</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      {/* Top Products */}
      <div>
        <p className="font-display font-bold text-[15px] text-foreground mb-3">Top Products</p>
        <div className="space-y-2.5 stagger-children">
          {ecosystem.trendingOffers.map((p) => (
            <div key={p.name} className="flex items-center gap-3 p-3.5 rounded-[18px] bg-card shadow-card">
              <button onClick={() => onNavigate("product")} className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
              <button onClick={() => onNavigate("product")} className="flex-1 min-w-0 text-left">
                <p className="font-bold text-[13px] text-foreground truncate">{p.name}</p>
                <p className="text-[11px] text-muted-foreground">{p.brand} · {p.price}</p>
                <p className="text-[11px] text-primary font-bold mt-0.5">Earn {p.royalty}</p>
              </button>
              <button onClick={() => toggleProduct(p.name)}
                className={`flex-shrink-0 px-3.5 py-2.5 rounded-xl text-[11px] font-bold transition-all ${
                  addedProducts.includes(p.name) ? "bg-primary/8 text-primary" : "bg-primary text-white"
                }`}>
                {addedProducts.includes(p.name) ? <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Added</span> : <span className="flex items-center gap-1"><Plus className="w-3 h-3" /> Add</span>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════ PRODUCT DETAIL ═══════ */
export const ProductScreen = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (s: Screen) => void }) => {
  const [selectedSize, setSelectedSize] = useState(1);
  const [liked, setLiked] = useState(false);
  const [addedToStorefront, setAddedToStorefront] = useState(false);
  return (
    <div className="space-y-0">
      <div className="relative">
        <div className="h-56 bg-gradient-to-b from-muted to-muted/30" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1, 2, 3].map((i) => <div key={i} className={`h-[5px] rounded-full ${i === 0 ? "bg-primary w-5" : "bg-foreground/15 w-[5px]"}`} />)}
        </div>
        <button onClick={onBack} className="absolute top-3 left-5 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <button onClick={() => setLiked(!liked)} className="absolute top-3 right-5 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm">
          <Heart className={`w-4 h-4 ${liked ? "text-destructive fill-destructive" : "text-muted-foreground"}`} />
        </button>
      </div>
      <div className="px-6 py-5 space-y-4">
        <div>
          <p className="text-[12px] text-muted-foreground font-medium">Venum</p>
          <p className="font-display font-bold text-xl text-foreground mt-0.5">Challenger 3.0 Boxing Gloves</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < 4 ? "text-accent-amber fill-accent-amber" : "text-muted"}`} />)}</div>
            <span className="text-[12px] text-muted-foreground">4.8 (2,147)</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display font-black text-[28px] text-foreground">$79.99</p>
            <p className="text-[13px] text-accent-emerald font-bold mt-0.5">You earn $8.00 per sale</p>
          </div>
          <div className="flex gap-1.5">
            {["12oz", "14oz", "16oz"].map((s, i) => (
              <button key={s} onClick={() => setSelectedSize(i)} className={`px-3.5 py-2 rounded-xl text-[12px] font-semibold transition-all ${i === selectedSize ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}>{s}</button>
            ))}
          </div>
        </div>
        <button onClick={() => setAddedToStorefront(!addedToStorefront)}
          className={`w-full rounded-2xl p-4 flex items-center justify-center gap-2 font-bold text-[13px] transition-all active:scale-[0.98] ${
            addedToStorefront ? "bg-primary/8 text-primary" : "bg-primary text-white shadow-lg"
          }`}>
          {addedToStorefront ? <><Check className="w-4 h-4" /> Added to Storefront</> : <><Plus className="w-4 h-4" /> Add to My Storefront</>}
        </button>
        <button onClick={() => onNavigate("checkout")} className="w-full bg-foreground text-background rounded-2xl py-4 font-bold text-[14px] flex items-center justify-center gap-2 shadow-card">
          <ExternalLink className="w-4 h-4" /> Buy on Brand Site
        </button>
      </div>
    </div>
  );
};

/* ═══════ STOREFRONT ═══════ */
export const StorefrontScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [following, setFollowing] = useState(false);
  return (
    <div className="space-y-0">
      <div className="relative h-36" style={{ background: 'linear-gradient(135deg, hsl(252 60% 90%), hsl(252 40% 82%))' }}>
        <button onClick={onBack} className="absolute top-3 left-5 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center z-10 shadow-sm"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <button onClick={() => onNavigate("share-storefront")} className="absolute top-3 right-5 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center z-10 shadow-sm"><Share2 className="w-3.5 h-3.5 text-foreground" /></button>
      </div>
      <div className="px-6 -mt-12 space-y-4 pb-4">
        <div className="flex items-end gap-3">
          <div className="w-20 h-20 rounded-3xl bg-card border-[3px] border-background shadow-float flex items-center justify-center relative">
            <span className="font-display font-bold text-primary text-2xl">AR</span>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-background"><Check className="w-3 h-3 text-white" /></div>
          </div>
          <div className="pb-1 flex-1">
            <p className="font-display font-bold text-xl text-foreground leading-tight">Alex Rivera</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">@alexrivera · Los Angeles, CA</p>
            <span className="px-2 py-0.5 rounded-full bg-primary/8 text-[9px] font-bold text-primary mt-1 inline-block">Silver Scout</span>
          </div>
        </div>
        <p className="text-[12px] text-foreground/75 leading-relaxed">MMA fighter & gear enthusiast. Honest reviews of gear I use. Silver Scout Ambassador.</p>
        <div className="flex gap-2.5">
          <button onClick={() => setFollowing(!following)} className={`flex-1 rounded-2xl py-3.5 font-bold text-[13px] flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all ${following ? "bg-card shadow-card text-foreground" : "bg-primary text-white shadow-lg"}`}>
            {following ? <><Check className="w-3.5 h-3.5" /> Following</> : <><UserPlus className="w-3.5 h-3.5" /> Follow</>}
          </button>
          <button onClick={() => onNavigate("share-storefront")} className="px-5 rounded-2xl bg-card shadow-card font-bold text-[13px] text-foreground flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2.5 stagger-grid">
          {[{ label: "Products", val: "12" }, { label: "Sales", val: "89" }, { label: "Royalties", val: "$542" }].map(s => (
            <div key={s.label} className="rounded-[18px] bg-card shadow-card p-3.5 text-center">
              <p className="font-display font-black text-[16px] text-foreground">{s.val}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">Alex's Picks</p>
          <div className="space-y-2.5">
            {["Venum Challenger 3.0", "Hayabusa T3 Gloves", "Sanabul Essential"].map((p) => (
              <button key={p} onClick={() => onNavigate("product")} className="w-full flex items-center gap-3 p-3.5 rounded-[18px] bg-card shadow-xs text-left active:scale-[0.98] transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-foreground">{p}</p>
                  <p className="text-[11px] text-primary font-bold">$79.99</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
        <div className="text-center pt-2 pb-4">
          <p className="text-[10px] text-muted-foreground">Powered by <span className="font-bold text-primary">LUUP</span></p>
        </div>
      </div>
    </div>
  );
};

/* ═══════ CHECKOUT ═══════ */
export const CheckoutScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="px-6 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <p className="font-display font-bold text-lg text-foreground">Buy via Brand</p>
      </div>
      <div className="flex items-center gap-3 p-4 rounded-[20px] bg-card shadow-card">
        <div className="w-16 h-16 rounded-2xl bg-muted flex-shrink-0" />
        <div className="flex-1">
          <p className="text-[13px] font-bold text-foreground">Venum Challenger 3.0</p>
          <p className="text-[11px] text-muted-foreground">14oz · Black/Gold</p>
          <p className="text-[15px] font-bold text-foreground mt-1">$79.99</p>
        </div>
      </div>
      <div className="rounded-[20px] bg-primary/5 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Link className="w-5 h-5 text-primary" />
          <p className="text-[14px] font-bold text-foreground">Your Affiliate Link</p>
        </div>
        <div className="rounded-2xl bg-muted/50 px-4 py-3 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground font-mono truncate mr-2">venum.com/gloves?ref=luup_alexr</span>
          <button onClick={() => setCopied(true)} className="text-[11px] font-bold text-primary">{copied ? "Copied!" : "Copy"}</button>
        </div>
      </div>
      <div className="rounded-[20px] bg-card shadow-card p-5 space-y-2.5">
        <p className="text-[13px] font-bold text-foreground">Commission Breakdown</p>
        <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Product Price</span><span className="text-foreground">$79.99</span></div>
        <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Commission Rate</span><span className="text-primary font-bold">10%</span></div>
        <div className="h-px bg-border" />
        <div className="flex justify-between text-[14px]"><span className="font-bold text-foreground">Your Earnings</span><span className="font-bold text-accent-emerald">$8.00</span></div>
      </div>
      <button onClick={() => onNavigate("order-confirm")} className="w-full bg-primary text-white rounded-2xl py-4 font-bold text-[14px] flex items-center justify-center gap-2 shadow-lg">
        <ExternalLink className="w-4 h-4" /> Open Brand Store
      </button>
    </div>
  );
};

/* ═══════ ORDER CONFIRM ═══════ */
export const OrderConfirmScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-6 py-8 flex-1 flex flex-col items-center justify-center text-center min-h-[600px]">
    <div className="w-20 h-20 rounded-full bg-accent-emerald flex items-center justify-center mb-6" style={{
      boxShadow: '0 8px 32px hsl(165 80% 40% / 0.3)',
    }}>
      <Check className="w-8 h-8 text-white" />
    </div>
    <p className="font-display font-black text-[24px] text-foreground">You're Earning</p>
    <p className="text-[14px] text-muted-foreground mt-2 max-w-[260px] leading-relaxed">
      When your referral purchase is confirmed, you'll earn your commission automatically.
    </p>
    <div className="w-full mt-6 rounded-[22px] bg-card shadow-card p-5 text-left space-y-3">
      <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Expected Earning</span><span className="font-bold text-accent-emerald">$8.00</span></div>
      <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Status</span><span className="font-semibold text-accent-amber">Pending Confirmation</span></div>
      <div className="flex justify-between text-[13px]"><span className="text-muted-foreground">Estimated</span><span className="text-foreground font-medium">24–48 hours</span></div>
    </div>
    <button onClick={() => onNavigate("home")} className="w-full bg-primary text-white rounded-2xl py-4 font-bold text-[14px] mt-6 shadow-lg">
      Back to Home
    </button>
  </div>
);

/* ═══════ PROFILE ═══════ */
export const ProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-6 py-4 space-y-5">
    {/* Header */}
    <div className="flex items-center justify-between">
      <p className="font-display font-bold text-xl text-foreground">Profile</p>
      <button onClick={() => onNavigate("edit-profile")} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center">
        <Settings className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>

    {/* Profile Card */}
    <div className="rounded-[22px] bg-card shadow-card p-5">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center" style={{
          boxShadow: '0 6px 20px hsl(252 80% 55% / 0.3)',
        }}>
          <span className="text-lg font-black text-white">AR</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-[17px] text-foreground">Alex Rivera</p>
          <p className="text-[12px] text-muted-foreground mt-0.5">@alex_rivera · Los Angeles, CA</p>
          <span className="px-2 py-0.5 rounded-full bg-primary/8 text-[10px] font-bold text-primary mt-1.5 inline-block">Silver Scout</span>
        </div>
      </div>
      <p className="text-[12px] text-foreground/70 leading-relaxed mt-3">MMA fighter & gear enthusiast. Honest reviews of gear I use.</p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-4 gap-2 stagger-grid">
      {[
        { val: "$1.2k", label: "Earned" },
        { val: "14", label: "Referrals" },
        { val: "12", label: "Products" },
        { val: "89", label: "Sales" },
      ].map((s) => (
        <div key={s.label} className="rounded-[16px] bg-card shadow-xs p-3 text-center">
          <p className="font-display font-black text-[14px] text-foreground">{s.val}</p>
          <p className="text-[9px] text-muted-foreground mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Tier */}
    <div className="rounded-[22px] bg-card shadow-card p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-accent-amber" />
          <p className="font-bold text-[14px] text-foreground">Silver Scout</p>
        </div>
        <span className="text-[11px] text-muted-foreground">Level 12</span>
      </div>
      <div className="h-[6px] rounded-full bg-muted overflow-hidden">
        <div className="h-full rounded-full bg-primary w-[65%]" />
      </div>
      <p className="text-[11px] text-muted-foreground mt-2">3,250 / 5,000 XP to Gold</p>
    </div>

    {/* Quick Actions */}
    <div className="space-y-2 stagger-children">
      {[
        { icon: <ShoppingBag className="w-4 h-4 text-primary" />, label: "My Storefront", action: () => onNavigate("storefront") },
        { icon: <Wallet className="w-4 h-4 text-accent-emerald" />, label: "Wallet & Earnings", action: () => onNavigate("wallet") },
        { icon: <Heart className="w-4 h-4 text-destructive" />, label: "Saved Items", action: () => onNavigate("saved-items") },
        { icon: <Share2 className="w-4 h-4 text-accent-amber" />, label: "Referral Code", action: () => onNavigate("referral-code") },
        { icon: <Trophy className="w-4 h-4 text-accent-coral" />, label: "Leaderboard", action: () => onNavigate("leaderboard") },
      ].map((item) => (
        <button key={item.label} onClick={item.action}
          className="w-full flex items-center gap-3.5 py-3.5 px-4 rounded-[18px] bg-card shadow-xs text-left active:scale-[0.98] transition-transform">
          <div className="w-9 h-9 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">{item.icon}</div>
          <span className="text-[13px] font-semibold text-foreground flex-1">{item.label}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      ))}
    </div>
  </div>
);

/* ═══════ NOTIFICATIONS ═══════ */
export const NotificationsScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => (
  <div className="px-6 py-4 space-y-4">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
      <p className="font-display font-bold text-lg text-foreground">Notifications</p>
    </div>
    <div className="space-y-2 stagger-children">
      <NotifRow icon={<CreditCard className="w-4 h-4 text-accent-emerald" />} iconBg="bg-accent-emerald/10" title="Commission Earned" desc="You earned $8.00 from a Venum sale" time="2h ago" unread onClick={() => onNavigate("wallet")} />
      <NotifRow icon={<Trophy className="w-4 h-4 text-accent-amber" />} iconBg="bg-accent-amber/10" title="Rank Up" desc="You moved to #12 on the leaderboard" time="5h ago" unread onClick={() => onNavigate("leaderboard")} />
      <NotifRow icon={<Check className="w-4 h-4 text-primary" />} iconBg="bg-primary/10" title="Mission Approved" desc="Your Venum gear photo was approved" time="1d ago" onClick={() => onNavigate("missions")} />
      <NotifRow icon={<UserPlus className="w-4 h-4 text-info" />} iconBg="bg-info/10" title="New Follower" desc="Sarah M. started following you" time="1d ago" />
      <NotifRow icon={<Bell className="w-4 h-4 text-accent-coral" />} iconBg="bg-accent-coral/10" title="New Mission Available" desc="Hayabusa is looking for gear reviewers" time="2d ago" onClick={() => onNavigate("missions")} />
    </div>
  </div>
);

/* ═══════ EDIT PROFILE ═══════ */
export const EditProfileScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-6 py-4 space-y-5">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
      <p className="font-display font-bold text-lg text-foreground flex-1">Edit Profile</p>
      <button className="text-[13px] font-bold text-primary">Save</button>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-18 h-18 rounded-full bg-primary flex items-center justify-center" style={{ width: 72, height: 72 }}>
        <span className="text-xl font-black text-white">AR</span>
      </div>
      <button className="px-4 py-2.5 rounded-xl bg-card shadow-card text-[12px] font-semibold text-foreground flex items-center gap-2">
        <Camera className="w-4 h-4" /> Change Photo
      </button>
    </div>
    <div className="space-y-4">
      {[
        { label: "Display Name", value: "Alex Rivera" },
        { label: "Username", value: "@alex_rivera" },
        { label: "Location", value: "Los Angeles, CA" },
        { label: "Bio", value: "MMA fighter & gear enthusiast", multiline: true },
      ].map((f) => (
        <div key={f.label}>
          <p className="text-[11px] font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{f.label}</p>
          <div className={`rounded-2xl bg-muted/50 px-4 ${f.multiline ? "py-3.5 min-h-[80px]" : "h-12 flex items-center"}`}>
            <span className="text-[13px] text-foreground">{f.value}</span>
          </div>
        </div>
      ))}
    </div>
    <div>
      <p className="text-[11px] font-semibold text-muted-foreground mb-2.5 uppercase tracking-wider">Social Handles</p>
      <div className="space-y-2">
        {[["Instagram", "@alex_fights"], ["TikTok", "@alex_fights"], ["YouTube", ""], ["X", "@alexrivera"]].map(([label, val]) => (
          <div key={label} className="h-12 rounded-2xl bg-muted/50 px-4 flex items-center gap-3">
            <span className="text-[11px] font-semibold text-muted-foreground w-20 flex-shrink-0">{label}</span>
            <span className="text-[13px] text-foreground">{val || "Not set"}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════ SAVED ITEMS ═══════ */
export const SavedItemsScreen = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (s: Screen) => void }) => (
  <div className="px-6 py-4 space-y-4">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
      <p className="font-display font-bold text-lg text-foreground">Saved Items</p>
    </div>
    {["Hayabusa T3 Gloves", "Venum Rashguard", "Sanabul Shin Guards"].map((p) => (
      <button key={p} onClick={() => onNavigate("product")} className="w-full flex items-center gap-3 p-3.5 rounded-[18px] bg-card shadow-card text-left active:scale-[0.98] transition-transform">
        <div className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
        <div className="flex-1">
          <p className="text-[13px] font-bold text-foreground">{p}</p>
          <p className="text-[11px] text-muted-foreground">$79.99</p>
        </div>
        <Heart className="w-4 h-4 text-destructive fill-destructive" />
      </button>
    ))}
  </div>
);

/* ═══════ REFERRAL CODE ═══════ */
export const ReferralCodeScreen = ({ onBack }: { onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="px-6 py-4 space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
        <p className="font-display font-bold text-lg text-foreground">Referral Code</p>
      </div>
      <div className="rounded-[22px] bg-primary/8 p-6 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/12 flex items-center justify-center mx-auto"><Share2 className="w-5 h-5 text-primary" /></div>
        <p className="text-[15px] font-bold text-foreground">Share & Earn 10%</p>
        <p className="text-[12px] text-muted-foreground leading-relaxed">Earn 10% on every purchase your referrals make.</p>
        <div className="bg-card shadow-card rounded-2xl px-4 py-3.5 flex items-center justify-between">
          <span className="text-[14px] font-mono font-bold text-foreground tracking-wider">ALEX-MMA-2024</span>
          <button onClick={() => setCopied(true)} className="text-[11px] font-bold text-primary">{copied ? "Copied!" : "Copy"}</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[{ label: "Referrals", value: "14" }, { label: "Earnings", value: "$318" }, { label: "Rate", value: "10%" }].map(s => (
          <div key={s.label} className="rounded-[18px] bg-card shadow-card p-3.5 text-center">
            <p className="font-display font-black text-[18px] text-foreground">{s.value}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════ SHARE STOREFRONT ═══════ */
export const ShareStorefrontScreen = ({ onBack }: { onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-3 px-6 pt-4 pb-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
        <p className="font-display font-bold text-lg text-foreground flex-1">Share Storefront</p>
      </div>
      <div className="px-6 space-y-5 pb-6">
        <div className="rounded-[22px] bg-card shadow-card p-6 flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><QrCode className="w-5 h-5 text-primary" /></div>
          <p className="font-display font-bold text-[14px] text-foreground">Scan to visit my storefront</p>
          <div className="w-44 h-44 bg-foreground rounded-3xl p-3 relative">
            <div className="w-full h-full bg-background rounded-2xl relative overflow-hidden">
              <div className="absolute inset-2 grid grid-cols-9 grid-rows-9 gap-[2px]">
                {Array.from({ length: 81 }).map((_, i) => {
                  const row = Math.floor(i / 9); const col = i % 9;
                  const isCorner = (row < 3 && col < 3) || (row < 3 && col > 5) || (row > 5 && col < 3);
                  const isFilled = isCorner || Math.random() > 0.45;
                  return <div key={i} className={`rounded-[1px] ${isFilled ? "bg-foreground" : "bg-transparent"}`} />;
                })}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                  <span className="font-display font-black text-[10px] text-white">L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[22px] bg-card shadow-card p-5 space-y-3">
          <p className="font-display font-bold text-[13px] text-foreground">Your Link</p>
          <div className="flex items-center gap-2 bg-muted/50 rounded-2xl px-4 py-3">
            <Link className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-[13px] font-semibold text-foreground flex-1 truncate">luup.app/alexrivera</span>
            <button onClick={() => setCopied(true)} className="px-3.5 py-2 rounded-xl bg-primary text-white text-[11px] font-bold">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="rounded-[22px] bg-card shadow-card p-5 space-y-3">
          <p className="font-display font-bold text-[13px] text-foreground">Share via</p>
          <div className="grid grid-cols-4 gap-2">
            {[{ label: "Instagram", short: "IG" }, { label: "TikTok", short: "TT" }, { label: "WhatsApp", short: "WA" }, { label: "X", short: "X" }].map((s) => (
              <button key={s.label} className="flex flex-col items-center gap-1.5 p-3.5 rounded-2xl bg-muted/30 active:scale-95 transition-transform">
                <div className="w-9 h-9 rounded-full bg-foreground/8 flex items-center justify-center">
                  <span className="text-[11px] font-bold text-foreground">{s.short}</span>
                </div>
                <span className="text-[9px] font-semibold text-muted-foreground">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════
   HELPER COMPONENTS
   ═══════════════════════════════════ */

const submissionTypeIcon = (type: MissionSubmissionType) => {
  const iconClass = "w-4 h-4 text-muted-foreground";
  switch (type) {
    case "link": return <Link className={iconClass} />;
    case "screenshot": return <Camera className={iconClass} />;
    case "upload": return <Upload className={iconClass} />;
    case "referral": return <UserPlus className={iconClass} />;
    case "review": return <PenLine className={iconClass} />;
    case "checkin": return <MapPinIcon className={iconClass} />;
  }
};

const submissionTypeLabel = (type: MissionSubmissionType) => {
  switch (type) {
    case "link": return "Submit Link";
    case "screenshot": return "Upload Screenshot";
    case "upload": return "Upload Content";
    case "referral": return "Share Referral";
    case "review": return "Write Review";
    case "checkin": return "Check In";
  }
};

const statusConfig = (status: MissionStatus) => {
  switch (status) {
    case "open": return { label: "Join Mission", color: "bg-primary text-white", canAct: true };
    case "joined": return { label: "Submit", color: "bg-accent-coral text-white", canAct: true };
    case "submitted": return { label: "Submitted", color: "bg-info/10 text-info", canAct: false };
    case "in-review": return { label: "In Review", color: "bg-accent-amber/10 text-accent-amber", canAct: false };
    case "approved": return { label: "Approved", color: "bg-accent-emerald/10 text-accent-emerald", canAct: false };
    case "rejected": return { label: "Rejected", color: "bg-destructive/10 text-destructive", canAct: false };
  }
};

/* ═══════ MISSION CARD ═══════ */
const MissionCard = ({ mission, currentStatus, expanded, onToggle, onJoin, onSubmit }: {
  mission: MissionData; currentStatus: MissionStatus; expanded: boolean;
  onToggle: () => void; onJoin: () => void; onSubmit: () => void;
}) => {
  const sc = statusConfig(currentStatus);
  const slotsPercent = Math.round((mission.slots.taken / mission.slots.total) * 100);

  return (
    <div className={`rounded-[20px] bg-card shadow-card overflow-hidden transition-all ${mission.locked ? "opacity-35" : ""}`}>
      <button onClick={onToggle} className="w-full text-left p-4">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-2xl bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
            {mission.locked ? <Lock className="w-4 h-4 text-muted-foreground" /> : submissionTypeIcon(mission.submissionType)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap mb-1">
              <span className="px-2 py-0.5 rounded-full bg-muted text-[9px] font-bold text-muted-foreground">{mission.brand}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                mission.difficulty === "Easy" ? "bg-accent-emerald/10 text-accent-emerald" :
                mission.difficulty === "Medium" ? "bg-accent-amber/10 text-accent-amber" :
                "bg-accent-coral/10 text-accent-coral"
              }`}>{mission.difficulty}</span>
              {currentStatus !== "open" && !mission.locked && (
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${sc.color}`}>{sc.label}</span>
              )}
            </div>
            <p className="text-[13px] font-bold text-foreground leading-snug">{mission.title}</p>
            <div className="flex items-center gap-3 mt-1.5">
              {mission.reward && <span className="text-[12px] font-bold text-foreground">{mission.reward}</span>}
              {mission.pointsReward && <span className="text-[11px] font-bold text-primary">{mission.pointsReward} pts</span>}
              {mission.deadline && <span className="text-[10px] text-accent-coral font-medium flex items-center gap-0.5"><Clock className="w-3 h-3" />{mission.deadline}</span>}
            </div>
            {!mission.locked && (
              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex-1 h-[4px] rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full ${slotsPercent > 80 ? "bg-destructive" : "bg-primary/30"}`} style={{ width: `${slotsPercent}%` }} />
                </div>
                <span className={`text-[9px] font-semibold ${slotsPercent > 80 ? "text-destructive" : "text-muted-foreground"}`}>{mission.slots.taken}/{mission.slots.total}</span>
              </div>
            )}
          </div>
          {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground mt-1" /> : <ChevronDown className="w-4 h-4 text-muted-foreground mt-1" />}
        </div>
      </button>
      {expanded && !mission.locked && (
        <div className="px-4 pb-4 space-y-3 border-t border-border/20 pt-3 expand-enter">
          <p className="text-[12px] text-muted-foreground leading-relaxed">{mission.description}</p>
          <div>
            <p className="text-[11px] font-bold text-foreground mb-2">Requirements</p>
            <div className="space-y-1.5">
              {mission.requirements.map((r, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CircleDot className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-[11px] text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {currentStatus === "open" && (
              <button onClick={(e) => { e.stopPropagation(); onJoin(); }} className="flex-1 py-3.5 rounded-2xl bg-primary text-white text-[12px] font-bold text-center shadow-lg active:scale-[0.97]">
                Join Mission
              </button>
            )}
            {currentStatus === "joined" && (
              <button onClick={(e) => { e.stopPropagation(); onSubmit(); }} className="flex-1 py-3.5 rounded-2xl bg-accent-coral text-white text-[12px] font-bold text-center active:scale-[0.97]">
                {submissionTypeLabel(mission.submissionType)}
              </button>
            )}
            {currentStatus === "submitted" && <div className="flex-1 py-3.5 rounded-2xl bg-info/10 text-info text-[12px] font-bold text-center">Submitted · Awaiting Review</div>}
            {currentStatus === "in-review" && <div className="flex-1 py-3.5 rounded-2xl bg-accent-amber/10 text-accent-amber text-[12px] font-bold text-center flex items-center justify-center gap-1.5"><Eye className="w-3.5 h-3.5" /> Under Review</div>}
            {currentStatus === "approved" && <div className="flex-1 py-3.5 rounded-2xl bg-accent-emerald/10 text-accent-emerald text-[12px] font-bold text-center flex items-center justify-center gap-1.5"><Check className="w-3.5 h-3.5" /> Approved</div>}
            {currentStatus === "rejected" && <div className="flex-1 py-3.5 rounded-2xl bg-destructive/10 text-destructive text-[12px] font-bold text-center">Rejected · Resubmit</div>}
          </div>
        </div>
      )}
    </div>
  );
};

/* ═══════ SOCIAL POST ═══════ */
const SocialPost = ({ author, time, content, likes, comments, reposts, hasImage, productTag, onProductClick, isBrand, verified, badge }: {
  author: string; time: string; content: string; likes: number; comments: number; reposts?: number; hasImage?: boolean; productTag?: string; onProductClick?: () => void; isBrand?: boolean; verified?: boolean; badge?: string;
}) => (
  <div className="rounded-[20px] bg-card shadow-card p-4 space-y-3">
    <div className="flex items-center gap-2.5">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isBrand ? "bg-primary/8" : "bg-muted"}`}>
        {isBrand ? <Zap className="w-3.5 h-3.5 text-primary" /> : <span className="text-[10px] font-bold text-foreground">{author.charAt(0)}</span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-[13px] font-bold text-foreground truncate">{author}</p>
          {(isBrand || verified) && <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
        </div>
        <div className="flex items-center gap-1.5">
          <p className="text-[11px] text-muted-foreground">{time}</p>
          {badge && <span className="px-1.5 py-0.5 rounded-full bg-accent-amber/10 text-accent-amber text-[9px] font-bold">{badge}</span>}
        </div>
      </div>
    </div>
    <p className="text-[12px] text-foreground/80 leading-relaxed">{content}</p>
    {hasImage && (
      <div className="h-40 rounded-2xl bg-muted relative overflow-hidden">
        {productTag && (
          <button onClick={onProductClick} className="absolute bottom-2.5 left-2.5 px-3 py-2 rounded-xl bg-card/90 backdrop-blur text-[11px] font-bold text-foreground shadow-sm flex items-center gap-1.5">
            <ShoppingBag className="w-3 h-3" /> {productTag}
          </button>
        )}
      </div>
    )}
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors"><Heart className="w-3.5 h-3.5" /><span className="text-[11px] font-medium">{likes}</span></button>
      <button className="flex items-center gap-1 text-muted-foreground"><MessageCircle className="w-3.5 h-3.5" /><span className="text-[11px] font-medium">{comments}</span></button>
      {reposts !== undefined && <button className="flex items-center gap-1 text-muted-foreground"><Repeat2 className="w-3.5 h-3.5" /><span className="text-[11px] font-medium">{reposts}</span></button>}
      <div className="flex items-center gap-2.5 ml-auto">
        <button className="text-muted-foreground"><Bookmark className="w-3.5 h-3.5" /></button>
        <button className="text-muted-foreground"><Share2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  </div>
);

/* ═══════ NOTIFICATION ROW ═══════ */
const NotifRow = ({ icon, iconBg, title, desc, time, unread, onClick }: {
  icon: React.ReactNode; iconBg: string; title: string; desc: string; time: string; unread?: boolean; onClick?: () => void;
}) => (
  <button onClick={onClick} className={`w-full flex items-start gap-3 p-4 rounded-[18px] text-left transition-all ${unread ? "bg-primary/4 shadow-card" : "bg-card shadow-xs"}`}>
    <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>{icon}</div>
    <div className="flex-1 min-w-0">
      <p className="text-[13px] font-bold text-foreground">{title}</p>
      <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{desc}</p>
      <p className="text-[10px] text-muted-foreground/50 mt-1">{time}</p>
    </div>
    {unread && <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />}
  </button>
);
