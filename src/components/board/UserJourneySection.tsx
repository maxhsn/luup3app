import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import FlowArrow from "./FlowArrow";

const UserJourneySection = () => {
  return (
    <div className="space-y-8">
      {/* Growth Loop */}
      <BoardSection title="The LUUP Growth Loop" subtitle="7-step flywheel driving compounding advocacy" color="🔄">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { n: "1", title: "Discovery", desc: "User finds a brand or ecosystem in LUUP", color: "blue" as const },
            { n: "2", title: "Join", desc: "User joins a brand community through a branded page", color: "green" as const },
            { n: "3", title: "Participate", desc: "Follow, engage, missions, create content, share offers", color: "yellow" as const },
            { n: "4", title: "Convert", desc: "Codes, links, storefronts drive sales", color: "orange" as const },
            { n: "5", title: "Earn", desc: "Direct actions + tiered network earnings", color: "purple" as const },
            { n: "6", title: "Recruit", desc: "Invite others into their own community", color: "pink" as const },
            { n: "7", title: "Expand", desc: "Network grows, brand benefits from compounding advocacy", color: "green" as const },
          ].map((step, i) => (
            <div key={step.n} className="flex items-center gap-2">
              <StickyNote color={step.color} icon={`${step.n}`} title={step.title} description={step.desc} />
              {i < 6 && <FlowArrow />}
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Onboarding Routes */}
      <BoardSection title="User Onboarding Routes" subtitle="Multiple paths into the same platform" color="🚪">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <StickyNote
              color="blue"
              icon="🏪"
              title="Brand-Led Onboarding"
              items={[
                "QR codes",
                "Email / SMS",
                "Post-purchase flows",
                "Packaging inserts",
                '"Join our community" buttons',
                "Website join pages",
                "Social media links",
                "Ambassador recruitment pages",
              ]}
            />
            <FlowArrow direction="down" label="User lands on branded LUUP page" />
            <StickyNote color="blue" icon="✅" title="Joins brand community" description="Begins missions, rewards, referrals, content creation" />
          </div>

          <div className="space-y-3">
            <StickyNote
              color="green"
              icon="🌍"
              title="Ecosystem-Led Onboarding"
              items={[
                "Fighters, fans, coaches",
                "Gym owners, creators",
                "Side hustlers",
                "Niche influencers",
              ]}
            />
            <FlowArrow direction="down" label="Browse ecosystem brands" />
            <StickyNote color="green" icon="✅" title="Joins relevant communities" description="Discovers brands through vertical context" />
          </div>

          <div className="space-y-3">
            <StickyNote
              color="purple"
              icon="🚀"
              title="LUUP-Led Recruitment"
              items={[
                "Affiliates & creators",
                "Influencers",
                "Side hustlers & superfans",
                "Niche community leaders",
              ]}
            />
            <FlowArrow direction="down" label="Multi-brand participation" />
            <StickyNote color="purple" icon="✅" title="Builds own storefront & community" description="Recruits others, earns network royalties across 4 tiers" />
          </div>
        </div>
      </BoardSection>

      {/* Customer Journey Detail */}
      <BoardSection title="Customer-to-Advocate Journey" subtitle="How a buyer becomes a growth channel" color="🦋">
        <div className="flex flex-wrap items-center gap-2">
          <StickyNote color="yellow" icon="🛒" title="Purchase" description="Customer buys from a brand" />
          <FlowArrow label="invite" />
          <StickyNote color="blue" icon="📲" title="Join LUUP" description="Tap link → branded join page → join community" />
          <FlowArrow label="engage" />
          <StickyNote color="green" icon="🎯" title="First Mission" description="Complete share-a-code or unboxing video mission" />
          <FlowArrow label="earn" />
          <StickyNote color="orange" icon="💰" title="First Earning" description="Earn commission from first referral sale" />
          <FlowArrow label="grow" />
          <StickyNote color="pink" icon="👥" title="Build Community" description="Recruit friends, create personal storefront, become side hustler" />
          <FlowArrow label="scale" />
          <StickyNote color="purple" icon="🏆" title="Community Leader" description="Earn 4-tier royalties, lead a community, climb leaderboards" />
        </div>
      </BoardSection>

      {/* GTM Beachheads */}
      <BoardSection title="Go-To-Market Beachheads" color="🎯">
        <div className="flex flex-wrap gap-3">
          <StickyNote color="orange" icon="🥊" title="Combat Sports" description="Combat Market as flagship ecosystem" />
          <StickyNote color="green" icon="⚽" title="Football Fandom" description="FanDraft vertical" />
          <StickyNote color="pink" icon="🧘" title="Wellness" description="Health & wellness brands" />
          <StickyNote color="blue" icon="💪" title="Performance Lifestyle" description="Fitness, supplements, gear" />
          <StickyNote color="yellow" icon="🐾" title="Pets" description="PetSpace ecosystem" />
          <StickyNote color="purple" icon="🎨" title="Creator-Led Retail" description="Niche creator commerce" />
        </div>
      </BoardSection>

      {/* Target Merchants */}
      <BoardSection title="Target Merchant Profile" color="🎯">
        <div className="flex flex-wrap gap-3">
          <StickyNote color="blue" title="DTC Brands" description="Direct-to-consumer brands with strong customer love" />
          <StickyNote color="green" title="Challenger E-Commerce" description="Brands seeking UGC and affiliate migration" />
          <StickyNote color="yellow" title="Side-Hustle Seekers" description="Brands wanting side-hustle recruitment" />
          <StickyNote color="pink" title="Creator-Ready" description="Brands seeking creator participation" />
          <StickyNote color="orange" title="Ecosystem Fit" description="Brands fitting one or more vertical ecosystems" />
        </div>
      </BoardSection>
    </div>
  );
};

export default UserJourneySection;
