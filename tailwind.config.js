const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      80: ".80",
      85: ".85",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    extend: {
      colors: {
        sicesiBlue: "#00A3E0",
        sicesiOrange: "#F8853F",
        sicesiGray: "#374151",
        footerGray: "#A4AFC1",
        lightBlue: colors.lightBlue,
        orange: colors.orange,
        blueGray: colors.blueGray,
      },
      boxShadow: {
        inner: "inset 0px 1px 3px #C4D0DD",
      },
      screens: {
        hd: { raw: "(min-height: 600px)" },
        fhd: { raw: "(min-height: 900px)" },
        qhd: { raw: "(min-height: 1200px)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
