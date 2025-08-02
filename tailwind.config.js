export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0f172a", // You can change this HEX code
      },
     animation: {
    spinSlow: 'spin 8s linear infinite', // or slower like 12s
    },
    },
  },
  plugins: [],
};
