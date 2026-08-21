import Hero from "@/components/hero/Hero";
import StackMarquee from "@/components/sections/StackMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import JemTechSports from "@/components/jemtech/JemTechSports";
import Projects from "@/components/sections/Projects";
import SocialLinks from "@/components/social/SocialLinks";
import CallToAction from "@/components/sections/CallToAction";
import RevealGroup from "@/components/ui/RevealGroup";

/**
 * Home. Sections composed as server components; client islands (Hero canvas,
 * magnetic buttons, JemTech scene, social micro-interactions, custom cursor)
 * hydrate independently. RevealGroup wraps [data-anim] sections to fade
 * content in on scroll from a single controller per group.
 */
export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <StackMarquee />
      <RevealGroup>
        <About />
        <Services />
        <Process />
      </RevealGroup>
      <RevealGroup>
        <JemTechSports />
      </RevealGroup>
      <RevealGroup>
        <Projects />
      </RevealGroup>
      <SocialLinks />
      <RevealGroup>
        <CallToAction />
      </RevealGroup>
    </main>
  );
}
