/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{tsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [  require('@tailwindcss/forms'),],
}
