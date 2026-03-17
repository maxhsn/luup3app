import { useState } from "react";

type FlowId = "discovery" | "engagement" | "conversion" | "retention" | "recruitment";

interface FlowNode {
  id: string;
  label: string;
  icon: string;
  type: "screen" | "layer" | "trigger" | "outcome";
}

interface FlowConnection {
  from: string;
  to: string;
  label: string;
  type: "navigate" | "trigger" | "data" | "ai";
}

interface FlowJourney {
  id: FlowId;
  title: string;
  subtitle: string;
  color: string;
  accentBg: string;
  nodes: FlowNode[];
  connections: FlowConnection[];
}

const JOURNEYS: FlowJourney[] = [
  {
    id: "discovery",
    title: "Discovery → First Purchase",
    subtitle: "How a new user goes from landing to checkout in under 3 minutes",
    color: "text-purple-400",
    accentBg: "bg-purple-500/10 border-purple-500/20",
    nodes: [
      { id: "referral-link", label: "Referral Link / QR", icon: "🔗", type: "trigger" },
      { id: "brand-page", label: "Brand Page", icon: "🏠", type: "screen" },
      { id: "agent-ai-greet", label: "Agent AI Greeting", icon: "🤖", type: "layer" },
      { id: "product-rec", label: "Smart Recommendation", icon: "✨", type: "layer" },
      { id: "storefront", label: "Storefront", icon: "🛍️", type: "screen" },
      { id: "cart-incentive", label: "First-Order Reward", icon: "🎁", type: "trigger" },
      { id: "checkout", label: "Checkout + Attribution", icon: "💳", type: "screen" },
      { id: "welcome-mission", label: "Welcome Mission", icon: "🚀", type: "outcome" },
    ],
    connections: [
      { from: "referral-link", to: "brand-page", label: "UTM tracked", type: "navigate" },
      { from: "brand-page", to: "agent-ai-greet", label: "Auto-trigger 3s", type: "ai" },
      { from: "agent-ai-greet", to: "product-rec", label: "Intent detected", type: "ai" },
      { from: "product-rec", to: "storefront", label: "View product", type: "navigate" },
      { from: "storefront", to: "cart-incentive", label: "Add to cart", type: "trigger" },
      { from: "cart-incentive", to: "checkout", label: "Discount applied", type: "data" },
      { from: "checkout", to: "welcome-mission", label: "Post-purchase", type: "trigger" },
    ],
  },
  {
    id: "engagement",
    title: "Leaderboard → Missions → Rewards Loop",
    subtitle: "The core engagement flywheel that keeps users active daily",
    color: "text-green-400",
    accentBg: "bg-green-500/10 border-green-500/20",
    nodes: [
      { id: "push-notif", label: "Push Notification", icon: "🔔", type: "trigger" },
      { id: "leaderboard", label: "Leaderboard", icon: "🏆", type: "screen" },
      { id: "rank-check", label: "Rank & Tier Check", icon: "📊", type: "layer" },
      { id: "mission-feed", label: "Mission Feed", icon: "🎯", type: "screen" },
      { id: "complete-mission", label: "Complete Action", icon: "✅", type: "layer" },
      { id: "points-earned", label: "Points + XP Earned", icon: "⭐", type: "layer" },
      { id: "wallet", label: "Wallet Update", icon: "👛", type: "screen" },
      { id: "tier-up", label: "Tier Progression", icon: "🔺", type: "outcome" },
      { id: "social-wall", label: "Social Wall Post", icon: "📸", type: "screen" },
    ],
    connections: [
      { from: "push-notif", to: "leaderboard", label: "You dropped to #4!", type: "trigger" },
      { from: "leaderboard", to: "rank-check", label: "View position", type: "data" },
      { from: "rank-check", to: "mission-feed", label: "Suggest missions", type: "ai" },
      { from: "mission-feed", to: "complete-mission", label: "Accept mission", type: "navigate" },
      { from: "complete-mission", to: "points-earned", label: "Verified", type: "data" },
      { from: "points-earned", to: "wallet", label: "Balance updated", type: "data" },
      { from: "wallet", to: "tier-up", label: "Threshold hit", type: "trigger" },
      { from: "tier-up", to: "social-wall", label: "Achievement shared", type: "navigate" },
    ],
  },
  {
    id: "conversion",
    title: "Social Proof → Storefront → Upsell",
    subtitle: "Agent AI orchestrates the path from social content to high-value purchase",
    color: "text-amber-400",
    accentBg: "bg-amber-500/10 border-amber-500/20",
    nodes: [
      { id: "ugc-post", label: "UGC / Social Wall", icon: "📱", type: "screen" },
      { id: "product-tag", label: "Tagged Product", icon: "🏷️", type: "trigger" },
      { id: "store-agent", label: "Store Agent", icon: "🤖", type: "layer" },
      { id: "product-page", label: "Product Detail", icon: "📋", type: "screen" },
      { id: "upsell-agent", label: "Cross-Sell Agent", icon: "💡", type: "layer" },
      { id: "bundle-offer", label: "Smart Bundle", icon: "📦", type: "trigger" },
      { id: "checkout-2", label: "Checkout", icon: "💳", type: "screen" },
      { id: "reward-unlock", label: "Reward Unlocked", icon: "🎉", type: "outcome" },
    ],
    connections: [
      { from: "ugc-post", to: "product-tag", label: "Tap product", type: "navigate" },
      { from: "product-tag", to: "store-agent", label: "Context passed", type: "ai" },
      { from: "store-agent", to: "product-page", label: "Q&A + reviews", type: "ai" },
      { from: "product-page", to: "upsell-agent", label: "Add to cart", type: "trigger" },
      { from: "upsell-agent", to: "bundle-offer", label: "Suggest pairing", type: "ai" },
      { from: "bundle-offer", to: "checkout-2", label: "Accept bundle", type: "navigate" },
      { from: "checkout-2", to: "reward-unlock", label: "Spend threshold hit", type: "data" },
    ],
  },
  {
    id: "retention",
    title: "Churn Risk → Re-engagement → Reactivation",
    subtitle: "How the system detects drop-off and autonomously recovers users",
    color: "text-blue-400",
    accentBg: "bg-blue-500/10 border-blue-500/20",
    nodes: [
      { id: "inactivity", label: "Inactivity Signal", icon: "⚠️", type: "trigger" },
      { id: "ai-analysis", label: "Agent AI Analysis", icon: "🧠", type: "layer" },
      { id: "personalised-push", label: "Personalised Push", icon: "🔔", type: "trigger" },
      { id: "exclusive-offer", label: "Exclusive Offer", icon: "🎁", type: "layer" },
      { id: "comeback-mission", label: "Comeback Mission", icon: "🎯", type: "screen" },
      { id: "complete-return", label: "Complete & Earn", icon: "⭐", type: "layer" },
      { id: "wallet-boost", label: "Wallet Bonus", icon: "👛", type: "screen" },
      { id: "reactivated", label: "User Reactivated", icon: "✅", type: "outcome" },
    ],
    connections: [
      { from: "inactivity", to: "ai-analysis", label: "7 days inactive", type: "data" },
      { from: "ai-analysis", to: "personalised-push", label: "Best channel picked", type: "ai" },
      { from: "personalised-push", to: "exclusive-offer", label: "Opens notification", type: "navigate" },
      { from: "exclusive-offer", to: "comeback-mission", label: "Accept challenge", type: "navigate" },
      { from: "comeback-mission", to: "complete-return", label: "Action completed", type: "data" },
      { from: "complete-return", to: "wallet-boost", label: "2x points bonus", type: "data" },
      { from: "wallet-boost", to: "reactivated", label: "Back in loop", type: "trigger" },
    ],
  },
  {
    id: "recruitment",
    title: "Customer → Ambassador → Scout Recruit",
    subtitle: "The viral loop where customers become recruiters who recruit recruiters",
    color: "text-pink-400",
    accentBg: "bg-pink-500/10 border-pink-500/20",
    nodes: [
      { id: "ambassador-invite", label: "Ambassador Invite", icon: "💌", type: "trigger" },
      { id: "ambassador-agent", label: "Ambassador Agent", icon: "🤖", type: "layer" },
      { id: "onboard-flow", label: "Guided Onboarding", icon: "📝", type: "screen" },
      { id: "profile-setup", label: "Ambassador Profile", icon: "👤", type: "screen" },
      { id: "share-tools", label: "Share & Earn Hub", icon: "🔗", type: "screen" },
      { id: "scout-unlock", label: "Scout Access", icon: "🔍", type: "trigger" },
      { id: "recruit-flow", label: "Recruit Others", icon: "📨", type: "screen" },
      { id: "network-growth", label: "Network Expansion", icon: "🌐", type: "outcome" },
    ],
    connections: [
      { from: "ambassador-invite", to: "ambassador-agent", label: "Tier threshold met", type: "trigger" },
      { from: "ambassador-agent", to: "onboard-flow", label: "Explains benefits", type: "ai" },
      { from: "onboard-flow", to: "profile-setup", label: "Accept role", type: "navigate" },
      { from: "profile-setup", to: "share-tools", label: "Profile complete", type: "navigate" },
      { from: "share-tools", to: "scout-unlock", label: "5+ referrals", type: "data" },
      { from: "scout-unlock", to: "recruit-flow", label: "Scout enabled", type: "trigger" },
      { from: "recruit-flow", to: "network-growth", label: "New affiliates join", type: "data" },
    ],
  },
];

