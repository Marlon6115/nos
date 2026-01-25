"use client";
import React, { useRef, useState } from "react";
import styles from "./itemFaq.module.scss";
import flecha from "@/assets/flecha-preguntas.svg";
import { ImageRender } from "../Image/image";

export const ItemFaq = ({ title, description, id }) => {
  const [state, setState] = useState(false);
  const contentHeight = useRef();
  if (!title || !description || !id) return null;
  return (
    <div className={styles.question} onClick={() => setState(!state)}>
      <div className={styles.questionItem}>
        <h4>{title}</h4>
        <ImageRender
          modifiers={{
            className: `${styles.questionImg} ${styles.icons}`,
            style: state
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(180deg)" },
          }}
          propImg={flecha}
        />
      </div>
      <div
        ref={contentHeight}
        className={styles.descQuestion}
        style={
          state
            ? { height: `${contentHeight?.current?.scrollHeight}px` }
            : { height: "0px" }
        }
      >
        <p>{description}</p>
      </div>
    </div>
  );
};
