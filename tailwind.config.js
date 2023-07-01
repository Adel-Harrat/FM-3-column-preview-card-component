/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(31, 77%, 52%)", // Bright orange:
        cyan: {
          soft: "hsl(184, 100%, 22%)", // Dark cyan
          hard: "hsl(179, 100%, 13%)", //Very dark cyan
        },
        white: {
          transparent: "hsla(0, 0%, 100%, 0.75)", // paragraphs
          light: "hsl(0, 0%, 95%)", // background, headings, buttons
        },
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "cursive"],
        "lexend-deca": ["'Lexend Deca'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
