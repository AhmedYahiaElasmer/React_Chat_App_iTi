/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          white: "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
