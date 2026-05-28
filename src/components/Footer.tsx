"use client";
import React from "react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="px-4 sm:px-8 md:px-16 py-6 border-t border-[rgba(0,0,0,0.08)] flex justify-between items-end text-[0.9rem] text-muted bg-bg-2 flex-wrap gap-2">
      <span>© 2026 Nicolas Velasco</span>
      <span className="flex items-center gap-1.5">
        {t.footer.made_with_prefix}
        <span className="text-[1.10rem] leading-none">☕</span>
        {t.footer.made_with_suffix}
      </span>
    </footer>
  );
}