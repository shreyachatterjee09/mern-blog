// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-545c9.firebaseapp.com",
  projectId: "mern-blog-545c9",
  storageBucket: "mern-blog-545c9.appspot.com",
  messagingSenderId: "337134038648",
  appId: "1:337134038648:web:1c134f5c5e806f70f3878d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);