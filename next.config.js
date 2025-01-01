/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'],
      },
      reactStrictMode: true,
      experimental: {
        appDir: true,
      },
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-Robots-Tag',
                value: 'index, follow',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
