// JCC/frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': { // For checkmark icon
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-up-fade-in': { // For success message container
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'scale-up-fade-in': 'scale-up-fade-in 0.6s ease-out forwards',
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        'primary-blue': '#4F46E5', // A more vibrant, slightly darker blue
        'primary-blue-light': '#6366F1', // NEW: Lighter shade for hover states
        'accent-yellow': '#FBBF24', // A bright accent color for highlights
        'dark-background': '#1A202C', // Very dark background for main body
        'dark-panel': '#2D3748',     // Slightly lighter dark for sections/cards/panels
        'text-light': '#F7FAFC',    // Near white text for readability on dark backgrounds
        'text-muted': '#A0AEC0',    // Muted text for secondary info
        'white': '#FFFFFF',         // Pure white
        'black': '#000000',         // Pure black
      },
    },
  },
  plugins: [],
}