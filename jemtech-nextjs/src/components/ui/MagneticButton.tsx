"use client";

import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Variant = "primary" | "secondary" | "violet";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center gap-2 rounded-xl px-[22px] py-[13px] text-[14.5px] font-semibold tracking-[-0.01em] no-underline cursor-pointer will-change-transform transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-[#04121a] shadow-[0_0_0_1px_#22d3ee55,0_8px_30px_#22d3ee33] hover:shadow-[0_0_0_1px_#22d3ee88,0_10px_40px_#22d3ee44]",
  secondary:
    "bg-white/[0.04] text-foam border border-white/10 backdrop-blur-sm hover:border-white/20",
  violet:
    "bg-violet text-bg shadow-[0_8px_30px_#7c5cff44] hover:shadow-[0_10px_40px_#7c5cff55]",
};

/**
 * Reusable magnetic button. Pointer-follow effect is skipped entirely when the
 * user prefers reduced motion, and the transform resets on leave. Using a real
 * <a> keeps it keyboard-focusable and semantic (link, not fake button).
 */
export default function MagneticButton({
  children,
  href,
  variant = "secondary",
  className = "",
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
