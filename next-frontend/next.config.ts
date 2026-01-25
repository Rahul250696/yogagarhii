import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/courses/100-hour',
        destination: '/100-hour-yoga-teacher-training-in-bali',
        permanent: true,
      },
      {
        source: '/courses/200-hour',
        destination: '/200-hour-yoga-teacher-training-in-bali',
        permanent: true,
      },
      {
        source: '/courses/300-hour',
        destination: '/300-hour-yoga-teacher-training-in-bali',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-school',
        permanent: true,
      },
      {
        source: '/about/ashram',
        destination: '/about-school',
        permanent: true,
      },
      {
        source: '/about/teachers',
        destination: '/teachers',
        permanent: true,
      },
      {
        source: '/about/testimonials',
        destination: '/testimonials',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
