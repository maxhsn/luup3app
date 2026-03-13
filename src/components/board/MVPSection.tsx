import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import PhoneMockup, { WireBlock, WireList } from "./PhoneMockup";

const MVPSection = () => {
  return (
    <div className="space-y-12">
      {/* Product Stack */}
      <BoardSection title="20 Core Features — Product Stack" color="▣">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { n: 1, title: "Core Activation Engine", color: "blue" as const, desc: "Brand recruitment, commission & program management" },
            { n: 2, title: "Brand Pages", color: "blue" as const, desc: "Profile, feed, leaderboard, missions" },
            { n: 3, title: "Ecosystem Layer", color: "green" as const, desc: "Category hubs as discovery layers" },
            { n: 4, title: "User Profiles", color: "yellow" as const, desc: "Identity, wallet, followed brands" },
            { n: 5, title: "Personal Storefronts", color: "yellow" as const, desc: "Curated product collections" },
            { n: 6, title: "Personal Communities", color: "yellow" as const, desc: "Create, recruit, curate, earn" },
            { n: 7, title: "Social Wall Feed", color: "pink" as const, desc: "Posts, UGC, brand announcements" },
            { n: 8, title: "Missions Engine", color: "orange" as const, desc: "Share, unbox, review, recruit, challenge" },
            { n: 9, title: "UGC Engine", color: "orange" as const, desc: "Awareness fuel + conversion proof" },
            { n: 10, title: "Codes & Referral Links", color: "green" as const, desc: "Generate, manage, track" },
            { n: 11, title: "4-Tier Referral Engine", color: "purple" as const, desc: "Key differentiator — network earnings" },
            { n: 12, title: "Wallet & Withdrawals", color: "purple" as const, desc: "Direct + tier + mission rewards" },
            { n: 13, title: "Merchant Dashboard", color: "blue" as const, desc: "LUUP Activate — full merchant OS" },
            { n: 14, title: "Join Pages & Funnels", color: "green" as const, desc: "Branded recruitment pages" },
            { n: 15, title: "Creator Applications", color: "pink" as const, desc: "Application flows for creators" },
            { n: 16, title: "AI Automation", color: "orange" as const, desc: "Automated recruitment & growth" },
            { n: 17, title: "Notifications", color: "yellow" as const, desc: "Real-time sales & activity" },
            { n: 18, title: "Leaderboards", color: "pink" as const, desc: "Rankings & gamification" },
            { n: 19, title: "Ecosystem Tagging", color: "green" as const, desc: "Multi-vertical distribution" },
            { n: 20, title: "Template Pages", color: "blue" as const, desc: "Pre-built campaign funnels" },
          ].map((f) => (
            <StickyNote
              key={f.n}
              color={f.color}
              icon={String(f.n).padStart(2, '0')}
              title={f.title}
              description={f.desc}
              compact
            />
          ))}
        </div>
      </BoardSection>

      {/* UI Wireframes */}
      <BoardSection title="App UI Wireframes" subtitle="Key screens of the LUUP consumer experience" color="📱">
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Brand Page */}
          <PhoneMockup title="Brand Page">
            <div className="w-full h-20 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-xs text-primary font-medium">Hero Image / Campaign</span>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div>
                <div className="w-20 h-2.5 rounded bg-foreground/10" />
                <div className="w-12 h-2 rounded bg-foreground/5 mt-1" />
              </div>
              <div className="ml-auto px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs text-primary font-semibold">Follow</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-3">
              {["Feed", "Wall", "Missions", "Leaders"].map((tab) => (
                <div key={tab} className="flex-1 py-1.5 rounded-lg bg-muted text-center">
                  <span className="text-[10px] font-medium text-muted-foreground">{tab}</span>
                </div>
              ))}
            </div>
            <WireBlock label="Product Highlights" height="h-12" />
            <WireBlock label="Active Missions" height="h-12" accent />
            <WireBlock label="Community Feed" height="h-14" />
          </PhoneMockup>

          {/* Missions */}
          <PhoneMockup title="Missions">
            <WireBlock label="🎯 Active Missions" height="h-8" accent />
            <WireList items={["Share a code — 5 pts", "Unboxing video — 20 pts", "Product review — 15 pts", "Recruit a friend — 25 pts", "Fan challenge — 10 pts"]} />
            <WireBlock label="Completed (3)" height="h-8" />
            <div className="flex gap-2 mt-2">
              <div className="flex-1 bg-sticky-green rounded-xl p-3 text-center">
                <span className="text-xs text-sticky-green-fg font-semibold">85 pts</span>
              </div>
              <div className="flex-1 bg-sticky-purple rounded-xl p-3 text-center">
                <span className="text-xs text-sticky-purple-fg font-semibold">Rank #12</span>
              </div>
            </div>
          </PhoneMockup>

          {/* Wallet */}
          <PhoneMockup title="Wallet">
            <div className="bg-primary/10 rounded-2xl p-4 text-center border border-primary/20">
              <span className="text-xs text-primary font-medium">Total Balance</span>
              <p className="text-2xl font-display font-bold text-foreground mt-1">£247.50</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mt-2">
              <div className="bg-sticky-yellow rounded-xl p-3 text-center">
                <span className="text-xs text-sticky-yellow-fg">Direct</span>
                <p className="text-base font-display font-bold text-sticky-yellow-fg">£120</p>
              </div>
              <div className="bg-sticky-purple rounded-xl p-3 text-center">
                <span className="text-xs text-sticky-purple-fg">Network</span>
                <p className="text-base font-display font-bold text-sticky-purple-fg">£127.50</p>
              </div>
            </div>
            <WireBlock label="Withdrawal History" height="h-8" />
            <WireList items={["Tier 1 — £50", "Tier 2 — £42.50", "Tier 3 — £25", "Tier 4 — £10"]} />
          </PhoneMockup>

          {/* Storefront */}
          <PhoneMockup title="My Storefront">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div>
                <div className="w-24 h-2.5 rounded bg-foreground/10" />
                <div className="w-14 h-2 rounded bg-foreground/5 mt-1" />
              </div>
            </div>
            <WireBlock label="Share Storefront Link" height="h-9" accent />
            <div className="grid grid-cols-2 gap-2">
              {["Fav Product 1", "Fav Product 2", "Collection 1", "Creator Pick"].map((item) => (
                <div key={item} className="bg-muted rounded-xl p-2.5 text-center border border-border">
                  <div className="w-full h-10 rounded-lg bg-foreground/5 mb-1.5" />
                  <span className="text-[10px] font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </PhoneMockup>
        </div>
      </BoardSection>

      {/* Social Brand Page Blueprint */}
      <BoardSection title="Social Brand Page Blueprint" subtitle="Every brand gets a rich, interactive page" color="📄">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🖼️", title: "Hero & Identity", items: ["Hero/campaign image", "Brand bio", "Follower count", "Join/follow button"] },
            { icon: "📑", title: "Navigation Tabs", items: ["About", "Feed", "Wall", "Leaderboard", "Activity"] },
            { icon: "🛍️", title: "Commerce", items: ["Offers / codes", "Product highlights", "Mission center"] },
            { icon: "📢", title: "Social", items: ["Social channels", "Community content", "Featured members"] },
          ].map((card) => (
            <div key={card.title} className="card-elevated p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{card.icon}</span>
                <span className="text-base font-display font-bold text-foreground tracking-tight">{card.title}</span>
              </div>
              <div className="space-y-2">
                {card.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Merchant Onboarding */}
      <BoardSection title="Merchant Onboarding Flow" subtitle="10 steps from demo to live" color="📋">
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-1">
            {[
              { n: "01", t: "Book demo or install plugin", phase: "Discovery" },
              { n: "02", t: "LUUP qualifies category fit", phase: "Discovery" },
              { n: "03", t: "Create merchant account in Activate", phase: "Setup" },
              { n: "04", t: "Build core profile — logo, bio, product feed, tags", phase: "Setup" },
              { n: "05", t: "Select program type — ambassador, affiliate, influencer, hybrid", phase: "Configure" },
              { n: "06", t: "Set commission logic — direct, missions, 4-tier, codes", phase: "Configure" },
              { n: "07", t: "Create join pages — customer & creator", phase: "Build" },
              { n: "08", t: "Launch first missions & starter offers", phase: "Build" },
              { n: "09", t: "Begin customer & audience recruitment", phase: "Launch" },
              { n: "10", t: "Go live in LUUP network + ecosystems", phase: "Launch" },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-5 pl-0 py-3">
                <div className="w-10 h-10 rounded-xl bg-card border-2 border-primary flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                  <span className="text-sm font-display font-bold text-primary">{step.n}</span>
                </div>
                <div className="pt-1">
                  <span className="text-xs text-primary font-bold uppercase tracking-widest">{step.phase}</span>
                  <p className="text-base text-foreground font-semibold tracking-tight mt-1">{step.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BoardSection>
    </div>
  );
};

export default MVPSection;
