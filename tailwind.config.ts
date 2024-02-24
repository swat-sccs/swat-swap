import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#31425f",
        "page-bg": "#d1d1d1",
        "card-bg": "#f1f1f1",
        accent: "#f46523",
        "alt-blue": "#364a6d",
        "dark-blue": "#161e2c",
        'bg-1': '#D1D1D1',
        'bg-2': '#E1E1E1',
      },
    },
  },
  plugins: [],
};
export default config;
