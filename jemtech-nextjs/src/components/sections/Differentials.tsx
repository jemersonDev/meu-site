import Eyebrow from "@/components/ui/Eyebrow";

const DIFFERENTIALS = [
  {
    title: "Comunicação clara",
    description:
      "Você acompanha as decisões e o andamento do projeto sem precisar entender termos técnicos.",
  },
  {
    title: "Foco no seu objetivo",
    description:
      "A tecnologia é escolhida depois do problema, para entregar uma solução útil e sustentável.",
  },
  {
    title: "Responsivo e acessível",
    description:
      "A experiência é pensada para celular, computador, teclado e diferentes necessidades de navegação.",
  },
  {
    title: "Entrega com continuidade",
    description:
      "Publicação, orientação e suporte para o projeto continuar funcionando e evoluindo.",
  },
] as const;

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="relative z-[2] pb-[clamp(80px,12vh,140px)]"
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)]">
        <div data-anim><Eyebrow>Por que trabalhar comigo</Eyebrow></div>
        <h2
          id="diferenciais-title"
          data-anim
          className="max-w-[760px] text-[clamp(30px,4.5vw,54px)] font-bold leading-[1.05] tracking-[-0.02em]"
        >
          Um projeto profissional do início à evolução.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {DIFFERENTIALS.map((item, index) => (
            <article key={item.title} data-anim className="bg-bg p-7 sm:p-9">
              <span className="font-mono text-xs text-cyan">0{index + 1}</span>
              <h3 className="mt-5 text-[21px] font-semibold">{item.title}</h3>
              <p className="mt-2.5 max-w-[480px] text-[14.5px] leading-[1.65] text-slate">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
