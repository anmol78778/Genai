 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genaiproak.firebaseapp.com",
  projectId: "genaiproak",
  storageBucket: "genaiproak.firebasestorage.app",
  messagingSenderId: "661472849908",
  appId: "1:661472849908:web:9fca84c2cbdca85dac13a1"
};

// Initialize Firebase
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();