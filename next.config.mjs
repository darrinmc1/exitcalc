import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.resolve.alias['@clerk/nextjs'] = path.resolve(__dirname, './clerk-mock.tsx')
      config.resolve.alias['@clerk/nextjs/server'] = path.resolve(__dirname, './clerk-mock.tsx')
    }
    return config
  },
}

export default nextConfig
