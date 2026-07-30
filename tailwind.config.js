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
      boxShadow: {
        // a softer, warmer shadow than Tailwind's default grey ones -
        // tinted with the navy so it feels native to the palette
        soft: "0 2px 8px -2px rgba(15,42,74,0.08), 0 8px 24px -8px rgba(15,42,74,0.10)",
        "soft-lg": "0 4px 16px -4px rgba(15,42,74,0.10), 0 16px 40px -12px rgba(15,42,74,0.16)",
        glow: "0 0 0 4px rgba(46,155,230,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};