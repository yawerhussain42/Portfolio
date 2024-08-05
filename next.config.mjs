/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "Portfolio",
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images:{
    unoptimized: true,
  }
};

export default nextConfig;
