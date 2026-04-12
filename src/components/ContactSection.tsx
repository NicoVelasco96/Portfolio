// src/components/ContactSection.tsx
import React from "react";
import { contactLinks } from "@/data/portfolio";
import type { ContactLink } from "@/types";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-16 bg-bg relative">
      <div className="max-w-[620px] mx-auto text-center">
        <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
          Contacto
        </p>
        <h2
          className="font-syne font-bold tracking-[-0.03em] mb-3 reveal"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
        >
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="text-muted max-w-[560px] mx-auto mb-10 reveal">
          Estoy disponible para proyectos freelance, colaboraciones y
          oportunidades laborales. ¡Hablemos!
        </p>

        <div className="flex gap-4 justify-center flex-wrap reveal">
          {contactLinks.map((link: ContactLink) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-[0.9rem]
                no-underline transition-all duration-300 hover:-translate-y-1
                bg-white border border-[rgba(0,0,0,0.08)] text-text shadow-sm hover:shadow-md"
            >
              <link.icon 
                size={20} 
                style={{ color: link.color }} 
              />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}