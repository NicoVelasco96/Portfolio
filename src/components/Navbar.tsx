"use client";

import React, { useState, useRef, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { HiCog6Tooth, HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const { t, locale, setLocale, isDark, toggleDark } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: "#proyectos", label: t.nav.projects },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#educacion", label: t.nav.education },
    { href: "#contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="color-band fixed top-0 left-0 right-0 z-50" />
      <nav className="fixed top-[5px] left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 md:px-16 py-[1.1rem] bg-[rgba(248,251,246,0.88)] dark:bg-[rgba(18,24,18,0.88)] backdrop-blur-lg border-b border-[rgba(0,0,0,0.08)]">
        <div className="relative" ref={menuRef}>
          <button onClick={() => setMenuOpen((prev) => !prev)} className="bg-transparent border-none cursor-pointer p-0 hover:opacity-70 transition-opacity">
            <HiCog6Tooth size={32} className="text-muted" />
          </button>
          {menuOpen && (
            <div className="absolute top-[calc(100%+0.75rem)] left-0 w-[220px] rounded-2xl bg-white dark:bg-[#1a241a] border border-[rgba(0,0,0,0.08)] shadow-lg p-4 flex flex-col gap-3 z-50">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.12em] text-muted font-semibold mb-2">{locale === "es" ? "Idioma" : "Language"}</p>
                <div className="flex gap-2">
                  <button onClick={() => setLocale("es")} className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-[0.82rem] font-medium border transition-all duration-200 cursor-pointer ${locale === "es" ? "bg-accent-pink border-brand-pink/30 text-brand-pink" : "bg-transparent border-[rgba(0,0,0,0.08)] text-muted hover:bg-bg-2"}`}>🇦🇷 ES</button>
                  <button onClick={() => setLocale("en")} className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-[0.82rem] font-medium border transition-all duration-200 cursor-pointer ${locale === "en" ? "bg-accent-pink border-brand-pink/30 text-brand-pink" : "bg-transparent border-[rgba(0,0,0,0.08)] text-muted hover:bg-bg-2"}`}>🇺🇸 EN</button>
                </div>
              </div>
              <div className="border-t border-[rgba(0,0,0,0.06)]" />
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.12em] text-muted font-semibold mb-2">{locale === "es" ? "Tema" : "Theme"}</p>
                <button onClick={toggleDark} className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-[rgba(0,0,0,0.08)] text-[0.82rem] font-medium text-muted hover:bg-bg-2 transition-all duration-200 cursor-pointer bg-transparent">
                  <span>{isDark ? (locale === "es" ? "Oscuro" : "Dark") : (locale === "es" ? "Claro" : "Light")}</span>
                  <span>{isDark ? "🌙" : "☀️"}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:flex gap-10">
          {navItems.map((link) => (
            <a key={link.href} href={link.href} className="text-muted no-underline text-[0.88rem] font-medium tracking-wide hover:text-text transition-colors duration-200">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="bg-accent-pink text-brand-pink-text px-5 py-2 rounded-lg text-[0.88rem] font-medium border border-[rgba(194,106,133,0.3)] hover:opacity-80 transition-opacity no-underline">{t.nav.cta}</a>
          <button onClick={() => setMobileOpen((prev) => !prev)} className="md:hidden bg-transparent border-none cursor-pointer p-0 text-text">
            {mobileOpen ? <HiXMark size={26} /> : <HiBars3 size={26} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[57px] left-0 right-0 z-30 bg-[rgba(248,251,246,0.97)] dark:bg-[rgba(18,24,18,0.97)] backdrop-blur-lg border-b border-[rgba(0,0,0,0.08)] flex flex-col px-6 py-4 gap-1 md:hidden">
          {navItems.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-text no-underline text-[1rem] font-medium py-3 border-b border-[rgba(0,0,0,0.05)] last:border-0">{link.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
