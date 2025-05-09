import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = {
  eslint: {
    dirs: ['pages', 'utils'], 
  },
}
export default nextConfig;
