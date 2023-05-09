/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBlue : {
          DEFAULT : '#00C7FF',
          'light' : '#00698F'
        },
        textGray : '#7b89a8'
      },
      padding: {
        'sm': '6px',
      },
      margin: ['hover'],
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(3px)' },
        }
      },
      animation: {
        imgbounce: 'wiggle 2s ease-in-out infinite',
      },
      rotate: {
        '360': '360deg',
      },
      zIndex: {
        'minus': '-1',
      },
      borderWidth: {
        'xs': '0.5px',
      }
    },
  },
  
  variants: {
    extend: {
      animationDelay: ['hover', 'group-hover'],
    },
  },
  plugins: [
  ],
}

