"use client";
import React from "react";
import styles from "./modal.module.scss";
import close from "@/assets/close.svg";
import { ImageRender } from "@/UI/Image/image";
export const Modal = ({ children, currentState, handleChange }) => {
  return (
    <div
      className={`${styles.containerModal} ${currentState && styles.active}`}
      onClick={handleChange}
    >
      <div
        className={styles.childrenContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className={styles.closeIcon} onClick={handleChange}>
          <ImageRender propImg={close} modifiers={{ className: styles.icon }} />
        </div>
      </div>
    </div>
  );
};
