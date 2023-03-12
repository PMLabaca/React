import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
