import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        surface: "#141416",
        surface2: "#1B1B1E",
        line: "#26262A",
        gold: "#D4A537",
        goldDim: "#8C7026",
        teal: "#5EC8B8",
        bone: "#EDEAE3",
        muted: "#8C8980",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
