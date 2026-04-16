/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#050505",
          lighter: "#0A0A0A",
          lightest: "#111111",
        },
        primary: {
          DEFAULT: "#FF0000",
          glow: "rgba(255, 0, 0, 0.4)",
        },
        accent: {
          red: "#E63946",
          dark: "#1A1A1A",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
