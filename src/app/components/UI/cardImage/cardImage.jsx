import React from 'react'
import styles from "./cardImage.module.scss";

export const CardImage = () => {
  return (
    <div className={styles.cover}>
      <ImageRender
        propImg={imagePro}
        modifiers={{ className: styles.cardImage }}
      />
    </div>
  )
}
