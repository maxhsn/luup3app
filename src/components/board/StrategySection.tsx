import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import FlowArrow from "./FlowArrow";

const StrategySection = () => {
  return (
    <div className="space-y-8">
      {/* Vision & Core Shift */}
      <BoardSection title="Vision & Core Strategic Shift" color="🎯">
        <div className="flex flex-wrap gap-4">
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

      {/* Architecture */}
      <BoardSection title="New Architecture" color="🏗️">
        <div className="flex flex-wrap items-start gap-4">
          <StickyNote
            color="blue"
            icon="📱"
            title="LUUP App (Consumer)"
            items={[
              "One app users download",
              "Create profile, follow brands",
              "Join brand communities",
              "Browse ecosystems",
              "Access missions & earn",
              "Build personal storefronts",
              "Post content to wall feeds",
            ]}
          />
          <FlowArrow label="powers" />
          <StickyNote
            color="orange"
            icon="🎛️"
            title="LUUP Activate (Merchant)"
            items={[
              "Merchant dashboard & OS",
              "Set commissions & programs",
              "Create missions",
              "Manage recruitment",
              "View analytics",
              "Ecosystem placement",
              "UGC management",
            ]}
          />
          <FlowArrow label="contains" />
          <StickyNote
            color="green"
            icon="🌍"
            title="Ecosystems (Verticals)"
            items={[
              "Combat Market",
              "FanDraft",
              "RoxNation",
              "PetSpace",
              "Superminds",
              "WanderWorld",
              "Future ecosystems",
            ]}
          />
        </div>
        <div className="mt-4">
          <StickyNote
            color="pink"
            icon="🏷️"
            title="Multi-Ecosystem Brand Tagging"
            description="One brand record, one dashboard — but tagged into multiple ecosystems. A supplement brand appears in LUUP master + Combat Market + RoxNation + Superminds simultaneously."
            className="max-w-md"
          />
        </div>
      </BoardSection>

      {/* Participant Model */}
      <BoardSection title="Participant Model" color="👥">
        <div className="flex flex-wrap gap-3">
          <StickyNote color="blue" icon="🏪" title="Brands / Merchants" items={["Recruit customers", "Generate UGC", "Drive sales", "Build communities"]} />
          <StickyNote color="yellow" icon="🛒" title="Customers" items={["Join communities", "Complete missions", "Share codes", "Become side hustlers"]} />
          <StickyNote color="green" icon="🔗" title="Affiliates" items={["Recruit creators", "Drive sales", "Build communities", "Earn 4-tier commissions"]} />
          <StickyNote color="pink" icon="⭐" title="Influencers" items={["Personal funnels", "Launch communities", "Recruit sub-influencers", "Network royalties"]} />
          <StickyNote color="orange" icon="🎨" title="Creators" items={["Respond to UGC missions", "Earn for content", "Join brand communities"]} />
          <StickyNote color="purple" icon="🚀" title="Side Hustlers" items={["Share products they love", "Refer friends", "Build personal community", "Earn recurring income"]} />
        </div>
      </BoardSection>

      {/* Pricing */}
      <BoardSection title="Commercial / Pricing Ladder" color="💰">
        <div className="flex flex-wrap gap-3">
          <StickyNote color="yellow" icon="🌱" title="LUUP Lite" description="Basic onboarding for smaller brands wanting to get started" />
          <StickyNote color="green" icon="📈" title="LUUP Growth" items={["Stronger recruitment", "Mission flows", "Creator activation", "UGC campaigns"]} />
          <StickyNote color="blue" icon="⚙️" title="LUUP Pro" items={["Advanced segmentation", "Multiple join funnels", "Creator workflows"]} />
          <StickyNote color="purple" icon="🌍" title="LUUP Ecosystem" items={["Ecosystem placement", "Category discovery", "Creator matching", "Vertical reporting"]} />
          <StickyNote color="orange" icon="🏢" title="LUUP Bespoke" items={["White-label", "Custom environments", "Enterprise integrations", "Multi-market rollouts"]} />
        </div>
      </BoardSection>
    </div>
  );
};

export default StrategySection;
