"use client";
import React, { useEffect } from "react";
import styles from "./toast.module.scss";
import error from "@/assets/error.svg";
import warning from "@/assets/warning.svg";
import check from "@/assets/check.svg";
import { ImageRender } from "@/UI/Image/image";
// Iconos SVG simples
const Icons = {
  success: check,
  error,
  warning,
};
export const Toast = ({
  show = true,
  onClose,
  type = "error",
  message = "Usuario registrado correctamente",
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={`${styles.toast} ${styles[type]}`}>
        <div className={`${styles.icon} ${styles[type]}`}>
          <ImageRender
            propImg={Icons[type]}
            modifiers={{ className: styles.svgIcon }}
          />
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};
