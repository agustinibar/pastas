// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcp9xvFxNmSt27omjJkNA6JUKLS9QjhoA",
  authDomain: "recetario-lacapitale.firebaseapp.com",
  projectId: "recetario-lacapitale",
  storageBucket: "recetario-lacapitale.appspot.com",
  messagingSenderId: "442524079539",
  appId: "1:442524079539:web:d826de7c888d4fbedde7c6",
  measurementId: "G-GY6KC5JH60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app);