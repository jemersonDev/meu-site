"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#jemtech", label: "JemTech Sports" },
];

const WHATSAPP =
  "https://wa.me/5534974000096?text=Ol%C3%A1%20Jemerson!%20Vi%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";

/**
 * Fixed navbar. Fix notes:
 *  - Full link row only renders from `lg:` (1024px) up — at md (768–1023px,
 *    e.g. iPad Pro portrait) three text links + CTA button no longer fit and
 *    were overflowing the viewport horizontally. Below `lg:` we render a
 *    single hamburger trigger instead.
 *  - Mobile panel is a fixed, full-width overlay (`inset-x-0`) so it can never
 *    itself cause horizontal overflow, and closes on link click / Escape.
 *  - `overflow-x-hidden` is enforced at the layout level (see layout.tsx) as a
 *    second line of defense against any future stray-width element.
 */
export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > 40);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile panel is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(20px,5vw,64px)] py-4 transition-all duration-[400ms] ${
        solid
          ? "border-b border-white/[0.06] bg-bg/70 backdrop-blur-[14px]"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#inicio"
        className="flex items-center gap-2.5 text-[17px] font-bold tracking-[-0.02em]"
        onClick={() => setOpen(false)}
      >
        <span className="h-2.5 w-2.5 shrink-0 rounded-[3px] bg-cyan shadow-[0_0_12px_#22d3ee]" />
        Jemerson<span className="text-slate-dim">.dev</span>
      </a>

      {/* Desktop nav — only from lg: (1024px) up, where it actually fits */}
      <div className="hidden items-center gap-6 text-[14px] lg:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-slate transition-colors hover:text-foam"
          >
            {l.label}
          </a>
        ))}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-cyan px-[18px] py-2.5 text-[13.5px] font-semibold text-[#04121a] shadow-[0_0_0_1px_#22d3ee55,0_8px_30px_#22d3ee33] transition-shadow hover:shadow-[0_0_0_1px_#22d3ee88,0_10px_40px_#22d3ee44]"
        >
          Iniciar projeto →
        </a>
      </div>

      {/* Mobile / tablet trigger — shown below lg: (covers iPad Pro @1024 exactly at the switch) */}
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] lg:hidden"
      >
        <span className="relative block h-[14px] w-[18px]">
          <span
            className={`absolute left-0 top-0 h-[2px] w-full bg-foam transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-foam transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-full bg-foam transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Mobile panel — full-viewport overlay, cannot cause horizontal overflow */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[64px] z-50 origin-top border-b border-white/[0.08] bg-bg/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] text-slate transition-colors hover:bg-white/[0.04] hover:text-foam"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-cyan px-[18px] py-3 text-center text-[14.5px] font-semibold text-[#04121a]"
          >
            Iniciar projeto →
          </a>
        </div>
      </div>
    </nav>
  );
}
