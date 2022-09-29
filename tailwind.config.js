/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef8385",

          secondary: "#601ea8",

          accent: "#e590ed",

          neutral: "#1A1A2D",

          "base-100": "#E0E2EB",

          info: "#2B61DE",

          success: "#14AD75",

          warning: "#F7BB55",

          error: "#DA2525",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
