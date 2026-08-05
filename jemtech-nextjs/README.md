# Jemerson Lima — Portfolio (Next.js 15 + GSAP)

Site premium com Hero cinematográfico, experiência de scroll do JemTech Sports,
seções de serviços/processo/redes e CTA. React 19, TypeScript, Tailwind v4, GSAP.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

Scripts: `npm run dev` · `npm run build` · `npm run start` · `npm run typecheck`

## Deploy na Vercel (você já tem conta)

1. Suba este projeto para um repositório no seu GitHub.
2. Na Vercel: **Add New… → Project → Import** o repositório.
3. Framework é detectado como **Next.js** — não precisa mudar nada. Clique **Deploy**.
4. Em ~2 min o site está no ar num domínio `*.vercel.app`.

### Domínio próprio

Em **Project → Settings → Domains**, adicione `jemerson.dev` (ou o que preferir)
e siga as instruções de DNS. Depois, troque a constante `SITE` em
`src/app/layout.tsx` para o domínio final (afeta canonical, OpenGraph e sitemap).

## Antes de divulgar (checklist)

- [ ] Trocar `SITE` em `src/app/layout.tsx` pelo domínio real.
- [ ] Adicionar `public/og.png` (1200×630) — imagem de compartilhamento.
- [ ] Adicionar `public/favicon.ico`.
- [ ] Conferir o número do WhatsApp nos CTAs (busca por `wa.me` no projeto).
- [ ] (Opcional) Ligar Vercel Analytics em Project → Analytics.
- [ ] (Quando tiver) Trocar as telas desenhadas do JemTech por prints reais em
      `src/components/jemtech/PhoneScreens.tsx`.

## Estrutura

```
src/
├─ app/            layout (SEO+JSON-LD), page, not-found, sitemap, robots
├─ components/
│  ├─ layout/      Navbar, Footer
│  ├─ hero/        Hero + canvas de partículas
│  ├─ sections/    StackMarquee, Services, Process, CallToAction
│  ├─ jemtech/     experiência de scroll cinematográfica
│  ├─ social/      seção de redes sociais
│  └─ ui/          Eyebrow, MagneticButton, RevealGroup (reutilizáveis)
├─ data/           site, jemtech, socials (conteúdo — fonte única)
├─ hooks/          usePrefersReducedMotion
├─ lib/            fonts (next/font), gsap (registro único)
└─ styles/         globals.css (design tokens)
```
