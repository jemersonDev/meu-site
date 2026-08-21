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
    id: "marcus-tattoo",
    title: "Marcus Tattoo",
    description:
      "Site interativo para estúdio de tatuagem, com portfólio, especialidades, processo, cuidados, localização, FAQ e contato direto para orçamento.",
    tech: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
    demoUrl: "https://projeto-marcus-tato.vercel.app/",
    status: "live",
  },
  {
    id: "jemtech-sports",
    title: "JemTech Sports",
    description:
      "Aplicativo para organizar partidas de futebol, com presença, divisão de times, estatísticas, ranking e recursos de inteligência artificial.",
    tech: ["React", "TanStack", "Supabase", "TypeScript"],
    status: "development",
  },
  {
    id: "devclub-landing",
    title: "Desafio DevClub",
    description:
      "Landing page premium desenvolvida em um desafio Full Stack, com experiência responsiva, animações e otimizações de performance.",
    tech: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    githubUrl: "https://github.com/jemersonDev/devclub-landing",
    demoUrl: "https://devclub-jemerson.netlify.app/",
    status: "live",
  },
  {
    id: "portfolio-v2",
    title: "Portfólio Jemerson.dev",
    description:
      "Portfólio profissional construído com renderização no servidor, SEO técnico, acessibilidade e animações progressivas.",
    tech: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    githubUrl: "https://github.com/jemersonDev/meu-site",
    status: "live",
  },
] as const;
