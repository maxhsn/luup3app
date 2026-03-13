import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";

const StrategySection = () => {
  const [activeShift, setActiveShift] = useState(0);

  const frictionPoints = [
    "Too many app decisions",
    "Split user journeys",
    "Fragmented network effects",
    "Unclear merchant onboarding",
    "Confusing brand messaging",
  ];

  const strengths = [
    "Club-style social brand participation",
    "Marketplace discovery",
    "Affiliate recruitment",
    "Influencer activation",
    "Personal commerce identity",
    "Multi-tier community economics",
    "Vertical ecosystem relevance",
  ];

  return (
    <div className="space-y-10">
      {/* Hero Row */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5 bento-card p-12 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
          <DotGrid rows={8} cols={10} pattern="triangle" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-60" />
          <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center">
            <span className="text-background font-black text-xl">L</span>
          </div>
          <div className="relative z-10">
            <h1 className="text-[3.2rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              The operating<br />system for<br />community<br />commerce.
            </h1>
          </div>
        </div>

        <div className="col-span-4 bento-card-accent p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
          <DotGrid rows={12} cols={12} pattern="scatter" color="hsl(var(--primary-foreground))" size={5} gap={16} className="absolute inset-0 m-auto opacity-25" />
          <p className="text-base text-primary-foreground/80 leading-relaxed relative z-10 max-w-[280px]">
            Not just an affiliate platform. Not just an influencer tool. Not just a loyalty layer. Not just a marketplace.
          </p>
          <div className="relative z-10">
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              LUUP is the platform where <strong className="text-primary-foreground">brands, customers, affiliates, influencers, creators, side hustlers, superfans, and ecosystem communities</strong> come together.
            </p>
            <span className="tag !bg-primary-foreground/20 !text-primary-foreground mt-4 inline-block">Platform v3.0</span>
          </div>
        </div>

        <div className="col-span-3 bg-foreground rounded-[1.25rem] p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
          <DotGrid rows={5} cols={5} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-30" />
          <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
            <span className="text-background font-bold text-sm">∞</span>
          </div>
          <div>
            <h3 className="text-2xl font-display font-black text-background tracking-tight leading-tight">
              One LUUP<br />App
            </h3>
            <p className="text-sm text-background/50 mt-3">
              Master network · ecosystems · brand communities · storefronts · referral networks · wallet & rewards
            </p>
          </div>
        </div>
      </div>

      {/* Second Row - What is LUUP + Chart */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4 bento-card-accent p-10 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={8} pattern="full" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute bottom-6 left-8 opacity-20" />
          <h3 className="text-[2.5rem] font-display font-black text-primary-foreground tracking-tight leading-[1.05] relative z-10">
            What is<br />LUUP?
          </h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed relative z-10 max-w-[300px]">
            LUUP is the platform where brands, customers, affiliates, influencers, creators, side hustlers, superfans, and ecosystem communities come together to drive discovery, participation, UGC, referrals, and measurable sales.
          </p>
        </div>

        <div className="col-span-5 bento-card p-10 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="tag-accent">2025</span>
            <h3 className="text-[2.5rem] font-display font-black text-foreground tracking-tight">Next gen.</h3>
          </div>
          <DotGrid rows={8} cols={16} pattern="chart" color="hsl(var(--primary))" size={5} gap={14} className="mx-auto my-4" />
        </div>

        <div className="col-span-3 bento-card p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
          <span className="tag-accent">2026</span>
          <div>
            <h3 className="text-[2rem] font-display font-black text-foreground tracking-tight leading-tight">Future<br />Ready.</h3>
            <DotGrid rows={4} cols={6} pattern="wave" color="hsl(var(--muted-foreground))" size={4} gap={10} className="mt-4 opacity-40" />
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-4 gap-5">
        {[
          { value: "6", label: "Participant Types", sub: "Brand → Side Hustler" },
          { value: "20", label: "Core Features", sub: "MVP Product Stack" },
          { value: "6+", label: "Vertical Ecosystems", sub: "Niche worlds inside LUUP" },
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

      {/* Section 1: Executive Summary */}
      <BoardSection title="Executive Summary" number="01" tag="Overview" subtitle="The major strategic simplification driving LUUP 3.0.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8 bento-card p-12 flex flex-col gap-6 relative overflow-hidden">
            <DotGrid rows={4} cols={20} pattern="wave" color="hsl(var(--primary))" size={3} gap={10} className="opacity-15" />
            <h3 className="text-[2.4rem] font-display font-black tracking-[-0.04em] leading-[1.05] text-foreground max-w-[600px]">
              There is one LUUP app.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[520px]">
              The major strategic simplification: one networked commerce platform with multiple vertical worlds inside it.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {["Master LUUP network", "Category ecosystems", "Brand communities", "Personal storefronts", "Personal communities", "Referral networks", "Wallet & rewards", "Missions & content"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-5">
            <div className="bento-card-accent p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
              <DotGrid rows={3} cols={4} pattern="full" color="hsl(var(--primary-foreground))" size={5} gap={16} className="absolute top-6 right-6 opacity-25" />
              <span className="text-xs font-mono text-primary-foreground/50">THE SIMPLIFICATION</span>
              <h3 className="text-xl font-display font-bold text-primary-foreground leading-snug mt-4">
                Consumers use LUUP.<br />Brands use LUUP Activate.<br />Ecosystems live inside LUUP.
              </h3>
            </div>
            <div className="bg-foreground rounded-[1.25rem] p-8 flex-1 flex flex-col justify-between">
              <span className="text-xs font-mono text-background/40">POSITIONING</span>
              <div>
                <h3 className="text-xl font-display font-bold text-background leading-snug">
                  "LUUP turns communities into commerce"
                </h3>
                <p className="text-sm text-background/50 mt-2">
                  Every person can become part of commerce — not just by buying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Section 2: The Core Strategic Shift */}
      <BoardSection title="The Core Strategic Shift" number="02" tag="Strategy" subtitle="From fragmented products to one unified platform.">
        <div className="grid grid-cols-12 gap-5">
          {/* From / To */}
          <div className="col-span-5 bento-card p-10 min-h-[320px] flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono text-muted-foreground mb-2 block">FROM</span>
              <p className="text-lg font-display font-bold text-foreground/60 italic">
                "A set of separate products and ecosystem ideas"
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <span className="text-xs font-mono text-primary mb-2 block">TO</span>
              <p className="text-xl font-display font-black text-foreground">
                "One networked commerce platform with multiple vertical worlds inside it."
              </p>
            </div>
            <div className="mt-auto">
              <span className="text-xs font-mono text-muted-foreground mb-3 block">FRICTION POINTS ELIMINATED</span>
              <div className="flex flex-wrap gap-2">
                {frictionPoints.map((f) => (
                  <span key={f} className="tag">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive shift selector */}
          <div className="col-span-7 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "LUUP is the front door", desc: "The only app users download", active: true },
                { label: "LUUP Activate is the merchant engine", desc: "Dashboard + activation OS for brands", active: false },
              ].map((item, i) => (
                <div key={i} className={`bento-card p-8 flex flex-col gap-3 ${i === 0 ? 'border-2 border-primary' : ''}`}>
                  <h4 className="text-lg font-display font-black text-foreground tracking-tight">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bento-card-accent p-8 flex-1">
              <h4 className="text-lg font-display font-black text-primary-foreground tracking-tight mb-4">Ecosystems are discovery layers inside LUUP</h4>
              <p className="text-sm text-primary-foreground/70 mb-6">Not separate apps — category-specific hubs that increase relevance and conversion.</p>
              <div className="grid grid-cols-3 gap-3">
                {strengths.slice(0, 6).map((s) => (
                  <div key={s} className="flex items-center gap-2 p-2.5 rounded-xl bg-primary-foreground/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground flex-shrink-0" />
                    <span className="text-xs font-medium text-primary-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Section 3: The LUUP 3.0 Vision */}
      <BoardSection title="The LUUP 3.0 Vision" number="03" tag="Vision" subtitle="Every person becomes part of commerce.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 bento-card p-12 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={6} cols={10} pattern="wave" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-8 right-8 opacity-30" />
            <span className="tag-accent w-fit">Big Idea</span>
            <div>
              <h3 className="text-[1.8rem] font-display font-black text-foreground tracking-tight leading-snug max-w-[500px]">
                Every person can become part of commerce, not just by buying, but by sharing, creating, recruiting, recommending, leading, and growing communities.
              </h3>
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-5">
            {[
              { label: "Customers → Advocates", icon: "🛒" },
              { label: "Creators → Sellers", icon: "🎨" },
              { label: "Affiliates → Community Builders", icon: "🔗" },
              { label: "Influencers → Team Leaders", icon: "⭐" },
              { label: "Ecosystems → Demand Engines", icon: "🌍" },
              { label: "UGC → Conversion Layer", icon: "📸" },
            ].map((item) => (
              <div key={item.label} className="bento-card p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-display font-bold text-foreground tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Not standard affiliate marketing */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          {[
            { title: "Community Commerce", desc: "Where customers become active participants in brand growth" },
            { title: "Customer-Led Commerce", desc: "Powered by authentic advocacy and personal networks" },
            { title: "Affiliate 3.0 at Platform Scale", desc: "Beyond one-off promo codes — structured growth loops" },
          ].map((item, i) => (
            <div key={item.title} className={`${i === 2 ? "bg-foreground rounded-[1.25rem]" : i === 1 ? "bento-card-accent" : "bento-card"} p-8 min-h-[160px] flex flex-col justify-between`}>
              <h4 className={`text-xl font-display font-black tracking-tight ${i === 2 ? "text-background" : i === 1 ? "text-primary-foreground" : "text-foreground"}`}>{item.title}</h4>
              <p className={`text-sm mt-3 ${i === 2 ? "text-background/50" : i === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
