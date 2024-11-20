/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      /* https://tailwindcss.com/docs/customizing-colors */
      transparent: 'transparent',
      current: 'currentColor',
      kakao: '#FEE500', // Kakao
      naver: '#03C75A', // Naver
      google: '#DB4437', // Google
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C',
      },
      primary: { // 주요 색상
        DEFAULT: '#1D4ED8',  // 예시로 파란색을 기본 색상으로 설정
        hover: '#1E40AF', // 호버 시 색상
      },
      secondary: { // 보조 색상
        DEFAULT: '#3B82F6', // 보조 파란색
        hover: '#2563EB', // 호버 시 색깔
      },
    },
    fontFamily: {
      pl: ['Pretendard-Light'],
      pr: ['Pretendard-Regular'],
      pm: ['Pretendard-Medium'],
      ps: ['Pretendard-SemiBold'],
      pb: ['Pretendard-Bold'],
    },
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [],
};
