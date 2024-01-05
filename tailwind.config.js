import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F4AF3",
        secondary: "#F5F7FE",
        light100: "#F5F7FE",
        light200: "#A0B2FB",
        light300: "#A3A3A3",
        darkBlue: "#E7ECFE",
      },
      screens: {
        // SH
        laptop: "1500px",
        tab: "850px",
      },
      fontSize: {
        x2s: "15px",
        xs: "20px",
        sm: "25px",
        m2d: "30px",
        md: "40px",
        lg: "60px",
        // SH
        mf: "18px",
        lf:"40px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
