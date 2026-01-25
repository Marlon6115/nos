import React from "react";
import styles from "./navContainer.module.scss";
import headphones from "@/assets/headphones-icon.svg";
import tech from "@/assets/tech-icon.svg";
import support from "@/assets/support-icon.svg";
import contact from "@/assets/contact-icon.svg";
import generalStyles from "@/generalStyles";
import { ImageRender } from "@/UI/Image/image";
import { Btn } from "@/UI/btn/btn";
export const NavMobileContainer = () => {
  return (
    <ul className={styles.containerNavMobile}>
      <Btn
        href="#products"
        text="Productos"
        btnColor="linkBlack"
        id="Productos"
      >
        <ImageRender
          propImg={headphones}
          modifiers={{ className: styles.icons }}
        />
      </Btn>
      <Btn href="#tech" text="Tecnologia" btnColor="linkBlack" id="Tecnologia">
        <ImageRender propImg={tech} modifiers={{ className: styles.icons }} />
      </Btn>
      <Btn href="#support" text="Soporte" btnColor="linkBlack" id="Soporte">
        <ImageRender
          propImg={support}
          modifiers={{ className: styles.icons }}
        />
      </Btn>
      <Btn href="#contact" text="Contacto" btnColor="linkBlack" id="Contacto">
        <ImageRender
          propImg={contact}
          modifiers={{ className: styles.icons }}
        />
      </Btn>
    </ul>
  );
};
