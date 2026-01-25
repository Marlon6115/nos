import React from "react";
import styles from "./itemServices.module.scss"
import { ImageRender } from "../Image/image";

export const ItemServices = ({ title, desc, btn, img }) => {
  return (
    <div className={` ${styles.items} ${styles.down}`}>
      <ImageRender propImg={img} />
      <h2>{title}</h2>
      <h3>{desc}</h3>
      <strong>{btn}</strong>
    </div>
  );
};
