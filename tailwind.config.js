/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite", // Keep only the meteor animation
      },
      
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(250deg) translateX(0)", opacity: 1 },
          "100%": {
            transform: "rotate(250deg) translateX(-600px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
