// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"; // Para Firestore
import { connectDatabaseEmulator, getDatabase } from "firebase/database";   // Para Realtime Database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2n0vNfocJYe5Pa4zaTolK4iWhZjAaKM",
  authDomain: "next-api-6058b.firebaseapp.com",
  projectId: "next-api-6058b",
  storageBucket: "next-api-6058b.firebasestorage.app",
  messagingSenderId: "719302838973",
  appId: "1:719302838973:web:2185a96ba89dbf722685d4",
  measurementId: "G-NEHGMER05C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore_ = getFirestore(app);
const database_ = getDatabase(app);

if (process.env.NODE_ENV === "development") {
  connectFirestoreEmulator(firestore_, "localhost", 4242);
  connectDatabaseEmulator(database_, "localhost", 9000);
}

// Inicializa os serviços necessários
export {firestore_, database_} // Para Firestore
// Para Realtime Datab
