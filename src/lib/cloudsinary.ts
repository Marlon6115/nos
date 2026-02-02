import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const getSignedImage = (publicId: string) => {
  // Esta función genera la URL con el token de acceso temporal
  const url = cloudinary.url(publicId, {
    type: 'authenticated', // O 'private', según como lo hayas subido
    sign_url: true,        // ESTO es lo mágico: genera la firma usando tu API Secret
    secure: true,
    // Puedes añadir transformaciones aquí si quieres
    width: 800,
    crop: 'limit'
  });

  return url;
};