export type Metric = { value: string; label: string };
export type Partner = { name: string };
export type CaseStudy = {
  number: string;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  tags: string[];
};
export type Experience = { period: string; role: string; company: string; description: string };

export const metrics: Metric[] = [
  { value: "127.3M", label: "FIFA views" },
  { value: "4.95M", label: "hours watched" },
  { value: "15,000+", label: "articles" },
  { value: "2", label: "documentary seasons" },
];

export const partners: Partner[] = [
  { name: "FIFA" },
  { name: "FanCode" },
  { name: "Hyderabad FC" },
  { name: "Microsoft" },
  { name: "Premier League India" },
  { name: "Liverpool India" },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "FIFA",
    subtitle: "Global YouTube Publishing & Audience Growth",
    metric: "66.18M → 127.33M",
    description: "Publishing, packaging, optimisation and audience strategy across FIFA's global YouTube ecosystem, with a focus on programming, metadata, thumbnails and performance-led iteration.",
    tags: ["YouTube", "Publishing", "Audience Growth"],
  },
  {
    number: "02",
    title: "FanCode",
    subtitle: "Live Sports Content & Social Publishing",
    metric: "ISL · LaLiga · Live Sports",
    description: "Platform-native content, live coverage, promotional storytelling and tune-ins across major sporting properties, balancing speed, relevance and audience intent.",
    tags: ["Live Sports", "Social", "Content"],
  },
  {
    number: "03",
    title: "Hyderabad FC",
    subtitle: "Building a Club's Digital Identity",
    metric: "Future Is Us · ISL",
    description: "Led media and content strategy around the club's championship era, fan culture and documentary storytelling, including the two-season Future Is Us series for Disney+ Hotstar.",
    tags: ["Club Media", "Documentary", "Fan Culture"],
  },
  {
    number: "04",
    title: "Microsoft",
    subtitle: "Sports Content & Product Experience",
    metric: "Bing Sports",
    description: "Worked across sports content, analysis and product experience for Bing Sports, combining editorial judgement with data and platform thinking.",
    tags: ["Editorial", "Data", "Product"],
  },
];

export const experience: Experience[] = [
  { period: "2026 — Present", role: "Digital Content Manager", company: "Red Lantern Digital Media", description: "Leading digital sports content and publishing across global football properties and platforms." },
  { period: "2020 — 2025", role: "Media Manager", company: "Hyderabad FC", description: "Built and led club media strategy, content production, publishing and fan storytelling through a championship-winning era." },
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
