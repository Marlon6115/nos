import React, { useState } from "react";
import styles from "./input.module.scss";
import eyeOpen from "@/assets/eye1.svg";
import eyeClosed from "@/assets/eye2.svg";
import { ImageRender } from "../Image/image";

export const InputComponent = ({
  modifiers,
  color = "black",
  name = "text",
  type = "text",
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField =
    type === "password" || placeholder?.toLowerCase().includes("contraseña");

  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type={inputType}
        className={`
          ${styles.inputComponent} 
          ${styles[color]} 
          ${isPasswordField ? styles.hasIcon : ""}
        `}
        placeholder={placeholder || "Escribe aquí..."}
        autoComplete={isPasswordField ? "current-password" : "off"}
        id="password-input"
        {...modifiers}
      />

      {isPasswordField && (
        <div
          type="button" 
          className={styles.toggleBtn}
          onClick={togglePasswordVisibility}
          aria-label={
            showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
          }
        >
          <ImageRender
            propImg={showPassword ? eyeOpen : eyeClosed}
            modifiers={{ className: styles.eye }}
          />
        </div>
      )}
    </div>
  );
};
