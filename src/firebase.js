// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para Firestore
import { getDatabase } from "firebase/database";   // Para Realtime Database

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

// Inicializa os serviços necessários
export const firestore = getFirestore(app); // Para Firestore
export const database = getDatabase(app);   // Para Realtime Datab