/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mountains: ['"Mountains of Christmas"', 'cursive'], // Add your font here
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        md: '4px 4px 8px rgba(0, 0, 0, 0.25)',
        lg: '6px 6px 12px rgba(0, 0, 0, 0.25)',
      },
      components: {
       
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: '#D8993C', // Primary color (gold-like shade)
          light: '#FBBF24',   // Lighter shade of gold
          dark: '#B45309',    // Darker shade of gold
        },
        secondary: {
          DEFAULT: '#85C42D', // Secondary color (green)
          light: '#F7FFEC'
        },
      },
      // Customizing styles for input fields
      borderRadius: {
        'input': '0.375rem', // Default rounded corners for inputs
      },
    },
  },
  plugins: [],
};
