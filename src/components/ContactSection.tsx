"use client";

import React, { useState } from "react";
import { contactLinks } from "@/data/portfolio";
import type { ContactLink } from "@/types";
import { useApp } from "@/context/AppContext";

function ContactButton({ link }: { link: ContactLink }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link.href}
      target={link.isExternal ? "_blank" : undefined}
      rel={link.isExternal ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-[0.9rem] no-underline transition-all duration-300 hover:-translate-y-1 border border-[rgba(0,0,0,0.08)] shadow-sm hover:shadow-md"
      style={{
        backgroundColor: hovered ? link.hoverColor : "var(--card)",
        color: hovered ? "white" : "inherit",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <link.icon size={20} style={{ color: hovered ? "white" : link.color }} />
      {link.label}
    </a>
  );
}

export default function ContactSection() {
  const { t } = useApp();
  return (
    <section id="contacto" className="py-24 px-16 bg-bg relative">
      <div className="max-w-[620px] mx-auto text-center">
        <p className="text-[0.74rem] uppercase tracking-[0.15em] text-brand-pink mb-2 font-semibold reveal">
          {t.contact.label}
        </p>
        <h2 className="font-syne font-bold tracking-[-0.03em] mb-3 reveal" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
          {t.contact.title}
        </h2>
        <p className="text-muted max-w-[560px] mx-auto mb-10 reveal">
          {t.contact.description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap reveal">
          {contactLinks.map((link: ContactLink) => (
            <ContactButton key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
