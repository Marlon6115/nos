"use client";
import React, { useMemo, useState } from "react";
import styles from "./contact.module.scss";
import generalStyles from "@/generalStyles";
import { ImageRender } from "@/UI/Image/image";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import youtube from "@/assets/youtube.svg";
import linkedin from "@/assets/linkedin.svg";
import { Btn } from "@/UI/btn/btn";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useFirestore } from "@/hooks/useFirestore";
const products = [
  {
    id: 1,
    name: "Cj 7 Pro",
    desc: "Headphones Premium",
    img: "CJ-7Pro_kyfzzl",
  },
  { id: 2, name: "CJ 7", desc: "Headphones Premium", img: "CJ-7_lp8ett" },
  {
    id: 3,
    name: "Z9 Pro",
    desc: "Headphones Premium",
    img: "Z9-Pro_iqiwdg",
  },
];

export const Contact = () => {
  const [dataFetch, setdataFetch] = useState(false);
  const { data, loading, error, getData } = useFirestore("carrusel");
  const handleCallData = async () => {
    const carrouselData = await getData();
    if (carrouselData) setdataFetch([...carrouselData, ...carrouselData]);
  };
  useMemo(() => {
    if (data) {
      handleCallData();
    }
  }, []);
  return (
    <div className={generalStyles.generalContainer}>
      <div className={styles.containerContact}>
        <div className={styles.contact}>
          <section id="contact"></section>
          <ul className={styles.containerNav}>
            <Btn href="#products" text="Productos" btnColor="linkWhite" />
            <Btn href="#tech" text="Tecnologia" btnColor="linkWhite" />
            <Btn href="#support" text="Soporte" btnColor="linkWhite" />
            <Btn href="#contact" text="Contacto" btnColor="linkWhite" />
          </ul>
          <h1>¿Tienes alguna consulta? Estamos aquí para ti</h1>
          <div className={styles.details}>
            <div className={styles.itemDetails}>
              <p>TELEFONO</p>
              <h5>+593 1234 567</h5>
            </div>
            <div className={styles.itemDetails}>
              <p>E-MAIL</p>
              <h5>support@nos.com</h5>
            </div>
            <div className={styles.itemDetails}>
              <p>DIRECCION</p>
              <h5>Av. Ladrón de Guevara E11-253, Quito 170143</h5>
            </div>
          </div>
          <div className={styles.details}>
            <h3>Contáctanos y obtén asistencia personalizado</h3>
            <div className={styles.itemDetails}>
              <input
                type="email"
                className="input-component input-white"
                placeholder="Email address"
              />
              <Btn text="Contacto" btnColor="transparent" />
            </div>
          </div>
          <div className={`${styles.socials} ${styles.desktop}`}>
            <ImageRender propImg={facebook} />
            <ImageRender propImg={instagram} />
            <ImageRender propImg={youtube} />
            <ImageRender propImg={linkedin} />
          </div>
        </div>
        <div className={styles.sliderPoster}>
          <div className={styles.slideTrack}>
            {dataFetch &&
              dataFetch.map((product, index) => (
                /* Usamos index como key porque los elementos se repiten, 
             en producción idealmente usa un ID único compuesto */
                <div className={styles.poster} key={`${product?.id}-${index}`}>
                  <div className={styles.details}>
                    <div>
                      <h3>{product?.nombre}</h3>
                      <p>{product?.clasificacion}</p>
                    </div>
                  </div>
                  {/* Nota: En Next.js se recomienda usar <Image /> de 'next/image' */}
                  <ImageRender propImg={product?.imagen} />
                  {/* <img src={} alt={product.name} /> */}
                </div>
              ))}
          </div>
        </div>
        {/* <div className={styles.sliderPoster}>
          <div className={styles.slideTrack} id="poster-carousel">
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>Cj 7 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7Pro.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>CJ 7</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>Z9 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/Z9-Pro.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>CJ 7 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7Pro.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>CJ 7</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/CJ-7.jpg" alt="" />
            </div>
            <div className={styles.poster}>
              <div className={styles.details}>
                <div>
                  <h3>Z9 Pro</h3>
                  <p>Headphones Premium</p>
                </div>
              </div>
              <img src="./assets/Z9-Pro.jpg" alt="" />
            </div>
          </div>
        </div> */}
        {/* <div className={`${styles.socials} ${styles.mobile}`}>
          <img src="./assets/facebook.svg" alt="" />
          <img src="./assets/instagram.svg" alt="" />
          <img src="./assets/youtube.svg" alt="" />
          <img src="./assets/linkedin.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
};
