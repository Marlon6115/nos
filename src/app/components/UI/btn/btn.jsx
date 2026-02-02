import React from "react";
import Link from "next/link";
import styles from "./btn.module.scss";

export const Btn = ({
  href,
  text,
  onClick,
  type,
  id,
  children,
  modifiers,
  btnColor = "white" | "black" | "linkWhite" | "linkBlack" | "transparent",
}) => {
  return href ? (
    <Link
      className={`${styles.itembtn} ${styles.link} ${styles[btnColor]}`}
      href={href || "/"}
      key={id}
    >
      {children}
      {text}
    </Link>
  ) : (
    <button
      className={`${styles.itembtn} ${styles[btnColor]}`}
      key={id}
      onClick={onClick}
      type={type || "button"}
      {...modifiers}
    >
      {children}
      {text}
    </button>
  );
};
