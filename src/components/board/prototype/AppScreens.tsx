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
  | "onboarding-1" | "onboarding-2" | "onboarding-3" | "onboarding-4"
  | "login" | "start" | "ecosystem-setup" | "home" | "explore" | "missions" | "store" | "profile"
  | "product" | "storefront" | "wallet" | "leaderboard"
  | "social" | "brand" | "checkout" | "notifications"
  | "order-confirm" | "edit-profile" | "saved-items" | "referral-code" | "share-storefront";

import onboarding1Img from "@/assets/onboarding-1.jpg";
import onboarding2Img from "@/assets/onboarding-2.jpg";
import onboarding3Img from "@/assets/onboarding-3.jpg";
import onboarding4Img from "@/assets/onboarding-4.jpg";

/* ═══════ ONBOARDING SCREENS ═══════ */
export const OnboardingScreen1 = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="flex flex-col items-center justify-between min-h-[620px] px-6 py-8">
    <div className="flex-1 flex items-center justify-center">
      <img src={onboarding1Img} alt="LUUP Identity" className="w-56 h-56 object-contain" />
    </div>
    <div className="space-y-4 text-center pb-4 w-full">
      <div className="flex justify-center gap-1.5 mb-2">
        {[0,1,2,3].map(i => <div key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/20"}`} />)}
      </div>
      <h2 className="font-display font-black text-xl text-foreground leading-tight">LUUP is where people earn<br/>from participation</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">Discover brands, share what you love, and turn activity into income</p>
      <button onClick={() => onNavigate("onboarding-2")} className="w-full h-12 rounded-2xl bg-primary text-primary-foreground text-sm font-bold active:scale-[0.98] transition-transform">Continue</button>
    </div>
  </div>
);

export const OnboardingScreen2 = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="flex flex-col items-center justify-between min-h-[620px] px-6 py-8">
    <div className="flex-1 flex items-center justify-center">
      <img src={onboarding2Img} alt="How You Earn" className="w-56 h-56 object-contain" />
    </div>
    <div className="space-y-4 text-center pb-4 w-full">
      <div className="flex justify-center gap-1.5 mb-2">
        {[0,1,2,3].map(i => <div key={i} className={`h-1.5 rounded-full transition-all ${i === 1 ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/20"}`} />)}
      </div>
      <h2 className="font-display font-black text-xl text-foreground leading-tight">Earn by doing,<br/>not just buying</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">Complete missions, share products, and earn from every sale you influence</p>
      <p className="text-xs text-muted-foreground/70 max-w-[260px] mx-auto">Your activity turns into rewards, commissions, and ongoing income</p>
      <button onClick={() => onNavigate("onboarding-3")} className="w-full h-12 rounded-2xl bg-primary text-primary-foreground text-sm font-bold active:scale-[0.98] transition-transform">Continue</button>
    </div>
  </div>
);

export const OnboardingScreen3 = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="flex flex-col items-center justify-between min-h-[620px] px-6 py-8">
    <div className="flex-1 flex items-center justify-center">
      <img src={onboarding3Img} alt="Your Network" className="w-56 h-56 object-contain" />
    </div>
    <div className="space-y-4 text-center pb-4 w-full">
      <div className="flex justify-center gap-1.5 mb-2">
        {[0,1,2,3].map(i => <div key={i} className={`h-1.5 rounded-full transition-all ${i === 2 ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/20"}`} />)}
      </div>
      <h2 className="font-display font-black text-xl text-foreground leading-tight">Your network is<br/>your advantage</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">Invite others, build your community, and grow your earnings over time</p>
      <p className="text-xs text-muted-foreground/70 max-w-[260px] mx-auto">The more your network grows, the more you earn</p>
      <button onClick={() => onNavigate("onboarding-4")} className="w-full h-12 rounded-2xl bg-primary text-primary-foreground text-sm font-bold active:scale-[0.98] transition-transform">Continue</button>
    </div>
  </div>
);

export const OnboardingScreen4 = ({ onNavigate, onSelectEcosystem }: { onNavigate: (s: Screen) => void; onSelectEcosystem: (id: string) => void }) => (
  <div className="flex flex-col items-center justify-between min-h-[620px] px-6 py-8">
    <div className="flex-1 flex items-center justify-center">
      <img src={onboarding4Img} alt="LUUP vs Ecosystems" className="w-48 h-48 object-contain" />
    </div>
    <div className="space-y-4 text-center pb-4 w-full">
      <div className="flex justify-center gap-1.5 mb-2">
        {[0,1,2,3].map(i => <div key={i} className={`h-1.5 rounded-full transition-all ${i === 3 ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/20"}`} />)}
      </div>
      <h2 className="font-display font-black text-xl text-foreground leading-tight">One platform.<br/>Multiple worlds</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">LUUP gives you access to everything. Ecosystems are focused spaces where you can go deeper into specific interests</p>
      <p className="text-xs text-muted-foreground/70 max-w-[260px] mx-auto">You can stay in LUUP or explore ecosystems anytime</p>

      {/* Two options */}
      <div className="space-y-2.5 pt-1">
        <button onClick={() => onNavigate("login")} className="w-full p-3.5 rounded-2xl bg-primary text-primary-foreground active:scale-[0.98] transition-all text-left">
          <p className="font-display font-bold text-sm">Enter LUUP</p>
          <p className="text-[11px] opacity-80 mt-0.5">Access all brands, missions, and opportunities</p>
        </button>
        <button onClick={() => onNavigate("start")} className="w-full p-3.5 rounded-2xl border border-border bg-card hover:border-primary/40 active:scale-[0.98] transition-all text-left">
          <p className="font-display font-bold text-sm text-foreground">Explore Ecosystems</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">Join focused communities like Combat Market</p>
          <p className="text-[10px] text-muted-foreground/60 mt-0.5">More ecosystems coming soon</p>
        </button>
      </div>
    </div>
  </div>
);

