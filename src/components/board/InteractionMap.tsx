import { useState } from "react";

/* ─── Data Types ─── */

type InteractionType = "navigate" | "modal" | "state" | "api" | "animation" | "conditional";
type ElementType = "button" | "cta" | "swipe" | "tap" | "input" | "toggle" | "scroll" | "auto";
type StateType = "default" | "hover" | "active" | "loading" | "success" | "error" | "empty" | "disabled";

interface MicroInteraction {
  trigger: string;
  animation: string;
}

interface Interaction {
  element: string;
  elementType: ElementType;
  action: InteractionType;
  target: string;
  condition?: string;
  states?: StateType[];
  micro?: MicroInteraction;
}

interface ScreenNode {
  id: string;
  name: string;
  icon: string;
  section: "consumer" | "merchant" | "system";
  interactions: Interaction[];
}

/* ─── Screen Data ─── */

const SCREENS: ScreenNode[] = [
  {
    id: "brand-page",
    name: "Brand Page",
    icon: "🏠",
    section: "consumer",
    interactions: [
      { element: "Follow Brand", elementType: "button", action: "api", target: "Follow API → Wallet", states: ["default", "loading", "success"], micro: { trigger: "tap", animation: "Confetti burst + heart pulse" } },
      { element: "View Products", elementType: "cta", action: "navigate", target: "Storefront", states: ["default", "hover"] },
      { element: "Join Community", elementType: "button", action: "conditional", target: "Onboarding Flow", condition: "If not authenticated → Auth Modal first", states: ["default", "hover", "loading"] },
      { element: "Social Wall Tab", elementType: "tap", action: "navigate", target: "Social Wall", states: ["default", "active"] },
      { element: "Missions Tab", elementType: "tap", action: "navigate", target: "Mission Feed", states: ["default", "active"], micro: { trigger: "tab switch", animation: "Content slide-in from right (200ms ease-out)" } },
      { element: "Share Brand", elementType: "button", action: "modal", target: "Share Sheet", states: ["default", "hover"], micro: { trigger: "tap", animation: "Bottom sheet slide up (250ms spring)" } },
      { element: "Agent AI Widget", elementType: "auto", action: "conditional", target: "AI Chat Overlay", condition: "Auto-triggers after 3s if first visit; otherwise on tap", states: ["default", "hover", "active"], micro: { trigger: "auto/tap", animation: "Floating pill expands to chat (300ms spring)" } },
    ],
  },
  {
    id: "storefront",
    name: "Storefront",
    icon: "🛍️",
    section: "consumer",
    interactions: [
      { element: "Product Card", elementType: "tap", action: "navigate", target: "Product Detail", states: ["default", "hover"], micro: { trigger: "tap", animation: "Card press scale(0.97) → expand transition" } },
      { element: "Add to Cart", elementType: "button", action: "state", target: "Cart Badge Update", states: ["default", "loading", "success"], micro: { trigger: "tap", animation: "Button morphs to checkmark (200ms) + cart badge bounce" } },
      { element: "Wishlist Heart", elementType: "toggle", action: "api", target: "Wishlist API", states: ["default", "active"], micro: { trigger: "tap", animation: "Heart fill animation (scale bounce 1→1.3→1)" } },
      { element: "Filter / Sort", elementType: "button", action: "modal", target: "Filter Bottom Sheet", states: ["default", "active"], micro: { trigger: "tap", animation: "Sheet slides up, backdrop blur 8px" } },
      { element: "Search Bar", elementType: "input", action: "conditional", target: "Search Results", condition: "If query.length > 2 → live results; empty → trending", states: ["default", "active", "loading", "empty"] },
      { element: "Store Agent Nudge", elementType: "auto", action: "conditional", target: "AI Product Suggestion", condition: "If user views 3+ products without adding to cart", states: ["default", "hover"], micro: { trigger: "auto", animation: "Slide-in from bottom-right (300ms)" } },
    ],
  },
  {
    id: "product-detail",
    name: "Product Detail",
    icon: "📋",
    section: "consumer",
    interactions: [
      { element: "Image Carousel", elementType: "swipe", action: "state", target: "Next/Prev Image", states: ["default"], micro: { trigger: "swipe", animation: "Parallax slide with dot indicator transition" } },
      { element: "Size / Variant Selector", elementType: "tap", action: "state", target: "Selected Variant State", states: ["default", "active", "disabled"], micro: { trigger: "tap", animation: "Chip highlight slide (150ms)" } },
      { element: "Add to Cart", elementType: "button", action: "api", target: "Cart API → Cart Sheet", states: ["default", "loading", "success", "error"], micro: { trigger: "tap", animation: "Ripple → fly-to-cart icon animation" }, condition: "If variant not selected → shake + highlight selector" },
      { element: "Buy Now", elementType: "cta", action: "navigate", target: "Checkout", states: ["default", "loading"] },
      { element: "Reviews Section", elementType: "scroll", action: "state", target: "Load More Reviews", states: ["default", "loading", "empty"], micro: { trigger: "scroll to section", animation: "Staggered review cards fade-in (50ms delay each)" } },
      { element: "Ask Agent AI", elementType: "button", action: "modal", target: "AI Chat (Product Context)", states: ["default", "hover", "active"], micro: { trigger: "tap", animation: "Modal expand from button origin point" } },
      { element: "Share Product", elementType: "button", action: "modal", target: "Referral Share Sheet", states: ["default", "hover"], condition: "If ambassador → shows commission preview" },
    ],
  },
  {
    id: "mission-feed",
    name: "Mission Feed",
    icon: "🎯",
    section: "consumer",
    interactions: [
      { element: "Mission Card", elementType: "tap", action: "navigate", target: "Mission Detail", states: ["default", "hover"], micro: { trigger: "tap", animation: "Card expand with progress ring animation" } },
      { element: "Accept Mission", elementType: "button", action: "api", target: "Mission API → Active Missions", states: ["default", "loading", "success", "disabled"], micro: { trigger: "tap", animation: "Button fills left-to-right (300ms) → checkmark" }, condition: "If daily limit reached → show cooldown timer" },
      { element: "Complete Action", elementType: "button", action: "conditional", target: "Verification Flow", condition: "If type=share → open share sheet; type=purchase → track order; type=review → open review form" },
      { element: "Streak Counter", elementType: "auto", action: "animation", target: "Streak Visual", states: ["default"], micro: { trigger: "on mount", animation: "Counter counts up + flame icon pulse on streak days" } },
      { element: "Filter Tabs", elementType: "tap", action: "state", target: "Filtered Mission List", states: ["default", "active"], micro: { trigger: "tap", animation: "Underline slides to active tab (200ms ease)" } },
    ],
  },
  {
    id: "wallet",
    name: "Wallet & Rewards",
    icon: "👛",
    section: "consumer",
    interactions: [
      { element: "Points Balance", elementType: "auto", action: "animation", target: "Balance Display", states: ["default", "loading"], micro: { trigger: "on mount", animation: "Number counts up from 0 (500ms ease-out)" } },
      { element: "Tier Progress Bar", elementType: "tap", action: "modal", target: "Tier Benefits Modal", states: ["default", "hover"], micro: { trigger: "on mount", animation: "Progress bar fills to current % (600ms spring)" } },
      { element: "Redeem Reward", elementType: "button", action: "conditional", target: "Redeem Flow", condition: "If points sufficient → confirm modal; else → show earn suggestions", states: ["default", "hover", "loading", "success", "disabled"] },
      { element: "Transaction History", elementType: "scroll", action: "state", target: "Load More Transactions", states: ["default", "loading", "empty"] },
      { element: "Cashback Card", elementType: "tap", action: "modal", target: "Cashback Detail", states: ["default", "hover"], micro: { trigger: "tap", animation: "Card flip 3D rotation (400ms)" } },
      { element: "Withdraw Earnings", elementType: "button", action: "conditional", target: "Payout Flow", condition: "If verified ambassador + min threshold met → payout; else → verification prompt", states: ["default", "loading", "error", "disabled"] },
    ],
  },
  {
    id: "leaderboard",
    name: "Leaderboard",
    icon: "🏆",
    section: "consumer",
    interactions: [
      { element: "Podium Top 3", elementType: "auto", action: "animation", target: "Podium Display", states: ["default", "loading"], micro: { trigger: "on mount", animation: "Podium bars rise staggered (1→2→3) with avatar bounce-in" } },
      { element: "User Row", elementType: "tap", action: "navigate", target: "Public Profile", states: ["default", "hover"], micro: { trigger: "tap", animation: "Row highlight pulse (150ms)" } },
      { element: "Your Position CTA", elementType: "button", action: "navigate", target: "Mission Feed", states: ["default", "hover"], micro: { trigger: "scroll to self", animation: "Glow highlight on own row + \"Climb higher\" CTA fade-in" } },
      { element: "Time Period Toggle", elementType: "toggle", action: "api", target: "Leaderboard API (weekly/monthly/all)", states: ["default", "active", "loading"], micro: { trigger: "tap", animation: "Rank positions shuffle-animate to new order (300ms)" } },
      { element: "Challenge Friend", elementType: "button", action: "modal", target: "Challenge Share Sheet", states: ["default", "hover"], condition: "If friend is within 2 ranks → highlight rivalry badge" },
    ],
  },
  {
    id: "social-wall",
    name: "Social Wall",
    icon: "📸",
    section: "consumer",
    interactions: [
      { element: "Post Card", elementType: "tap", action: "navigate", target: "Post Detail", states: ["default", "hover"] },
      { element: "Like Button", elementType: "tap", action: "api", target: "Like API", states: ["default", "active"], micro: { trigger: "double-tap or button", animation: "Heart float-up animation + counter increment" } },
      { element: "Comment", elementType: "button", action: "state", target: "Comment Input Expand", states: ["default", "active"], micro: { trigger: "tap", animation: "Input slides up from bottom of card (200ms)" } },
      { element: "Product Tag", elementType: "tap", action: "navigate", target: "Product Detail", states: ["default", "hover"], micro: { trigger: "tap", animation: "Tag pulse + product preview tooltip (150ms)" } },
      { element: "Create Post", elementType: "button", action: "modal", target: "Post Creator", states: ["default", "hover"], micro: { trigger: "tap", animation: "FAB morphs into full-screen composer" } },
      { element: "Pull to Refresh", elementType: "swipe", action: "api", target: "Feed Refresh", states: ["default", "loading"], micro: { trigger: "pull down", animation: "Spinner with brand logo rotation" } },
    ],
  },
  {
    id: "checkout",
    name: "Checkout",
    icon: "💳",
    section: "consumer",
    interactions: [
      { element: "Apply Reward Points", elementType: "toggle", action: "state", target: "Price Recalculation", states: ["default", "active", "loading"], micro: { trigger: "toggle", animation: "Price counter animates to new total (300ms)" } },
      { element: "Discount Code Input", elementType: "input", action: "api", target: "Validate Code API", states: ["default", "active", "loading", "success", "error"], condition: "If referral code auto-applied → show \"Applied via [Name]\" badge" },
      { element: "Pay Now", elementType: "cta", action: "api", target: "Payment Gateway → Order Confirmation", states: ["default", "loading", "success", "error"], micro: { trigger: "tap", animation: "Button loading shimmer → success checkmark expand" } },
      { element: "Address Selector", elementType: "tap", action: "modal", target: "Address Picker", states: ["default", "active"] },
      { element: "Order Summary Expand", elementType: "tap", action: "state", target: "Expanded Line Items", states: ["default", "active"], micro: { trigger: "tap", animation: "Accordion expand (200ms ease)" } },
    ],
  },
  {
    id: "ambassador-hub",
    name: "Ambassador Hub",
    icon: "⭐",
    section: "consumer",
    interactions: [
      { element: "Referral Link Copy", elementType: "button", action: "state", target: "Clipboard + Toast", states: ["default", "success"], micro: { trigger: "tap", animation: "Button text morphs 'Copy' → 'Copied!' (200ms)" } },
      { element: "Share to Platform", elementType: "button", action: "modal", target: "Platform Share Sheet", states: ["default", "hover"], condition: "Shows platform-specific preview (WhatsApp card, Insta story, TikTok)" },
      { element: "Earnings Dashboard", elementType: "auto", action: "animation", target: "Earnings Charts", states: ["default", "loading"], micro: { trigger: "on mount", animation: "Chart bars animate up staggered (50ms each)" } },
      { element: "Recruit Tab", elementType: "tap", action: "conditional", target: "Scout Lite / Upgrade Prompt", condition: "If Scout enabled → Scout CRM; else → upgrade CTA with preview", states: ["default", "active"] },
      { element: "Content Kit Download", elementType: "button", action: "api", target: "Asset Download", states: ["default", "loading", "success"] },
    ],
  },
  {
    id: "merchant-dashboard",
    name: "Merchant Dashboard",
    icon: "📊",
    section: "merchant",
    interactions: [
      { element: "KPI Cards", elementType: "auto", action: "animation", target: "Metric Display", states: ["default", "loading"], micro: { trigger: "on mount", animation: "Numbers count up + trend arrows fade in (400ms)" } },
      { element: "Campaign Card", elementType: "tap", action: "navigate", target: "Campaign Builder", states: ["default", "hover"], micro: { trigger: "tap", animation: "Card lifts (shadow increase) → page transition" } },
      { element: "Create Campaign", elementType: "cta", action: "navigate", target: "Campaign Builder (new)", states: ["default", "hover", "loading"] },
      { element: "Community Segment", elementType: "tap", action: "navigate", target: "Community Manager", states: ["default", "hover"] },
      { element: "Scout Pipeline Widget", elementType: "tap", action: "navigate", target: "Scout CRM", states: ["default", "hover"], condition: "If no Scout subscription → upsell card with preview" },
      { element: "Agent AI Status", elementType: "toggle", action: "api", target: "Agent Enable/Disable API", states: ["default", "active", "loading"], micro: { trigger: "toggle", animation: "Status dot pulses green/grey + toast confirmation" } },
      { element: "Revenue Chart", elementType: "tap", action: "modal", target: "Revenue Breakdown Modal", states: ["default", "hover", "loading"] },
    ],
  },
  {
    id: "scout-crm",
    name: "Scout CRM",
    icon: "🔍",
    section: "merchant",
    interactions: [
      { element: "Search Contacts", elementType: "input", action: "api", target: "Scout Database Query", states: ["default", "active", "loading", "empty"], micro: { trigger: "type", animation: "Results stream in as cards (staggered 30ms)" } },
      { element: "Filter Panel", elementType: "button", action: "state", target: "Filter Sidebar Expand", states: ["default", "active"], micro: { trigger: "tap", animation: "Sidebar slides in from left (250ms)" } },
      { element: "Contact Card", elementType: "tap", action: "modal", target: "Contact Profile Modal", states: ["default", "hover"] },
      { element: "Add to Pipeline", elementType: "button", action: "api", target: "Pipeline API", states: ["default", "loading", "success"], micro: { trigger: "tap", animation: "Card slides right into pipeline column" } },
      { element: "Send Outreach", elementType: "button", action: "conditional", target: "Outreach Composer", condition: "If template exists → pre-fill; if bulk selected → batch mode", states: ["default", "hover", "loading"] },
      { element: "Pipeline Kanban", elementType: "swipe", action: "api", target: "Stage Update API", states: ["default", "loading"], micro: { trigger: "drag", animation: "Card follows finger + column highlight on hover" } },
      { element: "Auto-Scout Toggle", elementType: "toggle", action: "api", target: "Agent AI Scout Mode", condition: "If enabled → AI autonomously discovers and contacts matches 24/7", states: ["default", "active", "loading"], micro: { trigger: "toggle", animation: "Pulse ring animation on toggle + AI status indicator" } },
    ],
  },
  {
    id: "agent-ai-chat",
    name: "Agent AI Chat",
    icon: "🤖",
    section: "system",
    interactions: [
      { element: "Chat Input", elementType: "input", action: "api", target: "Agent AI API → Response Stream", states: ["default", "active", "loading"], micro: { trigger: "send", animation: "Message bubble slides up + typing indicator dots pulse" } },
      { element: "Product Card (in chat)", elementType: "tap", action: "navigate", target: "Product Detail", states: ["default", "hover"], micro: { trigger: "tap", animation: "Card lifts from chat into full view" } },
      { element: "Quick Reply Chips", elementType: "tap", action: "api", target: "Agent AI API (with chip context)", states: ["default", "hover"], micro: { trigger: "tap", animation: "Chip scales down → message appears (150ms)" } },
      { element: "Become Ambassador CTA", elementType: "cta", action: "conditional", target: "Ambassador Onboarding", condition: "Only shown when Agent detects high engagement + purchase history", states: ["default", "hover"] },
      { element: "Minimise Chat", elementType: "button", action: "state", target: "Chat → Floating Pill", states: ["default"], micro: { trigger: "tap", animation: "Chat shrinks to pill with unread badge (300ms spring)" } },
      { element: "Escalate to Human", elementType: "button", action: "api", target: "Support Ticket API", states: ["default", "loading", "success"], condition: "Shown after 2 failed resolution attempts" },
    ],
  },
  {
    id: "notifications",
    name: "Notification Centre",
    icon: "🔔",
    section: "system",
    interactions: [
      { element: "Notification Row", elementType: "tap", action: "conditional", target: "Deep Link Target", condition: "Type=mission → Mission Feed; type=reward → Wallet; type=rank → Leaderboard; type=scout → Scout CRM", states: ["default", "hover"], micro: { trigger: "tap", animation: "Row slides right to reveal action (200ms)" } },
      { element: "Mark All Read", elementType: "button", action: "api", target: "Notifications API", states: ["default", "loading", "success"], micro: { trigger: "tap", animation: "All unread dots fade out simultaneously (150ms)" } },
      { element: "Notification Bell", elementType: "tap", action: "state", target: "Notification Panel Toggle", states: ["default", "active"], micro: { trigger: "on new", animation: "Bell swing animation + badge count increment" } },
      { element: "Swipe to Dismiss", elementType: "swipe", action: "api", target: "Dismiss Notification API", states: ["default"], micro: { trigger: "swipe left", animation: "Row slides out + height collapse (200ms)" } },
    ],
  },
  {
    id: "auth-flow",
    name: "Auth & Onboarding",
    icon: "🔐",
    section: "system",
    interactions: [
      { element: "Social Login Buttons", elementType: "button", action: "api", target: "OAuth Provider", states: ["default", "loading", "error"], micro: { trigger: "tap", animation: "Button loading spinner + redirect" } },
      { element: "Email Input", elementType: "input", action: "state", target: "Validation State", states: ["default", "active", "error", "success"], micro: { trigger: "blur", animation: "Checkmark or shake + red border (200ms)" } },
      { element: "Onboarding Steps", elementType: "swipe", action: "state", target: "Next Step", states: ["default"], micro: { trigger: "swipe/tap next", animation: "Step slides left + progress bar fills (300ms)" } },
      { element: "Skip for Now", elementType: "button", action: "conditional", target: "Brand Page (limited)", condition: "Skipped steps are queued as gentle prompts later via push + in-app nudges" },
      { element: "Interest Tags", elementType: "tap", action: "state", target: "Selected Interests", states: ["default", "active"], micro: { trigger: "tap", animation: "Tag bounces + fills with color (150ms spring)" } },
    ],
  },
];

