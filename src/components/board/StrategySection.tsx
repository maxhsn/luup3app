import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";

const StrategySection = () => {
  const [activeArch, setActiveArch] = useState(1);

  return (
    <div className="space-y-8">
      {/* Hero Row */}
      <div className="grid grid-cols-12 gap-5">
        {/* Main hero - large white card */}
        <div className="col-span-5 bento-card p-12 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          <DotGrid rows={6} cols={8} pattern="triangle" color="hsl(var(--primary))" className="absolute top-8 right-8 opacity-60" />
          <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center">
            <span className="text-background font-black text-xl">L</span>
          </div>
          <div className="relative z-10">
            <h1 className="text-[3.5rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              The operating<br />system for<br />community<br />commerce.
            </h1>
          </div>
        </div>

        {/* Blue card with dot pattern */}
        <div className="col-span-4 bento-card-accent p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          <DotGrid rows={10} cols={10} pattern="scatter" color="hsl(var(--primary-foreground))" size={5} gap={16} className="absolute inset-0 m-auto opacity-30" />
          <p className="text-base text-primary-foreground/80 leading-relaxed relative z-10 max-w-[280px]">
            Not just affiliate, not just influencer, not just loyalty — where brands, customers, creators, and communities converge.
          </p>
          <div className="relative z-10">
            <span className="tag !bg-primary-foreground/20 !text-primary-foreground">Platform v3.0</span>
          </div>
        </div>

        {/* Dark card */}
        <div className="col-span-3 bg-foreground rounded-[1.25rem] p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          <DotGrid rows={5} cols={5} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-30" />
          <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
            <span className="text-background font-bold text-sm">∞</span>
          </div>
          <div>
            <h3 className="text-2xl font-display font-black text-background tracking-tight leading-tight">
              Community<br />Commerce<br />Engine
            </h3>
            <p className="text-sm text-background/50 mt-3">
              Smarter strategies for the next generation of brand growth.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-12 gap-5">
        {/* What is LUUP? - Blue card */}
        <div className="col-span-4 bento-card-accent p-10 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={8} pattern="full" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute bottom-6 left-8 opacity-20" />
          <h3 className="text-[2.5rem] font-display font-black text-primary-foreground tracking-tight leading-[1.05] relative z-10">
            What is<br />LUUP?
          </h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed relative z-10 max-w-[300px]">
            Network that connects brands, communities, and creators into one seamless ecosystem, empowering users to access commerce without relying on traditional intermediaries.
          </p>
        </div>

        {/* Growth chart card */}
        <div className="col-span-5 bento-card p-10 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="tag-accent">2025</span>
            <h3 className="text-[2.5rem] font-display font-black text-foreground tracking-tight">Next gen.</h3>
          </div>
          <DotGrid rows={8} cols={16} pattern="chart" color="hsl(var(--primary))" size={5} gap={14} className="mx-auto my-4" />
        </div>

        {/* Future card */}
        <div className="col-span-3 bento-card p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="tag-accent">2026</span>
          </div>
          <div>
            <h3 className="text-[2rem] font-display font-black text-foreground tracking-tight leading-tight">Future<br />Ready.</h3>
            <DotGrid rows={4} cols={6} pattern="wave" color="hsl(var(--muted-foreground))" size={4} gap={10} className="mt-4 opacity-40" />
          </div>
        </div>
      </div>

      {/* Metric Counters */}
      <div className="grid grid-cols-4 gap-5">
        {[
          { value: "6", label: "Participant Types", sub: "Brand → Side Hustler" },
          { value: "20", label: "Core Features", sub: "MVP Product Stack" },
          { value: "6+", label: "Vertical Ecosystems", sub: "Niche worlds" },
          { value: "4", label: "Referral Tiers", sub: "Network earnings" },
        ].map((m) => (
          <div key={m.label} className="bento-card p-8 group hover:shadow-lg transition-shadow duration-300">
            <span className="text-sm text-muted-foreground font-medium">{m.label}</span>
            <div className="mt-6">
              <span className="text-7xl font-display font-black tracking-[-0.06em] text-foreground leading-none group-hover:text-primary transition-colors duration-300">{m.value}</span>
              <p className="text-sm text-muted-foreground mt-3">{m.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vision Section */}
      <BoardSection title="Vision & Core Strategic Shift" number="01" tag="Strategy">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8 bento-card p-12 flex flex-col gap-8 relative overflow-hidden">
            <DotGrid rows={4} cols={20} pattern="wave" color="hsl(var(--primary))" size={3} gap={10} className="opacity-15" />
            <h3 className="text-[2.8rem] font-display font-black tracking-[-0.04em] leading-[1.05] text-foreground max-w-[600px]">
              LUUP is the operating system for community commerce.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[520px]">
              One networked platform with multiple vertical worlds inside — where brands, customers, creators, and communities converge.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Unified journeys", "Network effects", "One dashboard", "Clear messaging"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-5">
            <div className="bento-card-accent p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
              <DotGrid rows={3} cols={4} pattern="full" color="hsl(var(--primary-foreground))" size={5} gap={16} className="absolute top-6 right-6 opacity-25" />
              <span className="text-xs font-mono text-primary-foreground/50">STRATEGIC SHIFT</span>
              <h3 className="text-xl font-display font-bold text-primary-foreground leading-snug mt-4">
                From separate products → one networked platform.
              </h3>
            </div>
            <div className="bg-foreground rounded-[1.25rem] p-8 flex-1 flex flex-col justify-between">
              <span className="text-xs font-mono text-background/40">POSITION</span>
              <div>
                <h3 className="text-xl font-display font-bold text-background leading-snug">
                  "LUUP turns communities into commerce"
                </h3>
                <p className="text-sm text-background/50 mt-2">
                  Every person becomes part of commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Architecture - Interactive */}
      <BoardSection title="Platform Architecture" number="02" tag="Architecture">
        <div className="grid grid-cols-12 gap-5">
          {/* Layer selector */}
          <div className="col-span-4 flex flex-col gap-3">
            {[
              { id: 0, layer: "Consumer Layer", label: "LUUP App", icon: "📱" },
              { id: 1, layer: "Merchant Layer", label: "LUUP Activate", icon: "🏪" },
              { id: 2, layer: "Ecosystem Layer", label: "Vertical Worlds", icon: "🌍" },
            ].map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveArch(col.id)}
                className={`text-left p-6 rounded-[1.25rem] border transition-all duration-300 ${
                  activeArch === col.id
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{col.icon}</span>
                  <div>
                    <span className={`text-xs font-mono ${activeArch === col.id ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>{col.layer}</span>
                    <h4 className={`text-xl font-display font-extrabold tracking-tight ${activeArch === col.id ? 'text-primary-foreground' : 'text-foreground'}`}>{col.label}</h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="col-span-8 bento-card p-10 relative overflow-hidden min-h-[320px]">
            <DotGrid rows={6} cols={10} pattern="scatter" color="hsl(var(--primary))" size={4} gap={16} className="absolute top-6 right-6 opacity-10" />
            {activeArch === 0 && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-display font-black text-foreground tracking-tight">LUUP App</h3>
                <p className="text-base text-muted-foreground mt-2 mb-8">The consumer-facing mobile experience</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Profile & identity", "Follow brands", "Join communities", "Browse ecosystems", "Missions & earn", "Personal storefronts", "Wall feed"].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeArch === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-display font-black text-foreground tracking-tight">LUUP Activate</h3>
                <p className="text-base text-muted-foreground mt-2 mb-8">The merchant operating system</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Dashboard & OS", "Commissions", "Create missions", "Recruitment", "Analytics", "Ecosystem placement", "UGC management"].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeArch === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-display font-black text-foreground tracking-tight">Vertical Worlds</h3>
                <p className="text-base text-muted-foreground mt-2 mb-8">Niche ecosystems driving discovery</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: "Combat Market", icon: "🥊" },
                    { name: "FanDraft", icon: "⚽" },
                    { name: "RoxNation", icon: "🎸" },
                    { name: "PetSpace", icon: "🐾" },
                    { name: "Superminds", icon: "🧠" },
                    { name: "WanderWorld", icon: "✈️" },
                  ].map((eco) => (
                    <div key={eco.name} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors cursor-default">
                      <span className="text-xl">{eco.icon}</span>
                      <span className="text-sm font-bold text-foreground">{eco.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </BoardSection>

      {/* Participant Model */}
      <BoardSection title="Participant Model" number="03" tag="Users">
        <div className="grid grid-cols-12 gap-5">
          {[
            { icon: "🏪", name: "Brands", desc: "Recruit customers, generate UGC, drive sales", cols: "col-span-4", dark: false },
            { icon: "🛒", name: "Customers", desc: "Join communities, complete missions, share codes", cols: "col-span-4", dark: false },
            { icon: "🔗", name: "Affiliates", desc: "Recruit creators, 4-tier network earnings", cols: "col-span-4", dark: true },
            { icon: "⭐", name: "Influencers", desc: "Personal funnels, sub-influencer networks", cols: "col-span-4", dark: true },
            { icon: "🎨", name: "Creators", desc: "UGC missions, earn for content creation", cols: "col-span-4", dark: false },
            { icon: "🚀", name: "Side Hustlers", desc: "Share products, refer friends, recurring income", cols: "col-span-4", dark: false },
          ].map((p) => (
            <div
              key={p.name}
              className={`${p.cols} ${p.dark ? 'bg-foreground' : 'bento-card'} p-8 rounded-[1.25rem] flex flex-col gap-4 group hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
            >
              {p.dark && <DotGrid rows={3} cols={4} pattern="full" color="hsl(var(--background))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              <span className="text-4xl">{p.icon}</span>
              <h4 className={`text-2xl font-display font-black tracking-tight ${p.dark ? 'text-background' : 'text-foreground'}`}>{p.name}</h4>
              <p className={`text-sm leading-relaxed ${p.dark ? 'text-background/60' : 'text-muted-foreground'}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Pricing */}
      <BoardSection title="Commercial Pricing" number="04" tag="Revenue">
        <div className="grid grid-cols-12 gap-5">
          {[
            { name: "Lite", desc: "Basic onboarding. Community tools + simple commissions.", cols: "col-span-2", variant: "white" as const },
            { name: "Growth", desc: "Recruitment + missions + creator activation.", cols: "col-span-3", variant: "white" as const },
            { name: "Pro", desc: "Advanced segmentation, multiple funnels, priority support.", cols: "col-span-3", variant: "blue" as const },
            { name: "Ecosystem", desc: "Category discovery + featured positioning.", cols: "col-span-2", variant: "white" as const },
            { name: "Bespoke", desc: "White-label + enterprise.", cols: "col-span-2", variant: "dark" as const },
          ].map((t) => (
            <div
              key={t.name}
              className={`${t.cols} ${
                t.variant === "blue" ? "bento-card-accent" :
                t.variant === "dark" ? "bg-foreground rounded-[1.25rem]" :
                "bento-card"
              } p-8 flex flex-col gap-4 min-h-[200px] justify-between relative overflow-hidden`}
            >
              {t.variant === "dark" && <DotGrid rows={3} cols={3} pattern="full" color="hsl(var(--background))" size={4} gap={12} className="absolute top-6 right-6 opacity-20" />}
              <h4 className={`text-2xl font-display font-black tracking-tight ${
                t.variant === "dark" ? "text-background" :
                t.variant === "blue" ? "text-primary-foreground" :
                "text-foreground"
              }`}>{t.name}</h4>
              <p className={`text-sm leading-relaxed ${
                t.variant === "dark" ? "text-background/50" :
                t.variant === "blue" ? "text-primary-foreground/70" :
                "text-muted-foreground"
              }`}>{t.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
