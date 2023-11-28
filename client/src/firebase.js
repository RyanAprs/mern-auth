// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f89e6.firebaseapp.com",
  projectId: "mern-auth-f89e6",
  storageBucket: "mern-auth-f89e6.appspot.com",
  messagingSenderId: "574947428576",
  appId: "1:574947428576:web:ba5b362024bb362a6ee885"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);