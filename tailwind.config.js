/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloudy: {
          back: '#6B8FA8',
          front: '#8DABB4'
        },
        sunny: {
          back: '#FFD700',
          front: '#FFA500'
        },
        snowy: {
          back: '#87CEEB',
          front: '#B0E0FF',
        },
        rainy: {
          back: '#2D5A8C',
          front: '#4A7CB8'
        },
        main: {
          back: '#1a1a2e',
          front: '#0f3460'
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

