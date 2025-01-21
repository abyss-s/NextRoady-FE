# NextRoady(넥로디)

### AI 기반 개발자 커리어 추천 웹사이트

> [팀 노션 바로가기](https://absorbed-feverfew-0c5.notion.site/NextRoady-10bd1318465b80a98cafc283c6623df8?pvs=4)

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
 ┃ ┗ images
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
