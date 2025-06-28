/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "palette-1": "#073c92",
        "palette-2": "#db0ac3",
        "palette-3": "#f6af3c",
        "palette-4": "#85f993",
        "palette-5": "#cee0fd"
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
