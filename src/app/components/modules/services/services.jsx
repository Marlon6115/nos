import React from "react";
import seguridad from "@/assets/seguridad.svg";
import serie from "@/assets/lupa-support.svg";
import reparacion from "@/assets/reparacion.svg";
import styles from "./services.module.scss";
import { ItemServices } from "@/UI/itemServices/itemServices";
import { Fade } from "@/UI/fade/fade";

const dataServices = [
  {
    id: 1,
    title: "Consulta Tu Cobertura",
    desc: "Inicia sesión con tu cuenta para consultar el estado de la cobertura de tus auriculares",
    btn: "Más Información",
    img: seguridad,
  },
  {
    id: 2,
    title: "Encuentra Tu Número De Serie",
    desc: "Aprende dónde encontrar el número de serie",
    btn: "Encontrar Número De Serie",
    img: serie,
  },
  {
    id: 3,
    title: "Opciones De Servicio",
    desc: "Conozca sus opciones de servicio y reparación certificadas por NOS",
    btn: "Más Información",
    img: reparacion,
  },
];

export const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Servicio y Reparación</h1>
      <div className={styles.serviceItems}>
        {dataServices &&
          dataServices.map((element) => (
            <Fade way="down" key={element.id}>
              <ItemServices {...element} />
            </Fade>
          ))}
        {/* <div class="items down">
          <img src="./assets/lupa-support.svg" alt="" />
          <h2>Encuentra Tu Número De Serie</h2>
          <h3>Aprende dónde encontrar el número de serie</h3>
          <strong>Encontrar Número De Serie</strong>
        </div>
        <div class="items down">
          <img src="./assets/reparacion.svg" alt="" />
          <h2>Opciones De Servicio</h2>
          <h3>
            Conozca sus opciones de servicio y reparación certificadas por NOS
          </h3>
          <strong>Más Información</strong>
        </div> */}
      </div>
    </div>
  );
};
