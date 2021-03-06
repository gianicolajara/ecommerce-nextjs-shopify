/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://gianicolajara.github.io/", "https://cdn.shopify.com/"],
    loader: "akamai",
    path: "",
  },
  basePath: "",
  assetPrefix: "",
  env: {
    NEXT_PUBLIC_SHOPIFY_API_KEY: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
    NEXT_PUBLIC_SHOPIFY_API_SECRET_KEY:
      process.env.NEXT_PUBLIC_SHOPIFY_API_SECRET_KEY,
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN:
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN,
    NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
    NEXT_PUBLIC_BASE_URL_PAGE: process.env.NEXT_PUBLIC_BASE_URL_PAGE,
    NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
