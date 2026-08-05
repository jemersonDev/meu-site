import Eyebrow from "@/components/ui/Eyebrow";
import { PROCESS_STEPS } from "@/data/site";

/**
 * Process. Rendered as an <ol> because the steps ARE a real sequence — the
 * numbering carries meaning (order of the engagement), so ordered-list semantics
 * are correct for screen readers, not just decorative "01/02/03".
 */
export default function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="relative z-[2] pb-[clamp(80px,12vh,140px)]"
    >
      <div className="mx-auto max-w-[900px] px-[clamp(20px,5vw,64px)]">
        <div data-anim>
          <Eyebrow>Como trabalho</Eyebrow>
        </div>
        <h2
          id="processo-title"
          data-anim
          className="mb-10 text-[clamp(30px,4.5vw,54px)] font-bold leading-[1.05] tracking-[-0.02em]"
        >
          Um processo que respeita
          <br />
          seu tempo e seu dinheiro.
        </h2>

        <ol className="list-none p-0">
          {PROCESS_STEPS.map((p) => (
            <li
              key={p.n}
              data-anim
              className="flex items-start gap-7 border-t border-white/[0.08] py-[26px]"
            >
              <span className="min-w-8 pt-1 font-mono text-[14px] text-cyan">
                {p.n}
              </span>
              <div>
                <h3 className="mb-2 text-[clamp(20px,2.6vw,28px)] font-semibold tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="max-w-[560px] text-[16px] leading-[1.55] text-slate">
                  {p.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
