import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDLODicyyXmjWFoIRgeMiqyJNLOtBQB-9I",
  authDomain: "electronic-shop-c669c.firebaseapp.com",
  projectId: "electronic-shop-c669c",
  storageBucket: "electronic-shop-c669c.appspot.com",
  messagingSenderId: "684066113488",
  appId: "1:684066113488:web:00b89edb6917619a765bd5",
  measurementId: "G-HQGQMC99T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);