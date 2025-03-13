/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#001f3f",
        skyBlue: "#87ceeb",
        green: "#28a745",
        white: "#ffffff",
      },
      fontFamily: {
        knockout: ['"Bebas Neue"', "sans-serif"],
      },
      // You can add additional animation keyframes here if needed.
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
