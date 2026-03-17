import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";

const CommercialSection = () => {
  return (
    <div className="space-y-6 md:space-y-10">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        <div className="md:col-span-7 bento-card p-8 md:p-12 min-h-[260px] md:min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={10} pattern="wave" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-40" />
          <span className="tag-accent w-fit">Revenue</span>
          <div className="mt-4 md:mt-0">
            <h2 className="text-[2rem] md:text-[3rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              Commercial<br />Pricing Ladder.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-[500px]">Progressive tiers plus Scout and Agent AI premium modules — flexible entry points with strong ARPU expansion.</p>
          </div>
        </div>
        <div className="md:col-span-5 bg-foreground rounded-[1.25rem] p-6 md:p-10 min-h-[220px] md:min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={8} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-20" />
          <span className="text-xs font-mono text-background/40">MERCHANT PROMISE</span>
          <div className="mt-4 md:mt-0">
            <h3 className="text-xl md:text-2xl font-display font-black text-background tracking-tight leading-snug">
              Not just setting up software — switching on a full recruitment, activation, and AI-powered growth channel.
            </h3>
            <p className="text-sm text-background/50 mt-3 md:mt-4">
              Scout finds the people · Agent AI activates them · The platform scales everything
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <BoardSection title="Pricing Ladder" number="01" tag="Pricing" subtitle="Progressive tiers for brands of all sizes.">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            {
              name: "LUUP Lite", variant: "white" as const,
              features: ["Basic onboarding", "Community tools", "Simple commissions"],
            },
            {
              name: "LUUP Growth", variant: "white" as const,
              features: ["Stronger recruitment", "Better mission flows", "Creator & affiliate activation", "Wall feed", "Codes", "UGC campaigns", "Better dashboarding"],
            },
            {
              name: "LUUP Pro", variant: "blue" as const,
              features: ["Advanced segmentation", "Multiple join funnels", "Creator workflows", "Priority support", "Advanced analytics", "Agent AI store layer"],
            },
            {
              name: "LUUP Ecosystem", variant: "dark" as const,
              features: ["Ecosystem placement", "Category discovery", "Ecosystem campaigns", "Creator matching", "Community activation", "Ecosystem-level reporting"],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.variant === "blue" ? "bento-card-accent" :
                tier.variant === "dark" ? "bg-foreground rounded-[1.25rem]" :
                "bento-card"
              } p-6 md:p-8 flex flex-col gap-3 md:gap-4 min-h-[260px] md:min-h-[360px] relative overflow-hidden`}
            >
              {tier.variant === "dark" && <DotGrid rows={4} cols={4} pattern="full" color="hsl(var(--background))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              {tier.variant === "blue" && <DotGrid rows={4} cols={4} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              <h4 className={`text-xl md:text-2xl font-display font-black tracking-tight ${
                tier.variant === "dark" ? "text-background" :
                tier.variant === "blue" ? "text-primary-foreground" :
                "text-foreground"
              }`}>{tier.name}</h4>
              <div className="space-y-2 mt-2 flex-1">
                {tier.features.map((f) => (
                  <div key={f} className={`flex items-center gap-2.5 p-1.5 md:p-2 rounded-lg ${
                    tier.variant === "dark" ? "bg-background/10" :
                    tier.variant === "blue" ? "bg-primary-foreground/10" :
                    "bg-muted/50"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      tier.variant === "dark" ? "bg-background/50" :
                      tier.variant === "blue" ? "bg-primary-foreground/50" :
                      "bg-primary"
                    }`} />
                    <span className={`text-xs font-medium ${
                      tier.variant === "dark" ? "text-background/80" :
                      tier.variant === "blue" ? "text-primary-foreground/80" :
                      "text-foreground"
                    }`}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Premium Add-ons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-4 md:mt-5">
          <div className="bento-card-accent p-6 md:p-10 flex flex-col justify-between min-h-[180px]">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl md:text-2xl font-display font-black text-primary-foreground tracking-tight">LUUP Scout</h4>
                <p className="text-xs md:text-sm text-primary-foreground/60 mt-2">Premium recruitment add-on or bundled module</p>
              </div>
              <span className="text-2xl md:text-3xl font-display font-black text-primary-foreground/80">£500<span className="text-sm font-normal text-primary-foreground/40">/mo</span></span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {["75M+ contacts", "Prospecting", "Outreach CRM", "DM/Email/SMS/WhatsApp"].map((f) => (
                <span key={f} className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary-foreground/15 text-primary-foreground">{f}</span>
              ))}
            </div>
          </div>
          <div className="bg-foreground rounded-[1.25rem] p-6 md:p-10 flex flex-col justify-between min-h-[180px]">
            <div>
              <h4 className="text-xl md:text-2xl font-display font-black text-background tracking-tight">LUUP Bespoke</h4>
              <p className="text-xs md:text-sm text-background/50 mt-2">White-label · Custom environments · Advanced integrations · Enterprise loyalty · MLM modernization</p>
            </div>
            <span className="text-xs font-mono text-background/40 mt-4">ENTERPRISE</span>
          </div>
        </div>
      </BoardSection>

      {/* 1000 Merchant Strategy */}
      <BoardSection title="1000 Merchant Strategy" number="02" tag="Growth" subtitle="Six engines driving merchant acquisition.">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {[
            { n: "01", title: "Network Partners", desc: "Partners who already have merchant relationships", icon: "🤝" },
            { n: "02", title: "Agency Partners", desc: "Agencies, affiliate managers, and consultants", icon: "🏢" },
            { n: "03", title: "Ecosystem-Led Sales", desc: "Using category ecosystems to attract aligned brands", icon: "🌍" },
            { n: "04", title: "Shopify & Plugin Inbound", desc: "Using integrations and merchant demand capture", icon: "🔌" },
            { n: "05", title: "Merchant Referrals", desc: "Using existing merchant success to drive new acquisition", icon: "📈" },
            { n: "06", title: "Scout + Agent AI", desc: "Reducing recruitment friction and increasing speed-to-value — the major differentiator", icon: "🤖" },
          ].map((engine, i) => (
            <div key={engine.n} className={`${i === 5 ? "bento-card-accent" : "bento-card"} p-6 md:p-8 flex flex-col gap-3`}>
              <div className="flex items-center justify-between">
                <span className="text-2xl">{engine.icon}</span>
                <span className={`text-lg font-display font-black ${i === 5 ? "text-primary-foreground/30" : "text-primary/20"}`}>{engine.n}</span>
              </div>
              <h4 className={`text-base md:text-lg font-display font-black tracking-tight ${i === 5 ? "text-primary-foreground" : "text-foreground"}`}>{engine.title}</h4>
              <p className={`text-xs md:text-sm ${i === 5 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{engine.desc}</p>
            </div>
          ))}
        </div>
      </BoardSection>

      {/* Merchant Messaging */}
      <BoardSection title="Merchant Experience" number="03" tag="Messaging" subtitle="How we explain LUUP to brands.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-8 bento-card p-6 md:p-10 min-h-[200px] md:min-h-[240px] flex flex-col justify-between">
            <span className="text-xs font-mono text-muted-foreground">THE CLEAN MESSAGE</span>
            <p className="text-sm md:text-lg text-foreground leading-relaxed max-w-[600px] mt-3 md:mt-0">
              LUUP gives your brand a <strong>complete growth infrastructure</strong> where customers, creators, affiliates, influencers, and side hustlers can join, promote, create content, complete missions, and earn from sales. Scout finds the right people. Agent AI activates them automatically.
            </p>
            <p className="text-sm text-muted-foreground mt-3 md:mt-4">Your customers join through a branded LUUP page. Scout finds the best prospects. Agent AI converts and activates them 24/7.</p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="bento-card-accent p-6 md:p-8 flex-1 flex flex-col justify-between">
              <span className="text-xs font-mono text-primary-foreground/50">BRAND MESSAGE</span>
              <h4 className="text-base md:text-lg font-display font-bold text-primary-foreground leading-snug mt-3 md:mt-4">
                "Most platforms help brands manage ambassadors. LUUP helps brands find them, recruit them, activate them, and grow them automatically."
              </h4>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Strategic Positioning */}
      <BoardSection title="What LUUP Must Stand For" number="04" tag="Position" subtitle="Core brand positioning statements.">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          <div className="bento-card p-6 md:p-10 min-h-[200px] md:min-h-[280px] flex flex-col justify-between">
            <span className="text-xs font-mono text-muted-foreground">POSITIONING</span>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-black text-foreground tracking-tight leading-snug">
                LUUP helps brands discover, recruit, activate, and scale communities that drive commerce.
              </h3>
            </div>
          </div>
          <div className="bento-card-accent p-6 md:p-10 min-h-[200px] md:min-h-[280px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={6} cols={6} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute top-6 right-6 opacity-15" />
            <span className="text-xs font-mono text-primary-foreground/50">SHARPER</span>
            <h3 className="text-2xl md:text-3xl font-display font-black text-primary-foreground tracking-tight leading-snug relative z-10">
              Scout finds. Agent AI runs. LUUP scales.
            </h3>
          </div>
          <div className="bg-foreground rounded-[1.25rem] p-6 md:p-10 min-h-[200px] md:min-h-[280px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={4} cols={4} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-20" />
            <span className="text-xs font-mono text-background/40">THE BIG LEAP</span>
            <div>
              <p className="text-sm text-background/60 mb-2">Others help brands run programmes.</p>
              <h3 className="text-lg md:text-xl font-display font-black text-background tracking-tight leading-snug">
                LUUP is recruitment + activation + autonomous AI growth infrastructure.
              </h3>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Final Strategic Model */}
      <BoardSection title="Final Strategic Model" number="05" tag="Summary" subtitle="The complete LUUP 3.0 strategic model.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
          {[
            { label: "CONSUMER", title: "LUUP App", items: ["One app", "One identity", "One wallet", "Many brands", "Many ecosystems"], variant: "accent" },
            { label: "MERCHANT", title: "LUUP Activate", items: ["Dashboard", "Onboarding", "Recruitment", "Missions", "Analytics", "Commissions"], variant: "white" },
            { label: "RECRUITMENT", title: "LUUP Scout", items: ["75M+ contacts", "Search & filter", "Outreach CRM", "DM/Email/SMS", "Agent AI operator"], variant: "white" },
            { label: "INTELLIGENCE", title: "Agent AI", items: ["Store conversion", "Ambassador activation", "Autonomous Scout", "Intent detection", "Growth optimisation"], variant: "dark" },
            { label: "ECOSYSTEMS", title: "Inside LUUP", items: ["Combat Market", "FanDraft", "RoxNation", "PetSpace", "Superminds"], variant: "white" },
            { label: "ENTERPRISE", title: "LUUP Bespoke", items: ["White-label", "Custom environments", "Advanced integrations", "Enterprise loyalty"], variant: "dark" },
          ].map((col) => (
            <div key={col.title} className={`${
              col.variant === "accent" ? "bento-card-accent" :
              col.variant === "dark" ? "bg-foreground rounded-[1.25rem]" :
              "bento-card"
            } p-5 md:p-6 min-h-[220px] md:min-h-[280px] flex flex-col justify-between`}>
              <span className={`text-xs font-mono ${
                col.variant === "accent" ? "text-primary-foreground/50" :
                col.variant === "dark" ? "text-background/40" :
                "text-muted-foreground"
              }`}>{col.label}</span>
              <div>
                <h4 className={`text-base md:text-lg font-display font-black tracking-tight ${
                  col.variant === "accent" ? "text-primary-foreground" :
                  col.variant === "dark" ? "text-background" :
                  "text-foreground"
                }`}>{col.title}</h4>
                <div className="mt-3 space-y-1.5">
                  {col.items.map((item) => (
                    <div key={item} className={`flex items-center gap-2 p-1 md:p-1.5 rounded ${
                      col.variant === "accent" ? "bg-primary-foreground/10" :
                      col.variant === "dark" ? "bg-background/10" :
                      "bg-muted/50"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        col.variant === "accent" ? "bg-primary-foreground/50" :
                        col.variant === "dark" ? "bg-background/50" :
                        "bg-primary"
                      }`} />
                      <span className={`text-xs ${
                        col.variant === "accent" ? "text-primary-foreground/80" :
                        col.variant === "dark" ? "text-background/80" :
                        "text-foreground"
                      }`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bento-card p-8 md:p-12 mt-4 md:mt-5 text-center">
          <h3 className="text-lg md:text-2xl font-display font-black text-foreground tracking-tight max-w-[700px] mx-auto">
            LUUP is not just helping brands run programmes. LUUP is building the infrastructure for the next generation of community-led commerce.
          </h3>
        </div>
      </BoardSection>
    </div>
  );
};

export default CommercialSection;
