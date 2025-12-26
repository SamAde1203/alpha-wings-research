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
        navy: '#2C3E5F',
        gold: '#C9A961',
        darkText: '#1A1A1A',
        lightGray: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
