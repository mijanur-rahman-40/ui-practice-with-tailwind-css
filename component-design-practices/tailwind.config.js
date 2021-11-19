module.exports = {
  purge: [],
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover', 'focus-within', 'hover', 'focus', 'active'],
      fontSize: ['hover'],
      translate: ['hover', 'active'],
    },
  },
  plugins: [],
}
