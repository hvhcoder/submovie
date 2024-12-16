/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'res.cloudinary.com',
                port: '',
                pathname: '/**',

            },
            {
                protocol: 'https',
                hostname:'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname:'img.ophim.live',
                port: '',
                pathname: '/**',
            }
        ]
    }
};




export default nextConfig;
