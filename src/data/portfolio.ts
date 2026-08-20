export type Metric = { value: string; label: string; note?: string };
export type Partner = { name: string };
export type CaseStudyStat = { value: string; label: string };
export type CaseStudy = {
  number: string;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  stats?: CaseStudyStat[];
};
export type Experience = { period: string; role: string; company: string; description: string };

const legacyAsset = (file: string) => `https://raw.githubusercontent.com/AakarshBot/aakars-portfolio-new/main/public/${file}`;

export const metrics: Metric[] = [
  { value: "10+", label: "years in sports media", note: "editorial, content & leadership" },
  { value: "4.4B", label: "views during the 2026 World Cup", note: "FIFA global YouTube · tournament period" },
  { value: "15,000+", label: "articles published", note: "across football media" },
  { value: "2", label: "documentary seasons", note: "Future Is Us · Disney+ Hotstar" },
];

export const partners: Partner[] = [
  { name: "FIFA" }, { name: "FanCode" }, { name: "Hyderabad FC" },
  { name: "Microsoft" }, { name: "Premier League India" }, { name: "Liverpool India" },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01", title: "FIFA", subtitle: "2026 World Cup · Global YouTube Publishing", metric: "4.4B views · 7.9M subscribers",
    description: "Led publishing, programming, packaging and optimisation across FIFA's global YouTube ecosystem during the 2026 World Cup. A high-volume operation built around fast-turnaround highlights, match-day programming, data-led packaging and audience behaviour — helping the channel reach a historic level of scale.",
    tags: ["YouTube", "Publishing", "Audience Growth"], image: legacyAsset("fifa-yt.jpg"), imageAlt: "FIFA YouTube publishing work",
    stats: [
      { value: "143M", label: "peak daily views" },
      { value: "79%", label: "new viewers" },
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
  { period: "2026 — Present", role: "Digital Content Manager", company: "Red Lantern Digital Media", description: "Leading digital sports content and publishing across global football properties, including FIFA World Cup programming. Focused on YouTube strategy, audience growth, content packaging and platform-native storytelling at global scale." },
  { period: "2020 — 2025", role: "Media Manager", company: "Hyderabad FC", description: "Led the club's media and content operation across strategy, production, publishing, matchday coverage, fan culture and commercial campaigns. Also scripted the two-season Future Is Us documentary series for Disney+ Hotstar." },
  { period: "2018 — 2020", role: "Content Analyst", company: "Microsoft · Bing Sports", description: "Worked across sports editorial, structured data and product experience, helping shape how sports information was organised and surfaced for audiences on Bing." },
  { period: "2016 — 2018", role: "Editor", company: "The 4th Official", description: "Edited and led football editorial output across a fast-moving digital publication, building the editorial judgement and audience understanding that became the foundation for later leadership roles." },
  { period: "2014 — 2020", role: "Freelance Writer", company: "Multiple Football Outlets", description: "Built a broad editorial foundation through football writing across multiple publications, developing the subject knowledge, voice and audience instincts that continue to inform the work today." },
];

export const skillGroups = [
  { title: "Strategy", items: ["Content Strategy", "Audience Development", "Editorial Strategy", "Programming"] },
  { title: "Content", items: ["Video Production", "Storytelling", "Visual Scripting", "Social Publishing"] },
  { title: "Platforms", items: ["YouTube Strategy", "Platform Analytics", "SEO", "Content Packaging"] },
  { title: "Leadership", items: ["Team Management", "Editorial Leadership", "Stakeholder Management", "Cross-functional Collaboration"] },
];
