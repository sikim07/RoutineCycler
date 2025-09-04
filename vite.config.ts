import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React 관련 라이브러리들을 별도 청크로 분리
          vendor: ["react", "react-dom"],
          // React Router를 별도 청크로 분리
          router: ["react-router-dom"],
        },
      },
    },
    // 청크 크기 경고 임계값 설정
    chunkSizeWarningLimit: 1000,
    // CSS 코드 분할
    cssCodeSplit: true,
  },
  // 의존성 최적화
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
