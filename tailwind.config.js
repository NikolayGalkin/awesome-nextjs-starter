const { coolGray } = require('tailwindcss/colors')

module.exports = { /** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gary: coolGray,
        'black-pearl': '#091921',
      },
      fontFamily: {
        // sans: ['Poppins', 'sans-serif'],
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
