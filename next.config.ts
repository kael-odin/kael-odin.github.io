// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 纯静态导出：构建产物在 out/，可直接部署到 GitHub Pages
  output: "export",
  // GitHub Pages 没有图片优化服务，必须关掉 next/image 的按需优化
  images: { unoptimized: true },
  // 生成 about/index.html 这种目录结构，刷新子页面不会 404
  trailingSlash: true,
};

export default nextConfig;
