import Eyebrow from "@/components/ui/Eyebrow";
import MagneticButton from "@/components/ui/MagneticButton";

const HIGHLIGHTS = [
  "Desenvolvimento Full Stack",
  "Sites rápidos e responsivos",
  "Sistemas e automações com IA",
  "Atendimento em Uberaba e todo o Brasil",
] as const;

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative z-[2] py-[clamp(80px,12vh,140px)]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-[clamp(20px,5vw,64px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div
          data-anim
          aria-hidden="true"
          className="relative aspect-square max-w-[460px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_40%),linear-gradient(145deg,#12151c,#0a0c10)]"
        >
          <div className="absolute inset-6 rounded-[22px] border border-white/[0.06]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text font-mono text-[clamp(44px,8vw,92px)] font-bold text-transparent">
              JL
            </span>
          </div>
          <span className="absolute bottom-7 left-7 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 font-mono text-xs text-emerald">
            Uberaba · MG
          </span>
        </div>

        <div>
          <div data-anim><Eyebrow>Sobre mim</Eyebrow></div>
          <h2
            id="sobre-title"
            data-anim
            className="max-w-[680px] text-[clamp(30px,4.5vw,54px)] font-bold leading-[1.05] tracking-[-0.02em]"
          >
            Tecnologia com objetivo de negócio, não apenas código.
          </h2>
          <p data-anim className="mt-6 max-w-[640px] text-[17px] leading-[1.7] text-slate">
            Sou Jemerson Lima, desenvolvedor Full Stack de Uberaba–MG e criador
            da JemTech. Desenvolvo sites, sistemas e automações para transformar
            processos manuais em experiências digitais simples, rápidas e
            profissionais.
          </p>
          <p data-anim className="mt-4 max-w-[640px] text-[16px] leading-[1.7] text-slate">
            Trabalho do planejamento à publicação, com comunicação clara,
            acompanhamento do projeto e suporte para a solução continuar
            evoluindo depois da entrega.
          </p>

          <ul data-anim className="mt-7 grid list-none gap-3 p-0 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-[#c8d2dc]">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                {item}
              </li>
            ))}
          </ul>

          <div data-anim className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projetos" variant="primary">
              Ver projetos reais →
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/jemerson-limaprogramador" variant="secondary" external>
              Ver LinkedIn
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
