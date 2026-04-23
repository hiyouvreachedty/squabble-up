import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          light: '#f9f9f9',
        },
        surface: {
          DEFAULT: '#141414',
          light: '#ffffff',
        },
        border: {
          DEFAULT: '#2a2a2a',
          light: '#e0e0e0',
        },
        accent: {
          DEFAULT: '#e63946',
          alt: '#ffffff',
        },
        text: {
          primary: '#f0f0f0',
          secondary: '#888888',
          'primary-light': '#0a0a0a',
          'secondary-light': '#555555',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['80px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['56px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
