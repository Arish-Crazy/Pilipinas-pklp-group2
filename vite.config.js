import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
import compression from 'compression'

// Vite's dev server sends uncompressed responses; over the slow Modal tunnel
// the ~1MB react-dom dev chunk dominates first-load time, so gzip them.
const gzipDevServer = {
  name: 'gzip-dev-server',
  configureServer(server) {
    server.middlewares.use(
      compression({
        filter: (req, res) => {
          const type = res.getHeader('Content-Type')
          // Compressing SSE buffers the stream and breaks live updates.
          if (typeof type === 'string' && type.includes('text/event-stream')) {
            return false
          }
          return compression.filter(req, res)
        },
      }),
    )
  },
}

export default defineConfig({
  plugins: [gzipDevServer, react(), cloudflare()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    // Allow any host (needed for Modal tunnels)
    allowedHosts: true,
  },
})
