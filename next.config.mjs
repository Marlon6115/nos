/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@use "@/styles/_variables" as *;\n@use "@/styles/_mixins" as *;\n`,
  },
};

export default nextConfig;
