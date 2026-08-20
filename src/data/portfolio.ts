export type Metric = { value: string; label: string; note?: string };
export type Partner = { name: string };
export type CaseStudy = { number: string; title: string; subtitle: string; metric: string; description: string; tags: string[]; image: string; imageAlt: string };
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
    number: "01", title: "FIFA", subtitle: "Global YouTube Publishing & Audience Growth", metric: "66.18M → 127.33M",
    description: "Built and executed publishing and optimisation workflows across FIFA's global YouTube ecosystem, using programming, metadata, thumbnail packaging, analytics and performance-led iteration to grow monthly view output.",
    tags: ["YouTube", "Publishing", "Audience Growth"], image: legacyAsset("fifa-yt.jpg"), imageAlt: "FIFA YouTube publishing work",
  },
  {
    number: "02", title: "FanCode", subtitle: "Live Sports Content, Social & Tune-ins", metric: "ISL · LaLiga · Live Sports",
    description: "Developed platform-native content around live sporting properties, connecting editorial planning, social publishing, match-day coverage and promotional storytelling to audience intent and tune-ins.",
    tags: ["Live Sports", "Social", "Content Strategy"], image: legacyAsset("fancode-content.jpg"), imageAlt: "FanCode sports content work",
  },
  {
    number: "03", title: "Hyderabad FC", subtitle: "Club Media, Fan Culture & Documentary Storytelling", metric: "Future Is Us · 2 Seasons",
    description: "Led media and content strategy through Hyderabad FC's championship era, helping shape the club's digital voice and fan culture while scripting the two-season Future Is Us documentary series for Disney+ Hotstar.",
    tags: ["Club Media", "Documentary", "Fan Culture"], image: legacyAsset("hfc-trophy.jpg"), imageAlt: "Hyderabad FC trophy celebration",
  },
  {
    number: "04", title: "Microsoft", subtitle: "Bing Sports · Editorial, Data & Product", metric: "Bing Sports",
    description: "Worked across sports content and product experience for Bing Sports, combining editorial judgement, structured sports data and audience-focused product thinking.",
    tags: ["Editorial", "Data", "Product"], image: legacyAsset("bing-ui.jpg"), imageAlt: "Bing Sports product experience",
  },
];

export const experience: Experience[] = [
  { period: "2026 — Present", role: "Digital Content Manager", company: "Red Lantern Digital Media", description: "Leading digital sports content and publishing across global football properties and platforms." },
  { period: "2020 — 2025", role: "Media Manager", company: "Hyderabad FC", description: "Led club media strategy, content production, publishing and fan storytelling through a championship-winning era." },
  { period: "2018 — 2020", role: "Content Analyst", company: "Microsoft · Bing Sports", description: "Combined sports editorial, analysis and product thinking across Bing Sports experiences." },
  { period: "2016 — 2018", role: "Editor", company: "The 4th Official", description: "Led football editorial output and developed a strong understanding of digital sports audiences." },
  { period: "2014 — 2020", role: "Freelance Writer", company: "Multiple Outlets", description: "Built the writing and editorial foundation that developed into a career in sports media leadership." },
];

export const skillGroups = [
  { title: "Strategy", items: ["Content Strategy", "Audience Development", "Editorial Strategy", "Digital Marketing"] },
  { title: "Content", items: ["Video Production", "Storytelling", "Visual Scripting", "Social Publishing"] },
  { title: "Data", items: ["YouTube Analytics", "Sports Analytics", "SEO", "A/B Testing"] },
  { title: "Leadership", items: ["Team Management", "Editorial Leadership", "Media Relations", "Cross-functional Collaboration"] },
];
