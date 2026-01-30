/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C40C0C',
        secondary: '#CC561E',
        accent: '#FF6500',
        warmred: '#C40C0C',
        warmorange: '#FF6500',
        warmrust: '#CC561E',
        warmgold: '#F6CE71',
      },
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
}

