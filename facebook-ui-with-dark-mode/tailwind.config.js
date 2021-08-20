module.exports = {
  plugins: [ ],
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      colors: {
        'dark-main': '#18191A',
        'dark-second': '#242526',
        'dark-third': '#3A3B3C',
        'dark-txt': '#B8BBBF'
      }
    },
  },
  variants: {
 extend: {
      display: ['group-hover'],
      transform: ['group-hover'],
      scale: ['group-hover']
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
