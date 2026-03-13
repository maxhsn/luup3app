import BoardSection from "./BoardSection";

const StrategySection = () => {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 bento-card-accent p-10 flex flex-col justify-between min-h-[280px]">
            <span className="text-sm font-mono opacity-60">PLATFORM</span>
            <div>
              <h2 className="text-6xl font-display font-black tracking-tighter leading-none">LUUP 3.0</h2>
              <p className="text-xl opacity-80 mt-3 font-medium">The operating system for<br />community commerce.</p>
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-3 gap-4">
            {[
              { label: "Participants", value: "6", sub: "Brand → Side Hustler" },
              { label: "Core Features", value: "20", sub: "MVP Product Stack" },
              { label: "Ecosystems", value: "6+", sub: "Vertical worlds" },
            ].map((m) => (
              <div key={m.label} className="bento-card p-8 flex flex-col justify-between min-h-[280px]">
                <span className="text-sm text-muted-foreground font-medium">{m.label}</span>
                <div>
                  <span className="stat-value">{m.value}</span>
                  <p className="text-base text-muted-foreground mt-3">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision */}
      <BoardSection title="Vision & Core Strategic Shift" number="01" tag="Strategy">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 bento-card p-10 flex flex-col gap-6">
            <span className="text-sm text-muted-foreground font-medium">The Big Idea</span>
            <h3 className="text-4xl font-display font-extrabold tracking-tight leading-[1.1] text-foreground">
              LUUP is the operating system for community commerce.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Not just affiliate, not just influencer, not just loyalty — it's where brands, customers, creators, and communities converge into one networked platform.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {["Unified journeys", "Network effects", "One dashboard", "Clear messaging"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="col-span-5 flex flex-col gap-4">
            <div className="bento-card-accent p-8 flex-1 flex flex-col justify-between">
              <span className="text-sm font-mono opacity-60">Strategic Shift</span>
              <h3 className="text-2xl font-display font-bold leading-snug mt-4">
                From separate products → one networked platform with multiple vertical worlds inside.
              </h3>
            </div>
            <div className="bento-card p-8 flex-1">
              <span className="text-sm text-primary font-semibold">Position Statement</span>
              <h3 className="text-2xl font-display font-bold tracking-tight text-foreground mt-3 leading-snug">
                "LUUP turns communities into commerce"
              </h3>
              <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                Every person becomes part of commerce — sharing, creating, recruiting, and growing.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {["Eliminates multi-app confusion", "Unifies user journeys", "Compounds network effects", "Simplifies onboarding", "Clear brand messaging"].map((item, i) => (
            <div key={i} className="bento-card p-6 flex flex-col gap-3">
              <span className="text-3xl font-display font-black text-primary/20">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-base font-semibold text-foreground leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Architecture */}
      <BoardSection title="Platform Architecture" number="02" tag="Architecture">
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              layer: "Consumer Layer",
              label: "LUUP App",
              accent: false,
              items: ["Profile & identity", "Follow brands", "Join communities", "Browse ecosystems", "Missions & earn", "Personal storefronts", "Wall feed"],
            },
            {
              layer: "Merchant Layer",
              label: "LUUP Activate",
              accent: true,
              items: ["Dashboard & OS", "Commissions", "Create missions", "Recruitment", "Analytics", "Ecosystem placement", "UGC management"],
            },
            {
              layer: "Ecosystem Layer",
              label: "Vertical Worlds",
              accent: false,
              items: ["Combat Market", "FanDraft", "RoxNation", "PetSpace", "Superminds", "WanderWorld"],
            },
          ].map((col) => (
            <div key={col.layer} className={col.accent ? "bento-card-accent p-8" : "bento-card p-8"}>
              <span className={`text-sm font-medium ${col.accent ? 'opacity-60' : 'text-muted-foreground'}`}>{col.layer}</span>
              <h3 className={`text-3xl font-display font-extrabold tracking-tight mt-2 ${col.accent ? '' : 'text-foreground'}`}>{col.label}</h3>
              <div className="mt-6 space-y-3">
                {col.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${col.accent ? 'bg-primary-foreground/30' : 'bg-primary/30'}`} />
                    <span className={`text-base ${col.accent ? 'opacity-80' : 'text-muted-foreground'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bento-card mt-4 p-6 flex items-center gap-4">
          <span className="tag-accent">Tagging</span>
          <p className="text-base text-foreground font-semibold">Multi-Ecosystem Brand Tagging</p>
          <span className="text-base text-muted-foreground">— One brand, one dashboard, tagged across multiple ecosystems.</span>
        </div>
      </BoardSection>

      {/* Participant Model */}
      <BoardSection title="Participant Model" number="03" tag="Users">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "🏪", name: "Brands", desc: "Recruit customers, generate UGC, drive sales, build communities", items: ["Set commissions", "Create missions", "Manage communities", "Track performance"] },
            { icon: "🛒", name: "Customers", desc: "Join communities, complete missions, share codes, become side hustlers", items: ["Follow brands", "Earn rewards", "Build storefronts", "Refer friends"] },
            { icon: "🔗", name: "Affiliates", desc: "Recruit creators, drive sales, build communities with 4-tier earnings", items: ["Personal links", "Network earnings", "Recruit sub-affiliates", "Royalty income"] },
            { icon: "⭐", name: "Influencers", desc: "Personal funnels, launch communities, sub-influencer networks", items: ["Content creation", "Community leadership", "Revenue share", "Brand partnerships"] },
            { icon: "🎨", name: "Creators", desc: "UGC missions, earn for content, join brand communities", items: ["Mission-based earning", "Portfolio building", "Brand collaborations", "Skill monetization"] },
            { icon: "🚀", name: "Side Hustlers", desc: "Share products, refer friends, build community, recurring income", items: ["Low barrier entry", "Flexible earning", "Social selling", "Growth potential"] },
          ].map((p) => (
            <div key={p.name} className="bento-card p-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{p.icon}</span>
                <h4 className="text-xl font-display font-extrabold text-foreground">{p.name}</h4>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="space-y-2 mt-auto pt-2">
                {p.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Pricing */}
      <BoardSection title="Commercial Pricing" number="04" tag="Revenue">
        <div className="grid grid-cols-5 gap-4">
          {[
            { name: "Lite", desc: "Basic onboarding for smaller brands. Community tools + simple commissions.", n: "01" },
            { name: "Growth", desc: "Recruitment + missions + creator activation. Full community features.", n: "02" },
            { name: "Pro", desc: "Advanced segmentation, multiple funnels, priority support.", n: "03" },
            { name: "Ecosystem", desc: "Ecosystem placement + category discovery + featured positioning.", n: "04" },
            { name: "Bespoke", desc: "White-label + enterprise integrations + dedicated support.", n: "05", accent: true },
          ].map((t) => (
            <div key={t.name} className={`${t.accent ? "bento-card-accent" : "bento-card"} p-8 flex flex-col gap-4`}>
              <span className={`text-5xl font-display font-black tracking-tighter ${t.accent ? 'opacity-30' : 'text-primary/20'}`}>{t.n}</span>
              <h4 className={`text-xl font-display font-extrabold ${t.accent ? '' : 'text-foreground'}`}>{t.name}</h4>
              <p className={`text-base leading-relaxed ${t.accent ? 'opacity-70' : 'text-muted-foreground'}`}>{t.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
