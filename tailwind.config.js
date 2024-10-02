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
    colors: {
      /* https://tailwindcss.com/docs/customizing-colors */
    },
    fontFamily: {
      pl: ["Pretendard-Light"],
      pr: ["Pretendard-Regular"],
      pm: ["Pretendard-Medium"],
      ps: ["Pretendard-SemiBold"],
      pb: ["Pretendard-Bold"],
    },

    extend: {},
  },
  plugins: [],
};
