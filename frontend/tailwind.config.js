const { Allura } = require('next/font/google');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{html,js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F27546",
        secondary: "#e7eff9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand","sans-serif"],
      
    },
  },
  plugins: [require("daisyui"),
 
  ],
}