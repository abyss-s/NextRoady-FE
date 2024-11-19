import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const serverPort = Number(env.VITE_REACT_PORT);

  return {
    server: {
      host: true, // 외부에서 접근 가능하도록 설정
      port: serverPort, // 환경 변수에서 포트 읽기
      watch: {
        usePolling: true, // Polling 사용
      },
    },
    cors: {
      origin: '*',
      methods: '*',
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    },
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    css: {
      postcss: './postcss.config.js',
    },
  };
});