/* ─── Styling Maps ─── */

const ELEMENT_BADGE: Record<ElementType, { label: string; class: string }> = {
  button: { label: "BTN", class: "bg-blue-500/15 text-blue-400 border-blue-500/25" },
  cta: { label: "CTA", class: "bg-amber-500/15 text-amber-400 border-amber-500/25" },
  swipe: { label: "SWIPE", class: "bg-green-500/15 text-green-400 border-green-500/25" },
  tap: { label: "TAP", class: "bg-purple-500/15 text-purple-400 border-purple-500/25" },
  input: { label: "INPUT", class: "bg-pink-500/15 text-pink-400 border-pink-500/25" },
  toggle: { label: "TOGGLE", class: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25" },
  scroll: { label: "SCROLL", class: "bg-orange-500/15 text-orange-400 border-orange-500/25" },
  auto: { label: "AUTO", class: "bg-red-500/15 text-red-400 border-red-500/25" },
};

const ACTION_ICON: Record<InteractionType, string> = {
  navigate: "→",
  modal: "◱",
  state: "⟳",
  api: "⚡",
  animation: "✦",
  conditional: "◇",
};

const STATE_DOT: Record<StateType, string> = {
  default: "bg-foreground/30",
  hover: "bg-blue-400",
  active: "bg-green-400",
  loading: "bg-amber-400",
  success: "bg-emerald-400",
  error: "bg-red-400",
  empty: "bg-muted-foreground/30",
  disabled: "bg-muted-foreground/20",
};

const SECTION_META: Record<string, { label: string; color: string }> = {
  consumer: { label: "Consumer App", color: "border-t-green-500" },
  merchant: { label: "Merchant Platform", color: "border-t-blue-500" },
  system: { label: "System Layer", color: "border-t-purple-500" },
};

/* ─── Component ─── */

const InteractionMap = () => {
  const [expandedScreen, setExpandedScreen] = useState<string | null>("brand-page");
  const [filterSection, setFilterSection] = useState<string | null>(null);

  const filteredScreens = filterSection
    ? SCREENS.filter((s) => s.section === filterSection)
    : SCREENS;

  const sections = ["consumer", "merchant", "system"] as const;

  return (
    <div className="space-y-5">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">View:</span>
        <button
          onClick={() => setFilterSection(null)}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
            !filterSection ? "bg-primary/10 text-primary border-primary/30" : "bg-muted/50 text-muted-foreground border-border"
          }`}
        >
          All ({SCREENS.length})
        </button>
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setFilterSection(filterSection === s ? null : s)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
              filterSection === s ? "bg-primary/10 text-primary border-primary/30" : "bg-muted/50 text-muted-foreground border-border"
            }`}
          >
            {SECTION_META[s].label} ({SCREENS.filter((sc) => sc.section === s).length})
          </button>
        ))}
      </div>

      {/* Legends */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-muted-foreground pb-2 border-b border-border/50">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-semibold uppercase tracking-wider text-foreground/50">Elements:</span>
          {Object.entries(ELEMENT_BADGE).map(([key, val]) => (
            <span key={key} className={`px-1.5 py-0.5 rounded border font-bold ${val.class}`}>{val.label}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-semibold uppercase tracking-wider text-foreground/50">Actions:</span>
          {Object.entries(ACTION_ICON).map(([key, icon]) => (
            <span key={key} className="flex items-center gap-1">
              <span className="font-mono">{icon}</span>
              <span>{key}</span>
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-semibold uppercase tracking-wider text-foreground/50">States:</span>
          {Object.entries(STATE_DOT).map(([key, cls]) => (
            <span key={key} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${cls}`} />
              <span>{key}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Screen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {filteredScreens.map((screen) => {
          const isExpanded = expandedScreen === screen.id;
          const sectionStyle = SECTION_META[screen.section];

          return (
            <div
              key={screen.id}
              className={`bg-card/60 rounded-2xl border border-border ${sectionStyle.color} border-t-[3px] transition-all duration-300 ${
                isExpanded ? "ring-1 ring-primary/20 shadow-lg" : "hover:border-primary/20"
              }`}
            >
              {/* Screen Header */}
              <button
                onClick={() => setExpandedScreen(isExpanded ? null : screen.id)}
                className="w-full p-3 md:p-4 flex items-center gap-3 text-left"
              >
                <span className="text-xl flex-shrink-0">{screen.icon}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-sm text-foreground">{screen.name}</h4>
                  <span className="text-[10px] text-muted-foreground">
                    {screen.interactions.length} interactions · {sectionStyle.label}
                  </span>
                </div>
                <span className={`text-xs text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              {/* Interaction List */}
              {isExpanded && (
                <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-2 animate-fade-in">
                  <div className="h-px bg-border/50 -mx-3 md:-mx-4 mb-3" />

                  {screen.interactions.map((interaction, i) => (
                    <div
                      key={i}
                      className="p-2.5 md:p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/20 transition-all group"
                    >
                      {/* Row 1: Element + Type + Action + Target */}
                      <div className="flex items-start gap-2 flex-wrap">
                        <span className={`px-1.5 py-0.5 rounded border text-[9px] font-bold flex-shrink-0 ${ELEMENT_BADGE[interaction.elementType].class}`}>
                          {ELEMENT_BADGE[interaction.elementType].label}
                        </span>
                        <span className="text-xs font-semibold text-foreground flex-1 min-w-0">
                          {interaction.element}
                        </span>
                        <span className="text-[10px] text-muted-foreground flex-shrink-0 flex items-center gap-1 font-mono">
                          <span>{ACTION_ICON[interaction.action]}</span>
                          <span className="font-sans font-medium text-foreground/70">{interaction.target}</span>
                        </span>
                      </div>

                      {/* Row 2: States */}
                      {interaction.states && interaction.states.length > 0 && (
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider font-semibold">States:</span>
                          {interaction.states.map((state) => (
                            <span key={state} className="flex items-center gap-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${STATE_DOT[state]}`} />
                              <span className="text-[9px] text-muted-foreground">{state}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Row 3: Condition */}
                      {interaction.condition && (
                        <div className="mt-1.5 flex items-start gap-1.5">
                          <span className="text-[10px] font-mono text-amber-400/80 flex-shrink-0">◇</span>
                          <span className="text-[10px] text-amber-400/70 leading-snug">{interaction.condition}</span>
                        </div>
                      )}

                      {/* Row 4: Micro-interaction */}
                      {interaction.micro && (
                        <div className="mt-1.5 flex items-start gap-1.5">
                          <span className="text-[10px] font-mono text-purple-400/80 flex-shrink-0">✦</span>
                          <span className="text-[10px] text-purple-400/70 leading-snug">
                            <span className="font-semibold">{interaction.micro.trigger}:</span> {interaction.micro.animation}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Stats Footer */}
      <div className="p-4 bg-card/40 rounded-xl border border-border/50 grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
        {[
          { label: "Total Screens", value: SCREENS.length },
          { label: "Interactions", value: SCREENS.reduce((s, sc) => s + sc.interactions.length, 0) },
          { label: "Conditionals", value: SCREENS.reduce((s, sc) => s + sc.interactions.filter((i) => i.condition).length, 0) },
          { label: "Micro-animations", value: SCREENS.reduce((s, sc) => s + sc.interactions.filter((i) => i.micro).length, 0) },
          { label: "State Variations", value: SCREENS.reduce((s, sc) => s + sc.interactions.reduce((ss, i) => ss + (i.states?.length || 0), 0), 0) },
        ].map((stat) => (
          <div key={stat.label}>
            <span className="text-xl md:text-2xl font-display font-black text-foreground">{stat.value}</span>
            <span className="text-[10px] text-muted-foreground block mt-0.5 uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractionMap;
