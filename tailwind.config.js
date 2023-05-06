/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBlue : '#00C7FF'
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

