/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#053856",
        "secondary": "#013859",
        "tertiary": "#F7931E",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
