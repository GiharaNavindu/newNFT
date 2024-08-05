const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js"
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        brandBlue: '#4338CA',
        // New colors based on the image
        'dark-bg': '#0B0C10',
        'teal-accent': '#66FCF1',
        'dark-teal': '#45A29E',
        'light-grey': '#C5C6C7',
        'lighter-dark': '#1F2833',
      },
      backgroundImage: (theme) => ({
        hero: "url('../src/assets/hero.png')",
        hexagon: "url('../src/assets/hexagon.png')",
      }),
    },
  },
  plugins: [nextui()],
}