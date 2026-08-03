/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async headers() {
        return [
            {
                source: '/_next/static/(.*)',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
            {
                // Redesign mockups: never index, they are pitch previews
                source: '/redesign/:path*',
                headers: [
                    { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
                ],
            },
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                ],
            },
        ];
    },
    async rewrites() {
        return [
            // Serve static redesign mockup bundles from public/redesign/<slug>/
            {
                source: '/redesign/:slug',
                destination: '/redesign/:slug/index.html',
            },
        ];
    },
    async redirects() {
        return [
            // Trailing slash -> no trailing slash
            {
                source: '/:path+/',
                destination: '/:path+',
                permanent: true,
            },
            // Prices live on the services page; /preise is what people type
            {
                source: '/preise',
                destination: '/leistungen',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
