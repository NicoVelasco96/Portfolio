"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type Translations } from "@/i18n/translations";

interface AppContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  isDark: boolean;
  toggleDark: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    const savedDark = localStorage.getItem("dark") === "true";
    if (savedLocale) setLocaleState(savedLocale);
    if (savedDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("dark", String(next));
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale],
        isDark,
        toggleDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
