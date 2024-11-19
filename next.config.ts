import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Adicione o basePath e assetPrefix se o repositório não for o principal (opcional)
  basePath: '/studentsTable',
  assetPrefix: '/studentsTable/',
};

export default nextConfig;
