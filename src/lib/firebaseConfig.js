// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8j-fAeHft3lNlsTpvJynA-eMI1TaZk8s",
  authDomain: "atmos-yoga.firebaseapp.com",
  projectId: "atmos-yoga",
  storageBucket: "atmos-yoga.firebasestorage.app",
  messagingSenderId: "671895705314",
  appId: "1:671895705314:web:2e000827e30377c9dd70bb",
  measurementId: "G-JSJE4PBD6P"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);