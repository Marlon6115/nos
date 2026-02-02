export const validateImageUrl = (url) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = url;

        // Si carga correctamente
        img.onload = () => resolve(true);

        // Si hay error al cargar
        img.onerror = () => resolve(false);
    });
};