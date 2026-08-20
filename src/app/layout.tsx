import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aakarsh Bommakanti | Sports Media & Content Leader",
  description:
    "Aakarsh Bommakanti is a sports media and content leader working across strategy, storytelling, audience growth and digital publishing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
