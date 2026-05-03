/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        void: '#020408',
        deep: '#040d1a',
        nebula: '#071428',
        cosmos: '#0a1f3d',
        azure: '#0d47a1',
        cyan: '#00b4d8',
        'cyan-glow': '#90e0ef',
        aurora: '#48cae4',
        stellar: '#caf0f8',
        muted: '#4a7fa5',
        'muted-2': '#2d5986',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(0,180,216,0.3)' }, '50%': { boxShadow: '0 0 60px rgba(0,180,216,0.8)' } },
        orbit: { '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' } },
        twinkle: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.2 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      }
    },
  },
  plugins: [],
}
