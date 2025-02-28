/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Change this to match your preferred color scheme
        secondary: "#818cf8",
        background: "#f9fafb", // Light theme background
        text: "#1f2937", // Dark text for contrast
      },
    },
  },
  plugins: [],
};