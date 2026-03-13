import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";
import JourneyTree from "./JourneyTree";

const UserJourneySection = () => {
  const [activeRoute, setActiveRoute] = useState(0);

  const routes = [
    {
      icon: "🏪", name: "Brand-Led", desc: "Brands drive users into LUUP",
      tree: {
        label: "Entry Points", icon: "→", accent: true,
        children: [
          { label: "QR Codes", icon: "📱" },
          { label: "Email / SMS", icon: "📧" },
          { label: "Post-purchase", icon: "📦" },
          { label: "Packaging inserts", icon: "🏷️" },
          { label: "Joins community", icon: "✅", accent: true, description: "Missions, rewards, referrals" },
        ],
      },
    },
    {
      icon: "🌍", name: "Ecosystem-Led", desc: "Vertical worlds attract niche users",
      tree: {
        label: "Entry Points", icon: "→", accent: true,
        children: [
          { label: "Fighters & fans", icon: "🥊" },
          { label: "Gym owners", icon: "💪" },
          { label: "Side hustlers", icon: "🚀" },
          { label: "Discovers brands", icon: "✅", accent: true, description: "Joins through vertical context" },
        ],
      },
    },
    {
      icon: "🚀", name: "LUUP-Led", desc: "Platform-native acquisition",
      tree: {
        label: "Entry Points", icon: "→", accent: true,
        children: [
          { label: "Affiliates & creators", icon: "🔗" },
          { label: "Influencers", icon: "⭐" },
          { label: "Community leaders", icon: "👑" },
          { label: "Builds storefront", icon: "✅", accent: true, description: "4-tier network royalties" },
        ],
      },
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 bento-card p-12 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={10} pattern="wave" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-40" />
          <span className="tag-accent w-fit">Flywheel</span>
          <div>
            <h2 className="text-[3.2rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              The LUUP<br />Growth Loop.
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-[400px]">A 7-step flywheel driving compounding advocacy and network growth.</p>
          </div>
        </div>
        <div className="col-span-6 bento-card-accent p-10 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={12} cols={12} pattern="chart" color="hsl(var(--primary-foreground))" size={5} gap={14} className="absolute inset-0 m-auto opacity-25" />
          <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              { n: "01", title: "Discover", desc: "Find brands" },
              { n: "02", title: "Join", desc: "Enter community" },
              { n: "03", title: "Participate", desc: "Missions" },
              { n: "04", title: "Convert", desc: "First share" },
              { n: "05", title: "Earn", desc: "Commissions" },
              { n: "06", title: "Recruit", desc: "Invite others" },
              { n: "07", title: "Expand", desc: "Grow network" },
            ].map((step) => (
              <div key={step.n} className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <span className="text-lg font-display font-black text-primary-foreground/40">{step.n}</span>
                <div>
                  <p className="text-sm font-bold text-primary-foreground">{step.title}</p>
                  <p className="text-xs text-primary-foreground/50">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Onboarding Routes - Interactive */}
      <BoardSection title="Onboarding Routes" number="01" tag="Onboarding">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4 flex flex-col gap-3">
            {routes.map((route, i) => (
              <button
                key={route.name}
                onClick={() => setActiveRoute(i)}
                className={`text-left p-6 rounded-[1.25rem] border transition-all duration-300 ${
                  activeRoute === i
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{route.icon}</span>
                  <div>
                    <h4 className={`text-lg font-display font-extrabold tracking-tight ${activeRoute === i ? 'text-primary-foreground' : 'text-foreground'}`}>{route.name}</h4>
                    <p className={`text-xs mt-0.5 ${activeRoute === i ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{route.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="col-span-8 bento-card p-10 min-h-[280px] relative overflow-hidden">
            <DotGrid rows={4} cols={6} pattern="scatter" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeRoute}>
              <h3 className="text-2xl font-display font-black text-foreground tracking-tight mb-6">{routes[activeRoute].name} Onboarding</h3>
              <JourneyTree root={routes[activeRoute].tree} />
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Customer → Advocate */}
      <BoardSection title="Customer → Advocate Journey" number="02" tag="Pipeline">
        <div className="grid grid-cols-12 gap-5">
          {[
            { icon: "🛒", title: "Purchase", desc: "Buys via LUUP", cols: "col-span-2", variant: "white" as const },
            { icon: "📲", title: "Join", desc: "Tap to join", cols: "col-span-2", variant: "white" as const },
            { icon: "🎯", title: "First Mission", desc: "Share or review", cols: "col-span-2", variant: "blue" as const },
            { icon: "💰", title: "First Earning", desc: "Commission", cols: "col-span-2", variant: "white" as const },
            { icon: "👥", title: "Build", desc: "Recruit & grow", cols: "col-span-2", variant: "white" as const },
            { icon: "🏆", title: "Leader", desc: "4-tier royalties", cols: "col-span-2", variant: "dark" as const },
          ].map((step) => (
            <div key={step.title} className={`${step.cols} ${
              step.variant === "blue" ? "bento-card-accent" :
              step.variant === "dark" ? "bg-foreground rounded-[1.25rem]" :
              "bento-card"
            } p-6 flex flex-col items-center text-center gap-3 relative overflow-hidden`}>
              {step.variant === "dark" && <DotGrid rows={2} cols={3} pattern="full" color="hsl(var(--background))" size={3} gap={10} className="absolute top-3 right-3 opacity-20" />}
              <span className="text-3xl">{step.icon}</span>
              <p className={`text-base font-display font-bold tracking-tight ${
                step.variant === "dark" ? "text-background" :
                step.variant === "blue" ? "text-primary-foreground" :
                "text-foreground"
              }`}>{step.title}</p>
              <p className={`text-xs ${
                step.variant === "dark" ? "text-background/50" :
                step.variant === "blue" ? "text-primary-foreground/60" :
                "text-muted-foreground"
              }`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* 4-Tier Referral */}
      <BoardSection title="4-Tier Referral Structure" number="03" tag="Referral">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 bento-card-accent p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            <DotGrid rows={6} cols={8} pattern="triangle" color="hsl(var(--primary-foreground))" size={5} gap={14} className="absolute bottom-6 right-6 opacity-20" />
            <span className="text-xs font-mono text-primary-foreground/40">DIRECT SALES</span>
            <div>
              <span className="text-7xl font-display font-black text-primary-foreground tracking-[-0.06em]">100%</span>
              <p className="text-base text-primary-foreground/60 mt-2">Your own sales and commissions</p>
            </div>
          </div>
          {[
            { tier: "Tier 1", pct: "X%", desc: "From direct recruits" },
            { tier: "Tier 2", pct: "Y%", desc: "From recruits' recruits" },
            { tier: "Tier 3", pct: "Z%", desc: "Third-level network" },
          ].map((t, i) => (
            <div key={t.tier} className={`col-span-${i === 0 ? '3' : i === 1 ? '2' : '2'} bento-card p-8 flex flex-col justify-between min-h-[280px]`}>
              <span className="text-xs font-mono text-muted-foreground">{t.tier.toUpperCase()}</span>
              <div>
                <span className="text-5xl font-display font-black text-primary tracking-[-0.04em]">{t.pct}</span>
                <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* GTM */}
      <BoardSection title="Go-To-Market Beachheads" number="04" tag="GTM">
        <div className="grid grid-cols-12 gap-5">
          {[
            { icon: "🥊", name: "Combat Sports", desc: "Flagship ecosystem", cols: "col-span-4", variant: "blue" as const },
            { icon: "⚽", name: "Football Fandom", desc: "Sports merchandise", cols: "col-span-4", variant: "white" as const },
            { icon: "🧘", name: "Wellness", desc: "Health & mindfulness", cols: "col-span-4", variant: "dark" as const },
            { icon: "💪", name: "Fitness", desc: "Performance brands", cols: "col-span-3", variant: "white" as const },
            { icon: "🐾", name: "PetSpace", desc: "Pet communities", cols: "col-span-3", variant: "white" as const },
            { icon: "🎨", name: "Creator Retail", desc: "Creator-led commerce", cols: "col-span-3", variant: "blue" as const },
            { icon: "🎮", name: "Gaming", desc: "Coming soon", cols: "col-span-3", variant: "white" as const },
          ].map((b) => (
            <div key={b.name} className={`${b.cols} ${
              b.variant === "blue" ? "bento-card-accent" :
              b.variant === "dark" ? "bg-foreground rounded-[1.25rem]" :
              "bento-card"
            } p-8 flex flex-col gap-4 relative overflow-hidden group hover:shadow-lg transition-all duration-300`}>
              {b.variant === "dark" && <DotGrid rows={4} cols={5} pattern="full" color="hsl(var(--background))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              {b.variant === "blue" && <DotGrid rows={4} cols={5} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              <span className="text-3xl">{b.icon}</span>
              <h4 className={`text-xl font-display font-extrabold tracking-tight ${
                b.variant === "dark" ? "text-background" :
                b.variant === "blue" ? "text-primary-foreground" :
                "text-foreground"
              }`}>{b.name}</h4>
              <p className={`text-sm ${
                b.variant === "dark" ? "text-background/50" :
                b.variant === "blue" ? "text-primary-foreground/60" :
                "text-muted-foreground"
              }`}>{b.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default UserJourneySection;
