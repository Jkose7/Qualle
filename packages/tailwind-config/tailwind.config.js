/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'dark': '#0a0a0a',
      'light': '#ffffff',
      'dark-gray': '#363434',
      'light-gray': '#d9d9d9',
      'purple': '#8561e2',
      'dark-purple': '#49357C'
    },
    extend: {},
  },
  plugins: [],
}