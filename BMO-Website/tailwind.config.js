/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Renk paleti buraya eklenecek
      },
      boxShadow: {
        // Gölge efektleri buraya eklenecek
      },
    },
    animation: {
      // Animasyonlar buraya eklenecek
      'fade-in': 'fadeIn 0.5s ease-out',
      'scale-in': 'scaleIn 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      scaleIn: {
        '0%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('autoprefixer')
  ],
}

