/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // YouTube thumbnails for the Dance page performance cards
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async redirects() {
    return [
      // the SIIM project page was renamed to the project's real name
      { source: "/work/siim", destination: "/work/agent00hl7", permanent: true },
      // Reading + Writing split into two pages
      { source: "/reading-writing", destination: "/reading", permanent: true },
    ];
  },
};

export default nextConfig;
