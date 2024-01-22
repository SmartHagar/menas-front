/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  // FFECD6
  // 4CB9E7
  // 3559E0
  // 0F2167
  theme: {
    extend: {
      colors: {
        "menu-active": "#0F2167",
        "btn-primary": "#3559E0",
        primary: "#4CB9E7",
        secondary: "#FFECD6",
        "color-1": "#0B090A",
        "color-2": "#ffffff",
        "color-3": "#808080",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        puskesmas: "url('/images/puskesmas.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
