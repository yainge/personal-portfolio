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
        // Modern Multi-Green Theme
        'forest-green': {
          50: '#f0fdf0',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Primary green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'sage-green': {
          50: '#f6f7f6',
          100: '#e1e5e1',
          200: '#c3cbc3',
          300: '#9aab9a',
          400: '#708a70',
          500: '#526952',  // Sage accent
          600: '#415341',
          700: '#364436',
          800: '#2d362d',
          900: '#252b25',
          950: '#161a16',
        },
        'mint-green': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',  // Mint accent
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        'emerald-green': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',  // Emerald accent
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        'dark-wood': {
          50: '#f7f3f0',
          100: '#ede4dd',
          200: '#dbc8bb',
          300: '#c4a690',
          400: '#b08968',
          500: '#a0794e',
          600: '#935f42',
          700: '#7a4d38',
          800: '#634032',
          900: '#52352b',
          950: '#3C2415',  // Primary dark wood
          975: '#2B1B17',  // Darkest wood
        },
        'cream': {
          50: '#FBF9F4',   // Light cream
          100: '#F5F1EB',  // Main cream accent
          200: '#F0E9DB',
          300: '#E8DCC7',
          400: '#DCC8A8',
          500: '#CDB188',
          600: '#B39665',
          700: '#967A4D',
          800: '#7A6240',
          900: '#665136',
        },
        'gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'quote-change': 'quoteChange 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        quoteChange: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'cafe': '0 4px 20px rgba(45, 27, 23, 0.15)',
        'cafe-lg': '0 10px 40px rgba(45, 27, 23, 0.2)',
        'green-glow': '0 0 20px rgba(61, 139, 61, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}