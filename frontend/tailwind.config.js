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
        primary: "#66ff00",
        secondary: "#f9fcff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [require("daisyui"),
 
  ],
}