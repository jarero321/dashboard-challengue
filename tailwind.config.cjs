/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-default': '#F2F1F6',
        'bg-secondary': '#EFEFF0'
      }
    },
  },
  plugins: [],
}
