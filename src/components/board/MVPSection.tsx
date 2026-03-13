import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import PhoneMockup, { WireBlock, WireList } from "./PhoneMockup";

const MVPSection = () => {
  return (
    <div className="space-y-10">
      {/* Product Stack — Clean Grid */}
      <BoardSection title="20 Core Features — Product Stack" color="▣">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
              icon={`${f.n}`}
              title={f.title}
              description={f.desc}
              compact
            />
          ))}
        </div>
      </BoardSection>

      {/* UI Wireframes */}
      <BoardSection title="App UI Wireframes" subtitle="Key screens of the LUUP consumer app" color="📱">
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Brand Page */}
          <PhoneMockup title="Brand Page">
            <div className="w-full h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-[9px] text-primary font-medium">Hero Image / Campaign</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-8 h-8 rounded-full bg-muted border border-border" />
              <div>
                <div className="w-16 h-2 rounded bg-foreground/10" />
                <div className="w-10 h-1.5 rounded bg-foreground/5 mt-1" />
              </div>
              <div className="ml-auto px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-[8px] text-primary font-semibold">Follow</span>
              </div>
            </div>
            <div className="flex gap-1 mt-2">
              {["Feed", "Wall", "Missions", "Leaders"].map((tab) => (
                <div key={tab} className="flex-1 py-1 rounded-md bg-muted text-center">
                  <span className="text-[7px] text-muted-foreground">{tab}</span>
                </div>
              ))}
            </div>
            <WireBlock label="Product Highlights" height="h-10" />
            <WireBlock label="Active Missions" height="h-10" accent />
            <WireBlock label="Community Feed" height="h-12" />
          </PhoneMockup>

          {/* Missions */}
          <PhoneMockup title="Missions">
            <WireBlock label="🎯 Active Missions" height="h-6" accent />
            <WireList items={["Share a code — 5 pts", "Unboxing video — 20 pts", "Product review — 15 pts", "Recruit a friend — 25 pts", "Fan challenge — 10 pts"]} />
            <WireBlock label="Completed (3)" height="h-6" />
            <div className="flex gap-2 mt-1">
              <div className="flex-1 bg-sticky-green rounded-lg p-2 text-center">
                <span className="text-[9px] text-sticky-green-fg font-medium">85 pts</span>
              </div>
              <div className="flex-1 bg-sticky-purple rounded-lg p-2 text-center">
                <span className="text-[9px] text-sticky-purple-fg font-medium">Rank #12</span>
              </div>
            </div>
          </PhoneMockup>

          {/* Wallet */}
          <PhoneMockup title="Wallet">
            <div className="bg-primary/10 rounded-xl p-3 text-center border border-primary/20">
              <span className="text-[9px] text-primary">Total Balance</span>
              <p className="text-[18px] font-bold text-foreground mt-0.5">£247.50</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-sticky-yellow rounded-lg p-2 text-center">
                <span className="text-[8px] text-sticky-yellow-fg">Direct</span>
                <p className="text-[11px] font-semibold text-sticky-yellow-fg">£120</p>
              </div>
              <div className="bg-sticky-purple rounded-lg p-2 text-center">
                <span className="text-[8px] text-sticky-purple-fg">Network</span>
                <p className="text-[11px] font-semibold text-sticky-purple-fg">£127.50</p>
              </div>
            </div>
            <WireBlock label="Withdrawal History" height="h-6" />
            <WireList items={["Tier 1 — £50", "Tier 2 — £42.50", "Tier 3 — £25", "Tier 4 — £10"]} />
          </PhoneMockup>

          {/* Storefront */}
          <PhoneMockup title="My Storefront">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted border border-border" />
              <div>
                <div className="w-20 h-2 rounded bg-foreground/10" />
                <div className="w-12 h-1.5 rounded bg-foreground/5 mt-1" />
              </div>
            </div>
            <WireBlock label="Share Storefront Link" height="h-7" accent />
            <div className="grid grid-cols-2 gap-1.5">
              {["Fav Product 1", "Fav Product 2", "Collection 1", "Creator Pick"].map((item) => (
                <div key={item} className="bg-muted rounded-lg p-2 text-center border border-border">
                  <div className="w-full h-8 rounded bg-foreground/5 mb-1" />
                  <span className="text-[7px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </PhoneMockup>
        </div>
      </BoardSection>

      {/* Social Brand Page Blueprint */}
      <BoardSection title="Social Brand Page Blueprint" subtitle="Every brand gets a rich, interactive page" color="📄">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🖼️</span>
              <span className="text-[13px] font-semibold text-foreground tracking-tight">Hero & Identity</span>
            </div>
            <div className="space-y-1.5">
              {["Hero/campaign image", "Brand bio", "Follower count", "Join/follow button"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="text-[11px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">📑</span>
              <span className="text-[13px] font-semibold text-foreground tracking-tight">Navigation Tabs</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {["About", "Feed", "Wall", "Leaderboard", "Activity"].map((tab) => (
                <span key={tab} className="px-2 py-0.5 rounded-full bg-muted text-[10px] text-muted-foreground">{tab}</span>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🛍️</span>
              <span className="text-[13px] font-semibold text-foreground tracking-tight">Commerce</span>
            </div>
            <div className="space-y-1.5">
              {["Offers / codes", "Product highlights", "Mission center"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="text-[11px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">📢</span>
              <span className="text-[13px] font-semibold text-foreground tracking-tight">Social</span>
            </div>
            <div className="space-y-1.5">
              {["Social channels", "Community content", "Featured members"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="text-[11px] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Merchant Onboarding — Timeline */}
      <BoardSection title="Merchant Onboarding Flow" subtitle="10 steps from demo to live" color="📋">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-0">
            {[
              { n: "1", t: "Book demo or install plugin", phase: "Discovery" },
              { n: "2", t: "LUUP qualifies category fit", phase: "Discovery" },
              { n: "3", t: "Create merchant account in Activate", phase: "Setup" },
              { n: "4", t: "Build core profile — logo, bio, product feed, tags", phase: "Setup" },
              { n: "5", t: "Select program type — ambassador, affiliate, influencer, hybrid", phase: "Configure" },
              { n: "6", t: "Set commission logic — direct, missions, 4-tier, codes", phase: "Configure" },
              { n: "7", t: "Create join pages — customer & creator", phase: "Build" },
              { n: "8", t: "Launch first missions & starter offers", phase: "Build" },
              { n: "9", t: "Begin customer & audience recruitment", phase: "Launch" },
              { n: "10", t: "Go live in LUUP network + ecosystems", phase: "Launch" },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-4 pl-0 py-2">
                <div className="w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                  <span className="text-[11px] font-bold text-primary">{step.n}</span>
                </div>
                <div className="pt-1">
                  <span className="text-[10px] text-primary font-semibold uppercase tracking-wider">{step.phase}</span>
                  <p className="text-[13px] text-foreground font-medium tracking-tight mt-0.5">{step.t}</p>
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
