/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {

    extend: {
      colors: {
        primary: { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e", "950": "#082f49" }
      },
      screens: {
        'xsm': '320px',
        'o' : '0px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}