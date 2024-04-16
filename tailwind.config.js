/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        overlay: "#f6eced",
        overlayDark: "#f6eced",
        bg: "#fff5f6",
        bgDark: "#fff5f6",
        text: "#000000",
        textDark: "#000000",
        textinvert: "#ffffff",
        textinvertDark: "#ffffff",
        accent: "#aa4465",
        accentDark: "#aa4465",
        accenttranslucent: "rgba(170, 68, 101, 0.85)",
        accenttranslucentDark: "rgba(170, 68, 101, 0.85)",
        navColor: "rgba(255, 245, 246, 0.85)",
        headerbg: "rgba(255, 245, 246, 0.5)",
        navColorDark: "rgba(255, 245, 246, 0.85)",
      },
      fontSize: {
        h1: "clamp(3.815rem,3.2699999999999996rem + 1.3625000000000005vw,4.578rem)",
        h2: "clamp(3.052rem, 2.616rem + 1.0899999999999996vw, 3.6624rem)",
        h3: "clamp(2.441rem,2.092285714285714rem + 0.8717857142857142vw,2.9292rem)",
        h4: "clamp(1.953rem,1.6740000000000002rem + 0.6974999999999997vw,2.3436rem)",
        h5: "clamp(1.563rem,1.3397142857142856rem + 0.5582142857142857vw,1.8756rem)",
        h6: "clamp(1.25rem,1.0714285714285714rem + 0.4464285714285714vw,1.5rem)",
        p: "clamp(1rem, 0.8571428571428572rem + 0.35714285714285704vw, 1.2rem)",
        small:
          "clamp(0.8rem,0.6857142857142858rem + 0.28571428571428553vw,0.96rem)",
      },
      letterSpacing: {
        p: "0.01em",
      },
      lineHeight: {
        p: "1.7",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      boxShadow: {
        primarybtn: "10px 10px #000000",
        secondarybtn: "6px 6px #000000",
      },
    },
  },
  plugins: [],
};
