export interface EcosystemData {
  id: string;
  label: string;
  emoji: string;
  color: string;
  walletBalance: string;
  walletGrowth: string;
  referralEarnings: string;
  missionEarnings: string;
  brands: { name: string; category: string; royalty: string; products: number; logo: string }[];
  featuredBrand: { name: string; desc: string; royalty: string; products: number; logo: string };
  trendingOffers: { name: string; brand: string; royalty: string; price: string }[];
  missions: { title: string; brand: string; reward: string; type: string; difficulty: string; action?: string; locked?: boolean }[];
  activeMissions: { title: string; reward: string; progress: number }[];
  leaderboardTitle: string;
}

export const ecosystems: EcosystemData[] = [
  {
    id: "combat",
    label: "Combat Sports",
    emoji: "🥊",
    color: "bg-destructive/10 text-destructive",
    walletBalance: "$1,247.80",
    walletGrowth: "+23%",
    referralEarnings: "$842",
    missionEarnings: "$405",
    brands: [
      { name: "Hayabusa", category: "Combat Gear", royalty: "10–15%", products: 312, logo: "H" },
      { name: "Sanabul", category: "Training Equipment", royalty: "8–10%", products: 189, logo: "S" },
      { name: "Everlast", category: "Boxing & MMA", royalty: "6–9%", products: 524, logo: "E" },
      { name: "RDX Sports", category: "Fitness & Combat", royalty: "7–11%", products: 436, logo: "R" },
    ],
    featuredBrand: { name: "Venum", desc: "Official combat sports gear", royalty: "8–12%", products: 847, logo: "V" },
    trendingOffers: [
      { name: "Hayabusa T3 Gloves", brand: "Hayabusa", royalty: "12%", price: "$89" },
      { name: "Venum Rashguard", brand: "Venum", royalty: "10%", price: "$54" },
      { name: "CBD Recovery Balm", brand: "Eagle Energy", royalty: "15%", price: "$39" },
    ],
    missions: [
      { title: "Share Venum gear on Instagram", brand: "Venum", reward: "$15", type: "Social Share", difficulty: "Easy", action: "share" },
      { title: "Write a review for Hayabusa T3", brand: "Hayabusa", reward: "$10", type: "Review", difficulty: "Easy", action: "review" },
      { title: "Post a training video with gear", brand: "Sanabul", reward: "$25", type: "Content", difficulty: "Medium", action: "upload" },
      { title: "Refer 3 friends to LUUP", brand: "LUUP", reward: "$30", type: "Referral", difficulty: "Medium", action: "refer" },
      { title: "Attend local MMA event", brand: "UFC", reward: "$50", type: "Event", difficulty: "Hard", locked: true },
    ],
    activeMissions: [
      { title: "Share Venum gear photo", reward: "$15", progress: 60 },
      { title: "Review Hayabusa gloves", reward: "$10", progress: 30 },
    ],
    leaderboardTitle: "Combat Sports Leaderboard",
  },
  {
    id: "fitness",
    label: "Fitness & Wellness",
    emoji: "💪",
    color: "bg-primary/10 text-primary",
    walletBalance: "$832.50",
    walletGrowth: "+18%",
    referralEarnings: "$520",
    missionEarnings: "$312",
    brands: [
      { name: "Gymshark", category: "Activewear", royalty: "8–12%", products: 620, logo: "G" },
      { name: "Whoop", category: "Wearables", royalty: "10–14%", products: 45, logo: "W" },
      { name: "Transparent Labs", category: "Supplements", royalty: "12–18%", products: 180, logo: "T" },
      { name: "Rogue Fitness", category: "Equipment", royalty: "6–9%", products: 890, logo: "R" },
    ],
    featuredBrand: { name: "Gymshark", desc: "Premium activewear & performance gear", royalty: "8–12%", products: 620, logo: "G" },
    trendingOffers: [
      { name: "Whoop 4.0 Band", brand: "Whoop", royalty: "14%", price: "$30/mo" },
      { name: "Creatine Monohydrate", brand: "Transparent Labs", royalty: "18%", price: "$49" },
      { name: "Flex Shorts", brand: "Gymshark", royalty: "10%", price: "$38" },
    ],
    missions: [
      { title: "Share your workout setup", brand: "Gymshark", reward: "$12", type: "Social Share", difficulty: "Easy", action: "share" },
      { title: "Review Whoop 4.0 recovery", brand: "Whoop", reward: "$20", type: "Review", difficulty: "Easy", action: "review" },
      { title: "Film a supplement stack video", brand: "Transparent Labs", reward: "$30", type: "Content", difficulty: "Medium", action: "upload" },
      { title: "Refer 3 gym buddies", brand: "LUUP", reward: "$25", type: "Referral", difficulty: "Medium", action: "refer" },
      { title: "Compete in a CrossFit event", brand: "Rogue", reward: "$50", type: "Event", difficulty: "Hard", locked: true },
    ],
    activeMissions: [
      { title: "Share Gymshark fit pic", reward: "$12", progress: 45 },
      { title: "Review Whoop recovery", reward: "$20", progress: 70 },
    ],
    leaderboardTitle: "Fitness Leaderboard",
  },
  {
    id: "outdoor",
    label: "Outdoor & Adventure",
    emoji: "🏔️",
    color: "bg-emerald-500/10 text-emerald-600",
    walletBalance: "$594.20",
    walletGrowth: "+31%",
    referralEarnings: "$380",
    missionEarnings: "$214",
    brands: [
      { name: "Osprey", category: "Backpacks & Bags", royalty: "8–12%", products: 340, logo: "O" },
      { name: "Salomon", category: "Trail Running", royalty: "7–10%", products: 520, logo: "S" },
      { name: "Black Diamond", category: "Climbing Gear", royalty: "9–13%", products: 280, logo: "B" },
      { name: "Patagonia", category: "Outerwear", royalty: "5–8%", products: 710, logo: "P" },
    ],
    featuredBrand: { name: "Osprey", desc: "Adventure-ready packs & gear", royalty: "8–12%", products: 340, logo: "O" },
    trendingOffers: [
      { name: "Atmos AG 65 Pack", brand: "Osprey", royalty: "12%", price: "$310" },
      { name: "Speedcross 6", brand: "Salomon", royalty: "10%", price: "$140" },
      { name: "Nano Puff Jacket", brand: "Patagonia", royalty: "8%", price: "$229" },
    ],
    missions: [
      { title: "Share a trail photo with gear", brand: "Osprey", reward: "$15", type: "Social Share", difficulty: "Easy", action: "share" },
      { title: "Review Salomon trail shoes", brand: "Salomon", reward: "$12", type: "Review", difficulty: "Easy", action: "review" },
      { title: "Film a summit video", brand: "Black Diamond", reward: "$35", type: "Content", difficulty: "Medium", action: "upload" },
      { title: "Refer 3 hikers to LUUP", brand: "LUUP", reward: "$25", type: "Referral", difficulty: "Medium", action: "refer" },
      { title: "Complete a 50km trail event", brand: "Salomon", reward: "$60", type: "Event", difficulty: "Hard", locked: true },
    ],
    activeMissions: [
      { title: "Share trail photo", reward: "$15", progress: 80 },
      { title: "Review Salomon shoes", reward: "$12", progress: 20 },
    ],
    leaderboardTitle: "Outdoor Leaderboard",
  },
  {
    id: "beauty",
    label: "Beauty & Skincare",
    emoji: "✨",
    color: "bg-pink-500/10 text-pink-600",
    walletBalance: "$1,089.30",
    walletGrowth: "+27%",
    referralEarnings: "$720",
    missionEarnings: "$369",
    brands: [
      { name: "The Ordinary", category: "Skincare", royalty: "10–15%", products: 280, logo: "T" },
      { name: "Fenty Beauty", category: "Cosmetics", royalty: "8–12%", products: 450, logo: "F" },
      { name: "Drunk Elephant", category: "Premium Skincare", royalty: "12–16%", products: 120, logo: "D" },
      { name: "Olaplex", category: "Haircare", royalty: "9–14%", products: 85, logo: "O" },
    ],
    featuredBrand: { name: "Fenty Beauty", desc: "Inclusive beauty for all skin tones", royalty: "8–12%", products: 450, logo: "F" },
    trendingOffers: [
      { name: "Gloss Bomb", brand: "Fenty Beauty", royalty: "12%", price: "$22" },
      { name: "Niacinamide 10%", brand: "The Ordinary", royalty: "15%", price: "$6" },
      { name: "Protini Moisturizer", brand: "Drunk Elephant", royalty: "14%", price: "$68" },
    ],
    missions: [
      { title: "Post a skincare routine reel", brand: "The Ordinary", reward: "$18", type: "Social Share", difficulty: "Easy", action: "share" },
      { title: "Review Fenty foundation shade", brand: "Fenty Beauty", reward: "$15", type: "Review", difficulty: "Easy", action: "review" },
      { title: "Create a GRWM video", brand: "Drunk Elephant", reward: "$30", type: "Content", difficulty: "Medium", action: "upload" },
      { title: "Refer 3 beauty lovers", brand: "LUUP", reward: "$25", type: "Referral", difficulty: "Medium", action: "refer" },
      { title: "Attend a beauty masterclass", brand: "Fenty", reward: "$45", type: "Event", difficulty: "Hard", locked: true },
    ],
    activeMissions: [
      { title: "Post skincare reel", reward: "$18", progress: 50 },
      { title: "Review Fenty shade", reward: "$15", progress: 65 },
    ],
    leaderboardTitle: "Beauty Leaderboard",
  },
  {
    id: "gaming",
    label: "Gaming & Esports",
    emoji: "🎮",
    color: "bg-violet-500/10 text-violet-600",
    walletBalance: "$723.60",
    walletGrowth: "+35%",
    referralEarnings: "$490",
    missionEarnings: "$233",
    brands: [
      { name: "SteelSeries", category: "Peripherals", royalty: "8–12%", products: 230, logo: "S" },
      { name: "Secretlab", category: "Gaming Chairs", royalty: "6–10%", products: 45, logo: "S" },
      { name: "HyperX", category: "Audio & Gear", royalty: "9–13%", products: 180, logo: "H" },
      { name: "GFUEL", category: "Energy & Nutrition", royalty: "14–20%", products: 95, logo: "G" },
    ],
    featuredBrand: { name: "SteelSeries", desc: "Pro-grade gaming peripherals", royalty: "8–12%", products: 230, logo: "S" },
    trendingOffers: [
      { name: "Arctis Nova Pro", brand: "SteelSeries", royalty: "12%", price: "$349" },
      { name: "Titan Evo Chair", brand: "Secretlab", royalty: "8%", price: "$519" },
      { name: "Shaker Cup Bundle", brand: "GFUEL", royalty: "20%", price: "$35" },
    ],
    missions: [
      { title: "Stream with SteelSeries gear", brand: "SteelSeries", reward: "$20", type: "Social Share", difficulty: "Easy", action: "share" },
      { title: "Review Secretlab Titan", brand: "Secretlab", reward: "$15", type: "Review", difficulty: "Easy", action: "review" },
      { title: "Create a setup tour video", brand: "HyperX", reward: "$30", type: "Content", difficulty: "Medium", action: "upload" },
      { title: "Refer 3 gamers to LUUP", brand: "LUUP", reward: "$25", type: "Referral", difficulty: "Medium", action: "refer" },
      { title: "Compete in a LUUP tournament", brand: "GFUEL", reward: "$75", type: "Event", difficulty: "Hard", locked: true },
    ],
    activeMissions: [
      { title: "Stream with SteelSeries", reward: "$20", progress: 40 },
      { title: "Setup tour video", reward: "$30", progress: 15 },
    ],
    leaderboardTitle: "Gaming Leaderboard",
  },
  {
    id: "food",
    label: "Food & Beverage",
    emoji: "🍜",
    color: "bg-amber-500/10 text-amber-600",
    walletBalance: "$456.90",
    walletGrowth: "+19%",
    referralEarnings: "$280",
    missionEarnings: "$176",
    brands: [
      { name: "Athletic Greens", category: "Supplements", royalty: "15–20%", products: 25, logo: "A" },
      { name: "Fly By Jing", category: "Sauces & Spices", royalty: "12–16%", products: 40, logo: "F" },
      { name: "Magic Spoon", category: "Healthy Cereal", royalty: "14–18%", products: 30, logo: "M" },
      { name: "Liquid Death", category: "Beverages", royalty: "10–14%", products: 35, logo: "L" },
    ],
    featuredBrand: { name: "Athletic Greens", desc: "All-in-one daily nutrition", royalty: "15–20%", products: 25, logo: "A" },
    trendingOffers: [
      { name: "AG1 Starter Kit", brand: "Athletic Greens", royalty: "20%", price: "$79" },
      { name: "Sichuan Chili Crisp", brand: "Fly By Jing", royalty: "16%", price: "$15" },
      { name: "Variety Pack", brand: "Magic Spoon", royalty: "18%", price: "$39" },
    ],
    missions: [
      { title: "Share your morning AG1 routine", brand: "Athletic Greens", reward: "$15", type: "Social Share", difficulty: "Easy", action: "share" },
      { title: "Review Fly By Jing chili crisp", brand: "Fly By Jing", reward: "$10", type: "Review", difficulty: "Easy", action: "review" },
      { title: "Create a recipe video", brand: "Magic Spoon", reward: "$25", type: "Content", difficulty: "Medium", action: "upload" },
      { title: "Refer 3 foodies to LUUP", brand: "LUUP", reward: "$20", type: "Referral", difficulty: "Medium", action: "refer" },
      { title: "Attend a food festival booth", brand: "Liquid Death", reward: "$40", type: "Event", difficulty: "Hard", locked: true },
    ],
    activeMissions: [
      { title: "Share AG1 routine", reward: "$15", progress: 90 },
      { title: "Recipe video", reward: "$25", progress: 10 },
    ],
    leaderboardTitle: "Food & Beverage Leaderboard",
  },
];

export const getEcosystem = (id: string): EcosystemData =>
  ecosystems.find((e) => e.id === id) || ecosystems[0];
