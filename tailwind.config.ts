import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#302f2f",
        foreground: "var(--foreground)",
        primary: "#202225",
        secondary: "#d1d5db",
        icon: "#f43f5e"
      },
      backgroundImage: {
        'triangles': "url('/background.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
