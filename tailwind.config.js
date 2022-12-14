/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '6rem'
      }
    },
    screens: {
      mobile: '640px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px'
    },
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