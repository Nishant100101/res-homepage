/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGold: "#B48E40",
      },
      fontFamily: {
        arima: ["Arima", "sans-serif"],
      },
      screens: {
        "xl-1451": "1451px",
      },
    },
  },
  plugins: [],
};

/* Created by Nishant */
