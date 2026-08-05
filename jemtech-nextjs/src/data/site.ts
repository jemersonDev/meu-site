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
  { k: "01", title: "Sistemas Web", description: "Plataformas sob medida com backend robusto, auth e pagamentos PIX integrados.", tag: "full-stack" },
  { k: "02", title: "Inteligência Artificial", description: "Agentes, RAG e automação com IA acoplados ao seu produto e dados.", tag: "AI" },
  { k: "03", title: "Atendimento 24h", description: "Bots que respondem, qualificam e vendem enquanto você dorme.", tag: "always-on" },
  { k: "04", title: "Automações", description: "Fluxos que eliminam trabalho manual e conectam suas ferramentas.", tag: "ops" },
  { k: "05", title: "Aplicativos", description: "Apps rápidos e instaláveis (PWA/mobile) com experiência nativa.", tag: "mobile" },
  { k: "06", title: "Dashboards", description: "Painéis em tempo real que transformam dados em decisão.", tag: "data" },
] as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { n: "01", title: "Descoberta", description: "Entendo o problema real — não o que parece ser. Uma conversa vale mais que dez requisitos mal escritos." },
  { n: "02", title: "Protótipo", description: "Você vê e clica antes de pagar pelo desenvolvimento completo. Zero surpresa." },
  { n: "03", title: "Construção", description: "Código limpo, testado e versionado. Você acompanha o progresso em tempo real." },
  { n: "04", title: "Entrega e evolução", description: "Deploy, documentação e suporte. O sistema nasce pronto para crescer." },
] as const;

export const STACK = ["React", "Next.js", "TypeScript", "Supabase", "Tailwind", "Node", "PostgreSQL", "GSAP", "OpenAI", "PIX"];
