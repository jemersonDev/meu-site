/**
 * Section eyebrow — the mono label with a cyan tick. Extracted because Services,
 * Process, and Social all use the exact same treatment; one component keeps them
 * identical and edits in one place.
 */
export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[18px] flex items-center gap-2.5">
      <span className="h-px w-6 bg-cyan" />
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-cyan">
        {children}
      </span>
    </div>
  );
}
