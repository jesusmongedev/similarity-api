/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1360px",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        lightGold: "#f5bc51",
        darkGold: "#533519",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
