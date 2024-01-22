/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'hero-pattern': "url('images/banner.png')",
            'back-first': "url('images/Rectangle 5.png')"
            'back-second': "url('./images/Rectangle 7.png')"
            'footer-texture': "url('/img/footer-texture.png')",
          }
      },
    },
    plugins: [],
  }