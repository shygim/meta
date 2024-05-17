import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base:'/react',
  publicDir:'public',
  root: path.resolve(__dirname, 'src'),
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@assets': path.resolve(__dirname, 'assets'),
      
    }
  }
});