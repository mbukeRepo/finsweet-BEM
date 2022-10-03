/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        lightGray: "rgb(234,237,237)",
        darkBlue: "#131921",
        newOrange: "#FEBD69",
        lightBlue: "#232F3E",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      textColor: {
        primary: "#1D2130",
      },
      backgroundColor: {
        primary: "#1D2130",
      },
      fontWeight: {
        bolder: 700,
      },
      borderColor: {
        primary: "#1D2130",
      },
    },
  },
  plugins: [],
};
