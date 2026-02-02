'use server' // <--- Esto es vital. Ejecuta el código solo en el servidor.

import { getSignedImage } from '@/lib/cloudsinary'; // Tu función original

export async function fetchSignedUrl(publicId) {
    // Aquí sí podemos usar la librería porque esto corre en Node.js
    const url = getSignedImage(publicId);
    return url;
}