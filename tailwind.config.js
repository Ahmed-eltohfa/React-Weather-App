/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloudy: {
          back: '#57d0cb',
          front: '#5fdddc'
        },
        sunny: {
          back: '#e7b175',
          front: '#f6bc7c'
        },
        snowy: {
          back: '#c1effd',
          front: '#b2f5f9',
        },
        rainy: {
          back: '#5fc0ea',
          front: '#66d3fc'
        },
        main: {
          back: '#20509e',
          front: '#413d58'
        },
      }
    },
  },
  plugins: [],
}

