import React from "react";
import styles from "./searchBar.module.scss";
import generalStyle from "@/generalStyles";
import buscar from "@/assets/buscar.svg";
import { ImageRender } from "../Image/image";
export const SearchBar = () => {
  return (
    <div className={styles.containerSearch}>
      <input
        type="search"
        className={styles.searchComponent}
        placeholder="Search"
      />
      <ImageRender
        modifiers={{ className: generalStyle.icon }}
        propImg={buscar}
      />
    </div>
  );
};
