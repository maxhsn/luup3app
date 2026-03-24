import { useState } from "react";
import {
  Search, Home, ShoppingBag, Trophy, User, Heart, Star, MapPin,
  ChevronRight, Bell, MessageCircle, Flame, Gift, TrendingUp,
  Share2, Plus, Check, ArrowLeft, Wallet, Send, ThumbsUp,
  Camera, Image, CreditCard, Package, Shield, ChevronDown,
  Crown, Zap, Eye, BookOpen, Settings, LogOut, X, Bot,
  Bookmark, Repeat2, Award, Hash, TrendingDown, Users, Video,
  Link, ImageIcon, Upload, UserPlus, PenLine, MapPinIcon, Clock, Lock, ChevronUp, CircleDot
} from "lucide-react";
import { type EcosystemData, type MissionData, type MissionSubmissionType, type MissionStatus, ecosystems } from "./ecosystemData";

export type Screen =
  | "start" | "home" | "explore" | "missions" | "store" | "profile"
  | "product" | "storefront" | "wallet" | "leaderboard"
  | "social" | "brand" | "checkout" | "notifications"
  | "order-confirm";

/* ═══════ START / ECOSYSTEM SELECT ═══════ */
export const StartScreen = ({ onSelectEcosystem }: { onSelectEcosystem: (id: string) => void }) => (
  <div className="px-5 py-6 space-y-5 min-h-[620px] flex flex-col">
    <div className="text-center space-y-2 pt-4">
      <div className="w-14 h-14 rounded-2xl bg-primary mx-auto flex items-center justify-center">
        <span className="text-2xl font-display font-black text-primary-foreground">L</span>
      </div>
      <p className="font-display font-black text-xl text-foreground">Welcome to LUUP</p>
      <p className="text-xs text-muted-foreground leading-relaxed">Choose your ecosystem to get started</p>
    </div>

    <div className="flex-1 space-y-2.5">
      {ecosystems.map((eco) => (
        <button
          key={eco.id}
          onClick={() => onSelectEcosystem(eco.id)}
          className="w-full flex items-center gap-3 p-3.5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all text-left group"
        >
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${eco.color}`}>
            {eco.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-sm text-foreground">{eco.label}</p>
            <p className="text-[11px] text-muted-foreground">{eco.brands[0]?.name}, {eco.brands[1]?.name}, {eco.brands[2]?.name}...</p>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      ))}
    </div>

    <p className="text-[10px] text-muted-foreground text-center pb-2">More ecosystems coming soon</p>
  </div>
);

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

      {/* ── Hero Earnings Card with Activity Ring ── */}
      <button onClick={() => onNavigate("wallet")}
        className="w-full rounded-[20px] bg-foreground p-4 text-background relative overflow-hidden active:scale-[0.98] transition-transform group">
        {/* Decorative circles */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-background/[0.03]" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-background/[0.03]" />
        <div className="relative z-10 flex items-center gap-3.5">
          {/* Activity ring as visual anchor */}
          <div className="relative flex-shrink-0">
            <ActivityRing progress={72} size={56} stroke={5} color="hsl(var(--primary))" bgColor="hsla(0,0%,100%,0.1)" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-[10px] font-medium opacity-40 uppercase tracking-wider">Total Earnings</p>
            <p className="font-display font-black text-[28px] leading-none tracking-tight">{ecosystem.walletBalance}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-stage-participation/20 text-stage-participation text-[9px] font-bold">
                <TrendingUp className="w-2.5 h-2.5" />{ecosystem.walletGrowth}
              </span>
              <span className="text-[9px] opacity-30">this month</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 opacity-20 group-hover:opacity-40 transition-opacity flex-shrink-0" />
        </div>
      </button>

      {/* ── Stats Bento Grid ── */}
      <div className="grid grid-cols-3 gap-2">
        <button onClick={() => onNavigate("missions")}
          className="rounded-2xl bg-card border border-border p-3 text-left active:scale-[0.97] transition-transform">
          <div className="w-7 h-7 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
            <Flame className="w-3.5 h-3.5 text-primary" />
          </div>
          <p className="font-display font-black text-lg leading-none text-foreground">{missionsComplete}</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Missions</p>
        </button>
        <button onClick={() => onNavigate("leaderboard")}
          className="rounded-2xl bg-card border border-border p-3 text-left active:scale-[0.97] transition-transform">
          <div className="w-7 h-7 rounded-xl bg-stage-earnings/10 flex items-center justify-center mb-2">
            <Trophy className="w-3.5 h-3.5 text-stage-earnings" />
          </div>
          <p className="font-display font-black text-lg leading-none text-foreground">#12</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Rank</p>
        </button>
        <button onClick={() => onNavigate("profile")}
          className="rounded-2xl bg-card border border-border p-3 text-left active:scale-[0.97] transition-transform">
          <div className="w-7 h-7 rounded-xl bg-stage-participation/10 flex items-center justify-center mb-2">
            <Users className="w-3.5 h-3.5 text-stage-participation" />
          </div>
          <p className="font-display font-black text-lg leading-none text-foreground">14</p>
          <p className="text-[9px] text-muted-foreground font-medium mt-0.5">Referrals</p>
        </button>
      </div>

      {/* ── Progress Widget (double-wide) ── */}
      <div className="grid grid-cols-5 gap-2">
        <button onClick={() => onNavigate("missions")}
          className="col-span-3 rounded-2xl bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/15 p-3.5 text-left active:scale-[0.98] transition-transform">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold text-foreground">Weekly Progress</p>
            <span className="text-[9px] font-bold text-primary">{missionProgress}%</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="relative flex-shrink-0">
              <ActivityRing progress={missionProgress} size={40} stroke={4} color="hsl(var(--primary))" bgColor="hsl(var(--border))" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-black text-foreground">{missionsComplete}/{missionsTotal}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              {ecosystem.activeMissions.slice(0, 2).map((m) => (
                <div key={m.title} className="flex items-center gap-1.5">
                  <div className="w-full h-1.5 rounded-full bg-border">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${m.progress}%` }} />
                  </div>
                  <span className="text-[8px] font-bold text-muted-foreground flex-shrink-0">{m.progress}%</span>
                </div>
              ))}
            </div>
          </div>
        </button>

        <button onClick={() => onNavigate("profile")}
          className="col-span-2 rounded-2xl bg-gradient-to-br from-stage-conversion/8 to-stage-earnings/5 border border-stage-conversion/15 p-3.5 text-left active:scale-[0.98] transition-transform flex flex-col justify-between">
          <div className="w-7 h-7 rounded-xl bg-stage-conversion/10 flex items-center justify-center">
            <Share2 className="w-3.5 h-3.5 text-stage-conversion" />
          </div>
          <div className="mt-auto">
            <p className="font-display font-black text-lg leading-none text-foreground">10%</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">Referral rate</p>
          </div>
        </button>
      </div>

      {/* ── Active Missions ── */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-display font-bold text-[13px] text-foreground">Active Missions</p>
          <button onClick={() => onNavigate("missions")} className="text-[10px] text-primary font-bold">See all</button>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
          {ecosystem.activeMissions.slice(0, 3).map((m, i) => {
            const colors = ["from-primary/20 to-primary/5", "from-stage-participation/20 to-stage-participation/5", "from-stage-conversion/20 to-stage-conversion/5"];
            return (
              <button key={m.title} onClick={() => onNavigate("missions")}
                className="flex-shrink-0 w-[140px] rounded-2xl bg-card border border-border overflow-hidden text-left active:scale-[0.97] transition-transform">
                <div className={`w-full h-16 bg-gradient-to-br ${colors[i % colors.length]} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame className="w-5 h-5 text-primary/40" />
                  </div>
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-foreground/80 text-background text-[8px] font-black">{m.reward}</div>
                </div>
                <div className="p-2.5">
                  <p className="text-[10px] font-bold text-foreground truncate leading-tight">{m.title}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex-1 h-1 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${m.progress}%` }} />
                    </div>
                    <span className="text-[8px] font-bold text-muted-foreground">{m.progress}%</span>
                  </div>
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
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
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

/* ═══════ SOCIAL FEED (TAB) ═══════ */
export const ExploreScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => {
  const [feedTab, setFeedTab] = useState<"trending" | "following" | "challenges">("trending");
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display font-bold text-lg text-foreground">Social</p>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Story-style row */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-1">
        {[
          { name: "Your Story", isYou: true },
          { name: "Sarah M.", hasNew: true, live: false },
          { name: "Mike T.", hasNew: true, live: true },
          { name: "Jess K.", hasNew: false, live: false },
          { name: "LUUP", hasNew: true, live: false, isBrand: true },
          { name: "Jake S.", hasNew: true, live: false },
        ].map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-1.5 flex-shrink-0 relative">
            <div className={`w-16 h-16 rounded-full p-[3px] ${
              s.isYou ? "" :
              s.hasNew ? "bg-gradient-to-tr from-primary to-primary/60" : ""
            }`}>
              <div className={`w-full h-full rounded-full flex items-center justify-center ${
                s.isYou ? "border-[2.5px] border-dashed border-muted-foreground/30 bg-muted" :
                s.hasNew ? "bg-card ring-[2.5px] ring-card" : "bg-muted ring-2 ring-border"
              }`}>
                {s.isYou ? <Plus className="w-5 h-5 text-muted-foreground/50" /> :
                 s.isBrand ? <Zap className="w-5 h-5 text-primary" /> :
                 <div className="w-full h-full rounded-full bg-muted-foreground/10" />}
              </div>
            </div>
            {s.live && (
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-1.5 py-0 rounded-sm bg-destructive text-[7px] font-bold text-destructive-foreground uppercase tracking-wide z-10">Live</span>
            )}
            <span className="text-[10px] text-muted-foreground font-medium truncate w-16 text-center">{s.name}</span>
          </div>
        ))}
      </div>

      {/* Create Post Prompt */}
      <button className="w-full flex items-center gap-3 p-3 rounded-2xl border border-border bg-card">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-xs font-bold text-primary">A</span>
        </div>
        <span className="text-xs text-muted-foreground flex-1 text-left">Share your latest gear, training, or win...</span>
        <div className="flex gap-1.5">
          <Camera className="w-4 h-4 text-muted-foreground" />
          <Video className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>

      {/* Feed Tabs */}
      <div className="flex gap-1 bg-muted rounded-xl p-1">
        {(["trending", "following", "challenges"] as const).map((t) => (
          <button key={t} onClick={() => setFeedTab(t)} className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${feedTab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Trending Topics Bar */}
      {feedTab === "trending" && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {["#GearReview", "#TrainHard", "#LUUPGold", "#FightWeek", "#NewDrop"].map((tag) => (
            <span key={tag} className="flex-shrink-0 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">{tag}</span>
          ))}
        </div>
      )}

      {/* Posts */}
      {feedTab === "trending" && (
        <div className="space-y-3">
          <SocialPost
            author="Sarah Martinez"
            time="2h ago"
            content="Just finished sparring with my new Venum Challenger 3.0 gloves! The wrist support is unreal — 10/10 for heavy bag work."
            likes={42}
            comments={8}
            reposts={6}
            hasImage
            productTag="Venum Challenger 3.0"
            onProductClick={() => onNavigate("product")}
            verified
          />
          <SocialPost
            author="Mike Torres"
            time="5h ago"
            content="Week 3 of the #TrainHard challenge — loving the Hayabusa T3s. Best investment I've made. Who else is on this mission?"
            likes={89}
            comments={15}
            reposts={12}
            hasImage
            badge="Top Contributor"
          />

          {/* Challenge Card */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground">Community Challenge</p>
                <p className="text-[10px] text-muted-foreground">Share your training setup</p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-stage-participation/10 text-stage-participation text-[9px] font-bold">3 days left</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-card" />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground">247 participants</span>
              <button className="ml-auto px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-bold">Join</button>
            </div>
          </div>

          <SocialPost
            author="LUUP Official"
            time="1d ago"
            content="New mission drop! Share your favourite gear setup and earn $25. Tag #LUUPGear to get started."
            likes={234}
            comments={47}
            reposts={31}
            isBrand
          />
          <SocialPost
            author="Jess Kim"
            time="2d ago"
            content="Just hit Gold tier on LUUP!! The rewards just keep getting better. If you haven't joined yet, use my code: JESS-LUUP"
            likes={156}
            comments={23}
            reposts={8}
            badge="Gold Ambassador"
          />
        </div>
      )}

      {feedTab === "following" && (
        <div className="space-y-3">
          <SocialPost
            author="Jake Shields"
            time="1h ago"
            content="New product added to my storefront — the Sanabul Essential series. Great value for beginners and my recommended starter set."
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
            time="4h ago"
            content="Morning pad work done. Nothing beats starting the day with 6 rounds on the mitts."
            likes={67}
            comments={5}
            reposts={2}
            hasImage
          />
        </div>
      )}

      {feedTab === "challenges" && (
        <div className="space-y-3">
          {[
            { title: "30-Day Training Streak", participants: 1247, reward: "$50", daysLeft: 18, progress: 40 },
            { title: "Share Your Setup", participants: 247, reward: "$25", daysLeft: 3, progress: 0 },
            { title: "Refer 5 Friends", participants: 892, reward: "$100", daysLeft: 12, progress: 60 },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">{c.title}</p>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-bold">{c.reward}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>{c.participants.toLocaleString()} joined</span>
                <span className="text-muted-foreground/40">·</span>
                <span>{c.daysLeft} days left</span>
              </div>
              {c.progress > 0 && (
                <div>
                  <div className="h-1.5 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${c.progress}%` }} />
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-1">Your progress: {c.progress}%</p>
                </div>
              )}
              <button className="w-full py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold">
                {c.progress > 0 ? "Continue" : "Join Challenge"}
              </button>
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
      <div className="grid grid-cols-4 gap-1.5">
        {[
          { label: "Open", count: ecosystem.missions.filter(m => getStatus(m) === "open" && !m.locked).length, color: "bg-muted text-muted-foreground" },
          { label: "Joined", count: ecosystem.missions.filter(m => getStatus(m) === "joined").length, color: "bg-primary/10 text-primary" },
          { label: "In Review", count: ecosystem.missions.filter(m => ["submitted", "in-review"].includes(getStatus(m))).length, color: "bg-stage-conversion/10 text-stage-conversion" },
          { label: "Approved", count: completedCount, color: "bg-stage-participation/10 text-stage-participation" },
        ].map(p => (
          <div key={p.label} className={`rounded-xl p-2 text-center ${p.color}`}>
            <p className="font-display font-black text-lg leading-none">{p.count}</p>
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
      <div className="space-y-2.5">
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
      <div className="space-y-1">
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

/* ═══════ LEADERBOARD ═══════ */
export const LeaderboardScreen = ({ onBack, ecosystem }: { onBack: () => void; ecosystem: EcosystemData }) => {
  const [period, setPeriod] = useState<"week" | "month" | "all">("week");
  return (
    <div className="px-5 py-4 space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div>
          <p className="font-display font-bold text-lg text-foreground">Leaderboard</p>
          <p className="text-[10px] text-muted-foreground">{ecosystem.emoji} {ecosystem.label}</p>
        </div>
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

/* ═══════ SOCIAL WALL / COMMUNITY ═══════ */
export const SocialWallScreen = ({ onNavigate, onBack }: { onNavigate: (s: Screen) => void; onBack: () => void }) => {
  const [activeChannel, setActiveChannel] = useState("general");
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
          <button className="flex-1 bg-primary text-primary-foreground rounded-xl py-2.5 font-bold text-xs">Follow Brand</button>
          <button className="flex-1 border border-border rounded-xl py-2.5 font-bold text-xs text-foreground">Join Community</button>
        </div>

        <div className="flex border-b border-border">
          {(["products", "missions", "social", "community"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2.5 text-xs font-semibold capitalize transition-all border-b-2 ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}>
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
            {[
              { id: "bm1", title: "Share Venum gear photo", brand: "Venum", reward: "$15", type: "Social", submissionType: "link" as MissionSubmissionType, difficulty: "Easy" as const, status: "open" as MissionStatus, slots: { taken: 20, total: 30 }, description: "Post a photo with Venum gear.", requirements: ["Tag @venum", "Public post"] },
              { id: "bm2", title: "Review any Venum product", brand: "Venum", reward: "$10", type: "Review", submissionType: "review" as MissionSubmissionType, difficulty: "Easy" as const, status: "open" as MissionStatus, slots: { taken: 8, total: 15 }, description: "Write a detailed product review.", requirements: ["200+ words", "Include photos"] },
              { id: "bm3", title: "Create a training video", brand: "Venum", reward: "$25", type: "Content", submissionType: "upload" as MissionSubmissionType, difficulty: "Medium" as const, status: "open" as MissionStatus, slots: { taken: 3, total: 10 }, description: "Film a training session with Venum gear.", requirements: ["30-60 seconds", "Gear visible"] },
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
        <div className="space-y-2">
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
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
            {["Hayabusa T3", "Sanabul Gloves", "Venum Elite"].map((n) => (
              <div key={n} className="flex-shrink-0 w-[100px] rounded-xl border border-border bg-card p-2">
                <div className="aspect-square rounded-lg bg-muted mb-1.5" />
                <p className="text-[10px] font-bold text-foreground truncate">{n}</p>
              </div>
            ))}
          </div>
        </div>

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

    <button onClick={() => onNavigate("wallet")} className="w-full rounded-2xl bg-gradient-to-r from-stage-earnings/10 to-primary/10 border border-stage-earnings/20 p-3 flex items-center gap-3 text-left">
      <Crown className="w-5 h-5 text-stage-earnings" />
      <div className="flex-1">
        <p className="text-xs font-bold text-foreground">Silver Scout Ambassador</p>
        <p className="text-[10px] text-muted-foreground">1,750 XP to Gold · Unlock 15% commission</p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
    </button>

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
      <div className="flex gap-2 mt-3">
        {["WhatsApp", "Instagram", "TikTok"].map((p) => (
          <button key={p} className="flex-1 py-1.5 rounded-lg bg-muted text-[10px] font-semibold text-foreground border border-border">{p}</button>
        ))}
      </div>
    </div>

    <div>
      <p className="font-display font-bold text-sm text-foreground mb-2">Earnings Breakdown</p>
      <div className="space-y-2">
        <EarningsRow label="Direct Sales Commission" amount="$542.00" />
        <EarningsRow label="Referral Earnings (Tier 1)" amount="$318.40" />
        <EarningsRow label="Network Earnings (Tier 2-4)" amount="$247.40" />
        <EarningsRow label="Mission Rewards" amount="$140.00" />
      </div>
    </div>

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
    <div className="w-8 h-8 rounded-lg bg-muted flex-shrink-0" />
    <div className="flex-1 min-w-0">
      <p className="text-xs font-bold text-foreground truncate">{title}</p>
      <div className="h-1.5 rounded-full bg-muted mt-1.5">
        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
      </div>
    </div>
    <span className="text-xs font-bold text-primary flex-shrink-0">{reward}</span>
  </div>
);

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
          <div className="absolute top-2 right-2.5">
            <span className="px-2 py-0.5 rounded-md bg-foreground/80 text-background text-[9px] font-black">{mission.reward}</span>
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
        <div className="px-3.5 pb-3.5 space-y-3 border-t border-border pt-3">
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
                <Check className="w-3.5 h-3.5" /> Approved · {mission.reward} Earned
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
