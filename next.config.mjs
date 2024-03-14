/** @type {import('next').NextConfig} */
import ESLintPlugin from 'eslint-webpack-plugin';

const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          emitError: true
        })
      );
    }
    return config;
  }
};

export default nextConfig;
