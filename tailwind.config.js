/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/img/body-bg.svg')",
      },
    },
  },
  plugins: [],
};
