/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['source.unsplash.com', process.env.NEXT_PUBLIC_ALLOW_DOMAINS ?? ''],
    },
};
