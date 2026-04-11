// src/components/EducationSection.tsx
import React from "react";
import { education } from "@/data/portfolio";
import type { Education } from "@/types";

export default function EducationSection() {
  return (
    <section id="educacion" className="py-24 px-16 bg-bg-2 relative">
      <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
        Formación
      </p>
      <h2
        className="font-syne font-bold tracking-[-0.03em] mb-4 reveal"
        style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
      >
        Educación
      </h2>
      <p className="text-muted max-w-[560px] mb-12 reveal">
        Mi recorrido académico en tecnología y desarrollo de software.
      </p>

      {/* Timeline */}
      <div className="relative pl-9">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-sm timeline-line" />

        {education.map((item: Education) => (
          <div
            key={item.id}
            className="relative mb-10 p-6 bg-white border-[1.5px] border-[rgba(0,0,0,0.08)]
              rounded-2xl reveal"
          >
            {/* Timeline dot */}
            <span
              className={`absolute left-[-2.6rem] top-[1.9rem] w-3 h-3 rounded-full
                border-[2.5px] border-white ${item.dotColor} ${item.dotShadow}`}
            />

            <div className="text-[0.78rem] text-brand-pink mb-1 font-semibold tracking-wide">
              {item.period}
            </div>
            <div className="font-syne font-bold text-[1.05rem] mb-1">
              {item.title}
            </div>
            <div className="text-muted text-[0.88rem] mb-4">{item.institution}</div>

            <div className="flex gap-2 flex-wrap">
              {item.subjects.map((subject) => (
                <span
                  key={subject}
                  className="bg-bg-2 border border-[rgba(0,0,0,0.08)] px-[0.65rem] py-[0.18rem]
                    rounded-md text-[0.74rem] text-muted"
                >
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
