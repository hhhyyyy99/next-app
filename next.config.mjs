/** @type {import('next').NextConfig} */
// import createNextIntlPlugin from 'next-intl/plugin';
//
// const withNextIntl = createNextIntlPlugin(
//   "./src/i18n/request.ts"
// );

const nextConfig = {
  output:'export',
  // trailingSlash: true,
  // images: { unoptimized: true },
  reactStrictMode: false,
};

export default nextConfig;
