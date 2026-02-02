import { CardPortrait } from "@/modules/cardPortrait/cardPortrait";
import React from "react";
import styles from "./portrait.module.scss";
import generalStyles from "@/generalStyles";
import { ImageRender } from "@/UI/Image/image";
import { Btn } from "@/UI/btn/btn";
export const Portrait = () => {
  return (
    <div className={generalStyles.generalContainer}>
      <div className={styles.containerPortrait}>
        <div className={styles.containerBackground}>
          <ImageRender propImg="fondo_lnmbrd" />
        </div>
        <div className={styles.containerPerson}>
          <ImageRender propImg="person_rwrww6" />
        </div>
        <div className={styles.containerText}>
          <h6>Mas que Audio</h6>
        </div>
        <div className={styles.contentPortrait}>
          <div className={styles.explorerContainer}>
            <small>
              Revoluciona tu experiencia auditiva con sonido de alta definición
              y tecnología inteligente que se adapta a ti.
            </small>
            <Btn text="Explorar productos" btnColor="white" href="#products"/>
          </div>
          <CardPortrait />
        </div>
      </div>
    </div>
  );
};
