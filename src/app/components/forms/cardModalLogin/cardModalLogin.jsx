"use client";
import React, { useState } from "react";
import styles from "../forms.module.scss";
import { InputComponent } from "@/UI/input/input";
import { Btn } from "@/UI/btn/btn";
import { Toast } from "@/modules/toast/toast";
import { useFirestore } from "@/hooks/useFirestore";

export const CardModalLogin = ({ notification }) => {
  const { login, data, loading } = useFirestore("usuarios");
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    try {
      await login(user.email, user.password);
      const sessionToken = `fake_auth_token_${Date.now()}`;
      const userSession = {
        isAuthenticated: true,
        username: data?.username,
        email: data?.email,
        token: sessionToken,
      };
      localStorage.setItem("userSessionToken", sessionToken);
      localStorage.setItem("userProfile", JSON.stringify(userSession));
      window.location.reload();
      notification({
        message: "¡Bienvenido de nuevo!",
        type: "success",
      });
    } catch (err) {

      notification({
        message: "Correo o contraseña incorrectos",
        type: "error",
      });
    }
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
          <Btn
            btnColor="black"
            text={loading ? "Iniciando..." : "Iniciar Sesión"}
            type="submit"
          />
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
