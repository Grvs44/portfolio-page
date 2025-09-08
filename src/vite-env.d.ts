// From https://vitejs.dev/guide/env-and-mode.html
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LAST_UPDATED: string
  readonly VITE_NAME: string
  readonly VITE_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
