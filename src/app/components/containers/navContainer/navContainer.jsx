"use client";
import { Btn } from "@/UI/btn/btn";
import { SearchBar } from "@/UI/searchBar/searchBar";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./navContainer.module.scss";
import { isMobile } from "react-device-detect";
import { Modal } from "@/modules/modal/modal";
import { CardModalProduct } from "@/modules/cardModalProduct/cardModalProduct";
import { CardModalLogin } from "../../forms/cardModalLogin/cardModalLogin";
import { CardModaRegister } from "../../forms/cardModalRegister/cardModuleRegister";
import { Toast } from "@/modules/toast/toast";
import { ImageRender } from "@/UI/Image/image";
import profile from "@/assets/profile.svg";
import { CardModalUpdateProfile } from "../../forms/cardModalUpdateProfile/cardModalUpdateProfile";
const SwitchComponents = ({ value, notification, data }) => {
  switch (value) {
    case "login":
      return <CardModalLogin notification={notification} />;

    case "register":
      return <CardModaRegister notification={notification} />;

    case "update":
      return <CardModalUpdateProfile notification={notification} data={data} />;

    default:
      return null; // O un componente por defecto
  }
};
const NavContainer = () => {
  const [logged, setLogged] = useState(false);
  const [state, setState] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const handleChange = (switcher) => {
    setState(!state);
    setLoginForm(switcher);
  };
  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };

  const notification = ({ message, type }) => {
    setState(!state);
    showToast(message, type);
  };
  const handleLogOut = () => {
    localStorage.removeItem("userProfile");
    window.location.reload();
  };
  useMemo(() => {
    try {
      const tokenRecuperado = JSON.parse(localStorage.getItem("userProfile"));
      setLogged(tokenRecuperado);
    } catch (error) {
      setLogged(false);
    }
  }, []);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.banner}>
          <small>ventas Viernes Negro - 50%</small>
        </div>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <label> NOS </label>
          </div>
          <ul className={styles.containerNav}>
            <Btn href="#products" text="Productos" btnColor="linkBlack" />
            <Btn href="#tech" text="Tecnologia" btnColor="linkBlack" />
            <Btn href="#support" text="Soporte" btnColor="linkBlack" />
            <Btn href="#contact" text="Contacto" btnColor="linkBlack" />
          </ul>

          <div className={styles.containerLogin}>
            <SearchBar />
            {logged && (
              <div className={styles.userModule}>
                <small className={styles.welcome}>{logged.username}</small>
                <Btn
                  text="Cerrar sesion"
                  btnColor="black"
                  onClick={() => handleLogOut()}
                />

                <ImageRender
                  propImg={profile}
                  modifiers={{ className: styles.profileIcon }}
                  onClick={() => handleChange("update")}
                />
              </div>
            )}
            {!logged && (
              <div className={styles.guestModule}>
                <Btn
                  text="Iniciar sesión"
                  btnColor="black"
                  onClick={() => handleChange("login")}
                />
                <Btn
                  text="Registrarse"
                  btnColor="white"
                  onClick={() => handleChange("register")}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal currentState={state} handleChange={() => handleChange()}>
        <SwitchComponents
          value={loginForm}
          notification={notification}
          data={logged}
        />
      </Modal>
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default NavContainer;
