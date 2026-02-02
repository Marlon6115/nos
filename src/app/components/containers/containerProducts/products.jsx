"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./products.module.scss";
import { CardProduct } from "@/modules/cardProduct/cardProduct";
import { Modal } from "@/modules/modal/modal";
import { CardModalProduct } from "@/modules/cardModalProduct/cardModalProduct";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useFirestore } from "@/hooks/useFirestore";

const dataProducts = [
  {
    id: 1,
    newStatus: true,
    imageURL: "NOS-Spek_d1cdcj",
    title: "NOS Spek",
    resume: "Premium Speaker",
    descripcion:
      "Revoluciona tu experiencia auditiva coFn sonido de alta definición ytecnología inteligente que se adapta a ti.",
    duracion: "12 Horas de Batería",
    resistencia: "Resistencia al agua IPX7",
    bluetooth: "Bluetooth 5.3 Ultra estable",
  },
  {
    id: 2,
    newStatus: false,
    imageURL: "NOS-Os_hftryj",
    title: "NOS Os",
    resume: "Premium Speaker",
    descripcion:
      "Revoluciona tu experiencia auditiva coFn sonido de alta definición ytecnología inteligente que se adapta a ti.",
    duracion: "12 Horas de Batería",
    resistencia: "Resistencia al agua IPX7",
    bluetooth: "Bluetooth 5.3 Ultra estable",
  },
  {
    id: 3,
    newStatus: false,
    imageURL: "Z9-Pro-productos_twteuh",
    title: "Z9 Pro",
    resume: "Headphones Premium",
    descripcion:
      "Revoluciona tu experiencia auditiva coFn sonido de alta definición ytecnología inteligente que se adapta a ti.",
    duracion: "12 Horas de Batería",
    resistencia: "Resistencia al agua IPX7",
    bluetooth: "Bluetooth 5.3 Ultra estable",
  },
  {
    id: 4,
    newStatus: false,
    imageURL: "Z9-Pro-productos_twteuh",
    title: "NOS Son 3",
    resume: "Premium Earphones",
    descripcion:
      "Revoluciona tu experiencia auditiva coFn sonido de alta definición ytecnología inteligente que se adapta a ti.",
    duracion: "12 Horas de Batería",
    resistencia: "Resistencia al agua IPX7",
    bluetooth: "Bluetooth 5.3 Ultra estable",
  },
  {
    id: 5,
    newStatus: false,
    imageURL: "Z9-Pro-productos_twteuh",
    title: "X1 Pro",
    resume: "Premium Headphones",
    descripcion:
      "Revoluciona tu experiencia auditiva coFn sonido de alta definición ytecnología inteligente que se adapta a ti.",
    duracion: "12 Horas de Batería",
    resistencia: "Resistencia al agua IPX7",
    bluetooth: "Bluetooth 5.3 Ultra estable",
  },
  {
    id: 6,
    newStatus: false,
    imageURL: "Z9-Pro-productos_twteuh",
    title: "Z11 Pro",
    resume: "Headphones Premium",
    descripcion:
      "Revoluciona tu experiencia auditiva coFn sonido de alta definición ytecnología inteligente que se adapta a ti.",
    duracion: "12 Horas de Batería",
    resistencia: "Resistencia al agua IPX7",
    bluetooth: "Bluetooth 5.3 Ultra estable",
  },
];

// Esta función corre en el servidor

export const Products = () => {
  const [currentProduct, setCurrentProduct] = useState(false);
  const [state, setState] = useState(false);
  const [products, setProducts] = useState(false);
  const { data, loading, error, getData } = useFirestore("productos");
  const handleChange = (data) => {
    setCurrentProduct(data);
    setState(!state);
  };
  const handleCallData = async () => {
    const productsData = await getData();
    if (productsData) setProducts(productsData);
  };
  useMemo(() => {
    if (data) {
      handleCallData();
    }
  }, []);

  return (
    <div>
      <Modal currentState={state} handleChange={() => handleChange()}>
        <CardModalProduct
          handleChange={handleChange}
          currentState={state}
          data={currentProduct}
        />
      </Modal>
      <div className={styles.containerProducts} id="products">
        <h1>Diseñados para sentir cada nota con claridad y emoción.</h1>

        <div className={styles.slider}>
          {products &&
            products.map((element) => (
              <CardProduct
                key={element.id}
                data={element}
                handleChangue={() => handleChange(element)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
