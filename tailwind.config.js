/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38B6FF",
        secondary: "#00A1FF",
        dark: "#111111",
        overlay: "rgba(17, 17, 17, 0.5)"
      }
    },
  },
  plugins: [],
}

