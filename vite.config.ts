import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Vite plugin to create 404.html for GitHub Pages SPA routing
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexHtml = path.join(distDir, 'index.html')
      const fallbackHtml = path.join(distDir, '404.html')
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, fallbackHtml)
        console.log('✔ Created 404.html for GitHub Pages SPA routing')
      }
    }
  }
}

// https://vite.dev/config/
// In production the app is served from a GitHub Pages project subpath
// (https://<user>.github.io/domestic-electrician-website/); locally it runs at
// the domain root. `import.meta.env.BASE_URL` follows this automatically and is
// consumed by both React Router's basename and the asset() helper.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/domestic-electrician-website/' : '/',
  plugins: [react(), githubPagesSpaFallback()],
}))
