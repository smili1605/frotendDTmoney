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
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)'],
      },
      colors: {
        "title": "var(--title)",
        "income": "var(--income)",
        "outcome": "var(--outcome)",
        "header": "var(--header)",
        "list-header": "var(--list-header)",
        "income-value": "var(--income-value)",        
        "button" : "var(--button)",
        "modal" : "var(--modal)",
        "input" : "var(--input)",
      },
    },
  },
  plugins: [],
};
export default config;
