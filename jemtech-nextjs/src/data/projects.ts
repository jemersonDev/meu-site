export interface Project {
  id: string;
  title: string;
  description: string;
  tech: readonly string[];
  githubUrl?: string;
  demoUrl?: string;
  /** Optional demo video (muted, looping, plays on hover/visibility). */
  videoUrl?: string;
  status: "live" | "development";
}

export const PROJECTS: readonly Project[] = [
  {
    id: "jemtech-sports",
    title: "JemTech Sports",
    description:
      "Sistema completo para organizar partidas de futebol — presença, times, estatísticas, ranking e assistente com IA.",
    tech: ["React Native", "Supabase", "TypeScript", "OpenAI"],
    status: "development",
  },
  {
    id: "barbearia-almeida",
    title: "Barbearia Almeida",
    description:
      "PWA de gestão para barbearia: agendamento online, controle de clientes e financeiro para o dono e a equipe.",
    tech: ["Next.js", "Supabase", "Tailwind", "PIX"],
    status: "live",
  },
  {
    id: "portfolio-v2",
    title: "Portfólio v2",
    description:
      "Este site — Next.js 15, GSAP e uma experiência de scroll cinematográfica construída do zero.",
    tech: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    githubUrl: "https://github.com/jemersonDev",
    status: "live",
  },
] as const;
