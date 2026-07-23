// next.config.js

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.NEXT_PUBLIC_API_IP,
                port: process.env.NEXT_PUBLIC_API_PORT,
                pathname: process.env.NEXT_PUBLIC_API_CNIC_IMAGE_URL
            },
            {
                protocol: 'http',
                hostname: process.env.NEXT_PUBLIC_API_IP,
                port: process.env.NEXT_PUBLIC_API_PORT,
                pathname: process.env.NEXT_PUBLIC_API_THUMB_IMAGE_URL
            }
        ],
        minimumCacheTTL: 0,
    },
};
