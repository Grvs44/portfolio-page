import react from '@vitejs/plugin-react'
import license from 'rollup-plugin-license'
import { defineConfig, type Plugin } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    jsconfigPaths(),
    VitePWA({
      injectRegister: 'inline',
      manifest: false,
      workbox: { clientsClaim: true, skipWaiting: true },
    }),
    createHtmlPlugin({ minify: true }),
  ],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        manualChunks: {
          c: ['src/content'],
          e: ['@emotion/react', '@emotion/styled'],
          m: ['@mui/material'],
          r: ['react', 'react-dom'],
          s: ['react-social-icons'],
        },
      },
      plugins: [
        license({
          banner: {
            content: '/*! licenses: licenses.txt */',
          },
          thirdParty: {
            includeSelf: true,
            output: { file: 'build/licenses.txt' },
          },
        }) as Plugin,
      ],
    },
  },
})
