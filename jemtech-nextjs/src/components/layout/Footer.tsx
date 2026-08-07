import { SOCIAL_LINKS } from "@/data/socials";

const SITEMAP = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#jemtech", label: "JemTech Sports" },
  { href: "#projetos", label: "Projetos" },
  { href: "#conecte", label: "Redes sociais" },
];

const WHATSAPP =
  "https://wa.me/5534974000096?text=Ol%C3%A1%20Jemerson!%20Vi%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";

/**
 * Footer. Static server component. Three columns on desktop (brand+CTA,
 * sitemap, socials) collapsing to a stack on mobile. Every link is a real
 * <a> — this is the last thing a visitor sees, so it doubles as a second
 * chance to convert and a full site map for crawlers.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)] py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + CTA */}
          <div>
            <a href="#inicio" className="flex items-center gap-2.5 text-[17px] font-bold tracking-[-0.02em]">
              <span className="h-2.5 w-2.5 rounded-[3px] bg-cyan shadow-[0_0_12px_#22d3ee]" />
              Jemerson<span className="text-slate-dim">.dev</span>
            </a>
            <p className="mt-4 max-w-[320px] text-[14.5px] leading-[1.6] text-slate">
              Desenvolvedor full-stack e fundador da JemTech. Sistemas web, IA
              e automações que geram resultado.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-cyan transition-colors hover:text-foam"
            >
              Iniciar um projeto →
            </a>
          </div>

          {/* Sitemap */}
          <nav aria-label="Mapa do site">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-dim">
              Navegação
            </div>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              {SITEMAP.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-slate transition-colors hover:text-foam"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <nav aria-label="Redes sociais">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-dim">
              Onde me encontrar
            </div>
            <ul className="flex list-none flex-col gap-2.5 p-0">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={`${s.name} (abre em nova aba)`}
                    className="text-[14px] text-slate transition-colors hover:text-foam"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <div className="font-mono text-[12.5px] text-slate-dim">
            © {year} Jemerson Lima — feito com café e código
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11.5px] text-slate-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Uberaba, MG
          </div>
        </div>
      </div>
    </footer>
  );
}
