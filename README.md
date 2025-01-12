# 💡 넥로디 프론트엔드 Repo입니다.

## 주요 라이브러리
- tailwindcss
- axios
- react-router-dom
- react-markdown
- react-zoom-pan-pinch
- graphviz-react

## 프로젝트 소스 폴더 구조

```
src
 ┣ apis
 ┃ ┣ auth.js
 ┃ ┣ login.js
 ┃ ┗ roadmap.js
 ┣ assets
 ┃ ┣ fonts
 ┃ ┃ ┣ Pretendard-Bold.woff2
 ┃ ┃ ┣ Pretendard-Light.woff2
 ┃ ┃ ┣ Pretendard-Medium.woff2
 ┃ ┃ ┣ Pretendard-Regular.woff2
 ┃ ┃ ┗ Pretendard-SemiBold.woff2
 ┃ ┗ images
 ┃ ┃ ┗ logo.png
 ┣ components
 ┃ ┣ GraphvizRenderer
 ┃ ┃ ┗ GraphvizRenderer.jsx
 ┃ ┣ Layout
 ┃ ┃ ┗ Layout.jsx
 ┃ ┣ MarkdownRenderer
 ┃ ┃ ┗ MarkdownRenderer.jsx
 ┃ ┗ YearlyRoadmapTable
 ┃ ┃ ┗ YearlyRoadmapTable.jsx
 ┣ pages
 ┃ ┣ Chat
 ┃ ┃ ┗ Chat.jsx
 ┃ ┣ Graph
 ┃ ┃ ┗ Graph.jsx
 ┃ ┣ Home
 ┃ ┃ ┗ Home.jsx
 ┃ ┗ Login
 ┃ ┃ ┣ Login.jsx
 ┃ ┃ ┗ Redirect.jsx
 ┣ App.jsx
 ┣ index.css
 ┣ main.jsx
 ┗ routes.jsxsrc
 ┣ apis
 ┃ ┣ auth.js
 ┃ ┣ login.js
 ┃ ┗ roadmap.js
 ┣ assets
 ┃ ┣ fonts
 ┃ ┃ ┣ Pretendard-Bold.woff2
 ┃ ┃ ┣ Pretendard-Light.woff2
 ┃ ┃ ┣ Pretendard-Medium.woff2
 ┃ ┃ ┣ Pretendard-Regular.woff2
 ┃ ┃ ┗ Pretendard-SemiBold.woff2
 ┃ ┗ images
 ┃ ┃ ┗ logo.png
 ┣ components
 ┃ ┣ GraphvizRenderer
 ┃ ┃ ┗ GraphvizRenderer.jsx
 ┃ ┣ Layout
 ┃ ┃ ┗ Layout.jsx
 ┃ ┣ MarkdownRenderer
 ┃ ┃ ┗ MarkdownRenderer.jsx
 ┃ ┗ YearlyRoadmapTable
 ┃ ┃ ┗ YearlyRoadmapTable.jsx
 ┣ pages
 ┃ ┣ Chat
 ┃ ┃ ┗ Chat.jsx
 ┃ ┣ Graph
 ┃ ┃ ┗ Graph.jsx
 ┃ ┣ Home
 ┃ ┃ ┗ Home.jsx
 ┃ ┗ Login
 ┃ ┃ ┣ Login.jsx
 ┃ ┃ ┗ Redirect.jsx
 ┣ App.jsx
 ┣ index.css
 ┣ main.jsx
 ┗ routes.jsx

```

## 실행 방법

```
npm i
npm run dev
```

## 환경변수 파일 템플릿

```
VITE_SERVER_DOMAIN=
VITE_SERVER_PORT=
VITE_SERVER_DOMAIN_PORT=

VITE_REACT_DOMAIN=
VITE_REACT_PORT=
VITE_REACT_DOMAIN_PORT=
```
