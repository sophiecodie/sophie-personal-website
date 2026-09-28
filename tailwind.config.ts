import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // core palette — see README for how these were chosen
        "brand-blue": "#3549FC",
        "brand-yellow": "#FFE600",
        navy: "#12163A", // dark navy for the fixed nav rail + body text on yellow
        cream: "#FFF6D8", // off-white/cream text on blue sections
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sway: {
          from: { transform: "rotate(-4deg)" },
          to: { transform: "rotate(4deg)" },
        },
        drift: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-40px)" },
        },
      },
      animation: {
        bob: "bob 3.2s ease-in-out infinite",
        sway: "sway 4s ease-in-out infinite alternate",
        drift: "drift 14s ease-in-out infinite alternate",
        "drift-slow": "drift 22s ease-in-out infinite alternate-reverse",
      },
      fontFamily: {
        // both point at Pixelify Sans, so existing `font-pixel` classes still work
        sans: ["var(--font-pixel)", "monospace"],
        pixel: ["var(--font-pixel)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
