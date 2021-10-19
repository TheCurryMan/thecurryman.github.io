module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
