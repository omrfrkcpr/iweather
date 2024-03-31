/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        product: "#8fb2f5",
        base: {
          900: "#13131a",
          800: "#16161f",
          700: "#1c1c27",
          600: "#22222f",
          500: "#3b3b54",
          400: "#7f7f98",
          300: "#ababc4",
          200: "#bfbfd4",
          100: "#fafafa",
          white: "#ffffff",
          input: "#1E1E29",
        },
      },
      fontSize: {
        hg: "96px",
        xl: "48px",
        lg: "32px",
        md: "20px",
        sm: "16px",
        xs: "14px",
        "text-lg": "20px",
        "text-md": "16px",
        "text-sm": "14px",
        "text-xs": "12px",
      },
      lineHeight: {
        hg: "100%",
        xl: "120%",
        lg: "140%",
        md: "140%",
        sm: "140%",
        xs: "140%",
        "text-lg": "140%",
        "text-md": "140%",
        "text-sm": "140%",
        "text-xs": "140%",
      },
      fontWeight: {
        hg: 700,
        xl: 700,
        lg: 600,
        md: 600,
        sm: 600,
        xs: 600,
        "text-lg": 400,
        "text-md": 400,
        "text-sm": 400,
        "text-xs": 500,
      },
      borderRadius: {
        8: "8px",
        12: "12px",
      },
    },
  },
  plugins: [],
});
