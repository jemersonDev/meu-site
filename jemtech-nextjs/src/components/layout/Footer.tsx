/**
 * Footer. Static server component — no interactivity needed.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-[2] flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] px-[clamp(20px,5vw,64px)] py-9 text-[13.5px] text-slate-dim">
      <div className="flex items-center gap-2.5">
        <span className="h-[9px] w-[9px] rounded-[3px] bg-cyan" />
        Jemerson Lima · Uberaba, MG
      </div>
      <div className="font-mono">© {year} — feito com café e código</div>
    </footer>
  );
}
