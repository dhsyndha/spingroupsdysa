import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYGZoq4X18TPzExslSAKVmkTiWLExK6kc",
  authDomain: "spin-dysa.firebaseapp.com",
  projectId: "spin-dysa",
  storageBucket: "spin-dysa.firebasestorage.app",
  messagingSenderId: "817944874466",
  appId: "1:817944874466:web:37bbd0966889d9fe21fdbb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);