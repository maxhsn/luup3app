import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";

const MVPSection = () => {
  return (
    <div className="space-y-8">
      {/* Product Stack */}
      <BoardSection title="LUUP 3.0 Product Stack — 20 Core Features" color="🧩">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <StickyNote color="blue" icon="1️⃣" title="Core Activation Engine" description="Central engine for brand recruitment, commission, and program management" />
          <StickyNote color="blue" icon="2️⃣" title="Brand Pages" items={["Profile, bio, channels", "Product feed & offers", "Wall feed & leaderboard", "Missions & creator opps"]} />
          <StickyNote color="green" icon="3️⃣" title="Ecosystem Layer" description="Category-specific hubs (Combat Market, FanDraft, etc.) as discovery layers inside LUUP" />
          <StickyNote color="yellow" icon="4️⃣" title="User Profiles" description="Personal identity, wallet, followed brands, community memberships" />
          <StickyNote color="yellow" icon="5️⃣" title="Personal Storefronts" items={["Favourite products", "Niche collections", "Creator picks", "Easy to share"]} />
          <StickyNote color="yellow" icon="6️⃣" title="Personal Communities" items={["Create own community", "Recruit others", "Curate brands", "Earn from activity"]} />
          <StickyNote color="pink" icon="7️⃣" title="Social Wall Feed" items={["User posts", "Mission completions", "UGC highlights", "Brand announcements", "Community wins"]} />
          <StickyNote color="orange" icon="8️⃣" title="Missions Engine" items={["Share a code", "Unboxing video", "Product review", "Recruit a friend", "Fan challenge"]} />
          <StickyNote color="orange" icon="9️⃣" title="UGC Engine" description="UGC as awareness fuel, conversion proof, and paid media asset creation. Brands launch UGC missions for all participant types." />
          <StickyNote color="green" icon="🔟" title="Codes & Referral Links" description="Generate, manage, and track affiliate codes and referral links" />
          <StickyNote color="purple" icon="1️⃣1️⃣" title="4-Tier Referral Engine" description="Earn from own sales + 3 levels of recruited network activity. Key differentiator." />
          <StickyNote color="purple" icon="1️⃣2️⃣" title="Wallet & Withdrawals" items={["Direct earnings", "Tier earnings", "Mission rewards", "Brand-by-brand income"]} />
          <StickyNote color="blue" icon="1️⃣3️⃣" title="Merchant Dashboard" description="LUUP Activate — onboarding, recruitment, missions, analytics, commissions, growth tools" />
          <StickyNote color="green" icon="1️⃣4️⃣" title="Join Pages & Funnels" description="Branded customer join pages, creator join pages, ambassador recruitment pages" />
          <StickyNote color="pink" icon="1️⃣5️⃣" title="Creator/Influencer Applications" description="Application flows for creators, influencers, and affiliates to join brands" />
          <StickyNote color="orange" icon="1️⃣6️⃣" title="AI Automation & Recruitment" description="AI-powered tools for automating recruitment and community growth" />
          <StickyNote color="yellow" icon="1️⃣7️⃣" title="Notifications & Activity" description="Real-time notifications for sales, missions, community activity" />
          <StickyNote color="pink" icon="1️⃣8️⃣" title="Leaderboards & Gamification" description="Rankings, status levels, achievement unlocks to drive engagement" />
          <StickyNote color="green" icon="1️⃣9️⃣" title="Ecosystem Tagging" description="Multi-ecosystem distribution — one brand visible across relevant verticals" />
          <StickyNote color="blue" icon="2️⃣0️⃣" title="Template Pages & Funnels" description="Pre-built campaign funnels and page templates for fast launch" />
        </div>
      </BoardSection>

      {/* Social Brand Page */}
      <BoardSection title="Social Brand Page Blueprint" subtitle="Every brand gets a rich social brand page" color="📄">
        <div className="flex flex-wrap gap-3">
          <StickyNote color="blue" icon="🖼️" title="Hero & Identity" items={["Hero/campaign image", "Brand bio", "Follower count", "Join/follow button"]} />
          <StickyNote color="yellow" icon="📑" title="Tabs" items={["About", "Feed", "Wall", "Leaderboard", "Activity"]} />
          <StickyNote color="green" icon="🛍️" title="Commerce" items={["Offers / codes", "Product highlights", "Mission center"]} />
          <StickyNote color="pink" icon="📢" title="Social" items={["Social channels", "Community-generated content", "Featured members"]} />
        </div>
      </BoardSection>

      {/* Merchant Onboarding */}
      <BoardSection title="Merchant Onboarding Flow (10 Steps)" color="📋">
        <div className="flex flex-wrap gap-3">
          {[
            { n: "1", t: "Book demo / install plugin" },
            { n: "2", t: "LUUP qualifies category fit" },
            { n: "3", t: "Create merchant account in Activate" },
            { n: "4", t: "Build core profile (logo, bio, product feed, tags)" },
            { n: "5", t: "Select program type (ambassador, affiliate, influencer, hybrid)" },
            { n: "6", t: "Set commission logic (direct, missions, 4-tier, codes)" },
            { n: "7", t: "Create join pages (customer, creator)" },
            { n: "8", t: "Launch first missions & starter offers" },
            { n: "9", t: "Begin customer & audience recruitment" },
            { n: "10", t: "Go live in LUUP network + ecosystems" },
          ].map((step) => (
            <StickyNote key={step.n} color={Number(step.n) % 2 === 0 ? "yellow" : "blue"} icon={`${step.n}.`} title={step.t} />
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default MVPSection;
