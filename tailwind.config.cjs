const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        dark: '#2C1810',
        light: '#FFF8F0',
        accent: '#D4A574',
        black: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
};