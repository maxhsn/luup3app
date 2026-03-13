import BoardSection from "./BoardSection";
import JourneyTree from "./JourneyTree";

const UserJourneySection = () => {
  return (
    <div className="space-y-14">
      {/* Growth Loop */}
      <BoardSection title="The LUUP Growth Loop" subtitle="7-step flywheel driving compounding advocacy" tag="FLYWHEEL">
        <div className="flex justify-center">
          <div className="relative w-[820px] h-[500px]">
            {/* Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bento-card-accent px-8 py-6 z-10 text-center">
              <p className="text-2xl font-display font-bold tracking-tighter">LUUP</p>
              <p className="text-sm opacity-70 font-mono mt-1">GROWTH_FLYWHEEL</p>
            </div>

            {[
              { n: "01", title: "Discover", x: "50%", y: "0%" },
              { n: "02", title: "Join", x: "90%", y: "18%" },
              { n: "03", title: "Participate", x: "97%", y: "55%" },
              { n: "04", title: "Convert", x: "78%", y: "85%" },
              { n: "05", title: "Earn", x: "22%", y: "85%" },
              { n: "06", title: "Recruit", x: "3%", y: "55%" },
              { n: "07", title: "Expand", x: "10%", y: "18%" },
            ].map((step) => (
              <div key={step.n} className="absolute -translate-x-1/2" style={{ left: step.x, top: step.y }}>
                <div className="bento-card p-4 min-w-[120px] text-center">
                  <span className="text-xl font-display font-bold text-primary tracking-tighter">{step.n}</span>
                  <p className="text-sm font-display font-bold text-foreground tracking-tight mt-1">{step.title}</p>
                </div>
              </div>
            ))}

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 820 500">
              <ellipse cx="410" cy="250" rx="280" ry="190" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="8 6" />
            </svg>
          </div>
        </div>
      </BoardSection>

      {/* Onboarding Routes */}
      <BoardSection title="User Onboarding Routes" subtitle="Three paths converge into LUUP" tag="ONBOARD">
        <div className="grid grid-cols-3 gap-6">
          <div className="bento-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🏪</span>
              <h4 className="text-base font-display font-bold text-foreground">Brand-Led</h4>
            </div>
            <JourneyTree root={{
              label: "Entry Points", icon: "→", accent: true,
              children: [
                { label: "QR Codes", icon: "📱" },
                { label: "Email / SMS", icon: "📧" },
                { label: "Post-purchase", icon: "📦" },
                { label: "Packaging inserts", icon: "🏷️" },
                { label: "Website join pages", icon: "🌐" },
                { label: "Joins community", icon: "✅", accent: true, description: "Missions, rewards, referrals" },
              ],
            }} />
          </div>
          <div className="bento-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🌍</span>
              <h4 className="text-base font-display font-bold text-foreground">Ecosystem-Led</h4>
            </div>
            <JourneyTree root={{
              label: "Entry Points", icon: "→", accent: true,
              children: [
                { label: "Fighters & fans", icon: "🥊" },
                { label: "Gym owners", icon: "💪" },
                { label: "Side hustlers", icon: "🚀" },
                { label: "Niche influencers", icon: "⭐" },
                { label: "Discovers brands", icon: "✅", accent: true, description: "Joins through vertical context" },
              ],
            }} />
          </div>
          <div className="bento-card p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🚀</span>
              <h4 className="text-base font-display font-bold text-foreground">LUUP-Led</h4>
            </div>
            <JourneyTree root={{
              label: "Entry Points", icon: "→", accent: true,
              children: [
                { label: "Affiliates & creators", icon: "🔗" },
                { label: "Influencers", icon: "⭐" },
                { label: "Superfans", icon: "❤️" },
                { label: "Community leaders", icon: "👑" },
                { label: "Builds storefront", icon: "✅", accent: true, description: "4-tier network royalties" },
              ],
            }} />
          </div>
        </div>
      </BoardSection>

      {/* Customer → Advocate Pipeline */}
      <BoardSection title="Customer → Advocate Journey" tag="PIPELINE">
        <div className="grid grid-cols-6 gap-2">
          {[
            { icon: "🛒", title: "Purchase", desc: "Buys from a brand" },
            { icon: "📲", title: "Join LUUP", desc: "Tap → join community" },
            { icon: "🎯", title: "First Mission", desc: "Share or unbox" },
            { icon: "💰", title: "First Earning", desc: "Commission from referral" },
            { icon: "👥", title: "Build", desc: "Recruit & storefront" },
            { icon: "🏆", title: "Leader", desc: "4-tier royalties" },
          ].map((step, i, arr) => (
            <div key={step.title} className={i === arr.length - 1 ? "bento-card-accent p-5 flex flex-col items-center text-center gap-2" : "bento-card p-5 flex flex-col items-center text-center gap-2"}>
              <span className="text-2xl">{step.icon}</span>
              <p className={`text-sm font-display font-bold tracking-tight ${i === arr.length - 1 ? '' : 'text-foreground'}`}>{step.title}</p>
              <p className={`text-xs leading-snug ${i === arr.length - 1 ? 'opacity-70' : 'text-muted-foreground'}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* 4-Tier Referral */}
      <BoardSection title="4-Tier Referral Structure" subtitle="The engine behind network earnings" tag="REFERRAL">
        <div className="grid grid-cols-4 gap-3">
          {[
            { tier: "Direct", label: "Your own sales", pct: "100%", accent: true },
            { tier: "Tier 1", label: "Your recruits' sales", pct: "X%" },
            { tier: "Tier 2", label: "Their recruits' sales", pct: "Y%" },
            { tier: "Tier 3", label: "Third-level sales", pct: "Z%" },
          ].map((t) => (
            <div key={t.tier} className={t.accent ? "bento-card-accent p-6 flex flex-col gap-3" : "bento-card p-6 flex flex-col gap-3"}>
              <span className={`text-4xl font-display font-bold tracking-tighter ${t.accent ? '' : 'text-primary'}`}>{t.pct}</span>
              <h4 className={`text-lg font-display font-bold tracking-tight ${t.accent ? '' : 'text-foreground'}`}>{t.tier}</h4>
              <p className={`text-sm ${t.accent ? 'opacity-70' : 'text-muted-foreground'}`}>{t.label}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* GTM Beachheads */}
      <BoardSection title="Go-To-Market Beachheads" tag="GTM">
        <div className="grid grid-cols-6 gap-3">
          {[
            { icon: "🥊", name: "Combat Sports", desc: "Flagship ecosystem" },
            { icon: "⚽", name: "Football Fandom", desc: "FanDraft vertical" },
            { icon: "🧘", name: "Wellness", desc: "Health & wellness" },
            { icon: "💪", name: "Performance", desc: "Fitness & gear" },
            { icon: "🐾", name: "Pets", desc: "PetSpace ecosystem" },
            { icon: "🎨", name: "Creator Retail", desc: "Niche commerce" },
          ].map((b) => (
            <div key={b.name} className="bento-card p-5 flex flex-col gap-3 text-center items-center">
              <span className="text-3xl">{b.icon}</span>
              <h4 className="text-sm font-display font-bold text-foreground tracking-tight">{b.name}</h4>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Target Merchants */}
      <BoardSection title="Target Merchant Profile" tag="ICP">
        <div className="grid grid-cols-5 gap-3">
          {[
            { title: "DTC Brands", desc: "Strong customer love, needs community", n: "01" },
            { title: "Challenger E-Com", desc: "Seeking UGC + affiliate migration", n: "02" },
            { title: "Side-Hustle Ready", desc: "Want recruitment model", n: "03" },
            { title: "Creator-Ready", desc: "Seeking creator participation", n: "04" },
            { title: "Ecosystem Fit", desc: "Fit vertical ecosystems", n: "05" },
          ].map((m) => (
            <div key={m.title} className="bento-card p-5 flex flex-col gap-2">
              <span className="text-2xl font-display font-bold text-primary tracking-tighter">{m.n}</span>
              <h4 className="text-sm font-display font-bold text-foreground tracking-tight">{m.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default UserJourneySection;
