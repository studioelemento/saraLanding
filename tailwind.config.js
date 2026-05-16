/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#002B5B',
        'secondary-blue': '#007BFF',
        'accent-gold': '#F4B41A',
        'dark-footer': '#001A3D',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'hero-bg': "linear-gradient(to right, rgba(0,43,91,0.2) 0%, rgba(0,0,0,0) 30%, rgba(0,43,91,0.9) 100%), linear-gradient(to top, #002B5B 0%, rgba(0,43,91,0) 40%), url('/Cabin Crew welcoming image for contact page.png')",
        'hero-bg-mobile': "url('/mobileViewhero.png')",
        'right-texture': "radial-gradient(circle at right top, rgba(255,255,255,0.03) 0%, transparent 40%), radial-gradient(circle at left bottom, rgba(255,255,255,0.03) 0%, transparent 50%)",
      }
    },
  },
  plugins: [],
}
