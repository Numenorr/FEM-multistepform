/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Marineblue: "hsl(213, 96%, 18%)",
        Purplishblue: "hsl(243, 100%, 62%)",
        Pastelblue: "hsl(228, 100%, 84%)",
        Lightblue: "hsl(206, 94%, 87%)",
        Strawberryred: "hsl(354, 84%, 57%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
