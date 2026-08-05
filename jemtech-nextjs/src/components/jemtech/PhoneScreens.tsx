import { TEAM_CYAN, TEAM_VIOLET } from "@/data/jemtech";

/**
 * The four app screens rendered inside the phone. Pure presentational markup —
 * server-rendered so it's in the DOM for crawlers and screen readers. The
 * parent scene only animates opacity/scale on the [data-screen] wrappers; no
 * screen is display:none, so nothing is hidden from assistive tech at rest
 * (they're stacked and stagger by opacity, controlled by the pinned timeline).
 *
 * Each wrapper carries data-screen={index} so the client scene can target it by
 * position without prop drilling refs.
 */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-white/[0.06] px-[7px] py-[3px] font-mono text-[10px] text-[#c8d2dc]">
      {children}
    </span>
  );
}

function Screen({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div
      data-screen={index}
      className="absolute inset-0 flex h-full w-full flex-col gap-2.5 overflow-hidden px-[18px] pb-[18px] pt-11"
      style={{ opacity: index === 0 ? 1 : 0 }}
      // Screens after the first are visually hidden at rest but kept in DOM.
      aria-hidden={index !== 0 ? undefined : false}
    >
      {children}
    </div>
  );
}

export default function PhoneScreens() {
  return (
    <>
      {/* 0 — Presença */}
      <Screen index={0}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          DOMINGO · 16H · SOCIETY
        </div>
        <div className="mb-1 text-[19px] font-semibold">
          Confirmados <span className="text-cyan">14/20</span>
        </div>
        {[
          { i: "JM", n: "Jemerson", s: "✓ confirmado", ok: true, active: true },
          { i: "LC", n: "Lucas", s: "✓ confirmado", ok: true },
          { i: "SV", n: "Sinval", s: "aguardando…", ok: false },
        ].map((r) => (
          <div
            key={r.i}
            className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${
              r.active
                ? "border-cyan/20 bg-cyan/[0.08]"
                : "border-white/[0.06] bg-white/[0.03]"
            }`}
          >
            <div
              className={`flex h-[30px] w-[30px] items-center justify-center rounded-[9px] text-[13px] font-semibold ${
                r.active ? "bg-cyan/[0.13] text-cyan" : "bg-white/10 text-slate"
              }`}
            >
              {r.i}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-medium">{r.n}</div>
              <div
                className={`font-mono text-[10px] ${
                  r.ok ? "text-emerald" : "text-slate-dim"
                }`}
              >
                {r.s}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-auto rounded-xl bg-cyan py-3 text-center text-[14px] font-semibold text-[#04121a]">
          Confirmar presença
        </div>
      </Screen>

      {/* 1 — Times */}
      <Screen index={1}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          TIMES SORTEADOS
        </div>
        <div className="rounded-2xl border border-cyan/25 bg-cyan/[0.06] p-3">
          <div className="mb-2 text-[13px] font-semibold text-cyan">● Time Ciano</div>
          <div className="flex flex-wrap gap-1.5">
            {TEAM_CYAN.map((n) => (
              <Pill key={n}>{n}</Pill>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-violet/25 bg-violet/[0.06] p-3">
          <div className="mb-2 text-[13px] font-semibold text-violet">● Time Violeta</div>
          <div className="flex flex-wrap gap-1.5">
            {TEAM_VIOLET.map((n) => (
              <Pill key={n}>{n}</Pill>
            ))}
          </div>
        </div>
        <div className="mt-auto text-center font-mono text-[10px] text-slate-dim">
          equilíbrio 97% · nível médio 4.2
        </div>
      </Screen>

      {/* 2 — Financeiro */}
      <Screen index={2}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          CAIXA · NOVEMBRO
        </div>
        <div className="text-[26px] font-bold text-emerald">
          R$ 840
          <span className="text-[14px] font-normal text-slate-dim"> em caixa</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-xl border border-emerald/20 bg-emerald/[0.08] p-2.5">
            <div className="font-mono text-[9px] text-slate-dim">PAGO</div>
            <div className="text-[16px] font-semibold text-emerald">18</div>
          </div>
          <div className="flex-1 rounded-xl border border-[#e24b4a]/20 bg-[#e24b4a]/[0.08] p-2.5">
            <div className="font-mono text-[9px] text-slate-dim">DEVENDO</div>
            <div className="text-[16px] font-semibold text-[#e24b4a]">3</div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2.5">
          <span className="text-[13px]">Lucas</span>
          <span className="font-mono text-[11px] text-emerald">pago ✓</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2.5">
          <span className="text-[13px]">Sinval</span>
          <span className="font-mono text-[11px] text-[#e24b4a]">R$ 40</span>
        </div>
        <div className="mt-auto rounded-xl bg-violet py-3 text-center text-[14px] font-semibold text-white">
          Cobrar via PIX
        </div>
      </Screen>

      {/* 3 — Ranking */}
      <Screen index={3}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          RANKING · ARTILHARIA
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-cyan/25 bg-gradient-to-r from-cyan/[0.14] to-violet/10 px-3 py-[11px]">
          <div className="text-[18px]">🥇</div>
          <div className="flex-1">
            <div className="text-[14px] font-semibold">Jemerson</div>
            <div className="font-mono text-[10px] text-slate">12 jogos</div>
          </div>
          <div className="text-[20px] font-bold text-cyan">18</div>
        </div>
        {[
          { m: "🥈", n: "Lucas", g: "11 jogos", v: 14 },
          { m: "🥉", n: "Sinval", g: "10 jogos", v: 9 },
        ].map((r) => (
          <div
            key={r.n}
            className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-[11px]"
          >
            <div className="text-[16px]">{r.m}</div>
            <div className="flex-1">
              <div className="text-[14px] font-medium">{r.n}</div>
              <div className="font-mono text-[10px] text-slate">{r.g}</div>
            </div>
            <div className="text-[18px] font-semibold">{r.v}</div>
          </div>
        ))}
        <div className="mt-auto text-center font-mono text-[10px] text-slate-dim">
          temporada 2026 · 8 rodadas restantes
        </div>
      </Screen>
    </>
  );
}
