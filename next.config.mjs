/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin";

const i18n = nextTranslate();

const nextConfig = {
  compress: false,
  reactStrictMode: true,
  images: {
    domains: [],
  },
  ...i18n,
};

export default nextConfig;
