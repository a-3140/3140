const { transitionDuration } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {},
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-40": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0.4",
          },
        },

        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-out-left": {
          from: {
            opacity: "1",
            transform: "translateX(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateX(50px)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-out-right": {
          from: {
            opacity: "1",
            transform: "translateX(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateX(50px)",
          },
        },
        // vertical
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 0.75s ease-out",
        "fade-out-left": "fade-out-left 0.75s ease-out",
        "fade-in-right": "fade-in-right 0.75s ease-out",
        "fade-out-right": "fade-out-right 0.75s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-in",
        "fade-in-40": "fade-in-40 0.5s ease-in",
        "delay-100": "animation-delay-100",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
