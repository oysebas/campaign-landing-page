/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-canvas': '#0c0c0c',
        'card-bg': '#0c0c0c',
        'text-primary': '#f3f3f3',
        'text-secondary': '#a1a1aa',
        'accent-blue': '#3651FF',
        'accent-blue-hover': '#223ad9',
        'section-alt': '#0c0c0c',
        'hairline-border': 'rgba(243, 243, 243, 0.08)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'button': '4px',
        'input': '4px',
        'tag': '4px',
        'card': '16px',
        'large': '16px',
      },
    },
  },
  plugins: [],
}
