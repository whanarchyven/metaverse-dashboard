/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spinreverse 3s linear infinite",
        "fade-in-right": "fadeinright 1s ease-out",
        "fade-in-left": "fadeinleft 1s ease-out",
        "fade-in-left-sec": "fadeinleftsec 1s ease-out",
        "zoom-out": "zoomout 1s ease-in-out",
        "fade-in-down": "fadeInDown 300ms ease-out",
        "push-note": "pushNote 3s ease-in-out",
        "drop-top-one": "dropTopOne 6s linear",
        "drop-top-two": "dropTopOne 4s linear",
      },
      keyframes: {
        spinreverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        fadeinright: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeinleft: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeinleftsec: {
          "0%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
        },
        zoomout: {
          "0%": {
            opacity: "0",
            transform: "scale:(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale:(1)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pushNote: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "25%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "75%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
        dropTopOne: {
          "0%": {
            bottom: "100%",
          },

          "4%": {
            bottom: "0",
          },
          "7%": {
            bottom: "20px",
          },
          "9%": {
            bottom: "0",
          },

          "50%": {
            bottom: "0",
            // 'z-index':'-1',
          },
          "100%": {
            bottom: "0",
            // 'z-index':'-1',
          },
        },
      },
    },
  },
  plugins: [],
}