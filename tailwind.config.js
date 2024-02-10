/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "1364px" },
      // => @media (min-width: 640px) { ... }
      // max360: "1200px",
      max360: { max: "951px" },
      max467: { max: "467px" },
      max400: { max: "400px" },
      max500: { max: "500px" },
      max550: { max: "550px" },
      max1200: { max: "1200px" },
      max767: { max: "767px" },
      max1200: { max: "1200px" },
      min1300: { min: "1200px" },
      max400: { max: "400px" },
      max1056: { max: "1056px" },
      maxWeb1: { min: "1920px" },
      maxWeb2: "2560px",
      maxWeb3: "3840px",
      maxWeb4: "3440px",
      // min951: {'min': '952px'},
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        Slide: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "rotate(translateX(-50%))" },
        },
      },
    },
    animation: {
      slideIn: "Slide .8s ease-in-out forwards",
    },
  },
  plugins: [],
};
