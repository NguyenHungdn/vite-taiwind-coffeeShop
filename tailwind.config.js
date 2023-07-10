/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      screens: {
         xs: '480px',
         // => @media (min-width: 480px) { ... }

         ...defaultTheme.screens,
      },
      extend: {
         fontFamily: {
            Karla: ['Karla', 'sans-serif'],
         },
         backgroundImage: {},
         keyframes: {
            slideDown: {
               '0%': {
                  transform: 'translateY(-100)',
                  '100%': { transform: 'translateY(0)' },
               },
            },

            fadeIn: {
               from: { opacity: 0 },
               to: { opacity: 1 },
            },
         },
         animation: {
            slideDown: 'slideDown .5s ease-in-out',
            fadeIn: 'fadeIn .5s ease-in-out',
         },
      },
   },
   plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
   ],
};
