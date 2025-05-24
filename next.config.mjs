import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        // TODO: Setup CDN for storing image
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },
    // Add trailing slashes for better SEO
    trailingSlash: true,
};

const analyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default analyzerConfig(nextConfig);