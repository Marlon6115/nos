"use client"
import { useState, useCallback } from "react";
import { db } from "@/firebase/config"; // Tu configuración
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export const useFirestore = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. Función para OBTENER datos (Read)
  // Usamos useCallback para que no se re-cree infinitamente en useEffects
  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(result)
      return result
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [collectionName]);

  // 2. Función para AGREGAR datos (Create)
  const addData = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = await addDoc(collection(db, collectionName), payload);

      // Opcional: Actualizar el estado local automáticamente para ver el cambio sin recargar
      setData((prevData) => [...prevData, { id: docRef.id, ...payload }]);

      return docRef.id; // Retornamos el ID por si lo necesitas
    } catch (err) {
      setError(err.message);
      throw err; // Relanzamos error para manejarlo en el componente si queremos
    } finally {
      setLoading(false);
    }
  };

  // 3. (Bonus) Función para BORRAR datos
  const deleteData = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, collectionName, id));
      // Filtramos el estado local para quitar el item borrado visualmente
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    getData, // Función para leer
    addData, // Función para escribir
    deleteData, // Función para borrar
  };
};
