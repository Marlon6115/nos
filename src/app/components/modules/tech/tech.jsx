"use client";
import React, { useRef, useState } from "react";
import generalStyles from "@/generalStyles";
import styles from "./tech.module.scss";
import nosUltra from "@/assets/Os-Ultra.jpg";
import z11Pro from "@/assets/Z11-Pro-tecnologia.jpg";
import pdBudsPro from "@/assets/Pd-Buds Pro.jpg";
import x1Pro from "@/assets/X1-Pro-tecnologia.jpg";
import calidad from "@/assets/calidad-de-sonido.svg";
import cancelacion from "@/assets/cancelacion-de-ruido.svg";
import bateria from "@/assets/bateria.svg";
import resistencia from "@/assets/gota.svg";
import right from "@/assets/flecha-blanca-der.svg";
import left from "@/assets/flecha-blanca-isq.svg";
import { ImageRender } from "@/UI/Image/image";
import { isMobile } from "react-device-detect";

const dataTech = [
  {
    id: 12312,
  },
  {
    id: 1,
    title: "Calidad de sonido",
    desc: "Impulsado por innovación y diseño, NOS te sumerge en un sonido puro y equilibrado que se ajusta a tu ambiente, redefiniendo la forma en que escuchas tu mundo.",
    img: nosUltra,
    icon: calidad,
  },
  {
    id: 2,
    title: "Cancelación de ruido",
    desc: "NOS utiliza un sistema inteligente de cancelación de ruido que analiza tu entorno en tiempo real y ajusta el sonido para ofrecer una experiencia auditiva limpia, profunda y sin interferencias",
    img: z11Pro,
    icon: cancelacion,
  },
  {
    id: 3,
    title: "Larga duración de batería",
    desc: "Con una batería de larga duración, NOS te acompaña durante todo el día sin interrupciones. Disfruta de horas continuas de música, llamadas y concentración con un rendimiento confiable que se adapta a tu ritmo.",
    img: pdBudsPro,
    icon: bateria,
  },
  {
    id: 4,
    title: "Resistencia al agua y al sudor",
    desc: "Ni la lluvia ni el esfuerzo detienen tu ritmo. Con su resistencia al agua y al sudor, NOS está hecho para seguirte en cada paso, manteniendo la música viva donde quiera que estés.",
    img: x1Pro,
    icon: resistencia,
  },
];

export const Tech = () => {
  const [currentIndex, setCurrentIndex] = useState(isMobile ? 0 : 1);
  const refSlider = useRef();
  const handleChangueNext = () => {
    if (currentIndex === dataTech.length - 1) return;
    console.log(currentIndex);
    // btnNext.classList.remove("btn-tech-active");
    setCurrentIndex(currentIndex + 1);
    // updateActive();
    // btnPrev.classList.add("btn-tech-active");
    // updateTextContent();
    refSlider.current.children[currentIndex + 1].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };
  const handleChanguePrev = () => {
    if (currentIndex <= 1) return;
    // if (index <= (isMobile ? 0 : 1)) return;
    // if (index <= (isMobile ? 1 : 2)) btnPrev.classList.remove("btn-tech-active");

    const ind = Math.max(currentIndex === 1 ? 0 : currentIndex - 2, 0);
    // btnNext.classList.add("btn-tech-active");
    // index = Math.max(index - 1, 0);
    // updateActive();
    // updateTextContent();
    refSlider.current.children[ind].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: isMobile ? "end" : "nearest",
    });
    setCurrentIndex(currentIndex - 1);
  };
  // useEffect(() => {
  //   if (!refSlider.current) return;
  //   refSlider.current.style.height !== 0 && !isMobile
  //     ? (refSlider.current.style.height = customHeight.offsetHeight + "px")
  //     : isMobile &&
  //       (refSlider.current.style.height =
  //         customHeight.offsetHeight + refSlider.current.offsetHeight + 20 + "px");
  // }, []);

  return (
    <div className={generalStyles.generalContainer}>
      <div className={styles.containerTech}>
        <h1>
          Calidad inigualable, funciones inteligentes, y tecnologías innovadoras
        </h1>
        <section id="tech"></section>
        <div className={styles.description}>
          <div className={styles.techResume}>
            <div className={styles.title}>
              <img
                src="./assets/calidad-de-sonido.svg"
                className={styles.icons}
                alt=""
              />
              {/* <h3 className={styles.titleTech}></h3> */}
            </div>
            <div className={styles.resume}>
              {/* <small className={styles.descTech}> </small> */}
            </div>
          </div>
          <div className={styles.title}>
            <button className="" onClick={handleChanguePrev}>
              <ImageRender propImg={left} />
            </button>
            <button className="" onClick={handleChangueNext}>
              <ImageRender propImg={right} />
              {/* <img
                src="./assets/flecha-blanca-der.svg"
                className={`${styles.btnTechActive} ${styles.btnNext}`}
              /> */}
            </button>
          </div>
        </div>
        <div className={styles.slide} ref={refSlider}>
          {dataTech.map((tech, index) => (
            <div
              key={tech.id}
              className={`${styles.itemSlide} ${currentIndex === index ? styles.active : ""}`}
            >
              <ImageRender propImg={tech.img} />
            </div>
          ))}

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

export const techScript = () => {
  // const slider = document.querySelector(".slide");
  const customHeight = document.querySelector(".active");
  const slides = Array.from(slider.children);
  const tituloDiv = document.querySelector(".title-tech");
  const descDiv = document.querySelector(".desc-tech");

  tituloDiv.textContent = dataTech[0].title;
  descDiv.textContent = dataTech[0].desc;
  const isMobile = window.innerWidth <= 900;
  let index = isMobile ? 0 : 1;
  isMobile && slides.shift();

  function updateActive() {
    slides.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function updateTextContent() {
    const data = dataTech[index - (isMobile ? 0 : 1)];
    const container = document.querySelector(".tech-resume");
    if (data) {
      container.classList.add("tech-resume-gonna-change");

      setTimeout(() => {
        tituloDiv.textContent = data.title;
        descDiv.textContent = data.desc;
        container.classList.remove("tech-resume-gonna-change");
      }, 400);
    }
  }
};
