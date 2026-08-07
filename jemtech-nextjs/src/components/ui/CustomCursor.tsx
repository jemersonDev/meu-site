"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Subtle custom cursor: a ring that trails the pointer with slight lag and
 * expands over interactive elements. Desktop-only by design:
 *  - Skipped entirely on coarse pointers (touch) via `(pointer: fine)` check —
 *    a custom cursor on mobile is meaningless and native tap highlighting
 *    already handles feedback there.
 *  - Skipped under prefers-reduced-motion.
 *  - Native cursor is never hidden globally; this only adds a decorative ring
 *    on top, so nothing breaks if this component fails to mount.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches && !reduced);
  }, [reduced]);

  useGSAP(
    () => {
      if (!enabled || !ringRef.current) return;

      const xTo = gsap.quickTo(ringRef.current, "x", { duration: 0.35, ease: "power3" });
      const yTo = gsap.quickTo(ringRef.current, "y", { duration: 0.35, ease: "power3" });

      const onMove = (e: PointerEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const interactiveSelector = "a, button, [role='button'], input, textarea";
      const onOver = (e: PointerEvent) => {
        if ((e.target as HTMLElement).closest(interactiveSelector)) {
          gsap.to(ringRef.current, { scale: 1.8, opacity: 0.5, duration: 0.25 });
        }
      };
      const onOut = (e: PointerEvent) => {
        if ((e.target as HTMLElement).closest(interactiveSelector)) {
          gsap.to(ringRef.current, { scale: 1, opacity: 1, duration: 0.25 });
        }
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerover", onOver, { passive: true });
      window.addEventListener("pointerout", onOut, { passive: true });
      return () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerover", onOver);
        window.removeEventListener("pointerout", onOut);
      };
    },
    { dependencies: [enabled] }
  );

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/60 mix-blend-difference"
    />
  );
}
