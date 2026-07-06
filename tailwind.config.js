/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1cb7cf',
          dark: '#0f8fa0',
        },
        secondary: {
          DEFAULT: '#fd7122',
          dark: '#e05a0a',
        },
        navy: {
          DEFAULT: '#011b2e',
          mid: '#222b60',
          dark: '#003b95', // From hero section background (#003b95)
          brand: '#005eb8', // From newsBtn background (#005eb8)
          brandDark: '#004f99', // From newsBtn hover background (#004f99)
        },
        dark: '#0a0a0a',
        'light-grey': '#f5f5f5',
        'mid-grey': '#e3e3e3',
        'text-main': '#333333',
        'text-light': '#666666',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'sm-custom': '0 2px 8px rgba(0,0,0,0.08)',
        'md-custom': '0 4px 20px rgba(0,0,0,0.12)',
        'lg-custom': '0 8px 40px rgba(0,0,0,0.16)',
      },
      screens: {
        // We match original CSS media queries exactly
        'max-1100': { 'max': '1100px' },
        'max-1024': { 'max': '1024px' },
        'max-992': { 'max': '992px' },
        'max-900': { 'max': '900px' },
        'max-640': { 'max': '640px' },
        'max-600': { 'max': '600px' },
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease',
        fadeIn: 'fadeIn 0.2s ease',
      }
    },
  },
  plugins: [],
};
