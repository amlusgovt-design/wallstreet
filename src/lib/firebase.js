// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
// 	apiKey: "AIzaSyCCYK6x_expkk51PsCPMeQk_iyonzhgo-w",
// 	authDomain: "cryptocrest-aefe2.firebaseapp.com",
// 	projectId: "cryptocrest-aefe2",
// 	storageBucket: "cryptocrest-aefe2.appspot.com",
// 	messagingSenderId: "1092837750169",
// 	appId: "1:1092837750169:web:f01f6bd4b9d2fdefa54f08",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
