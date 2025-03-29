import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);