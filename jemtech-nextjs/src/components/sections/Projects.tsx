import Eyebrow from "@/components/ui/Eyebrow";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="relative z-[2] py-[clamp(80px,12vh,140px)]"
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)]">
        <div data-anim>
          <Eyebrow>Projetos</Eyebrow>
        </div>
        <h2
          id="projetos-title"
          data-anim
          className="max-w-[720px] text-[clamp(30px,4.5vw,54px)] font-bold leading-[1.05] tracking-[-0.02em]"
        >
          O que eu já construí.
        </h2>
        <p data-anim className="mt-3.5 max-w-[520px] text-[17px] text-slate">
          Uma amostra do que sai do teclado — de produtos próprios a sistemas
          para clientes reais.
        </p>

        <ul className="mt-14 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <div key={p.id} data-anim className="contents">
              <ProjectCard project={p} />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
