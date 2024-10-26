import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './apps/petite-popper',
  publicDir: 'apps/petite-popper/public', // public 디렉터리 경로 설정
});
