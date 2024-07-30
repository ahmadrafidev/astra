/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        // TODO: Setup CDN for storing image
        unoptimized: true,
    },
};

export default nextConfig;
