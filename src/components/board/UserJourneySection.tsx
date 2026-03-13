import StickyNote from "./StickyNote";
import BoardSection from "./BoardSection";
import FlowArrow from "./FlowArrow";
import JourneyTree from "./JourneyTree";
import MetricCard from "./MetricCard";

const UserJourneySection = () => {
  return (
    <div className="space-y-10">
      {/* Growth Loop — Visual Circle */}
      <BoardSection title="The LUUP Growth Loop" subtitle="7-step flywheel driving compounding advocacy" color="🔄">
        <div className="flex justify-center">
          <div className="relative w-[700px] h-[420px]">
            {/* Center label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-2xl px-5 py-3 shadow-sm z-10 text-center">
              <p className="text-[13px] font-semibold text-foreground tracking-tight">LUUP</p>
              <p className="text-[10px] text-muted-foreground">Growth Flywheel</p>
            </div>

            {/* Steps positioned around the circle */}
            {[
              { n: "1", title: "Discover", color: "blue" as const, x: "50%", y: "0%", translate: "-translate-x-1/2" },
              { n: "2", title: "Join", color: "green" as const, x: "88%", y: "18%", translate: "-translate-x-1/2" },
              { n: "3", title: "Participate", color: "yellow" as const, x: "95%", y: "55%", translate: "-translate-x-1/2" },
              { n: "4", title: "Convert", color: "orange" as const, x: "75%", y: "85%", translate: "-translate-x-1/2" },
              { n: "5", title: "Earn", color: "purple" as const, x: "25%", y: "85%", translate: "-translate-x-1/2" },
              { n: "6", title: "Recruit", color: "pink" as const, x: "5%", y: "55%", translate: "-translate-x-1/2" },
              { n: "7", title: "Expand", color: "green" as const, x: "12%", y: "18%", translate: "-translate-x-1/2" },
            ].map((step) => (
              <div
                key={step.n}
                className={`absolute ${step.translate}`}
                style={{ left: step.x, top: step.y }}
              >
                <StickyNote color={step.color} icon={step.n} title={step.title} compact />
              </div>
            ))}

            {/* SVG circle connector */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 420">
              <ellipse cx="350" cy="210" rx="240" ry="160" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="6 4" />
              {/* Directional arrows */}
              <path d="M350 50 L356 58 L344 58 Z" fill="hsl(var(--border))" transform="rotate(25, 350, 210)" />
              <path d="M350 50 L356 58 L344 58 Z" fill="hsl(var(--border))" transform="rotate(75, 350, 210)" />
              <path d="M350 50 L356 58 L344 58 Z" fill="hsl(var(--border))" transform="rotate(130, 350, 210)" />
              <path d="M350 50 L356 58 L344 58 Z" fill="hsl(var(--border))" transform="rotate(180, 350, 210)" />
              <path d="M350 50 L356 58 L344 58 Z" fill="hsl(var(--border))" transform="rotate(230, 350, 210)" />
              <path d="M350 50 L356 58 L344 58 Z" fill="hsl(var(--border))" transform="rotate(280, 350, 210)" />
              <path d="M350 50 L356 58 L344 58 Z" fill="hsl(var(--border))" transform="rotate(335, 350, 210)" />
            </svg>
          </div>
        </div>
      </BoardSection>

      {/* Onboarding Routes — Journey Trees */}
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
                {
                  label: "Joins brand community",
                  icon: "✅",
                  accent: true,
                  description: "Begins missions, rewards, referrals"
                },
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
                {
                  label: "Discovers brands via vertical",
                  icon: "✅",
                  accent: true,
                  description: "Joins communities through context"
                },
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
                {
                  label: "Builds storefront & community",
                  icon: "✅",
                  accent: true,
                  description: "Earns network royalties across 4 tiers"
                },
              ],
            }}
          />
        </div>
      </BoardSection>

      {/* Customer-to-Advocate Journey — Horizontal Pipeline */}
      <BoardSection title="Customer → Advocate Journey" subtitle="How a buyer becomes a growth channel" color="🦋">
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
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
                <div className={`${step.color} rounded-xl p-3 flex-1 flex flex-col items-center text-center gap-1.5`}>
                  <span className="text-xl">{step.icon}</span>
                  <p className="text-[12px] font-semibold text-foreground/80 tracking-tight leading-tight">{step.title}</p>
                  <p className="text-[10px] text-foreground/50 leading-snug">{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center px-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-border">
                      <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </BoardSection>

      {/* 4-Tier Referral Structure — Visual Tree */}
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
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
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

      {/* Target Merchant Profile */}
      <BoardSection title="Target Merchant Profile" color="🏢">
        <div className="grid grid-cols-5 gap-3">
          {[
            { title: "DTC Brands", desc: "Strong customer love, needs community", icon: "❤️" },
            { title: "Challenger E-Com", desc: "Seeking UGC + affiliate migration", icon: "🚀" },
            { title: "Side-Hustle Ready", desc: "Want side-hustle recruitment model", icon: "💼" },
            { title: "Creator-Ready", desc: "Seeking creator participation", icon: "🎨" },
            { title: "Ecosystem Fit", desc: "Fit one or more vertical ecosystems", icon: "🌐" },
          ].map((m) => (
            <div key={m.title} className="bg-card border border-border rounded-2xl p-4 shadow-sm space-y-2 animate-scale-in">
              <span className="text-lg">{m.icon}</span>
              <p className="text-[13px] font-semibold text-foreground tracking-tight">{m.title}</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>
    </div>
  );
};

export default UserJourneySection;
