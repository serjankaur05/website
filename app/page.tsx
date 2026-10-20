import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import SystemsMap from "@/components/SystemsMap";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a href="#work" className="skip-link">
        Skip to work
      </a>
      <Hero />
      <main>
        <Work />
        <Experience />
        <SystemsMap />
        <Writing />
      </main>
      <Contact />
    </>
  );
}
