import { useState } from "react";
import BoardSection from "./BoardSection";
import InteractivityFlow from "./InteractivityFlow";

type Phase = "MVP" | "Phase 1" | "Phase 2" | "Phase 3";
type Priority = "critical" | "high" | "medium" | "nice";

interface KanbanCard {
  title: string;
  description: string;
  phase: Phase;
  priority: Priority;
}

interface KanbanColumn {
  id: string;
  title: string;
  icon: string;
  color: string;
  cards: KanbanCard[];
}

const PHASE_COLORS: Record<Phase, string> = {
  MVP: "bg-red-500/15 text-red-400 border-red-500/30",
  "Phase 1": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Phase 2": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Phase 3": "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

const PRIORITY_DOT: Record<Priority, string> = {
  critical: "bg-red-500",
  high: "bg-amber-400",
  medium: "bg-blue-400",
  nice: "bg-muted-foreground/40",
};

const COLUMNS: KanbanColumn[] = [
  {
    id: "dashboard",
    title: "Merchant Dashboard",
    icon: "📊",
    color: "border-t-blue-500",
    cards: [
      { title: "Campaign Builder", description: "Create & manage referral, reward, and ambassador campaigns with templates and custom flows", phase: "MVP", priority: "critical" },
      { title: "Analytics Hub", description: "Real-time metrics: referrals, conversions, revenue attribution, community growth, Scout pipeline", phase: "MVP", priority: "critical" },
      { title: "Community Manager", description: "View, segment, and manage ambassadors, affiliates, and customer communities", phase: "MVP", priority: "high" },
      { title: "Reward Engine Config", description: "Configure points, tiers, cashback, exclusive access, and gamification rules", phase: "Phase 1", priority: "high" },
      { title: "Scout CRM Dashboard", description: "Pipeline view of recruited affiliates, influencers, creators — status tracking and outreach history", phase: "Phase 1", priority: "high" },
      { title: "Agent AI Control Centre", description: "Configure, train, and monitor AI agents — set tone, knowledge base, escalation rules", phase: "Phase 2", priority: "high" },
      { title: "Content & Asset Library", description: "Shareable brand assets, campaign creatives, and co-branded content for affiliates", phase: "Phase 1", priority: "medium" },
      { title: "Shopify / WooCommerce Sync", description: "Deep integration: product sync, order tracking, discount code generation", phase: "MVP", priority: "critical" },
      { title: "Payout & Commission Manager", description: "Automated affiliate payouts, commission splits, tax documentation", phase: "Phase 2", priority: "high" },
      { title: "White-Label Settings", description: "Custom branding, subdomain, colour themes for merchant-facing community portals", phase: "Phase 3", priority: "medium" },
    ],
  },
  {
    id: "app",
    title: "Consumer App",
    icon: "📱",
    color: "border-t-green-500",
    cards: [
      { title: "Brand Discovery Feed", description: "Curated brand pages with social proof, missions, and community content", phase: "MVP", priority: "critical" },
      { title: "Wallet & Rewards", description: "Unified wallet showing points, cashback, tier status, and redeemable rewards across brands", phase: "MVP", priority: "critical" },
      { title: "Mission System", description: "Gamified tasks: share, review, refer, purchase — with progress tracking and streaks", phase: "MVP", priority: "high" },
      { title: "Social Wall", description: "Community-driven content feed with UGC, brand updates, and social interactions", phase: "Phase 1", priority: "high" },
      { title: "Referral Sharing Hub", description: "One-tap sharing to WhatsApp, Instagram, TikTok with tracked referral links", phase: "MVP", priority: "critical" },
      { title: "Leaderboards & Ranks", description: "Community leaderboards, podium system, achievement badges, and tier progression", phase: "Phase 1", priority: "medium" },
      { title: "Storefront Browser", description: "In-app shopping with affiliate attribution, wishlists, and curated collections", phase: "Phase 2", priority: "high" },
      { title: "Push & In-App Notifications", description: "Smart notification system for missions, rewards, community activity, and Scout invites", phase: "Phase 1", priority: "high" },
      { title: "Ambassador Profile", description: "Public-facing profile with stats, earnings, referral impact, and shareable bio link", phase: "Phase 2", priority: "medium" },
    ],
  },
  {
    id: "scout",
    title: "LUUP Scout",
    icon: "🔍",
    color: "border-t-amber-500",
    cards: [
      { title: "Contact Database (75M+)", description: "Searchable database of verified influencers, creators, affiliates, side hustlers with filters", phase: "Phase 1", priority: "critical" },
      { title: "Smart Search & Filters", description: "Filter by niche, audience size, engagement rate, location, platform, and past brand partnerships", phase: "Phase 1", priority: "critical" },
      { title: "Automated Outreach", description: "Email and DM sequences with templates, A/B testing, and follow-up scheduling", phase: "Phase 1", priority: "high" },
      { title: "Scout Pipeline CRM", description: "Kanban-style pipeline: Discovered → Contacted → Responded → Onboarded → Active", phase: "Phase 1", priority: "high" },
      { title: "AI-Powered Matching", description: "Agent AI recommends ideal recruits based on brand profile, audience overlap, and campaign goals", phase: "Phase 2", priority: "high" },
      { title: "Bulk Import & Enrichment", description: "Import existing contact lists, auto-enrich with social profiles and engagement data", phase: "Phase 2", priority: "medium" },
      { title: "Scout Autonomous Mode", description: "Agent AI operates Scout 24/7 — auto-discovers, contacts, follows up, and activates recruits", phase: "Phase 3", priority: "high" },
      { title: "Performance Scoring", description: "Score and rank recruited affiliates by conversion rate, content quality, and revenue generated", phase: "Phase 2", priority: "medium" },
    ],
  },
  {
    id: "agent",
    title: "Agent AI",
    icon: "🤖",
    color: "border-t-purple-500",
    cards: [
      { title: "Store Agent", description: "Embedded on merchant storefronts — answers product questions, recommends items, guides purchases", phase: "Phase 2", priority: "critical" },
      { title: "Support Agent", description: "Handles FAQs, order status, returns, and policy questions — reduces support tickets by 60%+", phase: "Phase 2", priority: "critical" },
      { title: "Ambassador Agent", description: "Guides customers into ambassador and referral programmes, explains rewards, handles onboarding", phase: "Phase 2", priority: "high" },
      { title: "Recruit Agent", description: "Operates within Scout to autonomously contact, qualify, and onboard new affiliates", phase: "Phase 3", priority: "high" },
      { title: "Lead Capture Engine", description: "Identifies buying signals, captures leads, triggers nurture sequences and retargeting flows", phase: "Phase 2", priority: "high" },
      { title: "Upsell & Cross-Sell", description: "Context-aware product suggestions based on browsing history, cart contents, and purchase patterns", phase: "Phase 3", priority: "medium" },
      { title: "Onboarding Wizard", description: "Step-by-step guided setup for new merchants — configures campaigns, rewards, and integrations", phase: "Phase 2", priority: "high" },
      { title: "Multi-Channel Deploy", description: "Deploy agents across website widget, WhatsApp, Instagram DM, and in-app chat", phase: "Phase 3", priority: "medium" },
    ],
  },
  {
    id: "platform",
    title: "Platform Core",
    icon: "⚙️",
    color: "border-t-muted-foreground",
    cards: [
      { title: "Attribution Engine", description: "Multi-touch attribution tracking across referral links, discount codes, and UTM parameters", phase: "MVP", priority: "critical" },
      { title: "Auth & Identity", description: "SSO, social login, role-based access for merchants, ambassadors, affiliates, and admins", phase: "MVP", priority: "critical" },
      { title: "API & Webhooks", description: "RESTful API for third-party integrations, webhook events for real-time data sync", phase: "Phase 1", priority: "high" },
      { title: "Vertical Worlds Engine", description: "Template system for industry-specific configurations: fashion, beauty, F&B, fitness, etc.", phase: "Phase 2", priority: "high" },
      { title: "Payment Rails", description: "Stripe Connect for payouts, multi-currency support, automated invoicing for affiliates", phase: "Phase 1", priority: "critical" },
      { title: "Notification Service", description: "Centralised push, email, SMS, and in-app notification orchestration with preferences", phase: "Phase 1", priority: "high" },
      { title: "Data & Privacy Layer", description: "GDPR/CCPA compliance, data retention policies, consent management, audit logs", phase: "Phase 1", priority: "high" },
      { title: "CDN & Media Pipeline", description: "Image/video processing, CDN delivery for UGC, brand assets, and campaign creatives", phase: "Phase 2", priority: "medium" },
    ],
  },
];

const ALL_PHASES: Phase[] = ["MVP", "Phase 1", "Phase 2", "Phase 3"];

const KanbanSection = () => {
  const [activePhases, setActivePhases] = useState<Set<Phase>>(new Set(ALL_PHASES));
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const togglePhase = (phase: Phase) => {
    setActivePhases((prev) => {
      const next = new Set(prev);
      if (next.has(phase)) {
        if (next.size > 1) next.delete(phase);
      } else {
        next.add(phase);
      }
      return next;
    });
  };

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalFeatures = COLUMNS.reduce((sum, col) => sum + col.cards.length, 0);
  const visibleFeatures = COLUMNS.reduce(
    (sum, col) => sum + col.cards.filter((c) => activePhases.has(c.phase)).length,
    0
  );

  return (
    <div className="space-y-6 md:space-y-10">
      <BoardSection
        title="Feature Kanban"
        subtitle={`${totalFeatures} features across ${COLUMNS.length} product surfaces — filtered by build phase`}
        tag="ROADMAP"
        number="06"
      >
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">Filter:</span>
          {ALL_PHASES.map((phase) => (
            <button
              key={phase}
              onClick={() => togglePhase(phase)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all duration-200 ${
                activePhases.has(phase)
                  ? PHASE_COLORS[phase]
                  : "bg-muted/50 text-muted-foreground/40 border-border"
              }`}
            >
              {phase}
            </button>
          ))}
          <span className="text-xs text-muted-foreground ml-auto">
            {visibleFeatures} / {totalFeatures} features
          </span>
        </div>

        {/* Priority legend */}
        <div className="flex flex-wrap gap-4 mb-6 text-xs text-muted-foreground">
          {(["critical", "high", "medium", "nice"] as Priority[]).map((p) => (
            <span key={p} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${PRIORITY_DOT[p]}`} />
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </span>
          ))}
        </div>

        {/* Kanban board */}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pb-4">
          <div className="flex gap-3 md:gap-4" style={{ minWidth: "1100px" }}>
            {COLUMNS.map((column) => {
              const filteredCards = column.cards.filter((c) => activePhases.has(c.phase));
              return (
                <div
                  key={column.id}
                  className={`flex-1 min-w-[210px] bg-card/50 rounded-2xl border border-border border-t-[3px] ${column.color} flex flex-col`}
                >
                  {/* Column header */}
                  <div className="p-3 md:p-4 pb-2 flex items-center gap-2 border-b border-border/50">
                    <span className="text-lg">{column.icon}</span>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-sm text-foreground truncate">{column.title}</h3>
                      <span className="text-[10px] text-muted-foreground font-mono">{filteredCards.length} items</span>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="p-2 md:p-3 space-y-2 md:space-y-2.5 flex-1 overflow-y-auto max-h-[65vh]">
                    {filteredCards.length === 0 && (
                      <p className="text-xs text-muted-foreground/50 text-center py-8 italic">No features in selected phases</p>
                    )}
                    {filteredCards.map((card, i) => {
                      const cardId = `${column.id}-${i}`;
                      const isExpanded = expandedCards.has(cardId);
                      return (
                        <div
                          key={cardId}
                          onClick={() => toggleCard(cardId)}
                          className="bg-card rounded-xl border border-border p-3 hover:border-primary/30 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                        >
                          <div className="flex items-start gap-2">
                            <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${PRIORITY_DOT[card.priority]}`} />
                            <h4 className="text-xs font-semibold text-foreground leading-snug flex-1">{card.title}</h4>
                          </div>
                          <p className={`text-[11px] text-muted-foreground mt-1.5 leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                            {card.description}
                          </p>
                          <div className="mt-2 flex items-center gap-1.5">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${PHASE_COLORS[card.phase]}`}>
                              {card.phase}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BoardSection>

      {/* Interactivity Flow */}
      <BoardSection
        title="UX Interactivity Flow"
        subtitle="How every screen, layer, and AI agent connects into seamless user journeys"
        tag="UX ARCHITECTURE"
        number="07"
      >
        <InteractivityFlow />
      </BoardSection>
    </div>
  );
};

export default KanbanSection;
