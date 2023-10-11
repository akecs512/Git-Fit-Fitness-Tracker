/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rowdies: ["Rowdies", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
   
    themes: [
      {
        mytheme: {
          primary: "#1a8e79",//green
          secondary: "#4cb2ba",//teal
          accent: "#19a1fc",//light blue
          neutral: "#212131",//light purple
          "base-100": "#e0e2f1",//grey
          info: "#89527f",//purple
          success: "#266b8f",//blue
          warning: "#ed8a12",//orange
          error: "#e22b28",//light orange
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
