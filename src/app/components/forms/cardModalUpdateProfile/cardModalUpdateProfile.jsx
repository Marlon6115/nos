"use client";
import React, { useState } from "react";
import styles from "../forms.module.scss";
import { InputComponent } from "@/UI/input/input";
import { Btn } from "@/UI/btn/btn";
import { useFirestore } from "@/hooks/useFirestore";

export const CardModalUpdateProfile = ({ notification, data }) => {
  const { updateUserPassword, deleteUserAccount, loading } =
    useFirestore("usuarios");

  const [inputState, setInputState] = useState({
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    newPassword: "",
    repeatPassword: "",
  });
  const [countdown, setCountdown] = useState(5);
  const [isHolding, setIsHolding] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const validateInput = (name, value) => {
    let errorMsg = "";

    if (name === "newPassword") {
      if (!value) errorMsg = "La contraseña es requerida";
      else if (value.length < 6) errorMsg = "Mínimo 6 caracteres";
      else if (!/(?=.*[A-Z])/.test(value))
        errorMsg = "Debe contener una mayúscula";
      else if (!/(?=.*\d)/.test(value)) errorMsg = "Debe contener un número";
    }

    if (name === "repeatPassword") {
      if (value !== inputState.newPassword) {
        errorMsg = "Las contraseñas no coinciden";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;

    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateInput(name, value);

    if (name === "newPassword" && inputState.repeatPassword) {
      setErrors((prev) => ({
        ...prev,
        repeatPassword:
          value !== inputState.repeatPassword
            ? "Las contraseñas no coinciden"
            : "",
      }));
    }
  };

  // ---------------- ACTUALIZAR CONTRASEÑA ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      errors.newPassword ||
      errors.repeatPassword ||
      !inputState.currentPassword
    ) {
      notification({
        message: "Revisa los campos",
        type: "error",
      });
      return;
    }

    try {
      await updateUserPassword(
        inputState.currentPassword,
        inputState.newPassword,
      );

      notification({
        message: "Contraseña actualizada correctamente",
        type: "success",
      });

      setInputState({
        currentPassword: "",
        newPassword: "",
        repeatPassword: "",
      });
    } catch (error) {
      notification({
        message: error.message || "Error al actualizar la contraseña",
        type: "error",
      });
    }
  };
  const handleLogOut = () => {
    localStorage.removeItem("userProfile");
    window.location.reload();
  };
  const startDeleteCountdown = () => {
    if (!inputState.currentPassword) {
      notification({
        message: "Ingresa tu contraseña para eliminar la cuenta",
        type: "error",
      });
      return;
    }

    setIsHolding(true);
    setCountdown(5);

    const id = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(id);
          handleDeleteAccount();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimerId(id);
  };

  const cancelDeleteCountdown = () => {
    clearInterval(timerId);
    setIsHolding(false);
    setCountdown(5);
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteUserAccount(inputState.currentPassword);
      handleLogOut();
      notification({
        message: "Cuenta eliminada correctamente",
        type: "success",
      });
    } catch (error) {
      notification({
        message: "Contraseña incorrecta",
        type: "error",
      });
    } finally {
      setIsHolding(false);
      setCountdown(5);
    }
  };

  return (
    <div className={styles.cardModal}>
      <label>NOS</label>

      <h4>Actualizar perfil</h4>
      <h5>{data?.email}</h5>

      <Btn
        btnColor="orange"
        type="button"
        disabled={loading}
        text={
          isHolding ? `Mantén presionado (${countdown}s)` : "Eliminar cuenta"
        }
        modifiers={{
          onMouseDown: startDeleteCountdown,
          onMouseUp: cancelDeleteCountdown,
          onMouseLeave: cancelDeleteCountdown,
          onTouchStart: startDeleteCountdown,
          onTouchEnd: cancelDeleteCountdown,
        }}
      />

      <form className={styles.itemsForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputGroup}>
          <InputComponent
            type="password"
            placeholder="Contraseña actual"
            modifiers={{
              name: "currentPassword",
              value: inputState.currentPassword,
              onChange: handleChangeText,
              autoComplete: "current-password",
            }}
          />
        </div>

        <div className={styles.inputGroup}>
          <InputComponent
            type="password"
            placeholder="Nueva contraseña"
            modifiers={{
              name: "newPassword",
              value: inputState.newPassword,
              onChange: handleChangeText,
              autoComplete: "new-password",
            }}
          />
          <span className={styles.errorMsg}>{errors.newPassword}</span>
        </div>

        <div className={styles.inputGroup}>
          <InputComponent
            type="password"
            placeholder="Repite la contraseña"
            modifiers={{
              name: "repeatPassword",
              value: inputState.repeatPassword,
              onChange: handleChangeText,
              autoComplete: "new-password",
            }}
          />
          <span className={styles.errorMsg}>{errors.repeatPassword}</span>
        </div>

        <div className={styles.footerCard}>
          <Btn
            btnColor="black"
            text={loading ? "Actualizando..." : "Actualizar"}
            type="submit"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};
