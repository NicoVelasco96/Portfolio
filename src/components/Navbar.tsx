"use client";

// src/components/Navbar.tsx
import React from "react";
import { navLinks } from "@/data/portfolio";
import type { NavLink } from "@/types";

export default function Navbar() {
  return (
    <>
      {/* Color band at the very top */}
      <div className="color-band fixed top-0 left-0 right-0 z-50" />

      <nav
        className="fixed top-[5px] left-0 right-0 z-40 flex items-center justify-between px-16 py-[1.1rem]
          bg-[rgba(248,251,246,0.88)] backdrop-blur-lg border-b border-[rgba(0,0,0,0.08)]"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-syne font-extrabold text-[1.2rem] tracking-tight text-text no-underline"
        >
          NV<span className="text-brand-pink">.</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted no-underline text-[0.88rem] font-medium tracking-wide
                hover:text-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="bg-accent-pink text-brand-pink-text px-5 py-2 rounded-lg text-[0.88rem]
            font-medium border border-[rgba(194,106,133,0.3)] hover:opacity-80 transition-opacity no-underline"
        >
          Contactame
        </a>
      </nav>
    </>
  );
}
