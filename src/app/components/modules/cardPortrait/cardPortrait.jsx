"use client";
import React, { useState } from "react";
import flecha from "@/assets/flecha.svg";
import { ImageRender } from "@/UI/Image/image";
import styles from "./cardPortrait.module.scss";
import generalStyles from "@/generalStyles";
import { CardModalProduct } from "../cardModalProduct/cardModalProduct";
import { Modal } from "../modal/modal";
export const CardPortrait = () => {
  const product = {
    id: 1,
    imageURL: "nos-x1-pro_ch354g",
    title: "NOS X1 Pro",
    resume: "Premium Speaker",
    descripcion:
      "Revoluciona tu experiencia auditiva coFn sonido de alta definición ytecnología inteligente que se adapta a ti.",
    duracion: "12 Horas de Batería",
    resistencia: "Resistencia al agua IPX7",
    bluetooth: "Bluetooth 5.3 Ultra estable",
  };
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
  };
  return (
    <div>
      <div className={styles.containerCard} onClick={() => handleChange()}>
        <ImageRender
          modifiers={{
            className: styles.cardImage,
          }}
          propImg={product.imageURL}
        />
        <h3>{product.title}</h3>
        <div className={styles.footer}>
          <p>Ver mas</p>
          <ImageRender propImg={flecha} />
        </div>
      </div>
      <Modal currentState={state} handleChange={() => handleChange()}>
        <CardModalProduct
          currentState={state}
          data={product}
        />
      </Modal>
    </div>
  );
};
