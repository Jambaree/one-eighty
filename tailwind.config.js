/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: {
    jit: true, // uncomment this line to enable JIT mode
  },
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E0092D",
      },
      keyframes: {
        slideOutLeft: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(-250%, 0, 0)",
          },
        },
        slideOutRight: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": {
            visibility: "hidden",
            transform: "translate3d(250%, 0, 0)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideOutLeft: "slideOutLeft 8s ease forwards",
        slideOutRight: "slideOutRight 8s ease forwards",
        fadeIn: "fadeIn 2s ease forwards",
      },
    },
  },
  plugins: [],
}
