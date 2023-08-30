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
      xs: '380px',
      s: '460px',
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
        33: '131px',
        34: '132px',
        46: '186px'
      }, 

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(3px)' },
        },
        fade: {
          '0%' : {opacity: '0', transform : 'scale(4) translateY(0)'},
          '100%' : {opacity: '1', transform : 'scale(1) translateY(0)'}
        }
      },
      animation: {
        imgbounce: 'wiggle 2s ease-in-out infinite',
        heroFade: 'fade 1.5s cubic-bezier(.87,0,.13,1)'
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

