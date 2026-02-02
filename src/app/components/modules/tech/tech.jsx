"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import generalStyles from "@/generalStyles";
import styles from "./tech.module.scss";
import calidad from "@/assets/calidad-de-sonido.svg";
import cancelacion from "@/assets/cancelacion-de-ruido.svg";
import bateria from "@/assets/bateria.svg";
import resistencia from "@/assets/gota.svg";
import right from "@/assets/flecha-blanca-der.svg";
import left from "@/assets/flecha-blanca-isq.svg";
import rightDisabled from "@/assets/flecha-gris-der.svg";
import leftDisabled from "@/assets/flecha-gris-isq.svg";
import { ImageRender } from "@/UI/Image/image";
import { isMobile } from "react-device-detect";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useFirestore } from "@/hooks/useFirestore";

const products = [
  {
    id: 12312,
  },
  {
    id: 1,
    title: "Calidad de sonido",
    desc: "Impulsado por innovación y diseño, NOS te sumerge en un sonido puro y equilibrado que se ajusta a tu ambiente, redefiniendo la forma en que escuchas tu mundo.",
    img: "Os-Ultra_ylk7v9",
    icon: calidad,
  },
  {
    id: 2,
    title: "Cancelación de ruido",
    desc: "NOS utiliza un sistema inteligente de cancelación de ruido que analiza tu entorno en tiempo real y ajusta el sonido para ofrecer una experiencia auditiva limpia, profunda y sin interferencias",
    img: "Z11-Pro-tecnologia_b7l3kb",
    icon: cancelacion,
  },
  {
    id: 3,
    title: "Larga duración de batería",
    desc: "Con una batería de larga duración, NOS te acompaña durante todo el día sin interrupciones. Disfruta de horas continuas de música, llamadas y concentración con un rendimiento confiable que se adapta a tu ritmo.",
    img: "Pd-Buds_Pro_e8cgp3",
    icon: bateria,
  },
  {
    id: 4,
    title: "Resistencia al agua y al sudor",
    desc: "Ni la lluvia ni el esfuerzo detienen tu ritmo. Con su resistencia al agua y al sudor, NOS está hecho para seguirte en cada paso, manteniendo la música viva donde quiera que estés.",
    img: "X1-Pro-tecnologia_ldz5jz",
    icon: resistencia,
  },
];
export const Tech = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [dataFetch, setdataFetch] = useState(false);
  const { data, loading, error, getData } = useFirestore("tecnologia");
  const [currentData, setCurrentData] = useState({
    isLoading: false,
    data: products[1],
    left: leftDisabled,
    right: right,
  });
  const handleCallData = async () => {
    const techData = await getData();
    if (techData) setdataFetch(techData);
  };
  const refSlider = useRef();
  const containerRef = useRef();
  const handleChangueData = (ind) => {
    setCurrentData({ ...currentData, isLoading: true });
    setTimeout(() => {
      setCurrentData({
        data: products[ind],
        isLoading: false,
        left: ind <= 1 ? leftDisabled : left,
        right: ind === products.length - 1 ? rightDisabled : right,
      });
    }, 600);
  };
  const handleChangueNext = () => {
    if (currentIndex === products.length - 1) return;
    console.log(currentIndex + 1);
    setCurrentIndex(currentIndex + 1);
    handleChangueData(currentIndex + 1);
    refSlider.current.children[currentIndex + 1].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: isMobile ? "nearest" : "end",
    });
  };
  const handleChanguePrev = () => {
    if (currentIndex <= 1) return;

    const ind = Math.max(currentIndex === 1 ? 0 : currentIndex - 2, 0);
    refSlider.current.children[ind].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: isMobile ? "end" : "nearest",
    });
    handleChangueData(currentIndex - 1);
    setCurrentIndex(currentIndex - 1);
  };
  useMemo(() => {
    if (data) {
      handleCallData();
    }
    if (!refSlider.current || isMobile || !products) return;
    const childHeight =
      refSlider.current.children[isMobile ? 0 : 1]?.offsetHeight || 0;
    refSlider.current.style.height = `${childHeight + 20}px`;
  }, []);
  if (!products) {
    return <h1>Cargando</h1>;
  }
  return (
    <div className={generalStyles.generalContainer}>
      <div className={styles.containerTech}>
        <h1>
          Calidad inigualable, funciones inteligentes, y tecnologías innovadoras
        </h1>
        <section id="tech"></section>
        <div
          className={`${styles.description} ${currentData.isLoading ? styles.textGonnaChangue : ""}`}
        >
          <div className={styles.techResume}>
            <div className={styles.title}>
              <ImageRender propImg={calidad} />

              <h3 className={styles.titleTech}>{currentData.data.title}</h3>
            </div>
            <div className={styles.resume}>
              <small className={styles.descTech}>{currentData.data.desc}</small>
            </div>
          </div>
          <div className={styles.title}>
            <div className="" onClick={handleChanguePrev}>
              <ImageRender
                propImg={currentData.left}
                // modifiers={{ className: generalStyles.icon }}
              />
            </div>
            <div className="" onClick={handleChangueNext}>
              <ImageRender
                propImg={currentData.right}
                // modifiers={{ className: generalStyles.icon }}
              />
            </div>
          </div>
        </div>
        <div ref={containerRef} className={styles.sliderContainer}>
          <div className={styles.slide} ref={refSlider}>
            {dataFetch &&
              dataFetch.map((tech, index) => (
                <div
                  key={tech.id}
                  className={`${styles.itemSlide} ${currentIndex === index ? styles.active : ""}`}
                >
                  <ImageRender
                    propImg={tech.img}
                    modifiers={{
                      className: index === 0 && !isMobile ? styles.hidden : "",
                    }}
                  />
                </div>
              ))}
          </div>

          {/* <div className={styles.itemSlide}>
            <img src="./assets/Z11-Pro-tecnologia.jpg" alt="" />
          </div>
          <div className={styles.itemSlide}>
            <img src="./assets/Pd-Buds Pro.jpg" alt="" />
          </div>
          <div className={styles.itemSlide}>
            <img src="./assets/X1-Pro-tecnologia.jpg" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
