const BEE_REWRITE = {
  source: "/bee.js",
  destination: "https://cdn.splitbee.io/sb.js",
};

const HIVE_REWRITE = {
  source: "/_hive/:slug",
  destination: "https://hive.splitbee.io/:slug",
};

module.exports = {
  eslint: {
    dirs: ["."],
  },
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "pl"],
  },
  images: {
    images: {
      domains: ["cdn.sanity.io"],
      formats: ["image/webp"],
      loader: "custom",
    },
  },
  async rewrites() {
    return [BEE_REWRITE, HIVE_REWRITE];
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
  },
};
