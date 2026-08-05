/**
 * Single point of GSAP + plugin registration.
 *
 * Why centralized: registering ScrollTrigger in multiple components causes
 * duplicate registration warnings and, under React 19 Strict Mode double-invoke,
 * subtle state bugs. Importing from here guarantees it runs exactly once and
 * only on the client (tree-shaken out of RSC bundles).
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  const registered = (
    gsap.core as unknown as { globals: () => Record<string, unknown> }
  ).globals();
  if (!registered.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    // Consistent, subtle default for every tween unless overridden.
    gsap.defaults({ ease: "power3.out", duration: 0.9 });
  }
}

export { gsap, ScrollTrigger };
