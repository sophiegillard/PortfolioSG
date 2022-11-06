/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./*.{html,js}']
  },
  theme: {
    scale: {
      '0': '0',
    },
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
      colors: {
        'icon-color': '#B58ECC',
        'accent': '#002A8F',
        'bluefade': '#0043E0',
        'gradient': '#00B5F5',
        'greenBorder': '#77FF33FF',
        'blueBorder': '#33BBFFFF',
        'blueButtonLight':'#569fc7',
        'form-input' : '#1E1D1DFF',
        'gradient-first':'#DCF8EF',
        'gradient-second':'#FEE2F8',
        'background-light':'#FFF9F9',
        'background-via':'rgb(255,249,249)',
        'background-shade':'rgba(255,249,249,0.85)',
        'green-pastel':'#7dc06b',
        'pink-pastel':'#fff1f4',
        'yellow-pastel':'#FAF4B7',
        'font-main-color':'#1e1d1d',
        'font-title-cart':'#718fda'

      },
      backgroundImage: {
        'aquarel-border': "url('../assets/images/aquarelBorder.jpg')"
      },
      rotate: {
        '20': '30deg'
      },
      margin: {
        '120px': '120px'
      },
      spacing: {
        '160px' : '160px'
      },
      screens: {
        's': '400px',
        'l': '920px',
        '3xl' : '1900px'
      },
      height:{
        'h-94vh' : '94vh'
      }
    },
  }
}
