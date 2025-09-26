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
      includeAssets: ['public/*.jpg', 'public/*.jpeg', 'public/*.png'],
      manifest: {
        short_name: env.VITE_NAME,
        name: env.VITE_NAME,
        icons: [
          {
            src: env.VITE_ICON_SRC,
            type: 'image/' + env.ICON_TYPE,
            sizes: env.ICON_SIZES,
          },
        ],
        start_url: '.',
        scope: '.',
        theme_color: env.COLOR || '#1976d2',
      },
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
          i: ['@mui/icons-material'],
          m: ['@mui/material'],
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
