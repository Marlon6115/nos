"use client";
import React from "react";
import imagenoFound from "@/images/imagenoFound.png";
// import { fetchSignedUrl } from "@/utils/fetchSignedUrl";
import { validateImageUrl } from "@/hooks/imageValidatorHook";
import styles from "./image.module.scss";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
export const ImageRender = ({ propImg, modifiers, onClick }) => {
  if (!propImg) {
    return (
      <Image
        {...modifiers}
        src={propImg || imagenoFound}
        alt="profileImage"
        width={0}
        height={0}
        quality={75}
        onClick={onClick}
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
        onClick={onClick}
      />
    );
  }
  return (
    <CldImage
      src={propImg}
      className={styles.imageRender}
      onClick={onClick}
      width={2560}
      height={1440}
      alt={`Imagen ${propImg}`}
      crop={{
        type: "limit",
        source: true,
      }}
      {...modifiers}
    />
  );
};
