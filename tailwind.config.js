/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode utility classes
  theme: {
    extend: {
      // Define custom dark mode classes
      backgroundColor: {
        'dark': '#333', // Dark mode background color
      },
      textColor: {
        'dark': '#fff', // Dark mode text color
      },
    },
  },
  plugins: [require("daisyui")],

}