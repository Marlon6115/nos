"use client";
import { Btn } from "@/UI/btn/btn";
import { SearchBar } from "@/UI/searchBar/searchBar";
import React, { useEffect, useState } from "react";
import styles from "./navContainer.module.scss";
import { isMobile } from "react-device-detect";
import { Modal } from "@/modules/modal/modal";
import { CardModalProduct } from "@/modules/cardModalProduct/cardModalProduct";
import { CardModalLogin } from "../../forms/cardModalLogin/cardModalLogin";
import { CardModaRegister } from "../../forms/cardModalRegister/cardModuleRegister";
const NavContainer = () => {
  const [logged, setLogged] = useState(false);
  const [state, setState] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const handleChange = (switcher) => {
    setState(!state);
    setLoginForm(switcher);
  };
  useEffect(() => {
    const tokenRecuperado = localStorage.getItem("userProfile");
    setLogged(tokenRecuperado);
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
                <small className={styles.welcome}>{logged}</small>
                <button color="gray2" id="logout">
                  Cerrar Sesion
                </button>
              </div>
            )}
            {!logged && (
              <div className={styles.guestModule}>
                <Btn
                  text="Iniciar sesión"
                  btnColor="black"
                  onClick={() => handleChange(true)}
                />
                {/* <button color=""></button> */}
                <Btn
                  text="Registrarse"
                  btnColor="white"
                  onClick={() => handleChange(false)}
                />
                {/* <button color="white">Registrarse</button> */}
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal currentState={state} handleChange={() => handleChange()}>
        {loginForm ? (
          <CardModalLogin handleChange={() => handleChange()} />
        ) : (
          <CardModaRegister handleChange={() => handleChange()} />
        )}
      </Modal>
    </div>
  );
};

export default NavContainer;
