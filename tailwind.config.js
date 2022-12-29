// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      colors: {
        primary: '#5B2EE2',
        primaryLight: '#9479E6',
        secondary: '#078C54',
        secondaryLight: '#14A96B',
        disabled: '#dbdbdb',
      },
    },
  },
  variants: {},
  plugins: [],
};
