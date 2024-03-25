/** @type {import('tailwindcss').Config} */

const projectColors = {
  "base-black": "#090909",
  "base-green": "#5CC758",
  "base-light-green" : "#C8FFC6",
  "base-white": "#FEFEFE",
  "base-red": "#A10606",
  "base-black-60": "rgba(9, 9, 9, 0.6)",
  "base-white-65": "rgba(254, 254, 254, 0.65)"
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Noto Sans'", "sans-serif"]
      },
      colors: projectColors,
      backgroundColor: projectColors,
      gridTemplateColumns: {
        'responsive-grid': 'repeat(auto-fit, minmax(340px, 1fr))'
      }
    },
  },
  plugins: [],
}

