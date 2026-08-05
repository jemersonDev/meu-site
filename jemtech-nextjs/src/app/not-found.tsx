import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.14em] text-cyan">
        Erro 404
      </p>
      <h1 className="mb-4 text-[clamp(32px,6vw,64px)] font-bold tracking-[-0.03em]">
        Página não encontrada.
      </h1>
      <p className="mb-8 max-w-[420px] text-[17px] text-slate">
        O link que você seguiu não existe ou foi movido. Vamos te levar de volta.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-cyan px-[22px] py-3 text-[14.5px] font-semibold text-[#04121a]"
      >
        Voltar ao início →
      </Link>
    </main>
  );
}
