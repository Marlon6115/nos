import React from "react";
import { ImageRender } from "@/UI/Image/image";
import generalStyles from "@/generalStyles";

import styles from "./cardModalProduct.module.scss";

export const CardModalProduct = ({ currentState, data }) => {
  if (!data) {
    <div className={`${styles.cardModal} ${currentState && styles.active}`}>
      <h3>Cargando</h3>
    </div>;
  }
  return (
    <div className={`${styles.cardModal} ${currentState && styles.active}`}>
      <div className={styles.cardImage}>
        <ImageRender
          propImg={data?.imagen}
          modifiers={{ className: generalStyles.cardImage }}
        />
      </div>
      <div className={styles.resume}>
        {data?.estado && <b>NUEVO LANZAMIENTO</b>}
        <strong>{data?.nombre}</strong>
        <p>{data?.descripcion}</p>
        <ul>
          <li>{data?.duracion}</li>
          <li>{data?.resistencia}</li>
          <li>{data?.bluetooth}</li>
        </ul>
      </div>
    </div>
  );
};
