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
    name: 'blog-mfe',
    filename: 'remoteEntry.js',
    exposes: {
      './BlogApp': {
        import: './src/App.tsx',
        name: 'BlogApp',
      },
    },
    shared: ['react', 'react-dom'],
  }), sentryVitePlugin({
    org: "direct-line-group",
    project: "strix-blog"
  })],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        format: 'esm',
        minifyInternalExports: false
      },
    },

    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});