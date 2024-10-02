/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {},

    fontFamily: {
      pr: ["Pretendard-Regular"],
      pl: ["Pretendard-Light"],
      pm: ["Pretendard-Medium"],
      ps: ["Pretendard-SemiBold"],
      pb: ["Pretendard-Bold"],
    },

    extend: {},
  },
  plugins: [],
};

