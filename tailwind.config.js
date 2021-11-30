

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "customBlue": "#134AE9",
        "darkPurple": "#1B263A",
        "background": "#E5E5E5",
        "gradientEnd": "#DCEFF9",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
