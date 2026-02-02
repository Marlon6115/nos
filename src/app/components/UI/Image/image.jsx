"use client";
import React from "react";
import imagenoFound from "@/images/imagenoFound.png";
// import { fetchSignedUrl } from "@/utils/fetchSignedUrl";
import { validateImageUrl } from "@/hooks/imageValidatorHook";
import styles from "./image.module.scss";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
export const ImageRender = ({ propImg, modifiers }) => {
  if (!propImg) {
    return (
      <Image
        {...modifiers}
        src={propImg || imagenoFound}
        alt="profileImage"
        width={0}
        height={0}
        quality={75}
      />
    );
  }
  if (propImg?.src?.includes(".svg")) {
    return (
      <Image
        {...modifiers}
        src={propImg || imagenoFound}
        alt="profileImage"
        width={0}
        height={0}
        quality={75}
      />
    );
  }
  return (
    <CldImage
      src={propImg}
      className={styles.imageRender}
      // NO uses 0. Usa un valor base alto para garantizar calidad
      // 1. DIMENSIONES BASE:
      // Estos números NO son el tamaño final en pantalla.
      // Sirven para que Next.js reserve el espacio (evita saltos) y Cloudinary sepa la proporción.
      // Usa números grandes para buena calidad base.
      width={2560}
      height={1440}
      // 2. CSS PARA QUE OBEDEZCA AL PADRE:
      // Esto sobrescribe el width/height fijos de arriba visualmente.RESPONSIVE INTELIGENTE:
      // Le dice al navegador qué versiones descargar según el ancho de pantalla.
      alt={`Imagen ${propImg}`}
      // Opcional: Recorte inteligente si quieres forzar un formato
      // Si quieres mantener la imagen original tal cual, quita el crop.
      crop={{
        type: "limit", // "limit" escala sin recortar, "fill" recorta
        source: true,
      }}
      {...modifiers}

      // onError={() => {
      //   setError(true);
      // }}
    />
  );
};
