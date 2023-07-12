
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6PxpgXtYKkzJxT7XNqVjxHug_h-Z4g2o",
    authDomain: "datosig.firebaseapp.com",
    projectId: "datosig",
    storageBucket: "datosig.appspot.com",
    messagingSenderId: "268967850916",
    appId: "1:268967850916:web:d5ee10451eae62880f4731",
    measurementId: "G-4XF77DLM3R"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const guardadatosig = (contraseña, nombre) => {
  const guardar = addDoc(collection(db, 'datosig'), { contraseña, nombre });
  return guardar;
};