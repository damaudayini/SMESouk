module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#DA0021",
          light: "#FCE8EBs",
          dark: "#9E1127",
        },
        secondary: "#FFF5D5",
        accent: "#AFEAF2",
        neutral: {
          100: "#FFFCFD",
          200: "#F7F0F1",
          300: "#EBE4E5",
          400: "#D6D0D1",
          500: "#BAB3B4",
          600: "#8A8485",
          700: "#575152",
          800: "#332F30",
          900: "#1F1C1C",
        },
        border: "#EBE4E5",
      },
      fontFamily: {
        titi: ["Titillium Web", "sans-serif"],
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        inp: "512px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
