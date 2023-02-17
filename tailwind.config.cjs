/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'barbershop-color': '#9C9524',
        'barbershop-color-brown': '#9C5924',
        'barbershop-color-black': '#050202',
      },
      fontFamily:{
        'abril': ['"Abril Fatface"', 'cursive'],
        'caveat': ['"Caveat"', 'cursive'],
        'courgette': ['"Courgette"', 'cursive'],
        'crimson': ['"Crimson Text"', 'serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
        'greatv': ['"Great Vibes"', 'cursive'],
        'lobster2': ['"Lobster Two"', 'cursive'],
        'pt-serif': ['"PT Serif"', 'serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        }
      },
      animation: {
          'fade-in-down': 'fade-in-down 5s ease-out'
      },
    },
  },
  plugins: [],
}
