import type { Config } from "tailwindcss";

const config: Config = {
  // 1. IMPORTANTE: Agregamos esta línea para habilitar el modo oscuro por clase
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        // 2. CONEXIÓN: Ahora 'bg-2' no es un color fijo, es la variable de tu CSS
        bg: {
          DEFAULT: "var(--bg)",
          2: "var(--bg2)",
          3: "var(--bg3)",
        },
        card: "var(--card)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: {
          green1: "#baf2bb",
          green2: "#baf2d8",
          blue: "#bad7f2",
          pink: "#f2bac9",
          cream: "#f2e2ba",
          pacificblue: '#58A4B0',
          mutedteal: '#92B6B1',
          aquamarine: '#ACFCD9'
        },
        brand: {
          pink: "#bf6a7a",
          "pink-dark": "#a05568",
          "pink-text": "#7a2840",
        },
      },
      borderColor: {
        DEFAULT: "var(--border)", // Usamos la variable de borde también
      },
      animation: {
        pulse: "pulse 2s infinite",
        "float-up": "floatUp 0.6s ease forwards",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;