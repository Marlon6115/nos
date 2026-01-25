import React from "react";
import nosIcon from "@/assets/nos-x1-pro.png";
import flecha from "@/assets/flecha.svg";
import { ImageRender } from "@/UI/Image/image";
import styles from "./cardPortrait.module.scss";
import generalStyles from "@/generalStyles";
export const CardPortrait = () => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.cartPortrait}>
        <ImageRender
          modifiers={{
            className: styles.cardImage
          }}
          propImg={nosIcon}
        />
        <h3>NOS X1 Pro</h3>
        <div className={styles.footer}>
          <p>Ver mas</p> 
          <ImageRender
            modifiers={{
              className: generalStyles.icon
            }}
            propImg={flecha}
          />
        </div>
      </div>
    </div>
  );
};
