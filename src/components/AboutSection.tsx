"use client";
import React from "react";
import { statBgs } from "@/data/portfolio";
import { useApp } from "@/context/AppContext";

function LinkedInBadge() {
  const { t } = useApp();
  return (
    <a href="https://ar.linkedin.com/in/nicolasvelasco1996" target="_blank" rel="noopener noreferrer" className="block no-underline group">
      <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-2xl overflow-hidden w-[420px] shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="bg-[#f3f2f0] px-8 py-5">
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
          <p className="font-bold text-[1.2rem] text-gray-900 leading-tight mb-2">Nicolas Velasco</p>
          <p className="text-[0.88rem] text-gray-600 leading-snug mb-4">Desarrollador Back-end | Java | Springboot | TypeScript | Docker | Vercel | NestJS</p>
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
            {t.stats.map((stat, i) => (
              <div key={stat.label} className={`p-5 rounded-2xl border-[1.5px] border-[rgba(0,0,0,0.08)] ${statBgs[i]?.bg ?? ""}`}>
                <div className="font-syne font-bold text-[2rem] leading-none">{stat.value}</div>
                <div className="text-[0.82rem] text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center gap-6 relative">
          <LinkedInBadge />
          <div className="bg-card border border-[rgba(0,0,0,0.08)] px-5 py-4 rounded-2xl text-[0.84rem] flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <span className="w-2 h-2 rounded-full bg-[#38a860] block" />
            {t.about.available}
          </div>
        </div>
      </div>
    </section>
  );
}
