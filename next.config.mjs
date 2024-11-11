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
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      //   pathname: "**",
      // },
    ],
  },
};

export default nextConfig;
