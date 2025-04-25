// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8C00", // your orange button color
        dark: "#0f0f0f",
        light: "#ffffff",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
