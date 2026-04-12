// src/components/ProjectsSection.tsx
import React from "react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 px-16 bg-bg-2 relative">
      <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
        Trabajos
      </p>
      <h2
        className="font-syne font-bold tracking-[-0.03em] mb-4 reveal"
        style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
      >
        Proyectos destacados
      </h2>
      <p className="text-muted max-w-[560px] mb-12 reveal">
        Algunos proyectos que construí, desde e-commerce hasta automatizaciones
        con microservicios.
      </p>

      {/* CAMBIO CLAVE: Añadimos 'items-stretch' para que todas las cards midan lo mismo 
          y aseguramos que el grid maneje bien el espaciado.
      */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-8 items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}