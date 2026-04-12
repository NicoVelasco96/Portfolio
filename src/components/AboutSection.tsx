"use client";
import React from "react";
import { stats } from "@/data/portfolio";
import type { Stat } from "@/types";
import { useApp } from "@/context/AppContext";

function LinkedInBadge() {
  const { t } = useApp();
  return (
    <a href="https://ar.linkedin.com/in/nicolasvelasco1996" target="_blank" rel="noopener noreferrer" className="block no-underline group">
      {/* CAMBIO: bg-white -> dark:bg-card y bordes variables */}
      <div className="bg-white dark:bg-card border border-[var(--border)] rounded-2xl overflow-hidden w-[420px] shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* CAMBIO: Fondo del encabezado de LinkedIn ajustable */}
        <div className="bg-[#f3f2f0] dark:bg-[#1a1a1a] px-8 py-5">
          <div className="flex items-center gap-1">
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "26px", fontWeight: "bold", color: "#0077B5", letterSpacing: "-0.5px" }}>Linked</span>
            <span style={{ background: "#0077B5", color: "white", fontFamily: "Arial, sans-serif", fontSize: "26px", fontWeight: "bold", borderRadius: "4px", padding: "0 4px", lineHeight: "1.3" }}>in</span>
          </div>
        </div>
        <div className="px-8 py-7">
          <div className="mb-5">
            <img src="/profile.jpg" alt="Nicolas Velasco" className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div className="w-24 h-24 rounded-full bg-[#e8f0f8] items-center justify-center text-[#5a88b8] font-bold text-2xl border-2 border-white shadow-sm" style={{ display: "none" }}>NV</div>
          </div>
          {/* CAMBIO: text-gray-900 -> text-[var(--text)] */}
          <p className="font-bold text-[1.2rem] text-[var(--text)] leading-tight mb-2">Nicolas Velasco</p>
          {/* CAMBIO: text-gray-600 -> text-[var(--muted)] */}
          <p className="text-[0.88rem] text-[var(--muted)] leading-snug mb-4">Desarrollador Back-end | Java | Spingboot | TypeScript | Docker | Vercel | NestJS</p>
          <p className="text-[0.85rem] text-[#0077b5] font-medium mb-6">Full Salud | Universidad Tecnológica Nacional</p>
          <span className="inline-block border border-[#0077b5] text-[#0077b5] text-[0.9rem] font-semibold px-6 py-2.5 rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-colors duration-200">
            {t.about.view_profile}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function AboutSection() {
  const { t } = useApp();
  return (
    <section id="sobre-mi" className="py-24 px-16 bg-bg relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
            {t.about.label}
          </p>
          <h2 className="font-syne font-bold tracking-[-0.03em] mb-4 reveal" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            {t.about.title}
          </h2>
          <p className="text-muted mb-4 reveal">{t.about.description}</p>
          <p className="text-muted mb-4 reveal">{t.about.description2}</p>

          <div className="grid grid-cols-2 gap-4 mt-8 reveal">
            {stats.map((stat: Stat) => (
              /* CAMBIO CLAVE: Usamos stat.bg para modo claro y dark:bg-card para que sea negro en modo oscuro */
              <div
                key={stat.label}
                className={`p-5 rounded-2xl border-[1.5px] border-[var(--border)] transition-all duration-300 ${stat.bg} dark:bg-card`}
              >
                {/* CAMBIO: El número hereda el color de fondo en modo oscuro para resaltar */}
                <div className={`font-syne font-bold text-[2rem] leading-none transition-colors dark:text-${stat.bg.replace('bg-', '')}`}>
                  {stat.value}
                </div>
                <div className="text-[0.82rem] text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center gap-6 relative">
          <LinkedInBadge />
          {/* CAMBIO: bg-card ya es var(--card), por lo que se vuelve negro solo */}
          <div className="bg-card border border-[var(--border)] px-5 py-4 rounded-2xl text-[0.84rem] flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38a860] block dot-pulse" />
            {t.about.available}
          </div>
        </div>
      </div>
    </section>
  );
}