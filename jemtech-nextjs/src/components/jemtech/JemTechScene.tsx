"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { JEM_STEPS } from "@/data/jemtech";

/**
 * Drives the pinned phone scene. Everything is scoped to `root` and created
 * inside useGSAP, so ScrollTrigger instances, the pin spacer, and the tilt
 * timeline are all reverted automatically on unmount / dependency change —
 * no leaks, no orphaned pin-spacers, safe under React 19 Strict Mode.
 *
 * Responsiveness & a11y are handled with gsap.matchMedia:
 *  - reduced motion OR narrow screens → no pin, no tilt; screens/copy are shown
 *    stacked and readable (the scene degrades to plain scrolling content).
 *  - desktop with motion allowed → full cinematic pin + scrub.
 */
export default function JemTechScene({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const STEPS = JEM_STEPS.length;

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const screens = q("[data-screen]");
      const copies = q("[data-copy]");
      const dots = q("[data-dot]");
      const phone = q("[data-phone]")[0];
      const light = q("[data-light]")[0];

      const setStep = (idx: number) => {
        screens.forEach((s, i) =>
          gsap.to(s, {
            opacity: i === idx ? 1 : 0,
            scale: i === idx ? 1 : 1.04,
            duration: 0.5,
            ease: "power2.out",
          })
        );
        copies.forEach((c, i) =>
          gsap.to(c, {
            opacity: i === idx ? 1 : 0,
            y: i === idx ? 0 : 24,
            duration: 0.5,
            ease: "power2.out",
          })
        );
        dots.forEach((d, i) =>
          gsap.to(d, {
            backgroundColor: i === idx ? "#22d3ee" : "rgba(255,255,255,0.1)",
            duration: 0.3,
          })
        );
      };

      const mm = gsap.matchMedia();

      // Desktop + motion allowed → full pinned cinematic scene.
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Stack copies absolutely so they cross-fade in place.
          gsap.set(copies, { position: "absolute", top: 0, left: 0 });
          gsap.set(copies, { opacity: (i) => (i === 0 ? 1 : 0), y: (i) => (i === 0 ? 0 : 30) });

          let current = -1;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current!,
              start: "top top",
              end: "bottom bottom",
              pin: "[data-pin]",
              scrub: 0.6,
              onUpdate: (self) => {
                const i = Math.min(STEPS - 1, Math.floor(self.progress * STEPS));
                if (i !== current) {
                  current = i;
                  setStep(i);
                }
                // Ambient lighting warms & drifts down as you descend.
                const hue = 210 - self.progress * 40;
                (light as HTMLElement).style.background =
                  `radial-gradient(1200px 600px at 70% ${30 + self.progress * 40}%, hsla(${hue},80%,55%,0.06), transparent 60%)`;
              },
            },
          });
          setStep(0);

          // Discreet 3D float on the phone across the pin.
          tl.to(phone, { rotateY: -8, rotateX: 3, y: -14, ease: "none" }, 0).to(
            phone,
            { rotateY: 6, rotateX: -2, y: 10, ease: "none" },
            0.5
          );

          return () => {
            // matchMedia cleanup: restore copies to static flow.
            gsap.set(copies, { clearProps: "all" });
            gsap.set(screens, { clearProps: "opacity,transform" });
          };
        }
      );

      // Fallback (mobile or reduced motion) → everything visible, no pin.
      mm.add(
        "(max-width: 767px), (prefers-reduced-motion: reduce)",
        () => {
          gsap.set([...screens, ...copies], { clearProps: "all", opacity: 1 });
        }
      );

      // Positions depend on fonts/layout; refresh once settled.
      const id = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => cancelAnimationFrame(id);
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true }
  );

  return (
    <div ref={root} className="relative">
      {children}
    </div>
  );
}
