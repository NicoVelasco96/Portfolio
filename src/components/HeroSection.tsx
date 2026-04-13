"use client";

import React from "react";
import { techPills } from "@/data/portfolio";
import type { TechPill } from "@/types";
import { useApp } from "@/context/AppContext";

export default function HeroSection() {
  const { t } = useApp();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-[-18%] right-[-8%] w-[62vw] h-[62vw] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #bad7f2 0%, transparent 65%)", opacity: 0.5 }} />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        <div className="flex flex-col flex-1">
          <div className="inline-flex items-center gap-2 bg-accent-green2 border border-[rgba(100,180,130,0.3)] px-4 py-[0.35rem] rounded-full text-[0.82rem] text-[#1a5a30] mb-6 w-fit relative reveal">
            <span className="w-[7px] h-[7px] rounded-full bg-[#38a860] dot-pulse block" />
            {t.hero.available}
          </div>

          <h1 className="font-syne font-extrabold leading-[1.05] tracking-[-0.04em] mb-5 relative reveal" style={{ fontSize: "clamp(2.4rem, 6.5vw, 5.4rem)" }}>
            {t.hero.greeting}
            <br />
            <span className="bg-gradient-to-br from-brand-pink to-[#5a88b8] bg-clip-text text-transparent">
              Nicolas Velasco
            </span>
          </h1>

          <p className="text-muted max-w-[520px] mb-10 font-light text-[1.1rem] relative reveal">
            {t.hero.description}
          </p>

          <div className="flex gap-4 flex-wrap relative reveal">
            <a href="#proyectos" className="bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white px-8 py-3 rounded-xl font-medium no-underline hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200">
              {t.hero.cta_projects}
            </a>
            <a href="#contacto" className="border border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.4)] text-text dark:text-white bg-white dark:bg-transparent px-8 py-3 rounded-xl font-medium no-underline hover:bg-bg-3 dark:hover:bg-white/10 transition-colors duration-200">
              {t.hero.cta_contact}
            </a>
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center lg:justify-end flex-shrink-0 reveal">
          <img src="/foto_perfil.jpg" alt="Nicolas Velasco" className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] object-cover object-top rounded-2xl shadow-lg" />
        </div>
      </div>

      <div className="flex gap-3 flex-wrap mt-12 pt-8 border-t border-[rgba(0,0,0,0.08)] relative reveal">
        {techPills.map((pill: TechPill) => {
          const Icon = pill.icon;
          return (
            <div key={pill.label} className="flex items-center gap-[0.6rem] bg-white dark:bg-[#1e2a1e] border border-[rgba(0,0,0,0.08)] px-3 py-[0.38rem] rounded-lg text-[0.78rem] text-muted hover:shadow-sm transition-all">
              <Icon className="w-4 h-4" style={{ color: pill.color }} aria-hidden="true" />
              <span className="font-medium">{pill.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
