// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmkzKHx9B9rKqMHyNNh2mTSmUTyQaVYw8",
  authDomain: "myfitapp-b9691.firebaseapp.com",
  projectId: "myfitapp-b9691",
  storageBucket: "myfitapp-b9691.appspot.com",
  messagingSenderId: "55722936642",
  appId: "1:55722936642:web:8063e0582ff26f593be0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//need for the authentication
export const auth = getAuth();

export const handleLogin = (email, password) => 
    signInWithEmailAndPassword(auth, email, password)

export const handleReg = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)