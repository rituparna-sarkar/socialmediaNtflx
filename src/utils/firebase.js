// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNFppEaf_OmnhGm96jA4KDwc_yOrFUS74",
  authDomain: "netflixgpt-2-b3179.firebaseapp.com",
  projectId: "netflixgpt-2-b3179",
  storageBucket: "netflixgpt-2-b3179.appspot.com",
  messagingSenderId: "341775930712",
  appId: "1:341775930712:web:d73330b1c189fc3c20412d",
  measurementId: "G-QN0KQKTFC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();