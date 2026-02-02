"use client"
import React, { useEffect } from "react";
import styles from "./toast.module.scss";

// Iconos SVG simples
const Icons = {
  success: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  error: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  warning: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
};

export const Toast = ({
  show, // Estado booleano
  onClose, // Función para cerrar
  type = "success", // success | error | warning
  message,
}) => {
  // Lógica de auto-cierre (3 segundos)
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
        <div className={`${styles.icon} ${styles[type]}`}>{Icons[type]}</div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};
