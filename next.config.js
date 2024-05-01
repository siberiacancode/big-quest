/** @type {import('next').NextConfig} */
module.exports = {
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
    ],
    domains: ['localhost']
  },
  rewrites() {
    return [
      {
        source: '/api/1.0/:path*',
        destination: `${process.env.API_URL}/api/1.0/:path*`
      }
    ];
  }
};
