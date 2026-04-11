// src/components/ProjectCard.tsx
import React from "react";
import type { Project } from "@/types";
import { getTagClasses } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="bg-white border-[1.5px] border-[rgba(0,0,0,0.08)] rounded-[18px]
        flex flex-col transition-all duration-300 overflow-hidden
        hover:-translate-y-1 hover:border-[rgba(186,215,242,0.8)]
        hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] reveal"
    >
      {/* Card header */}
      <div className="p-[1.4rem] pb-[0.4rem] flex items-start justify-between">
        <div
          className={`w-[46px] h-[46px] rounded-xl flex items-center justify-center text-[1.35rem] ${project.iconBg}`}
        >
          {project.icon}
        </div>
        <a
          href={project.href}
          className="text-muted text-[0.74rem] no-underline flex items-center gap-1
            px-[0.65rem] py-[0.28rem] border border-[rgba(0,0,0,0.08)] rounded-md
            hover:text-text transition-colors duration-200"
        >
          Ver proyecto ↗
        </a>
      </div>

      {/* Card body */}
      <div className="px-[1.4rem] pb-[1.4rem] pt-[0.6rem] flex-1 flex flex-col">
        <h3 className="font-syne font-bold text-[1.08rem] mb-[0.4rem] tracking-tight">
          {project.title}
        </h3>
        <p className="text-muted text-[0.88rem] leading-[1.65] flex-1 mb-[1.1rem]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex gap-[0.35rem] flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-[0.6rem] py-[0.18rem] rounded-md text-[0.73rem] border ${getTagClasses(tag.color)}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
