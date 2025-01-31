/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-clr": "var(--primary-clr)",
        "secondary-clr": "var(--secondary-clr)",
        "tertiary-clr": "var(--tertiary-clr)",
        "last-clr": "var(--last-clr)",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
