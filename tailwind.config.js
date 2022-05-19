const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "notificationlg": {
          "0%": { top: "-300%" },
          "10%": { top: "75px" },
          "90%": { top: "75px" },
          "100%": { top: "-300%" },
        },
        "notification": {
          "0%": { top: "-300%" },
          "10%": { top: "150px" },
          "90%": { top: "150px" },
          "100%": { top: "-300%" },
        },
      },
    },
  },
  plugins: [],
};
