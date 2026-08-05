"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Reveals every [data-anim] descendant as it enters the viewport. One
 * ScrollTrigger.batch call instead of one trigger per element — cheaper and
 * scales to any number of children. Reduced motion → elements are simply shown.
 */
export default function RevealGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-anim]", root.current);
      if (reduced) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(items, { opacity: 0, y: 26 });
      gsap.utils
        .toArray<HTMLElement>("[data-anim]", root.current)
        .forEach((el) =>
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
          })
        );
    },
    { scope: root, dependencies: [reduced] }
  );

  return <div ref={root}>{children}</div>;
}
