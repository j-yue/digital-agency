/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      footerIcon: "1.5rem",
      footerIconXl: "2rem",
      footerPadding: "2rem",
    },
    borderRadius: {
      DEFAULT: ".375rem",
    },
    screens: {
      md: "1024px",
      lg: "1440px",
      xl: "1920px",
    },
    extend: {
      fontSize: {
        heroText: ["2.2rem", "130%"],
        heroTextMd: ["2.5rem", "130%"],
        heroTextLg: ["3.75rem", "130%"],
        mainTextXs: [".75rem", "1rem"],
        mainText: [".875rem", "1.25rem"],
        mainTextMd: ["1.125rem", "1.75rem"],
      },
      zIndex: {
        fixedNav: 2,
        mobileNav: 3,
      },
      backgroundImage: {
        gradient: `linear-gradient(90deg, #F6AD55 0%, #FBD38D 14.58%, #9CE6B3 28.13%, #81E6D9 42.19%, #9DECF9 55.21%, #D6BCFA 68.75%, #FED7D7 83.33%, #FEB2B2 97.40%)`,
      },
      minWidth: {
        smallestScreen: "375px",
      },
      padding: {
        heroOffset: "8.25rem",
        navOffset: "6.125rem",
      },
      gap: {
        footer: "2rem",
        footerXl: "2rem",
      },
      colors: {
        title: "rgba(255, 255, 255, 0.92)",
        content: "rgba(255, 255, 255, 0.48)",
        bg: "#1B1D21",
        bgCard: "rgba(0, 0, 0, 0.24)",
        border: "rgba(255, 255, 255, 0.36)",
        btnPrimary: "rgba(0, 0, 0, 0.48)",
        nav: "rgba(255, 255, 255, 0.16)",
      },
      padding: {
        layoutSm: "1.5rem",
        layoutMd: "6rem",

        button: "1.5rem",
      },
      margin: {
        layoutOffsetSm: "-1.5rem",
        layoutOffsetMd: "-6rem",
      },

      keyframes: {
        // animation for blinking text
        blinking: {
          "0%": {
            color: "rgba(255, 255, 255, 0.92)",
          },
          "50%": {
            color: "rgba(255, 255, 255, 0.16)",
          },
          "100%": {
            color: "rgba(255, 255, 255, 0.92)",
          },
        },
        // animation for moving elements
        shiftLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-1ch)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        shiftRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(1ch)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        shiftUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-1ch)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        shiftDown: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(1ch)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        // animation for rolling text
        scrollUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-25%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        rollText: "scrollUp 3s ease-in-out infinite",
        blinkLeft:
          "blinking 2s ease-in-out infinite, shiftLeft 2s ease-in-out infinite",
        blinkRight:
          "blinking 2s ease-in-out infinite, shiftRight 2s ease-in-out infinite",
        blinkUp:
          "blinking 2s ease-in-out infinite, shiftUp 2s ease-in-out infinite",
        blinkDown:
          "blinking 2s ease-in-out infinite, shiftDown 2s ease-in-out infinite",
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
