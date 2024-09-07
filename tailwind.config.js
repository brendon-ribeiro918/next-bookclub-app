/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'customSm': '321px',
        'customMs': '426px',
        'customMd': '769px',
        'customLg': '1025px',
        'customXl': '1200px',
        'customXXl': '1440px',
        'custom2Xl': '1700px',
        'custom3Xl': '1920px',
      },
      colors: {
        "black-0": "#000000",
        "black-1": "#121212",
        "black-2": "#696969",
        "black-3": "#898989",
        "black-4": "#414141",
        "black-5": "#D9D9D9",
        "white-0": "#ffffff",
        "white-1": "#F3F3F3",
        "red-1": "#ff4342",
        "blue-1": "#5774CD",
        "orange-1": "#FFCD05",
        "orange-2": "#FFB500",
      },
      borderRadius: {
        'none': '0',
        'xsm': '5px',
        'sm': '10px',
        'md': '12px',
        'lg': '20px',
        'xl': '40px',
        'full': '9999px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
