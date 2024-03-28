/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F0F2F5", // Light Gray
        "gray-50": "#D7DCE1", // Medium Gray
        "gray-100": "#BEC6CC", // Dark Gray
        "gray-500": "#3B3F42", // Charcoal
        "primary-100": "#D8EAF2", // Light Deep Blue
        "primary-200": "#536878", // Light-medium Deep Blue
        "primary-300": "#81C3D7", // Medium Deep Blue
        "primary-500": "#0A192F", // Dark Deep Blue
        "secondary-400": "#FFF8E1", // Light Gold
        "secondary-500": "#FBC02D" // Dark Gold
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": `linear-gradient(90deg, 
          ${theme("primary-500")} 0%, ${theme("secondary-500")} 100%)`,
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        forevertext: "url('./assets/foreverText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        sparklesyellow: "url('./assets/Sparkles2.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}