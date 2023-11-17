/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cottages',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['placehold.it'], // Добавьте здесь список доменов
  },
  reactStrictMode: true,
}

module.exports = nextConfig
