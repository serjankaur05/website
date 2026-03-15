import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#e8e6e1]">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Writing />
      <Skills />
      <Contact />
    </main>
  );
}
