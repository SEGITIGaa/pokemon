/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-bg" : "url(/card-bg.png)",
        "section-bg" : "url(/section-bg.png)",
        "intro-bg" : "url(/intro-bg.png)",
      },
      fontFamily: {
        "poppins" : "Poppins"
      },
      colors: {
        "main" : "#1e1e1e",
        "second" : "#FFCB05",

      }
    },
  },
  plugins: [],
}