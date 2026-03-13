import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";
import PhoneMockup, { WireBlock, WireList } from "./PhoneMockup";

const MVPSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    { n: "01", title: "Core Activation Engine", desc: "Brand recruitment, commission & program management", category: "Core" },
    { n: "02", title: "Brand Pages", desc: "Profile, feed, leaderboard, missions", category: "Social" },
    { n: "03", title: "Ecosystem Layer", desc: "Category hubs as discovery layers", category: "Discovery" },
    { n: "04", title: "User Profiles", desc: "Identity, wallet, followed brands", category: "Core" },
    { n: "05", title: "Personal Storefronts", desc: "Curated product collections", category: "Commerce" },
    { n: "06", title: "Personal Communities", desc: "Create, recruit, curate, earn", category: "Social" },
    { n: "07", title: "Social Wall Feed", desc: "Posts, UGC, brand announcements", category: "Social" },
    { n: "08", title: "Missions Engine", desc: "Share, unbox, review, recruit", category: "Engagement" },
    { n: "09", title: "UGC Engine", desc: "Awareness fuel + conversion proof", category: "Content" },
    { n: "10", title: "Codes & Referrals", desc: "Generate, manage, track", category: "Commerce" },
    { n: "11", title: "4-Tier Referral Engine", desc: "Key differentiator — network earnings", category: "Core", accent: true },
    { n: "12", title: "Wallet & Withdrawals", desc: "Direct + tier + mission rewards", category: "Commerce" },
    { n: "13", title: "Merchant Dashboard", desc: "LUUP Activate — full merchant OS", category: "Core" },
    { n: "14", title: "Join Pages & Funnels", desc: "Branded recruitment pages", category: "Growth" },
    { n: "15", title: "Creator Applications", desc: "Application flows for creators", category: "Social" },
    { n: "16", title: "AI Automation", desc: "Automated recruitment & growth", category: "AI", accent: true },
    { n: "17", title: "Notifications", desc: "Real-time sales & activity", category: "Core" },
    { n: "18", title: "Leaderboards", desc: "Rankings & gamification", category: "Engagement" },
    { n: "19", title: "Ecosystem Tagging", desc: "Multi-vertical distribution", category: "Discovery" },
    { n: "20", title: "Template Pages", desc: "Pre-built campaign funnels", category: "Growth" },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5 bento-card p-12 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={6} cols={8} pattern="triangle" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-50" />
          <span className="tag-accent w-fit">Product Stack</span>
          <div>
            <h2 className="text-[3.2rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              20 Core<br />Features.
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-[300px]">The complete MVP product stack powering LUUP 3.0.</p>
          </div>
        </div>
        <div className="col-span-4 bento-card-accent p-10 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={10} cols={10} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute inset-0 m-auto opacity-20" />
          <div className="relative z-10">
            <h3 className="text-[2.5rem] font-display font-black text-primary-foreground tracking-tight leading-[1.05]">
              Structured<br />Data<br />Modules
            </h3>
            <p className="text-sm text-primary-foreground/60 mt-3">Smarter strategies and content for the LUUP frontier.</p>
          </div>
        </div>
        <div className="col-span-3 bg-foreground rounded-[1.25rem] p-8 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={6} cols={6} pattern="full" color="hsl(var(--background))" size={3} gap={12} className="absolute top-6 right-6 opacity-20" />
          <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
            <span className="text-background font-bold">∞</span>
          </div>
          <div>
            <p className="text-sm text-background/80 leading-relaxed">
              Building transparent, permissionless infrastructure for the next generation of community commerce.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <BoardSection title="Product Stack" number="01" tag="Features">
        <div className="grid grid-cols-5 gap-4">
          {features.map((f, i) => (
            <div
              key={f.n}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              className={`${f.accent ? "bento-card-accent" : "bento-card"} p-6 flex flex-col gap-3 cursor-default transition-all duration-300 ${
                hoveredFeature === i ? "shadow-lg scale-[1.02]" : ""
              } relative overflow-hidden`}
            >
              {f.accent && <DotGrid rows={3} cols={3} pattern="full" color="hsl(var(--primary-foreground))" size={3} gap={10} className="absolute top-4 right-4 opacity-20" />}
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-display font-black tracking-tighter ${f.accent ? 'text-primary-foreground/30' : 'text-primary/20'}`}>{f.n}</span>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${f.accent ? 'text-primary-foreground/40' : 'text-muted-foreground/60'}`}>{f.category}</span>
              </div>
              <h4 className={`text-sm font-display font-bold tracking-tight leading-snug ${f.accent ? 'text-primary-foreground' : 'text-foreground'}`}>{f.title}</h4>
              <p className={`text-xs leading-relaxed ${f.accent ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Wireframes */}
      <BoardSection title="App UI Wireframes" number="02" tag="Screens">
        <div className="flex flex-wrap gap-8 justify-start">
          <PhoneMockup title="Brand Page">
            <div className="w-full h-20 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/15">
              <span className="text-xs text-primary font-mono">HERO_IMAGE</span>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div className="flex-1">
                <div className="w-20 h-2.5 rounded bg-muted" />
                <div className="w-12 h-2 rounded bg-muted mt-1.5" />
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-primary">
                <span className="text-xs text-primary-foreground font-semibold">Follow</span>
              </div>
            </div>
            <div className="flex gap-1 mt-3">
              {["Feed", "Wall", "Missions", "Rank"].map((tab, i) => (
                <div key={tab} className={`flex-1 py-1.5 rounded-lg text-center ${i === 0 ? 'bg-primary' : 'bg-muted'}`}>
                  <span className={`text-[10px] font-medium ${i === 0 ? 'text-primary-foreground' : 'text-muted-foreground'}`}>{tab}</span>
                </div>
              ))}
            </div>
            <WireBlock label="Product Highlights" height="h-12" />
            <WireBlock label="Active Missions" height="h-12" accent />
          </PhoneMockup>

          <PhoneMockup title="Missions">
            <WireBlock label="Active Missions" height="h-8" accent />
            <WireList items={["Share a code — 5 pts", "Unboxing video — 20 pts", "Product review — 15 pts", "Recruit a friend — 25 pts"]} />
            <div className="flex gap-2 mt-2">
              <div className="flex-1 bg-primary/10 rounded-xl p-3 text-center border border-primary/15">
                <span className="text-xs text-primary font-semibold">85 pts</span>
              </div>
              <div className="flex-1 bg-muted rounded-xl p-3 text-center">
                <span className="text-xs text-muted-foreground font-semibold">Rank #12</span>
              </div>
            </div>
          </PhoneMockup>

          <PhoneMockup title="Wallet">
            <div className="bg-primary rounded-2xl p-4 text-center">
              <span className="text-xs text-primary-foreground/70">BALANCE</span>
              <p className="text-3xl font-display font-bold text-primary-foreground mt-1">£247.50</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bento-card p-3 text-center">
                <span className="text-[10px] text-muted-foreground">DIRECT</span>
                <p className="text-lg font-display font-bold text-foreground">£120</p>
              </div>
              <div className="bento-card p-3 text-center">
                <span className="text-[10px] text-muted-foreground">NETWORK</span>
                <p className="text-lg font-display font-bold text-foreground">£127.50</p>
              </div>
            </div>
            <WireList items={["Tier 1 — £50", "Tier 2 — £42.50", "Tier 3 — £25", "Tier 4 — £10"]} />
          </PhoneMockup>

          <PhoneMockup title="Storefront">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div>
                <div className="w-24 h-2.5 rounded bg-muted" />
                <div className="w-14 h-2 rounded bg-muted mt-1.5" />
              </div>
            </div>
            <WireBlock label="Share Link" height="h-9" accent />
            <div className="grid grid-cols-2 gap-2">
              {["Product 1", "Product 2", "Collection", "Creator Pick"].map((item) => (
                <div key={item} className="bento-card p-2.5 text-center">
                  <div className="w-full h-12 rounded-lg bg-muted mb-1.5" />
                  <span className="text-[10px] font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </PhoneMockup>
        </div>
      </BoardSection>

      {/* Onboarding */}
      <BoardSection title="Merchant Onboarding" subtitle="10 steps from demo to live." number="03" tag="Flow">
        <div className="grid grid-cols-12 gap-5">
          {[
            { n: "01", t: "Book demo", phase: "Discover", cols: "col-span-2" },
            { n: "02", t: "Qualify category", phase: "Discover", cols: "col-span-2" },
            { n: "03", t: "Create account", phase: "Setup", cols: "col-span-2" },
            { n: "04", t: "Build profile", phase: "Setup", cols: "col-span-3" },
            { n: "05", t: "Select program", phase: "Config", cols: "col-span-3" },
            { n: "06", t: "Set commissions", phase: "Config", cols: "col-span-3" },
            { n: "07", t: "Create join pages", phase: "Build", cols: "col-span-3" },
            { n: "08", t: "Launch missions", phase: "Build", cols: "col-span-2" },
            { n: "09", t: "Begin recruitment", phase: "Launch", cols: "col-span-2" },
            { n: "10", t: "Go live", phase: "Launch", cols: "col-span-2", accent: true },
          ].map((step) => (
            <div key={step.n} className={`${step.cols} ${step.accent ? "bento-card-accent" : "bento-card"} p-5 flex flex-col gap-2`}>
              <div className="flex items-center justify-between">
                <span className={`text-xl font-display font-black tracking-tighter ${step.accent ? 'text-primary-foreground/30' : 'text-primary/20'}`}>{step.n}</span>
                <span className={`text-[10px] font-mono uppercase ${step.accent ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>{step.phase}</span>
              </div>
              <p className={`text-sm font-semibold leading-snug ${step.accent ? 'text-primary-foreground' : 'text-foreground'}`}>{step.t}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default MVPSection;
