import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import MetricCard from "./MetricCard";

const StrategySection = () => {
  return (
    <div className="space-y-12">
      {/* Hero Metrics Row */}
      <div className="flex flex-wrap gap-4">
        <MetricCard icon="🎯" label="Platform" value="LUUP 3.0" detail="Networked Commerce OS" accent />
        <MetricCard icon="👥" label="Participants" value="6" detail="Brands → Side Hustlers" />
        <MetricCard icon="🏗️" label="Core Features" value="20" detail="MVP Product Stack" />
        <MetricCard icon="🌍" label="Ecosystems" value="6+" detail="Vertical worlds at launch" />
        <MetricCard icon="💰" label="Pricing Tiers" value="5" detail="Lite → Bespoke" />
      </div>

      {/* Vision — Large editorial cards */}
      <BoardSection title="Vision & Core Strategic Shift" color="◆">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Big Idea — Hero Card */}
          <div className="card-elevated-lg p-8 col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">The Big Idea</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground tracking-tight leading-tight max-w-3xl">
              LUUP is the operating system for community commerce.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Not just affiliate, not just influencer, not just loyalty — it's where brands, customers, creators, and communities come together in one networked platform.
            </p>
          </div>

          {/* Strategic Shift */}
          <div className="card-elevated p-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔄</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Strategic Shift</span>
            </div>
            <p className="text-lg font-display font-bold text-foreground tracking-tight leading-snug">
              From "separate products and ecosystem ideas" to "one networked commerce platform with multiple vertical worlds inside it."
            </p>
          </div>

          {/* Position Statement */}
          <div className="bg-foreground text-background rounded-2xl p-7 flex flex-col gap-4" style={{ boxShadow: 'var(--card-shadow-lg)' }}>
            <div className="flex items-center gap-3">
              <span className="text-xl">🏆</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-background/50">Position Statement</span>
            </div>
            <p className="text-lg font-display font-bold tracking-tight leading-snug">
              "LUUP turns communities into commerce"
            </p>
            <p className="text-base text-background/60 leading-relaxed">
              Every person can become part of commerce by sharing, creating, recruiting, recommending, and growing communities.
            </p>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mt-6 card-elevated p-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">⚡</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why It Matters</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Eliminates multi-app confusion",
              "Unifies user journeys",
              "Compounds network effects",
              "Simplifies merchant onboarding",
              "Clear brand messaging",
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 bg-muted rounded-xl">
                <span className="text-2xl font-display font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm font-semibold text-foreground leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </BoardSection>

      {/* Architecture — Bold 3-column */}
      <BoardSection title="Platform Architecture" color="🏗️">
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              layer: "Consumer Layer",
              label: "📱 LUUP App",
              color: "bg-sticky-blue",
              fg: "text-sticky-blue-fg",
              items: ["Profile & identity", "Follow brands", "Join communities", "Browse ecosystems", "Missions & earn", "Personal storefronts", "Wall feed content"],
            },
            {
              layer: "Merchant Layer",
              label: "🎛️ LUUP Activate",
              color: "bg-sticky-orange",
              fg: "text-sticky-orange-fg",
              items: ["Dashboard & OS", "Commissions & programs", "Create missions", "Manage recruitment", "Analytics & insights", "Ecosystem placement", "UGC management"],
            },
            {
              layer: "Ecosystem Layer",
              label: "🌍 Vertical Worlds",
              color: "bg-sticky-green",
              fg: "text-sticky-green-fg",
              items: ["Combat Market", "FanDraft", "RoxNation", "PetSpace", "Superminds", "WanderWorld"],
            },
          ].map((col) => (
            <div key={col.layer} className="card-elevated p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-base font-display font-bold text-foreground tracking-tight">{col.layer}</span>
              </div>
              <div className={`${col.color} rounded-2xl p-5 space-y-2.5`}>
                <p className={`text-base font-display font-bold ${col.fg}`}>{col.label}</p>
                {col.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${col.fg} opacity-40`} />
                    <span className={`text-sm ${col.fg} opacity-80`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Multi-ecosystem tagging */}
        <div className="mt-5 flex items-center justify-center gap-5">
          <div className="h-px flex-1 bg-border" />
          <div className="card-elevated px-6 py-4 flex items-center gap-3">
            <span className="text-lg">🏷️</span>
            <div>
              <p className="text-base font-display font-bold text-foreground tracking-tight">Multi-Ecosystem Brand Tagging</p>
              <p className="text-sm text-muted-foreground mt-0.5">One brand record, one dashboard — tagged across multiple ecosystems simultaneously.</p>
            </div>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>
      </BoardSection>

      {/* Participant Model */}
      <BoardSection title="Participant Model" color="👥">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <StickyNote color="blue" icon="🏪" title="Brands" items={["Recruit customers", "Generate UGC", "Drive sales", "Build communities"]} compact />
          <StickyNote color="yellow" icon="🛒" title="Customers" items={["Join communities", "Complete missions", "Share codes", "Become side hustlers"]} compact />
          <StickyNote color="green" icon="🔗" title="Affiliates" items={["Recruit creators", "Drive sales", "Build communities", "4-tier commissions"]} compact />
          <StickyNote color="pink" icon="⭐" title="Influencers" items={["Personal funnels", "Launch communities", "Sub-influencers", "Network royalties"]} compact />
          <StickyNote color="orange" icon="🎨" title="Creators" items={["UGC missions", "Earn for content", "Join brand communities"]} compact />
          <StickyNote color="purple" icon="🚀" title="Side Hustlers" items={["Share products", "Refer friends", "Build community", "Recurring income"]} compact />
        </div>
      </BoardSection>

      {/* Pricing — Bold numbered cards */}
      <BoardSection title="Commercial Pricing Ladder" color="💰">
        <div className="grid grid-cols-5 gap-4">
          {[
            { name: "Lite", icon: "🌱", desc: "Basic onboarding for smaller brands", tier: "01" },
            { name: "Growth", icon: "📈", desc: "Recruitment + missions + creator activation", tier: "02" },
            { name: "Pro", icon: "⚙️", desc: "Advanced segmentation + multiple funnels", tier: "03" },
            { name: "Ecosystem", icon: "🌍", desc: "Ecosystem placement + category discovery", tier: "04" },
            { name: "Bespoke", icon: "🏢", desc: "White-label + enterprise integrations", tier: "05" },
          ].map((t, i) => (
            <div key={t.name} className={`rounded-2xl p-6 flex flex-col gap-3 ${i === 4 ? 'bg-foreground text-background' : 'card-elevated'}`}>
              <span className={`text-3xl font-display font-bold tracking-tighter ${i === 4 ? 'text-accent' : 'text-primary'}`}>{t.tier}</span>
              <span className="text-2xl">{t.icon}</span>
              <div>
                <p className={`text-lg font-display font-bold tracking-tight ${i === 4 ? '' : 'text-foreground'}`}>{t.name}</p>
                <p className={`text-sm mt-1 leading-relaxed ${i === 4 ? 'text-background/60' : 'text-muted-foreground'}`}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
