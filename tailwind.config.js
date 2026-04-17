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
          DEFAULT: "#030305",
          lighter: "#080810",
          lightest: "#0E0E18",
          card: "#0A0A14",
        },
        primary: {
          DEFAULT: "#FF0000",
          light: "#FF3333",
          dark: "#CC0000",
          glow: "rgba(255, 0, 0, 0.4)",
        },
        accent: {
          red: "#E63946",
          purple: "#2A0845",
          dark: "#1A1A2E",
          blue: "#0A1628",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255, 0, 0, 0.15)',
        'glow': '0 0 30px rgba(255, 0, 0, 0.2), 0 0 60px rgba(255, 0, 0, 0.1)',
        'glow-lg': '0 0 60px rgba(255, 0, 0, 0.3), 0 0 120px rgba(255, 0, 0, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
