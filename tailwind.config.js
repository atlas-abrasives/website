module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f2f4f5",
          100: "#dbe0e3",
          200: "#bbc4ca",
          300: "#9ca9b2",
          400: "#7f8b94",
          500: "#646e78",
          600: "#4d555d",
          700: "#393f45",
          800: "#282d31",
          900: "#1a1d20",
          950: "#121416"
        },
        rust: {
          400: "#d39b59",
          500: "#c2853d",
          600: "#9b652d"
        }
      },
      boxShadow: {
        panel: "0 10px 25px rgba(0, 0, 0, 0.45)",
        hard: "0 0 0 1px rgba(156, 169, 178, 0.2), 0 18px 40px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class"
    })
  ]
};
