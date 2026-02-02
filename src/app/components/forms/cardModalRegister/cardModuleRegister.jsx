import React, { useState } from "react";
import styles from "../forms.module.scss"; // Asegúrate que la ruta sea correcta
import { InputComponent } from "@/UI/input/input";
import { Btn } from "@/UI/btn/btn";
import { useFirestore } from "@/hooks/useFirestore";
import { Toast } from "@/modules/toast/toast";

export const CardModaRegister = ({ handleChange }) => {
  const { addData } = useFirestore("usuarios");
  const [inputState, setInputState] = useState({
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    repeatPassword: "",
  });
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

  const validateInput = (name, value) => {
    let errorMsg = "";
    if (name === "password") {
      if (!value) errorMsg = "La contraseña es requerida";
      else if (value.length < 6) errorMsg = "Mínimo 6 caracteres";
      else if (!/(?=.*[A-Z])/.test(value))
        errorMsg = "Falta al menos una mayúscula";
      else if (!/(?=.*\d)/.test(value)) errorMsg = "Falta al menos un número";
    }

    if (name === "repeatPassword") {
      if (value !== inputState.password) {
        errorMsg = "Las contraseñas no coinciden";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
    if (name === "password" && inputState.repeatPassword) {
      if (value !== inputState.repeatPassword) {
        setErrors((prev) => ({
          ...prev,
          repeatPassword: "Las contraseñas no coinciden",
        }));
      } else {
        setErrors((prev) => ({ ...prev, repeatPassword: "" }));
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.password || errors.repeatPassword || !inputState.password) {
      return;
    }
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const finalData = {
      nombre: data.user,
      email: data.email,
      clave: data.password,
    };

    try {
      // await addData(finalData);
      showToast("Usuario registrado correctamente", "success");
      e.target.reset();
      handleChange();
    } catch (error) {
      showToast("Usuario no registrado", "error");
    }
  };

  return (
    <div className={styles.cardModal}>
      <div className={styles.logo}>
        <label>NOS</label>
      </div>
      <h3>Registrarse</h3>

      <form className={styles.itemsForm} onSubmit={handleSubmit} noValidate>
        <InputComponent
          type="text"
          placeholder="Nombre de usuario"
          modifiers={{
            name: "user",
            id: "user",
            required: true,
            autoComplete: "username",
          }}
        />

        <InputComponent
          type="email"
          placeholder="Email"
          modifiers={{
            name: "email",
            id: "email",
            required: true,
            autoComplete: "email",
          }}
        />

        <div className={styles.inputGroup}>
          <InputComponent
            type="password"
            placeholder="Contraseña"
            modifiers={{
              name: "password",
              id: "password",
              value: inputState.password,
              onChange: handleChangeText,
              pattern: "(?=.*\\d)(?=.*[A-Z]).{6,}",
              autoComplete: "new-password",
            }}
          />
          <span className={styles.errorMsg}>{errors.password}</span>
        </div>

        <div className={styles.inputGroup}>
          <InputComponent
            type="password"
            placeholder="Repite la contraseña"
            modifiers={{
              name: "repeatPassword",
              id: "repeatPassword",
              value: inputState.repeatPassword,
              onChange: handleChangeText,
              autoComplete: "new-password",
            }}
          />

          <span className={styles.errorMsg}>{errors.repeatPassword}</span>
        </div>

        <a className={styles.forgotLink}>¿Olvidaste tu contraseña?</a>

        <div className={styles.footerCard}>
          <Btn btnColor="black" text="Registrarse" type="submit" />
          <Btn btnColor="white" text="Iniciar Sesión" type="button" />
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
