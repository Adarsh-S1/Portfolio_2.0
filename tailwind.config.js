/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        neoYellow: '#ffd93d',
        neoCyan: '#66d9ef',
        neoPink: '#ff6b9d',
        neoGreen: '#a8e6cf',
        neoOrange: '#d4843e',
        lightBg: '#d0d0d0',
        darkBg: '#121212',
        darkCard: '#1e1e1e',
        darkBorder: '#333333',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        fira: ['"Fira Code"', 'monospace'],
        caveat: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'neo-sm': '3px 3px 0px #000000',
        'neo': '6px 6px 0px #000000',
        'neo-lg': '12px 12px 0px #000000',
        'neo-dark': '6px 6px 0px #ffffff',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
      }
    },
  },
  plugins: [],
};
