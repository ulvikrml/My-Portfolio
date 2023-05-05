const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, variants }) {
  const delayUtilities = {
    '.transition-delay-75': {
      'transition-delay': '75ms',
    },
    '.transition-delay-150': {
      'transition-delay': '150ms',
    },
    '.transition-delay-300': {
      'transition-delay': '300ms',
    },
    '.transition-delay-500': {
      'transition-delay': '500ms'
    },
  };

  addUtilities(delayUtilities, variants('animation-delay'));
});