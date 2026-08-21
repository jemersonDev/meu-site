import type { Metadata, Viewport } from "next";
import { spaceGrotesk, jetbrainsMono } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_URL } from "@/lib/site-url";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jemerson Lima — Sistemas web, IA e automações",
    template: "%s · Jemerson Lima",
  },
  description:
    "Desenvolvedor Full Stack em Uberaba–MG. Criação de sites profissionais, sistemas web e automações com inteligência artificial para empresas.",
  keywords: [
    "desenvolvedor full-stack",
    "sistemas web",
    "inteligência artificial",
    "automações",
    "criação de sites em Uberaba",
    "desenvolvedor freelancer",
    "landing page",
    "Uberaba",
  ],
  authors: [{ name: "Jemerson Lima" }],
  creator: "Jemerson Lima",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Jemerson Lima",
    title: "Jemerson Lima — Sistemas web, IA e automações",
    description:
      "Sites profissionais, sistemas web e automações com IA para empresas em Uberaba e todo o Brasil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jemerson Lima — Sistemas web, IA e automações",
    description:
      "Transformo ideias em software rápido, inteligente e que gera resultado.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Person", "ProfessionalService"],
  name: "Jemerson Lima",
  jobTitle: "Desenvolvedor Full Stack",
  description: "Criação de sites profissionais, sistemas web e automações com IA para empresas.",
  areaServed: ["Uberaba", "Minas Gerais", "Brasil"],
  knowsAbout: ["Next.js", "React", "TypeScript", "Sistemas web", "Automação", "Inteligência artificial"],
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: "Uberaba", addressRegion: "MG", addressCountry: "BR" },
  sameAs: [
    "https://github.com/jemersonDev",
    "https://www.youtube.com/@jemersontech",
    "https://www.linkedin.com/in/jemerson-limaprogramador",
    "https://instagram.com/_jemersonlm",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-[#04121a]"
        >
          Pular para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
