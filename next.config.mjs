import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        // TODO: Setup CDN for storing image
        unoptimized: true,
    },
};

const analyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default analyzerConfig(nextConfig);