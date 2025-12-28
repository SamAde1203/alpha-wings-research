// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Navy Palette (Dark blues for backgrounds)
        navy: {
          900: '#0f1c2e',
          800: '#1a2942',
          700: '#2C3E5F',
          600: '#3a4f73',
          500: '#4a6088',
        },
        
        // Gold Palette (Your brand gold - use for accents on dark)
        gold: {
          600: '#B8964D',
          500: '#C9A961',
          400: '#d4ba7a',
          300: '#dfc993',
        },
        
        // Yellow Palette (Brighter - better for CTAs)
        yellow: {
          600: '#d97706',
          500: '#eab308',
          400: '#facc15',
        },
        
        // Semantic Colors (Keep your originals)
        darkText: '#1A1A1A',
        lightGray: '#F5F5F5',
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
      },
      
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
