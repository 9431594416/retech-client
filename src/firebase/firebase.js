import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1x3rdj_2uzQNx9dd3qU7xEDdORY10Nlk",
  authDomain: "retech-store-bc251.firebaseapp.com",
  projectId: "retech-store-bc251",
  storageBucket: "retech-store-bc251.appspot.com",
  messagingSenderId: "579717556726",
  appId: "1:579717556726:web:c1cfb51f31e900705c7fd7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);