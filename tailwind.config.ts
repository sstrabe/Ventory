import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        foreground: "var(--foreground)",
        primary: "#202225",
        secondary: "#d1d5db",
        icon: "#f43f5e"
      },
    },
  },
  plugins: [],
};
export default config;