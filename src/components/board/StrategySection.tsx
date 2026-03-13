import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import FlowArrow from "./FlowArrow";
import MetricCard from "./MetricCard";

const StrategySection = () => {
  return (
    <div className="space-y-10">
      {/* Key Metrics */}
      <div className="flex flex-wrap gap-3">
        <MetricCard icon="🎯" label="Platform" value="LUUP 3.0" detail="Networked Commerce OS" />
        <MetricCard icon="👥" label="Participant Types" value="6" detail="Brands → Side Hustlers" />
        <MetricCard icon="🏗️" label="Core Features" value="20" detail="MVP Product Stack" />
        <MetricCard icon="🌍" label="Ecosystems" value="6+" detail="Vertical worlds at launch" />
        <MetricCard icon="💰" label="Pricing Tiers" value="5" detail="Lite → Bespoke" />
      </div>

      {/* Vision & Core Shift */}
      <BoardSection title="Vision & Core Strategic Shift" color="◆">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StickyNote
            color="purple"
            icon="💡"
            title="The Big Idea"
            description="LUUP is the operating system for community commerce. Not just affiliate, not just influencer, not just loyalty — it's where brands, customers, creators, and communities come together."
          />
          <StickyNote
            color="blue"
            icon="🔄"
            title="Strategic Shift"
            description='Move from "separate products and ecosystem ideas" to "one networked commerce platform with multiple vertical worlds inside it."'
          />
          <StickyNote
            color="yellow"
            icon="⚡"
            title="Why It Matters"
            items={[
              "Eliminates multi-app confusion",
              "Unifies user journeys",
              "Compounds network effects",
              "Simplifies merchant onboarding",
              "Clear brand messaging",
            ]}
          />
          <StickyNote
            color="green"
            icon="🏆"
            title="Position Statement"
            description='"LUUP turns communities into commerce" — Every person can become part of commerce by sharing, creating, recruiting, recommending, and growing communities.'
          />
        </div>
      </BoardSection>

      {/* Architecture — Visual Diagram */}
      <BoardSection title="Platform Architecture" color="🏗️">
        <div className="flex flex-col gap-6">
          {/* Architecture diagram */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-6">
              {/* Consumer */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[13px] font-semibold text-foreground tracking-tight">Consumer Layer</span>
                </div>
                <div className="bg-sticky-blue rounded-xl p-4 space-y-2">
                  <p className="text-[12px] font-semibold text-sticky-blue-fg">📱 LUUP App</p>
                  {["Profile & identity", "Follow brands", "Join communities", "Browse ecosystems", "Missions & earn", "Personal storefronts", "Wall feed content"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sticky-blue-fg/40" />
                      <span className="text-[11px] text-sticky-blue-fg/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Merchant */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-sticky-orange-fg" />
                  <span className="text-[13px] font-semibold text-foreground tracking-tight">Merchant Layer</span>
                </div>
                <div className="bg-sticky-orange rounded-xl p-4 space-y-2">
                  <p className="text-[12px] font-semibold text-sticky-orange-fg">🎛️ LUUP Activate</p>
                  {["Dashboard & OS", "Commissions & programs", "Create missions", "Manage recruitment", "Analytics & insights", "Ecosystem placement", "UGC management"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sticky-orange-fg/40" />
                      <span className="text-[11px] text-sticky-orange-fg/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ecosystems */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-sticky-green-fg" />
                  <span className="text-[13px] font-semibold text-foreground tracking-tight">Ecosystem Layer</span>
                </div>
                <div className="bg-sticky-green rounded-xl p-4 space-y-2">
                  <p className="text-[12px] font-semibold text-sticky-green-fg">🌍 Vertical Worlds</p>
                  {["Combat Market", "FanDraft", "RoxNation", "PetSpace", "Superminds", "WanderWorld"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sticky-green-fg/40" />
                      <span className="text-[11px] text-sticky-green-fg/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connection lines */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-primary" />
                <span className="text-[10px] text-muted-foreground">Powers</span>
                <div className="w-6 h-px bg-primary" />
              </div>
              <StickyNote
                color="pink"
                icon="🏷️"
                title="Multi-Ecosystem Brand Tagging"
                description="One brand record, one dashboard — tagged across multiple ecosystems simultaneously."
                compact
                className="!max-w-[260px]"
              />
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Participant Model — Refined Grid */}
      <BoardSection title="Participant Model" color="👥">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          <StickyNote color="blue" icon="🏪" title="Brands" items={["Recruit customers", "Generate UGC", "Drive sales", "Build communities"]} compact />
          <StickyNote color="yellow" icon="🛒" title="Customers" items={["Join communities", "Complete missions", "Share codes", "Become side hustlers"]} compact />
          <StickyNote color="green" icon="🔗" title="Affiliates" items={["Recruit creators", "Drive sales", "Build communities", "4-tier commissions"]} compact />
          <StickyNote color="pink" icon="⭐" title="Influencers" items={["Personal funnels", "Launch communities", "Sub-influencers", "Network royalties"]} compact />
          <StickyNote color="orange" icon="🎨" title="Creators" items={["UGC missions", "Earn for content", "Join brand communities"]} compact />
          <StickyNote color="purple" icon="🚀" title="Side Hustlers" items={["Share products", "Refer friends", "Build community", "Recurring income"]} compact />
        </div>
      </BoardSection>

      {/* Pricing Ladder — Card Grid */}
      <BoardSection title="Commercial Pricing Ladder" color="💰">
        <div className="grid grid-cols-5 gap-3">
          {[
            { name: "Lite", icon: "🌱", color: "yellow" as const, desc: "Basic onboarding for smaller brands", price: "Entry" },
            { name: "Growth", icon: "📈", color: "green" as const, desc: "Recruitment + missions + creator activation", price: "Scale" },
            { name: "Pro", icon: "⚙️", color: "blue" as const, desc: "Advanced segmentation + multiple funnels", price: "Advanced" },
            { name: "Ecosystem", icon: "🌍", color: "purple" as const, desc: "Ecosystem placement + category discovery", price: "Premium" },
            { name: "Bespoke", icon: "🏢", color: "orange" as const, desc: "White-label + enterprise integrations", price: "Custom" },
          ].map((tier) => (
            <div key={tier.name} className="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-sm">
              <span className="text-xl">{tier.icon}</span>
              <div>
                <p className="text-[13px] font-semibold text-foreground tracking-tight">{tier.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{tier.price}</p>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{tier.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
