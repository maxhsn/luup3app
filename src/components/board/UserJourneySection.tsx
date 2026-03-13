import BoardSection from "./BoardSection";
import JourneyTree from "./JourneyTree";

const UserJourneySection = () => {
  return (
    <div className="space-y-24">
      {/* Growth Loop */}
      <BoardSection title="The LUUP Growth Loop" subtitle="A 7-step flywheel driving compounding advocacy and network growth." number="01" tag="Flywheel">
        <div className="bento-card p-12">
          <div className="flex justify-center">
            <div className="relative w-[900px] h-[540px]">
              {/* Center hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bento-card-accent px-10 py-7 z-10 text-center rounded-2xl">
                <p className="text-3xl font-display font-black tracking-tighter">LUUP</p>
                <p className="text-sm opacity-70 mt-1">Growth Engine</p>
              </div>

              {[
                { n: "01", title: "Discover", desc: "Find brands & ecosystems", x: "50%", y: "0%" },
                { n: "02", title: "Join", desc: "Follow & enter community", x: "88%", y: "16%" },
                { n: "03", title: "Participate", desc: "Missions & engagement", x: "96%", y: "54%" },
                { n: "04", title: "Convert", desc: "First purchase or share", x: "78%", y: "84%" },
                { n: "05", title: "Earn", desc: "Commissions & rewards", x: "22%", y: "84%" },
                { n: "06", title: "Recruit", desc: "Invite others to join", x: "4%", y: "54%" },
                { n: "07", title: "Expand", desc: "Grow network & tiers", x: "12%", y: "16%" },
              ].map((step) => (
                <div key={step.n} className="absolute -translate-x-1/2" style={{ left: step.x, top: step.y }}>
                  <div className="bento-card p-5 min-w-[150px] text-center">
                    <span className="text-2xl font-display font-black text-primary tracking-tighter">{step.n}</span>
                    <p className="text-base font-display font-bold text-foreground mt-1">{step.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}

              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 540">
                <ellipse cx="450" cy="270" rx="310" ry="210" fill="none" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="10 8" />
              </svg>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Onboarding Routes */}
      <BoardSection title="User Onboarding Routes" subtitle="Three paths converge into the LUUP ecosystem." number="02" tag="Onboarding">
        <div className="grid grid-cols-3 gap-4">
          <div className="bento-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🏪</span>
              <h4 className="text-xl font-display font-extrabold text-foreground">Brand-Led</h4>
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
          <div className="bento-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌍</span>
              <h4 className="text-xl font-display font-extrabold text-foreground">Ecosystem-Led</h4>
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
          <div className="bento-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🚀</span>
              <h4 className="text-xl font-display font-extrabold text-foreground">LUUP-Led</h4>
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
      <BoardSection title="Customer → Advocate Journey" subtitle="The transformation pipeline from first purchase to community leader." number="03" tag="Pipeline">
        <div className="grid grid-cols-6 gap-4">
          {[
            { icon: "🛒", title: "Purchase", desc: "Buys from a brand via LUUP" },
            { icon: "📲", title: "Join LUUP", desc: "Tap to join community" },
            { icon: "🎯", title: "First Mission", desc: "Share, unbox, or review" },
            { icon: "💰", title: "First Earning", desc: "Commission from referral" },
            { icon: "👥", title: "Build", desc: "Recruit & build storefront" },
            { icon: "🏆", title: "Leader", desc: "4-tier royalties & growth", accent: true },
          ].map((step) => (
            <div key={step.title} className={`${step.accent ? "bento-card-accent" : "bento-card"} p-6 flex flex-col items-center text-center gap-3`}>
              <span className="text-3xl">{step.icon}</span>
              <p className={`text-base font-display font-bold tracking-tight ${step.accent ? '' : 'text-foreground'}`}>{step.title}</p>
              <p className={`text-sm leading-relaxed ${step.accent ? 'opacity-70' : 'text-muted-foreground'}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* 4-Tier Referral */}
      <BoardSection title="4-Tier Referral Structure" subtitle="The engine behind compounding network earnings." number="04" tag="Referral">
        <div className="grid grid-cols-4 gap-4">
          {[
            { tier: "Direct Sales", label: "Your own sales and commissions", pct: "100%", accent: true },
            { tier: "Tier 1", label: "Earnings from your direct recruits' sales", pct: "X%" },
            { tier: "Tier 2", label: "Earnings from your recruits' recruits", pct: "Y%" },
            { tier: "Tier 3", label: "Third-level network sales earnings", pct: "Z%" },
          ].map((t) => (
            <div key={t.tier} className={`${t.accent ? "bento-card-accent" : "bento-card"} p-8 flex flex-col gap-4`}>
              <span className={`text-5xl font-display font-black tracking-tighter ${t.accent ? '' : 'text-primary'}`}>{t.pct}</span>
              <h4 className={`text-xl font-display font-extrabold tracking-tight ${t.accent ? '' : 'text-foreground'}`}>{t.tier}</h4>
              <p className={`text-base leading-relaxed ${t.accent ? 'opacity-70' : 'text-muted-foreground'}`}>{t.label}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* GTM Beachheads */}
      <BoardSection title="Go-To-Market Beachheads" subtitle="Vertical ecosystems driving initial traction and network effects." number="05" tag="GTM">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "🥊", name: "Combat Sports", desc: "Flagship ecosystem. Fighters, coaches, brands, and fans converge.", tag: "Flagship" },
            { icon: "⚽", name: "Football Fandom", desc: "FanDraft vertical for sports merchandise and fan communities.", tag: "Sports" },
            { icon: "🧘", name: "Wellness & Health", desc: "Health, wellness, supplements, and mindfulness brands.", tag: "Health" },
            { icon: "💪", name: "Performance & Fitness", desc: "Fitness gear, nutrition, and performance brands.", tag: "Fitness" },
            { icon: "🐾", name: "PetSpace", desc: "Pet products and passionate pet-owner communities.", tag: "Pets" },
            { icon: "🎨", name: "Creator Retail", desc: "Niche creator-led commerce and merchandise.", tag: "Creator" },
          ].map((b) => (
            <div key={b.name} className="bento-card p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{b.icon}</span>
                <span className="tag">{b.tag}</span>
              </div>
              <h4 className="text-xl font-display font-extrabold text-foreground">{b.name}</h4>
              <p className="text-base text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Target Merchants */}
      <BoardSection title="Target Merchant Profile" subtitle="Ideal customer profile for the LUUP platform." number="06" tag="ICP">
        <div className="grid grid-cols-5 gap-4">
          {[
            { title: "DTC Brands", desc: "Strong customer love, needs community tools to amplify.", n: "01" },
            { title: "Challenger E-Com", desc: "Seeking UGC and affiliate migration to grow.", n: "02" },
            { title: "Side-Hustle Ready", desc: "Want a recruitment model for customer-led growth.", n: "03" },
            { title: "Creator-Ready", desc: "Seeking creator participation and content generation.", n: "04" },
            { title: "Ecosystem Fit", desc: "Natural fit for one or more vertical ecosystems.", n: "05" },
          ].map((m) => (
            <div key={m.title} className="bento-card p-6 flex flex-col gap-3">
              <span className="text-4xl font-display font-black text-primary/15 tracking-tighter">{m.n}</span>
              <h4 className="text-base font-display font-bold text-foreground">{m.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default UserJourneySection;
