// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:343981973633:web:a5eb4023f1d1499261ad80",
};
console.log("Mi Configuración:", firebaseConfig);
// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
// Inicializamos Firestore (Base de datos)
export const db = getFirestore(app);
export const auth = getAuth(app); // 2. AGREGAR ESTO
