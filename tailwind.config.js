/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50:  '#faf8f4',
          100: '#f4efe4',
          200: '#e8dcc8',
          300: '#d9c8a8',
          400: '#c9b088',
          500: '#b8966a',
          600: '#9e7d53',
          700: '#7d6142',
          800: '#5e4830',
          900: '#3d2e1c',
        },
        ink: {
          DEFAULT: '#1c1612',
          light: '#3d3128',
          muted: '#6b5c4a',
        }
      },
      fontFamily: {
        serif: ['Manrope', 'system-ui', 'sans-serif'],
        sans:  ['Manrope', 'system-ui', 'sans-serif'],
        mono:  ['Manrope', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
      }
    },
  },
  plugins: [],
}
