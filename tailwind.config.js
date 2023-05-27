/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f8f7fa",
        steelblue: {
          "100": 'rgb(40,120,163)',
          "200": "#026093",
        },
        darkslategray: {
          "100": "#414662",
          "200": "#3d415c",
          "300": "#373b53",
          "400": "#292c3d",
        },
        white: "#fff",
        slategray: "#5a5e7c",
        black: {
          "100": "#222",
          "200": "#000",
        },
        lightsteelblue: "#a6acbe",
        cornflowerblue: "#5b8dd7",
        ghostwhite: {
          "100": "#eef0f6",
          "200": "#edeff5",
        },
        gainsboro: "#ddd",
      },
      fontFamily: {
        poppins: "Poppins",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "9xl": "28px",
      xl: "20px",
      "21xl": "40px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  }
};
