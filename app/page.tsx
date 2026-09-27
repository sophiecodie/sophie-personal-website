import SideTabs from "@/components/SideTabs";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Experience from "@/components/Experience";
import OutsideClass from "@/components/OutsideClass";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SideTabs />
      <main className="pb-16 md:pb-0">
        <Hero />
        <SelectedWorks />
        <Experience />
        <OutsideClass />
        <Contact />
      </main>
    </>
  );
}
