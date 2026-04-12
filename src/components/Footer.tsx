"use client";
import React from "react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="px-16 py-8 border-t border-[rgba(0,0,0,0.08)] flex justify-between items-center text-[0.84rem] text-muted bg-bg-2 flex-wrap gap-2">
      <span>© 2026 Nicolas Velasco</span>
      <span>{t.footer.made_with}</span>
    </footer>
  );
}
