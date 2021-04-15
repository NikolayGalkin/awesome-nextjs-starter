const { coolGray } = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: coolGray,
        'black-pearl': '#091921',

        background: '#f2f2f2',
        primary: '#fa4a0c',
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
