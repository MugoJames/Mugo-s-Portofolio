/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
        'white-2': 'hsl(0, 0%, 98%)',
        'jet': 'hsl(0, 0%, 22%)',
        'light-gray': 'hsl(0, 0%, 84%)',
        'eerie-black-2': 'hsl(240, 2%, 12%)',
        'onyx': 'hsl(240, 1%, 17%)',
        'orange-yellow-crayola': 'hsl(45, 100%, 72%)',
        'smoky-black': 'hsl(0, 0%, 7%)',
        'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
        customGray: '#282925',


      },
      boxShadow: {
        'shadow-1': '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
      },
      zIndex: {
        '1': '1',
      },
      backgroundImage: {
        'border-gradient-onyx': 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
      },
      
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.icon-box': {
          '--ionicon-stroke-width': '35px',
        },
      });
    },
  ],
}