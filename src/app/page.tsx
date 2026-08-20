import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Impact />
      <CaseStudies />
      <Experience />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
