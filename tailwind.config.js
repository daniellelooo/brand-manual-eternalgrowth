/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eternal-black': '#000000',
        'eternal-white': '#FFFFFF',
        'eternal-white-soft': 'rgba(255, 255, 255, 0.95)',
        'eternal-purple': {
          primary: '#8B5CF6',
          light: '#C084FC',
          medium: '#A855F7',
        },
        'eternal-glow': {
          intense: 'rgba(139, 92, 246, 0.8)',
          medium: 'rgba(139, 92, 246, 0.6)',
          soft: 'rgba(139, 92, 246, 0.4)',
          subtle: 'rgba(139, 92, 246, 0.2)',
          gradient: 'rgba(139, 92, 246, 0.15)',
          sweep: 'rgba(139, 92, 246, 0.1)',
          background: 'rgba(139, 92, 246, 0.05)',
          scanline: 'rgba(139, 92, 246, 0.04)',
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'Segoe UI', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'scanline': 'scanline 2s linear infinite',
        'typewriter': 'typewriter 3s steps(20) infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 5px rgba(139, 92, 246, 0.4), 0 0 10px rgba(139, 92, 246, 0.3), 0 0 15px rgba(139, 92, 246, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.6), 0 0 20px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)' 
          },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'typewriter': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
