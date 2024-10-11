/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#F2F3F4",
        customTeal: "#28B3A3",
        customTealDark: "#168073",
        customTealLight: "#81CEBC",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
