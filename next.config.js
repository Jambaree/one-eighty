/** @type {import('next').NextConfig} */

const wpBaseUrl = process.env.NEXT_PUBLIC_WP_URL?.replace(
  "https://",
  ""
)?.replace("http://", "")

const nextConfig = {
  transpilePackages: ["@nextwp/core"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: wpBaseUrl,
      },
      {
        protocol: "http",
        hostname: wpBaseUrl,
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
