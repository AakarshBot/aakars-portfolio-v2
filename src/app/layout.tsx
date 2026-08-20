import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://aakarshbommakanti.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aakarsh Bommakanti | Sports Media & Content Leader",
    template: "%s | Aakarsh Bommakanti",
  },
  description:
    "Aakarsh Bommakanti is a sports media and content leader working across content strategy, YouTube publishing, audience growth, storytelling and digital sports media.",
  keywords: [
    "Aakarsh Bommakanti", "sports media", "sports content", "content strategy",
    "YouTube publishing", "sports audience growth", "FIFA content", "FanCode",
    "Hyderabad FC", "Microsoft Bing Sports", "football content", "sports storytelling",
  ],
  authors: [{ name: "Aakarsh Bommakanti" }],
  creator: "Aakarsh Bommakanti",
  publisher: "Aakarsh Bommakanti",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aakarsh Bommakanti | Sports Media & Content Leader",
    description: "Sports media, content strategy, storytelling and audience growth across global football and sports platforms.",
    url: siteUrl,
    siteName: "Aakarsh Bommakanti",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakarsh Bommakanti | Sports Media & Content Leader",
    description: "Sports media, content strategy, storytelling and audience growth across global football and sports platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aakarsh Bommakanti",
  url: siteUrl,
  jobTitle: "Sports Media & Content Leader",
  description: "Sports media and content leader specialising in content strategy, storytelling, publishing and audience growth.",
  sameAs: ["https://x.com/aakarsh_ab"],
  knowsAbout: ["Sports Media", "Content Strategy", "YouTube Publishing", "Sports Storytelling", "Audience Development", "Digital Media"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
