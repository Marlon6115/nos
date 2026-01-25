import React from "react";
import styles from "./itemWord.module.scss"
import { ImageRender } from "../Image/image";



export const ItemWord = ({itemImage, text}) => {
  return (
    <div className={`${styles.display3} ${styles.text}`} data-word={text}>
      <div className={styles.floatImage}>
        <ImageRender
          propImg={itemImage}
          modifiers={{ className: styles.textImage }}
        />
      </div>
      {text}
    </div>
  );
};
