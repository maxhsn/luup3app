import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import JourneyTree from "./JourneyTree";

const UserJourneySection = () => {
  return (
    <div className="space-y-12">
      {/* Growth Loop */}
      <BoardSection title="The LUUP Growth Loop" subtitle="7-step flywheel driving compounding advocacy" color="🔄">
        <div className="flex justify-center">
          <div className="relative w-[780px] h-[480px]">
            {/* Center label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-background rounded-2xl px-7 py-5 z-10 text-center" style={{ boxShadow: 'var(--card-shadow-lg)' }}>
              <p className="text-xl font-display font-bold tracking-tight">LUUP</p>
              <p className="text-sm text-background/60 mt-0.5">Growth Flywheel</p>
            </div>

            {/* Steps */}
            {[
              { n: "01", title: "Discover", color: "blue" as const, x: "50%", y: "0%" },
              { n: "02", title: "Join", color: "green" as const, x: "90%", y: "18%" },
              { n: "03", title: "Participate", color: "yellow" as const, x: "97%", y: "55%" },
              { n: "04", title: "Convert", color: "orange" as const, x: "78%", y: "85%" },
              { n: "05", title: "Earn", color: "purple" as const, x: "22%", y: "85%" },
              { n: "06", title: "Recruit", color: "pink" as const, x: "3%", y: "55%" },
              { n: "07", title: "Expand", color: "green" as const, x: "10%", y: "18%" },
            ].map((step) => (
              <div
                key={step.n}
                className="absolute -translate-x-1/2"
                style={{ left: step.x, top: step.y }}
              >
                <StickyNote color={step.color} icon={step.n} title={step.title} compact />
              </div>
            ))}

            {/* SVG connector */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 780 480">
              <ellipse cx="390" cy="240" rx="270" ry="180" fill="none" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="8 5" />
            </svg>
          </div>
        </div>
      </BoardSection>

      {/* Onboarding Routes */}
      <BoardSection title="User Onboarding Routes" subtitle="Three distinct paths converge into the LUUP platform" color="🚪">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <JourneyTree
            root={{
              label: "Brand-Led",
              icon: "🏪",
              accent: true,
              children: [
                { label: "QR Codes", icon: "📱" },
                { label: "Email / SMS", icon: "📧" },
                { label: "Post-purchase flows", icon: "📦" },
                { label: "Packaging inserts", icon: "🏷️" },
                { label: "Website join pages", icon: "🌐" },
                { label: "Joins brand community", icon: "✅", accent: true, description: "Begins missions, rewards, referrals" },
              ],
            }}
          />
          <JourneyTree
            root={{
              label: "Ecosystem-Led",
              icon: "🌍",
              accent: true,
              children: [
                { label: "Fighters & fans", icon: "🥊" },
                { label: "Gym owners", icon: "💪" },
                { label: "Side hustlers", icon: "🚀" },
                { label: "Niche influencers", icon: "⭐" },
                { label: "Discovers brands via vertical", icon: "✅", accent: true, description: "Joins communities through context" },
              ],
            }}
          />
          <JourneyTree
            root={{
              label: "LUUP-Led Recruitment",
              icon: "🚀",
              accent: true,
              children: [
                { label: "Affiliates & creators", icon: "🔗" },
                { label: "Influencers", icon: "⭐" },
                { label: "Superfans", icon: "❤️" },
                { label: "Community leaders", icon: "👑" },
                { label: "Builds storefront & community", icon: "✅", accent: true, description: "Earns network royalties across 4 tiers" },
              ],
            }}
          />
        </div>
      </BoardSection>

      {/* Customer → Advocate Journey */}
      <BoardSection title="Customer → Advocate Journey" subtitle="How a buyer becomes a growth channel" color="🦋">
        <div className="card-elevated p-8">
          <div className="flex items-stretch gap-0">
            {[
              { icon: "🛒", title: "Purchase", desc: "Customer buys from a brand", color: "bg-sticky-yellow" },
              { icon: "📲", title: "Join LUUP", desc: "Tap link → join community", color: "bg-sticky-blue" },
              { icon: "🎯", title: "First Mission", desc: "Share-a-code or unboxing", color: "bg-sticky-green" },
              { icon: "💰", title: "First Earning", desc: "Commission from referral", color: "bg-sticky-orange" },
              { icon: "👥", title: "Build Community", desc: "Recruit friends & create storefront", color: "bg-sticky-pink" },
              { icon: "🏆", title: "Community Leader", desc: "4-tier royalties & leaderboards", color: "bg-sticky-purple" },
            ].map((step, i, arr) => (
              <div key={step.title} className="flex items-stretch flex-1">
                <div className={`${step.color} rounded-2xl p-4 flex-1 flex flex-col items-center text-center gap-2`}>
                  <span className="text-2xl">{step.icon}</span>
                  <p className="text-sm font-display font-bold text-foreground/80 tracking-tight leading-tight">{step.title}</p>
                  <p className="text-xs text-foreground/50 leading-snug">{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center px-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-border">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </BoardSection>

      {/* 4-Tier Referral */}
      <BoardSection title="4-Tier Referral Structure" subtitle="The engine behind network-based earnings" color="💎">
        <div className="flex justify-center">
          <JourneyTree
            root={{
              label: "You (Direct Sales)",
              icon: "👤",
              accent: true,
              description: "Full commission on your own sales",
              children: [
                {
                  label: "Tier 1 — Your Recruits",
                  icon: "👥",
                  description: "Earn % on their sales",
                  children: [
                    {
                      label: "Tier 2 — Their Recruits",
                      icon: "👥",
                      description: "Earn smaller % on their sales",
                      children: [
                        {
                          label: "Tier 3 — Third-level",
                          icon: "👥",
                          description: "Earn micro % on their sales",
                        },
                      ],
                    },
                  ],
                },
              ],
            }}
          />
        </div>
      </BoardSection>

      {/* GTM Beachheads */}
      <BoardSection title="Go-To-Market Beachheads" color="🎯">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {[
            { icon: "🥊", name: "Combat Sports", desc: "Flagship ecosystem", color: "orange" as const },
            { icon: "⚽", name: "Football Fandom", desc: "FanDraft vertical", color: "green" as const },
            { icon: "🧘", name: "Wellness", desc: "Health & wellness", color: "pink" as const },
            { icon: "💪", name: "Performance", desc: "Fitness, supplements, gear", color: "blue" as const },
            { icon: "🐾", name: "Pets", desc: "PetSpace ecosystem", color: "yellow" as const },
            { icon: "🎨", name: "Creator Retail", desc: "Niche creator commerce", color: "purple" as const },
          ].map((b) => (
            <StickyNote key={b.name} color={b.color} icon={b.icon} title={b.name} description={b.desc} compact />
          ))}
        </div>
      </BoardSection>

      {/* Target Merchant */}
      <BoardSection title="Target Merchant Profile" color="🏢">
        <div className="grid grid-cols-5 gap-4">
          {[
            { title: "DTC Brands", desc: "Strong customer love, needs community", icon: "❤️", n: "01" },
            { title: "Challenger E-Com", desc: "Seeking UGC + affiliate migration", icon: "🚀", n: "02" },
            { title: "Side-Hustle Ready", desc: "Want side-hustle recruitment model", icon: "💼", n: "03" },
            { title: "Creator-Ready", desc: "Seeking creator participation", icon: "🎨", n: "04" },
            { title: "Ecosystem Fit", desc: "Fit one or more vertical ecosystems", icon: "🌐", n: "05" },
          ].map((m) => (
            <div key={m.title} className="card-elevated p-6 space-y-3 animate-scale-in">
              <span className="text-3xl font-display font-bold text-primary tracking-tighter">{m.n}</span>
              <span className="text-2xl block">{m.icon}</span>
              <p className="text-base font-display font-bold text-foreground tracking-tight">{m.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default UserJourneySection;
