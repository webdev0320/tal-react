/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#d2601a',
          'orange-light': '#e8a274',
          'orange-dark': '#b8500e',
          dark: '#1d3c45',
          darker: '#11252b',
          teal: '#004a55', // Added
          'orange-custom': '#e67e22', // Added
          'panel-light-grey': '#f4f4f4', // Added
        },
        bg: {
          light: '#f8f9fa',
          white: '#ffffff',
        },
        text: {
          dark: '#2d3748',
          muted: '#718096',
        }
      },
      spacing: {
        'section-y': '4rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
