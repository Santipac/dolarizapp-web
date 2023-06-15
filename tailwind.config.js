/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greeny': '#BEFF6C',
        'orange': '#FC7339',
        'dark': '#1E1E1E',
        'grey': '#EFEFEF',
        'yellow': '#FFF172',
        'magenta': '#FD9FDD',
        'violet': '#AF96FB',
        'reddy': '#FF5959',
        'turquoise': '#49DBC8'
      },
      fontFamily: {
        'sans': 'Work Sans',
        'body': 'Inter'
      },
      boxShadow: {
        'button': '2px 2px 0px #000000'
      }
    },
  },
  plugins: [],
}

