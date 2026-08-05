import type { JemStep } from "@/types/jemtech";

/**
 * The four acts of the pinned phone scene. Copy lives here (not in JSX) so it
 * can be reused by SEO/JSON-LD, tested, and translated without touching markup.
 * Order === scroll order; index maps 1:1 to the phone screens.
 */
export const JEM_STEPS: readonly JemStep[] = [
  {
    id: "presenca",
    eyebrow: "Confirmação de presença",
    title: ["Confirme quem vai", "em 1 toque."],
    body: "Cada jogador confirma presença pelo celular. Você vê a lista fechar em tempo real, sem cobrar ninguém no grupo.",
  },
  {
    id: "times",
    eyebrow: "Sorteio de times",
    title: ["Times equilibrados,", "sem discussão."],
    body: 'O app monta os times pelo nível de cada jogador. Acabou o "meu time sempre perde".',
  },
  {
    id: "financeiro",
    eyebrow: "Financeiro da pelada",
    title: ["Mensalidade e diária", "no controle."],
    body: "Quem pagou, quem deve, quanto entrou. O caixa da pelada organizado sem planilha.",
  },
  {
    id: "ranking",
    eyebrow: "Ranking & estatísticas",
    title: ["Artilheiro do mês", "tem nome."],
    body: "Gols, presenças e vitórias viram ranking. A galera volta toda semana pra subir na tabela.",
  },
] as const;

export const TEAM_CYAN = ["Jemerson", "Lucas", "Bruno", "Diego", "Rafa"];
export const TEAM_VIOLET = ["Sinval", "Caio", "Léo", "Igor", "Théo"];
