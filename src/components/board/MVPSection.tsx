import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";
import ProductEcosystemChart from "./ProductEcosystemChart";

const featureGroups = [
  {
    group: "Merchant Tools",
    icon: "🏢",
    color: "var(--stage-onboarding)",
    features: [
      { title: "Core Activation Engine", desc: "Brand recruitment, commission & program management" },
      { title: "Merchant Dashboard", desc: "LUUP Activate — full merchant activation OS" },
      { title: "Join Pages & Funnels", desc: "Branded recruitment pages for customers & creators" },
      { title: "Template Pages", desc: "Pre-built campaign and recruitment funnels" },
    ],
  },
  {
    group: "Customer & Creator",
    icon: "👥",
    color: "var(--stage-participation)",
    features: [
      { title: "User Profiles", desc: "Identity, wallet, followed brands, community" },
      { title: "Creator Applications", desc: "Application flows for creators, influencers, affiliates" },
      { title: "Personal Communities", desc: "Create, recruit, curate brands, run mini campaigns" },
    ],
  },
  {
    group: "Storefronts & Commerce",
    icon: "🛍️",
    color: "var(--stage-conversion)",
    features: [
      { title: "Personal Storefronts", desc: "Favourite products, niche collections, creator picks" },
      { title: "Codes & Referrals", desc: "Generate, manage, track affiliate links" },
      { title: "Wallet & Withdrawals", desc: "Direct + tier + mission rewards tracking" },
      { title: "4-Tier Referral Engine", desc: "Key differentiator — network earnings across 4 tiers", accent: true },
    ],
  },
  {
    group: "Social & Content",
    icon: "📱",
    color: "var(--stage-network)",
    features: [
      { title: "Brand Pages", desc: "Hero image, bio, feed, wall, leaderboard, missions, offers" },
      { title: "Social Wall Feed", desc: "User posts, UGC highlights, brand announcements" },
      { title: "UGC Engine", desc: "Awareness fuel, conversion proof, paid media assets" },
    ],
  },
  {
    group: "Engagement",
    icon: "🎯",
    color: "var(--stage-earnings)",
    features: [
      { title: "Missions Engine", desc: "Share code, unboxing, review, recruit, gym activation" },
      { title: "Leaderboards", desc: "Rankings, gamification, status unlocks" },
      { title: "Notifications", desc: "Real-time sales, activity & mission alerts" },
    ],
  },
  {
    group: "Discovery & AI",
    icon: "🔍",
    color: "var(--stage-discovery)",
    features: [
      { title: "Ecosystem Layer", desc: "Category hubs as discovery and relevance layers" },
      { title: "Ecosystem Tagging", desc: "Multi-vertical brand distribution" },
      { title: "AI Automation", desc: "Automated recruitment, growth, and matching", accent: true },
    ],
  },
];

const featureDetails = [
  {
    title: "Social Brand Pages",
    items: ["Hero / campaign image", "Brand bio & story", "Follower count", "Join / Follow button", "Feed tab", "Wall tab", "Leaderboard", "Activity tab", "Offers & codes", "Social channels", "Community-generated content", "Product highlights", "Mission center"],
  },
  {
    title: "Wall Feed",
    items: ["User posts", "Mission completions", "Brand shout-outs", "UGC highlights", "Brand announcements", "Challenge entries", "Community wins", "Featured members", "Campaign boosts"],
  },
  {
    title: "Missions Engine",
    items: ["Share a code", "First referral sale", "Unboxing video", "Product review", "Training routine", "Before/after", "Story post", "Event attendance", "Recruit a friend", "Gym activation mission"],
  },
  {
    title: "UGC Engine",
    items: ["Awareness fuel", "Conversion proof", "Paid media asset creation", "Missions for customers, creators, influencers, fighters, superfans, affiliates"],
  },
  {
    title: "Wallet",
    items: ["Direct earnings", "Tier earnings", "Mission rewards", "Bonuses", "Withdrawals", "Community performance", "Brand-by-brand income", "Ecosystem performance"],
  },
];

const MVPSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const totalFeatures = featureGroups.reduce((sum, g) => sum + g.features.length, 0);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5 bento-card p-12 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={6} cols={8} pattern="triangle" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-50" />
          <span className="tag-accent w-fit">Product Stack</span>
          <div>
            <h2 className="text-[3.2rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              {totalFeatures} Core<br />Features.
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-[300px]">The complete MVP product stack powering LUUP 3.0 — unified into one coherent platform.</p>
          </div>
        </div>
        <div className="col-span-4 bento-card-accent p-10 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={10} cols={10} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute inset-0 m-auto opacity-20" />
          <div className="relative z-10">
            <h3 className="text-[2.5rem] font-display font-black text-primary-foreground tracking-tight leading-[1.05]">
              Structured<br />Data<br />Modules
            </h3>
            <p className="text-sm text-primary-foreground/60 mt-3">Smarter strategies and content for the LUUP frontier.</p>
          </div>
        </div>
        <div className="col-span-3 bg-foreground rounded-[1.25rem] p-8 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={6} cols={6} pattern="full" color="hsl(var(--background))" size={3} gap={12} className="absolute top-6 right-6 opacity-20" />
          <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
            <span className="text-background font-bold">∞</span>
          </div>
          <p className="text-sm text-background/80 leading-relaxed">
            Building transparent, permissionless infrastructure for the next generation of community commerce.
          </p>
        </div>
      </div>

      {/* Feature Grid - Categorized */}
      <BoardSection title="Product Stack" number="01" tag="Features">
        <div className="space-y-10">
          {featureGroups.map((group) => (
            <div key={group.group}>
              {/* Group Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `hsl(${group.color} / 0.12)` }}
                >
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-black tracking-tight text-foreground">{group.group}</h3>
                  <span className="text-xs text-muted-foreground">{group.features.length} features</span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-4 gap-4">
                {group.features.map((f, i) => {
                  const key = `${group.group}-${i}`;
                  const num = String(i + 1).padStart(2, "0");
                  return (
                    <div
                      key={key}
                      onMouseEnter={() => setHoveredFeature(key)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      className={`${f.accent ? "bento-card-accent" : "bento-card"} p-6 flex flex-col gap-3 cursor-default transition-all duration-300 ${
                        hoveredFeature === key ? "shadow-lg scale-[1.02]" : ""
                      } relative overflow-hidden`}
                    >
                      {f.accent && <DotGrid rows={3} cols={3} pattern="full" color="hsl(var(--primary-foreground))" size={3} gap={10} className="absolute top-4 right-4 opacity-20" />}
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-black"
                          style={f.accent
                            ? { background: 'hsl(var(--primary-foreground) / 0.15)', color: 'hsl(var(--primary-foreground))' }
                            : { background: `hsl(${group.color} / 0.1)`, color: `hsl(${group.color})` }
                          }
                        >
                          {num}
                        </span>
                      </div>
                      <h4 className={`text-sm font-display font-bold tracking-tight leading-snug ${f.accent ? 'text-primary-foreground' : 'text-foreground'}`}>{f.title}</h4>
                      <p className={`text-xs leading-relaxed ${f.accent ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Feature Deep Dives - Interactive */}
      <BoardSection title="Feature Deep Dives" number="02" tag="Detail">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 flex flex-col gap-3">
            {featureDetails.map((fd, i) => (
              <button
                key={fd.title}
                onClick={() => setActiveFeature(i)}
                className={`text-left p-5 rounded-[1.25rem] border transition-all duration-300 ${
                  activeFeature === i
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <h4 className={`text-base font-display font-extrabold tracking-tight ${activeFeature === i ? 'text-primary-foreground' : 'text-foreground'}`}>{fd.title}</h4>
              </button>
            ))}
          </div>
          <div className="col-span-9 bento-card p-10 relative overflow-hidden min-h-[320px]">
            <DotGrid rows={4} cols={8} pattern="wave" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeFeature}>
              <h3 className="text-2xl font-display font-black text-foreground tracking-tight mb-6">{featureDetails[activeFeature].title}</h3>
              <div className="grid grid-cols-3 gap-3">
                {featureDetails[activeFeature].items.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Product Ecosystem Chart */}
      <BoardSection title="Product Ecosystem" number="03" tag="Map">
        <div className="bento-card p-10 relative overflow-hidden">
          <DotGrid rows={8} cols={12} pattern="scatter" color="hsl(var(--primary))" size={3} gap={18} className="absolute inset-0 opacity-5" />
          <ProductEcosystemChart />
        </div>
      </BoardSection>

      {/* Merchant Onboarding */}
      <BoardSection title="Merchant Onboarding" subtitle="10 steps from demo to live." number="04" tag="Flow">
        <div className="grid grid-cols-12 gap-5">
          {[
            { n: "01", t: "Book demo", phase: "Discover", cols: "col-span-2" },
            { n: "02", t: "Qualify category fit", phase: "Discover", cols: "col-span-2" },
            { n: "03", t: "Create merchant account", phase: "Setup", cols: "col-span-2" },
            { n: "04", t: "Build core profile", phase: "Setup", cols: "col-span-3", detail: "Logo, bio, channels, products, category & ecosystem tags" },
            { n: "05", t: "Select program type", phase: "Config", cols: "col-span-3", detail: "Customer ambassador, affiliate, influencer, creator, hybrid" },
            { n: "06", t: "Set commission logic", phase: "Config", cols: "col-span-3", detail: "Direct commissions, mission rewards, 4-tier structure, code terms" },
            { n: "07", t: "Create join pages", phase: "Build", cols: "col-span-3", detail: "Customer join page + creator join page" },
            { n: "08", t: "Launch first missions", phase: "Build", cols: "col-span-2" },
            { n: "09", t: "Begin recruitment", phase: "Launch", cols: "col-span-2" },
            { n: "10", t: "Go live in LUUP", phase: "Launch", cols: "col-span-2", accent: true },
          ].map((step) => (
            <div key={step.n} className={`${step.cols} ${step.accent ? "bento-card-accent" : "bento-card"} p-5 flex flex-col gap-2`}>
              <div className="flex items-center justify-between">
                <span className={`text-xl font-display font-black tracking-tighter ${step.accent ? 'text-primary-foreground/30' : 'text-primary/20'}`}>{step.n}</span>
                <span className={`text-[10px] font-mono uppercase ${step.accent ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>{step.phase}</span>
              </div>
              <p className={`text-sm font-semibold leading-snug ${step.accent ? 'text-primary-foreground' : 'text-foreground'}`}>{step.t}</p>
              {'detail' in step && step.detail && (
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.detail}</p>
              )}
            </div>
          ))}
        </div>

        {/* Merchant Promise */}
        <div className="grid grid-cols-6 gap-4 mt-6">
          {["Fast to launch", "Low friction", "Brand-safe", "Measurable", "Social", "Scalable"].map((promise, i) => (
            <div key={promise} className={`${i === 3 ? "bento-card-accent" : "bento-card"} p-5 text-center`}>
              <span className={`text-sm font-display font-bold ${i === 3 ? "text-primary-foreground" : "text-foreground"}`}>{promise}</span>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default MVPSection;
