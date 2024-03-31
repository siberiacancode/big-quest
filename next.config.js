/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      },
      {
        protocol: 'http',
        hostname: '*'
      }
    ]
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/api/:path*`
      }
    ];
  }
};
