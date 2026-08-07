import type { JSX } from "react";

/**
 * The seven app screens rendered inside the phone, in JEM_STEPS order:
 * Login, Dashboard, Partidas, Estatísticas, Ranking, Chat, IA.
 *
 * Pure presentational markup, server-rendered so it's in the DOM for crawlers
 * and screen readers. The parent scene only animates opacity/scale on the
 * [data-screen] wrappers — content is never display:none.
 */

function Screen({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      data-screen={index}
      className="absolute inset-0 flex h-full w-full flex-col gap-2.5 overflow-hidden px-[18px] pb-[18px] pt-11"
      style={{ opacity: index === 0 ? 1 : 0 }}
      aria-hidden={index !== 0 ? undefined : false}
    >
      {children}
    </div>
  );
}

export default function PhoneScreens() {
  return (
    <>
      {/* 0 — Login */}
      <Screen index={0}>
        <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-violet text-[22px] font-bold text-[#04121a]">
            J
          </div>
          <div>
            <div className="text-[17px] font-semibold">JemTech Sports</div>
            <div className="mt-1 font-mono text-[11px] text-slate-dim">
              organize sua pelada
            </div>
          </div>
          <div className="mt-2 w-full space-y-2.5">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-left font-mono text-[11px] text-slate-dim">
              seu@email.com
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 text-left font-mono text-[11px] text-slate-dim">
              ••••••••
            </div>
          </div>
          <div className="w-full rounded-xl bg-cyan py-3 text-[14px] font-semibold text-[#04121a]">
            Entrar
          </div>
          <div className="font-mono text-[10px] text-slate-dim">
            ou continue com Google
          </div>
        </div>
      </Screen>

      {/* 1 — Dashboard */}
      <Screen index={1}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          OLÁ, JEMERSON
        </div>
        <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.06] p-3.5">
          <div className="font-mono text-[9px] text-cyan">PRÓXIMO JOGO</div>
          <div className="mt-1 text-[15px] font-semibold">Domingo · 16h · Society</div>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-mono text-[10px] text-slate-dim">14/20 confirmados</span>
            <span className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
              <span className="block h-full w-[70%] rounded-full bg-cyan" />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-white/[0.03] p-3">
            <div className="font-mono text-[9px] text-slate-dim">EM CAIXA</div>
            <div className="mt-1 text-[16px] font-semibold text-emerald">R$ 840</div>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3">
            <div className="font-mono text-[9px] text-slate-dim">SUA POSIÇÃO</div>
            <div className="mt-1 text-[16px] font-semibold text-cyan">🥇 1º</div>
          </div>
        </div>
        <div className="mt-auto rounded-xl bg-white/[0.03] p-3">
          <div className="font-mono text-[9px] text-slate-dim">ÚLTIMA ATIVIDADE</div>
          <div className="mt-1 text-[12.5px]">Lucas confirmou presença</div>
        </div>
      </Screen>

      {/* 2 — Partidas (presença + times) */}
      <Screen index={2}>
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
              <div className={`font-mono text-[10px] ${r.ok ? "text-emerald" : "text-slate-dim"}`}>
                {r.s}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-auto rounded-xl bg-cyan py-3 text-center text-[14px] font-semibold text-[#04121a]">
          Confirmar presença
        </div>
      </Screen>

      {/* 3 — Estatísticas */}
      <Screen index={3}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          MEU DESEMPENHO
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/[0.13] text-[13px] font-semibold text-cyan">
            JM
          </div>
          <div>
            <div className="text-[14px] font-semibold">Jemerson</div>
            <div className="font-mono text-[10px] text-slate-dim">temporada 2026</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["18", "gols"],
            ["12", "jogos"],
            ["92%", "presença"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-white/[0.03] p-2.5 text-center">
              <div className="text-[17px] font-bold text-cyan">{v}</div>
              <div className="font-mono text-[9px] text-slate-dim">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex h-16 items-end gap-1.5 rounded-xl bg-white/[0.03] p-3">
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-cyan/40 to-cyan"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </Screen>

      {/* 4 — Ranking */}
      <Screen index={4}>
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
          <div key={r.n} className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-[11px]">
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

      {/* 5 — Chat */}
      <Screen index={5}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          GRUPO · DOMINGO FC
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-3 py-2 text-[12px]">
            Confirmado pro jogo de domingo!
          </div>
          <div className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-cyan/[0.16] px-3 py-2 text-[12px] text-cyan">
            Beleza, já sorteei os times 👍
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/[0.06] px-3 py-2 text-[12px]">
            Alguém leva bola extra?
          </div>
        </div>
        <div className="mt-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 font-mono text-[11px] text-slate-dim">
          Escrever mensagem…
        </div>
      </Screen>

      {/* 6 — IA */}
      <Screen index={6}>
        <div className="font-mono text-[10px] tracking-[0.1em] text-slate-dim">
          ASSISTENTE IA
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-violet/25 bg-violet/[0.08] px-3.5 py-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet text-[12px] font-bold text-white">
            AI
          </span>
          <div className="text-[12.5px] leading-[1.4]">
            Você tem 92% de presença essa temporada — o melhor do grupo! 🔥
          </div>
        </div>
        <div className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-cyan/[0.16] px-3 py-2 text-[12px] text-cyan">
          Quantos gols faltam pra bater o recorde?
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-violet/25 bg-violet/[0.08] px-3.5 py-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet text-[12px] font-bold text-white">
            AI
          </span>
          <div className="text-[12.5px] leading-[1.4]">Faltam só 3 gols. No seu ritmo, chega lá em 2 jogos.</div>
        </div>
        <div className="mt-auto rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 font-mono text-[11px] text-slate-dim">
          Pergunte algo…
        </div>
      </Screen>
    </>
  );
}
