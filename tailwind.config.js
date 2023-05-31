/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#124375",
        secondary: "#BDD632",
        tertiary: "rgba(190, 176, 214, 0.2)",
        quaternary: "#BEB0D6",
        quinary: "rgba(190, 176, 214, 0.7);",
        sextarian: "#5D3A99",
        forHover: "#306FB0",
      }
    },
  },
  plugins: [],
}

