/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#02060f",
          900: "#060d1b",
          800: "#09142a",
        },
        neon: "#00f3ff",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 243, 255, 0.45)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
