// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBorC9kXfGX6zQY4NL7ScXakibEXb7S06g",
  authDomain: "master-mohammed.firebaseapp.com",
  projectId: "master-mohammed",
  storageBucket: "master-mohammed.appspot.com",
  messagingSenderId: "224950210262",
  appId: "1:224950210262:web:82916d4b790282528fc377",
  measurementId: "G-KKWHJP51LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, signInWithPopup, googleProvider, signInWithRedirect };