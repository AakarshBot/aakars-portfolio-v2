"use client";

import { useEffect, useState } from "react";

const resumeUrl = "https://raw.githubusercontent.com/AakarshBot/aakars-portfolio-new/main/public/AakarshBommakanti-Resume.pdf";

const links = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-black/10 transition-all duration-300 ${scrolled ? "bg-[color:var(--background)]/90 shadow-sm backdrop-blur-md" : "bg-[color:var(--background)]"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-10">
        <a href="#top" className="text-sm font-semibold tracking-[0.16em] uppercase">Aakarsh</a>
        <div className="hidden items-center gap-6 text-sm md:flex lg:gap-7">
          {links.map(([label, href]) => <a className="transition-opacity hover:opacity-55" href={href} key={label}>{label}</a>)}
          <a className="border-b border-black pb-1 font-semibold" href={resumeUrl} target="_blank" rel="noreferrer">CV ↗</a>
        </div>
        <a className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold md:hidden" href="#contact">Contact ↗</a>
      </nav>
    </header>
  );
}
