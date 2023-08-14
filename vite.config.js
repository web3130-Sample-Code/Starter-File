const path = require ('path')

import { defineConfig } from 'vite'

export default defineConfig({
     root: "src",
     resolve: {
          alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
          }
        },
     build: {
          manifest: true,
          outDir:'../dist',
          emptyOutDir: true,
     },
     server: {
          port: 8080,
          hot: true,
          hmr:{clientPort: 8080},
          open: "/",
     }
})
