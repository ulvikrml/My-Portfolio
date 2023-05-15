/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: '540px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        mainBlue: {
          DEFAULT: '#00C7FF',
          'light': '#00698F'
        },
        textGray: '#7b89a8',
        bgBlue: '#000A1F'
      },
      padding: {
        'sm': '6px',
      },
      margin: {
        34: '132px'
      }, 

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

