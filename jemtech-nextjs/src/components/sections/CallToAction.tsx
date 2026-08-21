import MagneticButton from "@/components/ui/MagneticButton";

const WHATSAPP =
  "https://wa.me/5534974000096?text=Ol%C3%A1%2C%20Jemerson!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.%0A%0ATipo%20de%20projeto%3A%0AEmpresa%3A%0AObjetivo%20principal%3A";

/**
 * Closing CTA. One decision on the page: start a conversation. Secondary links
 * offer lower-commitment paths (follow instead of hire) so no visitor leaves
 * without a next step. [data-anim] hooks into the enclosing RevealGroup.
 */
export default function CallToAction() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative z-[2] px-[clamp(20px,5vw,64px)] py-[clamp(80px,14vh,160px)] text-center"
    >
      <h2
        id="contato-title"
        data-anim
        className="mx-auto mb-6 max-w-[820px] text-[clamp(36px,6vw,72px)] font-bold leading-none tracking-[-0.03em]"
      >
        Quer melhorar seu negócio?
        <br />
        <span className="text-slate-dim">Vamos transformar a ideia em solução.</span>
      </h2>
      <p data-anim className="mx-auto mb-10 max-w-[480px] text-[18px] text-slate">
        Resposta em até 24h. Primeira conversa sem compromisso.
      </p>
      <div data-anim className="flex flex-wrap justify-center gap-3.5">
        <MagneticButton href={WHATSAPP} variant="primary" external>
          Falar no WhatsApp →
        </MagneticButton>
        <MagneticButton href="https://www.linkedin.com/in/jemerson-limaprogramador" variant="secondary" external>
          LinkedIn
        </MagneticButton>
        <MagneticButton href="https://github.com/jemersonDev" variant="secondary" external>
          GitHub
        </MagneticButton>
      </div>
    </section>
  );
}
