import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#EBE9FC",
        background: "#040404",
        "background-secondary": "#131313",
        neutral: "#2F2F2F",
        accent: "#0600C2",
        red: "#791F1F",
        "red-secondary": "#150E0E",
        green: "#21791F",
        "green-secondary": "#11140D",
        "buttons-primary": "#3A31D8",
        "buttons-secondary": "#252342",
      },
    },
  },
  plugins: [],
} satisfies Config;
