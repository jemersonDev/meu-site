import Hero from "@/components/hero/Hero";
import StackMarquee from "@/components/sections/StackMarquee";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import JemTechSports from "@/components/jemtech/JemTechSports";
import SocialLinks from "@/components/social/SocialLinks";
import CallToAction from "@/components/sections/CallToAction";
import RevealGroup from "@/components/ui/RevealGroup";

/**
 * Home. Sections composed as server components; client islands (Hero canvas,
 * magnetic buttons, JemTech scene, social micro-interactions) hydrate
 * independently. RevealGroup wraps the [data-anim] sections to fade content in
 * on scroll from a single controller.
 */
export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <StackMarquee />
      <RevealGroup>
        <Services />
        <Process />
      </RevealGroup>
      <RevealGroup>
        <JemTechSports />
      </RevealGroup>
      <SocialLinks />
      <RevealGroup>
        <CallToAction />
      </RevealGroup>
    </main>
  );
}