const CONNECTION_STYLES: Record<string, { color: string; dash: string; label: string }> = {
  navigate: { color: "bg-foreground/60", dash: "", label: "Navigation" },
  trigger: { color: "bg-amber-400", dash: "", label: "Event Trigger" },
  data: { color: "bg-blue-400", dash: "opacity-60", label: "Data Flow" },
  ai: { color: "bg-purple-400", dash: "", label: "Agent AI" },
};

const NODE_STYLES: Record<string, string> = {
  screen: "border-foreground/20 bg-card",
  layer: "border-dashed border-primary/30 bg-primary/5",
  trigger: "border-amber-500/30 bg-amber-500/5",
  outcome: "border-green-500/30 bg-green-500/10",
};

const InteractivityFlow = () => {
  const [activeJourney, setActiveJourney] = useState<FlowId>("discovery");

  const journey = JOURNEYS.find((j) => j.id === activeJourney)!;

  return (
    <div className="space-y-6">
      {/* Journey selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {JOURNEYS.map((j) => (
          <button
            key={j.id}
            onClick={() => setActiveJourney(j.id)}
            className={`flex-shrink-0 px-4 py-3 rounded-xl border text-left transition-all duration-200 min-w-[180px] ${
              activeJourney === j.id
                ? `${j.accentBg} border-current ${j.color}`
                : "bg-card/50 border-border text-muted-foreground hover:border-primary/20"
            }`}
          >
            <span className={`text-xs font-bold block ${activeJourney === j.id ? j.color : ""}`}>
              {j.title}
            </span>
            <span className="text-[10px] opacity-60 block mt-0.5 leading-snug">{j.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Connection type legend */}
      <div className="flex flex-wrap gap-4 text-[11px] text-muted-foreground">
        {Object.entries(CONNECTION_STYLES).map(([key, style]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className={`w-6 h-0.5 rounded-full ${style.color} ${style.dash}`} />
            {style.label}
          </span>
        ))}
        <span className="mx-2 text-border">|</span>
        {Object.entries(NODE_STYLES).map(([key]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded border ${NODE_STYLES[key]}`} />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </span>
        ))}
      </div>

      {/* Flow visualization */}
      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pb-4">
        <div
          className={`rounded-2xl border ${journey.accentBg} p-4 md:p-6`}
          style={{ minWidth: "900px" }}
        >
          {/* Journey header */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-1 h-8 rounded-full ${journey.color.replace("text-", "bg-")}`} />
            <div>
              <h4 className={`font-display font-bold text-sm ${journey.color}`}>{journey.title}</h4>
              <p className="text-[11px] text-muted-foreground">{journey.subtitle}</p>
            </div>
          </div>

          {/* Nodes as connected flow */}
          <div className="relative">
            {/* Connection lines row */}
            <div className="flex items-center gap-0">
              {journey.nodes.map((node, i) => {
                const connection = i < journey.connections.length ? journey.connections[i] : null;
                const isLast = i === journey.nodes.length - 1;

                return (
                  <div key={node.id} className="flex items-center" style={{ flex: isLast ? "0 0 auto" : "1 1 0%" }}>
                    {/* Node */}
                    <div
                      className={`relative flex-shrink-0 w-[100px] md:w-[110px] rounded-xl border p-3 ${NODE_STYLES[node.type]} transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                    >
                      <div className="text-center">
                        <span className="text-xl block mb-1.5">{node.icon}</span>
                        <span className="text-[10px] md:text-[11px] font-semibold text-foreground leading-tight block">
                          {node.label}
                        </span>
                        <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mt-1 block">
                          {node.type}
                        </span>
                      </div>
                      {/* Step number */}
                      <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-card border border-border text-[9px] font-bold flex items-center justify-center text-muted-foreground">
                        {i + 1}
                      </span>
                    </div>

                    {/* Arrow + label */}
                    {connection && !isLast && (
                      <div className="flex-1 flex flex-col items-center mx-1 min-w-[40px]">
                        <span className="text-[8px] md:text-[9px] text-muted-foreground text-center leading-tight mb-1 px-1">
                          {connection.label}
                        </span>
                        <div className="relative w-full flex items-center">
                          <div className={`flex-1 h-[2px] rounded-full ${CONNECTION_STYLES[connection.type].color} ${CONNECTION_STYLES[connection.type].dash}`} />
                          <svg
                            className={`w-2 h-2 flex-shrink-0 ${CONNECTION_STYLES[connection.type].color.replace("bg-", "text-").replace("/60", "").replace("/40", "")}`}
                            viewBox="0 0 8 8"
                            fill="currentColor"
                          >
                            <path d="M0 0 L8 4 L0 8 Z" />
                          </svg>
                        </div>
                        <span className={`text-[8px] font-bold uppercase tracking-widest mt-1 ${
                          connection.type === "ai" ? "text-purple-400/70" :
                          connection.type === "trigger" ? "text-amber-400/70" :
                          connection.type === "data" ? "text-blue-400/70" :
                          "text-muted-foreground/40"
                        }`}>
                          {connection.type === "ai" ? "AI" : ""}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* UX Insight callout */}
          <div className="mt-6 p-3 md:p-4 bg-card/60 rounded-xl border border-border/50 flex items-start gap-3">
            <span className="text-lg flex-shrink-0">💡</span>
            <div>
              <span className="text-[11px] font-bold text-foreground block">UX Insight</span>
              <span className="text-[11px] text-muted-foreground leading-relaxed block mt-0.5">
                {activeJourney === "discovery" && "The Agent AI greeting at step 3 is contextual — it knows the referral source and personalises the conversation. Average time to first purchase drops from 8 min to 2.5 min when AI recommends vs. self-browse."}
                {activeJourney === "engagement" && "The push notification at step 1 uses loss aversion (\"You dropped to #4!\") which has 3.2× higher open rates than generic reward notifications. The leaderboard → mission → wallet loop completes in under 60 seconds."}
                {activeJourney === "conversion" && "Store Agent activates only when intent signals are strong (add-to-cart, 30s+ on product page). The cross-sell agent increases AOV by 34% by suggesting bundles at the exact friction point before checkout."}
                {activeJourney === "retention" && "Agent AI selects the re-engagement channel with highest historical response rate per user. The comeback mission is always achievable in a single session to minimise drop-off in the reactivation flow."}
                {activeJourney === "recruitment" && "Ambassador onboarding is fully guided by Agent AI — zero manual steps from the merchant. The Scout unlock at 5+ referrals creates a natural progression from customer → ambassador → recruiter, driving exponential network growth."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivityFlow;
