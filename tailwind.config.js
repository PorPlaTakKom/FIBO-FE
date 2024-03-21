/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          orange : '#F47529'
        }
    },
    fontFamily: {
      heavent: ["Heavent", 'sans-serif'],
      heavent_Bold: ["HeaventBold", "serif"],
    },
  },

  plugins: [],
}

