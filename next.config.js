/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog-list',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
