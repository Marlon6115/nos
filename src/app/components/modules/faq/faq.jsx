"use client";
import React, { useMemo, useState } from "react";
import styles from "./faq.module.scss";
import { ItemFaq } from "@/UI/itemFaq/itemFaq";
import { Fade } from "@/UI/fade/fade";
import { useFirestore } from "@/hooks/useFirestore";

const dataFaq = [
  {
    id: 1,
    title: "¿Cuánto dura la batería de mis audífonos o parlantes?",
    description:
      "La duración de la batería varía según el modelo y la marca, pero generalmente es de 10 horas o más.",
  },
  {
    id: 2,
    title: "¿Cómo funciona la tecnología de cancelación de ruido?",
    description:
      "La tecnología de cancelación de ruido funciona eliminando el ruido ambiental, permitiendo que solo pasen los sonidos deseados.",
  },
  {
    id: 3,
    title: "¿Los productos son resistentes al agua y al sudor?",
    description:
      "Sí, nuestros productos son resistentes al agua y al sudor, lo que los hace ideales para usos diarios",
  },
  {
    id: 4,
    title: "¿Realizan envíos internacionales?",
    description: "Sí, realizamos envíos internacionales a todo el mundo.",
  },
  {
    id: 5,
    title: "¿Puedo rastrear mi pedido?",
    description:
      "Sí, puedes rastrear tu pedido ingresando el número de seguimiento proporcionado en la confirmación de compra.",
  },
];
export const Faq = () => {
  const [dataFetch, setdataFetch] = useState(false);
  const { data, loading, error, getData } = useFirestore("preguntas");
  const handleCallData = async () => {
    const questionsData = await getData();
    if (questionsData) setdataFetch(questionsData);
  };
  useMemo(() => {
    if (data) {
      handleCallData();
    }
  }, []);
  return (
    <div className={styles.containerQuestions}>
      <h1>Preguntas Frecuentes</h1>
      {dataFetch &&
        dataFetch.map((element) => (
          <Fade key={element.id} way="right">
            <ItemFaq {...element} />
          </Fade>
        ))}
    </div>
  );
};
