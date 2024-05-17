// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-24nVtO5LiCqC0dBF-BbkXTjpUXmbRcY",
  authDomain: "projectnt-5dfae.firebaseapp.com",
  projectId: "projectnt-5dfae",
  storageBucket: "projectnt-5dfae.appspot.com",
  messagingSenderId: "871889504211",
  appId: "1:871889504211:web:58a55bf95eb71fc700d126",
  measurementId: "G-4YL07B95NN"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();