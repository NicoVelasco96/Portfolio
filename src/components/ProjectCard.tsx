import React from "react";
import type { Project } from "@/types";
import { getTagClasses } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card border-[1.5px] border-[rgba(0,0,0,0.08)] rounded-[20px] flex flex-col transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:border-[rgba(186,215,242,0.8)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] reveal h-full relative group">
      <div className="relative w-full aspect-video bg-gray-50 flex-shrink-0 overflow-hidden border-b border-[rgba(0,0,0,0.05)]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm text-[0.72rem] flex items-center gap-1 px-3.5 py-1.5 border border-[rgba(0,0,0,0.1)] rounded-full hover:bg-card transition-all shadow-md font-medium text-gray-800"
        >
          Ver proyecto ↗
        </a>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-syne font-bold text-[1.12rem] tracking-tight mb-2 pr-4 text-text">
          {project.title}
        </h3>
        <p className="text-muted text-[0.9rem] leading-[1.6] mb-6 flex-grow">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-auto pt-2">
          {project.tags.map((tag) => (
            <span key={tag.label} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[0.72rem] border font-medium ${getTagClasses(tag.color)}`}>
              {tag.icon && <tag.icon className="w-3.5 h-3.5" />}
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
