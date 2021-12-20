module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'

  theme: {
    colors: {
      primary: `#3F0366`,
      secondary: `#EBA40C`,
      contact: `#818181`,
      white: `#fff`,
      dark: `#000`,
    },

    fontFamily: {
      display: ['Changa', 'sans-serif'],
      body: ['Changa', 'sans-serif'],
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },

    fontSize: {
      'heading': '40px',
      'help': '30px',
      'meal': '25px',
      'services': '22px',
      'desc': '18px',
      'paragraph': '16px',
      'copyrights': '15px',
      'followUs': '14px',
    },

    container: {
      center: true,
      padding: '15px',
    },

    zIndex: {
      'min': -1,
      'max': 99,
      'full-max': 999,
    },

    lineHeight: {
      'heading': '74px',
      'subtitle': '50px',
      'paragraph': '30px',
      'footer': '25px',
      'head': '21px',
    },

    width: {
      'full': '100%',
      'fit-content': 'fit-content',
      'half': '60%',
      'semi-half': '70%',
      'meal': '260px',
      'logo': '169.37px',
      'btn': '165px',
      'dish': '150px',
      'card': '120px',
      'help': '50px',
      'social': '35px',
      'navIcon': '20px',
    },

    height: {
      'full': '100%',
      'half': '50%',
      'header': '350px',
      'meal': '260px',
      'dish': '150px',
      'card': '100px',
      'logo': '70px',
      'help': '50px',
      'btn': '45px',
      'social': '35px',
      'navIcon': '20px',
    },

    borderRadius: {
      'circle': '50%',
      'btn': '32px',
      'input': '25px',
      'card': '20px'
    }
  },

  variants: {},

  plugins: [
    // require('tailwindcss-logical'),
    // require('tailwindcss-dark-mode')()
  ],

  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ]
}
