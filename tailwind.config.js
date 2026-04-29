/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./js/*.js"],
    theme: {
      extend: {
          animation: {
              'float': 'float 6s ease-in-out infinite',
              'pulse-slow': 'pulse 3s infinite',
              'fade-in': 'fadeIn 1s ease-out',
              'slide-up': 'slideUp 0.8s ease-out',
              'gradient': 'gradient 15s ease infinite',
              'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
              'photo-float': 'photoFloat 8s ease-in-out infinite',
              'gradient-shift': 'gradientShift 8s ease infinite'
          },
          keyframes: {
              float: {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-20px)' }
              },
              fadeIn: {
                  '0%': { opacity: '0' },
                  '100%': { opacity: '1' }
              },
              slideUp: {
                  '0%': { transform: 'translateY(50px)', opacity: '0' },
                  '100%': { transform: 'translateY(0)', opacity: '1' }
              },
              gradient: {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' }
              },
              pulseGlow: {
                  '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
                  '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' }
              },
              photoFloat: {
                  '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                  '25%': { transform: 'translateY(-10px) rotate(2deg)' },
                  '75%': { transform: 'translateY(10px) rotate(-2deg)' }
              },
              gradientShift: {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' }
              }
          },
          backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'hero-gradient': 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)',
              'photo-gradient': 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c)',
              'photo-placeholder': 'linear-gradient(45deg, #f0f0f0, #e0e0e0)'
          }
      }
  },
    plugins: [],
  }