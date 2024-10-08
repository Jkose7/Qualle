/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        taviraj: ["Taviraj", 'serif'],
        merriweather: ["Merriweather Sans", 'sans-serif'],
        nunito: ["Nunito Sans", 'sans-serif'],
      },
      colors: {
        'darke': '#0a0a0a',
        'dark-gray': '#363434',
        'light-gray': '#d9d9d9',
        'purple': '#8561e2',
        'dark-purple': '#49357c' // no poner hexadecimales con letras en mayuscula
      },
    },
  },
  plugins: [],
}