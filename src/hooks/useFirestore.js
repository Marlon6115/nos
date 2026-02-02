"use client";
import { useState, useCallback } from "react";
import { db, auth } from "@/firebase/config";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import {
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";

export const useFirestore = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return result;
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [collectionName]);
  const deleteUserAccount = async (currentPassword) => {
    setLoading(true);
    setError(null);

    try {
      const user = auth.currentUser;

      if (!user) {
        throw new Error("No hay usuario autenticado");
      }

      // 🔁 Reautenticación obligatoria
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword,
      );

      await reauthenticateWithCredential(user, credential);

      const userRef = doc(db, "usuarios", user.uid);
      await deleteDoc(userRef);

      await deleteUser(user);

      return true;
    } catch (err) {
      let msg = "Error al eliminar la cuenta";

      if (err.code === "auth/wrong-password") {
        msg = "La contraseña es incorrecta";
      } else if (err.code === "auth/requires-recent-login") {
        msg = "Vuelve a iniciar sesión para eliminar la cuenta";
      }

      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const setDocument = async (id, payload) => {
    setLoading(true);
    setError(null);
    try {
      // Usamos doc() con el ID que le pasamos (el UID del usuario)
      // Y usamos setDoc() en lugar de addDoc()
      const docRef = doc(db, collectionName, id);
      await setDoc(docRef, payload);

      // Actualizamos estado local
      setData((prevData) => [...prevData, { id: id, ...payload }]);

      return id;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  // -------------------------------

  // Esta funcion la dejamos por si quieres agregar cosas con ID automático (opcional)
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return setData(userCredential.user);
    } catch (err) {
      // Simplificamos el error para el frontend
      let msg = err.message;
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        msg = "Correo o contraseña incorrectos";
      } else if (err.code === "auth/too-many-requests") {
        msg = "Cuenta bloqueada temporalmente por muchos intentos fallidos.";
      }
      setError(msg); // Guardamos el mensaje amigable
      throw err; // Lanzamos el error original por si el componente lo necesita
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, collectionName, id));
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateUserPassword = async (currentPassword, newPassword) => {
    setLoading(true);
    setError(null);

    try {
      const user = auth.currentUser;

      if (!user) {
        throw new Error("No hay usuario autenticado");
      }
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword,
      );

      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      const userRef = doc(db, "usuarios", user.uid);

      await updateDoc(userRef, {
        password: newPassword,
        updatedAt: new Date(),
      });

      return true;
    } catch (err) {
      let msg = "Error al actualizar la contraseña";

      if (err.code === "auth/wrong-password") {
        msg = "La contraseña actual es incorrecta";
      } else if (err.code === "auth/weak-password") {
        msg = "La nueva contraseña es muy débil";
      } else if (err.code === "auth/requires-recent-login") {
        msg = "Vuelve a iniciar sesión para cambiar la contraseña";
      }

      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getByColumn = async (column, value) => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, collectionName),
        where(column, "==", value),
      );
      const querySnapshot = await getDocs(q);

      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    getData,
    setDocument, 
    deleteData,
    getByColumn,
    login,
    updateUserPassword, 
    deleteUserAccount,
  };
};
