import HeroClient from "./HeroClient";

/**
 * Server Component. Renders the semantic <header> shell on the server (fast LCP,
 * crawlable content) and mounts the interactive client island inside it. The
 * ambient glow and scroll cue are pure CSS — no JS needed, so they stay on the
 * server side of the boundary.
 */
export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative flex min-h-svh flex-col justify-center"
    >
      {/* Ambient glow — decorative, CSS-only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-20%] -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#22d3ee18,transparent_60%)] blur-[40px]"
      />

      <HeroClient />

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-[clamp(20px,5vw,64px)] z-[2] flex items-center gap-2.5 font-mono text-xs text-slate-dim"
      >
        <span className="h-7 w-px bg-gradient-to-b from-slate-dim to-transparent" />
        role até o final
      </div>
    </header>
  );
}
