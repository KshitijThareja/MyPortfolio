/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
      'hide1': {'max': '960px'},
    },
    colors:{
      'gray-nav':'#1c1c1c',
      'white-nav':'#ebf0ec',
      'dark-bg': '#111111', // Dark background color
      'gray-400':'#9ca3af',
      'black': '#000000', // Black text color
      'white': '#FFFFFF', // White text color

      // Accent colors
      'green': "#2ECC71", // Green accent color
      'orange': '#E67E22', // Orange accent color

      // Neutral colors
      'gray': '#777777',// Gray text color
      'light-gray': '#AAAAAA', // Light gray text color
      'dark-gray': '#333333', // Dark gray text color
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
