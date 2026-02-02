import React from "react";
import styles from "./cardProduct.module.scss";
import { ImageRender } from "@/UI/Image/image";
import generalStyles from "@/generalStyles";
export const CardProduct = ({ data, handleChangue }) => {
  return (
    <div className={styles.cardProduct} onClick={() => handleChangue()}>
      <div className={styles.showMore}>
        <small>Ver mas</small>
      </div>
      {data?.estado && (
        <div className={styles.newItem}>
          <small>Nuevo</small>
        </div>
      )}
      <div className={styles.cover}>
        <ImageRender
          propImg={data?.imagen}
          modifiers={{ className: generalStyles.cardImage }}
        />
      </div>
      <div className={styles.description}>
        <strong>{data?.nombre}</strong>
        <small>{data?.clasificacion}</small>
      </div>
    </div>
  );
};
