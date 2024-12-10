/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        hinge: 'hinge 1s ease-in',
        typing: "typing 2s steps(20), blink .7s infinite",
        loop: "loop 1s ease-in-out infinite"
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
          '0%': { 
            width: '0%', 
            visibility: 'hidden' 
          },
          '100%': { 
            width: '100%' 
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        loop: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
        }
      },
    },
  },
  plugins: [],
}

