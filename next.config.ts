import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// El plugin buscará automáticamente ./i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    // Esto ayuda con algunas versiones de Next 15 + Turbopack
    
  },
};

export default withNextIntl(nextConfig);
