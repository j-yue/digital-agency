/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      DEFAULT: ".375rem",
    },
    extend: {
      backgroundImage: {
        gradient: `linear-gradient(90deg, #F6AD55 0%, #FBD38D 14.58%, #9CE6B3 28.13%, #81E6D9 42.19%, #9DECF9 55.21%, #D6BCFA 68.75%, #FED7D7 83.33%, #FEB2B2 97.40%)`,
      },
      colors: {
        title: "rgba(255, 255, 255, 0.92)",
        content: "rgba(255, 255, 255, 0.48)",
        bg: "#1B1D21",
        bgCard: "rgba(0, 0, 0, 0.24)",
        border: "rgba(255, 255, 255, 0.36)",
        btnPrimary: "rgba(0, 0, 0, 0.48)",
      },
      padding: {
        button: "1.5rem",
      },
      keyframes: {
        scrollUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },
      animation: {
        rollText: "scrollUp 3s ease-in-out infinite",
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
