/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7F3F4",
        secondary: "#802836",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
