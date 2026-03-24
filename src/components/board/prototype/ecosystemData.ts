export type MissionSubmissionType = "link" | "screenshot" | "upload" | "referral" | "review" | "checkin";
export type MissionStatus = "open" | "joined" | "submitted" | "in-review" | "approved" | "rejected";

export interface MissionData {
  id: string;
  title: string;
  brand: string;
  reward: string;
  type: string;
  submissionType: MissionSubmissionType;
  difficulty: "Easy" | "Medium" | "Hard";
  status: MissionStatus;
  slots: { taken: number; total: number };
  deadline?: string;
  description: string;
  requirements: string[];
  locked?: boolean;
}

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
  missions: MissionData[];
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
      {
        id: "c1", title: "Share Venum gear on Instagram", brand: "Venum", reward: "$15",
        type: "Social Share", submissionType: "link", difficulty: "Easy", status: "open",
        slots: { taken: 34, total: 50 }, deadline: "3 days left",
        description: "Post a photo or reel wearing Venum gear on Instagram. Tag @venum and include #LUUPxVenum.",
        requirements: ["Public Instagram account", "Must tag @venum", "Include #LUUPxVenum hashtag"],
      },
      {
        id: "c2", title: "Screenshot your Hayabusa order", brand: "Hayabusa", reward: "$10",
        type: "Purchase Proof", submissionType: "screenshot", difficulty: "Easy", status: "joined",
        slots: { taken: 22, total: 30 }, deadline: "5 days left",
        description: "Purchase any Hayabusa product via your affiliate link and submit a screenshot of your order confirmation.",
        requirements: ["Must use your affiliate link", "Screenshot must show order number", "Min. order $50"],
      },
      {
        id: "c3", title: "Post a training video with gear", brand: "Sanabul", reward: "$25",
        type: "Content Creation", submissionType: "upload", difficulty: "Medium", status: "submitted",
        slots: { taken: 12, total: 20 }, deadline: "7 days left",
        description: "Film a 30–60 second training clip using Sanabul equipment. Upload directly or link to your post.",
        requirements: ["30–60 seconds", "Sanabul gear visible", "Good lighting & audio", "Original content only"],
      },
      {
        id: "c4", title: "Refer 3 friends to LUUP", brand: "LUUP", reward: "$30",
        type: "Referral", submissionType: "referral", difficulty: "Medium", status: "approved",
        slots: { taken: 89, total: 100 },
        description: "Share your referral link. Earn $10 per friend who signs up and completes their first mission.",
        requirements: ["Friends must sign up via your link", "Each must complete 1 mission", "3 minimum to qualify"],
      },
      {
        id: "c5", title: "Write a detailed Everlast review", brand: "Everlast", reward: "$20",
        type: "Review", submissionType: "review", difficulty: "Medium", status: "in-review",
        slots: { taken: 8, total: 15 }, deadline: "10 days left",
        description: "Write a 200+ word review of any Everlast product. Include pros, cons, and photos.",
        requirements: ["Min. 200 words", "Include 2+ photos", "Honest pros & cons", "Must own the product"],
      },
      {
        id: "c6", title: "Attend local MMA event", brand: "UFC", reward: "$50",
        type: "Event Check-in", submissionType: "checkin", difficulty: "Hard", status: "open", locked: true,
        slots: { taken: 0, total: 10 },
        description: "Attend a verified MMA event and check in via the app. Share a photo from the event.",
        requirements: ["GPS check-in required", "Photo from event", "Must be a verified event"],
      },
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
      {
        id: "f1", title: "Share your workout setup", brand: "Gymshark", reward: "$12",
        type: "Social Share", submissionType: "link", difficulty: "Easy", status: "open",
        slots: { taken: 41, total: 60 }, deadline: "4 days left",
        description: "Post your gym setup or workout fit on Instagram or TikTok with Gymshark tagged.",
        requirements: ["Public account", "Tag @gymshark", "Include #LUUPxGymshark"],
      },
      {
        id: "f2", title: "Screenshot Whoop recovery score", brand: "Whoop", reward: "$8",
        type: "Data Share", submissionType: "screenshot", difficulty: "Easy", status: "open",
        slots: { taken: 15, total: 40 }, deadline: "6 days left",
        description: "Share a screenshot of your Whoop recovery score after a workout. Must show the Whoop app UI.",
        requirements: ["Whoop app screenshot", "Recovery score visible", "Must be from past 24h"],
      },
      {
        id: "f3", title: "Film a supplement stack video", brand: "Transparent Labs", reward: "$30",
        type: "Content Creation", submissionType: "upload", difficulty: "Medium", status: "joined",
        slots: { taken: 7, total: 15 }, deadline: "10 days left",
        description: "Create a 30–90 second video showing your daily supplement routine featuring Transparent Labs products.",
        requirements: ["30–90 seconds", "Show product labels", "Explain your stack", "Good production quality"],
      },
      {
        id: "f4", title: "Refer 3 gym buddies", brand: "LUUP", reward: "$25",
        type: "Referral", submissionType: "referral", difficulty: "Medium", status: "open",
        slots: { taken: 55, total: 80 },
        description: "Share your referral link with gym friends. Each must sign up and complete one mission.",
        requirements: ["Friends sign up via your link", "Each completes 1 mission", "3 minimum"],
      },
      {
        id: "f5", title: "Write a Rogue rack review", brand: "Rogue Fitness", reward: "$20",
        type: "Review", submissionType: "review", difficulty: "Medium", status: "open",
        slots: { taken: 3, total: 10 }, deadline: "14 days left",
        description: "Write a detailed 200+ word review of any Rogue Fitness equipment you own.",
        requirements: ["200+ words", "Include photos", "Honest assessment", "Own the product"],
      },
      {
        id: "f6", title: "Compete in a CrossFit event", brand: "Rogue", reward: "$50",
        type: "Event Check-in", submissionType: "checkin", difficulty: "Hard", status: "open", locked: true,
        slots: { taken: 0, total: 10 },
        description: "Register and compete in a local CrossFit competition. Check in via the app.",
        requirements: ["GPS check-in", "Proof of participation", "Verified event"],
      },
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
      {
        id: "o1", title: "Share a trail photo with gear", brand: "Osprey", reward: "$15",
        type: "Social Share", submissionType: "link", difficulty: "Easy", status: "open",
        slots: { taken: 28, total: 50 }, deadline: "5 days left",
        description: "Post a trail photo featuring your Osprey pack on Instagram or TikTok.",
        requirements: ["Public account", "Osprey gear visible", "Tag @osprey"],
      },
      {
        id: "o2", title: "Screenshot your Strava run", brand: "Salomon", reward: "$8",
        type: "Activity Proof", submissionType: "screenshot", difficulty: "Easy", status: "open",
        slots: { taken: 19, total: 35 }, deadline: "4 days left",
        description: "Complete a trail run in Salomon shoes and screenshot your Strava activity showing distance and time.",
        requirements: ["Strava screenshot", "Show distance + time", "Must be trail activity"],
      },
      {
        id: "o3", title: "Film a summit video", brand: "Black Diamond", reward: "$35",
        type: "Content Creation", submissionType: "upload", difficulty: "Medium", status: "open",
        slots: { taken: 4, total: 12 }, deadline: "14 days left",
        description: "Film a 30–90 second summit or climb video using Black Diamond gear.",
        requirements: ["30–90 seconds", "BD gear visible", "Summit or climbing content", "Original footage"],
      },
      {
        id: "o4", title: "Refer 3 hikers to LUUP", brand: "LUUP", reward: "$25",
        type: "Referral", submissionType: "referral", difficulty: "Medium", status: "open",
        slots: { taken: 33, total: 60 },
        description: "Share your referral link with fellow outdoor enthusiasts.",
        requirements: ["Friends sign up via your link", "Each completes 1 mission", "3 minimum"],
      },
      {
        id: "o5", title: "Review Salomon trail shoes", brand: "Salomon", reward: "$15",
        type: "Review", submissionType: "review", difficulty: "Easy", status: "open",
        slots: { taken: 6, total: 20 }, deadline: "10 days left",
        description: "Write a 200+ word review of your Salomon trail running shoes.",
        requirements: ["200+ words", "Include photos", "Cover comfort, grip, durability"],
      },
      {
        id: "o6", title: "Complete a 50km trail event", brand: "Salomon", reward: "$60",
        type: "Event Check-in", submissionType: "checkin", difficulty: "Hard", status: "open", locked: true,
        slots: { taken: 0, total: 8 },
        description: "Complete a 50km+ trail event and check in via the app.",
        requirements: ["GPS check-in", "Finisher proof", "Verified event"],
      },
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
      {
        id: "b1", title: "Post a skincare routine reel", brand: "The Ordinary", reward: "$18",
        type: "Social Share", submissionType: "link", difficulty: "Easy", status: "open",
        slots: { taken: 38, total: 50 }, deadline: "3 days left",
        description: "Create and post a skincare routine reel on Instagram featuring The Ordinary products.",
        requirements: ["Public account", "Show product application", "Tag @theordinary"],
      },
      {
        id: "b2", title: "Screenshot your Fenty shade match", brand: "Fenty Beauty", reward: "$8",
        type: "Shade Match", submissionType: "screenshot", difficulty: "Easy", status: "open",
        slots: { taken: 25, total: 40 },
        description: "Use the Fenty shade finder and screenshot your match result.",
        requirements: ["Fenty website screenshot", "Show shade name & number", "Include your skin type"],
      },
      {
        id: "b3", title: "Create a GRWM video", brand: "Drunk Elephant", reward: "$30",
        type: "Content Creation", submissionType: "upload", difficulty: "Medium", status: "open",
        slots: { taken: 5, total: 15 }, deadline: "10 days left",
        description: "Film a Get Ready With Me video featuring at least 2 Drunk Elephant products.",
        requirements: ["60–120 seconds", "Show 2+ products", "Natural lighting", "Show application"],
      },
      {
        id: "b4", title: "Refer 3 beauty lovers", brand: "LUUP", reward: "$25",
        type: "Referral", submissionType: "referral", difficulty: "Medium", status: "open",
        slots: { taken: 42, total: 70 },
        description: "Share your referral link with friends who love skincare and beauty.",
        requirements: ["Friends sign up via your link", "Each completes 1 mission", "3 minimum"],
      },
      {
        id: "b5", title: "Review Olaplex hair treatment", brand: "Olaplex", reward: "$15",
        type: "Review", submissionType: "review", difficulty: "Easy", status: "open",
        slots: { taken: 9, total: 25 }, deadline: "7 days left",
        description: "Write a before/after review of any Olaplex treatment product.",
        requirements: ["200+ words", "Before/after photos", "Cover texture & results"],
      },
      {
        id: "b6", title: "Attend a beauty masterclass", brand: "Fenty", reward: "$45",
        type: "Event Check-in", submissionType: "checkin", difficulty: "Hard", status: "open", locked: true,
        slots: { taken: 0, total: 10 },
        description: "Attend a verified beauty masterclass or brand event.",
        requirements: ["GPS check-in", "Event photo", "Verified event"],
      },
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
      {
        id: "g1", title: "Stream with SteelSeries gear", brand: "SteelSeries", reward: "$20",
        type: "Social Share", submissionType: "link", difficulty: "Easy", status: "open",
        slots: { taken: 18, total: 30 }, deadline: "5 days left",
        description: "Go live on Twitch or YouTube using SteelSeries peripherals. Link your VOD.",
        requirements: ["Min. 30 min stream", "Mention SteelSeries", "Link VOD after"],
      },
      {
        id: "g2", title: "Screenshot your setup with HyperX", brand: "HyperX", reward: "$10",
        type: "Setup Share", submissionType: "screenshot", difficulty: "Easy", status: "open",
        slots: { taken: 22, total: 40 },
        description: "Take a high-quality photo of your gaming setup featuring HyperX gear.",
        requirements: ["HyperX gear visible", "Clean setup photo", "Good lighting"],
      },
      {
        id: "g3", title: "Create a setup tour video", brand: "HyperX", reward: "$30",
        type: "Content Creation", submissionType: "upload", difficulty: "Medium", status: "open",
        slots: { taken: 6, total: 15 }, deadline: "10 days left",
        description: "Film a 60–120 second desk/setup tour video highlighting your HyperX peripherals.",
        requirements: ["60–120 seconds", "Show each peripheral", "Clean editing", "Original content"],
      },
      {
        id: "g4", title: "Refer 3 gamers to LUUP", brand: "LUUP", reward: "$25",
        type: "Referral", submissionType: "referral", difficulty: "Medium", status: "open",
        slots: { taken: 45, total: 60 },
        description: "Share your referral link with gaming friends.",
        requirements: ["Friends sign up via link", "Each completes 1 mission", "3 minimum"],
      },
      {
        id: "g5", title: "Review Secretlab Titan chair", brand: "Secretlab", reward: "$20",
        type: "Review", submissionType: "review", difficulty: "Medium", status: "open",
        slots: { taken: 4, total: 12 }, deadline: "14 days left",
        description: "Write a detailed review of your Secretlab chair covering comfort, build, and features.",
        requirements: ["200+ words", "Include photos", "Cover assembly experience", "Long-term impressions"],
      },
      {
        id: "g6", title: "Compete in a LUUP tournament", brand: "GFUEL", reward: "$75",
        type: "Event Check-in", submissionType: "checkin", difficulty: "Hard", status: "open", locked: true,
        slots: { taken: 0, total: 10 },
        description: "Enter and compete in a LUUP-sponsored gaming tournament.",
        requirements: ["Register via app", "Complete all matches", "Verified tournament"],
      },
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
      {
        id: "fd1", title: "Share your morning AG1 routine", brand: "Athletic Greens", reward: "$15",
        type: "Social Share", submissionType: "link", difficulty: "Easy", status: "open",
        slots: { taken: 31, total: 45 }, deadline: "4 days left",
        description: "Post your morning AG1 routine on Instagram or TikTok.",
        requirements: ["Show AG1 preparation", "Tag @drinkag1", "Include #LUUPxAG1"],
      },
      {
        id: "fd2", title: "Screenshot your order confirmation", brand: "Fly By Jing", reward: "$8",
        type: "Purchase Proof", submissionType: "screenshot", difficulty: "Easy", status: "open",
        slots: { taken: 14, total: 30 },
        description: "Order via your affiliate link and screenshot the confirmation page.",
        requirements: ["Use your affiliate link", "Show order number", "Min. order $20"],
      },
      {
        id: "fd3", title: "Create a recipe video", brand: "Magic Spoon", reward: "$25",
        type: "Content Creation", submissionType: "upload", difficulty: "Medium", status: "open",
        slots: { taken: 8, total: 20 }, deadline: "10 days left",
        description: "Film a recipe video featuring Magic Spoon cereal as an ingredient.",
        requirements: ["30–90 seconds", "Show the product", "Creative recipe", "Good production"],
      },
      {
        id: "fd4", title: "Refer 3 foodies to LUUP", brand: "LUUP", reward: "$20",
        type: "Referral", submissionType: "referral", difficulty: "Medium", status: "open",
        slots: { taken: 27, total: 50 },
        description: "Share your referral link with food-loving friends.",
        requirements: ["Friends sign up via link", "Each completes 1 mission", "3 minimum"],
      },
      {
        id: "fd5", title: "Review Fly By Jing chili crisp", brand: "Fly By Jing", reward: "$12",
        type: "Review", submissionType: "review", difficulty: "Easy", status: "open",
        slots: { taken: 11, total: 25 }, deadline: "7 days left",
        description: "Write a taste test review of Fly By Jing Sichuan Chili Crisp.",
        requirements: ["200+ words", "Include food photos", "Describe flavor profile"],
      },
      {
        id: "fd6", title: "Attend a food festival booth", brand: "Liquid Death", reward: "$40",
        type: "Event Check-in", submissionType: "checkin", difficulty: "Hard", locked: true,
        slots: { taken: 0, total: 10 },
        description: "Visit a Liquid Death booth at a food festival and check in.",
        requirements: ["GPS check-in", "Booth photo", "Verified event"],
      },
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
