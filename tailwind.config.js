/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  content: ["./src/**/*.{html,js,jsx,mjs,cjs}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}
