module.exports = {
  content: ["./index.html",
    "./src/*/.{js,ts,jsx,tsx,html,mdx,webp}"], // Updated glob pattern
  darkMode: "class",
  theme: {
    screens: { 
      md: { max: "1050px" }, 
      sm: { max: "550px" } 
    },
    extend: {
      colors: {
        amber: { 300: "var(--amber_300)" },
        black: { 
          900: "var(--black_900)", 
          "900_01": "var(--black_900_01)" 
        },
        blue_gray: { 
          50: "var(--blue_gray_50)", 
          700: "var(--blue_gray_700)", 
          "700_01": "var(--blue_gray_700_01)" 
        },
        gray: {
          50: "var(--gray_50)",
          200: "var(--gray_200)",
          600: "var(--gray_600)",
          900: "var(--gray_900)",
          "200_01": "var(--gray_200_01)",
          "600_01": "var(--gray_600_01)",
        },
        light_green: { a700: "var(--light_green_a700)" },
        red: { 
          500: "var(--red_500)", 
          a200: "var(--red_a200)" 
        },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: { 
        notosans: "Noto Sans" 
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};