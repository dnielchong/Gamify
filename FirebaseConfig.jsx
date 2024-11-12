import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsFw7ZMlVH90KG2gm1XvagW6-xaIPHbNA",
  authDomain: "gamify-c269c.firebaseapp.com",
  projectId: "gamify-c269c",
  storageBucket: "gamify-c269c.appspot.com",
  messagingSenderId: "495139311798",
  appId: "1:495139311798:web:16561c0b0fa01ffe789617",
  measurementId: "G-MYS8ZJ6E79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);