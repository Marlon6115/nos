"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./words.module.scss";
import { ItemWord } from "@/UI/itemWord/itemWord";
import { useFirestore } from "@/hooks/useFirestore";

export const Words = () => {
  const [dataFetch, setdataFetch] = useState(false);
  const { data, loading, error, getData } = useFirestore("parrafo");
  const handleCallData = async () => {
    const wordsData = await getData();
    if (wordsData) setdataFetch(wordsData);
  };
  useMemo(() => {
    if (data) {
      handleCallData();
    }
  }, []);
  if (!dataFetch) {
    <h1>Cargando</h1>;
  }
  return (
    <div className={styles.columnElements}>
      {dataFetch &&
        dataFetch.map((element) => <ItemWord key={element.id} {...element} />)}
      <section id="tech"></section>
    </div>
  );
};
