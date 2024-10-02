// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended", // ESLint 추천 규칙
    "plugin:react/recommended", // React 관련 추천 규칙
    "plugin:react/jsx-runtime", // React 17+ JSX 변환을 위한 규칙
    "plugin:react-hooks/recommended", // React Hook 관련 규칙
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest", // 최신 ECMAScript 버전
    sourceType: "module", // ES6 모듈 사용
  },
  settings: {
    react: {
      version: "detect", // 자동으로 react 버전 감지
    },
  },
  rules: {
    "react/jsx-no-target-blank": [
      "error",
      {
        allowExternalLinks: true, // 외부 링크 허용
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }, // 상수 내보내기 허용
    ],
  },
};
