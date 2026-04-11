import type { Config } from "tailwindcss";

const config: Config = {
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
        bg: {
          DEFAULT: "#f8fbf6",
          2: "#eef8ea",
          3: "#e4f2e0",
        },
        card: "#ffffff",
        text: "#253225",
        muted: "#5e7560",
        accent: {
          green1: "#baf2bb",
          green2: "#baf2d8",
          blue: "#bad7f2",
          pink: "#f2bac9",
          cream: "#f2e2ba",
        },
        brand: {
          pink: "#bf6a7a",
          "pink-dark": "#a05568",
          "pink-text": "#7a2840",
        },
      },
      borderColor: {
        DEFAULT: "rgba(0,0,0,0.08)",
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
