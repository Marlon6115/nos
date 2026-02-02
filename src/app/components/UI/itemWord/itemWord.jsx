import React from "react";
import styles from "./itemWord.module.scss";
import { ImageRender } from "../Image/image";

export const ItemWord = ({ imagen, palabra }) => {
  return (
    <div className={`${styles.display3} ${styles.text}`} data-word={palabra}>
      <div className={styles.floatImage}>
        <ImageRender
          propImg={imagen}
          modifiers={{ className: styles.textImage }}
        />
      </div>
      {palabra}
    </div>
  );
};
