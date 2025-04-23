import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaTmTp6cfJyIc9fetspFL65J_F4lWCV7E",
  authDomain: "finance-b339f.firebaseapp.com",
  projectId: "finance-b339f",
  storageBucket: "finance-b339f.firebasestorage.app",
  messagingSenderId: "7398990441",
  appId: "1:7398990441:web:84d68d218f29ada5b3f8f8",
  measurementId: "G-PFPWTV81DV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
