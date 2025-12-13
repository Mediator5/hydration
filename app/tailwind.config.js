/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFFAE5",
          100: "#FFF3BF",
          200: "#FFE999",
          300: "#FFDD66",
          400: "#FFD233",
          500: "#FFC700", // mid-gold
          600: "#DAA520", // goldenrod / darker gold
          700: "#B8860B",
          800: "#8B6508",
          900: "#593F04",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};


