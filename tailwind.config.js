/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5BAFE5',
        'primary-dark': '#4a8dc2',
        secondary: '#1F2937', // Dark Gray for text
        accent: '#F3F4F6', // Light Gray for backgrounds
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(91, 175, 229, 0.5)',
      },
    },
  },
  plugins: [],
};
