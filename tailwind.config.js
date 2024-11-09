/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#121414',
      },
      // gradient:{
      //   linear: ['bg-gradient-to-r from-[#F5BD4D] to-[#F89222]'],
      // },
    },
  },
  plugins: [],
}

