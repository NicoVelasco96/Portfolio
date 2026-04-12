// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Velasco – Dev Portfolio",
  description:
    "Desarrollador Backend apasionado por construir productos web modernos, escalables y con buena experiencia de usuario.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
