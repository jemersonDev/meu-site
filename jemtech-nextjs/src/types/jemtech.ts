export interface JemStep {
  /** Stable key for React lists and data attributes. */
  id: string;
  eyebrow: string;
  /** Two-line title; array so we control the break without dangerouslySetInnerHTML. */
  title: [string, string];
  body: string;
}

export type TeamKey = "cyan" | "violet";
