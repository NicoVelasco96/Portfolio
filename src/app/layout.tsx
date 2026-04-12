import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

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
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}