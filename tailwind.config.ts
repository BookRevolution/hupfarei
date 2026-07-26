import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: { 
      center: true, 
      padding: '1rem' 
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        brand: {
          pink: 'var(--brand-pink)',
          yellow: 'var(--brand-yellow)',
          purple: 'var(--brand-purple)',
          mint: 'var(--brand-mint)',
        }
      },
      borderRadius: { 
        '2xl': 'var(--radius)' 
      },
      boxShadow: { 
        brand: 'var(--shadow)' 
      },
      keyframes: {
        float: { 
          '0%,100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(-6px)' } 
        },
        'bounce-soft': {
          '0%,100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(2%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config

