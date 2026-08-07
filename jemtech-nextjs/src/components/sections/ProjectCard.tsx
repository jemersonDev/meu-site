"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";

/**
 * Single project card. Client component only because it plays/pauses a video
 * on pointer enter/leave (imperative media control needs a ref). Everything
 * else (title, description, tech list, links) is plain server-renderable
 * markup passed in as props — this component adds interaction, not content.
 *
 * Graceful degradation:
 *  - No videoUrl → shows a static gradient placeholder with the project
 *    initial instead of a broken/empty video area.
 *  - No githubUrl/demoUrl → that specific link is simply omitted, never a
 *    dead "#" href.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => videoRef.current?.play().catch(() => {});
  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <li
      onPointerEnter={play}
      onPointerLeave={pause}
      className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.015] transition-[border-color,transform] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:border-cyan/25"
    >
      {/* Media */}
      <div className="relative aspect-video w-full overflow-hidden bg-panel">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,rgba(34,211,238,0.08),rgba(124,92,255,0.06))]">
            <span className="font-mono text-[13px] tracking-[0.14em] text-slate-dim">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${
            project.status === "live"
              ? "border-emerald/30 bg-emerald/10 text-emerald"
              : "border-cyan/30 bg-cyan/10 text-cyan"
          }`}
        >
          {project.status === "live" ? "No ar" : "Em desenvolvimento"}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[19px] font-semibold tracking-[-0.01em]">{project.title}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-[1.55] text-slate">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[10.5px] text-[#c8d2dc]"
            >
              {t}
            </li>
          ))}
        </ul>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-5 flex gap-3 border-t border-white/[0.06] pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-slate transition-colors hover:text-foam"
              >
                Código →
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-cyan transition-colors hover:text-foam"
              >
                Demonstração →
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
