/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //! Neon Blue Theme
        // primary: "#0a1a35",
        // primaryLight: "#1e3a8a",
        // accent: "#00d0ff",
        // accentGlow: "#00a2ff80",
        // surface: "#0d0d0d",
        // surfaceGlass: "rgba(255,255,255,0.06)",
        // text: "#ffffff",
        // textMuted: "#a0a0a0",
        // border: "rgba(255,255,255,0.08)",

        //! Purple Pink Theme
        // primary: "#1b0030",
        // primaryLight: "#4b0082",
        // accent: "#ff6ec7",
        // accentGlow: "#ff6ec780",
        // surface: "#120022",
        // surfaceGlass: "rgba(255,255,255,0.05)",
        // text: "#ffffff",
        // textMuted: "#c0c0ff",
        // border: "rgba(255,255,255,0.07)",

        //!Theme 2: Ocean Blue
        primary: "#001f3f",
        primaryLight: "#0074d9",
        accent: "#00ffff",
        accentGlow: "#00ffff80",
        surface: "#001629",
        surfaceGlass: "rgba(255,255,255,0.08)",
        text: "#e0f7ff",
        textMuted: "#a0c4ff",
        border: "rgba(255,255,255,0.06)",

        //! Theme 3 - Sunset Orange
        // primary: "#331a00",
        // primaryLight: "#ff5500",
        // accent: "#ffd200",
        // accentGlow: "#ffd20080",
        // surface: "#1a0d00",
        // surfaceGlass: "rgba(255,255,255,0.05)",
        // text: "#fff5e6",
        // textMuted: "#ffcc99",
        // border: "rgba(255,255,255,0.07)",

        //! Theme 4 - Sunrise yellow
        // primary: "#FF6B6B",       // soft coral/red of early sunrise
        // primaryLight: "#FFA66B",  // warm orange glow
        // accent: "#FFD93D",        // golden yellow sun highlight
        // accentGlow: "#FFD93D80",  // soft glow
        // surface: "#2B1B3A",       // deep purple/indigo sky background
        // surfaceGlass: "rgba(255,255,255,0.05)", // subtle glass overlay
        // text: "#FFFFFF",           // main text white
        // textMuted: "#FFE5B4",     // muted pastel for secondary text
        // border: "rgba(255,255,255,0.08)" // soft border

        //! Theme 4 - Greenery
        // primary: "#1B5E20",       // deep forest green
        // primaryLight: "#4CAF50",  // fresh leaf green
        // accent: "#A5D6A7",        // soft pastel green for highlights
        // accentGlow: "#A5D6A780",  // subtle glowing green
        // surface: "#0D1F0D",       // very dark green background
        // surfaceGlass: "rgba(255,255,255,0.06)", // light glass overlay
        // text: "#E8F5E9",           // off-white text with green tint
        // textMuted: "#81C784",     // muted green for secondary text
        // border: "rgba(255,255,255,0.08)" // soft border


        
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