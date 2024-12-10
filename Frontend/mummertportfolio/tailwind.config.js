/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        hinge: 'hinge 1s ease-in',
        typing: 'typing 2s steps(100) forwards',
        blinkcaret: 'blinkcaret 1.5s step-end infinite',
      },
      keyframes: {
        hinge: {
          '0%': { transform: 'rotate(0)', opacity: '1' },
          '20%': { transform: 'rotate(80deg)', opacity: '1' },
          '40%, 60%': { transform: 'rotate(60deg)', opacity: '1' },
          '80%': { transform: 'rotate(80deg)', opacity: '0' },
          '100%': { transform: 'translateY(700px)', opacity: '0' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blinkcaret: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

