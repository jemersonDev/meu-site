/**
 * Faint technical grid — the "engineering blueprint" layer beneath the hero.
 * Pure CSS (two repeating-linear-gradients), zero JS cost. A radial mask fades
 * it toward the edges so it reads as depth, not a static wallpaper.
 */
export default function TechGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
      }}
    />
  );
}
