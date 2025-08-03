import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import license from 'rollup-plugin-license'
import { defineConfig, type Plugin } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VitePWA } from 'vite-plugin-pwa'

const env = dotenv.config().parsed
if (!env) throw '.env could not be parsed'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    jsconfigPaths(),
    VitePWA({
      injectRegister: 'inline',
      manifest: {
        short_name: env.VITE_NAME,
        name: env.VITE_NAME,
        id: '/',
        icons: [
          {
            src: 'img.png',
            type: 'image/png',
            sizes: '240x240',
          },
        ],
        start_url: '.',
        scope: '.',
        display_override: ['window-controls-overlay', 'standalone'],
        theme_color: '#1976d2',
        background_color: '#ffffff',
      },
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
