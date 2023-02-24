/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF0000",
      },
    },
  },
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [require("@tailwindcss/line-clamp")],
};
