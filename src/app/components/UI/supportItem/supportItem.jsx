import React from "react";
import styles from "./supportItem.module.scss"


export const SupportItem = ({element}) => {
  return (
    <div className={styles.listItem}>
      <h3>{element.title}</h3>
      {element.items &&
        element.items.map((list) => <h4 key={list.id}>{list.item}</h4>)}
    </div>
  );
};
