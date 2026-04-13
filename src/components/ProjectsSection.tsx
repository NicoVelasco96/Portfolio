"use client";
import React from "react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { useApp } from "@/context/AppContext";

export default function ProjectsSection() {
  const { t } = useApp();
  return (
    <section id="proyectos" className="py-24 px-16 bg-bg-2 relative">
      <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
        {t.projects.label}
      </p>
      <h2 className="font-syne font-bold tracking-[-0.03em] mb-4 reveal" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
        {t.projects.title}
      </h2>
      <p className="text-muted max-w-[560px] mb-12 reveal">
        {t.projects.description}
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-8 items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
