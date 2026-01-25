import React from "react";
import styles from "./words.module.scss";
import sonido from "@/assets/sonido.jpg";
import premium from "@/assets/premium.jpg";
import tecnologia from "@/assets/tecnologia.jpg";
import calidad from "@/assets/calidad.jpg";
import estilo from "@/assets/estilo.png";
import { ImageRender } from "@/UI/Image/image";
import { ItemWord } from "@/UI/itemWord/itemWord";

const dataWords = [
  {
    id: 1,
    itemImage: sonido,
    text: "Sonido",
  },

  {
    id: 2,
    itemImage: premium,
    text: "Premium",
  },

  {
    id: 3,
    itemImage: tecnologia,
    text: "Tecnología",
  },

  {
    id: 4,
    itemImage: calidad,
    text: "Calidad",
  },

  {
    id: 5,
    itemImage: estilo,
    text: "Estilo",
  },
];

export const Words = () => {
  return (
    <div className={styles.columnElements}>
      {dataWords &&
        dataWords.map((element) => <ItemWord key={element.id} {...element} />)}

      {/* <div className= `{${display3} ${text}`} data-word="Premium">
    <div className="float-image float-image-activation">
      <img src="./assets/premium.jpg" alt="" />
    </div>
    Premium
  </div>
  <div className= `{${display3} ${text}`} data-word="Tecnología">
    <div className="float-image float-image-activation">
      <img src="./assets/tecnologia.jpg" alt="" />
    </div>
    Tecnología
  </div>
  <div className= `{${display3} ${text}`} data-word="Calidad">
    <div className="float-image float-image-activation">
      <img src="./assets/calidad.jpg" alt="" />
    </div>
    Calidad
  </div>
  <div className= `{${display3} ${text}`} data-word="Estilo">
    <div className="float-image float-image-activation">
      <img src="./assets/estilo.png" alt="" />
    </div>
    Estilo
  </div> */}
      <section id="tech"></section>
    </div>
  );
};
