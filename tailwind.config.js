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
        sans: ["Roboto", "sans-serif"],
      },
      textColor: {
        primary: "#1D2130",
      },
      borderColor: {
        success: "#E0E4FC",
      },
      backgroundColor: {
        primary: "#1D2130",
        secondary: "#2b2e3c",
        success: "#E0E4FC",
        danger: "#d798e126",
        lightGray: "#F0F2FE",
        veryLightBlue: "#D3FDFF"
      },
      fontWeight: {
        bolder: 700,
        normal: 400,
      },
      borderColor: {
        primary: "#1D2130",
      },
      fontSize: {
        xs: ["16px", "150%"],
        sm: ["18px", "150%"],
        md: ["24px", "140%"],
        lg: ["36px", "120%"],
        xl: ["48px", "120%"],
        "2xl": ["56px", "110%"],
      },
    },
  },
  plugins: [],
};
