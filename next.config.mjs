/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IMAGES_API: process.env.IMAGES_API,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_I: process.env.FIREBASE_APP_I,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        // hostname: "https://res.cloudinary.com",
        port: "",
        pathname: `/**`, // Permite cualquier ruta dentro de este dominio
      },
    ],
  },
  sassOptions: {
    additionalData: `@use "@/styles/_variables" as *;\n@use "@/styles/_mixins" as *;\n`,
  },
};

export default nextConfig;
