import JemTechScene from "./JemTechScene";
import PhoneScreens from "./PhoneScreens";
import { JEM_STEPS } from "@/data/jemtech";

/**
 * Server Component. Renders the full narrative as static, crawlable HTML:
 * opening act, problem act, the pinned phone stage (with all copy in the DOM),
 * and the closing CTA. The client <JemTechScene> only orchestrates animation
 * over this markup — remove the JS and the content still reads top to bottom.
 */
export default function JemTechSports() {
  return (
    <section
      id="jemtech"
      aria-labelledby="jemtech-title"
      className="relative"
    >
      {/* Accessible summary of the interactive scene for AT users. */}
      <p className="sr-only" id="jemtech-title">
        JemTech Sports — sistema completo para organizar partidas de futebol:
        login, dashboard, confirmação de presença e sorteio de times,
        estatísticas, ranking, chat do grupo e assistente com inteligência
        artificial.
      </p>

      {/* Act 1 — opening */}
      <div className="flex min-h-[92svh] items-center justify-center px-6 text-center">
        <div className="max-w-[760px]">
          <div className="jt-eye" data-anim>
            <i /> JemTech Sports
          </div>
          <h2 id="jemtech-h" className="jt-h">
            A pelada de domingo
            <br />
            <span className="jt-grad">merece um sistema.</span>
          </h2>
          <p className="jt-p mx-auto" data-anim>
            Do grupo bagunçado no WhatsApp ao jogo organizado. Presença, times e
            dinheiro — tudo num app só.
          </p>
        </div>
      </div>

      {/* Act 2 — problem */}
      <div className="flex min-h-[92svh] items-center justify-center px-6 text-center">
        <div className="max-w-[640px]">
          <p className="mb-3 font-mono text-xs tracking-[0.1em] text-slate-dim" data-anim>
            ANTES
          </p>
          <h3 className="jt-h text-[clamp(26px,4.5vw,46px)]" data-anim>
            &ldquo;Quem vai hoje?&rdquo;
            <br />
            &ldquo;Faltam 2 pro time.&rdquo;
            <br />
            &ldquo;Quem tá devendo?&rdquo;
          </h3>
          <p className="jt-p mx-auto" data-anim>
            Toda semana a mesma bagunça. O JemTech Sports resolve isso em segundos.
          </p>
        </div>
      </div>

      {/* Act 3 — pinned phone stage. Height drives the scroll length. */}
      <JemTechScene>
        <div
          className="relative"
          style={{ height: `${JEM_STEPS.length * 130}vh` }}
          data-stage
        >
          {/* Ambient light layer, animated by the scene */}
          <div
            data-light
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          />
          <div
            data-pin
            className="flex h-svh items-center overflow-hidden"
          >
            <div className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1fr_auto]">
              {/* Copy column — cross-fades in place on desktop, stacks on mobile */}
              <div className="relative min-h-[220px]">
                {JEM_STEPS.map((s) => (
                  <div key={s.id} data-copy data-step={s.id}>
                    <div className="jt-eye">
                      <i /> {s.eyebrow}
                    </div>
                    <h3 className="jt-h text-[clamp(28px,4vw,48px)]">
                      {s.title[0]}
                      <br />
                      {s.title[1]}
                    </h3>
                    <p className="jt-p">{s.body}</p>
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div className="flex w-full justify-center [perspective:1400px]">
                <div
                  data-phone
                  className="relative aspect-[270/560] w-[clamp(220px,70vw,270px)] shrink-0 rounded-[44px] bg-gradient-to-b from-[#1a1f2b] to-[#0d1017] p-3 [transform-style:preserve-3d]"
                  style={{
                    boxShadow:
                      "0 40px 90px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06), inset 0 0 0 2px rgba(255,255,255,.04)",
                  }}
                >
                  <div className="absolute left-1/2 top-3.5 z-[5] h-[26px] w-[110px] -translate-x-1/2 rounded-b-2xl bg-[#0d1017]" />
                  <div className="relative h-full w-full overflow-hidden rounded-[33px] bg-[#0a0d14]">
                    <PhoneScreens />
                  </div>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 gap-2">
              {JEM_STEPS.map((s, i) => (
                <span
                  key={s.id}
                  data-dot
                  className="h-[3px] w-[26px] rounded-full"
                  style={{ backgroundColor: i === 0 ? "#22d3ee" : "rgba(255,255,255,0.1)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </JemTechScene>

      {/* Act 4 — closing CTA */}
      <div className="flex min-h-[92svh] items-center justify-center px-6 text-center">
        <div className="max-w-[680px]">
          <div className="jt-eye justify-center" data-anim>
            <i /> Em desenvolvimento
          </div>
          <h2 className="jt-h" data-anim>
            Sua pelada,
            <br />
            <span className="jt-grad">no próximo nível.</span>
          </h2>
          <p className="jt-p mx-auto" data-anim>
            O JemTech Sports está sendo construído. Quer ser um dos primeiros a
            testar?
          </p>
          <a
            href="https://wa.me/5534974000096?text=Quero%20testar%20o%20JemTech%20Sports"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-xl bg-cyan px-[26px] py-3.5 text-[15px] font-semibold text-[#04121a]"
            data-anim
          >
            Entrar na lista →
          </a>
        </div>
      </div>
    </section>
  );
}
