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
      desc: "The merchant dashboard / activation OS — not a separate consumer app.",
      features: [
        "Onboard", "Set commissions", "Launch programs", "Manage recruitment",
        "Create missions", "Manage codes and links", "View analytics",
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
  ];

  const participants = [
    {
      icon: "🏪", name: "Brands / Merchants", desc: "Recruit customers, generate UGC, drive sales, create repeatable growth",
      details: ["Recruit customers", "Generate UGC", "Drive sales", "Create repeatable word-of-mouth growth", "Gain visibility in ecosystems"],
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
      details: ["Join brand communities", "Respond to UGC missions", "Earn for content and conversion"],
    },
    {
      icon: "🚀", name: "Side Hustlers", desc: "Share products, refer friends, build personal community, recurring income",
      details: ["Share products they love", "Create simple content", "Refer friends", "Build personal community", "Earn recurring income", "Become top-performing nodes"],
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7 bento-card p-12 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={12} pattern="wave" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-40" />
          <span className="tag-accent w-fit">Architecture</span>
          <div>
            <h2 className="text-[3rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              The New LUUP 3.0<br />Architecture.
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-[500px]">Three layers working together — consumer app, merchant engine, and vertical ecosystems — all inside one platform.</p>
          </div>
        </div>
        <div className="col-span-5 bento-card-accent p-10 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={10} cols={10} pattern="scatter" color="hsl(var(--primary-foreground))" size={5} gap={14} className="absolute inset-0 m-auto opacity-20" />
          <span className="text-xs font-mono text-primary-foreground/50 relative z-10">ONE CLEAR EXPERIENCE</span>
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-black text-primary-foreground tracking-tight leading-snug">
              A brand invites people to:<br />"Join our LUUP community"
            </h3>
            <p className="text-sm text-primary-foreground/60 mt-4">
              Tap a link → land on branded LUUP page → join community → begin missions, rewards, referrals, and content creation.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Architecture - Interactive */}
      <BoardSection title="Platform Architecture" number="04" tag="Layers">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4 flex flex-col gap-3">
            {archLayers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveArch(layer.id)}
                className={`text-left p-6 rounded-[1.25rem] border transition-all duration-300 ${
                  activeArch === layer.id
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{layer.icon}</span>
                  <div>
                    <span className={`text-xs font-mono ${activeArch === layer.id ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>{layer.layer}</span>
                    <h4 className={`text-xl font-display font-extrabold tracking-tight ${activeArch === layer.id ? 'text-primary-foreground' : 'text-foreground'}`}>{layer.label}</h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="col-span-8 bento-card p-10 relative overflow-hidden min-h-[360px]">
            <DotGrid rows={6} cols={10} pattern="scatter" color="hsl(var(--primary))" size={4} gap={16} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeArch}>
              <h3 className="text-3xl font-display font-black text-foreground tracking-tight">{archLayers[activeArch].label}</h3>
              <p className="text-base text-muted-foreground mt-2 mb-8">{archLayers[activeArch].desc}</p>
              <div className="grid grid-cols-2 gap-3">
                {archLayers[activeArch].features.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Multi-Ecosystem Brand Tagging */}
      <BoardSection title="Multi-Ecosystem Brand Tagging" number="05" tag="Distribution">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 bento-card p-10 min-h-[300px] flex flex-col gap-6">
            <h3 className="text-xl font-display font-black text-foreground tracking-tight">
              One brand, multiple ecosystems.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A merchant should not live in just one place. Every brand has one central record, one dashboard, one commission engine — but appears across multiple ecosystems.
            </p>
            <div className="mt-auto space-y-2">
              <span className="text-xs font-mono text-muted-foreground">BENEFITS</span>
              {["Broad visibility across full LUUP network", "Deeper relevance inside verticals", "More organic discovery", "Multiple recruitment surfaces", "More efficient growth"].map((b) => (
                <div key={b} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs text-foreground font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-7 grid grid-cols-2 gap-4">
            {/* Example 1 */}
            <div className="bento-card-accent p-8 flex flex-col gap-4">
              <span className="text-xs font-mono text-primary-foreground/50">EXAMPLE</span>
              <h4 className="text-lg font-display font-bold text-primary-foreground">Hydration / Supplement Brand</h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["LUUP Master", "Combat Market", "RoxNation", "Superminds"].map((eco) => (
                  <span key={eco} className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary-foreground/15 text-primary-foreground">{eco}</span>
                ))}
              </div>
            </div>
            {/* Example 2 */}
            <div className="bg-foreground rounded-[1.25rem] p-8 flex flex-col gap-4">
              <span className="text-xs font-mono text-background/40">EXAMPLE</span>
              <h4 className="text-lg font-display font-bold text-background">Football Lifestyle Brand</h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["LUUP Master", "FanDraft", "WanderWorld", "Lifestyle"].map((eco) => (
                  <span key={eco} className="px-2.5 py-1 rounded-full text-xs font-medium bg-background/15 text-background">{eco}</span>
                ))}
              </div>
            </div>
            {/* Ecosystems grid */}
            <div className="col-span-2 bento-card p-6">
              <span className="text-xs font-mono text-muted-foreground mb-4 block">ECOSYSTEM HUBS</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Combat Market", icon: "🥊" },
                  { name: "FanDraft", icon: "⚽" },
                  { name: "RoxNation", icon: "🎸" },
                  { name: "PetSpace", icon: "🐾" },
                  { name: "Superminds", icon: "🧠" },
                  { name: "WanderWorld", icon: "✈️" },
                ].map((eco) => (
                  <div key={eco.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors">
                    <span className="text-lg">{eco.icon}</span>
                    <span className="text-sm font-bold text-foreground">{eco.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Participant Model */}
      <BoardSection title="Participant Model" number="06" tag="Users">
        <div className="grid grid-cols-12 gap-5">
          {/* Participant selector */}
          <div className="col-span-4 flex flex-col gap-3">
            {participants.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActiveParticipant(i)}
                className={`text-left p-5 rounded-[1.25rem] border transition-all duration-300 ${
                  activeParticipant === i
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h4 className={`text-base font-display font-extrabold tracking-tight ${activeParticipant === i ? 'text-primary-foreground' : 'text-foreground'}`}>{p.name}</h4>
                    <p className={`text-xs mt-0.5 ${activeParticipant === i ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{p.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="col-span-8 bento-card p-10 relative overflow-hidden min-h-[400px]">
            <DotGrid rows={4} cols={6} pattern="scatter" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeParticipant}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{participants[activeParticipant].icon}</span>
                <div>
                  <h3 className="text-2xl font-display font-black text-foreground tracking-tight">{participants[activeParticipant].name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{participants[activeParticipant].desc}</p>
                </div>
              </div>
              <div className="space-y-2">
                {participants[activeParticipant].details.map((d) => (
                  <div key={d} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">{d}</span>
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
