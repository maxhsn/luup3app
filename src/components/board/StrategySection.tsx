import BoardSection from "./BoardSection";

const StrategySection = () => {
  return (
    <div className="space-y-14">
      {/* Hero Metrics — Bento Grid */}
      <div className="grid grid-cols-5 gap-3">
        <div className="bento-card-accent col-span-2 p-8 flex flex-col justify-between min-h-[200px]">
          <span className="text-sm font-mono opacity-70">PLATFORM</span>
          <div>
            <h2 className="text-5xl font-display font-bold tracking-tighter">LUUP 3.0</h2>
            <p className="text-lg opacity-80 mt-2">Networked Commerce Operating System</p>
          </div>
        </div>
        {[
          { label: "PARTICIPANTS", value: "6", sub: "Brands → Side Hustlers" },
          { label: "CORE FEATURES", value: "20", sub: "MVP Product Stack" },
          { label: "ECOSYSTEMS", value: "6+", sub: "Vertical worlds" },
        ].map((m) => (
          <div key={m.label} className="bento-card p-6 flex flex-col justify-between min-h-[200px]">
            <span className="text-xs font-mono text-muted-foreground">{m.label}</span>
            <div>
              <span className="text-5xl font-display font-bold text-foreground tracking-tighter">{m.value}</span>
              <p className="text-sm text-muted-foreground mt-2">{m.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vision */}
      <BoardSection title="Vision & Core Strategic Shift" tag="01">
        <div className="grid grid-cols-2 gap-3">
          <div className="bento-card-white p-8 flex flex-col gap-5">
            <span className="text-xs font-mono text-muted-foreground">THE BIG IDEA</span>
            <h3 className="text-3xl font-display font-bold tracking-tight leading-tight" style={{ color: 'hsl(0 0% 8%)' }}>
              LUUP is the operating system for community commerce.
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'hsl(0 0% 40%)' }}>
              Not just affiliate, not just influencer, not just loyalty — it's where brands, customers, creators, and communities converge.
            </p>
          </div>
          <div className="bento-card p-8 flex flex-col gap-5">
            <span className="text-xs font-mono text-muted-foreground">STRATEGIC SHIFT</span>
            <h3 className="text-2xl font-display font-bold tracking-tight leading-snug text-foreground">
              From separate products → one networked platform with multiple vertical worlds inside.
            </h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Unified journeys", "Network effects", "One dashboard", "Clear messaging"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="bento-card col-span-2 p-8">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <span className="text-xs font-mono text-primary">POSITION STATEMENT</span>
                <h3 className="text-3xl font-display font-bold tracking-tight text-foreground mt-3">
                  "LUUP turns communities into commerce"
                </h3>
                <p className="text-base text-muted-foreground mt-3 leading-relaxed max-w-xl">
                  Every person becomes part of commerce — sharing, creating, recruiting, recommending, and growing communities.
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2 flex-1">
                {["Eliminates multi-app confusion", "Unifies user journeys", "Compounds network effects", "Simplifies onboarding", "Clear brand messaging"].map((item, i) => (
                  <div key={i} className="bento-card p-4 flex flex-col gap-2">
                    <span className="text-2xl font-display font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-xs font-medium text-foreground leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Architecture */}
      <BoardSection title="Platform Architecture" tag="02">
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              layer: "Consumer",
              label: "LUUP App",
              accent: false,
              items: ["Profile & identity", "Follow brands", "Join communities", "Browse ecosystems", "Missions & earn", "Personal storefronts", "Wall feed"],
            },
            {
              layer: "Merchant",
              label: "LUUP Activate",
              accent: true,
              items: ["Dashboard & OS", "Commissions", "Create missions", "Recruitment", "Analytics", "Ecosystem placement", "UGC management"],
            },
            {
              layer: "Ecosystem",
              label: "Vertical Worlds",
              accent: false,
              items: ["Combat Market", "FanDraft", "RoxNation", "PetSpace", "Superminds", "WanderWorld"],
            },
          ].map((col) => (
            <div key={col.layer} className={col.accent ? "bento-card-accent p-7" : "bento-card p-7"}>
              <span className={`text-xs font-mono ${col.accent ? 'opacity-70' : 'text-muted-foreground'}`}>{col.layer.toUpperCase()}</span>
              <h3 className={`text-2xl font-display font-bold tracking-tight mt-3 ${col.accent ? '' : 'text-foreground'}`}>{col.label}</h3>
              <div className="mt-5 space-y-2">
                {col.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${col.accent ? 'bg-primary-foreground/40' : 'bg-muted-foreground/40'}`} />
                    <span className={`text-sm ${col.accent ? 'opacity-80' : 'text-muted-foreground'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bento-card mt-3 p-5 flex items-center gap-4">
          <span className="tag-accent font-mono">TAGGING</span>
          <p className="text-sm text-foreground font-semibold">Multi-Ecosystem Brand Tagging</p>
          <span className="text-sm text-muted-foreground">— One brand, one dashboard, tagged across multiple ecosystems.</span>
        </div>
      </BoardSection>

      {/* Participant Model */}
      <BoardSection title="Participant Model" tag="03">
        <div className="grid grid-cols-6 gap-3">
          {[
            { icon: "🏪", name: "Brands", items: ["Recruit customers", "Generate UGC", "Drive sales", "Build communities"] },
            { icon: "🛒", name: "Customers", items: ["Join communities", "Complete missions", "Share codes", "Side hustlers"] },
            { icon: "🔗", name: "Affiliates", items: ["Recruit creators", "Drive sales", "Build communities", "4-tier commissions"] },
            { icon: "⭐", name: "Influencers", items: ["Personal funnels", "Launch communities", "Sub-influencers", "Royalties"] },
            { icon: "🎨", name: "Creators", items: ["UGC missions", "Earn for content", "Join brand communities"] },
            { icon: "🚀", name: "Side Hustlers", items: ["Share products", "Refer friends", "Build community", "Recurring income"] },
          ].map((p) => (
            <div key={p.name} className="bento-card p-5 flex flex-col gap-3">
              <span className="text-2xl">{p.icon}</span>
              <h4 className="text-base font-display font-bold text-foreground tracking-tight">{p.name}</h4>
              <div className="space-y-1.5">
                {p.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Pricing */}
      <BoardSection title="Commercial Pricing" tag="04">
        <div className="grid grid-cols-5 gap-3">
          {[
            { name: "Lite", desc: "Basic onboarding for smaller brands", n: "01" },
            { name: "Growth", desc: "Recruitment + missions + creator activation", n: "02" },
            { name: "Pro", desc: "Advanced segmentation + multiple funnels", n: "03" },
            { name: "Ecosystem", desc: "Ecosystem placement + category discovery", n: "04" },
            { name: "Bespoke", desc: "White-label + enterprise integrations", n: "05", accent: true },
          ].map((t) => (
            <div key={t.name} className={t.accent ? "bento-card-accent p-6 flex flex-col gap-3" : "bento-card p-6 flex flex-col gap-3"}>
              <span className={`text-4xl font-display font-bold tracking-tighter ${t.accent ? '' : 'text-primary'}`}>{t.n}</span>
              <h4 className={`text-xl font-display font-bold tracking-tight ${t.accent ? '' : 'text-foreground'}`}>{t.name}</h4>
              <p className={`text-sm leading-relaxed ${t.accent ? 'opacity-70' : 'text-muted-foreground'}`}>{t.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
