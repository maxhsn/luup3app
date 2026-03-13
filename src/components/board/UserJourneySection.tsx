import { useState } from "react";
import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";
import JourneyTree from "./JourneyTree";
import UserJourneyDiagram from "./UserJourneyDiagram";

const UserJourneySection = () => {
  const [activeRoute, setActiveRoute] = useState(0);

  const routes = [
    {
      icon: "🏪", name: "Brand-Led", desc: "Brands drive users into LUUP",
      tree: {
        label: "Entry Points", icon: "→", accent: true,
        children: [
          { label: "QR codes", icon: "📱" },
          { label: "Email / SMS", icon: "📧" },
          { label: "Post-purchase flows", icon: "📦" },
          { label: "Packaging inserts", icon: "🏷️" },
          { label: "\"Join our community\" buttons", icon: "🔘" },
          { label: "Website join pages", icon: "🌐" },
          { label: "Social media links", icon: "📲" },
          { label: "Creator applications", icon: "🎨" },
          { label: "Joins community → missions, rewards, referrals", icon: "✅", accent: true },
        ],
      },
    },
    {
      icon: "🌍", name: "Ecosystem-Led", desc: "Vertical worlds attract niche users",
      tree: {
        label: "Entry Points", icon: "→", accent: true,
        children: [
          { label: "Fighters & fans", icon: "🥊" },
          { label: "Coaches & gym owners", icon: "💪" },
          { label: "Creators", icon: "🎨" },
          { label: "Side hustlers", icon: "🚀" },
          { label: "Affiliate marketers", icon: "🔗" },
          { label: "Niche influencers", icon: "⭐" },
          { label: "Discovers brands → joins through vertical context", icon: "✅", accent: true },
        ],
      },
    },
    {
      icon: "🚀", name: "LUUP-Led", desc: "Platform-native acquisition",
      tree: {
        label: "LUUP Recruits", icon: "→", accent: true,
        children: [
          { label: "Affiliates", icon: "🔗" },
          { label: "Creators", icon: "🎨" },
          { label: "Influencers", icon: "⭐" },
          { label: "Side hustlers", icon: "🚀" },
          { label: "Superfans", icon: "❤️" },
          { label: "Niche community leaders", icon: "👑" },
          { label: "Joins multiple brands → builds storefront → recruits others → earns 4-tier royalties", icon: "✅", accent: true },
        ],
      },
    },
  ];

  return (
    <div className="space-y-10">
      {/* User Journey Diagram */}
      <UserJourneyDiagram />

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6 bento-card p-12 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={10} pattern="wave" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-40" />
          <span className="tag-accent w-fit">Flywheel</span>
          <div>
            <h2 className="text-[3.2rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              The LUUP<br />Growth Loop.
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-[400px]">A 7-step flywheel driving compounding advocacy and network growth. This is the core engine LUUP should build around.</p>
          </div>
        </div>
        <div className="col-span-6 bento-card-accent p-10 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={12} cols={12} pattern="chart" color="hsl(var(--primary-foreground))" size={5} gap={14} className="absolute inset-0 m-auto opacity-25" />
          <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              { n: "01", title: "Discover", desc: "Find a brand or ecosystem in LUUP" },
              { n: "02", title: "Join", desc: "Join brand community through branded page" },
              { n: "03", title: "Participate", desc: "Follow, engage, missions, content, share" },
              { n: "04", title: "Convert", desc: "Codes, links, storefronts drive sales" },
              { n: "05", title: "Earn", desc: "Direct actions + tiered network activity" },
              { n: "06", title: "Recruit", desc: "Invite others into your community" },
              { n: "07", title: "Expand", desc: "Network grows, brand benefits compound" },
            ].map((step) => (
              <div key={step.n} className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <span className="text-lg font-display font-black text-primary-foreground/40">{step.n}</span>
                <div>
                  <p className="text-sm font-bold text-primary-foreground">{step.title}</p>
                  <p className="text-xs text-primary-foreground/50">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Onboarding Routes - Interactive */}
      <BoardSection title="Onboarding Routes" number="01" tag="Onboarding" subtitle="Three pathways into the LUUP ecosystem.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4 flex flex-col gap-3">
            {routes.map((route, i) => (
              <button
                key={route.name}
                onClick={() => setActiveRoute(i)}
                className={`text-left p-6 rounded-[1.25rem] border transition-all duration-300 ${
                  activeRoute === i
                    ? "bento-card-accent border-transparent"
                    : "bento-card hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{route.icon}</span>
                  <div>
                    <h4 className={`text-lg font-display font-extrabold tracking-tight ${activeRoute === i ? 'text-primary-foreground' : 'text-foreground'}`}>{route.name}</h4>
                    <p className={`text-xs mt-0.5 ${activeRoute === i ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{route.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="col-span-8 bento-card p-10 min-h-[340px] relative overflow-hidden">
            <DotGrid rows={4} cols={6} pattern="scatter" color="hsl(var(--primary))" size={4} gap={14} className="absolute top-6 right-6 opacity-10" />
            <div className="animate-fade-in" key={activeRoute}>
              <h3 className="text-2xl font-display font-black text-foreground tracking-tight mb-6">{routes[activeRoute].name} Onboarding</h3>
              <JourneyTree root={routes[activeRoute].tree} />
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Social UX Layer */}
      <BoardSection title="Social UX Layer" number="02" tag="Experience" subtitle="Making participation feel alive and visible.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 bento-card p-10 min-h-[300px] flex flex-col justify-between">
            <h3 className="text-2xl font-display font-black text-foreground tracking-tight">
              Participation must feel social, alive, and visible.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              LUUP should build a stronger version of Club's social experience. A brand page becomes a mini media hub, a recruitment page, a mission center, and a commerce node.
            </p>
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-4">
            {[
              { title: "Brand Page Features", items: ["Hero image", "Brand bio", "Follower count", "Join button", "Feed & Wall tabs", "Leaderboard", "Mission center"] },
              { title: "Engagement Loop", items: ["Posts & UGC highlights", "Mission completions", "Challenge entries", "Community wins", "Featured members", "Campaign boosts"] },
            ].map((block) => (
              <div key={block.title} className="bento-card p-6">
                <h4 className="text-sm font-display font-bold text-foreground mb-4">{block.title}</h4>
                <div className="space-y-2">
                  {block.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-2 rounded-lg bg-muted/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BoardSection>

      {/* 4-Tier Referral Structure */}
      <BoardSection title="4-Tier Referral Structure" number="03" tag="Referral" subtitle="The core differentiator driving network economics.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 bento-card-accent p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            <DotGrid rows={6} cols={8} pattern="triangle" color="hsl(var(--primary-foreground))" size={5} gap={14} className="absolute bottom-6 right-6 opacity-20" />
            <span className="text-xs font-mono text-primary-foreground/40">YOUR OWN SALES</span>
            <div>
              <span className="text-7xl font-display font-black text-primary-foreground tracking-[-0.06em]">100%</span>
              <p className="text-base text-primary-foreground/60 mt-2">Direct sales and commissions</p>
            </div>
          </div>
          {[
            { tier: "Tier 1", pct: "X%", desc: "From direct recruits' sales" },
            { tier: "Tier 2", pct: "Y%", desc: "From recruits' recruits" },
            { tier: "Tier 3", pct: "Z%", desc: "Third-level network" },
          ].map((t, i) => (
            <div key={t.tier} className={`col-span-${i === 0 ? '3' : '2'} bento-card p-8 flex flex-col justify-between min-h-[280px]`}>
              <span className="text-xs font-mono text-muted-foreground">{t.tier.toUpperCase()}</span>
              <div>
                <span className="text-5xl font-display font-black text-primary tracking-[-0.04em]">{t.pct}</span>
                <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bento-card p-8 mt-5">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[700px]">
            <strong className="text-foreground">This is one of LUUP's most powerful differentiators.</strong> Participants can earn from their own sales, the sales of people they recruit, and network growth across 4 tiers. This turns the platform from simple affiliate logic into true community commerce.
          </p>
        </div>
      </BoardSection>

      {/* GTM Strategy */}
      <BoardSection title="Target Markets" number="04" tag="GTM" subtitle="Vertical-first market entry strategy.">
        <div className="grid grid-cols-12 gap-5">
          {[
            { icon: "🥊", name: "Combat Sports", desc: "Flagship ecosystem — fighters, fans, coaches, gyms", cols: "col-span-4", variant: "blue" as const },
            { icon: "⚽", name: "Football Fandom", desc: "Sports merchandise & fan communities", cols: "col-span-4", variant: "white" as const },
            { icon: "🧘", name: "Wellness", desc: "Health & mindfulness brands", cols: "col-span-4", variant: "dark" as const },
            { icon: "💪", name: "Performance Lifestyle", desc: "Fitness & performance brands", cols: "col-span-3", variant: "white" as const },
            { icon: "🐾", name: "Pets", desc: "Pet communities & products", cols: "col-span-3", variant: "white" as const },
            { icon: "🎨", name: "Creator-Led Retail", desc: "Creator-led niche commerce", cols: "col-span-3", variant: "blue" as const },
            { icon: "🎯", name: "Target Merchants", desc: "DTC, challenger brands, UGC-seeking", cols: "col-span-3", variant: "white" as const },
          ].map((b) => (
            <div key={b.name} className={`${b.cols} ${
              b.variant === "blue" ? "bento-card-accent" :
              b.variant === "dark" ? "bg-foreground rounded-[1.25rem]" :
              "bento-card"
            } p-8 flex flex-col gap-4 relative overflow-hidden group hover:shadow-lg transition-all duration-300`}>
              {b.variant === "dark" && <DotGrid rows={4} cols={5} pattern="full" color="hsl(var(--background))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              {b.variant === "blue" && <DotGrid rows={4} cols={5} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              <span className="text-3xl">{b.icon}</span>
              <h4 className={`text-xl font-display font-extrabold tracking-tight ${
                b.variant === "dark" ? "text-background" :
                b.variant === "blue" ? "text-primary-foreground" :
                "text-foreground"
              }`}>{b.name}</h4>
              <p className={`text-sm ${
                b.variant === "dark" ? "text-background/50" :
                b.variant === "blue" ? "text-primary-foreground/60" :
                "text-muted-foreground"
              }`}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Acquisition Channels */}
        <div className="grid grid-cols-3 gap-5 mt-6">
          {[
            { title: "Market Position", desc: "LUUP vs stale affiliate networks, shallow influencer platforms, passive loyalty systems, fragmented creator tools" },
            { title: "Best-Fit Merchants", desc: "DTC brands, challenger e-commerce, brands with strong customer love, UGC-seeking, creator participation" },
            { title: "Acquisition Channels", desc: "Founder-led sales, category ecosystem sales, agency partners, Shopify plugin, direct outbound, case studies" },
          ].map((item, i) => (
            <div key={item.title} className={`${i === 0 ? "bento-card-accent" : "bento-card"} p-8 min-h-[160px]`}>
              <h4 className={`text-lg font-display font-bold tracking-tight mb-3 ${i === 0 ? "text-primary-foreground" : "text-foreground"}`}>{item.title}</h4>
              <p className={`text-sm leading-relaxed ${i === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default UserJourneySection;
