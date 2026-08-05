import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

/**
 * Self-hosted via next/font: no render-blocking Google Fonts request, automatic
 * font-display:swap with size-adjust to eliminate CLS. Exposed as CSS variables
 * consumed by globals.css.
 */
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
