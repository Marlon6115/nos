"use client";
import { Btn } from "@/UI/btn/btn";
import { SearchBar } from "@/UI/searchBar/searchBar";
import React, { useEffect, useState } from "react";
import styles from "./navContainer.module.scss";
const NavContainer = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const tokenRecuperado = localStorage.getItem("userProfile");
    setLogged(tokenRecuperado);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <small>ventas Viernes Negro - 50%</small>
      </div>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <label> NOS </label>
        </div>
        <ul className={styles.containerNav}>
          <Btn
            href="#products"
            text="Productos"
            btnColor="linkBlack"
         
          />
          <Btn
            href="#tech"
            text="Tecnologia"
            btnColor="linkBlack"

          />
          <Btn
            href="#support"
            text="Soporte"
            btnColor="linkBlack"
   
          />
          <Btn
            href="#contact"
            text="Contacto"
            btnColor="linkBlack"
    
          />
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
                onClick={() => (window.location.href = "/login")}
              />
              {/* <button color=""></button> */}
              <Btn
                text="Registrarse"
                btnColor="white"
                onClick={() => (window.location.href = "/register")}
              />
              {/* <button color="white">Registrarse</button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavContainer;
