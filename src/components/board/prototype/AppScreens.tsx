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

/* ═══════ LOGIN / SIGNUP ═══════ */
export const LoginScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <div className="min-h-[620px] flex flex-col relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(252 78% 55% / 0.5), transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(165 82% 40% / 0.4), transparent 70%)' }} />
        <div className="absolute top-1/2 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(38 92% 56% / 0.4), transparent 70%)' }} />
      </div>

      <div className="relative z-10 px-7 py-8 flex-1 flex flex-col justify-center space-y-7">
        {/* Logo */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 rounded-[28px] mx-auto flex items-center justify-center shadow-float gradient-hero shimmer">
            <span className="text-4xl font-display font-black text-primary-foreground">L</span>
          </div>
          <div>
            <p className="font-display font-black text-3xl text-foreground tracking-tight">LUUP</p>
            <p className="text-[11px] text-muted-foreground mt-1 font-medium tracking-wide">Earn while you engage</p>
          </div>
        </div>

        {/* Social login */}
        <div className="space-y-2.5 stagger-children">
          <button className="w-full flex items-center justify-center gap-2.5 h-[52px] rounded-2xl bg-card text-xs font-bold text-foreground active:scale-[0.98] transition-all shadow-card">
            <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2.5 h-[52px] rounded-2xl bg-foreground text-xs font-bold text-background active:scale-[0.98] transition-all shadow-card">
            <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Continue with Apple
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] text-muted-foreground/60 font-medium uppercase tracking-wider">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Email form */}
        <div className="space-y-2.5">
          <div className="h-[52px] rounded-2xl bg-muted/60 px-4 flex items-center">
            <span className="text-xs text-muted-foreground">Email address</span>
          </div>
          <div className="h-[52px] rounded-2xl bg-muted/60 px-4 flex items-center">
            <span className="text-xs text-muted-foreground">Password</span>
          </div>
          {mode === "signup" && (
            <div className="h-[52px] rounded-2xl bg-muted/60 px-4 flex items-center">
              <span className="text-xs text-muted-foreground">Confirm password</span>
            </div>
          )}
          <button
            onClick={() => onNavigate("start")}
            className="w-full h-[52px] rounded-2xl text-sm font-bold active:scale-[0.98] transition-all text-primary-foreground gradient-hero shadow-lg"
          >
            {mode === "signup" ? "Create Account" : "Sign In"}
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          {mode === "login" ? (
            <>Don't have an account? <button onClick={() => setMode("signup")} className="text-primary font-bold">Sign up</button></>
          ) : (
            <>Already have an account? <button onClick={() => setMode("login")} className="text-primary font-bold">Sign in</button></>
          )}
        </p>
        <p className="text-[9px] text-muted-foreground/40 text-center">By continuing, you agree to our Terms & Privacy Policy</p>
      </div>
    </div>
  );
};

