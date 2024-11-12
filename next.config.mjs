/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "c.saavncdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.wynk.in",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
