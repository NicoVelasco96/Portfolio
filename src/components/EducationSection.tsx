"use client";
import React from "react";
import { education } from "@/data/portfolio";
import type { Education } from "@/types";
import { useApp } from "@/context/AppContext";

export default function EducationSection() {
  const { t } = useApp();
  return (
    <section id="educacion" className="py-24 px-16 bg-bg-2 relative">
      <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
        {t.education.label}
      </p>
      <h2 className="font-syne font-bold tracking-[-0.03em] mb-4 reveal" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
        {t.education.title}
      </h2>
      <p className="text-muted max-w-[560px] mb-12 reveal">
        {t.education.description}
      </p>

      <div className="relative pl-9">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-sm timeline-line" />

        {education.map((item: Education) => (
          <div key={item.id} className="relative mb-10 p-6 bg-card border-[1.5px] border-[rgba(0,0,0,0.08)] rounded-2xl reveal group">
            <span className={`absolute left-[-2.6rem] top-[1.9rem] w-3 h-3 rounded-full border-[2.5px] border-white ${item.dotColor} ${item.dotShadow}`} />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4">
              <div className="flex-1">
                <div className="text-[0.78rem] text-brand-pink font-semibold tracking-wide mb-1">
                  {item.period}
                </div>
                <div className="font-syne font-bold text-[1.15rem] leading-tight mb-1">
                  {item.title}
                </div>
                <div className="text-muted text-[0.88rem] flex items-center gap-1.5">
                  {item.institutionLogo && (
                    <img src={item.institutionLogo} alt={item.institution} className="w-12 h-12 object-contain rounded-sm" />
                  )}
                  {item.institution}
                </div>
              </div>

              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-[0.85rem] flex items-center gap-2 px-5 py-2.5 bg-card border-[1.5px] border-brand-pink/20 rounded-xl text-text font-medium shadow-sm hover:shadow-md hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all duration-300 ease-in-out sm:mb-1"
                >
                  {t.education.certificate}
                  <span className="text-[1rem]">↗</span>
                </a>
              )}
            </div>

            <div className="flex gap-2 flex-wrap mt-5 border-t border-[rgba(0,0,0,0.03)] pt-4">
              {item.subjects.map((subject) => (
                <span key={subject} className="bg-bg-2 border border-[rgba(0,0,0,0.08)] px-[0.65rem] py-[0.18rem] rounded-md text-[0.74rem] text-muted">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
