

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
        primary: "#06DBFF",
        mate_black: "#28282B",
        secondary: "#e7eff9",
        perfect_blue: "#2234ae",
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
      Quicksand: ["Quicksand", "sans-serif"],
      Allura: ["Allura", "cursive"],
      Jost: ["Jost", "sans-serif"],
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}