import BoardSection from "./BoardSection";
import PhoneMockup, { WireBlock, WireList } from "./PhoneMockup";

const MVPSection = () => {
  return (
    <div className="space-y-24">
      {/* Product Stack */}
      <BoardSection title="20 Core Features" subtitle="The complete MVP product stack powering LUUP 3.0." number="01" tag="Product Stack">
        <div className="grid grid-cols-4 gap-4">
          {[
            { n: "01", title: "Core Activation Engine", desc: "Brand recruitment, commission & program management" },
            { n: "02", title: "Brand Pages", desc: "Profile, feed, leaderboard, missions" },
            { n: "03", title: "Ecosystem Layer", desc: "Category hubs as discovery layers" },
            { n: "04", title: "User Profiles", desc: "Identity, wallet, followed brands" },
            { n: "05", title: "Personal Storefronts", desc: "Curated product collections" },
            { n: "06", title: "Personal Communities", desc: "Create, recruit, curate, earn" },
            { n: "07", title: "Social Wall Feed", desc: "Posts, UGC, brand announcements" },
            { n: "08", title: "Missions Engine", desc: "Share, unbox, review, recruit" },
            { n: "09", title: "UGC Engine", desc: "Awareness fuel + conversion proof" },
            { n: "10", title: "Codes & Referrals", desc: "Generate, manage, track" },
            { n: "11", title: "4-Tier Referral Engine", desc: "Key differentiator — network earnings", accent: true },
            { n: "12", title: "Wallet & Withdrawals", desc: "Direct + tier + mission rewards" },
            { n: "13", title: "Merchant Dashboard", desc: "LUUP Activate — full merchant OS" },
            { n: "14", title: "Join Pages & Funnels", desc: "Branded recruitment pages" },
            { n: "15", title: "Creator Applications", desc: "Application flows for creators" },
            { n: "16", title: "AI Automation", desc: "Automated recruitment & growth", accent: true },
            { n: "17", title: "Notifications", desc: "Real-time sales & activity" },
            { n: "18", title: "Leaderboards", desc: "Rankings & gamification" },
            { n: "19", title: "Ecosystem Tagging", desc: "Multi-vertical distribution" },
            { n: "20", title: "Template Pages", desc: "Pre-built campaign funnels" },
          ].map((f) => (
            <div key={f.n} className={`${f.accent ? "bento-card-accent" : "bento-card"} p-6 flex flex-col gap-3`}>
              <span className={`text-3xl font-display font-black tracking-tighter ${f.accent ? 'opacity-30' : 'text-primary/20'}`}>{f.n}</span>
              <h4 className={`text-base font-display font-bold tracking-tight leading-snug ${f.accent ? '' : 'text-foreground'}`}>{f.title}</h4>
              <p className={`text-sm leading-relaxed ${f.accent ? 'opacity-70' : 'text-muted-foreground'}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Wireframes */}
      <BoardSection title="App UI Wireframes" subtitle="Key screens of the LUUP consumer experience." number="02" tag="Screens">
        <div className="flex flex-wrap gap-8 justify-start">
          <PhoneMockup title="Brand Page">
            <div className="w-full h-20 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/15">
              <span className="text-xs text-primary font-mono">HERO_IMAGE</span>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div className="flex-1">
                <div className="w-20 h-2.5 rounded bg-muted" />
                <div className="w-12 h-2 rounded bg-muted mt-1.5" />
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-primary">
                <span className="text-xs text-primary-foreground font-semibold">Follow</span>
              </div>
            </div>
            <div className="flex gap-1 mt-3">
              {["Feed", "Wall", "Missions", "Rank"].map((tab, i) => (
                <div key={tab} className={`flex-1 py-1.5 rounded-lg text-center ${i === 0 ? 'bg-primary' : 'bg-muted'}`}>
                  <span className={`text-[10px] font-medium ${i === 0 ? 'text-primary-foreground' : 'text-muted-foreground'}`}>{tab}</span>
                </div>
              ))}
            </div>
            <WireBlock label="Product Highlights" height="h-12" />
            <WireBlock label="Active Missions" height="h-12" accent />
            <WireBlock label="Community Feed" height="h-14" />
          </PhoneMockup>

          <PhoneMockup title="Missions">
            <WireBlock label="Active Missions" height="h-8" accent />
            <WireList items={["Share a code — 5 pts", "Unboxing video — 20 pts", "Product review — 15 pts", "Recruit a friend — 25 pts", "Fan challenge — 10 pts"]} />
            <WireBlock label="Completed (3)" height="h-8" />
            <div className="flex gap-2 mt-2">
              <div className="flex-1 bg-primary/10 rounded-xl p-3 text-center border border-primary/15">
                <span className="text-xs text-primary font-semibold">85 pts</span>
              </div>
              <div className="flex-1 bg-muted rounded-xl p-3 text-center">
                <span className="text-xs text-muted-foreground font-semibold">Rank #12</span>
              </div>
            </div>
          </PhoneMockup>

          <PhoneMockup title="Wallet">
            <div className="bg-primary rounded-2xl p-4 text-center">
              <span className="text-xs text-primary-foreground/70">BALANCE</span>
              <p className="text-3xl font-display font-bold text-primary-foreground mt-1">£247.50</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bento-card p-3 text-center">
                <span className="text-[10px] text-muted-foreground">DIRECT</span>
                <p className="text-lg font-display font-bold text-foreground">£120</p>
              </div>
              <div className="bento-card p-3 text-center">
                <span className="text-[10px] text-muted-foreground">NETWORK</span>
                <p className="text-lg font-display font-bold text-foreground">£127.50</p>
              </div>
            </div>
            <WireList items={["Tier 1 — £50", "Tier 2 — £42.50", "Tier 3 — £25", "Tier 4 — £10"]} />
          </PhoneMockup>

          <PhoneMockup title="Storefront">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-muted border border-border" />
              <div>
                <div className="w-24 h-2.5 rounded bg-muted" />
                <div className="w-14 h-2 rounded bg-muted mt-1.5" />
              </div>
            </div>
            <WireBlock label="Share Link" height="h-9" accent />
            <div className="grid grid-cols-2 gap-2">
              {["Product 1", "Product 2", "Collection", "Creator Pick"].map((item) => (
                <div key={item} className="bento-card p-2.5 text-center">
                  <div className="w-full h-12 rounded-lg bg-muted mb-1.5" />
                  <span className="text-[10px] font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </PhoneMockup>
        </div>
      </BoardSection>

      {/* Brand Page Blueprint */}
      <BoardSection title="Social Brand Page Blueprint" number="03" tag="Blueprint">
        <div className="grid grid-cols-4 gap-4">
          {[
            { title: "Hero & Identity", items: ["Hero/campaign image", "Brand bio", "Follower count", "Join/follow button"] },
            { title: "Navigation", items: ["About", "Feed", "Wall", "Leaderboard", "Activity"] },
            { title: "Commerce", items: ["Offers / codes", "Product highlights", "Mission center"] },
            { title: "Social", items: ["Social channels", "Community content", "Featured members"] },
          ].map((card) => (
            <div key={card.title} className="bento-card p-8">
              <h4 className="text-lg font-display font-bold text-foreground">{card.title}</h4>
              <div className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-base text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Onboarding Flow */}
      <BoardSection title="Merchant Onboarding" subtitle="10 steps from demo to live in the LUUP network." number="04" tag="Flow">
        <div className="grid grid-cols-5 gap-4">
          {[
            { n: "01", t: "Book demo or install plugin", phase: "Discover" },
            { n: "02", t: "Qualify category fit", phase: "Discover" },
            { n: "03", t: "Create merchant account", phase: "Setup" },
            { n: "04", t: "Build profile — logo, bio, feed, tags", phase: "Setup" },
            { n: "05", t: "Select program type", phase: "Config" },
            { n: "06", t: "Set commission logic", phase: "Config" },
            { n: "07", t: "Create join pages", phase: "Build" },
            { n: "08", t: "Launch first missions", phase: "Build" },
            { n: "09", t: "Begin recruitment", phase: "Launch" },
            { n: "10", t: "Go live in LUUP network", phase: "Launch", accent: true },
          ].map((step) => (
            <div key={step.n} className={`${step.accent ? "bento-card-accent" : "bento-card"} p-6 flex flex-col gap-3`}>
              <div className="flex items-center justify-between">
                <span className={`text-3xl font-display font-black tracking-tighter ${step.accent ? 'opacity-30' : 'text-primary/20'}`}>{step.n}</span>
                <span className={`tag ${step.accent ? '!bg-primary-foreground/20 !text-primary-foreground' : ''}`}>{step.phase}</span>
              </div>
              <p className={`text-base font-semibold leading-snug ${step.accent ? '' : 'text-foreground'}`}>{step.t}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default MVPSection;