/* ═══════ LOGIN / SIGNUP ═══════ */
export const LoginScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <div className="px-5 py-6 space-y-5 min-h-[620px] flex flex-col justify-center">
      {/* Logo */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-primary mx-auto flex items-center justify-center shadow-lg">
          <span className="text-3xl font-display font-black text-primary-foreground">L</span>
        </div>
        <div>
          <p className="font-display font-black text-2xl text-foreground">Enter LUUP</p>
          <p className="text-xs text-muted-foreground mt-1">Sign in to start earning</p>
        </div>
      </div>

      {/* Social login buttons */}
      <div className="space-y-2.5 stagger-children">
        <button className="w-full flex items-center justify-center gap-2.5 h-11 rounded-xl border border-border bg-card text-xs font-semibold text-foreground active:scale-[0.98] transition-transform">
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center gap-2.5 h-11 rounded-xl border border-border bg-foreground text-xs font-semibold text-background active:scale-[0.98] transition-transform">
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          Continue with Apple
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-[10px] text-muted-foreground">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Email form */}
      <div className="space-y-2.5">
        <div className="h-11 rounded-xl border border-border bg-card px-3 flex items-center">
          <span className="text-xs text-muted-foreground">Email</span>
        </div>
        <div className="h-11 rounded-xl border border-border bg-card px-3 flex items-center">
          <span className="text-xs text-muted-foreground">Password</span>
        </div>
        {mode === "signup" && (
          <div className="h-11 rounded-xl border border-border bg-card px-3 flex items-center">
            <span className="text-xs text-muted-foreground">Confirm Password</span>
          </div>
        )}
        <button
          onClick={() => onNavigate("start")}
          className="w-full h-11 rounded-xl bg-primary text-primary-foreground text-sm font-bold active:scale-[0.98] transition-transform"
        >
          {mode === "signup" ? "Create Account" : "Sign In"}
        </button>
      </div>

      {/* Toggle */}
      <p className="text-center text-xs text-muted-foreground">
        {mode === "login" ? (
          <>Don't have an account? <button onClick={() => setMode("signup")} className="text-primary font-semibold">Sign up</button></>
        ) : (
          <>Already have an account? <button onClick={() => setMode("login")} className="text-primary font-semibold">Sign in</button></>
        )}
      </p>

      <p className="text-[9px] text-muted-foreground/50 text-center">By continuing, you agree to our Terms & Privacy Policy</p>
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
    { emoji: "🍜", label: "Food & Beverage" },
  ];

  return (
    <div className="px-5 py-6 space-y-5 min-h-[620px] flex flex-col">
      {/* Header */}
      <div className="text-center space-y-2 pt-2">
        <div className="w-14 h-14 rounded-2xl bg-primary mx-auto flex items-center justify-center shadow-lg">
          <span className="text-2xl font-display font-black text-primary-foreground">L</span>
        </div>
        <p className="font-display font-black text-xl text-foreground">You're in.</p>
        <p className="text-xs text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
          LUUP is your network for brands, missions, rewards, and real earning opportunities.
        </p>
      </div>

      {/* Primary CTA — Enter LUUP */}
      <button
        onClick={onSkip}
        className="w-full p-4 rounded-2xl bg-primary text-primary-foreground active:scale-[0.98] transition-all text-left group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="relative flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-sm">Enter LUUP</p>
            <p className="text-[11px] opacity-80">Full access to every brand, mission & reward</p>
          </div>
          <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Go deeper</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Ecosystem explanation */}
      <p className="text-[11px] text-muted-foreground leading-relaxed px-1">
        Ecosystems are focused worlds within LUUP — tailored brands, missions, and community for a specific interest.
      </p>

      {/* Live ecosystem — Combat Sports */}
      <div className="space-y-2">
        <button
          onClick={() => onSelectEcosystem("combat")}
          className="w-full flex items-center gap-3 p-3.5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all text-left group"
        >
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-destructive/10">
            🥊
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="font-display font-bold text-sm text-foreground">Combat Sports</p>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[9px] font-bold uppercase tracking-wide">Live</span>
            </div>
            <p className="text-[11px] text-muted-foreground">Hayabusa, Venum, Everlast & more</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {/* Activity proof */}
        <div className="flex items-center gap-2 px-3">
          <div className="flex -space-x-1.5">
            {["🟣", "🔵", "🟢"].map((c, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-muted border border-card flex items-center justify-center text-[8px]">{c}</div>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground">247 members earning this week</p>
        </div>
      </div>

      {/* Coming Soon ecosystems */}
      <div className="space-y-2 flex-1">
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider px-1">More worlds opening soon</p>
        <div className="grid grid-cols-2 gap-2 stagger-grid">
          {comingSoonEcosystems.slice(0, 4).map((eco) => (
            <div
              key={eco.label}
              className="flex items-center gap-2 p-2.5 rounded-xl border border-border/60 bg-muted/30"
            >
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
  ecosystem: EcosystemData;
  onComplete: () => void;
}) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const categoryOptions: Record<string, string[]> = {
    combat: ["MMA", "Boxing", "Kickboxing", "Muay Thai", "BJJ", "Wrestling", "Karate", "Judo"],
    fitness: ["Bodybuilding", "Crossfit", "Powerlifting", "Calisthenics", "Running", "HIIT", "Yoga", "Swimming"],
    beauty: ["Skincare", "Makeup", "Haircare", "Fragrance", "Nails", "Wellness"],
    gaming: ["FPS", "MOBA", "Battle Royale", "RPG", "Sports", "Racing", "Sim", "Indie"],
  };
  const categories = categoryOptions[ecosystem.id] || ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];


  return (
    <div className="px-5 py-6 space-y-4 min-h-[620px] flex flex-col">
      {/* Progress bar */}
      <div className="flex gap-1.5">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map(s => (
          <div key={s} className={`h-1 flex-1 rounded-full transition-all ${s <= step ? "bg-primary" : "bg-muted"}`} />
        ))}
      </div>

      {/* Step 1: Profile basics */}
      {step === 1 && (
        <div className="flex-1 flex flex-col">
          <div className="text-center space-y-2 pt-2 mb-5">
            <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-xl ${ecosystem.color}`}>
              {ecosystem.emoji}
            </div>
            <p className="font-display font-black text-lg text-foreground">Set Up Your Profile</p>
            <p className="text-[11px] text-muted-foreground">Step 1 of {totalSteps} · {ecosystem.label}</p>
          </div>

          <div className="space-y-3 flex-1">
            {/* Avatar */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-black text-primary-foreground">AR</span>
              </div>
              <div className="flex-1">
                <button className="px-3 py-1.5 rounded-lg border border-border text-[10px] font-semibold text-foreground flex items-center gap-1.5">
                  <Camera className="w-3 h-3" /> Change photo
                </button>
              </div>
            </div>

            {/* Username */}
            <div>
              <p className="text-[10px] font-bold text-foreground mb-1 uppercase tracking-wider">Username</p>
              <div className="h-10 rounded-xl border border-border bg-card px-3 flex items-center gap-2">
                <span className="text-xs text-muted-foreground/60">@</span>
                <span className="text-xs text-foreground">alex_rivera</span>
              </div>
              <p className="text-[9px] text-muted-foreground mt-0.5">luup.app/@alex_rivera</p>
            </div>

            {/* Display Name */}
            <div>
              <p className="text-[10px] font-bold text-foreground mb-1 uppercase tracking-wider">Display Name</p>
              <div className="h-10 rounded-xl border border-border bg-card px-3 flex items-center">
                <span className="text-xs text-foreground">Alex Rivera</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-[10px] font-bold text-foreground mb-1 uppercase tracking-wider">Bio</p>
              <div className="h-16 rounded-xl border border-border bg-card px-3 pt-2">
                <span className="text-xs text-muted-foreground">Tell the {ecosystem.label} community about you...</span>
              </div>
            </div>
          </div>

          <button onClick={() => setStep(2)} className="w-full h-11 rounded-xl bg-primary text-primary-foreground text-sm font-bold mt-3 active:scale-[0.98] transition-transform">
            Continue
          </button>
        </div>
      )}

      {/* Step 2: Location, Category & Socials */}
      {step === 2 && (
        <div className="flex-1 flex flex-col">
          <div className="text-center space-y-1.5 pt-2 mb-5">
            <p className="font-display font-black text-lg text-foreground">Details & Socials</p>
            <p className="text-[11px] text-muted-foreground">Step 2 of {totalSteps} · Help others find you</p>
          </div>

          <div className="space-y-3 flex-1">
            {/* Country */}
            <div>
              <p className="text-[10px] font-bold text-foreground mb-1 uppercase tracking-wider">Country</p>
              <div className="h-10 rounded-xl border border-border bg-card px-3 flex items-center justify-between">
                <span className="text-xs text-foreground flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" /> United Kingdom
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </div>

            {/* Category */}
            <div>
              <p className="text-[10px] font-bold text-foreground mb-1.5 uppercase tracking-wider">Category</p>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat, i) => (
                  <button key={cat} className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all active:scale-95 ${
                    i === 0 ? "bg-primary/10 border-primary/30 text-primary" : "bg-card border-border text-foreground"
                  }`}>
                    {cat}
                  </button>
                ))}
              </div>
              <p className="text-[9px] text-muted-foreground mt-1">Select your primary discipline</p>
            </div>

            {/* Social handles */}
            <div>
              <p className="text-[10px] font-bold text-foreground mb-1.5 uppercase tracking-wider">Social Handles</p>
              <div className="space-y-2">
                <div className="h-10 rounded-xl border border-border bg-card px-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground w-16 flex-shrink-0">Instagram</span>
                  <span className="text-xs text-foreground">@alex_fights</span>
                </div>
                <div className="h-10 rounded-xl border border-border bg-card px-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground w-16 flex-shrink-0">TikTok</span>
                  <span className="text-xs text-muted-foreground">@username</span>
                </div>
                <div className="h-10 rounded-xl border border-border bg-card px-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground w-16 flex-shrink-0">YouTube</span>
                  <span className="text-xs text-muted-foreground">@channel</span>
                </div>
                <div className="h-10 rounded-xl border border-border bg-card px-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground w-16 flex-shrink-0">X / Twitter</span>
                  <span className="text-xs text-muted-foreground">@handle</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <button onClick={() => setStep(1)} className="flex-1 h-11 rounded-xl border border-border text-sm font-bold text-foreground active:scale-[0.98] transition-transform">
              Back
            </button>
            <button onClick={() => setStep(3)} className="flex-[2] h-11 rounded-xl bg-primary text-primary-foreground text-sm font-bold active:scale-[0.98] transition-transform">

              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-3xl mb-4 ${ecosystem.color}`}>
            {ecosystem.emoji}
          </div>
          <p className="font-display font-black text-xl text-foreground">You're All Set!</p>
          <p className="text-xs text-muted-foreground mt-2 max-w-[240px] leading-relaxed">
            Your {ecosystem.label} profile is ready. Start exploring brands, completing missions, and earning rewards.
          </p>

          <div className="w-full mt-5 rounded-xl border border-border bg-card p-3 text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-sm font-black text-primary-foreground">AR</span>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Alex Rivera</p>
                <p className="text-[10px] text-muted-foreground">@alex_rivera · 🇬🇧 UK · MMA</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">📸 @alex_fights</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">🎵 @alex_fights</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4 w-full stagger-grid">
            <div className="rounded-xl bg-muted p-3 text-center">
              <Flame className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-[10px] font-bold text-foreground">{ecosystem.missions.length}</p>
              <p className="text-[8px] text-muted-foreground">Missions</p>
            </div>
            <div className="rounded-xl bg-muted p-3 text-center">
              <ShoppingBag className="w-4 h-4 text-stage-conversion mx-auto mb-1" />
              <p className="text-[10px] font-bold text-foreground">{ecosystem.brands.length + 1}</p>
              <p className="text-[8px] text-muted-foreground">Brands</p>
            </div>
            <div className="rounded-xl bg-muted p-3 text-center">
              <Trophy className="w-4 h-4 text-stage-earnings mx-auto mb-1" />
              <p className="text-[10px] font-bold text-foreground">Bronze</p>
              <p className="text-[8px] text-muted-foreground">Tier</p>
            </div>
          </div>

          <button onClick={onComplete} className="w-full h-11 rounded-xl bg-primary text-primary-foreground text-sm font-bold mt-6 active:scale-[0.98] transition-transform">
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
  onNavigate: (s: Screen) => void;
  ecosystem: EcosystemData;
  onSwitchEcosystem: (id: string) => void;
}) => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const totalEarnings = parseFloat(ecosystem.walletBalance.replace(/[$,]/g, ""));
  const missionsComplete = ecosystem.missions.filter(m => m.status === "approved").length;
  const missionsTotal = ecosystem.missions.length;
  const missionProgress = Math.round((missionsComplete / missionsTotal) * 100);

  return (
    <div className="px-4 py-3 space-y-3">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button onClick={() => onNavigate("profile")} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
            <span className="text-sm font-black text-primary-foreground">AR</span>
          </button>
          <div>
            <p className="text-[10px] text-muted-foreground font-medium">Good afternoon</p>
            <p className="font-display font-bold text-sm text-foreground leading-tight">Alex Rivera</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button onClick={() => setShowSwitcher(!showSwitcher)}
            className="h-8 px-2.5 rounded-full bg-card border border-border flex items-center gap-1.5 active:scale-95 transition-transform">
            <span className="text-xs">{ecosystem.emoji}</span>
            <span className="text-[10px] font-bold text-foreground">{ecosystem.label.split(" ")[0]}</span>
            <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform ${showSwitcher ? "rotate-180" : ""}`} />
          </button>
          <button onClick={() => onNavigate("notifications")} className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center relative">
            <Bell className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-destructive text-[7px] font-bold text-destructive-foreground flex items-center justify-center">3</span>
          </button>
        </div>
      </div>

      {/* Ecosystem Switcher */}
      {showSwitcher && (
        <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-xl p-2 space-y-0.5 animate-scale-in">
          {ecosystems.map((eco) => (
            <button key={eco.id} onClick={() => { onSwitchEcosystem(eco.id); setShowSwitcher(false); }}
              className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl text-left transition-all ${eco.id === ecosystem.id ? "bg-primary/10" : "hover:bg-muted"}`}>
              <span className="text-base">{eco.emoji}</span>
              <p className="text-xs font-bold text-foreground flex-1">{eco.label}</p>
              {eco.id === ecosystem.id && <Check className="w-3.5 h-3.5 text-primary" />}
            </button>
          ))}
        </div>
      )}

      {/* ── Hero Earnings Card ── */}
      <div className="w-full rounded-[20px] bg-foreground p-5 text-background relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-background/[0.04]" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-background/[0.03]" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <p className="text-[13px] font-bold text-background/90">This Month</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-stage-participation/25 text-stage-participation text-[9px] font-bold">
              <TrendingUp className="w-2.5 h-2.5" />{ecosystem.walletGrowth}
            </span>
            <p className="font-display font-black text-xl leading-none tracking-tight text-primary">{ecosystem.walletBalance}</p>
          </div>
        </div>

        {/* Bar chart */}
        <div className="relative z-10 flex items-end gap-[5px] h-[56px] mb-4">
          {[28, 32, 24, 36, 40, 38, 48, 52, 50, 56, 54, 46].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[3px] bg-primary/70 transition-all" style={{ height: `${h}%` }}>
              {i === 11 && <div className="w-full h-full rounded-t-[3px] bg-primary" />}
            </div>
          ))}
          {/* Subtle backdrop */}
          <div className="absolute inset-x-0 bottom-0 h-[56px] rounded-xl bg-background/[0.06] -z-10" />
        </div>

        {/* Breakdown row */}
        <div className="relative z-10 flex items-center gap-4 pt-3 border-t border-background/[0.08]">
          <div className="flex-1">
            <p className="text-[8px] uppercase tracking-wider text-background/40 font-semibold">Missions</p>
            <p className="text-sm font-bold text-background/90">{ecosystem.missionEarnings}</p>
          </div>
          <div className="w-px h-6 bg-background/[0.1]" />
          <div className="flex-1">
            <p className="text-[8px] uppercase tracking-wider text-background/40 font-semibold">Referrals</p>
            <p className="text-sm font-bold text-background/90">{ecosystem.referralEarnings}</p>
          </div>
          <div className="w-px h-6 bg-background/[0.1]" />
          <div className="flex-1">
            <p className="text-[8px] uppercase tracking-wider text-background/40 font-semibold">Points</p>
            <p className="text-sm font-bold text-background/90">{ecosystem.pointsBalance}</p>
          </div>
        </div>
        {/* Wallet Button */}
        <button onClick={() => onNavigate("wallet")} className="relative z-10 w-full mt-3 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <Wallet className="w-3.5 h-3.5" />
          Open Wallet
        </button>
      </div>

      {/* ── Streak & Level Bar ── */}
      <button onClick={() => onNavigate("leaderboard")} className="w-full rounded-2xl border border-border bg-card p-3 flex items-center gap-3 active:scale-[0.98] transition-transform">
        <div className="relative">
          <ActivityRing progress={65} size={42} stroke={4} color="hsl(var(--stage-earnings))" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] font-black text-foreground">12</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-bold text-foreground">Silver Scout</p>
            <span className="text-[9px] font-bold text-stage-conversion flex items-center gap-0.5">🔥 7 day streak</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-stage-earnings transition-all" style={{ width: "65%" }} />
            </div>
            <span className="text-[8px] text-muted-foreground font-medium">3,250 XP</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[9px] font-bold text-stage-participation">↑3</span>
          <span className="text-[8px] text-muted-foreground">#12</span>
        </div>
      </button>

      {/* ── Stats Bento Grid ── */}
      <div className="grid grid-cols-3 gap-2 stagger-grid">
        <button onClick={() => onNavigate("missions")}
          className="rounded-2xl bg-card border border-border p-3 text-left active:scale-[0.97] transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="w-7 h-7 rounded-xl bg-primary/10 flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="w-8 h-5">
              <svg viewBox="0 0 32 20" className="w-full h-full">
                <polyline points="0,16 8,12 16,14 24,8 32,4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <p className="font-display font-black text-lg leading-none text-foreground num-pop">{missionsComplete}</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Completed</p>
        </button>
        <button onClick={() => onNavigate("leaderboard")}
          className="rounded-2xl bg-card border border-border p-3 text-left active:scale-[0.97] transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="w-7 h-7 rounded-xl bg-stage-earnings/10 flex items-center justify-center">
              <Trophy className="w-3.5 h-3.5 text-stage-earnings" />
            </div>
            <span className="text-[9px] font-bold text-stage-participation">↑3</span>
          </div>
          <p className="font-display font-black text-lg leading-none text-foreground num-pop">#12</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Rank</p>
        </button>
        <button onClick={() => onNavigate("leaderboard")}
          className="rounded-2xl bg-card border border-border p-3 text-left active:scale-[0.97] transition-transform">
          <div className="flex items-center justify-between mb-2">
            <div className="w-7 h-7 rounded-xl bg-stage-conversion/10 flex items-center justify-center">
              <Award className="w-3.5 h-3.5 text-stage-conversion" />
            </div>
            <span className="text-[9px] font-bold text-stage-earnings">5</span>
          </div>
          <p className="font-display font-black text-lg leading-none text-foreground num-pop">🏅</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Badges</p>
        </button>
      </div>


      {/* ── Active Missions ── */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <p className="font-display font-bold text-[13px] text-foreground">Active Missions</p>
          <button onClick={() => onNavigate("missions")} className="text-[10px] text-primary font-bold">See all</button>
        </div>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar -mx-4 px-4 stagger-scroll">
          {ecosystem.activeMissions.slice(0, 3).map((m, i) => {
            const bgColors = ["bg-primary/8", "bg-stage-participation/8", "bg-stage-conversion/8"];
            const iconColors = ["text-primary/50", "text-stage-participation/50", "text-stage-conversion/50"];
            return (
              <button key={m.title} onClick={() => onNavigate("missions")}
                className="flex-shrink-0 w-[150px] rounded-2xl border border-border bg-card overflow-hidden text-left active:scale-[0.97] transition-transform">
                <div className={`w-full h-[70px] bg-gradient-to-br ${
                  i === 0 ? "from-primary/20 to-primary/5" : i === 1 ? "from-stage-participation/20 to-stage-participation/5" : "from-stage-conversion/20 to-stage-conversion/5"
                } relative flex items-center justify-center`}>
                  <Flame className={`w-5 h-5 ${iconColors[i % iconColors.length]}`} />
                  <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-lg bg-foreground/85 text-background text-[8px] font-black tracking-wide">{m.reward}</span>
                </div>
                <div className="p-2.5">
                  <p className="text-[10px] font-bold text-foreground truncate leading-tight mb-2">{m.title}</p>
                  <div className="flex items-center gap-1.5">
                    <div className="flex-1 h-1.5 rounded-full bg-muted/60">
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

      {/* ── Trending Missions ── */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <p className="font-display font-bold text-[13px] text-foreground">🔥 Trending Missions</p>
          <button onClick={() => onNavigate("missions")} className="text-[10px] text-primary font-bold">Explore</button>
        </div>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar -mx-4 px-4 stagger-scroll">
          {ecosystem.missions.filter(m => m.status === "open").slice(0, 3).map((m, i) => {
            const gradients = ["from-primary/20 to-primary/5", "from-stage-participation/20 to-stage-participation/5", "from-stage-conversion/20 to-stage-conversion/5"];
            const iconColors = ["text-primary/50", "text-stage-participation/50", "text-stage-conversion/50"];
            return (
              <button key={m.id} onClick={() => onNavigate("missions")}
                className="flex-shrink-0 w-[150px] rounded-2xl border border-border bg-card overflow-hidden text-left active:scale-[0.97] transition-transform">
                <div className={`w-full h-[70px] bg-gradient-to-br ${gradients[i % gradients.length]} relative flex items-center justify-center`}>
                  <Flame className={`w-5 h-5 ${iconColors[i % iconColors.length]}`} />
                  <div className="absolute top-1.5 right-1.5 flex flex-col items-end gap-0.5">
                    {m.rewardType !== "points" && (
                      <span className="px-1.5 py-0.5 rounded-md bg-foreground/85 text-background text-[8px] font-black">{m.reward}</span>
                    )}
                    {(m.rewardType === "points" || m.rewardType === "mixed") && m.pointsReward && (
                      <span className="px-1.5 py-0.5 rounded-md bg-primary/15 text-primary text-[8px] font-black">{m.pointsReward}pts</span>
                    )}
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="text-[10px] font-bold text-foreground truncate leading-tight">{m.title}</p>
                  <p className="text-[8px] text-muted-foreground mt-0.5">{m.brand} · {m.slots.total - m.slots.taken} spots</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* ── Trending Offers (horizontal scroll) ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-display font-bold text-[13px] text-foreground">Hot Deals</p>
          <button onClick={() => onNavigate("store")} className="text-[10px] text-primary font-bold">Browse</button>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 stagger-scroll">
          {ecosystem.trendingOffers.map((p) => (
            <button key={p.name} onClick={() => onNavigate("product")}
              className="flex-shrink-0 w-[130px] rounded-2xl border border-border bg-card overflow-hidden text-left active:scale-[0.97] transition-transform group">
              <div className="w-full h-16 bg-gradient-to-br from-muted to-muted/60 relative">
                <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-foreground/80 text-background text-[8px] font-bold">
                  {p.royalty}
                </div>
              </div>
              <div className="p-2.5">
                <p className="font-bold text-[10px] text-foreground truncate">{p.name}</p>
                <p className="text-[9px] text-muted-foreground">{p.brand} · {p.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AgentPill />
    </div>
  );
};

/* ═══════ COMMUNITY (TAB) — Algorithm-first feed ═══════ */
export const ExploreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [tab, setTab] = useState<"foryou" | "following" | "brands" | "groups" | "discover">("foryou");
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-lg text-foreground">Community</p>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Scrollable Tabs */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
        {([
          { id: "foryou" as const, label: "For You" },
          { id: "following" as const, label: "Following" },
          { id: "brands" as const, label: "Brands" },
          { id: "groups" as const, label: "Groups" },
          { id: "discover" as const, label: "Discover" },
        ]).map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${tab === t.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── FOR YOU (Algorithm feed) ── */}
      {tab === "foryou" && (
        <div className="space-y-3 stagger-children">
          {/* Story row */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-0.5">
            {[
              { name: "Your Story", isYou: true },
              { name: "Sarah M.", hasNew: true },
              { name: "Jake S.", hasNew: true, live: true },
              { name: "Venum", hasNew: true, isBrand: true },
              { name: "Mike T.", hasNew: false },
              { name: "LUUP", hasNew: true, isBrand: true },
            ].map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-1 flex-shrink-0 relative">
                <div className={`w-14 h-14 rounded-full p-[2px] ${s.isYou ? "" : s.hasNew ? "bg-gradient-to-tr from-primary to-primary/60" : ""}`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${
                    s.isYou ? "border-2 border-dashed border-muted-foreground/30 bg-muted" :
                    s.hasNew ? "bg-card ring-2 ring-card" : "bg-muted ring-2 ring-border"
                  }`}>
                    {s.isYou ? <Plus className="w-4 h-4 text-muted-foreground/50" /> :
                     s.isBrand ? <Zap className="w-4 h-4 text-primary" /> :
                     <div className="w-full h-full rounded-full bg-muted-foreground/10" />}
                  </div>
                </div>
                {s.live && <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-1 rounded-sm bg-destructive text-[6px] font-bold text-destructive-foreground uppercase z-10">Live</span>}
                <span className="text-[9px] text-muted-foreground font-medium truncate w-14 text-center">{s.name}</span>
              </div>
            ))}
          </div>

          {/* Create Post */}
          <button className="w-full flex items-center gap-3 p-2.5 rounded-2xl border border-border bg-card">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary">A</span>
            </div>
            <span className="text-[10px] text-muted-foreground flex-1 text-left">Share a tip, review, or win...</span>
            <Camera className="w-4 h-4 text-muted-foreground" />
            <Video className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Trending topics */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
            {["#GearReview", "#RoyaltyTips", "#TrainHard", "#FightWeek", "#NewDrop"].map((tag) => (
              <span key={tag} className="flex-shrink-0 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold">{tag}</span>
            ))}
          </div>

          {/* Algorithm-ranked posts */}
          <SocialPost
            author="Sarah Martinez"
            time="2h ago"
            content="Sharing my strategy: I focus on 3 brands max and create dedicated content for each. Royalties went from $40 to $320/mo 🚀 Here's the breakdown..."
            likes={142}
            comments={38}
            reposts={24}
            hasImage
            verified
            badge="Top Contributor"
            productTag="Venum Challenger 3.0"
            onProductClick={() => onNavigate("product")}
          />

          {/* Suggested Group Card (algorithm insert) */}
          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-3 space-y-2">
            <p className="text-[9px] font-bold text-primary uppercase tracking-wider">Suggested for you</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-foreground">Affiliate Best Practices</p>
                <p className="text-[10px] text-muted-foreground">956 members · 120 posts/wk</p>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[9px] font-bold">Join</button>
            </div>
          </div>

          <SocialPost
            author="Jake Shields"
            time="4h ago"
            content="Pro tip: film your product unboxings and post them here. Brands notice active ambassadors and you get featured = more royalties 💰"
            likes={312}
            comments={67}
            reposts={41}
            hasImage
            verified
          />

          {/* Brand update (algorithm insert) */}
          <div className="rounded-2xl border border-border bg-card p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-[11px] font-bold text-foreground">Venum</p>
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-[9px] text-primary font-semibold">Brand Update · Sponsored</p>
              </div>
            </div>
            <p className="text-[11px] text-foreground/85 leading-relaxed">🆕 New product alert! Venum Elite boxing gloves just dropped. Ambassadors earn 14% royalty — our highest rate yet.</p>
            <button onClick={() => onNavigate("product")} className="w-full py-2 rounded-xl bg-primary/10 text-primary text-[10px] font-bold">View Product →</button>
          </div>

          <SocialPost
            author="Coach Ray"
            time="6h ago"
            content="Best way to structure your storefront: put best-sellers at the top, add personal review notes. My conversion rate went from 2.1% to 5.8%."
            likes={67}
            comments={12}
            reposts={8}
          />
        </div>
      )}

      {/* ── FOLLOWING ── */}
      {tab === "following" && (
        <div className="space-y-3 stagger-children">
          <p className="text-[10px] text-muted-foreground">Posts from people & groups you follow</p>
          <SocialPost
            author="Jake Shields"
            time="1h ago"
            content="Added the new Sanabul Essential series to my storefront. Great value for beginners — highly recommended as a starter set."
            likes={312}
            comments={44}
            reposts={28}
            hasImage
            productTag="Sanabul Essential"
            onProductClick={() => onNavigate("product")}
            verified
          />
          <SocialPost
            author="Sarah Martinez"
            time="3h ago"
            content="Morning pad work done ✅ Nothing beats starting the day with 6 rounds on the mitts. Who else is training today?"
            likes={67}
            comments={15}
            reposts={4}
            hasImage
          />
          <SocialPost
            author="My Gear Corner"
            time="5h ago"
            content="New review posted: Hayabusa T3 after 6 months of heavy use. Spoiler — still holding up amazingly."
            likes={34}
            comments={8}
            reposts={6}
            badge="Your Group"
          />
          <SocialPost
            author="Jess Kim"
            time="8h ago"
            content="Just hit Gold tier!! 🥇 The rewards just keep getting better. My commission rate jumped to 15% across all brands."
            likes={156}
            comments={23}
            reposts={12}
            badge="Gold Ambassador"
          />
        </div>
      )}

      {/* ── BRAND UPDATES ── */}
      {tab === "brands" && (
        <div className="space-y-3 stagger-children">
          <p className="text-[10px] text-muted-foreground">Official updates from partner brands</p>
          {[
            { brand: "Venum", time: "2h ago", content: "🆕 New drop: Venum Elite boxing gloves with enhanced wrist support. Ambassadors earn 14% — our highest royalty rate!", tag: "New Product", royalty: "14%" },
            { brand: "Hayabusa", time: "6h ago", content: "Flash sale this weekend! All T3 products 20% off. Your followers get the deal, you earn full commission.", tag: "Sale", royalty: "10%" },
            { brand: "Sanabul", time: "1d ago", content: "We've increased ambassador royalties from 6% to 8% on all Essential series products. Thank you for your support! 🙏", tag: "Royalty Increase", royalty: "8%" },
            { brand: "RDX", time: "2d ago", content: "Mission alert: Share a training video wearing RDX gear and earn $30 bonus. Limited to first 100 ambassadors.", tag: "Mission", royalty: "7%" },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-3.5 pt-3 pb-2 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-foreground">{b.brand}</p>
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-[9px] text-muted-foreground">{b.time}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[8px] font-bold text-primary">{b.tag}</span>
              </div>
              <div className="px-3.5 pb-3">
                <p className="text-[11px] text-foreground/85 leading-relaxed">{b.content}</p>
                <div className="flex items-center justify-between mt-2.5">
                  <span className="text-[9px] text-muted-foreground">Royalty: <span className="font-bold text-primary">{b.royalty}</span></span>
                  <button onClick={() => onNavigate("product")} className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-[9px] font-bold">View →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── GROUPS ── */}
      {tab === "groups" && (
        <div className="space-y-3 stagger-children">
          {/* Your Groups */}
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Your Groups</p>
          {[
            { name: "Royalty Earners Club", members: "2.4k", unread: 12, role: "Member", lastActive: "2m ago" },
            { name: "MMA Training Tips", members: "1.8k", unread: 3, role: "Member", lastActive: "15m ago" },
            { name: "My Gear Corner", members: "47", unread: 0, role: "Admin", lastActive: "1h ago" },
          ].map((g) => (
            <button key={g.name} onClick={() => onNavigate("social")} className="w-full rounded-2xl border border-border bg-card p-3 text-left active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-foreground truncate">{g.name}</p>
                    {g.role === "Admin" && <span className="px-1.5 py-0.5 rounded bg-primary/10 text-[8px] font-bold text-primary">Admin</span>}
                  </div>
                  <p className="text-[10px] text-muted-foreground">{g.members} members · {g.lastActive}</p>
                </div>
                {g.unread > 0 ? (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center flex-shrink-0">{g.unread}</span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            </button>
          ))}

          {/* Create */}
          <button className="w-full rounded-2xl border-2 border-dashed border-border p-3.5 flex items-center justify-center gap-2 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-xs font-bold">Start a Group</span>
          </button>
        </div>
      )}

      {/* ── DISCOVER ── */}
      {tab === "discover" && (
        <div className="space-y-3 stagger-children">
          {/* Featured */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-foreground">Royalty Earners Club</p>
                  <Star className="w-3 h-3 text-primary fill-primary" />
                </div>
                <p className="text-[10px] text-muted-foreground">Tips & strategies to maximise royalties</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-card" />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground">2.4k members</span>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">Join</button>
            </div>
          </div>

          {/* Trending Groups */}
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Trending</p>
          {[
            { name: "Gear Reviews & Deals", members: "3.1k", posts: "580/wk", icon: <ShoppingBag className="w-4 h-4 text-primary" />, category: "Gear" },
            { name: "Affiliate Best Practices", members: "956", posts: "120/wk", icon: <TrendingUp className="w-4 h-4 text-primary" />, category: "Earning" },
            { name: "Fight Camp Diaries", members: "742", posts: "95/wk", icon: <BookOpen className="w-4 h-4 text-primary" />, category: "Lifestyle" },
            { name: "Brand Ambassador Hub", members: "1.2k", posts: "210/wk", icon: <Award className="w-4 h-4 text-primary" />, category: "Earning" },
          ].map((c) => (
            <button key={c.name} onClick={() => onNavigate("social")} className="w-full rounded-2xl border border-border bg-card p-3 text-left active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">{c.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-foreground truncate">{c.name}</p>
                    <span className="px-2 py-0.5 rounded-full bg-muted text-[8px] font-bold text-muted-foreground flex-shrink-0">{c.category}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Users className="w-3 h-3" />{c.members}</span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1"><MessageCircle className="w-3 h-3" />{c.posts}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </div>
            </button>
          ))}

          {/* People to Follow */}
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">People to Follow</p>
          {[
            { name: "Jake Shields", handle: "@jakeshields", desc: "MMA Legend · 2.4k sales", verified: true },
            { name: "Sarah Martinez", handle: "@sarahm", desc: "Top Contributor · Gold Ambassador", verified: true },
            { name: "Coach Ray", handle: "@coachray", desc: "Boxing trainer · 800+ referrals", verified: false },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-xl border border-border bg-card">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-bold text-foreground">{p.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-bold text-foreground truncate">{p.name}</p>
                  {p.verified && <Check className="w-3 h-3 text-primary" />}
                </div>
                <p className="text-[9px] text-muted-foreground">{p.desc}</p>
              </div>
              <button onClick={() => onNavigate("storefront")} className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[9px] font-bold flex-shrink-0">Follow</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
/* ═══════ MISSIONS ═══════ */
export const MissionsScreen = ({ onNavigate, ecosystem }: { onNavigate: (s: Screen) => void; ecosystem: EcosystemData }) => {
  const [filter, setFilter] = useState<"all" | "active" | "available" | "completed">("all");
  const [expandedMission, setExpandedMission] = useState<string | null>(null);
  const [missionStates, setMissionStates] = useState<Record<string, MissionStatus>>(() => {
    const states: Record<string, MissionStatus> = {};
    ecosystem.missions.forEach(m => { states[m.id] = m.status; });
    return states;
  });

  const handleJoin = (id: string) => setMissionStates(s => ({ ...s, [id]: "joined" }));
  const handleSubmit = (id: string) => setMissionStates(s => ({ ...s, [id]: "submitted" }));

  const getStatus = (m: MissionData) => missionStates[m.id] || m.status;

  const filtered = ecosystem.missions.filter(m => {
    const status = getStatus(m);
    if (filter === "active") return ["joined", "submitted", "in-review"].includes(status);
    if (filter === "available") return status === "open" && !m.locked;
    if (filter === "completed") return ["approved", "rejected"].includes(status);
    return true;
  });

  const activeCount = ecosystem.missions.filter(m => ["joined", "submitted", "in-review"].includes(getStatus(m))).length;
  const completedCount = ecosystem.missions.filter(m => getStatus(m) === "approved").length;

  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-lg text-foreground">Missions</p>
          <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {ecosystem.label}</p>
        </div>
        <div className="flex gap-1.5">
          <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold">{activeCount} Active</span>
          <span className="px-2.5 py-1 rounded-full bg-stage-participation/10 text-stage-participation text-[10px] font-bold">{completedCount} Done</span>
        </div>
      </div>

      {/* Mission Pipeline Summary */}
      <div className="grid grid-cols-4 gap-1.5 stagger-grid">
        {[
          { label: "Open", count: ecosystem.missions.filter(m => getStatus(m) === "open" && !m.locked).length, color: "bg-muted text-muted-foreground" },
          { label: "Joined", count: ecosystem.missions.filter(m => getStatus(m) === "joined").length, color: "bg-primary/10 text-primary" },
          { label: "In Review", count: ecosystem.missions.filter(m => ["submitted", "in-review"].includes(getStatus(m))).length, color: "bg-stage-conversion/10 text-stage-conversion" },
          { label: "Approved", count: completedCount, color: "bg-stage-participation/10 text-stage-participation" },
        ].map(p => (
          <div key={p.label} className={`rounded-xl p-2 text-center ${p.color}`}>
            <p className="font-display font-black text-lg leading-none num-pop">{p.count}</p>
            <p className="text-[9px] font-semibold mt-0.5">{p.label}</p>
          </div>
        ))}
      </div>

      {/* Weekly Challenge */}
      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4 text-primary-foreground">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4" />
          <span className="text-[10px] font-bold opacity-90 uppercase tracking-wider">Weekly Challenge</span>
        </div>
        <p className="font-display font-bold text-base">Complete 5 missions this week</p>
        <p className="text-xs opacity-80 mt-1">Earn a $50 bonus reward</p>
        <div className="mt-3 h-2 rounded-full bg-primary-foreground/20">
          <div className="h-full rounded-full bg-primary-foreground w-[60%] transition-all" />
        </div>
        <p className="text-[10px] mt-1 opacity-70">3 of 5 completed · 🔥 7 day streak</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1 bg-muted rounded-xl p-1">
        {(["all", "available", "active", "completed"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold capitalize transition-all ${filter === f ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Mission List */}
      <div className="space-y-2.5 stagger-children">
        {filtered.length === 0 && (
          <div className="text-center py-8">
            <p className="text-sm text-muted-foreground">No missions in this category</p>
          </div>
        )}
        {filtered.map((m) => (
          <MissionCardV2
            key={m.id}
            mission={m}
            currentStatus={getStatus(m)}
            expanded={expandedMission === m.id}
            onToggle={() => setExpandedMission(expandedMission === m.id ? null : m.id)}
            onJoin={() => handleJoin(m.id)}
            onSubmit={() => handleSubmit(m.id)}
          />
        ))}
      </div>
    </div>
  );
};

/* ═══════ WALLET & REWARDS ═══════ */
export const WalletScreen = ({ onNavigate, onBack, ecosystem }: { onNavigate: (s: Screen) => void; onBack: () => void; ecosystem: EcosystemData }) => (
  <div className="px-5 py-4 space-y-4">
    <div className="flex items-center gap-3">
      <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
        <ArrowLeft className="w-4 h-4 text-foreground" />
      </button>
      <div>
        <p className="font-display font-bold text-lg text-foreground">Wallet</p>
        <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {ecosystem.label}</p>
      </div>
    </div>

    {/* Balance Card */}
    <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 p-5 text-primary-foreground">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-sm">{ecosystem.emoji}</span>
        <p className="text-[10px] opacity-70 font-medium">{ecosystem.label} Balance</p>
      </div>
      <p className="font-display font-black text-4xl mt-1">{ecosystem.walletBalance}</p>
      <div className="flex gap-3 mt-4">
        <button className="flex-1 rounded-xl bg-primary-foreground/20 backdrop-blur py-2.5 text-xs font-bold text-center active:scale-95 transition-transform active:bg-primary-foreground/30">
          Withdraw
        </button>
        <button className="flex-1 rounded-xl bg-primary-foreground/20 backdrop-blur py-2.5 text-xs font-bold text-center active:scale-95 transition-transform active:bg-primary-foreground/30">
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
    <div className="grid grid-cols-2 gap-2 stagger-grid">
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
      <div className="flex gap-3 overflow-x-auto no-scrollbar stagger-scroll">
        {[
          { title: `Free ${ecosystem.featuredBrand.name} Gift`, points: "2,500 pts", img: ecosystem.emoji },
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
      <div className="space-y-1 stagger-children">
        {[
          { label: "Referral Commission", amount: "+$24.00", time: "2h ago", positive: true },
          { label: `Mission: ${ecosystem.activeMissions[0]?.title || "Completed"}`, amount: "+$15.00", time: "5h ago", positive: true },
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

/* ═══════ LEADERBOARD & GAMIFICATION ═══════ */

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
      { rank: 7, name: "Ana P.", xp: "6,980", earnings: "$2.1k", referrals: "39", streak: "19d", delta: "0" },
      { rank: 8, name: "Tom B.", xp: "6,210", earnings: "$1.8k", referrals: "31", streak: "15d", delta: "+1" },
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
      { rank: 6, name: "Jordan K.", xp: "9,400", earnings: "$2.9k", referrals: "55", streak: "22d", delta: "-2" },
      { rank: 7, name: "Priya S.", xp: "8,200", earnings: "$2.5k", referrals: "44", streak: "18d", delta: "+1" },
      { rank: 8, name: "Noah R.", xp: "7,100", earnings: "$2.1k", referrals: "36", streak: "14d", delta: "0" },
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
      { rank: 5, name: "Sierra J.", xp: "9,100", earnings: "$2.7k", referrals: "47", streak: "30d", delta: "-1" },
      { rank: 6, name: "Ethan B.", xp: "7,800", earnings: "$2.3k", referrals: "40", streak: "25d", delta: "+2" },
      { rank: 7, name: "Olivia M.", xp: "6,500", earnings: "$1.9k", referrals: "33", streak: "20d", delta: "0" },
      { rank: 8, name: "Liam D.", xp: "5,400", earnings: "$1.5k", referrals: "26", streak: "15d", delta: "+1" },
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
      { rank: 5, name: "Isla W.", xp: "12,500", earnings: "$4.2k", referrals: "96", streak: "44d", delta: "-1" },
      { rank: 6, name: "Ruby L.", xp: "10,800", earnings: "$3.6k", referrals: "81", streak: "37d", delta: "+3" },
      { rank: 7, name: "Grace P.", xp: "9,200", earnings: "$3.0k", referrals: "68", streak: "30d", delta: "+1" },
      { rank: 8, name: "Ella M.", xp: "7,900", earnings: "$2.5k", referrals: "54", streak: "24d", delta: "0" },
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
      { rank: 5, name: "Blaze K.", xp: "15,200", earnings: "$3.6k", referrals: "105", streak: "45d", delta: "-2" },
      { rank: 6, name: "Storm L.", xp: "12,800", earnings: "$3.0k", referrals: "88", streak: "37d", delta: "+1" },
      { rank: 7, name: "Echo R.", xp: "10,400", earnings: "$2.5k", referrals: "72", streak: "28d", delta: "+4" },
      { rank: 8, name: "Flux M.", xp: "8,700", earnings: "$2.0k", referrals: "58", streak: "21d", delta: "0" },
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
      { rank: 5, name: "Sam W.", xp: "6,900", earnings: "$2.1k", referrals: "41", streak: "22d", delta: "+2" },
      { rank: 6, name: "Nora B.", xp: "5,500", earnings: "$1.7k", referrals: "33", streak: "17d", delta: "-1" },
      { rank: 7, name: "Owen J.", xp: "4,200", earnings: "$1.3k", referrals: "25", streak: "12d", delta: "0" },
      { rank: 8, name: "Ivy R.", xp: "3,400", earnings: "$1.0k", referrals: "19", streak: "9d", delta: "+1" },
    ],
    you: { rank: 14, xp: "1,450", earnings: "$456", referrals: "5", streak: "2d", delta: "+3", level: 6, tier: "Bronze Scout", xpCurrent: 1450, xpNext: 2500, streakDays: 2 },
    challenge: { title: "Create 1 recipe video", reward: "500 XP + 🍜 Foodie badge", progress: 0, total: 1 },
    totalMembers: 1340,
  },
};

export const LeaderboardScreen = ({ onBack, ecosystem, onNavigate }: { onBack: () => void; ecosystem: EcosystemData; onNavigate: (s: Screen) => void }) => {
  const [period, setPeriod] = useState<"week" | "month" | "all">("week");
  const [boardType, setBoardType] = useState<"xp" | "earnings" | "referrals" | "streaks">("xp");
  const [showBadges, setShowBadges] = useState(false);

  const board = communityLeaderboards[ecosystem.id] || communityLeaderboards.combat;
  const you = board.you;
  const xpProgress = Math.round((you.xpCurrent / you.xpNext) * 100);

  const badges = [
    { emoji: "🔥", name: "7-Day Streak", desc: "Active 7 days in a row", earned: you.streakDays >= 7 },
    { emoji: ecosystem.emoji, name: `${ecosystem.label.split(" ")[0]} Expert`, desc: `Reviewed 5+ ${ecosystem.label.toLowerCase()} products`, earned: you.level >= 10 },
    { emoji: "⭐", name: "Top Reviewer", desc: "Top 10 reviewer this month", earned: you.rank <= 10 },
    { emoji: "💰", name: "$1k Earned", desc: "Lifetime earnings over $1,000", earned: parseFloat(you.earnings.replace(/[$,k]/g, "")) >= 1 },
    { emoji: "👥", name: "Community Leader", desc: "10+ community posts", earned: you.level >= 8 },
    { emoji: "🏆", name: "Podium Finish", desc: "Top 3 on any leaderboard", earned: you.rank <= 3 },
    { emoji: "💎", name: "Diamond Tier", desc: "Reach Diamond ambassador tier", earned: false },
    { emoji: "🌍", name: "Global Top 100", desc: "Rank in global top 100", earned: you.rank <= 100 },
    { emoji: "🎯", name: "Mission Master", desc: "Complete 50 missions", earned: false },
    { emoji: "📢", name: "Influencer", desc: "100+ referrals", earned: parseInt(you.referrals) >= 100 },
  ];

  const earnedCount = badges.filter(b => b.earned).length;

  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex-1">
          <p className="font-display font-bold text-lg text-foreground">{ecosystem.leaderboardTitle}</p>
          <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {board.totalMembers.toLocaleString()} members competing</p>
        </div>
      </div>

      {/* Your Gamification Summary */}
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/15 p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center relative">
            <span className="text-sm font-black text-primary">AR</span>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-stage-earnings flex items-center justify-center border-2 border-card">
              <span className="text-[7px] font-black text-white">{you.level}</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">Level {you.level} · {you.tier}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-stage-earnings transition-all" style={{ width: `${xpProgress}%` }} />
              </div>
              <span className="text-[9px] font-bold text-muted-foreground">{you.xpCurrent.toLocaleString()} / {you.xpNext.toLocaleString()} XP</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="rounded-xl bg-card/60 p-2 text-center">
            <p className="font-display font-black text-sm text-foreground">#{you.rank}</p>
            <p className="text-[8px] text-muted-foreground">Rank</p>
          </div>
          <div className="rounded-xl bg-card/60 p-2 text-center">
            <p className="font-display font-black text-sm text-foreground">🔥 {you.streakDays}</p>
            <p className="text-[8px] text-muted-foreground">Streak</p>
          </div>
          <div className="rounded-xl bg-card/60 p-2 text-center">
            <p className="font-display font-black text-sm text-foreground">{earnedCount}</p>
            <p className="text-[8px] text-muted-foreground">Badges</p>
          </div>
          <div className="rounded-xl bg-card/60 p-2 text-center">
            <p className="font-display font-black text-sm text-foreground">↑{you.delta}</p>
            <p className="text-[8px] text-stage-participation">This wk</p>
          </div>
        </div>
      </div>

      {/* Streak Tracker */}
      <div className="rounded-2xl border border-border bg-card p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-stage-conversion" />
            <p className="text-xs font-bold text-foreground">Daily Streak</p>
          </div>
          <span className="text-xs font-bold text-stage-conversion">{you.streakDays} days 🔥</span>
        </div>
        <div className="flex gap-1.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={day + i} className="flex-1 flex flex-col items-center gap-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                i < Math.min(you.streakDays, 7) ? "bg-stage-conversion/15 text-stage-conversion border border-stage-conversion/30" : "bg-muted text-muted-foreground"
              }`}>
                {i < Math.min(you.streakDays, 7) ? "✓" : ""}
              </div>
              <span className="text-[8px] text-muted-foreground font-medium">{day}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-muted-foreground mt-2">
          {you.streakDays >= 7
            ? <>Great streak! Next reward at <span className="font-bold text-stage-conversion">14 days</span> → 500 bonus XP</>
            : <>Keep going! <span className="font-bold text-stage-conversion">{7 - you.streakDays} more days</span> to unlock streak reward</>
          }
        </p>
      </div>

      {/* Badges */}
      <div className="rounded-2xl border border-border bg-card p-3">
        <button onClick={() => setShowBadges(!showBadges)} className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-stage-earnings" />
            <p className="text-xs font-bold text-foreground">Badges</p>
            <span className="px-1.5 py-0.5 rounded-full bg-stage-earnings/10 text-stage-earnings text-[9px] font-bold">{earnedCount}/{badges.length}</span>
          </div>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${showBadges ? "rotate-180" : ""}`} />
        </button>
        {!showBadges && (
          <div className="flex gap-1.5 mt-2 overflow-x-auto no-scrollbar">
            {badges.filter(b => b.earned).map((b) => (
              <div key={b.name} className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-base pop-in">
                {b.emoji}
              </div>
            ))}
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-[10px] text-muted-foreground font-bold">
              +{badges.length - earnedCount}
            </div>
          </div>
        )}
        {showBadges && (
          <div className="mt-3 space-y-2 expand-enter">
            {badges.map((b) => (
              <div key={b.name} className={`flex items-center gap-2.5 p-2 rounded-xl ${b.earned ? "bg-primary/5" : "bg-muted/50 opacity-50"}`}>
                <span className="text-lg">{b.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-foreground">{b.name}</p>
                  <p className="text-[9px] text-muted-foreground">{b.desc}</p>
                </div>
                {b.earned ? (
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Weekly Challenge */}
      <div className="rounded-2xl border border-stage-discovery/20 bg-stage-discovery/5 p-3">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4 text-stage-discovery" />
          <p className="text-[10px] font-bold text-stage-discovery uppercase tracking-wide">Weekly Challenge</p>
        </div>
        <p className="text-xs font-bold text-foreground">{board.challenge.title}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">Reward: {board.challenge.reward}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full bg-stage-discovery" style={{ width: `${(board.challenge.progress / board.challenge.total) * 100}%` }} />
          </div>
          <span className="text-[9px] font-bold text-stage-discovery">{board.challenge.progress}/{board.challenge.total}</span>
        </div>
      </div>

      {/* Leaderboard Type Tabs */}
      <div className="flex gap-1 overflow-x-auto no-scrollbar">
        {([
          { id: "xp" as const, label: "XP", icon: <Zap className="w-3 h-3" /> },
          { id: "earnings" as const, label: "Earnings", icon: <Wallet className="w-3 h-3" /> },
          { id: "referrals" as const, label: "Referrals", icon: <Users className="w-3 h-3" /> },
          { id: "streaks" as const, label: "Streaks", icon: <Flame className="w-3 h-3" /> },
        ]).map((t) => (
          <button key={t.id} onClick={() => setBoardType(t.id)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold flex-shrink-0 transition-all ${
              boardType === t.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}>
            {t.icon} {t.label}
          </button>
        ))}
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
        {[board.podium[1], board.podium[0], board.podium[2]].map((p, idx) => {
          const rank = idx === 0 ? 2 : idx === 1 ? 1 : 3;
          const val = boardType === "earnings" ? p.earnings : boardType === "referrals" ? p.referrals : boardType === "streaks" ? p.streak : p.xp;
          return <PodiumSpot key={p.name} name={p.name} points={val} rank={rank} height={rank === 1 ? "h-28" : rank === 2 ? "h-20" : "h-16"} crown={rank === 1} />;
        })}
      </div>

      {/* Rankings List */}
      <div className="space-y-1.5 stagger-children">
        {board.ranks.map((u) => {
          const val = boardType === "earnings" ? u.earnings : boardType === "referrals" ? u.referrals : boardType === "streaks" ? u.streak : u.xp;
          const unit = boardType === "xp" ? " pts" : boardType === "referrals" ? " refs" : "";
          return (
            <div key={u.rank} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
              <span className="text-sm font-bold text-muted-foreground w-6 text-center">#{u.rank}</span>
              <div className="w-8 h-8 rounded-full bg-muted" />
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground">{u.name}</p>
                <p className="text-[10px] text-muted-foreground">{val}{unit}</p>
              </div>
              <span className={`text-[10px] font-bold ${parseInt(u.delta) > 0 ? "text-stage-participation" : parseInt(u.delta) < 0 ? "text-destructive" : "text-muted-foreground"}`}>
                {parseInt(u.delta) > 0 ? `↑${u.delta}` : parseInt(u.delta) < 0 ? `↓${Math.abs(parseInt(u.delta))}` : "—"}
              </span>
            </div>
          );
        })}

        {/* Your Position */}
        <div className="flex items-center gap-3 p-3 rounded-xl border-2 border-primary bg-primary/5">
          <span className="text-sm font-bold text-primary w-6 text-center">#{you.rank}</span>
          <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
            <span className="text-[10px] font-bold text-primary">AR</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">You</p>
            <p className="text-[10px] text-muted-foreground">{boardType === "earnings" ? you.earnings : boardType === "referrals" ? you.referrals : boardType === "streaks" ? you.streak : you.xp + " pts"}</p>
          </div>
          <span className="text-[10px] font-bold text-stage-participation">↑{you.delta}</span>
        </div>

        {/* Challenge CTA */}
        <button onClick={() => onNavigate("missions")} className="w-full py-2.5 rounded-xl border border-primary/30 bg-primary/5 text-xs font-bold text-primary text-center mt-2">
          ⚔️ Challenge #{you.rank - 1} — only {Math.round(Math.random() * 200 + 50)} pts away!
        </button>
      </div>
    </div>
  );
};

/* ═══════ SOCIAL WALL / COMMUNITY ═══════ */
export const SocialWallScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeChannel, setActiveChannel] = useState("general");
  const [lbExpanded, setLbExpanded] = useState(false);
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
          <p className="font-display font-bold text-lg text-foreground">Community</p>
        </div>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* ── GROUP LEADERBOARD (always visible) ── */}
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-primary" />
            <p className="text-[10px] font-bold text-foreground uppercase tracking-wider">Leaderboard</p>
          </div>
          <button onClick={() => setLbExpanded(!lbExpanded)} className="text-[9px] font-bold text-primary flex items-center gap-0.5">
            {lbExpanded ? "Collapse" : "View All"}
            {lbExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Top 3 compact row */}
        <div className="flex items-center gap-2">
          {[
            { rank: 1, name: "Sarah M.", xp: "12,580" },
            { rank: 2, name: "Mike T.", xp: "8,240" },
            { rank: 3, name: "Jake S.", xp: "7,120" },
          ].map((p) => (
            <div key={p.rank} className="flex-1 flex items-center gap-1.5 p-2 rounded-xl bg-card border border-border">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black flex-shrink-0 ${p.rank === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {p.rank}
              </span>
              <div className="min-w-0">
                <p className="text-[9px] font-bold text-foreground truncate">{p.name}</p>
                <p className="text-[8px] text-muted-foreground">{p.xp} XP</p>
              </div>
            </div>
          ))}
        </div>

        {/* Your position */}
        <div className="flex items-center gap-2.5 p-2 rounded-xl border border-primary/30 bg-primary/5">
          <span className="text-[10px] font-black text-primary">#7</span>
          <div className="w-6 h-6 rounded-full bg-muted border border-primary/20 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-foreground">You</p>
            <p className="text-[8px] text-muted-foreground">4,580 XP</p>
          </div>
          <div className="flex items-center gap-0.5 text-[8px] font-bold text-green-500">
            <TrendingUp className="w-2.5 h-2.5" /> +3
          </div>
        </div>

        {/* Expanded rankings */}
        {lbExpanded && (
          <div className="space-y-1.5 pt-1">
            {[
              { rank: 4, name: "Chris P.", xp: "6,890", badge: "Gold" },
              { rank: 5, name: "Dana W.", xp: "5,720", badge: "Silver" },
              { rank: 6, name: "Leo R.", xp: "5,100" },
              { rank: 8, name: "Amy K.", xp: "4,200" },
              { rank: 9, name: "Tom H.", xp: "3,890" },
              { rank: 10, name: "Nina F.", xp: "3,450" },
            ].map((m) => (
              <div key={m.rank} className="flex items-center gap-2.5 p-2 rounded-xl bg-card border border-border">
                <span className="text-[9px] font-black text-muted-foreground w-4 text-center">{m.rank}</span>
                <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-[9px] font-bold text-foreground truncate">{m.name}</p>
                    {m.badge && <span className="px-1 py-0.5 rounded bg-primary/10 text-[7px] font-bold text-primary">{m.badge}</span>}
                  </div>
                </div>
                <p className="text-[9px] font-bold text-muted-foreground">{m.xp} XP</p>
              </div>
            ))}
            <div className="flex items-center gap-2 p-2 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent mt-1">
              <Gift className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <div>
                <p className="text-[9px] font-bold text-foreground">Weekly Top 3 Prize</p>
                <p className="text-[8px] text-muted-foreground">$50 store credit + exclusive badge</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Channel Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: "general", label: "General", icon: <MessageCircle className="w-3 h-3" /> },
          { id: "gear", label: "Gear Talk", icon: <ShoppingBag className="w-3 h-3" /> },
          { id: "training", label: "Training", icon: <Flame className="w-3 h-3" /> },
          { id: "wins", label: "Wins", icon: <Trophy className="w-3 h-3" /> },
        ].map((ch) => (
          <button
            key={ch.id}
            onClick={() => setActiveChannel(ch.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold flex-shrink-0 transition-all ${
              activeChannel === ch.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {ch.icon} {ch.label}
          </button>
        ))}
      </div>

      {/* Pinned Challenge */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-primary" />
          <p className="text-[10px] font-bold text-primary uppercase tracking-wide">Pinned Challenge</p>
        </div>
        <p className="text-xs font-bold text-foreground">Show us your training setup</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">Share a photo of your home gym or training space. Best setup wins $100 store credit.</p>
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-muted border border-card" />
              ))}
            </div>
            <span className="text-[9px] text-muted-foreground">89 entries</span>
          </div>
          <button className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">Enter</button>
        </div>
      </div>

      {/* Trending in Community */}
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Trending Now</p>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { tag: "#TrainHard", posts: "1.2k" },
            { tag: "#GearReview", posts: "847" },
            { tag: "#FightWeek", posts: "623" },
            { tag: "#NewPR", posts: "412" },
          ].map((t) => (
            <div key={t.tag} className="flex-shrink-0 px-3 py-2 rounded-xl border border-border bg-card">
              <p className="text-[10px] font-bold text-primary">{t.tag}</p>
              <p className="text-[9px] text-muted-foreground">{t.posts} posts</p>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <SocialPost author="Sarah Martinez" time="2h ago" content="Just finished sparring with my new Venum Challenger 3.0 gloves! The padding is next level compared to the 2.0." likes={42} comments={8} reposts={6} hasImage productTag="Venum Challenger 3.0" onProductClick={() => onNavigate("product")} verified />
      <SocialPost author="Mike Torres" time="5h ago" content="Week 3 of the #TrainHard challenge — loving the Hayabusa T3s. Best investment I've made." likes={89} comments={15} reposts={12} hasImage badge="Top Contributor" />
      <SocialPost author="LUUP Official" time="1d ago" content="New mission drop! Share your favourite gear setup and earn $25. Tag #LUUPGear to get started." likes={234} comments={47} reposts={31} isBrand />
      <SocialPost author="Jess Kim" time="2d ago" content="Just hit Gold tier on LUUP!! The rewards just keep getting better." likes={156} comments={23} reposts={8} badge="Gold Ambassador" />
    </div>
  );
};
/* ═══════ BRAND PAGE ═══════ */
export const BrandScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<"products" | "missions" | "social" | "community">("products");
  const [following, setFollowing] = useState(false);
  const [addedProducts, setAddedProducts] = useState<string[]>([]);
  const toggleProduct = (name: string) => setAddedProducts((prev) => prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]);
  return (
    <div className="space-y-0">
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
          <button onClick={() => setFollowing(!following)} className={`flex-1 rounded-xl py-2.5 font-bold text-xs transition-all ${following ? "border border-border text-foreground" : "bg-primary text-primary-foreground"}`}>
            {following ? "Following ✓" : "Follow Brand"}
          </button>
          <button onClick={() => onNavigate("explore")} className="flex-1 border border-border rounded-xl py-2.5 font-bold text-xs text-foreground">Join Community</button>
        </div>

        <div className="flex border-b border-border">
          {(["products", "missions", "social", "community"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2.5 text-xs font-semibold capitalize transition-all border-b-2 ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "products" && (
          <div className="grid grid-cols-2 gap-2.5 stagger-grid">
            {[
              { name: "Challenger 3.0 Gloves", price: "$79.99" },
              { name: "Elite Rashguard", price: "$64.99" },
              { name: "Kontact Shin Guards", price: "$49.99" },
              { name: "Challenger Headgear", price: "$54.99" },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-2.5 text-left">
                <button onClick={() => onNavigate("product")} className="w-full">
                  <div className="aspect-square rounded-xl bg-muted mb-2" />
                  <p className="font-bold text-[11px] text-foreground truncate text-left">{p.name}</p>
                  <p className="text-xs font-bold text-primary mt-0.5 text-left">{p.price}</p>
                </button>
                <button
                  onClick={() => toggleProduct(p.name)}
                  className={`w-full mt-2 py-1.5 rounded-lg text-[9px] font-bold flex items-center justify-center gap-1 transition-all active:scale-[0.97] ${
                    addedProducts.includes(p.name) ? "bg-primary/10 text-primary border border-primary/30" : "bg-foreground text-background"
                  }`}
                >
                  {addedProducts.includes(p.name) ? <><Check className="w-3 h-3" /> In Storefront</> : <><Plus className="w-3 h-3" /> Add to Storefront</>}
                </button>
              </div>
            ))}
          </div>
        )}
        {activeTab === "missions" && (
          <div className="space-y-2 stagger-children">
            {[
              { id: "bm1", title: "Share Venum gear photo", brand: "Venum", reward: "$15", pointsReward: 150, rewardType: "mixed" as const, type: "Social", submissionType: "link" as MissionSubmissionType, difficulty: "Easy" as const, status: "open" as MissionStatus, slots: { taken: 20, total: 30 }, description: "Post a photo with Venum gear.", requirements: ["Tag @venum", "Public post"] },
              { id: "bm2", title: "Review any Venum product", brand: "Venum", reward: "$10", rewardType: "cash" as const, type: "Review", submissionType: "review" as MissionSubmissionType, difficulty: "Easy" as const, status: "open" as MissionStatus, slots: { taken: 8, total: 15 }, description: "Write a detailed product review.", requirements: ["200+ words", "Include photos"] },
              { id: "bm3", title: "Create a training video", brand: "Venum", reward: "$25", pointsReward: 300, rewardType: "mixed" as const, type: "Content", submissionType: "upload" as MissionSubmissionType, difficulty: "Medium" as const, status: "open" as MissionStatus, slots: { taken: 3, total: 10 }, description: "Film a training session with Venum gear.", requirements: ["30-60 seconds", "Gear visible"] },
            ].map(m => (
              <MissionCardV2 key={m.id} mission={m} currentStatus={m.status} expanded={false} onToggle={() => {}} onJoin={() => {}} onSubmit={() => {}} />
            ))}
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

        <AgentPill context="brand" />
      </div>
    </div>
  );
};

/* ═══════ BRANDS ═══════ */
export const StoreScreen = ({ onNavigate, ecosystem }: { onNavigate: (s: Screen) => void; ecosystem: EcosystemData }) => {
  const [addedProducts, setAddedProducts] = useState<string[]>([]);

  const toggleProduct = (name: string) => {
    setAddedProducts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-lg text-foreground">Brands</p>
          <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {ecosystem.label}</p>
        </div>
        <div className="flex items-center gap-2 bg-muted rounded-lg px-2.5 py-1.5">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Search brands</span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {["All Brands", ...ecosystem.brands.map(b => b.category.split(" ")[0])].slice(0, 5).map((c, i) => (
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
            <span className="font-display font-black text-primary text-lg">{ecosystem.featuredBrand.logo}</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-foreground">{ecosystem.featuredBrand.name}</p>
            <p className="text-xs text-muted-foreground">{ecosystem.featuredBrand.desc}</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-[10px] text-primary font-bold">{ecosystem.featuredBrand.royalty} royalties</span>
              <span className="text-[10px] text-muted-foreground">{ecosystem.featuredBrand.products} products</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>

      {/* Brand List */}
      <div className="space-y-2">
        {ecosystem.brands.map((b) => (
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

      {/* Top Products to Add */}
      <div>
        <p className="font-display font-bold text-sm text-foreground mb-1">Top Products to Add</p>
        <p className="text-[10px] text-muted-foreground mb-3">Add products to your storefront and earn royalties on every sale</p>
        <div className="space-y-2 stagger-children">
          {ecosystem.trendingOffers.map((p) => (
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
                  addedProducts.includes(p.name) ? "bg-primary/10 text-primary border border-primary/30" : "bg-primary text-primary-foreground"
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
  const [liked, setLiked] = useState(false);
  const [addedToStorefront, setAddedToStorefront] = useState(false);
  return (
    <div className="space-y-0">
      <div className="relative">
        <div className="h-52 bg-muted" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-primary w-4" : "bg-foreground/30"}`} />
          ))}
        </div>
        <button onClick={onBack} className="absolute top-3 left-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <button onClick={() => setLiked(!liked)} className="absolute top-3 right-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
          <Heart className={`w-4 h-4 ${liked ? "text-destructive fill-destructive" : "text-muted-foreground"}`} />
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

        <div className="flex items-center gap-3 rounded-xl bg-muted p-3">
          <div className="w-8 h-8 rounded-full bg-primary/10" />
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">Recommended by Jake Shields</p>
            <p className="text-[10px] text-muted-foreground">"Best training gloves I've ever used"</p>
          </div>
        </div>

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

        <button className="w-full rounded-xl border border-primary/20 bg-primary/5 p-3 flex items-center gap-3 text-left">
          <Bot className="w-5 h-5 text-primary" />
          <div className="flex-1">
            <p className="text-xs font-bold text-foreground">Ask Agent AI</p>
            <p className="text-[10px] text-muted-foreground">Questions about size, fit, or material</p>
          </div>
        </button>

        <div>
          <p className="text-xs font-bold text-foreground mb-2">You might also like</p>
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar stagger-scroll">
            {["Hayabusa T3", "Sanabul Gloves", "Venum Elite"].map((n) => (
              <button key={n} onClick={() => onNavigate("product")} className="flex-shrink-0 w-[100px] rounded-xl border border-border bg-card p-2 text-left active:scale-[0.97] transition-transform">
                <div className="aspect-square rounded-lg bg-muted mb-1.5" />
                <p className="text-[10px] font-bold text-foreground truncate">{n}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Add to Storefront */}
        <button
          onClick={() => setAddedToStorefront(!addedToStorefront)}
          className={`w-full rounded-xl p-3 flex items-center justify-center gap-2 font-bold text-xs transition-all active:scale-[0.98] ${
            addedToStorefront
              ? "bg-primary/10 border border-primary/30 text-primary"
              : "bg-foreground text-background"
          }`}
        >
          {addedToStorefront ? (
            <><Check className="w-4 h-4" /> Added to Your Storefront</>
          ) : (
            <><Plus className="w-4 h-4" /> Add to My Storefront</>
          )}
        </button>
        {addedToStorefront && (
          <div className="rounded-xl bg-primary/5 border border-primary/15 px-3 py-2 flex items-center gap-2">
            <ShoppingBag className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <p className="text-[10px] text-foreground/70">This product is now on your <span className="font-bold text-primary">storefront</span>. You'll earn <span className="font-bold text-primary">$8.00</span> per sale.</p>
          </div>
        )}

        <div className="flex gap-2 pt-2 sticky bottom-0 bg-card py-3 -mx-5 px-5 border-t border-border">
          <button onClick={() => onNavigate("checkout")} className="flex-1 bg-primary text-primary-foreground rounded-xl py-3 font-bold text-sm flex items-center justify-center gap-2">
            <Share2 className="w-4 h-4" />
            Buy on Brand Site
          </button>
          <button onClick={() => setLiked(!liked)} className="w-12 h-12 rounded-xl border border-border flex items-center justify-center active:scale-95 transition-transform">
            <Heart className={`w-5 h-5 ${liked ? "text-destructive fill-destructive" : "text-muted-foreground"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ═══════ STOREFRONT (Public brand page — Linktree replacement) ═══════ */
export const StorefrontScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [following, setFollowing] = useState(false);
  return (
  <div className="space-y-0">
    {/* Hero Cover */}
    <div className="relative h-36 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.3),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      <button onClick={onBack} className="absolute top-3 left-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center z-10">
        <ArrowLeft className="w-4 h-4 text-foreground" />
      </button>
      <div className="absolute top-3 right-4 flex gap-1.5 z-10">
        <button onClick={() => onNavigate("share-storefront")} className="w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center active:scale-95 transition-transform">
          <Share2 className="w-3.5 h-3.5 text-foreground" />
        </button>
        <button className="w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
          <Bell className="w-3.5 h-3.5 text-foreground" />
        </button>
      </div>
    </div>

    <div className="px-5 -mt-12 space-y-4 pb-4">
      {/* Avatar + Name */}
      <div className="flex items-end gap-3">
        <div className="w-20 h-20 rounded-2xl bg-card border-[3px] border-background shadow-xl flex items-center justify-center relative">
          <span className="font-display font-bold text-primary text-2xl">AR</span>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-background">
            <Check className="w-3 h-3 text-primary-foreground" />
          </div>
        </div>
        <div className="pb-1 flex-1">
          <p className="font-display font-bold text-lg text-foreground leading-tight">Alex Rivera</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">@alexrivera · Los Angeles, CA</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="px-1.5 py-0.5 rounded bg-primary/10 text-[8px] font-bold text-primary">Silver Scout</span>
            <span className="px-1.5 py-0.5 rounded bg-muted text-[8px] font-bold text-muted-foreground">MMA</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-[11px] text-foreground/85 leading-relaxed">MMA fighter & gear enthusiast 🥊 I share honest reviews of the gear I actually use in training and fights. Silver Scout Ambassador — working my way to Gold. Follow me for new product drops and deals.</p>

      {/* Follow + Share CTA */}
      <div className="flex gap-2">
        <button 
          onClick={() => setFollowing(!following)} 
          className={`flex-1 rounded-xl py-2.5 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all ${
            following 
              ? "border border-border bg-card text-foreground" 
              : "bg-primary text-primary-foreground"
          }`}
        >
          {following ? <><Check className="w-3.5 h-3.5" /> Following</> : <><UserPlus className="w-3.5 h-3.5" /> Follow</>}
        </button>
        <button onClick={() => onNavigate("share-storefront")} className="px-4 rounded-xl border border-border font-bold text-xs text-foreground flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform">
          <Share2 className="w-3.5 h-3.5" /> Share
        </button>
      </div>

      {/* Follow context */}
      {following && (
        <div className="rounded-xl bg-primary/5 border border-primary/15 px-3 py-2 flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <p className="text-[10px] text-foreground/70">Alex's new products & updates will appear in your <span className="font-bold text-primary">Community feed</span></p>
        </div>
      )}

      {/* Social handles */}
      <div className="flex flex-wrap gap-1.5">
        {[
          { platform: "IG", handle: "@alex_fights", emoji: "📸" },
          { platform: "TikTok", handle: "@alexmma", emoji: "🎵" },
          { platform: "YT", handle: "AlexRiveraMMA", emoji: "📹" },
          { platform: "X", handle: "@alexfights", emoji: "𝕏" },
        ].map((s) => (
          <button key={s.platform} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-muted border border-border active:scale-[0.98] transition-transform">
            <span className="text-[10px]">{s.emoji}</span>
            <span className="text-[9px] font-bold text-foreground">{s.handle}</span>
          </button>
        ))}
      </div>


      {/* ── FEATURED PRODUCT (Editorial hero) ── */}
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">⭐ Alex's Pick of the Month</p>
        <button onClick={() => onNavigate("product")} className="w-full rounded-2xl border border-border bg-card overflow-hidden text-left active:scale-[0.98] transition-transform">
          <div className="h-32 bg-gradient-to-br from-muted to-muted/50 relative">
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-foreground/80 text-background text-[9px] font-black">FEATURED</span>
          </div>
          <div className="p-3.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-foreground">Venum Challenger 3.0</p>
              <p className="text-sm font-bold text-primary">$79.99</p>
            </div>
            <p className="text-[10px] text-muted-foreground">Venum · 12% royalty</p>
            <p className="text-[11px] text-foreground/75 leading-relaxed">"My daily sparring gloves. The wrist support is unreal — I've gone through 3 pairs and keep coming back."</p>
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[9px] text-muted-foreground flex items-center gap-0.5"><Star className="w-3 h-3 text-stage-earnings fill-stage-earnings" />4.8 (124 reviews)</span>
              <span className="text-[9px] text-muted-foreground">34 sold via Alex</span>
            </div>
          </div>
        </button>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">All Products</p>
          <span className="text-[10px] text-primary font-semibold">12 items</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 stagger-grid">
          {[
            { name: "Hayabusa T3 Gloves", price: "$159.99", brand: "Hayabusa", review: "Premium competition quality", sold: 28 },
            { name: "Sanabul Essential", price: "$24.99", brand: "Sanabul", review: "Best budget starter set", sold: 27 },
            { name: "Venum Shin Guards", price: "$49.99", brand: "Venum", review: "Perfect for Muay Thai", sold: 18 },
            { name: "RDX Hand Wraps", price: "$12.99", brand: "RDX", review: "Solid daily use wraps", sold: 14 },
          ].map((p) => (
            <button key={p.name} onClick={() => onNavigate("product")} className="rounded-2xl border border-border bg-card p-2.5 text-left active:scale-[0.98] transition-transform">
              <div className="aspect-square rounded-xl bg-muted mb-2 relative">
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-foreground/70 text-background text-[8px] font-bold">{p.brand}</span>
              </div>
              <p className="font-bold text-[10px] text-foreground truncate">{p.name}</p>
              <p className="text-[9px] text-foreground/60 truncate mt-0.5">"{p.review}"</p>
              <div className="flex items-center justify-between mt-1.5">
                <p className="text-xs font-bold text-primary">{p.price}</p>
                <p className="text-[8px] text-muted-foreground">{p.sold} sold</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── LINKS (Linktree section) ── */}
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Links</p>
        <div className="space-y-2">
          {[
            { label: "🥊 My 8-Week Training Program", desc: "MMA fundamentals course" },
            { label: "📹 Latest: Venum vs Hayabusa Review", desc: "YouTube · 12k views" },
            { label: "💬 Join My Community", desc: "MMA Training Tips on LUUP" },
            { label: "📧 Business Enquiries", desc: "alex@alexrivera.com" },
          ].map((link) => (
            <button key={link.label} className="w-full rounded-xl border border-border bg-card p-3 text-left active:scale-[0.98] transition-transform flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-foreground">{link.label}</p>
                <p className="text-[9px] text-muted-foreground">{link.desc}</p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* ── ABOUT + BADGES ── */}
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-xs font-bold text-foreground">About</p>
        <p className="text-[10px] text-foreground/75 leading-relaxed">Professional MMA fighter with 5+ years competing. I review gear I actually use — no sponsored fluff. Based in Los Angeles, training out of Kings MMA.</p>
        <div className="flex gap-2 flex-wrap">
          {["🔥 30-Day Streak", "🥊 Gear Expert", "⭐ Top Reviewer", "💰 $1k Earned", "👥 Community Leader"].map((b) => (
            <span key={b} className="px-2 py-0.5 rounded-full bg-primary/10 text-[8px] font-bold text-primary">{b}</span>
          ))}
        </div>
      </div>

      {/* Powered by */}
      <div className="text-center pt-2 pb-4">
        <p className="text-[9px] text-muted-foreground">Powered by <span className="font-bold text-primary">LUUP</span> · <span className="text-primary/70">Create your own storefront →</span></p>
      </div>
    </div>
  </div>
  );
};
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

      <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
        <div className="w-16 h-16 rounded-xl bg-muted flex-shrink-0" />
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground">Venum Challenger 3.0</p>
          <p className="text-[10px] text-muted-foreground">14oz · Black/Gold</p>
          <p className="text-sm font-bold text-foreground mt-1">$79.99 on venum.com</p>
        </div>
      </div>

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

      <div className="rounded-xl bg-stage-participation/5 border border-stage-participation/20 p-3 flex items-center gap-2">
        <Check className="w-4 h-4 text-stage-participation" />
        <div>
          <p className="text-xs font-bold text-foreground">Referred by Jake Shields</p>
          <p className="text-[10px] text-muted-foreground">Jake earns commission if you buy</p>
        </div>
      </div>

      <div className="rounded-xl border border-border p-3 space-y-2">
        <p className="text-xs font-bold text-foreground">Commission Breakdown</p>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Product Price</span><span className="text-foreground">$79.99</span></div>
        <div className="flex justify-between text-xs"><span className="text-muted-foreground">Commission Rate</span><span className="text-primary font-medium">10%</span></div>
        <div className="flex justify-between text-xs font-bold pt-1 border-t border-border"><span className="text-foreground">You Earn</span><span className="text-primary">$8.00</span></div>
        <p className="text-[10px] text-muted-foreground">Per sale through your affiliate link</p>
      </div>

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

    <button onClick={() => onNavigate("profile")} className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground text-left">
      <div className="flex items-center gap-3">
        <Share2 className="w-6 h-6" />
        <div>
          <p className="font-bold text-sm">Share & Earn More</p>
          <p className="text-xs opacity-80">Earn $8.00 every time someone buys through your link</p>
        </div>
      </div>
    </button>

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
export const ProfileScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [profileTab, setProfileTab] = useState<"earnings" | "activity">("earnings");
  return (
  <div className="px-5 py-4 space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
          <span className="font-display font-bold text-base text-primary">AR</span>
        </div>
        <div>
          <p className="font-display font-bold text-base text-foreground">Alex Rivera</p>
          <p className="text-[10px] text-muted-foreground">@alexrivera · Silver Scout</p>
        </div>
      </div>
      <button onClick={() => onNavigate("edit-profile")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center active:scale-95 transition-transform">
        <Settings className="w-3.5 h-3.5 text-muted-foreground" />
      </button>
    </div>

    {/* ═══ BIG STOREFRONT WIDGET ═══ */}
    <button onClick={() => onNavigate("storefront")} className="w-full rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 p-4 text-left text-primary-foreground active:scale-[0.98] transition-transform shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary-foreground/5 -translate-y-6 translate-x-6" />
      <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-primary-foreground/5 translate-y-4 -translate-x-4" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <p className="font-display font-bold text-sm">My Storefront</p>
          </div>
          <ChevronRight className="w-5 h-5 opacity-60" />
        </div>
        <p className="text-[11px] opacity-80 mb-3">Your public page · Linktree replacement · Share everywhere</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="rounded-xl bg-primary-foreground/10 p-2 text-center backdrop-blur-sm">
            <p className="font-display font-black text-sm">12</p>
            <p className="text-[8px] opacity-70">Products</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/10 p-2 text-center backdrop-blur-sm">
            <p className="font-display font-black text-sm">89</p>
            <p className="text-[8px] opacity-70">Sales</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/10 p-2 text-center backdrop-blur-sm">
            <p className="font-display font-black text-sm">$542</p>
            <p className="text-[8px] opacity-70">Royalties</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-primary-foreground/10 px-3 py-2 backdrop-blur-sm">
          <Link className="w-3.5 h-3.5 opacity-70" />
          <span className="font-mono text-[10px] opacity-80 flex-1 truncate">luup.co/s/alexrivera</span>
          <span className="text-[9px] font-bold opacity-90">Copy</span>
        </div>
      </div>
    </button>

    {/* Quick Stats */}
    <div className="grid grid-cols-4 gap-1.5 stagger-grid">
      {[
        { label: "Earned", value: "$1,247" },
        { label: "Referrals", value: "47" },
        { label: "Missions", value: "23" },
        { label: "Network", value: "182" },
      ].map((s) => (
        <div key={s.label} className="rounded-xl bg-muted p-2 text-center">
          <p className="font-display font-black text-sm text-foreground num-pop">{s.value}</p>
          <p className="text-[8px] text-muted-foreground font-medium">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Ambassador Tier */}
    <button onClick={() => onNavigate("wallet")} className="w-full rounded-2xl bg-gradient-to-r from-stage-earnings/10 to-primary/10 border border-stage-earnings/20 p-3 flex items-center gap-3 text-left active:scale-[0.98] transition-transform">
      <Crown className="w-5 h-5 text-stage-earnings" />
      <div className="flex-1">
        <p className="text-[11px] font-bold text-foreground">Silver Scout → Gold</p>
        <p className="text-[9px] text-muted-foreground">1,750 XP to Gold · Unlock 15% commission</p>
        <div className="h-1.5 rounded-full bg-muted mt-1.5">
          <div className="h-full rounded-full bg-stage-earnings" style={{ width: "65%" }} />
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </button>

    {/* Tabs: Earnings / Activity */}
    <div className="flex gap-1 bg-muted rounded-xl p-1">
      {(["earnings", "activity"] as const).map((t) => (
        <button key={t} onClick={() => setProfileTab(t)} className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold capitalize transition-all ${profileTab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
          {t === "earnings" ? "Earnings" : "Activity"}
        </button>
      ))}
    </div>

    {/* Earnings Tab */}
    {profileTab === "earnings" && (
      <div className="space-y-3">
        <div className="rounded-xl border border-border bg-card p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-foreground">This Month</p>
            <span className="text-xs font-bold text-primary">$1,247.80</span>
          </div>
          <div className="h-14 rounded-lg bg-muted flex items-end gap-1 px-2 pb-1.5">
            {[30, 45, 35, 60, 55, 70, 80, 65, 90, 75, 85, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/60" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="space-y-1.5 stagger-children">
          <EarningsRow label="Storefront Royalties" amount="$542.00" />
          <EarningsRow label="Referral Commissions" amount="$318.40" />
          <EarningsRow label="Network Earnings (Tier 2-4)" amount="$247.40" />
          <EarningsRow label="Mission Rewards" amount="$140.00" />
        </div>
      </div>
    )}

    {/* Activity Tab */}
    {profileTab === "activity" && (
      <div className="space-y-2 stagger-children">
        {[
          { text: "Earned $24 royalty from Venum gloves sale", time: "2h ago", icon: <Wallet className="w-3 h-3 text-primary" /> },
          { text: "New referral signed up: @mike_trains", time: "5h ago", icon: <UserPlus className="w-3 h-3 text-primary" /> },
          { text: "Completed mission: Share Venum gear review", time: "1d ago", icon: <Check className="w-3 h-3 text-primary" /> },
          { text: "Moved to #12 on Combat leaderboard", time: "1d ago", icon: <TrendingUp className="w-3 h-3 text-primary" /> },
          { text: "Added Hayabusa T3 to storefront", time: "2d ago", icon: <ShoppingBag className="w-3 h-3 text-primary" /> },
          { text: "Joined community: Royalty Earners Club", time: "3d ago", icon: <Users className="w-3 h-3 text-primary" /> },
        ].map((a, i) => (
          <div key={i} className="flex items-start gap-2.5 py-2 border-b border-border last:border-0">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">{a.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-foreground">{a.text}</p>
              <p className="text-[9px] text-muted-foreground mt-0.5">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Quick Links */}
    <div className="space-y-0.5">
      {[
        { label: "My Communities", screen: "explore" as Screen },
        { label: "Saved Items", screen: "saved-items" as Screen },
        { label: "Edit Profile", screen: "edit-profile" as Screen },
        { label: "Referral Code", screen: "referral-code" as Screen },
      ].map((item) => (
        <button key={item.label} onClick={() => onNavigate(item.screen)} className="w-full flex items-center justify-between py-2.5 px-1 border-b border-border last:border-0 text-left">
          <span className="text-[11px] text-foreground font-medium">{item.label}</span>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      ))}
    </div>
  </div>
  );
};

/* ═══════ EDIT PROFILE ═══════ */
export const EditProfileScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
        <p className="font-display font-bold text-base text-foreground">Edit Profile</p>
      </div>
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">A</div>
        <button className="text-[11px] text-primary font-semibold">Change Photo</button>
      </div>
      <div className="space-y-3">
        {[
          { label: "Display Name", value: "Alex", placeholder: "Your name" },
          { label: "Username", value: "@alex_mma", placeholder: "@username" },
          { label: "Bio", value: "Combat sports enthusiast 🥊", placeholder: "Tell us about yourself" },
          { label: "Instagram", value: "@alex.trains", placeholder: "@handle" },
          { label: "TikTok", value: "@alexmma", placeholder: "@handle" },
        ].map((field) => (
          <div key={field.label}>
            <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">{field.label}</label>
            <div className="w-full rounded-xl border border-border bg-card px-3 py-2.5">
              <span className="text-[11px] text-foreground">{field.value}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold active:scale-[0.98] transition-transform">Save Changes</button>
    </div>
  );
};

/* ═══════ SAVED ITEMS ═══════ */
export const SavedItemsScreen = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (s: Screen) => void }) => {
  const savedItems = [
    { name: "Hayabusa T3 Gloves", brand: "Hayabusa", price: "$89", royalty: "12%" },
    { name: "Venum Elite Shorts", brand: "Venum", price: "$54", royalty: "10%" },
    { name: "RDX Shin Guards", brand: "RDX Sports", price: "$42", royalty: "9%" },
    { name: "Everlast Hand Wraps", brand: "Everlast", price: "$18", royalty: "8%" },
  ];
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
        <p className="font-display font-bold text-base text-foreground">Saved Items</p>
        <span className="ml-auto text-[10px] text-muted-foreground font-medium">{savedItems.length} items</span>
      </div>
      <div className="space-y-2">
        {savedItems.map((item) => (
          <button key={item.name} onClick={() => onNavigate("product")}
            className="w-full flex items-center gap-3 p-3 rounded-2xl border border-border bg-card text-left active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-foreground truncate">{item.name}</p>
              <p className="text-[9px] text-muted-foreground">{item.brand} · {item.price}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className="px-1.5 py-0.5 rounded-md bg-primary/10 text-primary text-[8px] font-bold">{item.royalty}</span>
              <Heart className="w-3 h-3 text-destructive fill-destructive" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

/* ═══════ REFERRAL CODE ═══════ */
export const ReferralCodeScreen = ({ onBack }: { onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  const code = "ALEX-MMA-2024";
  return (
    <div className="px-5 py-4 space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
        <p className="font-display font-bold text-base text-foreground">Referral Code</p>
      </div>
      {/* Referral card */}
      <div className="rounded-2xl bg-gradient-to-br from-primary/15 to-stage-earnings/10 border border-primary/20 p-5 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto">
          <Share2 className="w-5 h-5 text-primary" />
        </div>
        <p className="text-sm font-bold text-foreground">Share & Earn 10%</p>
        <p className="text-[10px] text-muted-foreground leading-relaxed">Earn 10% commission on every purchase your referrals make. No limits.</p>
        <div className="bg-card border border-border rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-mono font-bold text-foreground tracking-wider">{code}</span>
          <button onClick={() => setCopied(true)} className="text-[10px] font-bold text-primary">
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Referrals", value: "14" },
          { label: "Earnings", value: "$318" },
          { label: "Rate", value: "10%" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-card border border-border p-3 text-center">
            <p className="font-display font-black text-lg text-foreground">{s.value}</p>
            <p className="text-[9px] text-muted-foreground font-medium">{s.label}</p>
          </div>
        ))}
      </div>
      {/* Recent referrals */}
      <div>
        <p className="text-xs font-bold text-foreground mb-2">Recent Referrals</p>
        <div className="space-y-1.5">
          {[
            { name: "@mike_trains", earned: "$24.50", time: "2d ago" },
            { name: "@sarah_bjj", earned: "$18.20", time: "5d ago" },
            { name: "@jake_box", earned: "$31.00", time: "1w ago" },
          ].map((r) => (
            <div key={r.name} className="flex items-center gap-2.5 p-2.5 rounded-xl border border-border bg-card">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-3 h-3 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-foreground">{r.name}</p>
                <p className="text-[8px] text-muted-foreground">{r.time}</p>
              </div>
              <span className="text-[10px] font-bold text-primary">{r.earned}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
    case "open": return { label: "Join Mission", color: "bg-primary text-primary-foreground", canAct: true };
    case "joined": return { label: "Submit", color: "bg-stage-conversion text-white", canAct: true };
    case "submitted": return { label: "Submitted", color: "bg-stage-onboarding/15 text-stage-onboarding", canAct: false };
    case "in-review": return { label: "In Review", color: "bg-stage-conversion/15 text-stage-conversion", canAct: false };
    case "approved": return { label: "Approved ✓", color: "bg-stage-participation/15 text-stage-participation", canAct: false };
    case "rejected": return { label: "Rejected", color: "bg-destructive/15 text-destructive", canAct: false };
  }
};

const MissionCardV2 = ({ mission, currentStatus, expanded, onToggle, onJoin, onSubmit }: {
  mission: MissionData; currentStatus: MissionStatus; expanded: boolean;
  onToggle: () => void; onJoin: () => void; onSubmit: () => void;
}) => {
  const sc = statusConfig(currentStatus);
  const slotsPercent = Math.round((mission.slots.taken / mission.slots.total) * 100);

  // Generate a deterministic gradient based on mission title
  const gradients = [
    "from-primary/20 via-primary/10 to-muted",
    "from-stage-participation/20 via-stage-participation/10 to-muted",
    "from-stage-conversion/20 via-stage-conversion/10 to-muted",
    "from-stage-earnings/20 via-stage-earnings/10 to-muted",
    "from-stage-discovery/20 via-stage-discovery/10 to-muted",
    "from-stage-network/20 via-stage-network/10 to-muted",
  ];
  const gradientIdx = mission.title.length % gradients.length;

  return (
    <div className={`rounded-2xl border bg-card overflow-hidden transition-all ${
      mission.locked ? "opacity-40 border-border" :
      currentStatus === "approved" ? "border-stage-participation/30" :
      currentStatus === "joined" ? "border-primary/30" :
      "border-border"
    }`}>
      <button onClick={onToggle} className="w-full text-left">
        {/* Cover Photo */}
        <div className={`w-full h-20 bg-gradient-to-br ${gradients[gradientIdx]} relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm ${
              currentStatus === "approved" ? "bg-stage-participation/20 text-stage-participation" :
              currentStatus === "joined" ? "bg-primary/20 text-primary" :
              "bg-background/40 text-muted-foreground"
            }`}>
              {mission.locked ? <Lock className="w-5 h-5" /> : submissionTypeIcon(mission.submissionType)}
            </div>
          </div>
          {/* Brand pill overlay */}
          <div className="absolute bottom-2 left-2.5">
            <span className="px-2 py-0.5 rounded-md bg-background/70 backdrop-blur-sm text-[9px] font-bold text-foreground">{mission.brand}</span>
          </div>
          {/* Reward badge overlay */}
          <div className="absolute top-2 right-2.5 flex gap-1">
            {mission.reward && <span className="px-2 py-0.5 rounded-md bg-foreground/80 text-background text-[9px] font-black">{mission.reward}</span>}
            {mission.pointsReward && <span className="px-2 py-0.5 rounded-md bg-primary/90 text-primary-foreground text-[9px] font-black">{mission.pointsReward}pts</span>}
          </div>
          {/* Status indicator */}
          {currentStatus !== "open" && !mission.locked && (
            <div className="absolute top-2 left-2.5">
              <span className={`px-1.5 py-0.5 rounded-md text-[8px] font-bold ${sc.color}`}>{sc.label}</span>
            </div>
          )}
        </div>

        <div className="p-3">
          <div className="flex items-start gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                  mission.difficulty === "Easy" ? "bg-stage-participation/10 text-stage-participation" :
                  mission.difficulty === "Medium" ? "bg-stage-conversion/10 text-stage-conversion" :
                  "bg-stage-network/10 text-stage-network"
                }`}>{mission.difficulty}</span>
                <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{mission.type}</span>
                {mission.deadline && <span className="text-[9px] text-stage-conversion font-medium flex items-center gap-0.5"><Clock className="w-2.5 h-2.5" />{mission.deadline}</span>}
              </div>
              <p className="text-[13px] font-bold text-foreground leading-tight">{mission.title}</p>
            </div>
            <div className="flex-shrink-0 mt-1">
              {expanded ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
            </div>
          </div>

          {/* Slots bar */}
          {!mission.locked && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full transition-all ${slotsPercent > 80 ? "bg-destructive" : "bg-primary/40"}`} style={{ width: `${slotsPercent}%` }} />
              </div>
              <span className={`text-[9px] font-semibold ${slotsPercent > 80 ? "text-destructive" : "text-muted-foreground"}`}>
                {mission.slots.taken}/{mission.slots.total} slots
              </span>
            </div>
          )}
        </div>
      </button>

      {/* Expanded detail */}
      {expanded && !mission.locked && (
        <div className="px-3.5 pb-3.5 space-y-3 border-t border-border pt-3 expand-enter">
          <p className="text-[11px] text-muted-foreground leading-relaxed">{mission.description}</p>

          {/* Requirements */}
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

          {/* Submission type indicator */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-muted">
            <div className="w-7 h-7 rounded-lg bg-card flex items-center justify-center text-foreground">
              {submissionTypeIcon(mission.submissionType)}
            </div>
            <div>
              <p className="text-[10px] font-bold text-foreground">{submissionTypeLabel(mission.submissionType)}</p>
              <p className="text-[9px] text-muted-foreground">
                {mission.submissionType === "link" && "Paste your post URL after publishing"}
                {mission.submissionType === "screenshot" && "Upload a screenshot as proof"}
                {mission.submissionType === "upload" && "Upload your content file directly"}
                {mission.submissionType === "referral" && "Share your unique referral link"}
                {mission.submissionType === "review" && "Write and submit your review in-app"}
                {mission.submissionType === "checkin" && "Check in at the event location"}
              </p>
            </div>
          </div>

          {/* Status-aware CTA */}
          <div className="flex gap-2">
            {currentStatus === "open" && (
              <button onClick={(e) => { e.stopPropagation(); onJoin(); }} className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold text-center transition-all active:scale-[0.97]">
                Join Mission · Claim Slot
              </button>
            )}
            {currentStatus === "joined" && (
              <button onClick={(e) => { e.stopPropagation(); onSubmit(); }} className="flex-1 py-2.5 rounded-xl bg-stage-conversion text-white text-xs font-bold text-center transition-all active:scale-[0.97]">
                {submissionTypeLabel(mission.submissionType)}
              </button>
            )}
            {currentStatus === "submitted" && (
              <div className="flex-1 py-2.5 rounded-xl bg-stage-onboarding/10 text-stage-onboarding text-xs font-bold text-center">
                Submitted · Awaiting Review
              </div>
            )}
            {currentStatus === "in-review" && (
              <div className="flex-1 py-2.5 rounded-xl bg-stage-conversion/10 text-stage-conversion text-xs font-bold text-center flex items-center justify-center gap-1.5">
                <Eye className="w-3.5 h-3.5" /> Under Review
              </div>
            )}
            {currentStatus === "approved" && (
              <div className="flex-1 py-2.5 rounded-xl bg-stage-participation/10 text-stage-participation text-xs font-bold text-center flex items-center justify-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Approved · {mission.reward}{mission.pointsReward ? ` + ${mission.pointsReward}pts` : ""} Earned
              </div>
            )}
            {currentStatus === "rejected" && (
              <div className="flex-1 py-2.5 rounded-xl bg-destructive/10 text-destructive text-xs font-bold text-center">
                Rejected · Resubmit allowed
              </div>
            )}
          </div>

          {/* Flow indicator */}
          <div className="flex items-center justify-between">
            {(["open", "joined", "submitted", "in-review", "approved"] as MissionStatus[]).map((step, i) => {
              const stepLabels = ["Open", "Joined", "Submitted", "Review", "Approved"];
              const isActive = (["open", "joined", "submitted", "in-review", "approved"] as MissionStatus[]).indexOf(currentStatus) >= i;
              return (
                <div key={step} className="flex items-center gap-0.5">
                  {i > 0 && <div className={`w-3 h-[1.5px] ${isActive ? "bg-primary" : "bg-border"}`} />}
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {isActive && i <= (["open", "joined", "submitted", "in-review", "approved"] as MissionStatus[]).indexOf(currentStatus) ? <Check className="w-2.5 h-2.5" /> : <span className="text-[7px] font-bold">{i + 1}</span>}
                  </div>
                  <span className={`text-[7px] font-semibold ml-0.5 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{stepLabels[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const EarningsRow = ({ label, amount }: { label: string; amount: string }) => (
  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-muted/60 border border-border">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-xs font-bold text-foreground">{amount}</span>
  </div>
);

const SocialPost = ({ author, time, content, likes, comments, reposts, hasImage, productTag, onProductClick, isBrand, verified, badge }: {
  author: string; time: string; content: string; likes: number; comments: number; reposts?: number; hasImage?: boolean; productTag?: string; onProductClick?: () => void; isBrand?: boolean; verified?: boolean; badge?: string;
}) => (
  <div className="rounded-2xl border border-border bg-card p-3.5 space-y-2.5">
    <div className="flex items-center gap-2.5">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBrand ? "bg-primary/10" : "bg-muted"}`}>
        {isBrand ? <Zap className="w-3.5 h-3.5 text-primary" /> : <span className="text-[10px] font-bold text-foreground">{author.charAt(0)}</span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <p className="text-xs font-bold text-foreground truncate">{author}</p>
          {(isBrand || verified) && <Check className="w-3 h-3 text-primary flex-shrink-0" />}
        </div>
        <div className="flex items-center gap-1.5">
          <p className="text-[10px] text-muted-foreground">{time}</p>
          {badge && (
            <span className="px-1.5 py-0 rounded-full bg-stage-earnings/10 text-stage-earnings text-[8px] font-bold">{badge}</span>
          )}
        </div>
      </div>
    </div>
    <p className="text-xs text-foreground leading-relaxed">{content}</p>
    {hasImage && (
      <div className="h-36 rounded-xl bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent" />
        {productTag && (
          <button onClick={onProductClick} className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-card/90 backdrop-blur text-[10px] font-bold text-foreground border border-border flex items-center gap-1">
            <ShoppingBag className="w-3 h-3" /> {productTag}
          </button>
        )}
      </div>
    )}
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
        <Heart className="w-3.5 h-3.5" />
        <span className="text-[10px] font-medium">{likes}</span>
      </button>
      <button className="flex items-center gap-1 text-muted-foreground">
        <MessageCircle className="w-3.5 h-3.5" />
        <span className="text-[10px] font-medium">{comments}</span>
      </button>
      {reposts !== undefined && (
        <button className="flex items-center gap-1 text-muted-foreground">
          <Repeat2 className="w-3.5 h-3.5" />
          <span className="text-[10px] font-medium">{reposts}</span>
        </button>
      )}
      <div className="flex items-center gap-2 ml-auto">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Bookmark className="w-3.5 h-3.5" />
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
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

/* ═══════ SHARE STOREFRONT ═══════ */
export const ShareStorefrontScreen = ({ onBack }: { onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  const link = "luup.app/alexrivera";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center active:scale-95 transition-transform">
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <p className="font-display font-bold text-base text-foreground flex-1">Share Storefront</p>
      </div>

      <div className="px-5 space-y-5 pb-6">
        {/* QR Code Card */}
        <div className="rounded-2xl bg-card border border-border p-6 flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <QrCode className="w-5 h-5 text-primary" />
          </div>
          <p className="font-display font-bold text-sm text-foreground">Scan to visit my storefront</p>

          {/* Simulated QR Code */}
          <div className="w-44 h-44 bg-foreground rounded-2xl p-3 relative">
            <div className="w-full h-full bg-background rounded-lg relative overflow-hidden">
              {/* QR pattern simulation */}
              <div className="absolute inset-2 grid grid-cols-9 grid-rows-9 gap-[2px]">
                {Array.from({ length: 81 }).map((_, i) => {
                  const row = Math.floor(i / 9);
                  const col = i % 9;
                  const isCorner = (row < 3 && col < 3) || (row < 3 && col > 5) || (row > 5 && col < 3);
                  const isFilled = isCorner || Math.random() > 0.45;
                  return (
                    <div
                      key={i}
                      className={`rounded-[1px] ${isFilled ? "bg-foreground" : "bg-transparent"}`}
                    />
                  );
                })}
              </div>
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                  <span className="font-display font-black text-[10px] text-primary-foreground">L</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground">Anyone can scan this to see your storefront</p>
        </div>

        {/* Link Section */}
        <div className="rounded-2xl bg-card border border-border p-4 space-y-3">
          <p className="font-display font-bold text-xs text-foreground">Your Storefront Link</p>
          <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2.5">
            <Link className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-[12px] font-semibold text-foreground flex-1 truncate">{link}</span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold flex items-center gap-1 active:scale-95 transition-transform"
            >
              {copied ? <><Check className="w-3 h-3" /> Copied!</> : <><Copy className="w-3 h-3" /> Copy</>}
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="rounded-2xl bg-card border border-border p-4 space-y-3">
          <p className="font-display font-bold text-xs text-foreground">Share via</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Instagram", emoji: "📸" },
              { label: "TikTok", emoji: "🎵" },
              { label: "WhatsApp", emoji: "💬" },
              { label: "X / Twitter", emoji: "𝕏" },
            ].map((s) => (
              <button key={s.label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-muted border border-border active:scale-95 transition-transform">
                <span className="text-lg">{s.emoji}</span>
                <span className="text-[8px] font-bold text-muted-foreground">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Download QR */}
        <button className="w-full rounded-xl border border-border bg-card py-3 font-bold text-xs text-foreground flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <Download className="w-4 h-4 text-primary" /> Download QR Code
        </button>
      </div>
    </div>
  );
};
