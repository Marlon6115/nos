import React from "react";
import styles from "./fade.module.scss";

export const Fade = ({ children, way }) => {
  return (
    <div className={`${styles.containerStamp} ${styles[way]}`}>{children}</div>
  );
};
