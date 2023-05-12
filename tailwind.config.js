/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        main: "#FD562A",
      },

      backgroundImage: {
        
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1124px", // => @media (min-width: 1280px) { ... }
      "2xl": "1480px", // => @media (min-width: 1280px) { ... }
    },

    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
