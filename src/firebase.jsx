// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmWdI1VmyYSbCzzSgRest-f1HdIAe9l1w",
  authDomain: "authentication-a1cf7.firebaseapp.com",
  projectId: "authentication-a1cf7",
  storageBucket: "authentication-a1cf7.appspot.com",
  messagingSenderId: "335583958577",
  appId: "1:335583958577:web:1b3dcb27c4533f75c3e710",
  measurementId: "G-5DKFV2GFBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();