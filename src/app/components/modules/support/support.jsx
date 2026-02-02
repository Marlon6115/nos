import React from "react";
import styles from "./support.module.scss";
import { Fade } from "@/UI/fade/fade";
import { SupportItem } from "@/UI/supportItem/supportItem";
import generalStyles from "@/generalStyles";

const dataSupport = [
  {
    id: 1,
    title: "Auriculares",
    items: [
      {
        id: 1,
        item: "CJ 7 Pro",
      },
      {
        id: 2,
        item: "CJ 7",
      },
      {
        id: 3,
        item: "Z11 Pro",
      },
      {
        id: 4,
        item: "Z9 Pro",
      },
      {
        id: 5,
        item: "X1 PRO",
      },
    ],
  },
  {
    id: 2,
    title: "Audífonos",
    items: [
      {
        id: 1,
        item: "NOS Z7 Fit",
      },
      {
        id: 2,
        item: "NOS U +",
      },
      {
        id: 3,
        item: "bd Buds 5 Pro",
      },
      {
        id: 4,
        item: "bd Buds 5",
      },
      {
        id: 5,
        item: "Pd Buds Pro",
      },
      {
        id: 6,
        item: "Pd Buds",
      },
    ],
  },
  {
    id: 3,
    title: "Altavoces",
    items: [
      {
        id: 1,
        item: "NOS Spek Pro",
      },
      {
        id: 2,
        item: "NOS Spek",
      },
      {
        id: 3,
        item: "NOS Os Ultra",
      },
      {
        id: 4,
        item: "NOS Os",
      },
    ],
  },
];
export const Support = () => {
  return (
    <div className={generalStyles.generalContainer} id="support">
      <div className={styles.containerSupport}>
        <Fade way="down">
          <div className={styles.display2}>
            <span>
              Soporte <span>Nos</span>
            </span>
          </div>
        </Fade>

        <div className={styles.supportItems}>
          {dataSupport &&
            dataSupport.map((element) => (
              <Fade key={element.id} way="blur">
                <SupportItem element={element}/>
              </Fade>
            ))}

          {/* <div className={`${styles.listItem}`}>
            <h4>Audífonos</h4>
            <h3>NOS Z7 Fit</h3>
            <h3>NOS U +</h3>
            <h3>bd Buds 5 Pro</h3>
            <h3>bd Buds 5</h3>
            <h3>Pd Buds Pro</h3>
            <h3>Pd Buds</h3>
          </div>
          <div className={`${styles.listItem}`}>
            <h4>Altavoces</h4>
            <h3>NOS Spek Pro</h3>
            <h3>NOS Spek</h3>
            <h3>NOS Os Ultra</h3>
            <h3>NOS Os</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};
