// next.config.js

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/api/**'
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/api/**'
            }
        ],
        minimumCacheTTL: 0,
    },
};
