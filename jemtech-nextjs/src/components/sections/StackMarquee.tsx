import { STACK } from "@/data/site";

/**
 * Infinite stack marquee. Pure CSS animation (no JS), server-rendered. The list
 * is duplicated once so the -50% translate loops seamlessly. aria-hidden because
 * it's decorative repetition — the stack is also stated in prose elsewhere.
 */
export default function StackMarquee() {
  const items = [...STACK, ...STACK];
  return (
    <section
      aria-hidden="true"
      className="relative z-[2] overflow-hidden border-y border-white/[0.06] py-[22px]"
    >
      <div className="marquee flex w-max gap-14">
        {items.map((s, i) => (
          <span key={i} className="whitespace-nowrap font-mono text-[15px] text-slate-dim">
            {s} <span className="ml-11 text-cyan">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
