"use client";
import React, { useState } from "react";
import styles from "../forms.module.scss";
import { InputComponent } from "@/UI/input/input";
import { Btn } from "@/UI/btn/btn";
import { Toast } from "@/modules/toast/toast";

export const CardModalLogin = ({ handleChange }) => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const finalData = {
      email: data.email,
      password: data.password,
      keepSession: formData.get("keepSession") === "on",
      ssssssssssss,
    };
    showToast("Usuario registrado correctamente", "success");
  };
  return (
    <div className={styles.cardModal}>
      <div className={styles.logo}>
        <label>NOS</label>
      </div>
      <h3>Iniciar sesión</h3>
      <form className={styles.itemsForm} onSubmit={handleSubmit}>
        <InputComponent
          type="email"
          placeholder="Email"
          modifiers={{
            name: "email",
            id: "email",
            required: true,
            autoComplete: "username",
          }}
        />
        <InputComponent
          type="password"
          placeholder="Contraseña"
          modifiers={{
            name: "password",
            id: "password",
            minLength: 6,
            required: true,
            autoComplete: "current-password",
          }}
        />
        <a className={styles.forgotLink}>¿Olvidaste tu contraseña?</a>
        <div className={styles.footerCard}>
          <Btn btnColor="black" text="Iniciar Sesión" type="submit" />
          <Btn btnColor="white" text="Registrarse" type="submit" />
        </div>
      </form>
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={handleCloseToast}
      />
    </div>
  );
};
