/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1366px",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        semibold: "500",
        bold: "700",
      },
      colors: {
        malachite: "#00F260",
        blueCola: "#0575E6",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#3D3D3D",
        blue: "#1A56DB",
      },
    },
  },
  plugins: [],
}
