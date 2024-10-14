/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

export default nextConfig;
