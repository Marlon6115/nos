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
      <ImageRender
        propImg={headphones}
        modifiers={{ className: styles.icons }}
      />
      <ImageRender propImg={tech} modifiers={{ className: styles.icons }} />
      <ImageRender propImg={support} modifiers={{ className: styles.icons }} />
      <ImageRender propImg={contact} modifiers={{ className: styles.icons }} />
    </ul>
  );
};
