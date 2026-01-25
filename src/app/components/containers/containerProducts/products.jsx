"use client"
import React, { useState } from "react";
import nosSpeak from "@/assets/NOS-Spek.png";
import NosOs from "@/assets/NOS-Os.png";
import Z9pro from "@/assets/Z9-Pro-productos.png";
import NosSon from "@/assets/NOS-Son 3.png";
import X1Pro from "@/assets/X1-Pro-productos.png";
import Z11 from "@/assets/Z11-Pro.png";
import styles from "./products.module.scss";
import { CardProduct } from "@/modules/cardProduct/cardProduct";
import { Modal } from "@/modules/modal/modal";
const dataProducts = [
  {
    id: 1,
    newStatus: true,
    imagePro: nosSpeak,
    title: "NOS Spek",
    resume: "Premium Speaker",
  },
  {
    id: 2,
    newStatus: false,
    imagePro: NosOs,
    title: "NOS Os",
    resume: "Premium Speaker",
  },
  {
    id: 3,
    newStatus: false,
    imagePro: Z9pro,
    title: "Z9 Pro",
    resume: "Headphones Premium",
  },
  {
    id: 4,
    newStatus: false,
    imagePro: NosSon,
    title: "NOS Son 3",
    resume: "Premium Earphones",
  },
  {
    id: 5,
    newStatus: false,
    imagePro: X1Pro,
    title: "X1 Pro",
    resume: "Premium Headphones",
  },
  {
    id: 6,
    newStatus: false,
    imagePro: Z11,
    title: "Z11 Pro",
    resume: "Headphones Premium",
  },
];
export const Products = () => {
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state)
  }
  return (
    <div>
      <Modal currentState={state} handleChange={() => handleChange()} />
      <div className={styles.containerProducts} id="products">
        <h1>Diseñados para sentir cada nota con claridad y emoción.</h1>

        <div className={styles.slider}>
          {dataProducts &&
            dataProducts.map((element) => (
              <CardProduct key={element.id} {...element}  handleChangue={() =>  handleChange()}/>
            ))}
        </div>
      </div>
    </div>
  );
};
