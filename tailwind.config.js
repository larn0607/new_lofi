/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'intro': "#14141d",
        'light': '#f3a952',
        'dark': '#8b8aa2',
        "bgd-100": "hsla(0,0%,7%,.75)",
      }
    },
  },
  plugins: [],
}