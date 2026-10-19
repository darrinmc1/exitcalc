import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // "Cite me, don't train on me" — blocks AI training ingest while keeping indexing + citations
          { key: "X-Robots-Tag", value: "noai, noimageai" },
        ],
      },
    ]
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Exact matches. A prefix alias for @clerk/nextjs would swallow
      // @clerk/nextjs/server and point it at clerk-mock.tsx/server.
      const mock = path.resolve(__dirname, './clerk-mock.tsx')
      config.resolve.alias['@clerk/nextjs/server$'] = mock
      config.resolve.alias['@clerk/nextjs$'] = mock
    }
    return config
  },
}

export default nextConfig
