/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Manrope', 'sans-serif']
      },
      colors: {
        offWhite: '#FBFBFB',
        primary: {
          500: '#2C66FE',
          600: '#0247FE',
          700: '#023BD4',
          800: '#012FA9'
        },
        secondary: {
          50: '#444444',
          60: '#1E1E1E',
        }
      },
      screens: {
        '2xl': '1440px',
      },
      Containers: {
        "2xl": "1440px",
      },
      clipPath: {
        myPolygon: 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)',
      },
      dropShadow: {
        '3xl': '0px 4px 24px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

