import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#080807",
        cream: "#f3ecd7",
        concrete: "#81817a",
        freight: "#d12e22",
        rust: "#c1662e",
        safety: "#ffd326",
        cyan: "#00d9ff",
        lime: "#b6ff2b"
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        hard: "8px 8px 0 #080807",
        glow: "0 0 28px rgba(0, 217, 255, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
