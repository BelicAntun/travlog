/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'text-color': '#252B42',
          'black-75': '#191825BF',
          dark: '#222831',
          'gray-black': '#191825',
          'gray-black-50': '#19182580',
        },
        secondary: {
          DEFAULT: '#F85E9F',
          dark: '#0C111F',
          'dark-60': '#0C111F99',
          'dark-28': '#0C111F47',
          yellow: '#FACD49',
          title: '#2D3134',
          subtitle: '#5B5F62',
          purple: '#816AFF',
          smoke: '#F7F7F780',
        },
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      leading: {
        0: '0',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    plugins: [],
  },
};
