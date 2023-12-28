/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
      dropShadow: {
        'contour': '2px 3px 0px rgba(0, 0, 0, 1)',
        'smooth': '0 2px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        modal: "url('/src/assets/img/bg_modal.jpg')",
        modal_desk: "url('/src/assets/img/bg_modal_desk.jpg')",
        challenge: "url('/src/assets/img/hero_bg_clashroyale.webp')",
        footer: 'linear-gradient(180deg, #245fc6 1%, #2887f0)',

        'gradient-common': 'linear-gradient(to top, #1e1e1e, #002442)',
        'gradient-rare': 'linear-gradient(to top, #ff6600, #002442)',
        'gradient-epic': 'linear-gradient(to top, #cc00ff, #002442)',
        'gradient-legendary': 'linear-gradient(to top, #efbdff, #002442)',
        'gradient-champion': 'linear-gradient(to top, #f3d40d, #002442)',
      }, keyframes: {
        open: {
          from: {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
      }, animation: {
        open: 'open 0.3s ease-out',
      },
    },
  },
  safelist: [
    'bg-common',
    'bg-rare',
    'bg-epic',
    'bg-legendary',
    'bg-champion',

    'text-common',
    'text-rare',
    'text-epic',
    'text-legendary',
    'text-champion',

    'border-common',
    'border-rare',
    'border-epic',
    'border-legendary',
    'border-champion'
  ],
  plugins: [require('tailwind-scrollbar-hide')],
}

