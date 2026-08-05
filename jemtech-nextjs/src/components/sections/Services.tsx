import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICES } from "@/data/site";

/**
 * Services grid. Fully server-rendered (SEO-friendly — every service title and
 * description is in the HTML). Hover lift is pure CSS. The [data-anim] hooks let
 * the enclosing RevealGroup fade cards in on scroll without this file needing to
 * be a client component.
 */
export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="relative z-[2] py-[clamp(80px,12vh,140px)]"
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)]">
        <div data-anim>
          <Eyebrow>O que eu faço</Eyebrow>
        </div>
        <h2
          id="servicos-title"
          data-anim
          className="max-w-[720px] text-[clamp(30px,4.5vw,54px)] font-bold leading-[1.05] tracking-[-0.02em]"
        >
          Uma equipe de engenharia inteira em uma pessoa.
        </h2>
        <p data-anim className="mt-3.5 max-w-[520px] text-[17px] text-slate">
          Do primeiro rabisco ao deploy. Cada serviço pensado para tirar peso das
          suas costas e colocar resultado na mesa.
        </p>

        <ul className="mt-14 grid list-none grid-cols-1 gap-[18px] p-0 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li
              key={s.k}
              data-anim
              className="group h-full rounded-[18px] border border-white/[0.08] bg-white/[0.015] p-7 transition-[transform,border-color,background] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:border-cyan/25 hover:bg-cyan/[0.03]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[13px] text-cyan">{s.k}</span>
                <span className="rounded-full border border-white/10 px-[9px] py-[3px] font-mono text-[11px] text-slate-dim">
                  {s.tag}
                </span>
              </div>
              <h3 className="mb-2.5 text-[21px] font-semibold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="text-[14.5px] leading-[1.55] text-slate">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
