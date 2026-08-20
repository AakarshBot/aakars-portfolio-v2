export type Metric = { value: string; label: string; note?: string };
export type Partner = { name: string };
export type CaseStudyStat = { value: string; label: string; note?: string };
export type CaseStudy = { number: string; title: string; subtitle: string; metric: string; description: string; tags: string[]; image: string; imageAlt: string; stats?: CaseStudyStat[]; highlights?: string[] };
export type Experience = { period: string; role: string; company: string; description: string };

const legacyAsset = (file: string) => `https://raw.githubusercontent.com/AakarshBot/aakars-portfolio-new/main/public/${file}`;

export const metrics: Metric[] = [
  { value: "127.3M", label: "FIFA views", note: "from 66.18M" },
  { value: "4.95M", label: "hours watched", note: "YouTube audience" },
  { value: "15,000+", label: "articles published", note: "across football media" },
  { value: "2", label: "documentary seasons", note: "Future Is Us · Disney+ Hotstar" },
];

export const partners: Partner[] = [
  { name: "FIFA" }, { name: "FanCode" }, { name: "Hyderabad FC" },
  { name: "Microsoft" }, { name: "Premier League India" }, { name: "Liverpool India" },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "FIFA",
    subtitle: "2026 FIFA World Cup · Global YouTube Publishing & Audience Growth",
    metric: "4.4B views · +441.9% vs 2022",
    description: "Led publishing, programming and performance-led optimisation across FIFA's global YouTube ecosystem during the 2026 FIFA World Cup. The strategy combined high-volume publishing, rapid match-turnaround, packaging, analytics and audience signals to scale the channel to its biggest tournament performance in history.",
    tags: ["YouTube", "World Cup", "Audience Growth"],
    image: legacyAsset("fifa-yt.jpg"),
    imageAlt: "FIFA YouTube publishing work",
    stats: [
      { value: "4.4B", label: "Views", note: "+441.9% vs 2022" },
      { value: "2,315", label: "Videos published", note: "1,457 long · 858 Shorts" },
      { value: "7.9M", label: "Subscribers", note: "+46.3%" },
      { value: "16.6B", label: "Impressions", note: "+107.0%" },
    ],
    highlights: [
      "143M views in a single day — the highest daily total in channel history.",
      "2.3B views came from Shorts, accounting for 52% of tournament-period views.",
      "Post-Match PCs averaged 200K+ views, while selected Statistical Previews averaged 500K+.",
      "The ESP v ARG Statistical Preview approached 2M views; tournament compilations averaged 300K+.",
    ],
  },
  {
    number: "02", title: "FanCode", subtitle: "Live Sports Content, Social & Tune-ins", metric: "ISL · LaLiga · Live Sports",
    description: "Built platform-native content around live sporting properties, connecting editorial planning, social publishing, match-day coverage and promotional storytelling to audience intent and tune-ins.",
    tags: ["Live Sports", "Social", "Content Strategy"], image: legacyAsset("fancode-content.jpg"), imageAlt: "FanCode sports content work",
  },
  {
    number: "03", title: "Hyderabad FC", subtitle: "Club Media, Fan Culture & Documentary Storytelling", metric: "Future Is Us · 2 Seasons",
    description: "Led the club's media and content operation through a championship-winning era, shaping digital storytelling, fan culture, matchday publishing and campaigns while scripting the two-season Future Is Us documentary series for Disney+ Hotstar.",
    tags: ["Club Media", "Documentary", "Fan Culture"], image: legacyAsset("hfc-trophy.jpg"), imageAlt: "Hyderabad FC trophy celebration",
  },
  {
    number: "04", title: "Microsoft", subtitle: "Bing Sports · Editorial, Data & Product", metric: "Bing Sports",
    description: "Worked at the intersection of sports editorial, structured data and product experience for Bing Sports, bringing a publisher's understanding of sports audiences into a technology environment.",
    tags: ["Editorial", "Data", "Product"], image: legacyAsset("bing-ui.jpg"), imageAlt: "Bing Sports product experience",
  },
];

export const experience: Experience[] = [
  { period: "2026 — Present", role: "Digital Content Manager", company: "Red Lantern Digital Media", description: "Leading digital sports content and publishing across global football properties, with a focus on YouTube strategy, audience growth, packaging and platform-native storytelling." },
  { period: "2020 — 2025", role: "Media Manager", company: "Hyderabad FC", description: "Led club media strategy, content production, publishing and fan storytelling through a championship-winning era, including documentary, sponsor-facing and matchday work." },
  { period: "2018 — 2020", role: "Content Analyst", company: "Microsoft · Bing Sports", description: "Combined sports editorial, analysis, structured data and product thinking across Bing Sports experiences, working where sports content, audience behaviour and technology met." },
  { period: "2016 — 2018", role: "Editor", company: "The 4th Official", description: "Led football editorial output, editing and publishing while developing a strong understanding of digital sports audiences, newsroom workflows and high-volume football coverage." },
  { period: "2014 — 2020", role: "Freelance Writer", company: "Multiple Outlets", description: "Built the writing and editorial foundation of a decade-long career in sports media, contributing football coverage and analysis across multiple outlets while developing the craft that later shaped content leadership roles." },
];

export const skillGroups = [
  { title: "Strategy", items: ["Content Strategy", "Audience Development", "Editorial Strategy", "Digital Marketing"] },
  { title: "Content", items: ["Video Production", "Storytelling", "Visual Scripting", "Social Publishing"] },
  { title: "Data", items: ["YouTube Analytics", "Sports Analytics", "SEO", "A/B Testing"] },
  { title: "Leadership", items: ["Team Management", "Editorial Leadership", "Media Relations", "Cross-functional Collaboration"] },
];
