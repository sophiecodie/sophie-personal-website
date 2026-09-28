import SideTabs from "@/components/SideTabs";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OutsideClass from "@/components/OutsideClass";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SideTabs />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Experience />
        <Skills />
        <OutsideClass />
        <Contact />
      </main>
    </>
  );
}
