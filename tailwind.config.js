const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        error: "hsl(0, 100%, 66%)",
        "gradient-violet-one": "hsl(249, 99%, 64%)",
        "gradient-violet-two": "hsl(278, 94%, 30%)",
      },
    },
  },
  plugins: [],
};
