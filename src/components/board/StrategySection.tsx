import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";

const StrategySection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const frictionPoints = [
    "Too many app decisions",
    "Split user journeys",
    "Fragmented network effects",
    "Unclear merchant onboarding",
    "Confusing brand messaging",
  ];

  const phases = [
    {
      id: 0,
      label: "Phase 1",
      name: "Foundation",
      status: "LIVE",
      timeline: "2025",
      accent: true,
      desc: "Storefronts, codes, and combat sports onboarding — the model is proven with fighters and brands.",
      deliverables: [
        { item: "Web storefronts", status: "live" },
        { item: "Personal referral codes", status: "live" },
        { item: "Fighter onboarding (Combat Market)", status: "live" },
        { item: "Brand profiles & product listings", status: "live" },
        { item: "Basic commission tracking", status: "live" },
        { item: "Join pages for fighters", status: "live" },
      ],
      kpis: ["Fighter sales tracked", "Brands onboarded to Combat Market", "Storefront conversion rates"],
    },
    {
      id: 1,
      label: "Phase 2",
      name: "MVP Launch",
      status: "1 MARCH 2026",
      timeline: "Q1 2026",
      desc: "The full community commerce platform — mobile app, missions, referral engine, and merchant dashboard. Hard deadline: 1st March 2026.",
      deliverables: [
        { item: "LUUP mobile app (iOS + Android)", status: "building" },
        { item: "Missions engine", status: "building" },
        { item: "Wall feed & social layer", status: "building" },
        { item: "Leaderboards & gamification", status: "building" },
        { item: "4-tier referral engine", status: "building" },
        { item: "Merchant dashboard (LUUP Activate)", status: "building" },
        { item: "Brand community pages", status: "building" },
      ],
      kpis: ["MVP live by 1 March 2026", "Mission completion rates", "Referral network depth"],
    },
    {
      id: 2,
      label: "Phase 3",
      name: "Scale & Ecosystems",
      status: "POST-MVP",
      timeline: "Q2 2026+",
      desc: "AI matching, multi-vertical ecosystems, and creator tools — scaling beyond combat sports into new verticals.",
      deliverables: [
        { item: "Ecosystem hubs (FanDraft, PetSpace, etc.)", status: "planned" },
        { item: "AI creator-brand matching", status: "planned" },
        { item: "Multi-ecosystem brand tagging", status: "planned" },
        { item: "Creator collections & advanced storefronts", status: "planned" },
        { item: "Automated growth loops", status: "planned" },
        { item: "Enterprise / white-label (LUUP Bespoke)", status: "planned" },
      ],
      kpis: ["Ecosystems launched", "Cross-vertical brand distribution", "Network-driven revenue %"],
    },
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
              LUUP is the platform where <strong className="text-primary-foreground">brands, customers, affiliates, influencers, creators, and communities</strong> come together.
            </p>
            <span className="tag !bg-primary-foreground/20 !text-primary-foreground mt-4 inline-block">Platform v3.0</span>
          </div>
        </div>

        <div className="col-span-3 bg-foreground rounded-[1.25rem] p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
          <DotGrid rows={5} cols={5} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-30" />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Building MVP</span>
            </div>
            <h3 className="text-2xl font-display font-black text-background tracking-tight leading-tight">
              MVP deadline:<br />1 March 2026.
            </h3>
            <p className="text-sm text-background/50 mt-3">
              Storefronts live. Fighters onboarded. Now building the full community commerce platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">Storefronts ✓</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">Codes ✓</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">Fighters ✓</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/30 text-background">MVP → 1 Mar</span>
          </div>
        </div>
      </div>

      {/* Key Stats - Updated to reflect reality */}
      <div className="grid grid-cols-4 gap-5">
        {[
          { value: "Live", label: "Storefronts", sub: "Web commerce layer" },
          { value: "3", label: "Build Phases", sub: "Foundation → Community → Scale" },
          { value: "4", label: "Referral Tiers", sub: "Key differentiator" },
          { value: "1st", label: "Beachhead", sub: "Combat Market / Fighters" },
        ].map((m) => (
          <div key={m.label} className="bento-card p-8 group hover:shadow-lg transition-shadow duration-300">
            <span className="text-sm text-muted-foreground font-medium">{m.label}</span>
            <div className="mt-6">
              <span className="text-6xl font-display font-black tracking-[-0.06em] text-foreground leading-none group-hover:text-primary transition-colors duration-300">{m.value}</span>
              <p className="text-sm text-muted-foreground mt-3">{m.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 1: Executive Summary */}
      <BoardSection title="Executive Summary" number="01" tag="Overview" subtitle="One platform, built in phases — not all at once.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8 bento-card p-12 flex flex-col gap-6 relative overflow-hidden">
            <DotGrid rows={4} cols={20} pattern="wave" color="hsl(var(--primary))" size={3} gap={10} className="opacity-15" />
            <h3 className="text-[2.4rem] font-display font-black tracking-[-0.04em] leading-[1.05] text-foreground max-w-[600px]">
              Build lean. Prove first.<br />Then expand.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[520px]">
              LUUP 3.0 is not a big-bang launch. It's a phased rollout starting from what's already live — storefronts and fighter onboarding — and expanding into community, missions, and ecosystems as each layer proves itself.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {["Web storefronts (live)", "Referral codes (live)", "Fighter onboarding (live)", "Brand profiles (live)", "Mobile app (Phase 2)", "Missions engine (Phase 2)", "Community layer (Phase 2)", "Ecosystems (Phase 3)"].map((item) => {
                const isLive = item.includes("(live)");
                return (
                  <div key={item} className={`flex items-center gap-3 p-3 rounded-xl ${isLive ? "bg-primary/5 border border-primary/10" : "bg-muted/50"}`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isLive ? "bg-green-500" : "bg-muted-foreground/30"}`} />
                    <span className={`text-sm font-medium ${isLive ? "text-foreground" : "text-muted-foreground"}`}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-5">
            <div className="bento-card-accent p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
              <DotGrid rows={3} cols={4} pattern="full" color="hsl(var(--primary-foreground))" size={5} gap={16} className="absolute top-6 right-6 opacity-25" />
              <span className="text-xs font-mono text-primary-foreground/50">THE APPROACH</span>
              <h3 className="text-xl font-display font-bold text-primary-foreground leading-snug mt-4">
                Ship what works.<br />Validate with fighters.<br />Then build the engine.
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
                "One lean platform, proven with fighters first, then scaled with community tools."
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

          {/* Strategic pillars */}
          <div className="col-span-7 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "LUUP is the front door", desc: "The only app users download — but only when Phase 2 is ready", active: true },
                { label: "Storefronts are the proving ground", desc: "Web-first commerce, live now, validating the model", active: false },
              ].map((item, i) => (
                <div key={i} className={`bento-card p-8 flex flex-col gap-3 ${i === 1 ? 'border-2 border-primary' : ''}`}>
                  <h4 className="text-lg font-display font-black text-foreground tracking-tight">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bento-card-accent p-8 flex-1">
              <h4 className="text-lg font-display font-black text-primary-foreground tracking-tight mb-4">Build progressively, not all at once</h4>
              <p className="text-sm text-primary-foreground/70 mb-6">Each phase unlocks the next. Don't build the community engine until storefronts prove conversion. Don't build ecosystems until communities prove engagement.</p>
              <div className="grid grid-cols-3 gap-3">
                {["Storefronts → Conversion proof", "Community → Engagement proof", "Missions → Retention proof", "Referrals → Network proof", "Ecosystems → Scale proof", "AI → Efficiency proof"].map((s) => (
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

      {/* Section 3: Phased Build Strategy */}
      <BoardSection title="Phased Build Strategy" number="03" tag="Roadmap" subtitle="Three phases — each one proves the next.">
        {/* Phase selector */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          {phases.map((phase, i) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(i)}
              className={`text-left p-8 rounded-[1.25rem] border transition-all duration-300 relative overflow-hidden ${
                activePhase === i
                  ? phase.accent ? "bento-card-accent border-transparent" : "bento-card border-primary border-2"
                  : "bento-card hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono uppercase tracking-widest ${
                  activePhase === i && phase.accent ? "text-primary-foreground/50" : 
                  activePhase === i ? "text-primary" :
                  "text-muted-foreground"
                }`}>{phase.label}</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  phase.status === "LIVE NOW" ? "bg-green-500/15 text-green-600" :
                  phase.status === "NEXT" ? "bg-amber-500/15 text-amber-600" :
                  "bg-muted text-muted-foreground"
                }`}>{phase.status}</span>
              </div>
              <h4 className={`text-2xl font-display font-black tracking-tight ${
                activePhase === i && phase.accent ? "text-primary-foreground" :
                "text-foreground"
              }`}>{phase.name}</h4>
              <p className={`text-xs mt-1 ${
                activePhase === i && phase.accent ? "text-primary-foreground/50" :
                "text-muted-foreground"
              }`}>{phase.timeline}</p>
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <div className="grid grid-cols-12 gap-5 animate-fade-in" key={activePhase}>
          <div className="col-span-5 bento-card p-10 flex flex-col gap-6 min-h-[380px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                  phases[activePhase].status === "LIVE NOW" ? "bg-green-500/15 text-green-600" :
                  phases[activePhase].status === "NEXT" ? "bg-amber-500/15 text-amber-600" :
                  "bg-muted text-muted-foreground"
                }`}>{phases[activePhase].status}</span>
                <span className="text-xs font-mono text-muted-foreground">{phases[activePhase].timeline}</span>
              </div>
              <h3 className="text-2xl font-display font-black text-foreground tracking-tight">
                {phases[activePhase].label}: {phases[activePhase].name}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{phases[activePhase].desc}</p>
            </div>
            <div className="mt-auto">
              <span className="text-xs font-mono text-muted-foreground mb-3 block">SUCCESS METRICS</span>
              <div className="space-y-2">
                {phases[activePhase].kpis.map((kpi) => (
                  <div key={kpi} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-7 bento-card p-10 min-h-[380px]">
            <span className="text-xs font-mono text-muted-foreground mb-5 block">DELIVERABLES</span>
            <div className="grid grid-cols-2 gap-3">
              {phases[activePhase].deliverables.map((d) => (
                <div
                  key={d.item}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                    d.status === "live"
                      ? "bg-green-500/5 border border-green-500/15"
                      : d.status === "building"
                      ? "bg-amber-500/5 border border-amber-500/15"
                      : "bg-muted/50 border border-transparent"
                  }`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    d.status === "live" ? "bg-green-500" :
                    d.status === "building" ? "bg-amber-500" :
                    "bg-muted-foreground/30"
                  }`} />
                  <span className="text-sm font-medium text-foreground">{d.item}</span>
                  {d.status === "live" && <span className="ml-auto text-xs font-mono text-green-600">✓</span>}
                  {d.status === "building" && <span className="ml-auto text-xs font-mono text-amber-600">building</span>}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-8 pt-5 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs text-muted-foreground">Building</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="text-xs text-muted-foreground">Planned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phase progression */}
        <div className="bento-card p-8 mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">P1</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Foundation</span>
              </div>
              <div className="h-0.5 flex-1 bg-green-500 rounded-full" />
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-amber-600">P2</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Community</span>
              </div>
              <div className="h-0.5 flex-1 bg-border rounded-full" />
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">P3</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Scale</span>
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Section 4: Vision */}
      <BoardSection title="The LUUP 3.0 Vision" number="04" tag="Vision" subtitle="Every person becomes part of commerce.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 bento-card p-12 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={6} cols={10} pattern="wave" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-8 right-8 opacity-30" />
            <span className="tag-accent w-fit">Big Idea</span>
            <div>
              <h3 className="text-[1.8rem] font-display font-black text-foreground tracking-tight leading-snug max-w-[500px]">
                Every person can become part of commerce, not just by buying, but by sharing, creating, recruiting, and growing communities.
              </h3>
            </div>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-5">
            {[
              { label: "Fighters → Advocates", icon: "🥊", note: "Phase 1" },
              { label: "Customers → Sellers", icon: "🛒", note: "Phase 2" },
              { label: "Creators → Earners", icon: "🎨", note: "Phase 2" },
              { label: "Affiliates → Network Builders", icon: "🔗", note: "Phase 2" },
              { label: "Influencers → Team Leaders", icon: "⭐", note: "Phase 3" },
              { label: "Ecosystems → Demand Engines", icon: "🌍", note: "Phase 3" },
            ].map((item) => (
              <div key={item.label} className="bento-card p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <span className="text-sm font-display font-bold text-foreground tracking-tight block">{item.label}</span>
                  <span className={`text-xs font-mono ${
                    item.note === "Phase 1" ? "text-green-600" :
                    item.note === "Phase 2" ? "text-amber-600" :
                    "text-muted-foreground"
                  }`}>{item.note}</span>
                </div>
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
