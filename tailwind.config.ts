const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "chula-charas-regular": [
          "ChulaCharasNewReg",
          ...defaultTheme.fontFamily.sans,
        ],
        "chula-charas-bold": [
          "ChulaCharasNewBold",
          ...defaultTheme.fontFamily.sans,
        ],
        "chula-charas-italic": [
          "ChulaCharasNewIta",
          ...defaultTheme.fontFamily.sans,
        ],
        "chula-charas-bold-italic": [
          "ChulaCharasNewBoldIta",
          ...defaultTheme.fontFamily.sans,
        ],
        "chula-longkorn-regular": [
          "CHULALONGKORNReg",
          ...defaultTheme.fontFamily.sans,
        ],
        "chula-longkorn-bold": [
          "CHULALONGKORNBold",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: "#E26385", // Replace with your desired primary color
        secondary: "#6B7280", // Replace with your desired secondary color
      },
    },
  },
  plugins: [],
};
