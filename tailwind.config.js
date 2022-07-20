/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#094067",
        "second-blue": "#5F6C7B",
        "main-gray": "#D9D9D9",
      },
      fontFamily: {
        Changa: ["Changa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
