/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primarygreen':'#079211',
        'seconadarywhite':'#FFFFFF',
        'grey':'#808080',
        'deepdark':'#050507',
        'lightdark':'#313131',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}