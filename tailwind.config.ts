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
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        pixel: ["var(--font-pixel)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
