/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0a1a35",
        primaryLight: "#1e3a8a",
        accent: "#00d0ff",
        accentGlow: "#00a2ff80",
        surface: "#0d0d0d",
        surfaceGlass: "rgba(255,255,255,0.06)",
        text: "#ffffff",
        textMuted: "#a0a0a0",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Orbitron", "monospace"],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00d0ff, 0 0 10px #00d0ff, 0 0 15px #00d0ff' },
          '100%': { boxShadow: '0 0 10px #00d0ff, 0 0 20px #00d0ff, 0 0 30px #00d0ff' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};