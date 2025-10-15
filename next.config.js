/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mantiene tus configuraciones existentes
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // ✅ Redirección automática www → sin-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.magiaimaginacion.cl' }],
        destination: 'https://magiaimaginacion.cl/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
