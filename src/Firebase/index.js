import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEX1nQ4SwaG-mcuu4kfUpzP6L-zSUoG_o",
  authDomain: "proyecto-react-cf5ba.firebaseapp.com",
  projectId: "proyecto-react-cf5ba",
  storageBucket: "proyecto-react-cf5ba.appspot.com",
  messagingSenderId: "22728279295",
  appId: "1:22728279295:web:b2fad58b90910a133c38ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)