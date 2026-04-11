// src/components/AboutSection.tsx
import React from "react";
import { stats } from "@/data/portfolio";
import type { Stat } from "@/types";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-16 bg-bg relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div>
          <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
            Sobre mí
          </p>
          <h2
            className="font-syne font-bold tracking-[-0.03em] mb-4 reveal"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            Desarrollador con ganas de crecer
          </h2>
          <p className="text-muted mb-4 reveal">
            Soy desarrollador backend con experiencia construyendo aplicaciones web
            modernas. Trabajo con tecnologías del ecosistema TypeScript y JAVA, 
            e integro microservicios Java con herramientas de automatización.
          </p>
          <p className="text-muted mb-4 reveal">
            Me gusta resolver problemas reales con código limpio, escalable y
            bien documentado. Siempre aprendiendo algo nuevo.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 reveal">
            {stats.map((stat: Stat) => (
              <div
                key={stat.label}
                className={`p-5 rounded-2xl border-[1.5px] border-[rgba(0,0,0,0.08)] ${stat.bg}`}
              >
                <div className="font-syne font-bold text-[2rem] leading-none">
                  {stat.value}
                </div>
                <div className="text-[0.82rem] text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div className="hidden md:block relative">
          <div
            className="rounded-[22px] border-[1.5px] border-[rgba(0,0,0,0.08)] aspect-[4/5]
              flex items-center justify-center text-[6rem] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #baf2d8, #bad7f2)",
            }}
          >
            👨‍💻
          </div>
          <div
            className="absolute bottom-[-1rem] right-[-1.5rem] bg-white border border-[rgba(0,0,0,0.08)]
              px-5 py-4 rounded-2xl text-[0.84rem] flex items-center gap-2
              shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#38a860] block" />
            Disponible para proyectos freelance
          </div>
        </div>
      </div>
    </section>
  );
}
