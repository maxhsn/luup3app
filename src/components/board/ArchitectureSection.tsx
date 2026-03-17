import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";

const ArchitectureSection = () => {
  const [activeArch, setActiveArch] = useState(0);
  const [activeParticipant, setActiveParticipant] = useState(0);

  const archLayers = [
    {
      id: 0, layer: "Consumer Layer", label: "LUUP App", icon: "📱",
      desc: "This is the only app users download.",
      features: [
        "Create their profile", "Follow brands", "Join brand communities", "Browse ecosystems",
        "Access missions", "Generate codes", "Use affiliate links", "Build personal storefronts",
        "Build personal communities", "Recruit others", "Earn across 4 tiers", "Track earnings in wallet",
        "Post content to wall feeds", "Climb leaderboards", "Discover offers & rewards",
      ],
    },
    {
      id: 1, layer: "Merchant Layer", label: "LUUP Activate", icon: "🏪",
      desc: "The merchant growth operating system — recruitment, onboarding, management, analytics, and AI-driven automation.",
      features: [
        "Onboard", "Set commissions", "Launch programs", "Manage recruitment",
        "Create missions", "Manage codes and links", "View analytics",
        "Scout recruitment engine", "Agent AI configuration", "Outreach CRM",
      ],
    },
    {
      id: 2, layer: "Ecosystem Layer", label: "Vertical Worlds", icon: "🌍",
      desc: "Category-specific hubs inside LUUP — not separate apps.",
      features: [
        "Discovery layer", "Relevance filter", "Recruitment channel",
        "Vertical content", "Focused missions", "Cultural relevance",
      ],
    },
    {
      id: 3, layer: "Recruitment Layer", label: "LUUP Scout", icon: "🔍",
      desc: "Built-in recruitment engine — find, recruit, and activate the right people from a 75M+ verified contact database.",
      features: [
        "75M+ verified contacts", "Search by niche, geography, audience", "Filter by creator type & engagement",
        "Build segmented lists", "DM / Email / SMS / WhatsApp outreach", "Recruitment CRM pipeline",
        "Agent AI autonomous operation", "Prospect scoring & prioritisation",
      ],
    },
    {
      id: 4, layer: "Intelligence Layer", label: "Agent AI", icon: "🤖",
      desc: "AI-powered growth operator — not a chatbot. Works across storefront conversion, ambassador activation, and autonomous recruitment.",
      features: [
        "Store Agent — product Q&A, guided selling", "Support Agent — policy & returns handling",
        "Ambassador Agent — programme invitations at right moment", "Onboarding Agent — step-by-step sign-up guidance",
        "Recruit Agent — Scout-powered prospect finding", "Outreach Agent — campaign writing & follow-up",
        "Growth Agent — performance analysis & next-best actions", "Intent detection & lead capture",
      ],
    },
  ];

  const participants = [
    {
      icon: "🏪", name: "Brands / Merchants", desc: "Recruit customers, generate UGC, drive sales, create repeatable growth",
      details: ["Recruit customers", "Generate UGC", "Drive sales", "Create repeatable word-of-mouth growth", "Gain visibility in ecosystems", "Use Scout to find affiliates & creators", "Deploy Agent AI for autonomous growth"],
    },
    {
      icon: "🛒", name: "Customers", desc: "Join communities, complete missions, share codes, become side hustlers",
      details: ["Join brand communities", "Complete missions", "Earn commissions", "Share codes", "Build their own mini network", "Create content", "Invite friends"],
    },
    {
      icon: "🔗", name: "Affiliates", desc: "Recruit creators, build networks, earn across 4 tiers",
      details: ["Recruit creators & affiliates", "Generate UGC", "Drive sales", "Build communities", "Create repeatable growth", "Gain visibility in ecosystems"],
    },
    {
      icon: "⭐", name: "Influencers", desc: "Personalised funnels, branded communities, sub-influencer networks",
      details: ["Showcase favourite brands", "Personalised funnels", "Launch branded communities", "Recruit sub-influencers", "Earn direct + network royalties", "Activate audience deeply"],
    },
    {
      icon: "🎨", name: "Creators", desc: "UGC missions, earn for content and conversion",
      details: ["Join brand communities", "Respond to UGC missions", "Earn for content and conversion", "Build niche storefronts", "Become trusted curators"],
    },
    {
      icon: "🚀", name: "Side Hustlers", desc: "Share products, refer friends, build personal community, recurring income",
      details: ["Share products they love", "Create simple content", "Refer friends", "Build personal community", "Earn recurring income", "Become top-performing nodes"],
    },
    {
      icon: "👑", name: "Superfans & Niche Leaders", desc: "Lead communities, curate brands, drive UGC, recruit others",
      details: ["Lead communities", "Curate brands", "Drive UGC", "Recruit others", "Build trust inside cultural niches"],
    },
  ];

  return (
    <div className="space-y-6 md:space-y-10">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        <div className="md:col-span-7 bento-card p-8 md:p-12 min-h-[260px] md:min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={12} pattern="wave" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-40" />
          <span className="tag-accent w-fit">Architecture</span>
          <div className="mt-4 md:mt-0">
            <h2 className="text-[2rem] md:text-[3rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              The New LUUP 3.0<br />Architecture.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-[500px]">Five layers working together — consumer app, merchant engine, vertical ecosystems, Scout recruitment, and Agent AI intelligence — all inside one platform.</p>
          </div>
        </div>
        <div className="md:col-span-5 bento-card-accent p-8 md:p-10 min-h-[220px] md:min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={10} cols={10} pattern="scatter" color="hsl(var(--primary-foreground))" size={5} gap={14} className="absolute inset-0 m-auto opacity-20" />
          <span className="text-xs font-mono text-primary-foreground/50 relative z-10">THE FULL MACHINE</span>
          <div className="relative z-10 mt-4 md:mt-0">
            <h3 className="text-xl md:text-2xl font-display font-black text-primary-foreground tracking-tight leading-snug">
              Scout finds the people.<br />Activate onboards them.<br />Agent AI runs everything.
            </h3>
            <p className="text-sm text-primary-foreground/60 mt-3 md:mt-4">
              Tap a link → land on branded LUUP page → join community → begin missions, rewards, referrals, and content creation.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Architecture - Interactive */}
      <BoardSection title="Platform Architecture" number="01" tag="Layers" subtitle="Five interconnected layers powering one experience.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-4 flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {archLayers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveArch(layer.id)}
                className={`text-left p-4 md:p-6 rounded-[1.25rem] border transition-all duration-300 min-w-[200px] md:min-w-0 flex-shrink-0 md:flex-shrink ${
                  activeArch === layer.id
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">{layer.icon}</span>
                  <div>
                    <span className={`text-xs font-mono ${activeArch === layer.id ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>{layer.layer}</span>
                    <h4 className={`text-base md:text-xl font-display font-extrabold tracking-tight ${activeArch === layer.id ? 'text-primary-foreground' : 'text-foreground'}`}>{layer.label}</h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="md:col-span-8 bento-card p-6 md:p-10 relative overflow-hidden min-h-[280px] md:min-h-[360px]">
            <DotGrid rows={6} cols={10} pattern="scatter" color="hsl(var(--primary))" size={4} gap={16} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeArch}>
              <h3 className="text-2xl md:text-3xl font-display font-black text-foreground tracking-tight">{archLayers[activeArch].label}</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-2 mb-6 md:mb-8">{archLayers[activeArch].desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {archLayers[activeArch].features.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs md:text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Scout + Agent AI + Affiliate Network */}
      <BoardSection title="The Growth Machine" number="02" tag="Integration" subtitle="Scout, Affiliate Network, and Agent AI working as one connected system.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <div className="bento-card-accent p-6 md:p-10 min-h-[280px] md:min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={4} cols={4} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute top-6 right-6 opacity-15" />
            <div>
              <span className="text-3xl md:text-4xl">🔍</span>
              <h3 className="text-xl md:text-2xl font-display font-black text-primary-foreground tracking-tight mt-3">LUUP Scout</h3>
              <p className="text-sm text-primary-foreground/60 mt-2">Recruitment infrastructure</p>
            </div>
            <div className="space-y-2 mt-4">
              {["75M+ verified contacts", "Search & filter by niche", "Outreach CRM", "DM / Email / SMS / WhatsApp", "Segmented prospect lists", "£500/mo premium add-on"].map((f) => (
                <div key={f} className="flex items-center gap-2.5 p-2 rounded-lg bg-primary-foreground/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
                  <span className="text-xs font-medium text-primary-foreground/80">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card p-6 md:p-10 min-h-[280px] md:min-h-[340px] flex flex-col justify-between">
            <div>
              <span className="text-3xl md:text-4xl">🔗</span>
              <h3 className="text-xl md:text-2xl font-display font-black text-foreground tracking-tight mt-3">Affiliate Network</h3>
              <p className="text-sm text-muted-foreground mt-2">Scalable performance distribution</p>
            </div>
            <div className="space-y-2 mt-4">
              {["Affiliates & publishers", "Bloggers & media owners", "Performance marketers", "Commission structures", "Sub-affiliate recruitment", "Storefront building"].map((f) => (
                <div key={f} className="flex items-center gap-2.5 p-2 rounded-lg bg-muted/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-foreground rounded-[1.25rem] p-6 md:p-10 min-h-[280px] md:min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={4} cols={4} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-15" />
            <div>
              <span className="text-3xl md:text-4xl">🤖</span>
              <h3 className="text-xl md:text-2xl font-display font-black text-background tracking-tight mt-3">Agent AI</h3>
              <p className="text-sm text-background/50 mt-2">Autonomous growth operator</p>
            </div>
            <div className="space-y-2 mt-4">
              {["Store Agent — guided selling", "Support Agent — instant answers", "Ambassador Agent — smart invites", "Recruit Agent — Scout automation", "Outreach Agent — campaign follow-up", "Growth Agent — next-best actions"].map((f) => (
                <div key={f} className="flex items-center gap-2.5 p-2 rounded-lg bg-background/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-background/50" />
                  <span className="text-xs font-medium text-background/80">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bento-card p-6 md:p-8 mt-4 md:mt-5">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[700px]">
            <strong className="text-foreground">Together they allow LUUP to say:</strong> We don't just help brands manage communities. We help brands find the right people, recruit them, activate them, and scale them automatically.
          </p>
        </div>
      </BoardSection>

      {/* Multi-Ecosystem Brand Tagging */}
      <BoardSection title="Multi-Ecosystem Brand Tagging" number="03" tag="Distribution" subtitle="One brand, multiple discovery surfaces.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-5 bento-card p-6 md:p-10 min-h-[240px] md:min-h-[300px] flex flex-col gap-4 md:gap-6">
            <h3 className="text-lg md:text-xl font-display font-black text-foreground tracking-tight">
              One brand, multiple ecosystems.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A merchant should not live in just one place. Every brand has one central record, one dashboard, one commission engine — but appears across multiple ecosystems.
            </p>
            <div className="mt-auto space-y-2">
              <span className="text-xs font-mono text-muted-foreground">BENEFITS</span>
              {["Broad visibility across full LUUP network", "Deeper relevance inside verticals", "More organic discovery", "Multiple recruitment surfaces", "More efficient growth"].map((b) => (
                <div key={b} className="flex items-center gap-2.5 p-2 md:p-2.5 rounded-lg bg-muted/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs text-foreground font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bento-card-accent p-6 md:p-8 flex flex-col gap-4">
              <span className="text-xs font-mono text-primary-foreground/50">EXAMPLE</span>
              <h4 className="text-base md:text-lg font-display font-bold text-primary-foreground">Hydration / Supplement Brand</h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["LUUP Master", "Combat Market", "RoxNation", "Superminds"].map((eco) => (
                  <span key={eco} className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary-foreground/15 text-primary-foreground">{eco}</span>
                ))}
              </div>
            </div>
            <div className="bg-foreground rounded-[1.25rem] p-6 md:p-8 flex flex-col gap-4">
              <span className="text-xs font-mono text-background/40">EXAMPLE</span>
              <h4 className="text-base md:text-lg font-display font-bold text-background">Football Lifestyle Brand</h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["LUUP Master", "FanDraft", "WanderWorld", "Tastemakers"].map((eco) => (
                  <span key={eco} className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">{eco}</span>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2 bento-card p-5 md:p-6">
              <span className="text-xs font-mono text-muted-foreground mb-3 md:mb-4 block">ECOSYSTEM HUBS</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Combat Market", icon: "🥊" },
                  { name: "FanDraft", icon: "⚽" },
                  { name: "RoxNation", icon: "🎸" },
                  { name: "PetSpace", icon: "🐾" },
                  { name: "Superminds", icon: "🧠" },
                  { name: "WanderWorld", icon: "✈️" },
                  { name: "Tastemakers", icon: "🍽️" },
                  { name: "Future verticals", icon: "➕" },
                ].map((eco) => (
                  <div key={eco.name} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors">
                    <span className="text-lg">{eco.icon}</span>
                    <span className="text-xs md:text-sm font-bold text-foreground">{eco.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Participant Model */}
      <BoardSection title="Participant Model" number="04" tag="Users" subtitle="Seven participant types, one unified platform.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-4 flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {participants.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActiveParticipant(i)}
                className={`text-left p-4 md:p-5 rounded-[1.25rem] border transition-all duration-300 min-w-[180px] md:min-w-0 flex-shrink-0 md:flex-shrink ${
                  activeParticipant === i
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">{p.icon}</span>
                  <div>
                    <h4 className={`text-sm md:text-base font-display font-extrabold tracking-tight ${activeParticipant === i ? 'text-primary-foreground' : 'text-foreground'}`}>{p.name}</h4>
                    <p className={`text-xs mt-0.5 hidden md:block ${activeParticipant === i ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{p.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="md:col-span-8 bento-card p-6 md:p-10 relative overflow-hidden min-h-[300px] md:min-h-[400px]">
            <DotGrid rows={4} cols={6} pattern="scatter" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeParticipant}>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">{participants[activeParticipant].icon}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-black text-foreground tracking-tight">{participants[activeParticipant].name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{participants[activeParticipant].desc}</p>
                </div>
              </div>
              <div className="space-y-2">
                {participants[activeParticipant].details.map((d) => (
                  <div key={d} className="flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs md:text-sm font-medium text-foreground">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>
    </div>
  );
};

export default ArchitectureSection;
