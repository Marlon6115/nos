import React from "react";
import styles from "./cardProduct.module.scss";
import { ImageRender } from "@/UI/Image/image";
import generalStyles from "@/generalStyles";
export const CardProduct = ({ newStatus, imagePro, title, resume, handleChangue }) => {
  return (
      <div className={styles.cardProduct} onClick={() => handleChangue()}>
        <div className={styles.showMore}>
          <small>Ver mas</small>
        </div>
        {newStatus && (
          <div className={styles.newItem}>
            <small>Nuevo</small>
          </div>
        )}
        <div className={styles.cover}>
          <ImageRender
            propImg={imagePro}
            modifiers={{ className: generalStyles.cardImage }}
          />
        </div>
        <div className={styles.description}>
          <strong>{title}</strong>
          <small>{resume}</small>
        </div>
  
      </div>
  );
};
