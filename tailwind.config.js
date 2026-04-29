/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0A",
          card: "#121212",
          elev: "#161616",
        },
        primary: {
          DEFAULT: "#FF2D2D",
          deep: "#C81818",
          glow: "rgba(255,45,45,0.5)",
        },
      },
      fontFamily: {
        display: ['"Archivo Narrow"', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
