/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        900: '#002442',
        800: '#0689fc',
        700: '#ffab18',
        600: '#f8f8f8',
        500: '#888888',
        400: '#abb8c2',
        "common": "#1e1e1e",
        "rare": "#ff6600",
        "epic": "#cc00ff",
        legendary: "#efbdff",
        champion: "#f3d40d"
      },
      dropShadow:{
        'contour': '2px 3px 0px rgba(0, 0, 0, 1)',
        'smooth': '0 2px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage:{
        modal: "url('/src/assets/img/bg_modal.jpg')",
        modal_desk: "url('/src/assets/img/bg_modal_desk.jpg')",
        challenge: "url('/src/assets/img/hero_bg_clashroyale.webp')",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

