/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lateef': ['Lateef', 'serif'],
        'inrter': ['Inter Tight', 'sans-serif']
      },
      colors: {
        'astral': '#337099',
        'dark': '#070910',
        'foam': '#d5fbfc',
        'catskill': '#f5f8fa',
        'san-mario': '#3f6b93',
        'cape-code': '#384861',
        'slate-gray': '#788399',
        'caribbean': '#02bcb1'
      }
    },
  },
  plugins: [],
}