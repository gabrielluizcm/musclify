/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto', 'ui-monospace']
    },
    colors: {
      'pine-tree': '#2d2727',
      'onyx': '#413543',
      'lavander-indigo': '#8f43ee',
      'khaki': '#f0eb8d',
      'light-silver': '#d2d8d8',
      'faux-black': '#0a0a0a',
      'salmon': '#ffdbc3'
    }
  },
  plugins: [],
}

