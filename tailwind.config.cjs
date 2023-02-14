/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      one: '#FFF06D',
      two: '#0F938C',
      three: '#20707E',
      four: '#FFFDEE',
      five: '#16505B',
    },
    extend: {
      fontFamily: {
        paragraph: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ],
        title: ['Yeseva One', 'serif'],
      },
    },
  },
  plugins: [],
};
