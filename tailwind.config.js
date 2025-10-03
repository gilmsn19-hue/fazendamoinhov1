/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fazenda': {
          'white': '#fefefe',
          'green': '#37614e',
          'gray': '#727474',
          'sage': '#c8d0cd',
          'dark-brown': '#512500'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'caveat': ['Caveat', 'cursive']
      }
    },
  },
  plugins: [],
};