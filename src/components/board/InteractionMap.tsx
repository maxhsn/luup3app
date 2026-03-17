import { useState } from "react";

/* ─── Types ─── */

type ActionType = "navigate" | "modal" | "state" | "api" | "animation" | "conditional";
type InputType = "button" | "cta" | "swipe" | "tap" | "input" | "toggle" | "scroll" | "auto" | "long-press" | "drag";

interface Micro {
  trigger: string;
  effect: string;
}

interface IX {
  el: string;
  type: InputType;
  action: ActionType;
  to: string;
  cond?: string;
  states?: string[];
  micro?: Micro;
}

interface Screen {
  id: string;
  name: string;
  icon: string;
  area: "app" | "merchant" | "system";
  desc: string;
  interactions: IX[];
}

/* ─── Full Screen Map ─── */

const SCREENS: Screen[] = [
  // ═══════════════════════ APP CORE ═══════════════════════
  {
    id: "app-home", name: "Home Feed", icon: "🏡", area: "app",
    desc: "Main app landing — personalised feed of brands, missions, rewards, and social content",
    interactions: [
      { el: "Brand Card", type: "tap", action: "navigate", to: "Brand Page", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card press scale(0.97) + parallax tilt" } },
      { el: "Active Mission Banner", type: "tap", action: "navigate", to: "Mission Feed", states: ["default", "active"], micro: { trigger: "on mount", effect: "Banner slides in from top (300ms spring) with progress pulse" } },
      { el: "Reward Alert", type: "tap", action: "navigate", to: "Wallet", states: ["default"], micro: { trigger: "tap", effect: "Coin animation flies to wallet icon in tab bar" } },
      { el: "Search Icon", type: "tap", action: "navigate", to: "Search & Explore", states: ["default", "hover"] },
      { el: "Tab Bar — Home", type: "tap", action: "state", to: "Active Tab Highlight", states: ["default", "active"], micro: { trigger: "tap", effect: "Icon fills + label fades in (150ms)" } },
      { el: "Tab Bar — Missions", type: "tap", action: "navigate", to: "Mission Feed", states: ["default", "active"] },
      { el: "Tab Bar — Wallet", type: "tap", action: "navigate", to: "Wallet", states: ["default", "active"] },
      { el: "Tab Bar — Profile", type: "tap", action: "navigate", to: "Profile", states: ["default", "active"] },
      { el: "Pull to Refresh", type: "swipe", action: "api", to: "Feed Refresh API", states: ["default", "loading"], micro: { trigger: "pull down", effect: "LUUP logo spinner rotation" } },
      { el: "Notification Bell", type: "tap", action: "navigate", to: "Notification Centre", states: ["default"], micro: { trigger: "on new", effect: "Bell swing (200ms) + red badge count pulse" } },
      { el: "For You / Following Toggle", type: "tap", action: "state", to: "Feed Filter", states: ["default", "active"], micro: { trigger: "tap", effect: "Content cross-fade (200ms)" } },
      { el: "Agent AI Pill", type: "auto", action: "conditional", to: "AI Chat Overlay", cond: "Shows after 5s on first session; persists as floating pill after", states: ["default", "active"], micro: { trigger: "auto", effect: "Pill breathes (opacity pulse) then expands on tap (300ms spring)" } },
    ],
  },
  {
    id: "search", name: "Search & Explore", icon: "🔎", area: "app",
    desc: "Discover brands, products, communities, and trending content",
    interactions: [
      { el: "Search Input", type: "input", action: "conditional", to: "Live Results / Trending", cond: "Empty → trending tags + categories; typing → live results after 2 chars", states: ["default", "active", "loading", "empty"] },
      { el: "Category Chips", type: "tap", action: "state", to: "Filtered Results", states: ["default", "active"], micro: { trigger: "tap", effect: "Chip fills + results grid animates layout shift (200ms)" } },
      { el: "Brand Result", type: "tap", action: "navigate", to: "Brand Page", states: ["default", "hover"] },
      { el: "Product Result", type: "tap", action: "navigate", to: "Product Detail", states: ["default", "hover"] },
      { el: "Trending Hashtag", type: "tap", action: "navigate", to: "Social Wall (filtered)", states: ["default", "hover"] },
      { el: "Recent Searches", type: "tap", action: "state", to: "Repeat Search", states: ["default"], micro: { trigger: "swipe left", effect: "Row slides to reveal delete (200ms)" } },
    ],
  },
  {
    id: "brand-page", name: "Brand Page", icon: "🏪", area: "app",
    desc: "Brand's community hub — products, missions, social wall, and community",
    interactions: [
      { el: "Follow Brand", type: "button", action: "api", to: "Follow API → Feed Update", states: ["default", "loading", "success"], micro: { trigger: "tap", effect: "Confetti burst + button morphs to 'Following' with check" } },
      { el: "View Products", type: "cta", action: "navigate", to: "Storefront", states: ["default", "hover"] },
      { el: "Join Community", type: "button", action: "conditional", to: "Onboarding Flow", cond: "If not authenticated → Auth Modal first; if already member → Community tab", states: ["default", "hover", "loading"] },
      { el: "Content Tabs (Products / Missions / Social / Community)", type: "tap", action: "state", to: "Tab Content Switch", states: ["default", "active"], micro: { trigger: "tab switch", effect: "Content slide-in from direction of tab (200ms ease-out)" } },
      { el: "Share Brand", type: "button", action: "modal", to: "Referral Share Sheet", states: ["default", "hover"], micro: { trigger: "tap", effect: "Bottom sheet slides up (250ms spring)" } },
      { el: "Brand Hero Image", type: "scroll", action: "animation", to: "Parallax Header", states: ["default"], micro: { trigger: "scroll", effect: "Hero parallax at 0.5x scroll rate + header blur on scroll" } },
      { el: "Agent AI Widget", type: "auto", action: "conditional", to: "AI Chat Overlay", cond: "Auto-triggers after 3s on first visit; shows as pill otherwise", states: ["default", "hover", "active"], micro: { trigger: "auto/tap", effect: "Floating pill expands to chat panel (300ms spring)" } },
      { el: "Member Count Badge", type: "tap", action: "navigate", to: "Community Members List", states: ["default", "hover"] },
    ],
  },
  {
    id: "storefront", name: "Storefront", icon: "🛍️", area: "app",
    desc: "Brand's product catalogue with affiliate attribution and smart recommendations",
    interactions: [
      { el: "Product Card", type: "tap", action: "navigate", to: "Product Detail", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card press scale(0.97) → hero image shared element transition" } },
      { el: "Add to Cart", type: "button", action: "api", to: "Cart API → Badge Update", states: ["default", "loading", "success"], micro: { trigger: "tap", effect: "Button morphs to ✓ (200ms) + cart badge bounces" } },
      { el: "Wishlist Heart", type: "toggle", action: "api", to: "Wishlist API", states: ["default", "active"], micro: { trigger: "tap", effect: "Heart fill scale(1→1.3→1) + subtle haptic" } },
      { el: "Filter / Sort", type: "button", action: "modal", to: "Filter Bottom Sheet", states: ["default", "active"], micro: { trigger: "tap", effect: "Sheet slides up + backdrop blur(8px)" } },
      { el: "Search Products", type: "input", action: "conditional", to: "Product Search Results", cond: "If query > 2 chars → live filter; empty → show all", states: ["default", "active", "loading", "empty"] },
      { el: "AI Nudge: 'Need help choosing?'", type: "auto", action: "conditional", to: "Store Agent Chat", cond: "Triggers after viewing 3+ products without cart action", micro: { trigger: "auto", effect: "Slide-in from bottom-right with soft bounce (300ms)" } },
      { el: "Collection Tabs", type: "swipe", action: "state", to: "Collection Filter", states: ["default", "active"], micro: { trigger: "swipe", effect: "Horizontal scroll snap + indicator slide" } },
    ],
  },
  {
    id: "product-detail", name: "Product Detail", icon: "📦", area: "app",
    desc: "Full product view with reviews, AI Q&A, referral sharing, and smart upsells",
    interactions: [
      { el: "Image Carousel", type: "swipe", action: "state", to: "Next/Prev Image", states: ["default"], micro: { trigger: "swipe", effect: "Parallax slide + dot indicator transition + pinch-to-zoom" } },
      { el: "Size / Variant Selector", type: "tap", action: "state", to: "Selected Variant", states: ["default", "active", "disabled"], micro: { trigger: "tap", effect: "Chip highlight slide (150ms) + price update if variant-priced" } },
      { el: "Add to Cart", type: "button", action: "api", to: "Cart API → Cart Sheet", states: ["default", "loading", "success", "error"], cond: "If no variant selected → shake selector + tooltip 'Please select size'", micro: { trigger: "tap", effect: "Ripple → item flies to cart icon" } },
      { el: "Buy Now", type: "cta", action: "navigate", to: "Checkout", states: ["default", "loading"] },
      { el: "Reviews Section", type: "scroll", action: "api", to: "Load More Reviews", states: ["default", "loading", "empty"], micro: { trigger: "scroll into view", effect: "Staggered card fade-in (50ms delay each)" } },
      { el: "Ask Agent AI", type: "button", action: "modal", to: "AI Chat (Product Context)", states: ["default", "hover", "active"], micro: { trigger: "tap", effect: "Modal scales up from button origin (250ms spring)" } },
      { el: "Share Product", type: "button", action: "modal", to: "Referral Share Sheet", cond: "If ambassador → shows commission preview; if user → shows reward preview", states: ["default", "hover"] },
      { el: "Related Products Rail", type: "scroll", action: "state", to: "Horizontal Scroll", micro: { trigger: "scroll", effect: "Peek-a-boo: next card peeks 40px to hint scrollability" } },
      { el: "Sticky Buy Bar", type: "auto", action: "animation", to: "Fixed Bottom CTA", states: ["default"], micro: { trigger: "scroll past fold", effect: "Bar slides up from bottom (200ms) with price + Add to Cart" } },
    ],
  },
  {
    id: "mission-feed", name: "Mission Feed", icon: "🎯", area: "app",
    desc: "Gamified task centre — daily missions, streaks, and challenges with real rewards",
    interactions: [
      { el: "Mission Card", type: "tap", action: "navigate", to: "Mission Detail", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card expand with progress ring animation" } },
      { el: "Accept Mission", type: "button", action: "api", to: "Mission API → Active Missions", states: ["default", "loading", "success", "disabled"], cond: "If daily limit reached → show cooldown timer with countdown", micro: { trigger: "tap", effect: "Button fills left→right (300ms) → checkmark" } },
      { el: "Complete Action", type: "button", action: "conditional", to: "Verification Flow", cond: "share → Share Sheet; purchase → Order Tracker; review → Review Form; UGC → Camera/Upload" },
      { el: "Streak Counter", type: "auto", action: "animation", to: "Streak Display", states: ["default"], micro: { trigger: "on mount", effect: "Counter counts up + flame icon grows on streak days + shake on broken streak" } },
      { el: "Filter: All / Active / Completed", type: "tap", action: "state", to: "Filtered List", states: ["default", "active"], micro: { trigger: "tap", effect: "Underline slides to active tab (200ms ease)" } },
      { el: "Daily Reward Claim", type: "button", action: "api", to: "Reward API → Wallet", states: ["default", "loading", "success", "disabled"], micro: { trigger: "tap", effect: "Chest opens animation → coins fly to wallet (500ms)" } },
    ],
  },
  {
    id: "wallet", name: "Wallet & Rewards", icon: "👛", area: "app",
    desc: "Unified points balance, tier status, cashback, earnings, and redemptions",
    interactions: [
      { el: "Points Balance", type: "auto", action: "animation", to: "Balance Display", states: ["default", "loading"], micro: { trigger: "on mount", effect: "Number counts up from 0 (500ms ease-out) with subtle glow" } },
      { el: "Tier Progress Ring", type: "tap", action: "modal", to: "Tier Benefits Modal", states: ["default", "hover"], micro: { trigger: "on mount", effect: "Ring fills to current % (600ms spring) + tier badge pulse" } },
      { el: "Redeem Reward", type: "button", action: "conditional", to: "Redeem Flow", cond: "Sufficient points → confirm modal with preview; insufficient → 'Earn X more' with mission suggestions", states: ["default", "hover", "loading", "success", "disabled"] },
      { el: "Transaction History", type: "scroll", action: "api", to: "Paginated Transactions", states: ["default", "loading", "empty"] },
      { el: "Cashback Card", type: "tap", action: "modal", to: "Cashback Detail + Withdraw Option", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card 3D flip reveal (400ms)" } },
      { el: "Withdraw Earnings", type: "button", action: "conditional", to: "Payout Flow", cond: "Verified ambassador + min threshold → payout form; else → verification steps", states: ["default", "loading", "error", "disabled"] },
      { el: "Reward Carousel", type: "swipe", action: "state", to: "Available Rewards Scroll", micro: { trigger: "swipe", effect: "Card snap-scroll with scale: centre card 1.0, side cards 0.9" } },
    ],
  },
  {
    id: "leaderboard", name: "Leaderboard", icon: "🏆", area: "app",
    desc: "Community rankings with podium system, rivalry badges, and competitive missions",
    interactions: [
      { el: "Podium (Top 3)", type: "auto", action: "animation", to: "Podium Display", states: ["default", "loading"], micro: { trigger: "on mount", effect: "Bars rise staggered (3rd→2nd→1st) with avatar bounce-in + confetti for #1" } },
      { el: "User Row", type: "tap", action: "navigate", to: "Public Profile", states: ["default", "hover"], micro: { trigger: "tap", effect: "Row highlight pulse (150ms)" } },
      { el: "Your Position CTA", type: "auto", action: "navigate", to: "Mission Feed", states: ["default"], micro: { trigger: "scroll to self", effect: "Own row glows + 'Climb higher →' CTA fades in" } },
      { el: "Period Toggle (Week/Month/All)", type: "toggle", action: "api", to: "Leaderboard API", states: ["default", "active", "loading"], micro: { trigger: "tap", effect: "Ranks shuffle-animate to new positions (300ms stagger)" } },
      { el: "Challenge Friend", type: "button", action: "modal", to: "Challenge Share Sheet", cond: "If rival within 2 ranks → rivalry badge glows; sends challenge via push + in-app", states: ["default", "hover"] },
      { el: "Brand Filter", type: "tap", action: "state", to: "Brand-Specific Rankings", states: ["default", "active"] },
    ],
  },
  {
    id: "social-wall", name: "Social Wall", icon: "📸", area: "app",
    desc: "Community content feed — UGC, brand updates, tagged products, and interactions",
    interactions: [
      { el: "Post Card", type: "tap", action: "navigate", to: "Post Detail (full thread)", states: ["default", "hover"] },
      { el: "Double-Tap Like", type: "tap", action: "api", to: "Like API", states: ["default", "active"], micro: { trigger: "double-tap", effect: "Large heart scales up centre-screen (300ms) + fade out" } },
      { el: "Like Button", type: "tap", action: "api", to: "Like API", states: ["default", "active"], micro: { trigger: "tap", effect: "Heart fill + counter increment animate" } },
      { el: "Comment", type: "button", action: "state", to: "Comment Input Expand", states: ["default", "active"], micro: { trigger: "tap", effect: "Input slides up from card bottom (200ms)" } },
      { el: "Product Tag Overlay", type: "tap", action: "navigate", to: "Product Detail", states: ["default", "hover"], micro: { trigger: "tap", effect: "Tag pulses + product mini-card tooltip (150ms)" } },
      { el: "Create Post FAB", type: "button", action: "modal", to: "Post Composer", states: ["default", "hover"], micro: { trigger: "tap", effect: "FAB morphs into full-screen composer (350ms morph)" } },
      { el: "Pull to Refresh", type: "swipe", action: "api", to: "Feed Refresh", states: ["default", "loading"], micro: { trigger: "pull down", effect: "LUUP logo spinner" } },
      { el: "Share Post", type: "button", action: "modal", to: "Share Sheet (with referral link)", states: ["default", "hover"] },
    ],
  },
  {
    id: "checkout", name: "Checkout", icon: "💳", area: "app",
    desc: "Payment flow with reward redemption, referral attribution, and smart discounts",
    interactions: [
      { el: "Apply Points Toggle", type: "toggle", action: "state", to: "Price Recalculation", states: ["default", "active", "loading"], micro: { trigger: "toggle", effect: "Total animates to new price (300ms counter)" } },
      { el: "Discount Code", type: "input", action: "api", to: "Validate Code API", states: ["default", "active", "loading", "success", "error"], cond: "If referral code auto-applied → green badge 'Via [Name]''" },
      { el: "Pay Now", type: "cta", action: "api", to: "Payment Gateway → Order Confirmation", states: ["default", "loading", "success", "error"], micro: { trigger: "tap", effect: "Button shimmer loading → checkmark expand → confetti" } },
      { el: "Address Selector", type: "tap", action: "modal", to: "Address Picker / Add New", states: ["default", "active"] },
      { el: "Order Summary Expand", type: "tap", action: "state", to: "Line Items Detail", states: ["default", "active"], micro: { trigger: "tap", effect: "Accordion expand (200ms ease)" } },
      { el: "Delivery Options", type: "tap", action: "state", to: "Selected Delivery", states: ["default", "active"], micro: { trigger: "tap", effect: "Radio selection + estimated date update" } },
    ],
  },
  {
    id: "order-confirmation", name: "Order Confirmation", icon: "✅", area: "app",
    desc: "Post-purchase screen driving referral sharing, mission activation, and community join",
    interactions: [
      { el: "Order Success Animation", type: "auto", action: "animation", to: "Confirmation Display", states: ["default"], micro: { trigger: "on mount", effect: "Checkmark draws itself (400ms) → order details fade in stagger" } },
      { el: "Share & Earn CTA", type: "cta", action: "modal", to: "Referral Share Sheet", states: ["default", "hover"], micro: { trigger: "delayed 1s", effect: "CTA pulses with reward amount highlight" } },
      { el: "Start Mission", type: "button", action: "navigate", to: "Mission Feed (filtered: post-purchase)", states: ["default", "hover"] },
      { el: "Join Community", type: "button", action: "conditional", to: "Community / Brand Page", cond: "If already member → 'Visit Community'; else → join flow" },
      { el: "Track Order", type: "button", action: "navigate", to: "Order Tracking", states: ["default", "hover"] },
      { el: "Rate Experience", type: "auto", action: "conditional", to: "Review Prompt", cond: "Triggers 48hrs post-delivery via push notification → deep links here" },
    ],
  },
  {
    id: "profile", name: "Profile", icon: "👤", area: "app",
    desc: "User profile with stats, ambassador status, settings, and activity history",
    interactions: [
      { el: "Edit Profile", type: "button", action: "navigate", to: "Edit Profile Screen", states: ["default", "hover"] },
      { el: "Stats Cards (Points / Referrals / Rank)", type: "tap", action: "navigate", to: "Wallet / Leaderboard (contextual)", states: ["default", "hover"], micro: { trigger: "on mount", effect: "Numbers count up staggered (200ms delay each)" } },
      { el: "Ambassador Badge", type: "tap", action: "conditional", to: "Ambassador Hub / Upgrade CTA", cond: "If ambassador → Hub; if eligible → 'Unlock Ambassador' prompt; else → tier progress" },
      { el: "My Orders", type: "tap", action: "navigate", to: "Order History", states: ["default", "hover"] },
      { el: "My Communities", type: "tap", action: "navigate", to: "Communities List", states: ["default", "hover"] },
      { el: "Settings Gear", type: "tap", action: "navigate", to: "Settings", states: ["default", "hover"] },
      { el: "Share Profile", type: "button", action: "modal", to: "Profile Share Sheet (bio link)", states: ["default", "hover"] },
      { el: "Activity Feed", type: "scroll", action: "api", to: "Activity History (paginated)", states: ["default", "loading", "empty"] },
    ],
  },
  {
    id: "ambassador-hub", name: "Ambassador Hub", icon: "⭐", area: "app",
    desc: "Referral tools, earnings dashboard, content kits, and Scout access",
    interactions: [
      { el: "Referral Link Copy", type: "button", action: "state", to: "Clipboard + Toast", states: ["default", "success"], micro: { trigger: "tap", effect: "Text morphs 'Copy' → 'Copied!' (200ms) + haptic" } },
      { el: "Share to Platform", type: "button", action: "modal", to: "Platform-Specific Share", cond: "Each platform shows its preview format (WhatsApp card, Insta story, TikTok)", states: ["default", "hover"] },
      { el: "Earnings Chart", type: "auto", action: "animation", to: "Revenue Visualisation", states: ["default", "loading"], micro: { trigger: "on mount", effect: "Chart bars animate up staggered (50ms each)" } },
      { el: "Recruit Tab", type: "tap", action: "conditional", to: "Scout Lite / Upgrade", cond: "Scout plan → Scout CRM; no plan → preview + upgrade CTA with trial offer", states: ["default", "active"] },
      { el: "Content Kit Download", type: "button", action: "api", to: "Asset Pack Download", states: ["default", "loading", "success"] },
      { el: "Referral Analytics", type: "tap", action: "navigate", to: "Detailed Attribution Report", states: ["default", "hover"] },
      { el: "Tier Benefits Card", type: "tap", action: "modal", to: "Full Benefits Breakdown", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card lifts + modal expand from card position" } },
    ],
  },
  // ═══════════════════════ MERCHANT ═══════════════════════
  {
    id: "merchant-dashboard", name: "Merchant Dashboard", icon: "📊", area: "merchant",
    desc: "Command centre — KPIs, campaigns, community health, Scout pipeline, and Agent AI status",
    interactions: [
      { el: "KPI Cards", type: "auto", action: "animation", to: "Metric Display", states: ["default", "loading"], micro: { trigger: "on mount", effect: "Numbers count up + trend arrows slide in (400ms)" } },
      { el: "Campaign Card", type: "tap", action: "navigate", to: "Campaign Detail", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card lifts (shadow deepens) → page push transition" } },
      { el: "Create Campaign +", type: "cta", action: "navigate", to: "Campaign Builder (new)", states: ["default", "hover", "loading"] },
      { el: "Community Health Widget", type: "tap", action: "navigate", to: "Community Manager", states: ["default", "hover"] },
      { el: "Scout Pipeline Widget", type: "tap", action: "conditional", to: "Scout CRM", cond: "No Scout subscription → upsell card with metrics preview + 'Start Free Trial'", states: ["default", "hover"] },
      { el: "Agent AI Toggle", type: "toggle", action: "api", to: "Agent Enable/Disable API", states: ["default", "active", "loading"], micro: { trigger: "toggle", effect: "Status dot pulses green/grey + confirmation toast" } },
      { el: "Revenue Chart", type: "tap", action: "modal", to: "Revenue Breakdown (by channel)", states: ["default", "hover", "loading"] },
      { el: "Recent Activity Feed", type: "scroll", action: "state", to: "Activity Stream", states: ["default", "loading"] },
      { el: "Quick Actions Bar", type: "tap", action: "conditional", to: "Context Action", cond: "Shows top 3 most relevant actions based on current campaign state" },
    ],
  },
  {
    id: "campaign-builder", name: "Campaign Builder", icon: "🔨", area: "merchant",
    desc: "Step-by-step campaign creation — type, rules, rewards, audience, and scheduling",
    interactions: [
      { el: "Campaign Type Selector", type: "tap", action: "state", to: "Type-Specific Form", states: ["default", "active"], micro: { trigger: "tap", effect: "Selected card scales up + unselected fade to 60% opacity" } },
      { el: "Reward Config Sliders", type: "drag", action: "state", to: "Reward Values Update", states: ["default", "active"], micro: { trigger: "drag", effect: "Value label follows thumb + preview updates live" } },
      { el: "Audience Selector", type: "button", action: "modal", to: "Audience Builder Modal", states: ["default", "hover"] },
      { el: "Schedule Toggle", type: "toggle", action: "state", to: "Date Picker Expand", states: ["default", "active"], micro: { trigger: "toggle", effect: "Calendar slides down (200ms)" } },
      { el: "Preview Campaign", type: "button", action: "modal", to: "Campaign Preview (phone mockup)", states: ["default", "hover"], micro: { trigger: "tap", effect: "Phone frame slides in from right with live preview" } },
      { el: "Launch Campaign", type: "cta", action: "api", to: "Campaign API → Success Modal", states: ["default", "loading", "success", "error"], cond: "All required fields must be filled; missing → highlight fields + scroll to first error", micro: { trigger: "tap", effect: "Button loading shimmer → confetti burst on success" } },
      { el: "Step Progress Bar", type: "auto", action: "state", to: "Step Indicator", states: ["default"], micro: { trigger: "step complete", effect: "Step dot fills + connector line draws (300ms)" } },
      { el: "Save Draft", type: "button", action: "api", to: "Draft Save API", states: ["default", "loading", "success"] },
    ],
  },
  {
    id: "scout-crm", name: "Scout CRM", icon: "🔍", area: "merchant",
    desc: "Recruit affiliates, influencers, and creators from 75M+ database with AI-powered matching",
    interactions: [
      { el: "Search Contacts", type: "input", action: "api", to: "Scout Database Query", states: ["default", "active", "loading", "empty"], micro: { trigger: "type", effect: "Results stream in as cards (staggered 30ms)" } },
      { el: "Filter Panel Toggle", type: "button", action: "state", to: "Sidebar Filter Expand", states: ["default", "active"], micro: { trigger: "tap", effect: "Panel slides from left (250ms) + backdrop dim" } },
      { el: "Contact Card", type: "tap", action: "modal", to: "Contact Profile Modal", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card lifts + modal expand from card" } },
      { el: "Add to Pipeline", type: "button", action: "api", to: "Pipeline Stage API", states: ["default", "loading", "success"], micro: { trigger: "tap", effect: "Card slides right into pipeline column" } },
      { el: "Send Outreach", type: "button", action: "conditional", to: "Outreach Composer", cond: "Template exists → pre-fill; bulk selected → batch mode; no email → request contact", states: ["default", "hover", "loading"] },
      { el: "Pipeline Kanban View", type: "drag", action: "api", to: "Stage Update API", states: ["default", "loading"], micro: { trigger: "drag", effect: "Card follows cursor + target column highlights on hover" } },
      { el: "Auto-Scout Toggle", type: "toggle", action: "api", to: "Agent AI Scout Mode", cond: "When enabled → AI discovers, contacts, and follows up 24/7 autonomously", states: ["default", "active", "loading"], micro: { trigger: "toggle", effect: "Pulse ring on toggle + AI status indicator breathes" } },
      { el: "AI Match Suggestions", type: "auto", action: "state", to: "Suggested Contacts Rail", micro: { trigger: "on mount", effect: "Cards slide in from right staggered + match % badge pulses" } },
    ],
  },
  {
    id: "community-manager", name: "Community Manager", icon: "👥", area: "merchant",
    desc: "Segment, manage, and communicate with ambassadors, affiliates, and customers",
    interactions: [
      { el: "Segment Tabs", type: "tap", action: "state", to: "Filtered Member List", states: ["default", "active"] },
      { el: "Member Row", type: "tap", action: "modal", to: "Member Detail Modal", states: ["default", "hover"] },
      { el: "Bulk Select", type: "toggle", action: "state", to: "Multi-Select Mode", states: ["default", "active"], micro: { trigger: "long-press", effect: "Selection checkboxes fade in on all rows (150ms)" } },
      { el: "Send Broadcast", type: "button", action: "conditional", to: "Broadcast Composer", cond: "If segment selected → pre-filtered; if individual → DM mode", states: ["default", "hover"] },
      { el: "Export Members", type: "button", action: "api", to: "CSV Export API", states: ["default", "loading", "success"] },
      { el: "Invite Link Generator", type: "button", action: "modal", to: "Invite Link Config", states: ["default", "hover"] },
    ],
  },
  {
    id: "agent-control", name: "Agent AI Control", icon: "🤖", area: "merchant",
    desc: "Configure, train, and monitor AI agents — personality, knowledge, and deployment",
    interactions: [
      { el: "Agent Personality Config", type: "input", action: "state", to: "Tone & Style Preview", states: ["default", "active"], micro: { trigger: "input change", effect: "Live preview bubble updates in real-time" } },
      { el: "Knowledge Base Upload", type: "button", action: "api", to: "Document Upload + Processing", states: ["default", "loading", "success", "error"] },
      { el: "Deploy Location Toggles", type: "toggle", action: "api", to: "Agent Placement API", cond: "Store page / Product pages / Checkout / Post-purchase — each independently togglable", states: ["default", "active", "loading"] },
      { el: "Conversation History", type: "scroll", action: "api", to: "Chat Logs (paginated)", states: ["default", "loading", "empty"] },
      { el: "Escalation Rules", type: "button", action: "modal", to: "Rules Config Modal", states: ["default", "hover"] },
      { el: "Performance Metrics", type: "auto", action: "animation", to: "Agent Stats Dashboard", states: ["default", "loading"], micro: { trigger: "on mount", effect: "Resolution rate ring fills + response time counter" } },
      { el: "Test Agent", type: "cta", action: "modal", to: "Agent Preview Chat (sandbox)", states: ["default", "hover"], micro: { trigger: "tap", effect: "Phone mockup slides in with live chat sandbox" } },
    ],
  },
  // ═══════════════════════ SYSTEM ═══════════════════════
  {
    id: "agent-chat", name: "Agent AI Chat", icon: "💬", area: "system",
    desc: "Contextual AI assistant across store, support, ambassador, and recruitment",
    interactions: [
      { el: "Chat Input", type: "input", action: "api", to: "Agent AI API → Streamed Response", states: ["default", "active", "loading"], micro: { trigger: "send", effect: "Message slides up + typing indicator dots pulse (3-dot wave)" } },
      { el: "Product Card (inline)", type: "tap", action: "navigate", to: "Product Detail", states: ["default", "hover"], micro: { trigger: "tap", effect: "Card lifts from chat context into full view" } },
      { el: "Quick Reply Chips", type: "tap", action: "api", to: "Agent AI (with chip context)", states: ["default", "hover"], micro: { trigger: "tap", effect: "Chip press → message appears instantly (150ms)" } },
      { el: "Become Ambassador CTA", type: "cta", action: "conditional", to: "Ambassador Onboarding", cond: "Only surfaces when Agent detects: high engagement + 2+ purchases + social sharing", states: ["default", "hover"] },
      { el: "Minimise", type: "button", action: "state", to: "Chat → Floating Pill", states: ["default"], micro: { trigger: "tap", effect: "Chat shrinks to pill with unread badge (300ms spring)" } },
      { el: "Escalate to Human", type: "button", action: "api", to: "Support Ticket + Handoff", cond: "Shows after 2 unresolved attempts; passes full context to human agent", states: ["default", "loading", "success"] },
    ],
  },
  {
    id: "notifications", name: "Notification Centre", icon: "🔔", area: "system",
    desc: "Centralised notification hub with deep-linking to every screen",
    interactions: [
      { el: "Notification Row", type: "tap", action: "conditional", to: "Deep Link Target", cond: "mission → Mission Feed; reward → Wallet; rank → Leaderboard; scout → Scout CRM; order → Order Tracking" },
      { el: "Mark All Read", type: "button", action: "api", to: "Notifications API (batch)", states: ["default", "loading", "success"], micro: { trigger: "tap", effect: "All unread dots fade simultaneously (150ms)" } },
      { el: "Swipe to Dismiss", type: "swipe", action: "api", to: "Dismiss API", micro: { trigger: "swipe left", effect: "Row slides out + height collapses (200ms)" } },
      { el: "Notification Preferences", type: "tap", action: "navigate", to: "Settings → Notifications", states: ["default", "hover"] },
      { el: "Grouped Notifications", type: "tap", action: "state", to: "Expand Group", states: ["default", "active"], micro: { trigger: "tap", effect: "Stack unfolds to show individual items (200ms stagger)" } },
    ],
  },
  {
    id: "auth", name: "Auth & Onboarding", icon: "🔐", area: "system",
    desc: "Sign up, login, social auth, and interest-based onboarding wizard",
    interactions: [
      { el: "Social Login (Google / Apple)", type: "button", action: "api", to: "OAuth → Home Feed", states: ["default", "loading", "error"], micro: { trigger: "tap", effect: "Button loading spinner → redirect → return animation" } },
      { el: "Email / Password", type: "input", action: "state", to: "Inline Validation", states: ["default", "active", "error", "success"], micro: { trigger: "blur", effect: "✓ or shake + red border (200ms)" } },
      { el: "Onboarding Carousel", type: "swipe", action: "state", to: "Next Step", states: ["default"], micro: { trigger: "swipe/next", effect: "Step slides left + progress fills (300ms)" } },
      { el: "Interest Tags", type: "tap", action: "state", to: "Selected Interests", states: ["default", "active"], micro: { trigger: "tap", effect: "Tag bounce + fills with brand colour (150ms spring)" } },
      { el: "Skip for Now", type: "button", action: "conditional", to: "Home Feed (basic)", cond: "Skipped steps queue as gentle nudges: push after 24h, in-app banner after 3 sessions" },
      { el: "Referral Code Field", type: "input", action: "api", to: "Validate Referral API", cond: "If arrived via referral link → auto-filled + locked with referrer name shown", states: ["default", "active", "success", "error"] },
    ],
  },
  {
    id: "settings", name: "Settings", icon: "⚙️", area: "system",
    desc: "Account, notification preferences, privacy, connected accounts, and data management",
    interactions: [
      { el: "Notification Toggles", type: "toggle", action: "api", to: "Preferences API", states: ["default", "active", "loading"] },
      { el: "Connected Accounts", type: "tap", action: "modal", to: "OAuth Connection Manager", states: ["default", "hover"] },
      { el: "Privacy & Data", type: "tap", action: "navigate", to: "Privacy Settings", states: ["default", "hover"] },
      { el: "Delete Account", type: "button", action: "conditional", to: "Confirmation Flow", cond: "Requires password re-entry → 30-day grace period warning → final confirm", states: ["default", "hover", "loading"], micro: { trigger: "tap", effect: "Red warning modal with countdown timer" } },
      { el: "Theme Toggle (Light/Dark)", type: "toggle", action: "state", to: "Theme Switch", states: ["default", "active"], micro: { trigger: "toggle", effect: "Smooth cross-fade between themes (300ms)" } },
      { el: "Log Out", type: "button", action: "api", to: "Session Clear → Auth Screen", states: ["default", "loading"] },
    ],
  },
];

/* ─── Style Configs ─── */

const AREA_STYLES: Record<string, { label: string; border: string; badge: string; gradient: string }> = {
  app: { label: "Consumer App", border: "border-l-green-500", badge: "bg-green-500/10 text-green-400", gradient: "from-green-500/5" },
  merchant: { label: "Merchant Platform", border: "border-l-blue-500", badge: "bg-blue-500/10 text-blue-400", gradient: "from-blue-500/5" },
  system: { label: "System Layer", border: "border-l-purple-500", badge: "bg-purple-500/10 text-purple-400", gradient: "from-purple-500/5" },
};

const INPUT_BADGE: Record<InputType, { label: string; cls: string }> = {
  button: { label: "BTN", cls: "bg-blue-500/15 text-blue-300" },
  cta: { label: "CTA", cls: "bg-amber-500/20 text-amber-300 font-black" },
  swipe: { label: "SWIPE", cls: "bg-green-500/15 text-green-300" },
  tap: { label: "TAP", cls: "bg-purple-500/15 text-purple-300" },
  input: { label: "INPUT", cls: "bg-pink-500/15 text-pink-300" },
  toggle: { label: "TOGGLE", cls: "bg-cyan-500/15 text-cyan-300" },
  scroll: { label: "SCROLL", cls: "bg-orange-500/15 text-orange-300" },
  auto: { label: "AUTO", cls: "bg-red-500/15 text-red-300" },
  "long-press": { label: "HOLD", cls: "bg-indigo-500/15 text-indigo-300" },
  drag: { label: "DRAG", cls: "bg-teal-500/15 text-teal-300" },
};

const ACTION_SYM: Record<ActionType, { icon: string; cls: string }> = {
  navigate: { icon: "→", cls: "text-foreground/70" },
  modal: { icon: "◱", cls: "text-blue-400/70" },
  state: { icon: "⟳", cls: "text-green-400/70" },
  api: { icon: "⚡", cls: "text-amber-400/70" },
  animation: { icon: "✦", cls: "text-purple-400/70" },
  conditional: { icon: "◇", cls: "text-pink-400/70" },
};

const STATE_CLS: Record<string, string> = {
  default: "bg-foreground/20",
  hover: "bg-blue-400",
  active: "bg-green-400",
  loading: "bg-amber-400",
  success: "bg-emerald-400",
  error: "bg-red-400",
  empty: "bg-muted-foreground/25",
  disabled: "bg-muted-foreground/15",
};

/* ─── Component ─── */

const InteractionMap = () => {
  const [expandedScreen, setExpandedScreen] = useState<string | null>("app-home");
  const [filterArea, setFilterArea] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SCREENS
    .filter((s) => !filterArea || s.area === filterArea)
    .filter((s) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().includes(q) ||
        s.interactions.some((ix) => ix.el.toLowerCase().includes(q) || ix.to.toLowerCase().includes(q))
      );
    });

  const areas = ["app", "merchant", "system"] as const;

  const totalIx = SCREENS.reduce((s, sc) => s + sc.interactions.length, 0);
  const totalCond = SCREENS.reduce((s, sc) => s + sc.interactions.filter((i) => i.cond).length, 0);
  const totalMicro = SCREENS.reduce((s, sc) => s + sc.interactions.filter((i) => i.micro).length, 0);
  const totalStates = SCREENS.reduce((s, sc) => s + sc.interactions.reduce((ss, i) => ss + (i.states?.length || 0), 0), 0);

  return (
    <div className="space-y-6">
      {/* ── Stats Bar ── */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {[
          { v: SCREENS.length, l: "Screens" },
          { v: totalIx, l: "Interactions" },
          { v: totalCond, l: "Conditionals" },
          { v: totalMicro, l: "Micro-animations" },
          { v: totalStates, l: "State Variations" },
          { v: Object.keys(INPUT_BADGE).length, l: "Input Types" },
        ].map((s) => (
          <div key={s.l} className="bg-card/70 border border-border rounded-xl p-3 text-center">
            <span className="text-lg md:text-2xl font-display font-black text-foreground block">{s.v}</span>
            <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{s.l}</span>
          </div>
        ))}
      </div>

      {/* ── Controls ── */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => setFilterArea(null)}
            className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
              !filterArea ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All Screens ({SCREENS.length})
          </button>
          {areas.map((a) => {
            const count = SCREENS.filter((s) => s.area === a).length;
            return (
              <button
                key={a}
                onClick={() => setFilterArea(filterArea === a ? null : a)}
                className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                  filterArea === a ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {AREA_STYLES[a].label} ({count})
              </button>
            );
          })}
        </div>
        <input
          type="text"
          placeholder="Search screens, elements, targets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-muted border border-border rounded-lg px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      {/* ── Legend ── */}
      <div className="bg-card/50 border border-border rounded-xl p-3 flex flex-wrap gap-x-5 gap-y-2 text-[9px]">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="font-bold uppercase tracking-widest text-muted-foreground">Inputs:</span>
          {Object.entries(INPUT_BADGE).map(([, v]) => (
            <span key={v.label} className={`px-1.5 py-0.5 rounded font-bold ${v.cls}`}>{v.label}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-bold uppercase tracking-widest text-muted-foreground">Actions:</span>
          {Object.entries(ACTION_SYM).map(([key, v]) => (
            <span key={key} className={`flex items-center gap-0.5 ${v.cls}`}>
              <span className="font-mono text-xs">{v.icon}</span>
              <span>{key}</span>
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="font-bold uppercase tracking-widest text-muted-foreground">States:</span>
          {Object.entries(STATE_CLS).map(([key, cls]) => (
            <span key={key} className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${cls}`} />
              <span className="text-muted-foreground">{key}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Screen Cards ── */}
      {areas.map((area) => {
        const areaScreens = filtered.filter((s) => s.area === area);
        if (areaScreens.length === 0) return null;
        const style = AREA_STYLES[area];

        return (
          <div key={area}>
            {/* Area Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${style.badge}`}>
                {style.label}
              </span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] text-muted-foreground font-mono">{areaScreens.length} screens</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mb-8">
              {areaScreens.map((screen) => {
                const isOpen = expandedScreen === screen.id;

                return (
                  <div
                    key={screen.id}
                    className={`rounded-2xl border bg-gradient-to-br ${style.gradient} to-transparent transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-primary/30 shadow-lg shadow-primary/5 md:col-span-2 xl:col-span-3"
                        : "border-border hover:border-primary/15"
                    }`}
                  >
                    {/* Screen Header */}
                    <button
                      onClick={() => setExpandedScreen(isOpen ? null : screen.id)}
                      className={`w-full p-4 flex items-center gap-3 text-left transition-colors ${
                        isOpen ? "bg-card/80 border-b border-border/50" : "bg-card/40 hover:bg-card/60"
                      }`}
                    >
                      <span className="text-2xl">{screen.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-black text-sm text-foreground">{screen.name}</h4>
                          <span className={`${style.border} border-l-2 pl-2 text-[9px] text-muted-foreground`}>
                            {screen.interactions.length} interactions
                          </span>
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{screen.desc}</p>
                      </div>
                      <span className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </button>

                    {/* Expanded: Interaction Grid */}
                    {isOpen && (
                      <div className="p-3 md:p-4 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5">
                          {screen.interactions.map((ix, i) => (
                            <div
                              key={i}
                              className="bg-card border border-border/60 rounded-xl p-3 hover:border-primary/20 transition-all group"
                            >
                              {/* Element header */}
                              <div className="flex items-start gap-2 mb-2">
                                <span className={`px-1.5 py-0.5 rounded text-[8px] font-black flex-shrink-0 mt-0.5 ${INPUT_BADGE[ix.type].cls}`}>
                                  {INPUT_BADGE[ix.type].label}
                                </span>
                                <span className="text-[12px] font-bold text-foreground leading-tight flex-1">{ix.el}</span>
                              </div>

                              {/* Target */}
                              <div className="flex items-center gap-1.5 text-[11px] mb-2 pl-1">
                                <span className={`font-mono text-sm ${ACTION_SYM[ix.action].cls}`}>{ACTION_SYM[ix.action].icon}</span>
                                <span className="text-foreground/70 font-medium">{ix.to}</span>
                              </div>

                              {/* States */}
                              {ix.states && ix.states.length > 0 && (
                                <div className="flex items-center gap-1 mb-2 pl-1 flex-wrap">
                                  {ix.states.map((st) => (
                                    <span key={st} className="flex items-center gap-0.5">
                                      <span className={`w-[5px] h-[5px] rounded-full ${STATE_CLS[st] || "bg-muted-foreground/20"}`} />
                                      <span className="text-[8px] text-muted-foreground">{st}</span>
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Condition */}
                              {ix.cond && (
                                <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg px-2 py-1.5 mb-2">
                                  <div className="flex items-start gap-1.5">
                                    <span className="text-[10px] text-amber-400 font-mono mt-px">◇</span>
                                    <span className="text-[9px] text-amber-300/80 leading-relaxed">{ix.cond}</span>
                                  </div>
                                </div>
                              )}

                              {/* Micro-interaction */}
                              {ix.micro && (
                                <div className="bg-purple-500/5 border border-purple-500/10 rounded-lg px-2 py-1.5">
                                  <div className="flex items-start gap-1.5">
                                    <span className="text-[10px] text-purple-400 font-mono mt-px">✦</span>
                                    <span className="text-[9px] text-purple-300/80 leading-relaxed">
                                      <span className="font-bold text-purple-300">{ix.micro.trigger}:</span> {ix.micro.effect}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InteractionMap;
