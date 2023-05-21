/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "50%",
      large: "3rem",
      max: "100rem",
    },
    extend: {
      dropShadow: {
        card: "",
      },
      boxShadow: {
        card: "",
        single: "",
      },
      colors: {
        primary: "#121212",
        secondary: "#303030",
        text: "#FFFFFF",
        redBG: "#CC0000",
        itemBg: "#000000",
      },
      fontFamily: {
        montserrat: ["Poppins", "sans-serif"],
        youtubeSans: ["youtubeSANS"]
      },
    },
    screens: {
      xs: "390px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: ["responsive", "group-hover", "hover", "active", "focus"],
  plugins: [],
};

