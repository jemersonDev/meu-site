export interface Service {
  k: string;
  title: string;
  description: string;
  tag: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  description: string;
}

export const SERVICES: readonly Service[] = [
  { k: "01", title: "Sites profissionais", description: "Landing pages e sites institucionais rápidos, responsivos e preparados para transformar visitas em contatos.", tag: "web" },
  { k: "02", title: "Sistemas e aplicativos web", description: "Agendamentos, cadastros, dashboards e áreas administrativas criados para organizar sua operação.", tag: "full-stack" },
  { k: "03", title: "Automação e atendimento com IA", description: "Atendimento 24h, qualificação de clientes e integrações que reduzem tarefas repetitivas.", tag: "IA" },
] as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { n: "01", title: "Descoberta", description: "Entendo o problema real — não o que parece ser. Uma conversa vale mais que dez requisitos mal escritos." },
  { n: "02", title: "Protótipo", description: "Você vê e clica antes de pagar pelo desenvolvimento completo. Zero surpresa." },
  { n: "03", title: "Construção", description: "Código limpo, testado e versionado. Você acompanha o progresso em tempo real." },
  { n: "04", title: "Entrega e evolução", description: "Deploy, documentação e suporte. O sistema nasce pronto para crescer." },
] as const;

export const STACK = ["React", "Next.js", "TypeScript", "Supabase", "Tailwind", "Node", "PostgreSQL", "GSAP", "OpenAI", "PIX"];
