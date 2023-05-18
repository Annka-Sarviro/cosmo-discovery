/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablet: '768px',
        desctop: '1480px',
      },
      colors: {
        darkBlue: {
          90: '#030204',
        },
        purple: {
          30: '#D4B2FF',
          10: '#E6D5FC',
        },
      },

      boxShadow: {
        accentShadow: '0px 0px 9px #863DF0',
        accentHoverShadow: '0px 0px 9px #B7D3EB',
        buttonShadow: '-1px 1px 8px #863DF0, 8px 1px 12px #863DF0, 0px 9px 14px #9887B5, -19px 0px 29px #BAA5D9, 21px 0px 30px #DAC3FC',
        buttonHoverShadow: '0px 1px 2px #BBD7F1, 1px 1px 10px #BBD7F1, 0px 5px 13px #BBD7F1, -1px 0px 20px #BBD7F1, 1px 0px 23px #BBD7F1',
        slideShadow: '0px 0px 6px #FFFFFF'
      },

      dropShadow: {
        accentShadow: '0px 0px 9px #863DF0',
      },

      textShadow: {
        accentShadow: '0px 0px 20px #863DF0',
        DEFAULT: '0px 0px 9px #863DF0',
        accentHoverShadow: '0px 0px 15px #B7D3EB',
      },

      borderRadius: {
        rad16: '16px',
        rad32: '32px',
      },
      backgroundImage: {
        'hero-background': "url('/hero.png')"
      },
      zIndex: {
        '0': '-1'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
