import SocialCardsClient from "./SocialCardsClient";
import { SOCIAL_LINKS } from "@/data/socials";

/**
 * SocialLinks — premium "where to find me" section.
 *
 * Server Component: every card, label, and link is in the static HTML, so the
 * profiles are crawlable and the whole section works with JS disabled. The
 * client island only layers micro-interactions on top.
 *
 * Semantics: rendered as a <ul>/<li> list of real <a> links. Each link carries
 * an aria-label naming the platform (icon-only context otherwise), opens in a
 * new tab with rel="noopener noreferrer", and rel="me" advertises identity
 * ownership to crawlers (helps entity/SEO signals).
 */
export default function SocialLinks() {
  return (
    <section
      id="conecte"
      aria-labelledby="social-title"
      className="relative z-[2] py-[clamp(80px,12vh,140px)]"
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)]">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-px w-6 bg-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
            Onde me encontrar
          </span>
        </div>

        <h2
          id="social-title"
          className="max-w-[720px] text-[clamp(30px,4.5vw,54px)] font-bold leading-[1.05] tracking-[-0.02em]"
        >
          Construo em público.
          <br />
          Acompanhe de perto.
        </h2>
        <p className="mt-3.5 max-w-[520px] text-[17px] text-slate">
          Código, projetos e bastidores de quem desenvolve todos os dias. Escolha
          o canal e vamos conversar.
        </p>

        <div className="mt-14">
          <ul className="contents">
            <SocialCardsClient>
              {SOCIAL_LINKS.map(({ id, name, handle, description, href, Icon, accent }) => (
                <li key={id} className="contents">
                  <a
                    href={href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={`${name} — ${handle} (abre em nova aba)`}
                    data-social-card
                    data-accent={accent}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-white/20 focus-visible:border-cyan"
                  >
                    {/* pointer-tracked glow layer */}
                    <span
                      data-glow
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0"
                    />

                    <span className="relative z-[1] flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-110"
                        style={{ color: accent }}
                      >
                        <Icon />
                      </span>
                      <span
                        aria-hidden="true"
                        className="translate-x-[-4px] text-slate-dim opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        ↗
                      </span>
                    </span>

                    <span className="relative z-[1] mt-5 block text-[19px] font-semibold tracking-[-0.01em]">
                      {name}
                    </span>
                    <span className="relative z-[1] mt-0.5 block font-mono text-[12px] text-slate-dim">
                      {handle}
                    </span>
                    <span className="relative z-[1] mt-3 block flex-1 text-[14px] leading-[1.5] text-slate">
                      {description}
                    </span>

                    <span
                      className="relative z-[1] mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold"
                      style={{ color: accent }}
                    >
                      Acessar
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </SocialCardsClient>
          </ul>
        </div>
      </div>
    </section>
  );
}