/* ═══════ START / ONBOARDING ═══════ */
export const StartScreen = ({ onSelectEcosystem, onSkip }: { onSelectEcosystem: (id: string) => void; onSkip: () => void }) => {
  const comingSoonEcosystems = [
    { emoji: "💪", label: "Fitness & Wellness" },
    { emoji: "✨", label: "Beauty & Skincare" },
    { emoji: "🏔️", label: "Outdoor & Adventure" },
    { emoji: "🎮", label: "Gaming & Esports" },
  ];

  return (
    <div className="px-6 py-6 space-y-5 min-h-[620px] flex flex-col">
      <div className="text-center space-y-2 pt-2">
        <div className="w-14 h-14 rounded-2xl gradient-hero mx-auto flex items-center justify-center shadow-lg">
          <span className="text-2xl font-display font-black text-primary-foreground">L</span>
        </div>
        <p className="font-display font-black text-xl text-foreground">You're in.</p>
        <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
          LUUP is your network for brands, missions, rewards, and real earning opportunities.
        </p>
      </div>

      <button onClick={onSkip}
        className="w-full p-4 rounded-3xl text-primary-foreground active:scale-[0.98] transition-all text-left group relative overflow-hidden gradient-hero shadow-lg">
        <div className="relative flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-primary-foreground/15 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
            <Zap className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-sm">Enter LUUP</p>
            <p className="text-[11px] opacity-80">Full access to every brand, mission & reward</p>
          </div>
          <ChevronRight className="w-5 h-5 opacity-60" />
        </div>
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Go deeper</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <p className="text-[11px] text-muted-foreground leading-relaxed px-1">
        Ecosystems are focused worlds within LUUP — tailored brands, missions, and community for a specific interest.
      </p>

      <div className="space-y-2">
        <button onClick={() => onSelectEcosystem("combat")}
          className="w-full flex items-center gap-3 p-4 rounded-3xl bg-card shadow-card hover:shadow-elevated transition-all text-left group">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 bg-destructive/10">🥊</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="font-display font-bold text-sm text-foreground">Combat Sports</p>
              <span className="px-1.5 py-0.5 rounded-full bg-accent-emerald/10 text-accent-emerald text-[9px] font-bold uppercase">Live</span>
            </div>
            <p className="text-[11px] text-muted-foreground">Hayabusa, Venum, Everlast & more</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-2 px-3">
          <div className="flex -space-x-1.5">
            {["🟣", "🔵", "🟢"].map((c, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[8px]">{c}</div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground">247 members earning this week</p>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider px-1">More worlds opening soon</p>
        <div className="grid grid-cols-2 gap-2 stagger-grid">
          {comingSoonEcosystems.map((eco) => (
            <div key={eco.label} className="flex items-center gap-2 p-3 rounded-2xl bg-card shadow-xs">
              <span className="text-base">{eco.emoji}</span>
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
  const categoryOptions: Record<string, string[]> = {
    combat: ["MMA", "Boxing", "Kickboxing", "Muay Thai", "BJJ", "Wrestling", "Karate", "Judo"],
    fitness: ["Bodybuilding", "Crossfit", "Powerlifting", "Calisthenics", "Running", "HIIT", "Yoga", "Swimming"],
    beauty: ["Skincare", "Makeup", "Haircare", "Fragrance", "Nails", "Wellness"],
    gaming: ["FPS", "MOBA", "Battle Royale", "RPG", "Sports", "Racing", "Sim", "Indie"],
  };
  const categories = categoryOptions[ecosystem.id] || ["Category 1", "Category 2", "Category 3"];

  return (
    <div className="px-6 py-6 space-y-4 min-h-[620px] flex flex-col">
      <div className="flex gap-1.5">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map(s => (
          <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "gradient-hero" : "bg-muted"}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="flex-1 flex flex-col">
          <div className="text-center space-y-2 pt-2 mb-6">
            <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-xl shadow-card ${ecosystem.color}`}>{ecosystem.emoji}</div>
            <p className="font-display font-black text-lg text-foreground">Set Up Your Profile</p>
            <p className="text-[11px] text-muted-foreground">Step 1 of {totalSteps} · {ecosystem.label}</p>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center shadow-lg">
                <span className="text-lg font-black text-primary-foreground">AR</span>
              </div>
              <button className="px-4 py-2 rounded-xl bg-card shadow-card text-[10px] font-semibold text-foreground flex items-center gap-1.5">
                <Camera className="w-3 h-3" /> Change photo
              </button>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Username</p>
              <div className="h-11 rounded-2xl bg-muted/50 px-4 flex items-center gap-2">
                <span className="text-xs text-muted-foreground/60">@</span>
                <span className="text-xs text-foreground font-medium">alex_rivera</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Display Name</p>
              <div className="h-11 rounded-2xl bg-muted/50 px-4 flex items-center">
                <span className="text-xs text-foreground font-medium">Alex Rivera</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Bio</p>
              <div className="h-16 rounded-2xl bg-muted/50 px-4 pt-3">
                <span className="text-xs text-muted-foreground">Tell the {ecosystem.label} community about you...</span>
              </div>
            </div>
          </div>
          <button onClick={() => setStep(2)} className="w-full h-12 rounded-2xl gradient-hero text-primary-foreground text-sm font-bold mt-4 active:scale-[0.98] transition-transform shadow-lg">
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex-1 flex flex-col">
          <div className="text-center space-y-1.5 pt-2 mb-6">
            <p className="font-display font-black text-lg text-foreground">Details & Socials</p>
            <p className="text-[11px] text-muted-foreground">Step 2 of {totalSteps} · Help others find you</p>
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <p className="text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">Country</p>
              <div className="h-11 rounded-2xl bg-muted/50 px-4 flex items-center justify-between">
                <span className="text-xs text-foreground flex items-center gap-2 font-medium"><MapPin className="w-3.5 h-3.5 text-muted-foreground" /> United Kingdom</span>
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-wider">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, i) => (
                  <button key={cat} className={`px-3.5 py-2 rounded-2xl text-[11px] font-semibold transition-all active:scale-95 ${
                    i === 0 ? "gradient-hero text-primary-foreground shadow-sm" : "bg-muted/50 text-foreground"
                  }`}>{cat}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-wider">Social Handles</p>
              <div className="space-y-2">
                {[["Instagram", "@alex_fights"], ["TikTok", "@username"], ["YouTube", "@channel"], ["X / Twitter", "@handle"]].map(([label, val]) => (
                  <div key={label} className="h-11 rounded-2xl bg-muted/50 px-4 flex items-center gap-3">
                    <span className="text-[10px] font-bold text-muted-foreground w-16 flex-shrink-0">{label}</span>
                    <span className="text-xs text-foreground">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={() => setStep(1)} className="flex-1 h-12 rounded-2xl bg-muted text-sm font-bold text-foreground active:scale-[0.98] transition-transform">Back</button>
            <button onClick={() => setStep(3)} className="flex-[2] h-12 rounded-2xl gradient-hero text-primary-foreground text-sm font-bold active:scale-[0.98] transition-transform shadow-lg">Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-3xl mb-4 shadow-card ${ecosystem.color}`}>{ecosystem.emoji}</div>
          <p className="font-display font-black text-xl text-foreground">You're All Set!</p>
          <p className="text-xs text-muted-foreground mt-2 max-w-[240px] leading-relaxed">
            Your {ecosystem.label} profile is ready. Start exploring brands, completing missions, and earning rewards.
          </p>
          <div className="w-full mt-5 rounded-3xl bg-card shadow-card p-4 text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <span className="text-sm font-black text-primary-foreground">AR</span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Alex Rivera</p>
                <p className="text-[10px] text-muted-foreground">@alex_rivera · 🇬🇧 UK · MMA</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5 mt-4 w-full stagger-grid">
            {[
              { icon: <Flame className="w-4 h-4 text-primary" />, val: String(ecosystem.missions.length), label: "Missions" },
              { icon: <ShoppingBag className="w-4 h-4 text-accent-coral" />, val: String(ecosystem.brands.length + 1), label: "Brands" },
              { icon: <Trophy className="w-4 h-4 text-accent-amber" />, val: "Bronze", label: "Tier" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-card shadow-card p-3 text-center">
                <div className="mx-auto mb-1">{s.icon}</div>
                <p className="text-[10px] font-bold text-foreground">{s.val}</p>
                <p className="text-[8px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <button onClick={onComplete} className="w-full h-12 rounded-2xl gradient-hero text-primary-foreground text-sm font-bold mt-6 active:scale-[0.98] transition-transform shadow-lg">
            Start Exploring
          </button>
        </div>
      )}
    </div>
  );
};

/* ═══════ ACTIVITY RING SVG ═══════ */
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

/* ═══════ HOME ═══════ */
export const HomeScreen = ({ onNavigate, ecosystem, onSwitchEcosystem }: {
  onNavigate: (s: Screen) => void; ecosystem: EcosystemData; onSwitchEcosystem: (id: string) => void;
}) => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const missionsComplete = ecosystem.missions.filter(m => m.status === "approved").length;

  return (
    <div className="px-5 py-3 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate("profile")} className="w-12 h-12 rounded-full flex items-center justify-center shadow-card gradient-hero">
            <span className="text-sm font-black text-primary-foreground">AR</span>
          </button>
          <div>
            <p className="text-[10px] text-muted-foreground font-medium">Good afternoon</p>
            <p className="font-display font-bold text-[15px] text-foreground leading-tight">Alex Rivera</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowSwitcher(!showSwitcher)}
            className="h-9 px-3 rounded-2xl bg-card shadow-card flex items-center gap-1.5 active:scale-95 transition-transform">
            <span className="text-xs">{ecosystem.emoji}</span>
            <span className="text-[10px] font-bold text-foreground">{ecosystem.label.split(" ")[0]}</span>
            <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${showSwitcher ? "rotate-180" : ""}`} />
          </button>
          <button onClick={() => onNavigate("notifications")} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center relative">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-[7px] font-bold text-destructive-foreground flex items-center justify-center">3</span>
          </button>
        </div>
      </div>

      {/* Ecosystem Switcher */}
      {showSwitcher && (
        <div className="rounded-3xl bg-card shadow-float p-2 space-y-0.5 animate-scale-in">
          {ecosystems.map((eco) => (
            <button key={eco.id} onClick={() => { onSwitchEcosystem(eco.id); setShowSwitcher(false); }}
              className={`w-full flex items-center gap-2.5 p-3 rounded-2xl text-left transition-all ${eco.id === ecosystem.id ? "bg-primary/8" : "hover:bg-muted/50"}`}>
              <span className="text-base">{eco.emoji}</span>
              <p className="text-xs font-bold text-foreground flex-1">{eco.label}</p>
              {eco.id === ecosystem.id && <Check className="w-3.5 h-3.5 text-primary" />}
            </button>
          ))}
        </div>
      )}

      {/* Hero Earnings Card — Bold dark gradient */}
      <div className="w-full rounded-[28px] p-5 text-primary-foreground relative overflow-hidden shadow-float" style={{ background: 'linear-gradient(145deg, hsl(222 47% 11%), hsl(252 30% 18%))' }}>
        <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(165 82% 40% / 0.5), transparent 70%)' }} />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, hsl(252 78% 55% / 0.4), transparent 70%)' }} />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-medium text-white/50 uppercase tracking-wider">This Month</p>
            <span className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-accent-emerald/20 text-accent-lime text-[10px] font-bold">
              <TrendingUp className="w-3 h-3" />{ecosystem.walletGrowth}
            </span>
          </div>
          <p className="font-display font-black text-[36px] leading-none tracking-tight text-white">{ecosystem.walletBalance}</p>

          {/* Mini chart */}
          <div className="flex items-end gap-[4px] h-[48px] mt-4 mb-4">
            {[28, 32, 24, 36, 40, 38, 48, 52, 50, 56, 54, 46].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-[3px] transition-all" style={{ height: `${h}%`, background: i >= 10 ? 'hsl(165 82% 40% / 0.7)' : 'hsl(0 0% 100% / 0.12)' }} />
            ))}
          </div>

          {/* Breakdown */}
          <div className="flex items-center gap-3 pt-3 border-t border-white/8">
            {[
              { label: "Missions", val: ecosystem.missionEarnings },
              { label: "Referrals", val: ecosystem.referralEarnings },
              { label: "Points", val: ecosystem.pointsBalance },
            ].map((s, i) => (
              <div key={s.label} className="flex-1">
                {i > 0 && <div className="absolute" />}
                <p className="text-[8px] uppercase tracking-wider text-white/35 font-semibold">{s.label}</p>
                <p className="text-sm font-bold text-white/80 mt-0.5">{s.val}</p>
              </div>
            ))}
          </div>

          <button onClick={() => onNavigate("wallet")} className="w-full mt-3 py-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white text-xs font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all border border-white/8">
            <Wallet className="w-3.5 h-3.5" /> Open Wallet
          </button>
        </div>
      </div>

      {/* Streak & Level */}
      <button onClick={() => onNavigate("leaderboard")} className="w-full rounded-3xl bg-card shadow-card p-3.5 flex items-center gap-3 active:scale-[0.98] transition-transform">
        <div className="relative">
          <ActivityRing progress={65} size={44} stroke={4} color="hsl(var(--accent-amber))" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-black text-foreground">12</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-bold text-foreground">Silver Scout</p>
            <span className="text-[9px] font-bold text-accent-coral flex items-center gap-0.5">🔥 7 day streak</span>
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "65%", background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent-amber)))' }} />
            </div>
            <span className="text-[8px] text-muted-foreground font-medium">3,250 XP</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[9px] font-bold text-accent-emerald">↑3</span>
          <span className="text-[8px] text-muted-foreground">#12</span>
        </div>
      </button>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 stagger-grid">
        {[
          { icon: <Flame className="w-4 h-4 text-primary" />, val: String(missionsComplete), label: "Completed", color: "bg-primary/8" },
          { icon: <Trophy className="w-4 h-4 text-accent-amber" />, val: "#12", label: "Rank", color: "bg-accent-amber/8" },
          { icon: <Award className="w-4 h-4 text-accent-coral" />, val: "🏅", label: "Badges", color: "bg-accent-coral/8" },
        ].map((s) => (
          <button key={s.label} onClick={() => onNavigate(s.label === "Completed" ? "missions" : "leaderboard")}
            className="rounded-3xl bg-card shadow-card p-3.5 text-left active:scale-[0.97] transition-transform">
            <div className={`w-8 h-8 rounded-xl ${s.color} flex items-center justify-center mb-2`}>{s.icon}</div>
            <p className="font-display font-black text-lg leading-none text-foreground num-pop">{s.val}</p>
            <p className="text-[9px] text-muted-foreground font-medium mt-1">{s.label}</p>
          </button>
        ))}
      </div>

      {/* Active Missions */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-display font-bold text-[14px] text-foreground">Active Missions</p>
          <button onClick={() => onNavigate("missions")} className="text-[10px] text-primary font-bold">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 stagger-scroll">
          {ecosystem.activeMissions.slice(0, 3).map((m, i) => {
            const colors = [
              { bg: "from-primary/15 to-primary/5", icon: "text-primary/40" },
              { bg: "from-accent-emerald/15 to-accent-emerald/5", icon: "text-accent-emerald/40" },
              { bg: "from-accent-coral/15 to-accent-coral/5", icon: "text-accent-coral/40" },
            ];
            const c = colors[i % colors.length];
            return (
              <button key={m.title} onClick={() => onNavigate("missions")}
                className="flex-shrink-0 w-[156px] rounded-3xl bg-card shadow-card overflow-hidden text-left active:scale-[0.97] transition-transform">
                <div className={`w-full h-[72px] bg-gradient-to-br ${c.bg} relative flex items-center justify-center`}>
                  <Flame className={`w-5 h-5 ${c.icon}`} />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-xl bg-foreground/85 text-background text-[8px] font-black">{m.reward}</span>
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-bold text-foreground truncate leading-tight mb-2">{m.title}</p>
                  <div className="flex items-center gap-1.5">
                    <div className="flex-1 h-1.5 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${m.progress}%` }} />
                    </div>
                    <span className="text-[9px] font-bold text-muted-foreground">{m.progress}%</span>
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
          <p className="font-display font-bold text-[14px] text-foreground">🔥 Trending Missions</p>
          <button onClick={() => onNavigate("missions")} className="text-[10px] text-primary font-bold">Explore</button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 stagger-scroll">
          {ecosystem.missions.filter(m => m.status === "open").slice(0, 3).map((m) => (
            <button key={m.id} onClick={() => onNavigate("missions")}
              className="flex-shrink-0 w-[156px] rounded-3xl bg-card shadow-card overflow-hidden text-left active:scale-[0.97] transition-transform">
              <div className="w-full h-[60px] bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 flex items-center justify-center relative">
                <Zap className="w-4 h-4 text-accent-amber/40" />
                <div className="absolute top-2 right-2 flex gap-1">
                  {m.reward && <span className="px-1.5 py-0.5 rounded-lg bg-foreground/80 text-background text-[8px] font-black">{m.reward}</span>}
                </div>
              </div>
              <div className="p-3">
                <p className="text-[10px] font-bold text-foreground line-clamp-2 leading-tight mb-1">{m.title}</p>
                <p className="text-[9px] text-muted-foreground">{m.brand} · {m.difficulty}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Brand */}
      <button onClick={() => onNavigate("brand")} className="w-full rounded-3xl bg-card shadow-card p-4 text-left active:scale-[0.98] transition-transform">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center shadow-sm">
            <span className="font-display font-black text-primary text-lg">{ecosystem.featuredBrand.logo}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="font-bold text-sm text-foreground">{ecosystem.featuredBrand.name}</p>
              <Check className="w-3.5 h-3.5 text-primary" />
            </div>
            <p className="text-[10px] text-muted-foreground">{ecosystem.featuredBrand.desc}</p>
            <p className="text-[10px] text-primary font-bold mt-0.5">{ecosystem.featuredBrand.royalty} royalties</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>
    </div>
  );
};

/* ═══════ EXPLORE / COMMUNITY ═══════ */
export const ExploreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [tab, setTab] = useState<"foryou" | "following" | "brands" | "groups" | "discover">("foryou");

  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-lg text-foreground">Community</p>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full gradient-hero flex items-center justify-center shadow-sm">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
        {([
          { id: "foryou" as const, label: "For You" },
          { id: "following" as const, label: "Following" },
          { id: "brands" as const, label: "Brands" },
          { id: "groups" as const, label: "Groups" },
          { id: "discover" as const, label: "Discover" },
        ]).map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2 rounded-2xl text-[11px] font-semibold whitespace-nowrap transition-all flex-shrink-0 ${tab === t.id ? "gradient-hero text-primary-foreground shadow-sm" : "bg-card shadow-xs text-muted-foreground"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "foryou" && (
        <div className="space-y-3 stagger-children">
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-0.5">
            {[
              { name: "Your Story", isYou: true },
              { name: "Sarah M.", hasNew: true },
              { name: "Jake S.", hasNew: true, live: true },
              { name: "Venum", hasNew: true, isBrand: true },
              { name: "Mike T.", hasNew: false },
            ].map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-1 flex-shrink-0 relative">
                <div className={`w-14 h-14 rounded-full p-[2px] ${s.isYou ? "" : s.hasNew ? "bg-gradient-to-tr from-primary to-accent-coral" : ""}`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${
                    s.isYou ? "border-2 border-dashed border-muted-foreground/25 bg-muted" :
                    s.hasNew ? "bg-card ring-2 ring-card" : "bg-muted"
                  }`}>
                    {s.isYou ? <Plus className="w-4 h-4 text-muted-foreground/40" /> :
                     s.isBrand ? <Zap className="w-4 h-4 text-primary" /> :
                     <div className="w-full h-full rounded-full bg-muted-foreground/10" />}
                  </div>
                </div>
                {s.live && <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-1 rounded-sm bg-destructive text-[6px] font-bold text-destructive-foreground uppercase z-10">Live</span>}
                <span className="text-[9px] text-muted-foreground font-medium truncate w-14 text-center">{s.name}</span>
              </div>
            ))}
          </div>

          <button className="w-full flex items-center gap-3 p-3 rounded-3xl bg-card shadow-card">
            <div className="w-9 h-9 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-[11px] text-muted-foreground flex-1 text-left">Share a tip, review, or win...</span>
            <Camera className="w-4 h-4 text-muted-foreground" />
          </button>

          <SocialPost author="Sarah Martinez" time="2h ago" content="Sharing my strategy: I focus on 3 brands max and create dedicated content for each. Royalties went from $40 to $320/mo 🚀" likes={142} comments={38} reposts={24} hasImage verified badge="Top Contributor" productTag="Venum Challenger 3.0" onProductClick={() => onNavigate("product")} />
          <SocialPost author="Jake Shields" time="4h ago" content="Pro tip: film your product unboxings and post them here. Brands notice active ambassadors and you get featured = more royalties 💰" likes={312} comments={67} reposts={41} hasImage verified />
        </div>
      )}

      {tab === "following" && (
        <div className="space-y-3 stagger-children">
          <SocialPost author="Jake Shields" time="1h ago" content="Added the new Sanabul Essential series to my storefront. Great value for beginners." likes={312} comments={44} reposts={28} hasImage productTag="Sanabul Essential" onProductClick={() => onNavigate("product")} verified />
          <SocialPost author="Sarah Martinez" time="3h ago" content="Morning pad work done ✅ Nothing beats starting the day with 6 rounds on the mitts." likes={67} comments={15} reposts={4} hasImage />
        </div>
      )}

      {tab === "brands" && (
        <div className="space-y-3 stagger-children">
          {[
            { brand: "Venum", time: "2h ago", content: "🆕 New drop: Venum Elite boxing gloves. Ambassadors earn 14% — our highest royalty rate!", tag: "New Product", royalty: "14%" },
            { brand: "Hayabusa", time: "6h ago", content: "Flash sale this weekend! All T3 products 20% off. Your followers get the deal, you earn full commission.", tag: "Sale", royalty: "10%" },
          ].map((b, i) => (
            <div key={i} className="rounded-3xl bg-card shadow-card overflow-hidden">
              <div className="px-4 pt-3.5 pb-2 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center"><Zap className="w-4 h-4 text-primary" /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-foreground">{b.brand}</p>
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-[9px] text-muted-foreground">{b.time}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary/8 text-[8px] font-bold text-primary">{b.tag}</span>
              </div>
              <div className="px-4 pb-3.5">
                <p className="text-[11px] text-foreground/80 leading-relaxed">{b.content}</p>
                <div className="flex items-center justify-between mt-2.5">
                  <span className="text-[9px] text-muted-foreground">Royalty: <span className="font-bold text-primary">{b.royalty}</span></span>
                  <button onClick={() => onNavigate("product")} className="px-3 py-1.5 rounded-xl gradient-hero text-primary-foreground text-[9px] font-bold shadow-sm">View →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "groups" && (
        <div className="space-y-3 stagger-children">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Your Groups</p>
          {[
            { name: "Royalty Earners Club", members: "2.4k", unread: 12, role: "Member" },
            { name: "MMA Training Tips", members: "1.8k", unread: 3, role: "Member" },
            { name: "My Gear Corner", members: "47", unread: 0, role: "Admin" },
          ].map((g) => (
            <button key={g.name} onClick={() => onNavigate("social")} className="w-full rounded-3xl bg-card shadow-card p-3.5 text-left active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4.5 h-4.5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-foreground truncate">{g.name}</p>
                    {g.role === "Admin" && <span className="px-1.5 py-0.5 rounded-lg bg-primary/8 text-[8px] font-bold text-primary">Admin</span>}
                  </div>
                  <p className="text-[10px] text-muted-foreground">{g.members} members</p>
                </div>
                {g.unread > 0 ? (
                  <span className="w-5 h-5 rounded-full gradient-hero text-primary-foreground text-[9px] font-bold flex items-center justify-center">{g.unread}</span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </button>
          ))}
          <button className="w-full rounded-3xl border-2 border-dashed border-muted p-4 flex items-center justify-center gap-2 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-xs font-bold">Start a Group</span>
          </button>
        </div>
      )}

      {tab === "discover" && (
        <div className="space-y-3 stagger-children">
          <div className="rounded-3xl bg-gradient-to-br from-primary/8 to-transparent shadow-card p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 rounded-2xl bg-primary/12 flex items-center justify-center"><Trophy className="w-5 h-5 text-primary" /></div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground">Royalty Earners Club</p>
                <p className="text-[10px] text-muted-foreground">Tips & strategies to maximise royalties</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">2.4k members</span>
              <button className="px-4 py-2 rounded-xl gradient-hero text-primary-foreground text-[10px] font-bold shadow-sm">Join</button>
            </div>
          </div>
          {[
            { name: "Gear Reviews & Deals", members: "3.1k", category: "Gear" },
            { name: "Affiliate Best Practices", members: "956", category: "Earning" },
            { name: "Fight Camp Diaries", members: "742", category: "Lifestyle" },
          ].map((c) => (
            <button key={c.name} onClick={() => onNavigate("social")} className="w-full rounded-3xl bg-card shadow-card p-3.5 text-left active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/8 flex items-center justify-center"><Users className="w-4 h-4 text-primary" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-foreground truncate">{c.name}</p>
                  <p className="text-[10px] text-muted-foreground">{c.members} members</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-muted text-[8px] font-bold text-muted-foreground">{c.category}</span>
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
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-lg text-foreground">Missions</p>
          <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {ecosystem.label}</p>
        </div>
        <button onClick={() => onNavigate("leaderboard")} className="h-9 px-3 rounded-2xl bg-card shadow-card flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-accent-amber" />
          <span className="text-[10px] font-bold text-foreground">#12</span>
        </button>
      </div>

      {/* Weekly Challenge */}
      <div className="rounded-3xl p-4 text-primary-foreground shadow-lg gradient-hero">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4" />
          <span className="text-[10px] font-bold opacity-80 uppercase tracking-wider">Weekly Challenge</span>
        </div>
        <p className="font-display font-bold text-base">Complete 5 missions this week</p>
        <p className="text-[11px] opacity-70 mt-1">Earn a $50 bonus reward</p>
        <div className="mt-3 h-2 rounded-full bg-primary-foreground/15">
          <div className="h-full rounded-full bg-primary-foreground/80 w-[60%]" />
        </div>
        <p className="text-[10px] mt-1.5 opacity-60">3 of 5 completed · 🔥 7 day streak</p>
      </div>

      {/* Filters */}
      <div className="flex gap-1 bg-muted/50 rounded-2xl p-1">
        {(["all", "available", "active", "completed"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`flex-1 py-2 rounded-xl text-[10px] font-semibold capitalize transition-all ${filter === f ? "bg-card text-foreground shadow-card" : "text-muted-foreground"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3 stagger-children">
        {filtered.length === 0 && (
          <div className="text-center py-8">
            <p className="text-sm text-muted-foreground">No missions in this category</p>
          </div>
        )}
        {filtered.map((m) => (
          <MissionCardV2 key={m.id} mission={m} currentStatus={getStatus(m)} expanded={expandedMission === m.id}
            onToggle={() => setExpandedMission(expandedMission === m.id ? null : m.id)}
            onJoin={() => handleJoin(m.id)} onSubmit={() => handleSubmit(m.id)} />
        ))}
      </div>
    </div>
  );
};

/* ═══════ WALLET ═══════ */
export const WalletScreen = ({ onNavigate, onBack, ecosystem }: { onNavigate: (s: Screen) => void; onBack: () => void; ecosystem: EcosystemData }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
      <div>
        <p className="font-display font-bold text-lg text-foreground">Wallet</p>
        <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {ecosystem.label}</p>
      </div>
    </div>

    <div className="rounded-3xl p-5 text-primary-foreground shadow-float" style={{ background: 'linear-gradient(145deg, hsl(222 47% 11%), hsl(252 30% 18%))' }}>
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-sm">{ecosystem.emoji}</span>
        <p className="text-[10px] opacity-60 font-medium">{ecosystem.label} Balance</p>
      </div>
      <p className="font-display font-black text-[40px] leading-none text-white mt-1">{ecosystem.walletBalance}</p>
      <div className="flex gap-2.5 mt-4">
        <button className="flex-1 rounded-2xl bg-white/12 backdrop-blur py-3 text-xs font-bold text-center active:scale-95 transition-transform">Withdraw</button>
        <button className="flex-1 rounded-2xl bg-white/12 backdrop-blur py-3 text-xs font-bold text-center active:scale-95 transition-transform">Redeem</button>
      </div>
    </div>

    <div className="rounded-3xl bg-card shadow-card p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-accent-amber" />
          <p className="font-bold text-sm text-foreground">Silver Scout</p>
        </div>
        <span className="text-[10px] text-muted-foreground">Next: Gold</span>
      </div>
      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
        <div className="h-full rounded-full w-[65%]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent-amber)), hsl(var(--primary)))' }} />
      </div>
      <p className="text-[10px] text-muted-foreground mt-1.5">3,250 / 5,000 XP to Gold tier</p>
    </div>

    <div className="grid grid-cols-2 gap-2.5 stagger-grid">
      <div className="rounded-3xl bg-card shadow-card p-4">
        <p className="text-[10px] text-muted-foreground">Points</p>
        <p className="font-display font-black text-2xl text-foreground mt-0.5">3,250</p>
        <p className="text-[10px] text-accent-emerald font-bold mt-1">+120 today</p>
      </div>
      <div className="rounded-3xl bg-card shadow-card p-4">
        <p className="text-[10px] text-muted-foreground">Cashback</p>
        <p className="font-display font-black text-2xl text-foreground mt-0.5">$48.20</p>
        <p className="text-[10px] text-accent-coral font-bold mt-1">Pending</p>
      </div>
    </div>

    <div>
      <p className="font-bold text-sm text-foreground mb-2.5">Available Rewards</p>
      <div className="flex gap-3 overflow-x-auto no-scrollbar stagger-scroll">
        {[
          { title: `Free ${ecosystem.featuredBrand.name} Gift`, points: "2,500 pts", img: ecosystem.emoji },
          { title: "20% Off Next Order", points: "1,000 pts", img: "🏷️" },
          { title: "$25 Store Credit", points: "2,000 pts", img: "💰" },
        ].map((r) => (
          <div key={r.title} className="flex-shrink-0 w-[140px] rounded-3xl bg-card shadow-card p-3.5">
            <span className="text-2xl">{r.img}</span>
            <p className="font-bold text-xs text-foreground mt-2">{r.title}</p>
            <p className="text-[10px] text-primary font-bold mt-1">{r.points}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <p className="font-bold text-sm text-foreground mb-2.5">Recent Transactions</p>
      <div className="space-y-2 stagger-children">
        {[
          { label: "Referral Commission", amount: "+$24.00", time: "2h ago", positive: true },
          { label: "Mission Completed", amount: "+$15.00", time: "5h ago", positive: true },
          { label: "Reward Redeemed", amount: "-1,000 pts", time: "1d ago", positive: false },
        ].map((t) => (
          <div key={t.label + t.time} className="flex items-center justify-between py-3 px-4 rounded-2xl bg-card shadow-xs">
            <div>
              <p className="text-xs font-medium text-foreground">{t.label}</p>
              <p className="text-[10px] text-muted-foreground">{t.time}</p>
            </div>
            <span className={`text-xs font-bold ${t.positive ? "text-accent-emerald" : "text-muted-foreground"}`}>{t.amount}</span>
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
    challenge: { title: "Complete 5 combat missions", reward: "1,000 XP + 🥊 Fighter badge", progress: 3, total: 5 },
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
    challenge: { title: "Log 3 workout shares", reward: "750 XP + 💪 Iron Will badge", progress: 1, total: 3 },
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
    challenge: { title: "Share 2 trail photos", reward: "600 XP + 🏔️ Summit badge", progress: 1, total: 2 },
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
    challenge: { title: "Post 3 skincare routines", reward: "900 XP + ✨ Glow badge", progress: 2, total: 3 },
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
    challenge: { title: "Stream 2 sessions with gear", reward: "1,200 XP + 🎮 Streamer badge", progress: 0, total: 2 },
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
    challenge: { title: "Create 1 recipe video", reward: "500 XP + 🍜 Foodie badge", progress: 0, total: 1 },
    totalMembers: 1340,
  },
};

export const LeaderboardScreen = ({ onBack, ecosystem, onNavigate }: { onBack: () => void; ecosystem: EcosystemData; onNavigate: (s: Screen) => void }) => {
  const [period, setPeriod] = useState<"week" | "month" | "all">("week");
  const [boardType, setBoardType] = useState<"xp" | "earnings" | "referrals" | "streaks">("xp");
  const board = communityLeaderboards[ecosystem.id] || communityLeaderboards.combat;
  const you = board.you;
  const xpProgress = Math.round((you.xpCurrent / you.xpNext) * 100);

  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <div className="flex-1">
          <p className="font-display font-bold text-lg text-foreground">{ecosystem.leaderboardTitle}</p>
          <p className="text-[10px] text-muted-foreground">{board.totalMembers.toLocaleString()} competing</p>
        </div>
      </div>

      {/* Your Summary */}
      <div className="rounded-3xl bg-card shadow-card p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <ActivityRing progress={xpProgress} size={50} stroke={4} color="hsl(var(--primary))" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-black text-foreground">{you.level}</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground">{you.tier}</p>
            <p className="text-[10px] text-muted-foreground">{you.xpCurrent.toLocaleString()} / {you.xpNext.toLocaleString()} XP</p>
          </div>
          <div className="text-right">
            <p className="font-display font-black text-xl text-primary">#{you.rank}</p>
            <p className="text-[9px] text-accent-emerald font-bold">↑{you.delta}</p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full gradient-hero" style={{ width: `${xpProgress}%` }} />
        </div>
      </div>

      {/* Board type tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
        {([
          { id: "xp" as const, label: "XP", icon: <Zap className="w-3 h-3" /> },
          { id: "earnings" as const, label: "Earnings", icon: <Wallet className="w-3 h-3" /> },
          { id: "referrals" as const, label: "Referrals", icon: <Users className="w-3 h-3" /> },
          { id: "streaks" as const, label: "Streaks", icon: <Flame className="w-3 h-3" /> },
        ]).map((t) => (
          <button key={t.id} onClick={() => setBoardType(t.id)}
            className={`flex items-center gap-1 px-3 py-2 rounded-2xl text-[10px] font-bold flex-shrink-0 transition-all ${
              boardType === t.id ? "gradient-hero text-primary-foreground shadow-sm" : "bg-card shadow-xs text-muted-foreground"
            }`}>{t.icon} {t.label}</button>
        ))}
      </div>

      {/* Period */}
      <div className="flex gap-1 bg-muted/50 rounded-2xl p-1">
        {(["week", "month", "all"] as const).map((p) => (
          <button key={p} onClick={() => setPeriod(p)} className={`flex-1 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${period === p ? "bg-card text-foreground shadow-card" : "text-muted-foreground"}`}>
            {p === "all" ? "All Time" : p}
          </button>
        ))}
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-3 pt-4 pb-2">
        {[board.podium[1], board.podium[0], board.podium[2]].map((p, idx) => {
          const rank = idx === 0 ? 2 : idx === 1 ? 1 : 3;
          const val = boardType === "earnings" ? p.earnings : boardType === "referrals" ? p.referrals : boardType === "streaks" ? p.streak : p.xp;
          return <PodiumSpot key={p.name} name={p.name} points={val} rank={rank} height={rank === 1 ? "h-28" : rank === 2 ? "h-20" : "h-16"} crown={rank === 1} />;
        })}
      </div>

      {/* Rankings */}
      <div className="space-y-2 stagger-children">
        {board.ranks.map((u) => {
          const val = boardType === "earnings" ? u.earnings : boardType === "referrals" ? u.referrals : boardType === "streaks" ? u.streak : u.xp;
          return (
            <div key={u.rank} className="flex items-center gap-3 p-3 rounded-2xl bg-card shadow-xs">
              <span className="text-sm font-bold text-muted-foreground w-6 text-center">#{u.rank}</span>
              <div className="w-8 h-8 rounded-full bg-muted" />
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground">{u.name}</p>
                <p className="text-[10px] text-muted-foreground">{val}</p>
              </div>
              <span className={`text-[10px] font-bold ${parseInt(u.delta) > 0 ? "text-accent-emerald" : parseInt(u.delta) < 0 ? "text-destructive" : "text-muted-foreground"}`}>
                {parseInt(u.delta) > 0 ? `↑${u.delta}` : parseInt(u.delta) < 0 ? `↓${Math.abs(parseInt(u.delta))}` : "—"}
              </span>
            </div>
          );
        })}

        {/* Your position */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-primary/5 border border-primary/15">
          <span className="text-sm font-bold text-primary w-6 text-center">#{you.rank}</span>
          <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary-foreground">AR</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">You</p>
            <p className="text-[10px] text-muted-foreground">{boardType === "earnings" ? you.earnings : you.xp}</p>
          </div>
          <span className="text-[10px] font-bold text-accent-emerald">↑{you.delta}</span>
        </div>
      </div>
    </div>
  );
};

/* ═══════ SOCIAL WALL ═══════ */
export const SocialWallScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeChannel, setActiveChannel] = useState("general");
  const [lbExpanded, setLbExpanded] = useState(false);
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
          <p className="font-display font-bold text-lg text-foreground">Community</p>
        </div>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><Search className="w-4 h-4 text-muted-foreground" /></button>
          <button className="w-9 h-9 rounded-full gradient-hero flex items-center justify-center shadow-sm"><Plus className="w-4 h-4 text-primary-foreground" /></button>
        </div>
      </div>

      {/* Group Leaderboard */}
      <div className="rounded-3xl bg-card shadow-card p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-accent-amber" />
            <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Leaderboard</p>
          </div>
          <button onClick={() => setLbExpanded(!lbExpanded)} className="text-[9px] font-bold text-primary flex items-center gap-0.5">
            {lbExpanded ? "Collapse" : "View All"}
            {lbExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
        <div className="flex items-center gap-2">
          {[
            { rank: 1, name: "Sarah M.", xp: "12,580" },
            { rank: 2, name: "Mike T.", xp: "8,240" },
            { rank: 3, name: "Jake S.", xp: "7,120" },
          ].map((p) => (
            <div key={p.rank} className="flex-1 flex items-center gap-1.5 p-2 rounded-2xl bg-muted/40">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black flex-shrink-0 ${p.rank === 1 ? "gradient-hero text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{p.rank}</span>
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-foreground truncate">{p.name}</p>
                <p className="text-[8px] text-muted-foreground">{p.xp} XP</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-primary/5 border border-primary/10">
          <span className="text-[10px] font-black text-primary">#7</span>
          <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
            <span className="text-[7px] font-bold text-primary-foreground">AR</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-foreground">You</p>
            <p className="text-[8px] text-muted-foreground">4,580 XP</p>
          </div>
          <div className="flex items-center gap-0.5 text-[8px] font-bold text-accent-emerald">
            <TrendingUp className="w-2.5 h-2.5" /> +3
          </div>
        </div>
        {lbExpanded && (
          <div className="space-y-1.5 pt-1">
            {[
              { rank: 4, name: "Chris P.", xp: "6,890" },
              { rank: 5, name: "Dana W.", xp: "5,720" },
              { rank: 6, name: "Leo R.", xp: "5,100" },
            ].map((m) => (
              <div key={m.rank} className="flex items-center gap-2.5 p-2 rounded-xl bg-muted/30">
                <span className="text-[9px] font-black text-muted-foreground w-4 text-center">{m.rank}</span>
                <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0" />
                <p className="text-[9px] font-bold text-foreground truncate flex-1">{m.name}</p>
                <p className="text-[9px] font-bold text-muted-foreground">{m.xp} XP</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Channels */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: "general", label: "General", icon: <MessageCircle className="w-3 h-3" /> },
          { id: "gear", label: "Gear Talk", icon: <ShoppingBag className="w-3 h-3" /> },
          { id: "training", label: "Training", icon: <Flame className="w-3 h-3" /> },
        ].map((ch) => (
          <button key={ch.id} onClick={() => setActiveChannel(ch.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-[10px] font-bold flex-shrink-0 transition-all ${
              activeChannel === ch.id ? "gradient-hero text-primary-foreground shadow-sm" : "bg-card shadow-xs text-muted-foreground"
            }`}>{ch.icon} {ch.label}</button>
        ))}
      </div>

      <SocialPost author="Sarah Martinez" time="2h ago" content="Just finished sparring with my new Venum Challenger 3.0 gloves! The padding is next level." likes={42} comments={8} reposts={6} hasImage productTag="Venum Challenger 3.0" onProductClick={() => onNavigate("product")} verified />
      <SocialPost author="Mike Torres" time="5h ago" content="Week 3 of the #TrainHard challenge — loving the Hayabusa T3s." likes={89} comments={15} reposts={12} hasImage badge="Top Contributor" />
    </div>
  );
};

/* ═══════ BRAND PAGE ═══════ */
export const BrandScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<"products" | "missions">("products");
  const [following, setFollowing] = useState(false);
  return (
    <div className="space-y-0">
      <div className="relative h-36 bg-gradient-to-br from-primary/25 to-accent-emerald/10">
        <button onClick={onBack} className="absolute top-3 left-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <button className="absolute top-3 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm"><Share2 className="w-4 h-4 text-foreground" /></button>
      </div>
      <div className="px-5 -mt-10 space-y-4 pb-4">
        <div className="flex items-end gap-3">
          <div className="w-20 h-20 rounded-3xl bg-card border-[3px] border-background shadow-float flex items-center justify-center">
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
        </div>
        <div className="flex gap-2">
          <button onClick={() => setFollowing(!following)} className={`flex-1 rounded-2xl py-3 font-bold text-xs transition-all ${following ? "bg-card shadow-card text-foreground" : "gradient-hero text-primary-foreground shadow-lg"}`}>
            {following ? "Following ✓" : "Follow Brand"}
          </button>
          <button className="flex-1 bg-card shadow-card rounded-2xl py-3 font-bold text-xs text-foreground">Join Community</button>
        </div>
        <div className="flex gap-1 bg-muted/50 rounded-2xl p-1">
          {(["products", "missions"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} className={`flex-1 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${activeTab === t ? "bg-card text-foreground shadow-card" : "text-muted-foreground"}`}>{t}</button>
          ))}
        </div>
        {activeTab === "products" && (
          <div className="space-y-2.5">
            {["Challenger 3.0 Gloves", "Elite Rashguard", "Light 3.0 Shorts"].map((p) => (
              <button key={p} onClick={() => onNavigate("product")} className="w-full flex items-center gap-3 p-3 rounded-2xl bg-card shadow-xs text-left active:scale-[0.98] transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-xs text-foreground">{p}</p>
                  <p className="text-[10px] text-muted-foreground">Venum · $79.99</p>
                  <p className="text-[10px] text-primary font-bold">Earn 10% per sale</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        )}
        {activeTab === "missions" && (
          <div className="space-y-2.5">
            <div className="rounded-3xl bg-card shadow-card p-4">
              <p className="text-xs font-bold text-foreground">Share Venum gear on Instagram</p>
              <p className="text-[10px] text-muted-foreground mt-1">Earn $15 + 150 points</p>
              <button onClick={() => onNavigate("missions")} className="mt-2 px-4 py-2 rounded-xl gradient-hero text-primary-foreground text-[10px] font-bold shadow-sm">Join Mission</button>
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
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-lg text-foreground">Brands</p>
          <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {ecosystem.label}</p>
        </div>
        <div className="flex items-center gap-2 bg-card shadow-card rounded-2xl px-3 py-2">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Search</span>
        </div>
      </div>

      <button onClick={() => onNavigate("brand")} className="w-full rounded-3xl bg-gradient-to-br from-primary/8 to-transparent shadow-card p-4 text-left">
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[9px] font-bold text-primary">⭐ Featured</span>
        <div className="flex items-center gap-3 mt-2.5">
          <div className="w-14 h-14 rounded-2xl bg-card shadow-sm flex items-center justify-center">
            <span className="font-display font-black text-primary text-lg">{ecosystem.featuredBrand.logo}</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-foreground">{ecosystem.featuredBrand.name}</p>
            <p className="text-[10px] text-primary font-bold">{ecosystem.featuredBrand.royalty} royalties</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>

      <div className="space-y-2.5">
        {ecosystem.brands.map((b) => (
          <button key={b.name} onClick={() => onNavigate("brand")} className="w-full flex items-center gap-3 p-3.5 rounded-3xl bg-card shadow-card text-left active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-foreground">{b.logo}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-xs text-foreground">{b.name}</p>
              <p className="text-[10px] text-muted-foreground">{b.category}</p>
              <p className="text-[10px] text-primary font-bold mt-0.5">{b.royalty} royalties</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      <div>
        <p className="font-display font-bold text-sm text-foreground mb-3">Top Products</p>
        <div className="space-y-2.5 stagger-children">
          {ecosystem.trendingOffers.map((p) => (
            <div key={p.name} className="flex items-center gap-3 p-3 rounded-3xl bg-card shadow-card">
              <button onClick={() => onNavigate("product")} className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
              <button onClick={() => onNavigate("product")} className="flex-1 min-w-0 text-left">
                <p className="font-bold text-xs text-foreground truncate">{p.name}</p>
                <p className="text-[10px] text-muted-foreground">{p.brand} · {p.price}</p>
                <p className="text-[10px] text-primary font-bold mt-0.5">Earn {p.royalty}</p>
              </button>
              <button onClick={() => toggleProduct(p.name)}
                className={`flex-shrink-0 px-3 py-2 rounded-xl text-[10px] font-bold transition-all ${
                  addedProducts.includes(p.name) ? "bg-primary/8 text-primary" : "gradient-hero text-primary-foreground shadow-sm"
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
        <div className="h-52 bg-gradient-to-b from-muted to-muted/50" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1, 2, 3].map((i) => <div key={i} className={`h-1.5 rounded-full ${i === 0 ? "bg-primary w-5" : "bg-foreground/20 w-1.5"}`} />)}
        </div>
        <button onClick={onBack} className="absolute top-3 left-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <button onClick={() => setLiked(!liked)} className="absolute top-3 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-sm">
          <Heart className={`w-4 h-4 ${liked ? "text-destructive fill-destructive" : "text-muted-foreground"}`} />
        </button>
      </div>
      <div className="px-5 py-4 space-y-3">
        <div>
          <p className="text-[11px] text-muted-foreground font-medium">Venum</p>
          <p className="font-display font-bold text-lg text-foreground">Challenger 3.0 Boxing Gloves</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "text-accent-amber fill-accent-amber" : "text-muted"}`} />)}</div>
            <span className="text-[11px] text-muted-foreground">4.8 (2,147)</span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display font-black text-2xl text-foreground">$79.99</p>
            <p className="text-xs text-accent-emerald font-bold">You earn $8.00 per sale</p>
          </div>
          <div className="flex gap-1.5">
            {["12oz", "14oz", "16oz"].map((s, i) => (
              <button key={s} onClick={() => setSelectedSize(i)} className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${i === selectedSize ? "gradient-hero text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground"}`}>{s}</button>
            ))}
          </div>
        </div>
        <button onClick={() => setAddedToStorefront(!addedToStorefront)}
          className={`w-full rounded-2xl p-3.5 flex items-center justify-center gap-2 font-bold text-xs transition-all active:scale-[0.98] ${
            addedToStorefront ? "bg-primary/8 text-primary" : "gradient-hero text-primary-foreground shadow-lg"
          }`}>
          {addedToStorefront ? <><Check className="w-4 h-4" /> Added to Storefront</> : <><Plus className="w-4 h-4" /> Add to My Storefront</>}
        </button>
        <button onClick={() => onNavigate("checkout")} className="w-full bg-foreground text-background rounded-2xl py-3.5 font-bold text-sm flex items-center justify-center gap-2 shadow-card">
          <Share2 className="w-4 h-4" /> Buy on Brand Site
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
      <div className="relative h-36 bg-gradient-to-br from-primary/30 via-primary/15 to-transparent overflow-hidden">
        <button onClick={onBack} className="absolute top-3 left-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center z-10 shadow-sm"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <button onClick={() => onNavigate("share-storefront")} className="absolute top-3 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center z-10 shadow-sm"><Share2 className="w-3.5 h-3.5 text-foreground" /></button>
      </div>
      <div className="px-5 -mt-12 space-y-4 pb-4">
        <div className="flex items-end gap-3">
          <div className="w-20 h-20 rounded-3xl bg-card border-[3px] border-background shadow-float flex items-center justify-center relative">
            <span className="font-display font-bold text-primary text-2xl">AR</span>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full gradient-hero flex items-center justify-center border-2 border-background"><Check className="w-3 h-3 text-primary-foreground" /></div>
          </div>
          <div className="pb-1 flex-1">
            <p className="font-display font-bold text-lg text-foreground leading-tight">Alex Rivera</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">@alexrivera · Los Angeles, CA</p>
            <span className="px-1.5 py-0.5 rounded-lg bg-primary/8 text-[8px] font-bold text-primary mt-1 inline-block">Silver Scout</span>
          </div>
        </div>
        <p className="text-[11px] text-foreground/80 leading-relaxed">MMA fighter & gear enthusiast 🥊 Honest reviews of gear I use. Silver Scout Ambassador.</p>
        <div className="flex gap-2">
          <button onClick={() => setFollowing(!following)} className={`flex-1 rounded-2xl py-3 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all ${following ? "bg-card shadow-card text-foreground" : "gradient-hero text-primary-foreground shadow-lg"}`}>
            {following ? <><Check className="w-3.5 h-3.5" /> Following</> : <><UserPlus className="w-3.5 h-3.5" /> Follow</>}
          </button>
          <button onClick={() => onNavigate("share-storefront")} className="px-5 rounded-2xl bg-card shadow-card font-bold text-xs text-foreground flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 stagger-grid">
          {[{ label: "Products", val: "12" }, { label: "Sales", val: "89" }, { label: "Royalties", val: "$542" }].map(s => (
            <div key={s.label} className="rounded-2xl bg-card shadow-card p-3 text-center">
              <p className="font-display font-black text-sm text-foreground">{s.val}</p>
              <p className="text-[8px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2.5">⭐ Alex's Picks</p>
          <div className="space-y-2.5">
            {["Venum Challenger 3.0", "Hayabusa T3 Gloves", "Sanabul Essential"].map((p) => (
              <button key={p} onClick={() => onNavigate("product")} className="w-full flex items-center gap-3 p-3 rounded-2xl bg-card shadow-xs text-left active:scale-[0.98] transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-xs font-bold text-foreground">{p}</p>
                  <p className="text-[10px] text-primary font-bold">$79.99</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
        <div className="text-center pt-2 pb-4">
          <p className="text-[9px] text-muted-foreground">Powered by <span className="font-bold text-primary">LUUP</span></p>
        </div>
      </div>
    </div>
  );
};

/* ═══════ CHECKOUT ═══════ */
export const CheckoutScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <p className="font-display font-bold text-lg text-foreground">Buy via Brand</p>
      </div>
      <div className="flex items-center gap-3 p-3.5 rounded-3xl bg-card shadow-card">
        <div className="w-16 h-16 rounded-2xl bg-muted flex-shrink-0" />
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground">Venum Challenger 3.0</p>
          <p className="text-[10px] text-muted-foreground">14oz · Black/Gold</p>
          <p className="text-sm font-bold text-foreground mt-1">$79.99</p>
        </div>
      </div>
      <div className="rounded-3xl bg-primary/5 border border-primary/10 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5 text-primary" />
          <p className="text-sm font-bold text-foreground">Your Affiliate Link</p>
        </div>
        <div className="rounded-2xl bg-muted/50 px-3 py-2.5 flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground font-mono truncate mr-2">venum.com/gloves?ref=luup_alexr</span>
          <button onClick={() => setCopied(true)} className="text-[10px] font-bold text-primary">{copied ? "Copied!" : "Copy"}</button>
        </div>
      </div>
      <div className="rounded-3xl bg-card shadow-card p-4 space-y-2">
        <p className="text-xs font-bold text-foreground">Commission Breakdown</p>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Product Price</span><span className="text-foreground">$79.99</span></div>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Commission Rate</span><span className="text-primary font-bold">10%</span></div>
        <div className="flex justify-between text-xs font-bold pt-2 border-t border-border"><span className="text-foreground">You Earn</span><span className="text-accent-emerald">$8.00</span></div>
      </div>
      <button onClick={() => onNavigate("order-confirm")} className="w-full gradient-hero text-primary-foreground rounded-2xl py-3.5 font-bold text-sm flex items-center justify-center gap-2 shadow-lg">
        <ShoppingBag className="w-4 h-4" /> Go to venum.com
      </button>
    </div>
  );
};

/* ═══════ ORDER CONFIRM ═══════ */
export const OrderConfirmScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-8 space-y-5 text-center">
    <div className="flex justify-center">
      <div className="w-20 h-20 rounded-full bg-accent-emerald/10 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-accent-emerald/20 flex items-center justify-center">
          <Share2 className="w-8 h-8 text-accent-emerald" />
        </div>
      </div>
    </div>
    <div>
      <p className="font-display font-bold text-xl text-foreground">Redirecting to Brand</p>
      <p className="text-sm text-muted-foreground mt-1">Your affiliate link is active</p>
    </div>
    <div className="rounded-3xl bg-card shadow-card p-4 text-left">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-muted" />
        <div>
          <p className="text-xs font-bold text-foreground">Venum Challenger 3.0</p>
          <p className="text-sm font-bold text-accent-emerald mt-1">$8.00 potential commission</p>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <button onClick={() => onNavigate("wallet")} className="w-full rounded-2xl bg-card shadow-card py-3 text-xs font-bold text-foreground flex items-center justify-center gap-2">
        <Wallet className="w-4 h-4" /> View Earnings
      </button>
      <button onClick={() => onNavigate("home")} className="w-full py-3 text-xs font-medium text-muted-foreground">Back to Home</button>
    </div>
  </div>
);

/* ═══════ NOTIFICATIONS ═══════ */
export const NotificationsScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
        <p className="font-display font-bold text-lg text-foreground">Notifications</p>
      </div>
      <button className="text-xs text-primary font-semibold">Mark all read</button>
    </div>
    <div className="space-y-2">
      <NotifRow icon="🎯" title="New mission available" desc="Share Venum gear on Instagram — earn $15" time="2m ago" unread onClick={() => onNavigate("missions")} />
      <NotifRow icon="💰" title="Commission earned!" desc="$8.00 from Jake Shields' referral" time="1h ago" unread onClick={() => onNavigate("wallet")} />
      <NotifRow icon="🏆" title="You moved up!" desc="You're now #12 on the leaderboard" time="3h ago" unread onClick={() => onNavigate("leaderboard")} />
      <NotifRow icon="📦" title="Order shipped" desc="Order #LUP-28491 is on its way" time="1d ago" />
      <NotifRow icon="🔥" title="Streak reminder" desc="Don't break your 7-day streak!" time="2d ago" onClick={() => onNavigate("missions")} />
    </div>
  </div>
);

/* ═══════ PROFILE ═══════ */
export const ProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [profileTab, setProfileTab] = useState<"earnings" | "activity">("earnings");
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-13 h-13 rounded-full gradient-hero flex items-center justify-center shadow-card p-[2px]">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <span className="font-display font-bold text-sm text-primary">AR</span>
            </div>
          </div>
          <div>
            <p className="font-display font-bold text-base text-foreground">Alex Rivera</p>
            <p className="text-[10px] text-muted-foreground">@alexrivera · Silver Scout</p>
          </div>
        </div>
        <button onClick={() => onNavigate("edit-profile")} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center">
          <Settings className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>

      <button onClick={() => onNavigate("storefront")} className="w-full rounded-3xl p-4 text-left text-primary-foreground active:scale-[0.98] transition-transform shadow-float relative overflow-hidden" style={{ background: 'linear-gradient(145deg, hsl(252 78% 52%), hsl(280 70% 48%))' }}>
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary-foreground/5 -translate-y-6 translate-x-6" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <p className="font-display font-bold text-sm">My Storefront</p>
            </div>
            <ChevronRight className="w-5 h-5 opacity-50" />
          </div>
          <p className="text-[10px] opacity-70 mb-3">Your public page · Share everywhere</p>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[{ val: "12", label: "Products" }, { val: "89", label: "Sales" }, { val: "$542", label: "Royalties" }].map(s => (
              <div key={s.label} className="rounded-xl bg-primary-foreground/10 p-2 text-center backdrop-blur-sm">
                <p className="font-display font-black text-sm">{s.val}</p>
                <p className="text-[8px] opacity-60">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-primary-foreground/10 px-3 py-2 backdrop-blur-sm">
            <Link className="w-3.5 h-3.5 opacity-60" />
            <span className="font-mono text-[10px] opacity-70 flex-1 truncate">luup.co/s/alexrivera</span>
            <span className="text-[9px] font-bold opacity-80">Copy</span>
          </div>
        </div>
      </button>

      <div className="grid grid-cols-4 gap-1.5 stagger-grid">
        {[
          { label: "Earned", value: "$1,247" },
          { label: "Referrals", value: "47" },
          { label: "Missions", value: "23" },
          { label: "Network", value: "182" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-card shadow-card p-2.5 text-center">
            <p className="font-display font-black text-sm text-foreground num-pop">{s.value}</p>
            <p className="text-[8px] text-muted-foreground font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      <button onClick={() => onNavigate("wallet")} className="w-full rounded-3xl bg-card shadow-card p-3.5 flex items-center gap-3 text-left active:scale-[0.98] transition-transform">
        <Crown className="w-5 h-5 text-accent-amber" />
        <div className="flex-1">
          <p className="text-[11px] font-bold text-foreground">Silver Scout → Gold</p>
          <div className="h-1.5 rounded-full bg-muted mt-1.5 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "65%", background: 'linear-gradient(90deg, hsl(var(--accent-amber)), hsl(var(--primary)))' }} />
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </button>

      <div className="flex gap-1 bg-muted/50 rounded-2xl p-1">
        {(["earnings", "activity"] as const).map((t) => (
          <button key={t} onClick={() => setProfileTab(t)} className={`flex-1 py-2 rounded-xl text-[11px] font-semibold capitalize transition-all ${profileTab === t ? "bg-card text-foreground shadow-card" : "text-muted-foreground"}`}>{t}</button>
        ))}
      </div>

      {profileTab === "earnings" && (
        <div className="space-y-2.5">
          {[
            { label: "Storefront Royalties", amount: "$542.00" },
            { label: "Referral Commissions", amount: "$318.40" },
            { label: "Network Earnings", amount: "$247.40" },
            { label: "Mission Rewards", amount: "$140.00" },
          ].map(e => <EarningsRow key={e.label} label={e.label} amount={e.amount} />)}
        </div>
      )}

      {profileTab === "activity" && (
        <div className="space-y-2 stagger-children">
          {[
            { text: "Earned $24 royalty from Venum sale", time: "2h ago", icon: <Wallet className="w-3 h-3 text-primary" /> },
            { text: "Completed mission: Share Venum review", time: "1d ago", icon: <Check className="w-3 h-3 text-accent-emerald" /> },
            { text: "Moved to #12 on leaderboard", time: "1d ago", icon: <TrendingUp className="w-3 h-3 text-accent-amber" /> },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-2.5 py-2.5 border-b border-border/50 last:border-0">
              <div className="w-7 h-7 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">{a.icon}</div>
              <div className="flex-1">
                <p className="text-[11px] text-foreground">{a.text}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-0.5">
        {[
          { label: "My Communities", screen: "explore" as Screen },
          { label: "Saved Items", screen: "saved-items" as Screen },
          { label: "Referral Code", screen: "referral-code" as Screen },
        ].map((item) => (
          <button key={item.label} onClick={() => onNavigate(item.screen)} className="w-full flex items-center justify-between py-3 px-1 border-b border-border/40 last:border-0 text-left">
            <span className="text-[11px] text-foreground font-medium">{item.label}</span>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ═══════ EDIT PROFILE ═══════ */
export const EditProfileScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
      <p className="font-display font-bold text-lg text-foreground">Edit Profile</p>
    </div>
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center shadow-card">
        <span className="text-xl font-black text-primary-foreground">AR</span>
      </div>
      <button className="text-xs text-primary font-bold">Change Photo</button>
    </div>
    <div className="space-y-3">
      {[["Display Name", "Alex Rivera"], ["Username", "@alexrivera"], ["Bio", "MMA fighter & gear enthusiast"]].map(([label, val]) => (
        <div key={label}>
          <p className="text-[10px] font-bold text-muted-foreground mb-1.5 uppercase tracking-wider">{label}</p>
          <div className="h-11 rounded-2xl bg-muted/50 px-4 flex items-center"><span className="text-xs text-foreground">{val}</span></div>
        </div>
      ))}
    </div>
    <button className="w-full h-12 rounded-2xl gradient-hero text-primary-foreground text-sm font-bold active:scale-[0.98] transition-transform shadow-lg">Save Changes</button>
  </div>
);

/* ═══════ SAVED ITEMS ═══════ */
export const SavedItemsScreen = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (s: Screen) => void }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ArrowLeft className="w-4 h-4 text-foreground" /></button>
      <p className="font-display font-bold text-lg text-foreground">Saved Items</p>
    </div>
    {["Venum Challenger 3.0", "Hayabusa T3 Gloves"].map((p) => (
      <button key={p} onClick={() => onNavigate("product")} className="w-full flex items-center gap-3 p-3 rounded-3xl bg-card shadow-card text-left active:scale-[0.98] transition-transform">
        <div className="w-14 h-14 rounded-2xl bg-muted flex-shrink-0" />
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground">{p}</p>
          <p className="text-[10px] text-muted-foreground">$79.99</p>
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
    <div className="px-5 py-4 space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
        <p className="font-display font-bold text-base text-foreground">Referral Code</p>
      </div>
      <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent-amber/5 shadow-card p-5 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-primary/12 flex items-center justify-center mx-auto"><Share2 className="w-5 h-5 text-primary" /></div>
        <p className="text-sm font-bold text-foreground">Share & Earn 10%</p>
        <p className="text-[10px] text-muted-foreground leading-relaxed">Earn 10% on every purchase your referrals make.</p>
        <div className="bg-card shadow-card rounded-2xl px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-mono font-bold text-foreground tracking-wider">ALEX-MMA-2024</span>
          <button onClick={() => setCopied(true)} className="text-[10px] font-bold text-primary">{copied ? "Copied!" : "Copy"}</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[{ label: "Referrals", value: "14" }, { label: "Earnings", value: "$318" }, { label: "Rate", value: "10%" }].map(s => (
          <div key={s.label} className="rounded-2xl bg-card shadow-card p-3 text-center">
            <p className="font-display font-black text-lg text-foreground">{s.value}</p>
            <p className="text-[9px] text-muted-foreground">{s.label}</p>
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
      <div className="flex items-center gap-3 px-5 pt-4 pb-3">
        <button onClick={onBack} className="w-9 h-9 rounded-full bg-card shadow-card flex items-center justify-center"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
        <p className="font-display font-bold text-base text-foreground flex-1">Share Storefront</p>
      </div>
      <div className="px-5 space-y-5 pb-6">
        <div className="rounded-3xl bg-card shadow-card p-6 flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><QrCode className="w-5 h-5 text-primary" /></div>
          <p className="font-display font-bold text-sm text-foreground">Scan to visit my storefront</p>
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
                <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center shadow-sm">
                  <span className="font-display font-black text-[10px] text-primary-foreground">L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-card shadow-card p-4 space-y-3">
          <p className="font-display font-bold text-xs text-foreground">Your Link</p>
          <div className="flex items-center gap-2 bg-muted/50 rounded-2xl px-3 py-2.5">
            <Link className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-[12px] font-semibold text-foreground flex-1 truncate">luup.app/alexrivera</span>
            <button onClick={() => setCopied(true)} className="px-3 py-1.5 rounded-xl gradient-hero text-primary-foreground text-[10px] font-bold shadow-sm">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="rounded-3xl bg-card shadow-card p-4 space-y-3">
          <p className="font-display font-bold text-xs text-foreground">Share via</p>
          <div className="grid grid-cols-4 gap-2">
            {[{ label: "Instagram", emoji: "📸" }, { label: "TikTok", emoji: "🎵" }, { label: "WhatsApp", emoji: "💬" }, { label: "X", emoji: "𝕏" }].map((s) => (
              <button key={s.label} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-muted/40 active:scale-95 transition-transform">
                <span className="text-lg">{s.emoji}</span>
                <span className="text-[8px] font-bold text-muted-foreground">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════ HELPERS ═══════ */

const submissionTypeIcon = (type: MissionSubmissionType) => {
  switch (type) {
    case "link": return <Link className="w-3.5 h-3.5" />;
    case "screenshot": return <Camera className="w-3.5 h-3.5" />;
    case "upload": return <Upload className="w-3.5 h-3.5" />;
    case "referral": return <UserPlus className="w-3.5 h-3.5" />;
    case "review": return <PenLine className="w-3.5 h-3.5" />;
    case "checkin": return <MapPinIcon className="w-3.5 h-3.5" />;
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
    case "open": return { label: "Join Mission", color: "gradient-hero text-primary-foreground", canAct: true };
    case "joined": return { label: "Submit", color: "bg-accent-coral text-white", canAct: true };
    case "submitted": return { label: "Submitted", color: "bg-stage-onboarding/12 text-stage-onboarding", canAct: false };
    case "in-review": return { label: "In Review", color: "bg-accent-amber/12 text-accent-amber", canAct: false };
    case "approved": return { label: "Approved ✓", color: "bg-accent-emerald/12 text-accent-emerald", canAct: false };
    case "rejected": return { label: "Rejected", color: "bg-destructive/12 text-destructive", canAct: false };
  }
};

const MissionCardV2 = ({ mission, currentStatus, expanded, onToggle, onJoin, onSubmit }: {
  mission: MissionData; currentStatus: MissionStatus; expanded: boolean;
  onToggle: () => void; onJoin: () => void; onSubmit: () => void;
}) => {
  const sc = statusConfig(currentStatus);
  const slotsPercent = Math.round((mission.slots.taken / mission.slots.total) * 100);
  const gradients = [
    "from-primary/15 via-primary/8 to-muted/30",
    "from-accent-emerald/15 via-accent-emerald/8 to-muted/30",
    "from-accent-coral/15 via-accent-coral/8 to-muted/30",
    "from-accent-amber/15 via-accent-amber/8 to-muted/30",
    "from-stage-discovery/15 via-stage-discovery/8 to-muted/30",
  ];
  const gradientIdx = mission.title.length % gradients.length;

  return (
    <div className={`rounded-3xl bg-card shadow-card overflow-hidden transition-all ${mission.locked ? "opacity-40" : ""}`}>
      <button onClick={onToggle} className="w-full text-left">
        <div className={`w-full h-20 bg-gradient-to-br ${gradients[gradientIdx]} relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-card/50 backdrop-blur-sm text-muted-foreground">
              {mission.locked ? <Lock className="w-5 h-5" /> : submissionTypeIcon(mission.submissionType)}
            </div>
          </div>
          <div className="absolute bottom-2 left-3">
            <span className="px-2 py-0.5 rounded-lg bg-card/70 backdrop-blur-sm text-[9px] font-bold text-foreground">{mission.brand}</span>
          </div>
          <div className="absolute top-2 right-3 flex gap-1">
            {mission.reward && <span className="px-2 py-0.5 rounded-lg bg-foreground/80 text-background text-[9px] font-black">{mission.reward}</span>}
            {mission.pointsReward && <span className="px-2 py-0.5 rounded-lg bg-primary/90 text-primary-foreground text-[9px] font-black">{mission.pointsReward}pts</span>}
          </div>
          {currentStatus !== "open" && !mission.locked && (
            <div className="absolute top-2 left-3">
              <span className={`px-1.5 py-0.5 rounded-lg text-[8px] font-bold ${sc.color}`}>{sc.label}</span>
            </div>
          )}
        </div>
        <div className="p-3.5">
          <div className="flex items-start gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                  mission.difficulty === "Easy" ? "bg-accent-emerald/10 text-accent-emerald" :
                  mission.difficulty === "Medium" ? "bg-accent-amber/10 text-accent-amber" :
                  "bg-accent-coral/10 text-accent-coral"
                }`}>{mission.difficulty}</span>
                <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-muted/60 text-muted-foreground">{mission.type}</span>
                {mission.deadline && <span className="text-[9px] text-accent-coral font-medium flex items-center gap-0.5"><Clock className="w-2.5 h-2.5" />{mission.deadline}</span>}
              </div>
              <p className="text-[13px] font-bold text-foreground leading-tight">{mission.title}</p>
            </div>
            {expanded ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground mt-1" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground mt-1" />}
          </div>
          {!mission.locked && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${slotsPercent > 80 ? "bg-destructive" : "bg-primary/30"}`} style={{ width: `${slotsPercent}%` }} />
              </div>
              <span className={`text-[9px] font-semibold ${slotsPercent > 80 ? "text-destructive" : "text-muted-foreground"}`}>{mission.slots.taken}/{mission.slots.total}</span>
            </div>
          )}
        </div>
      </button>
      {expanded && !mission.locked && (
        <div className="px-4 pb-4 space-y-3 border-t border-border/30 pt-3 expand-enter">
          <p className="text-[11px] text-muted-foreground leading-relaxed">{mission.description}</p>
          <div>
            <p className="text-[10px] font-bold text-foreground mb-1.5">Requirements</p>
            <div className="space-y-1">
              {mission.requirements.map((r, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <CircleDot className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-[10px] text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {currentStatus === "open" && (
              <button onClick={(e) => { e.stopPropagation(); onJoin(); }} className="flex-1 py-3 rounded-2xl gradient-hero text-primary-foreground text-xs font-bold text-center shadow-lg active:scale-[0.97]">
                Join Mission
              </button>
            )}
            {currentStatus === "joined" && (
              <button onClick={(e) => { e.stopPropagation(); onSubmit(); }} className="flex-1 py-3 rounded-2xl bg-accent-coral text-white text-xs font-bold text-center active:scale-[0.97]">
                {submissionTypeLabel(mission.submissionType)}
              </button>
            )}
            {currentStatus === "submitted" && <div className="flex-1 py-3 rounded-2xl bg-stage-onboarding/10 text-stage-onboarding text-xs font-bold text-center">Submitted · Awaiting Review</div>}
            {currentStatus === "in-review" && <div className="flex-1 py-3 rounded-2xl bg-accent-amber/10 text-accent-amber text-xs font-bold text-center flex items-center justify-center gap-1.5"><Eye className="w-3.5 h-3.5" /> Under Review</div>}
            {currentStatus === "approved" && <div className="flex-1 py-3 rounded-2xl bg-accent-emerald/10 text-accent-emerald text-xs font-bold text-center flex items-center justify-center gap-1.5"><Check className="w-3.5 h-3.5" /> Approved</div>}
            {currentStatus === "rejected" && <div className="flex-1 py-3 rounded-2xl bg-destructive/10 text-destructive text-xs font-bold text-center">Rejected · Resubmit</div>}
          </div>
        </div>
      )}
    </div>
  );
};

const EarningsRow = ({ label, amount }: { label: string; amount: string }) => (
  <div className="flex items-center justify-between py-3 px-4 rounded-2xl bg-card shadow-xs">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-xs font-bold text-foreground">{amount}</span>
  </div>
);

const SocialPost = ({ author, time, content, likes, comments, reposts, hasImage, productTag, onProductClick, isBrand, verified, badge }: {
  author: string; time: string; content: string; likes: number; comments: number; reposts?: number; hasImage?: boolean; productTag?: string; onProductClick?: () => void; isBrand?: boolean; verified?: boolean; badge?: string;
}) => (
  <div className="rounded-3xl bg-card shadow-card p-4 space-y-2.5">
    <div className="flex items-center gap-2.5">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isBrand ? "bg-primary/8" : "bg-muted"}`}>
        {isBrand ? <Zap className="w-3.5 h-3.5 text-primary" /> : <span className="text-[10px] font-bold text-foreground">{author.charAt(0)}</span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <p className="text-xs font-bold text-foreground truncate">{author}</p>
          {(isBrand || verified) && <Check className="w-3 h-3 text-primary flex-shrink-0" />}
        </div>
        <div className="flex items-center gap-1.5">
          <p className="text-[10px] text-muted-foreground">{time}</p>
          {badge && <span className="px-1.5 py-0 rounded-full bg-accent-amber/10 text-accent-amber text-[8px] font-bold">{badge}</span>}
        </div>
      </div>
    </div>
    <p className="text-[11px] text-foreground/85 leading-relaxed">{content}</p>
    {hasImage && (
      <div className="h-36 rounded-2xl bg-muted relative overflow-hidden">
        {productTag && (
          <button onClick={onProductClick} className="absolute bottom-2 left-2 px-2.5 py-1.5 rounded-xl bg-card/90 backdrop-blur text-[10px] font-bold text-foreground shadow-sm flex items-center gap-1">
            <ShoppingBag className="w-3 h-3" /> {productTag}
          </button>
        )}
      </div>
    )}
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors"><Heart className="w-3.5 h-3.5" /><span className="text-[10px] font-medium">{likes}</span></button>
      <button className="flex items-center gap-1 text-muted-foreground"><MessageCircle className="w-3.5 h-3.5" /><span className="text-[10px] font-medium">{comments}</span></button>
      {reposts !== undefined && <button className="flex items-center gap-1 text-muted-foreground"><Repeat2 className="w-3.5 h-3.5" /><span className="text-[10px] font-medium">{reposts}</span></button>}
      <div className="flex items-center gap-2 ml-auto">
        <button className="text-muted-foreground"><Bookmark className="w-3.5 h-3.5" /></button>
        <button className="text-muted-foreground"><Share2 className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  </div>
);

const NotifRow = ({ icon, title, desc, time, unread, onClick }: {
  icon: string; title: string; desc: string; time: string; unread?: boolean; onClick?: () => void;
}) => (
  <button onClick={onClick} className={`w-full flex items-start gap-3 p-3.5 rounded-3xl text-left transition-all ${unread ? "bg-primary/5 shadow-card" : "bg-card shadow-xs"}`}>
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
      {crown && <Crown className="w-5 h-5 text-accent-amber absolute -top-4 left-1/2 -translate-x-1/2" />}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${rank === 1 ? "bg-accent-amber/15 border-2 border-accent-amber shadow-sm" : "bg-muted border-2 border-border"}`}>
        <span className="text-xs font-bold text-foreground">{name.charAt(0)}{name.split(" ")[1]?.charAt(0)}</span>
      </div>
    </div>
    <div className={`${height} w-16 rounded-t-2xl flex flex-col items-center justify-end pb-2 ${
      rank === 1 ? "bg-accent-amber/15 border border-accent-amber/20" :
      rank === 2 ? "bg-muted" : "bg-muted/60"
    }`}>
      <span className="font-display font-black text-lg text-foreground">#{rank}</span>
    </div>
    <p className="text-[10px] font-bold text-foreground">{name}</p>
    <p className="text-[9px] text-muted-foreground">{points}</p>
  </div>
);

const AgentPill = ({ context }: { context?: string }) => (
  <div className="rounded-3xl bg-gradient-to-r from-primary/8 to-primary/4 shadow-card p-3.5 flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-primary/12 flex items-center justify-center animate-pulse"><Bot className="w-4 h-4 text-primary" /></div>
    <div className="flex-1">
      <p className="text-xs font-bold text-foreground">Agent AI</p>
      <p className="text-[10px] text-muted-foreground">{context === "brand" ? "Ask me about this brand" : "How can I help?"}</p>
    </div>
    <ChevronRight className="w-4 h-4 text-primary" />
  </div>
);
