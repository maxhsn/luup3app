import BoardSection from "./BoardSection";
import DotGrid from "./DotGrid";

const CommercialSection = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7 bento-card p-12 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={10} pattern="wave" color="hsl(var(--primary))" size={5} gap={14} className="absolute top-8 right-8 opacity-40" />
          <span className="tag-accent w-fit">Revenue</span>
          <div>
            <h2 className="text-[3rem] font-display font-black tracking-[-0.04em] leading-[1] text-foreground">
              Commercial<br />Pricing Ladder.
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-[500px]">LUUP should keep a clear pricing ladder allowing brands to grow into the platform progressively.</p>
          </div>
        </div>
        <div className="col-span-5 bg-foreground rounded-[1.25rem] p-10 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
          <DotGrid rows={8} cols={8} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-20" />
          <span className="text-xs font-mono text-background/40">MERCHANT PROMISE</span>
          <div>
            <h3 className="text-2xl font-display font-black text-background tracking-tight leading-snug">
              Not just "setting up software" — switching on a new growth channel.
            </h3>
            <p className="text-sm text-background/50 mt-4">
              Fast to launch · Low friction · Brand-safe · Measurable · Social · Scalable
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <BoardSection title="Pricing Ladder" number="01" tag="Pricing" subtitle="Progressive tiers for brands of all sizes.">
        <div className="grid grid-cols-12 gap-5">
          {[
            {
              name: "LUUP Lite", cols: "col-span-3", variant: "white" as const,
              features: ["Basic onboarding", "Community tools", "Simple commissions"],
            },
            {
              name: "LUUP Growth", cols: "col-span-3", variant: "white" as const,
              features: ["Stronger recruitment", "Better mission flows", "Creator & affiliate activation", "Wall feed", "Codes", "UGC campaigns", "Better dashboarding"],
            },
            {
              name: "LUUP Pro", cols: "col-span-3", variant: "blue" as const,
              features: ["Advanced segmentation", "Multiple join funnels", "Creator workflows", "Priority support", "Advanced analytics"],
            },
            {
              name: "LUUP Ecosystem", cols: "col-span-3", variant: "dark" as const,
              features: ["Ecosystem placement", "Category discovery", "Ecosystem campaigns", "Creator matching", "Community activation", "Ecosystem-level reporting"],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`${tier.cols} ${
                tier.variant === "blue" ? "bento-card-accent" :
                tier.variant === "dark" ? "bg-foreground rounded-[1.25rem]" :
                "bento-card"
              } p-8 flex flex-col gap-4 min-h-[360px] relative overflow-hidden`}
            >
              {tier.variant === "dark" && <DotGrid rows={4} cols={4} pattern="full" color="hsl(var(--background))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              {tier.variant === "blue" && <DotGrid rows={4} cols={4} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={12} className="absolute top-6 right-6 opacity-15" />}
              <h4 className={`text-2xl font-display font-black tracking-tight ${
                tier.variant === "dark" ? "text-background" :
                tier.variant === "blue" ? "text-primary-foreground" :
                "text-foreground"
              }`}>{tier.name}</h4>
              <div className="space-y-2 mt-2 flex-1">
                {tier.features.map((f) => (
                  <div key={f} className={`flex items-center gap-2.5 p-2 rounded-lg ${
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

        {/* Bespoke */}
        <div className="bento-card-accent p-10 mt-5 flex items-center justify-between">
          <div>
            <h4 className="text-2xl font-display font-black text-primary-foreground tracking-tight">LUUP Bespoke</h4>
            <p className="text-sm text-primary-foreground/60 mt-2">White-label · Custom environments · Advanced integrations · Enterprise loyalty transformation · MLM modernization · Large multi-market rollouts</p>
          </div>
          <span className="text-xs font-mono text-primary-foreground/40">ENTERPRISE</span>
        </div>
      </BoardSection>

      {/* Merchant Explanation */}
      <BoardSection title="Merchant Experience" number="02" tag="Messaging" subtitle="How we explain LUUP to brands.">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8 bento-card p-10 min-h-[240px] flex flex-col justify-between">
            <span className="text-xs font-mono text-muted-foreground">THE CLEAN MESSAGE</span>
            <p className="text-lg text-foreground leading-relaxed max-w-[600px]">
              LUUP gives your brand a <strong>social commerce community</strong> where customers, creators, affiliates, influencers, and side hustlers can join, promote, create content, complete missions, and earn from sales. Your brand appears in the main LUUP network and, if relevant, in one or more ecosystems like Combat Market.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Your customers join through a branded LUUP page, not a confusing multi-app setup.</p>
          </div>
          <div className="col-span-4 flex flex-col gap-5">
            <div className="bento-card-accent p-8 flex-1 flex flex-col justify-between">
              <span className="text-xs font-mono text-primary-foreground/50">BRAND MESSAGE</span>
              <h4 className="text-lg font-display font-bold text-primary-foreground leading-snug mt-4">
                "We do not just help brands manage ambassadors. We help brands plug into living commerce networks."
              </h4>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Strategic Positioning */}
      <BoardSection title="What LUUP Must Stand For" number="18" tag="Position">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4 bento-card p-10 min-h-[280px] flex flex-col justify-between">
            <span className="text-xs font-mono text-muted-foreground">POSITIONING</span>
            <div>
              <h3 className="text-2xl font-display font-black text-foreground tracking-tight leading-snug">
                LUUP helps brands turn people into growth channels.
              </h3>
            </div>
          </div>
          <div className="col-span-4 bento-card-accent p-10 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={6} cols={6} pattern="scatter" color="hsl(var(--primary-foreground))" size={4} gap={14} className="absolute top-6 right-6 opacity-15" />
            <span className="text-xs font-mono text-primary-foreground/50">EVEN BETTER</span>
            <h3 className="text-3xl font-display font-black text-primary-foreground tracking-tight leading-snug relative z-10">
              LUUP turns communities into commerce.
            </h3>
          </div>
          <div className="col-span-4 bg-foreground rounded-[1.25rem] p-10 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={4} cols={4} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-20" />
            <span className="text-xs font-mono text-background/40">THE BIG LEAP</span>
            <div>
              <p className="text-sm text-background/60 mb-2">Club helps brands build programs.</p>
              <h3 className="text-xl font-display font-black text-background tracking-tight leading-snug">
                LUUP helps brands join economies.
              </h3>
            </div>
          </div>
        </div>
      </BoardSection>

      {/* Final Strategic Model */}
      <BoardSection title="Final Strategic Model" number="19" tag="Summary">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 bento-card-accent p-8 min-h-[300px] flex flex-col justify-between">
            <span className="text-xs font-mono text-primary-foreground/50">CONSUMER SIDE</span>
            <div>
              <h4 className="text-xl font-display font-black text-primary-foreground tracking-tight">LUUP App</h4>
              <div className="mt-4 space-y-1.5">
                {["One app", "One identity", "One wallet", "Many brands", "Many ecosystems"].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-1.5 rounded bg-primary-foreground/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" />
                    <span className="text-xs text-primary-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 bento-card p-8 min-h-[300px] flex flex-col justify-between">
            <span className="text-xs font-mono text-muted-foreground">MERCHANT SIDE</span>
            <div>
              <h4 className="text-xl font-display font-black text-foreground tracking-tight">LUUP Activate</h4>
              <div className="mt-4 space-y-1.5">
                {["Dashboard", "Onboarding", "Recruitment", "Mission creation", "Analytics", "Commissions"].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-1.5 rounded bg-muted/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 bento-card p-8 min-h-[300px] flex flex-col justify-between">
            <span className="text-xs font-mono text-muted-foreground">ECOSYSTEM SIDE</span>
            <div>
              <h4 className="text-xl font-display font-black text-foreground tracking-tight">Inside LUUP</h4>
              <div className="mt-4 space-y-1.5">
                {["Combat Market", "FanDraft", "RoxNation", "PetSpace", "Superminds", "Others to come"].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-1.5 rounded bg-muted/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-foreground rounded-[1.25rem] p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
            <DotGrid rows={4} cols={4} pattern="full" color="hsl(var(--background))" size={4} gap={14} className="absolute top-6 right-6 opacity-15" />
            <span className="text-xs font-mono text-background/40">ENTERPRISE SIDE</span>
            <div>
              <h4 className="text-xl font-display font-black text-background tracking-tight">LUUP Bespoke</h4>
              <div className="mt-4 space-y-1.5">
                {["White-label", "Custom environments", "Advanced integrations", "Enterprise loyalty", "MLM modernization"].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-1.5 rounded bg-background/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-background/50" />
                    <span className="text-xs text-background/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bento-card p-12 mt-5 text-center">
          <h3 className="text-2xl font-display font-black text-foreground tracking-tight max-w-[700px] mx-auto">
            It is cleaner for the user. Cleaner for the merchant. Cleaner for the sales team. Cleaner for the product roadmap. And much stronger strategically.
          </h3>
        </div>
      </BoardSection>
    </div>
  );
};

export default CommercialSection;
