/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: "/Portfolio",
  assetPrefix: isProd ? "https://yawerhussain42.github.io/Portfolio" : undefined,
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
