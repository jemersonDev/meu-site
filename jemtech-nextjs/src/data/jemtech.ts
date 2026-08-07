import type { JemStep } from "@/types/jemtech";

/**
 * The four acts of the pinned phone scene. Copy lives here (not in JSX) so it
 * can be reused by SEO/JSON-LD, tested, and translated without touching markup.
 * Order === scroll order; index maps 1:1 to the phone screens.
 */
export const JEM_STEPS: readonly JemStep[] = [
  {
    id: "login",
    eyebrow: "Acesso",
    title: ["Entre com seu", "time, em segundos."],
    body: "Login rápido, sem fricção. Convide o grupo e comece a organizar a pelada no mesmo dia.",
  },
  {
    id: "dashboard",
    eyebrow: "Visão geral",
    title: ["Tudo o que importa,", "numa tela só."],
    body: "Próximo jogo, confirmados e financeiro resumidos. Você abre o app e já sabe o status.",
  },
  {
    id: "partidas",
    eyebrow: "Partidas",
    title: ["Confirme presença", "e sorteie os times."],
    body: "Cada jogador confirma em 1 toque, e o app monta times equilibrados pelo nível de cada um.",
  },
  {
    id: "estatisticas",
    eyebrow: "Estatísticas",
    title: ["Cada jogador,", "com seu histórico."],
    body: "Gols, assistências, presença e evolução ao longo das temporadas — dados reais da sua pelada.",
  },
  {
    id: "ranking",
    eyebrow: "Ranking & artilharia",
    title: ["Artilheiro do mês", "tem nome."],
    body: "Gols, presenças e vitórias viram ranking. A galera volta toda semana pra subir na tabela.",
  },
  {
    id: "chat",
    eyebrow: "Chat do grupo",
    title: ["A conversa da pelada,", "organizada."],
    body: "Combinados, avisos e o papo do grupo num só lugar — sem se perder no WhatsApp.",
  },
  {
    id: "ia",
    eyebrow: "Assistente IA",
    title: ["Dúvida sobre a pelada?", "Pergunte pra IA."],
    body: "Um assistente que responde sobre regras, próximos jogos e estatísticas na hora, direto no app.",
  },
] as const;

export const TEAM_CYAN = ["Jemerson", "Lucas", "Bruno", "Diego", "Rafa"];
export const TEAM_VIOLET = ["Sinval", "Caio", "Léo", "Igor", "Théo"];
