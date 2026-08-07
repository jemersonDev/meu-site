"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import MagneticButton from "@/components/ui/MagneticButton";
import TechGrid from "./TechGrid";

/**
 * Canvas is heavy and client-only → load it lazily with SSR disabled so it
 * never blocks first paint or ships in the server HTML. A static gradient
 * placeholder holds the layout (no CLS) until it hydrates.
 */
const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[radial-gradient(ellipse_at_50%_30%,#22d3ee14,transparent_60%)]" />
  ),
});

export default function HeroClient() {
  const root = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) {
        gsap.set("[data-animate]", { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" });
        return;
      }

      // Entrance: title lines reveal via clip-path (curtain-up), not just
      // opacity/translate — reads as more deliberate/cinematic than a plain
      // fade, while still only animating compositor-friendly properties.
      gsap.set("[data-animate='line']", { clipPath: "inset(0 0 100% 0)" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-animate='badge']", { y: 16, opacity: 0, duration: 0.6 })
        .to(
          "[data-animate='line']",
          { clipPath: "inset(0 0 0% 0)", duration: 1, stagger: 0.1, ease: "power4.out" },
          "-=0.25"
        )
        .from(
          "[data-animate='sub']",
          { y: 20, opacity: 0, duration: 0.7 },
          "-=0.55"
        )
        .from(
          "[data-animate='cta']",
          { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .from(
          "[data-animate='stat']",
          { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        );

      // Scroll parallax: content drifts up and fades as the hero leaves.
      gsap.to("[data-parallax]", {
        yPercent: -18,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      // Mouse parallax: layer drifts opposite the cursor — subtle depth cue,
      // driven by quickTo so it's cheap (no React state, GPU-composited).
      const xTo = gsap.quickTo(layerRef.current, "x", { duration: 0.8, ease: "power3" });
      const yTo = gsap.quickTo(layerRef.current, "y", { duration: 0.8, ease: "power3" });
      const onMove = (e: PointerEvent) => {
        const { innerWidth, innerHeight } = window;
        const px = (e.clientX / innerWidth - 0.5) * 2; // -1..1
        const py = (e.clientY / innerHeight - 0.5) * 2;
        xTo(px * -14);
        yTo(py * -10);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true }
  );

  // Refresh ScrollTrigger once fonts settle to avoid stale start/end positions.
  useGSAP(() => {
    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={root} className="relative h-full w-full">
      <TechGrid />

      {/* Signature layer — particle network, drifts opposite the cursor */}
      <div ref={layerRef} className="absolute inset-0 z-0 opacity-90 will-change-transform" aria-hidden="true">
        <ParticleField />
      </div>

      {/* Animated glow blobs — pure CSS, GPU-composited */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>

      <div
        data-parallax
        className="relative z-[2] flex h-full max-w-[1000px] flex-col justify-center px-[clamp(20px,5vw,64px)]"
      >
        <div
          data-animate="badge"
          className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-slate backdrop-blur-sm"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-emerald shadow-[0_0_10px_#3ddc97]" />
          Disponível para novos projetos
        </div>

        <h1 className="m-0 text-[clamp(34px,8vw,92px)] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[clamp(40px,7.5vw,92px)] sm:leading-[0.98]">
          <span data-animate="line" className="block overflow-hidden">
            Eu construo os
          </span>
          <span data-animate="line" className="block overflow-hidden">
            <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
              sistemas
            </span>{" "}
            que
          </span>
          <span data-animate="line" className="block overflow-hidden">
            o seu negócio precisa.
          </span>
        </h1>

        <p
          data-animate="sub"
          className="mt-6 max-w-[560px] text-[clamp(16px,2vw,20px)] leading-[1.55] text-slate"
        >
          Desenvolvedor full-stack e fundador. Transformo ideias em software
          rápido, inteligente e que gera resultado — de landing pages a
          plataformas com IA.
        </p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <div data-animate="cta">
            <MagneticButton href="#contato" variant="primary">
              Iniciar um projeto →
            </MagneticButton>
          </div>
          <div data-animate="cta">
            <MagneticButton href="#projetos" variant="secondary">
              Ver projetos
            </MagneticButton>
          </div>
        </div>

        {/* Trust stats — quick, credible signal for a hiring company */}
        <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          {[
            ["+30", "projetos entregues"],
            ["24h", "tempo de resposta"],
            ["100%", "PIX & LGPD ready"],
          ].map(([value, label]) => (
            <div key={label} data-animate="stat">
              <dt className="font-mono text-[22px] font-semibold text-foam">{value}</dt>
              <dd className="m-0 text-[12.5px] text-slate-dim">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
