"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Adds micro-interactions over server-rendered social cards:
 *  - entrance: cards fade/rise in a single ScrollTrigger.batch (one observer for
 *    the whole grid, staggered — cheaper than one trigger per card).
 *  - hover: subtle lift + pointer-tracked glow, driven by a quickTo for buttery
 *    60fps updates (no React state, no re-renders).
 * Reduced motion → entrance is skipped (cards shown) and hover tilt disabled.
 */
export default function SocialCardsClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-social-card]", root.current);

      if (reduced) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(cards, { opacity: 0, y: 28 });
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
          }),
      });

      // Per-card hover: lift + pointer-tracked radial glow.
      const cleanups: Array<() => void> = [];
      cards.forEach((card) => {
        const glow = card.querySelector<HTMLElement>("[data-glow]");
        const yTo = gsap.quickTo(card, "y", { duration: 0.4, ease: "power3" });

        const onEnter = () => yTo(-6);
        const onLeave = () => {
          yTo(0);
          if (glow) gsap.to(glow, { opacity: 0, duration: 0.4 });
        };
        const onMove = (e: PointerEvent) => {
          if (!glow) return;
          const r = card.getBoundingClientRect();
          glow.style.background = `radial-gradient(240px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, ${card.dataset.accent}22, transparent 60%)`;
          gsap.to(glow, { opacity: 1, duration: 0.3 });
        };

        card.addEventListener("pointerenter", onEnter);
        card.addEventListener("pointerleave", onLeave);
        card.addEventListener("pointermove", onMove, { passive: true });
        cleanups.push(() => {
          card.removeEventListener("pointerenter", onEnter);
          card.removeEventListener("pointerleave", onLeave);
          card.removeEventListener("pointermove", onMove);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <div
      ref={root}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {children}
    </div>
  );
}
