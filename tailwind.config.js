module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode using the class strategy
  theme: {
    extend: {
      colors: {
        'true-black': '#000000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
