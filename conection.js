import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

export const guardadatosig = async (contraseña, nombre) => {
  try {
    await addDoc(collection(db, 'datosig'), { contraseña, nombre });
    console.log('Datos guardados correctamente en Firebase');
  } catch (error) {
    console.error('Error al guardar los datos en Firebase:', error);
  }
};
