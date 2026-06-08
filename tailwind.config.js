/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#6366f1",
        background: {
          dark: "#0a0a0f",
          light: "#f8fafc",
        },
        accent: "#00f5d4",
      },
      fontFamily: {
        heading: ["Cabinet Grotesk", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
}
