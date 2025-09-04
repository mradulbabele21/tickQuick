/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalBlue: "#1E3A8A",   // deep Indian blue
        skyBlue: "#60A5FA",     // highlight blue
        luxeGold: "#D4AF37",    // gold accents
      },
    },
  },
  plugins: [],
}
