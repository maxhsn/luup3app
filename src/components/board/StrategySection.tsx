import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";

const StrategySection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const frictionPoints = [
    "Too many app decisions",
    "Split user journeys",
    "Fragmented network effects",
    "No recruitment infrastructure",
    "No AI automation layer",
    "Unclear merchant onboarding",
  ];

  const phases = [
    {
      id: 0, label: "Phase 1", name: "MVP Launch", status: "1 APRIL 2026", timeline: "Q1 2026", accent: true,
      desc: "The full community commerce platform — mobile app, storefronts, missions, referral engine, merchant dashboard, and Scout recruitment infrastructure. Hard deadline: 1st April 2026.",
      deliverables: [
        { item: "Web storefronts", status: "live" },
        { item: "Personal referral codes", status: "live" },
        { item: "Fighter onboarding (Combat Market)", status: "live" },
        { item: "Brand profiles & product listings", status: "live" },
        { item: "LUUP mobile app (iOS + Android)", status: "building" },
        { item: "Missions engine", status: "building" },
        { item: "4-tier referral engine", status: "building" },
        { item: "Merchant dashboard (LUUP Activate)", status: "building" },
        { item: "Scout recruitment engine (v1)", status: "building" },
      ],
      kpis: ["MVP live by 1 April 2026", "Fighter sales tracked", "Storefront conversion rates", "Scout recruitment pipeline active"],
    },
    {
      id: 1, label: "Phase 2", name: "Community + AI Engine", status: "1 MAY 2026", timeline: "Q2 2026",
      desc: "Social layer, gamification, Agent AI store conversion and recruitment automation, and deeper community tools.",
      deliverables: [
        { item: "Wall feed & social layer", status: "planned" },
        { item: "Leaderboards & gamification", status: "planned" },
        { item: "Brand community pages", status: "planned" },
        { item: "Advanced mission types", status: "planned" },
        { item: "UGC engine & content tools", status: "planned" },
        { item: "Agent AI — store conversion layer", status: "planned" },
        { item: "Agent AI — ambassador activation", status: "planned" },
        { item: "Scout CRM & outreach automation", status: "planned" },
      ],
      kpis: ["Community engagement depth", "Mission completion rates", "Agent AI conversion lift", "Scout-to-activation rate"],
    },
    {
      id: 2, label: "Phase 3", name: "Scale & Automation", status: "POST-LAUNCH", timeline: "Q3 2026+",
      desc: "Multi-vertical ecosystems, autonomous Agent AI operating Scout 24/7, affiliate network layer, and full AI-driven growth infrastructure.",
      deliverables: [
        { item: "Ecosystem hubs (FanDraft, PetSpace, etc.)", status: "planned" },
        { item: "Multi-ecosystem brand tagging", status: "planned" },
        { item: "Affiliate Network solution", status: "planned" },
        { item: "Agent AI — autonomous Scout operator", status: "planned" },
        { item: "Agent AI — growth & intent engine", status: "planned" },
        { item: "Enterprise / white-label (LUUP Bespoke)", status: "planned" },
      ],
      kpis: ["Ecosystems launched", "Autonomous recruitment volume", "Agent AI GMV contribution", "Network-driven revenue %"],
    },
  ];

  return (
    <div className="space-y-6 md:space-y-10">
      {/* Section 1: The LUUP 3.0 Vision */}
      <BoardSection title="The LUUP 3.0 Vision" number="01" tag="Vision" subtitle="From passive platform to active growth engine.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-6 bento-card p-8 md:p-12 min-h-[240px] md:min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={6} cols={10} pattern="wave" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-8 right-8 opacity-30" />
            <span className="tag-accent w-fit">Big Idea</span>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg md:text-[1.8rem] font-display font-black text-foreground tracking-tight leading-snug max-w-[500px]">
                LUUP doesn't just help brands manage communities. It helps brands find the right people, recruit them, activate them, and grow them into revenue-generating networks — automatically.
              </h3>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-3 md:gap-5">
            {[
              { label: "Fighters → Advocates", icon: "🥊" },
              { label: "Customers → Sellers", icon: "🛒" },
              { label: "Creators → Earners", icon: "🎨" },
              { label: "Scout → Recruitment Engine", icon: "🔍" },
              { label: "Agent AI → Growth Operator", icon: "🤖" },
              { label: "Ecosystems → Demand Engines", icon: "🌍" },
            ].map((item) => (
              <div key={item.label} className="bento-card p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:shadow-lg transition-all duration-300">
                <span className="text-xl md:text-2xl">{item.icon}</span>
                <span className="text-xs md:text-sm font-display font-bold text-foreground tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mt-4 md:mt-5">
          {[
            { title: "Community Commerce", desc: "Where customers become active participants in brand growth" },
            { title: "Recruitment + Activation", desc: "Scout finds the people. Agent AI activates and scales them automatically." },
            { title: "Autonomous AI Growth", desc: "Agent AI operates Scout, converts visitors, recruits ambassadors, and optimises growth 24/7" },
          ].map((item, i) => (
            <div key={item.title} className={`${i === 2 ? "bg-foreground rounded-[1.25rem]" : i === 1 ? "bento-card-accent" : "bento-card"} p-6 md:p-8 min-h-[120px] md:min-h-[160px] flex flex-col justify-between`}>
              <h4 className={`text-lg md:text-xl font-display font-black tracking-tight ${i === 2 ? "text-background" : i === 1 ? "text-primary-foreground" : "text-foreground"}`}>{item.title}</h4>
              <p className={`text-sm mt-2 md:mt-3 ${i === 2 ? "text-background/50" : i === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Section 2: Executive Summary */}
      <BoardSection title="Executive Summary" number="02" tag="Overview" subtitle="One platform — recruitment, activation, and autonomous AI growth.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-8 bento-card p-8 md:p-12 flex flex-col gap-4 md:gap-6 relative overflow-hidden">
            <DotGrid rows={4} cols={20} pattern="wave" color="hsl(var(--primary))" size={3} gap={10} className="opacity-15" />
            <h3 className="text-xl md:text-[2.4rem] font-display font-black tracking-[-0.04em] leading-[1.05] text-foreground max-w-[600px]">
              MVP by 1 April.<br />Scout finds the people.<br />Agent AI activates them.
            </h3>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-[520px]">
              LUUP 3.0 combines recruitment infrastructure (Scout), activation engine (Activate), affiliate network logic, ecosystem discovery, and AI-powered growth automation (Agent AI) — all in one platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 md:mt-4">
              {["Web storefronts (live)", "Referral codes (live)", "Fighter onboarding (live)", "Brand profiles (live)", "Mobile app (MVP)", "Missions engine (MVP)", "Scout recruitment (MVP)", "Agent AI (Phase 2)"].map((item) => {
                const isLive = item.includes("(live)");
                const isMVP = item.includes("(MVP)");
                return (
                  <div key={item} className={`flex items-center gap-3 p-2.5 md:p-3 rounded-xl ${isLive ? "bg-primary/5 border border-primary/10" : isMVP ? "bg-amber-500/5 border border-amber-500/10" : "bg-muted/50"}`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isLive ? "bg-green-500" : isMVP ? "bg-amber-500" : "bg-muted-foreground/30"}`} />
                    <span className={`text-xs md:text-sm font-medium ${isLive ? "text-foreground" : isMVP ? "text-foreground" : "text-muted-foreground"}`}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="bento-card-accent p-6 md:p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
              <DotGrid rows={3} cols={4} pattern="full" color="hsl(var(--primary-foreground))" size={5} gap={16} className="absolute top-6 right-6 opacity-25" />
              <span className="text-xs font-mono text-primary-foreground/50">THE SHIFT</span>
              <h3 className="text-lg md:text-xl font-display font-bold text-primary-foreground leading-snug mt-4">
                Beyond community commerce.<br />Recruitment + Activation +<br />Autonomous AI Growth.
              </h3>
            </div>
            <div className="bg-foreground rounded-[1.25rem] p-6 md:p-8 flex-1 flex flex-col justify-between">
              <span className="text-xs font-mono text-background/40">POSITIONING</span>
              <div>
                <h3 className="text-lg md:text-xl font-display font-bold text-background leading-snug">
                  "Scout finds the people. Agent AI runs the machine."
                </h3>
                <p className="text-sm text-background/50 mt-2">
                  Most platforms help brands manage ambassadors. LUUP helps brands find, recruit, activate, and grow them automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Hero Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        <div className="md:col-span-5 bento-card p-8 md:p-12 flex flex-col justify-between min-h-[280px] md:min-h-[400px] relative overflow-hidden">
          <DotGrid rows={8} cols={10} pattern="triangle" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-60" />
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-foreground flex items-center justify-center">
            <span className="text-background font-black text-lg md:text-xl">L</span>
          </div>
          <div className="relative z-10 mt-6 md:mt-0">
            <h1 className="text-[2rem] md:text-[3.2rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              Recruitment.<br />Activation.<br />Autonomous<br />Growth.
            </h1>
          </div>
        </div>

        <div className="md:col-span-4 bento-card-accent p-8 md:p-10 flex flex-col justify-between min-h-[240px] md:min-h-[400px] relative overflow-hidden">
          <DotGrid rows={12} cols={12} pattern="scatter" color="hsl(var(--primary-foreground))" size={5} gap={16} className="absolute inset-0 m-auto opacity-25" />
          <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed relative z-10 max-w-[280px]">
            Not just an affiliate platform. Not just an influencer tool. Not just a loyalty layer. Not just a marketplace.
          </p>
          <div className="relative z-10 mt-4 md:mt-0">
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              LUUP is the operating system for <strong className="text-primary-foreground">community commerce</strong> — combining recruitment, activation, affiliate infrastructure, ecosystem discovery, and <strong className="text-primary-foreground">AI-powered growth automation</strong>.
            </p>
            <span className="tag !bg-primary-foreground/20 !text-primary-foreground mt-4 inline-block">Platform v3.0</span>
          </div>
        </div>

        <div className="md:col-span-3 bg-foreground rounded-[1.25rem] p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[400px] relative overflow-hidden">
          <DotGrid rows={5} cols={5} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-30" />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Building MVP</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-black text-background tracking-tight leading-tight">
              MVP deadline:<br />1 April 2026.
            </h3>
            <p className="text-sm text-background/50 mt-3">
              Storefronts live. Fighters onboarded. Scout + Agent AI in pipeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">Storefronts ✓</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">Codes ✓</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">Fighters ✓</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/30 text-background">MVP → 1 Apr</span>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {[
          { value: "Live", label: "Storefronts", sub: "Web commerce layer — proven" },
          { value: "75M+", label: "Scout Database", sub: "Verified contacts for recruitment" },
          { value: "4", label: "Referral Tiers", sub: "Key differentiator" },
          { value: "7", label: "Agent AI Roles", sub: "Store · Support · Ambassador · Scout" },
        ].map((m) => (
          <div key={m.label} className="bento-card p-5 md:p-8 group hover:shadow-lg transition-shadow duration-300">
            <span className="text-xs md:text-sm text-muted-foreground font-medium">{m.label}</span>
            <div className="mt-3 md:mt-6">
              <span className="text-3xl md:text-6xl font-display font-black tracking-[-0.06em] text-foreground leading-none group-hover:text-primary transition-colors duration-300">{m.value}</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3">{m.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 2: The Core Strategic Shift */}
      <BoardSection title="The Core Strategic Shift" number="03" tag="Strategy" subtitle="From passive platform to active growth engine.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-5 bento-card p-8 md:p-10 min-h-[280px] md:min-h-[320px] flex flex-col gap-6 md:gap-8">
            <div>
              <span className="text-xs font-mono text-muted-foreground mb-2 block">FROM</span>
              <p className="text-base md:text-lg font-display font-bold text-foreground/60 italic">
                "A set of separate products — no recruitment, no AI, fragmented growth"
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 md:pl-6">
              <span className="text-xs font-mono text-primary mb-2 block">TO</span>
              <p className="text-lg md:text-xl font-display font-black text-foreground">
                "One platform: recruitment infrastructure + activation engine + autonomous AI growth operator."
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

          <div className="md:col-span-7 flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Scout — Recruitment Engine", desc: "75M+ verified contacts, search & filter, outreach CRM, segmented lists — brands finally answer 'where do we find the right people?'" },
                { label: "Agent AI — Growth Operator", desc: "Store conversion, ambassador activation, autonomous Scout recruitment, intent detection — all running 24/7" },
              ].map((item, i) => (
                <div key={i} className={`bento-card p-6 md:p-8 flex flex-col gap-3 ${i === 1 ? 'border-2 border-primary' : ''}`}>
                  <h4 className="text-base md:text-lg font-display font-black text-foreground tracking-tight">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bento-card-accent p-6 md:p-8 flex-1">
              <h4 className="text-base md:text-lg font-display font-black text-primary-foreground tracking-tight mb-3 md:mb-4">Three engines working as one</h4>
              <p className="text-sm text-primary-foreground/70 mb-4 md:mb-6">Scout provides recruitment infrastructure. Affiliate Network provides scalable performance distribution. Agent AI operates recruitment, activation, and optimisation automatically.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {["Scout → Find the people", "Activate → Onboard & engage", "Agent AI → Automate growth", "Affiliate → Scale distribution", "Ecosystems → Deepen relevance", "Storefronts → Drive commerce"].map((s) => (
                  <div key={s} className="flex items-center gap-2 p-2 md:p-2.5 rounded-xl bg-primary-foreground/10">
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
      <BoardSection title="Phased Build Strategy" number="04" tag="Roadmap" subtitle="Three phases — each one proves the next.">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-8">
          {phases.map((phase, i) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(i)}
              className={`text-left p-5 md:p-8 rounded-[1.25rem] border transition-all duration-300 relative overflow-hidden ${
                activePhase === i
                  ? phase.accent ? "bento-card-accent border-transparent" : "bento-card border-primary border-2"
                  : "bento-card hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className={`text-xs font-mono uppercase tracking-widest ${
                  activePhase === i && phase.accent ? "text-primary-foreground/50" : 
                  activePhase === i ? "text-primary" :
                  "text-muted-foreground"
                }`}>{phase.label}</span>
                <span className={`px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-xs font-bold ${
                  phase.status === "1 APRIL 2026" ? "bg-amber-500/15 text-amber-600" :
                  phase.status === "1 MAY 2026" ? "bg-primary/15 text-primary" :
                  "bg-muted text-muted-foreground"
                }`}>{phase.status}</span>
              </div>
              <h4 className={`text-lg md:text-2xl font-display font-black tracking-tight ${
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 animate-fade-in" key={activePhase}>
          <div className="md:col-span-5 bento-card p-6 md:p-10 flex flex-col gap-4 md:gap-6 min-h-[300px] md:min-h-[380px]">
            <div>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                  phases[activePhase].status === "1 APRIL 2026" ? "bg-amber-500/15 text-amber-600" :
                  phases[activePhase].status === "1 MAY 2026" ? "bg-primary/15 text-primary" :
                  "bg-muted text-muted-foreground"
                }`}>{phases[activePhase].status}</span>
                <span className="text-xs font-mono text-muted-foreground">{phases[activePhase].timeline}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-black text-foreground tracking-tight">
                {phases[activePhase].label}: {phases[activePhase].name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 md:mt-3 leading-relaxed">{phases[activePhase].desc}</p>
            </div>
            <div className="mt-auto">
              <span className="text-xs font-mono text-muted-foreground mb-3 block">SUCCESS METRICS</span>
              <div className="space-y-2">
                {phases[activePhase].kpis.map((kpi) => (
                  <div key={kpi} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-foreground">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bento-card p-6 md:p-10 min-h-[300px] md:min-h-[380px]">
            <span className="text-xs font-mono text-muted-foreground mb-4 md:mb-5 block">DELIVERABLES</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {phases[activePhase].deliverables.map((d) => (
                <div
                  key={d.item}
                  className={`flex items-center gap-3 p-3 md:p-4 rounded-xl transition-all ${
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
                  <span className="text-xs md:text-sm font-medium text-foreground">{d.item}</span>
                  {d.status === "live" && <span className="ml-auto text-xs font-mono text-green-600">✓</span>}
                  {d.status === "building" && <span className="ml-auto text-xs font-mono text-amber-600">building</span>}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 md:gap-6 mt-6 md:mt-8 pt-4 md:pt-5 border-t border-border flex-wrap">
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

        <div className="bento-card p-5 md:p-8 mt-4 md:mt-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-[280px]">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-amber-600">P1</span>
                </div>
                <span className="text-xs text-muted-foreground mt-1 md:mt-2">MVP · 1 Apr</span>
              </div>
              <div className="h-0.5 flex-1 bg-border rounded-full" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">P2</span>
                </div>
                <span className="text-xs text-muted-foreground mt-1 md:mt-2">AI Engine · 1 May</span>
              </div>
              <div className="h-0.5 flex-1 bg-border rounded-full" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">P3</span>
                </div>
                <span className="text-xs text-muted-foreground mt-1 md:mt-2">Automation · Q3+</span>
              </div>
            </div>
          </div>
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
