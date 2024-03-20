/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/daisyui/dist/**/*.js',
  'node_modules/react-daisyui/dist/**/*.js',],
  theme: {
    extend: {
      colors: {
        mytheme: {
          white: "#FFFFFF",

          grad_Color: "bg-gradient-to-r from-blue-700 to-purple-800",
        },
      },
      screens: { md: { max: "1050px" }, sm: { max: "550px" } },
      fontFamily: { montserrat: "Montserrat" },
      backgroundImage: {
        "grad-color": "linear-gradient(90deg, #041AD8 0%, #B012AA 78.84%)",
        gradient: "linear-gradient(180deg, #302f2f,#000000)",
        gradient1: "radial-gradient(180deg, #ffffff,#000000,#101010)",
      },
    },
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
    themes: ["mytheme", "light"],
    extend: {
      colors: {
        "grad-color": "var(--gradient-color)", // Define as a CSS variable
      },
    },
  },
};
