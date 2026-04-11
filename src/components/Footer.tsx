// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer
      className="px-16 py-8 border-t border-[rgba(0,0,0,0.08)] flex justify-between items-center
        text-[0.84rem] text-muted bg-bg-2 flex-wrap gap-2"
    >
      <span>© 2026 Nicolas Velasco</span>
      <span>Hecho con ☕ y mucho código</span>
    </footer>
  );
}
