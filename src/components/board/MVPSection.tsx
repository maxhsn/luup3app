import { useState } from "react";
import { LayoutDashboard, Smartphone, Store, Brain, Search, Bot } from "lucide-react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";
import ProductEcosystemChart from "./ProductEcosystemChart";

const deliverableColumns = [
  {
    title: "Merchant Dashboard", subtitle: "LUUP Activate", icon: LayoutDashboard, color: "var(--stage-onboarding)",
    features: [
      { title: "Brand Profile & Setup", desc: "Logo, bio, channels, products, ecosystem tags" },
      { title: "Commission Config", desc: "Direct, tiered, and mission-based commission logic" },
      { title: "Program Management", desc: "Ambassador, affiliate, influencer, creator programs" },
      { title: "Join Pages & Funnels", desc: "Branded recruitment pages for customers & creators" },
      { title: "Template Pages", desc: "Pre-built campaign and recruitment funnels" },
      { title: "Recruitment Tools", desc: "Invite links, QR codes, referral tracking" },
      { title: "Analytics & Reporting", desc: "Performance dashboards and conversion insights" },
    ],
  },
  {
    title: "Consumer App", subtitle: "LUUP Mobile", icon: Smartphone, color: "var(--stage-participation)",
    features: [
      { title: "User Profiles & Wallet", desc: "Identity, earnings, followed brands, community" },
      { title: "Brand Discovery Feed", desc: "Curated brand content and recommendation engine" },
      { title: "Missions & Challenges", desc: "Share, review, unboxing, recruit, gym activation" },
      { title: "Leaderboards & Ranks", desc: "Rankings, gamification, status unlocks" },
      { title: "Social Wall & UGC", desc: "User posts, brand shout-outs, challenge entries" },
      { title: "Notifications & Alerts", desc: "Real-time sales, activity and mission alerts" },
    ],
  },
  {
    title: "Storefronts", subtitle: "Commerce Layer", icon: Store, color: "var(--stage-conversion)",
    features: [
      { title: "Personal Storefronts", desc: "Favourite products, niche collections, creator picks" },
      { title: "Creator Collections", desc: "Curated product bundles and themed shops" },
      { title: "Codes & Referral Links", desc: "Generate, manage, and track affiliate links" },
      { title: "4-Tier Referral Engine", desc: "Network earnings across 4 tiers — key differentiator", accent: true },
      { title: "Wallet & Withdrawals", desc: "Direct + tier + mission rewards tracking" },
      { title: "Community Commerce", desc: "Group buying, shared collections, social proof" },
    ],
  },
  {
    title: "Scout", subtitle: "Recruitment Engine", icon: Search, color: "var(--stage-earnings)",
    features: [
      { title: "75M+ Contact Database", desc: "Verified contacts searchable by niche, geography, audience" },
      { title: "Prospect Search & Filter", desc: "Creator type, engagement, community relevance" },
      { title: "Segmented List Building", desc: "Build targeted lists for affiliates, influencers, creators" },
      { title: "Multi-Channel Outreach", desc: "DM, email, SMS, WhatsApp campaigns" },
      { title: "Recruitment CRM", desc: "Pipeline stages: contacted → interested → onboarded → active" },
      { title: "Agent AI Integration", desc: "Let AI operate Scout autonomously 24/7", accent: true },
    ],
  },
  {
    title: "Agent AI", subtitle: "Intelligence Layer", icon: Bot, color: "var(--stage-discovery)",
    features: [
      { title: "Store Agent", desc: "Product Q&A, guided selling, recommendations" },
      { title: "Support Agent", desc: "Policy, returns, sizing — reduce support friction" },
      { title: "Ambassador Agent", desc: "Smart programme invitations at high-value moments" },
      { title: "Onboarding Agent", desc: "Step-by-step sign-up and first-action guidance" },
      { title: "Recruit Agent", desc: "Scout-powered prospect finding and prioritisation" },
      { title: "Outreach Agent", desc: "Campaign writing, sending, and follow-up" },
      { title: "Growth Agent", desc: "Performance analysis and next-best actions", accent: true },
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
  {
    title: "Agent AI Roles",
    items: ["Store Agent — guided selling & product Q&A", "Support Agent — policies, returns, FAQs", "Ambassador Agent — smart programme invites", "Onboarding Agent — sign-up guidance", "Recruit Agent — Scout-powered finding", "Outreach Agent — campaign follow-up", "Growth Agent — next-best actions & analysis"],
  },
];

const MVPSection = () => {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const totalFeatures = deliverableColumns.reduce((sum, g) => sum + g.features.length, 0);

  return (
    <div className="space-y-6 md:space-y-10">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        <div className="md:col-span-5 bento-card p-8 md:p-12 min-h-[240px] md:min-h-[340px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={6} cols={8} pattern="triangle" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-50" />
          <span className="tag-accent w-fit">Product Stack</span>
          <div className="mt-4 md:mt-0">
            <h2 className="text-[2rem] md:text-[3.2rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              {totalFeatures} Core<br />Features.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-[300px]">The complete product stack — now with Scout recruitment and Agent AI intelligence built in.</p>
          </div>
        </div>
        <div className="md:col-span-4 bento-card-accent p-8 md:p-10 min-h-[200px] md:min-h-[340px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={10} cols={10} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute inset-0 m-auto opacity-20" />
          <div className="relative z-10">
            <h3 className="text-[2rem] md:text-[2.5rem] font-display font-black text-primary-foreground tracking-tight leading-[1.05]">
              6 Core<br />Deliverables
            </h3>
            <p className="text-sm text-primary-foreground/60 mt-3">Dashboard · App · Storefronts · Scout · Agent AI · Ecosystems</p>
          </div>
        </div>
        <div className="md:col-span-3 bg-foreground rounded-[1.25rem] p-6 md:p-8 min-h-[180px] md:min-h-[340px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={6} cols={6} pattern="full" color="hsl(var(--background))" size={3} gap={12} className="absolute top-6 right-6 opacity-20" />
          <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
            <span className="text-background font-bold">∞</span>
          </div>
          <p className="text-sm text-background/80 leading-relaxed mt-4 md:mt-0">
            Recruitment + activation + affiliate network + autonomous AI growth infrastructure — all in one platform.
          </p>
        </div>
      </div>

      {/* Visual Feature Map */}
      <BoardSection title="Product Stack" number="01" tag="Feature Map" subtitle="The complete feature set across six deliverables.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {deliverableColumns.map((col, ci) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className="flex flex-col gap-0 transition-all duration-300"
                onMouseEnter={() => setHoveredCol(ci)}
                onMouseLeave={() => setHoveredCol(null)}
              >
                <div
                  className="rounded-t-[1.25rem] p-5 md:p-6 pb-4 md:pb-5 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, hsl(${col.color}), hsl(${col.color} / 0.85))`,
                  }}
                >
                  <DotGrid rows={3} cols={4} pattern="scatter" color="hsl(0 0% 100%)" size={3} gap={12} className="absolute top-3 right-3 opacity-15" />
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Icon size={18} color="white" />
                    </div>
                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest">{col.subtitle}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-display font-black text-white tracking-tight leading-tight">{col.title}</h3>
                  <span className="text-xs font-mono text-white/50 mt-1 block">{col.features.length} features</span>
                </div>

                <div className="flex flex-col gap-px bg-border rounded-b-[1.25rem] overflow-hidden">
                  {col.features.map((f, fi) => {
                    const num = String(fi + 1).padStart(2, "0");
                    return (
                      <div
                        key={f.title}
                        className={`p-3 md:p-4 transition-all duration-200 ${
                          f.accent ? "bg-foreground" : "bg-card hover:bg-muted/60"
                        }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <span
                            className="w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center text-xs font-display font-black flex-shrink-0 mt-0.5"
                            style={f.accent
                              ? { background: 'hsl(var(--background) / 0.15)', color: 'hsl(var(--background))' }
                              : { background: `hsl(${col.color} / 0.1)`, color: `hsl(${col.color})` }
                            }
                          >
                            {num}
                          </span>
                          <div className="min-w-0">
                            <h4 className={`text-xs md:text-sm font-display font-bold tracking-tight leading-snug ${
                              f.accent ? "text-background" : "text-foreground"
                            }`}>
                              {f.title}
                            </h4>
                            <p className={`text-xs leading-relaxed mt-0.5 md:mt-1 ${
                              f.accent ? "text-background/50" : "text-muted-foreground"
                            }`}>
                              {f.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </BoardSection>

      {/* Feature Deep Dives */}
      <BoardSection title="Feature Deep Dives" number="02" tag="Detail" subtitle="Explore the key feature areas in depth.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-3 flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {featureDetails.map((fd, i) => (
              <button
                key={fd.title}
                onClick={() => setActiveFeature(i)}
                className={`text-left p-4 md:p-5 rounded-[1.25rem] border transition-all duration-300 min-w-[140px] md:min-w-0 flex-shrink-0 md:flex-shrink ${
                  activeFeature === i
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <h4 className={`text-sm md:text-base font-display font-extrabold tracking-tight ${activeFeature === i ? 'text-primary-foreground' : 'text-foreground'}`}>{fd.title}</h4>
              </button>
            ))}
          </div>
          <div className="md:col-span-9 bento-card p-6 md:p-10 relative overflow-hidden min-h-[260px] md:min-h-[320px]">
            <DotGrid rows={4} cols={8} pattern="wave" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeFeature}>
              <h3 className="text-xl md:text-2xl font-display font-black text-foreground tracking-tight mb-4 md:mb-6">{featureDetails[activeFeature].title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {featureDetails[activeFeature].items.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Product Ecosystem Chart */}
      <BoardSection title="Product Ecosystem" number="03" tag="Map" subtitle="How the six deliverables connect.">
        <div className="bento-card p-6 md:p-10 relative overflow-hidden overflow-x-auto">
          <DotGrid rows={8} cols={12} pattern="scatter" color="hsl(var(--primary))" size={3} gap={18} className="absolute inset-0 opacity-5" />
          <ProductEcosystemChart />
        </div>
      </BoardSection>

      {/* Merchant Onboarding */}
      <BoardSection title="Merchant Onboarding" subtitle="From demo to live — now with Scout activation." number="04" tag="Flow">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-5">
          {[
            { n: "01", t: "Book demo", phase: "Discover", cols: "lg:col-span-2 md:col-span-2" },
            { n: "02", t: "Qualify category fit", phase: "Discover", cols: "lg:col-span-2 md:col-span-2" },
            { n: "03", t: "Create merchant account", phase: "Setup", cols: "lg:col-span-2 md:col-span-2" },
            { n: "04", t: "Build core profile", phase: "Setup", cols: "lg:col-span-3 md:col-span-3", detail: "Logo, bio, channels, products, category & ecosystem tags" },
            { n: "05", t: "Select program type", phase: "Config", cols: "lg:col-span-3 md:col-span-3", detail: "Customer ambassador, affiliate, influencer, creator, hybrid" },
            { n: "06", t: "Set commission logic", phase: "Config", cols: "lg:col-span-3 md:col-span-3", detail: "Direct commissions, mission rewards, 4-tier structure, code terms" },
            { n: "07", t: "Create join pages", phase: "Build", cols: "lg:col-span-3 md:col-span-3", detail: "Customer, affiliate, creator, influencer, ambassador pages" },
            { n: "08", t: "Launch first missions", phase: "Build", cols: "lg:col-span-2 md:col-span-2" },
            { n: "09", t: "Activate Scout recruitment", phase: "Launch", cols: "lg:col-span-2 md:col-span-2" },
            { n: "10", t: "Configure Agent AI", phase: "Launch", cols: "lg:col-span-2 md:col-span-2" },
            { n: "11", t: "Go live in LUUP", phase: "Launch", cols: "lg:col-span-2 md:col-span-2", accent: true },
          ].map((step) => (
            <div key={step.n} className={`${step.cols} ${step.accent ? "bento-card-accent" : "bento-card"} p-4 md:p-5 flex flex-col gap-2`}>
              <div className="flex items-center justify-between">
                <span className={`text-lg md:text-xl font-display font-black tracking-tighter ${step.accent ? 'text-primary-foreground/30' : 'text-primary/20'}`}>{step.n}</span>
                <span className={`text-xs font-mono uppercase ${step.accent ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>{step.phase}</span>
              </div>
              <p className={`text-xs md:text-sm font-semibold leading-snug ${step.accent ? 'text-primary-foreground' : 'text-foreground'}`}>{step.t}</p>
              {'detail' in step && step.detail && (
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mt-4 md:mt-6">
          {["Fast to launch", "Low friction", "Brand-safe", "Scout-powered", "AI-activated", "Scalable"].map((promise, i) => (
            <div key={promise} className={`${i === 3 ? "bento-card-accent" : "bento-card"} p-3 md:p-5 text-center`}>
              <span className={`text-xs md:text-sm font-display font-bold ${i === 3 ? "text-primary-foreground" : "text-foreground"}`}>{promise}</span>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default MVPSection;
