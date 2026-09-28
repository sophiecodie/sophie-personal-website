/** @type {import('next').NextConfig} */
const nextConfig = {
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
