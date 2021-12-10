const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = { /** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
  mode: 'jit',
  content: ['./{components,pages}/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'black-pearl': '#091921',
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
