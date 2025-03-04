import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic',
    jsxImportSource: 'react',
  }), federation({
    name: 'host-app',
    remotes: {
      blogMFE: {
        external: 'http://localhost:5001/assets/remoteEntry.js',
        externalType: 'url',
      },
    },
    shared: ['react', 'react-dom'],
  }), sentryVitePlugin({
    org: "direct-line-group",
    project: "website-blueprint"
  })],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,

    rollupOptions: {
      output: {
        format: 'esm',
      },
    },

    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});