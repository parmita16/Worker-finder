/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          light: "#EAF6FF",   
          DEFAULT: "#2E9BE6", 
          deep: "#0B4F8A",    
        },
        navy: {
          DEFAULT: "#0F2A4A", 
          dark: "#060B14",    
        },
        amber: {
          light: "#F3C98A",
          DEFAULT: "#D98E3B", 
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"], 
        body: ["Inter", "sans-serif"],  
      },
    },
  },
  plugins: [],
};
