/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: ' #333333ff',
        Color2: '#d5ccc7ff',
        Color3: '#a9a29cff',
        Color4: '#28262bff',
      },
      fontFamily:{
        logoname:' "Quattrocento", serif;',
       paragraph: '"Source Sans 3", sans-serif;',
       Head: '"Poppins", sans-serif;'

      },
     
    },
  },
  plugins: [],
}