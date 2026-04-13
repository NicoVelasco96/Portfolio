"use client";
import React from "react";
import type { Project, ProjectTag } from "@/types";
import { getTagClasses } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useApp();
  const item = t.projects.items[project.id as keyof typeof t.projects.items];

  return (
    <div className="bg-card border-[1.5px] border-[rgba(0,0,0,0.08)] rounded-[20px] flex flex-col transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:border-[rgba(186,215,242,0.8)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] reveal h-full relative group">
      <div className="relative w-full aspect-video bg-gray-50 flex-shrink-0 overflow-hidden border-b border-[rgba(0,0,0,0.05)]">
        <img src={project.image} alt={item?.title ?? project.id} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[0.72rem] flex items-center gap-1 px-3.5 py-1.5 border border-[rgba(0,0,0,0.1)] rounded-full hover:bg-white transition-all shadow-md font-medium text-gray-800"
        >
          {t.projects.view} ↗
        </a>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-syne font-bold text-[1.12rem] tracking-tight mb-2 pr-4 text-text">
          {item?.title ?? project.id}
        </h3>
        <p className="text-muted text-[0.9rem] leading-[1.6] mb-6 flex-grow">
          {item?.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
          {project.tags.map((tag: ProjectTag) => {
                    const Icon = tag.icon;
                    return (
                      <div
                        key={tag.label}
                        className="flex items-center gap-[0.6rem] bg-white dark:bg-[#1e2a1e] border border-[rgba(0,0,0,0.08)] px-4 py-[0.38rem] rounded-lg text-[0.82rem] text-muted hover:shadow-sm transition-all"
                      >
                        {Icon && <Icon className="w-4 h-4" style={{ color: tag.color }} aria-hidden="true" />}
                        <span className="font-medium">{tag.label}</span>
                      </div>
                    );
                  })}
        </div>
      </div>
    </div>
  );
}
