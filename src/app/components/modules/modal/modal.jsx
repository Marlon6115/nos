"use client";
import React, { useState } from "react";
import styles from "./modal.module.scss";
import nosSpeak from "@/assets/NOS-Spek.png";
import { ImageRender } from "@/UI/Image/image";
import generalStyles from "@/generalStyles";
import close from "@/assets/close.svg";
export const Modal = ({ currentState, handleChange }) => {
  return (
    <div
      className={`${styles.containerModal} ${currentState && styles.active}`}
      onClick={handleChange}
    >
      <div
        className={`${styles.cardModal} ${currentState && styles.active}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeIcon} onClick={handleChange}>
          <ImageRender
            propImg={close}
            modifiers={{ className: generalStyles.icon }}
          />
        </div>
        <div className={styles.cardImage}>
          <ImageRender
            propImg={nosSpeak}
            modifiers={{ className: generalStyles.cardImage }}
          />
        </div>
        <div className={styles.resume}>
          <b>NUEVO LANZAMIENTO</b>
          <strong>NOS Spek</strong>
          <p>
            Revoluciona tu experiencia auditiva coFn sonido de alta definición
            ytecnología inteligente que se adapta a ti.
          </p>
          <ul>
            <li>12 Horas de Batería</li>
            <li>Resistencia al agua IPX7</li>
            <li>Bluetooth 5.3 Ultra estable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
