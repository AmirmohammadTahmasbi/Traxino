/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        yekanbakh: ["YekanBakh", "sans-serif"],
      },
      colors: {
        primary: "#ff3333",
        primaryGray: "#ff3333ae",
        black: "#323232",
        backGround: "#EDF3F9",
      }
    },
  },
  plugins: [],
};
