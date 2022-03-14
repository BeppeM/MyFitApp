// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmkzKHx9B9rKqMHyNNh2mTSmUTyQaVYw8",
  authDomain: "myfitapp-b9691.firebaseapp.com",
  //databaseURL: "https://myfitapp-b9691-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myfitapp-b9691",
  //storageBucket: "myfitapp-b9691.appspot.com",
  //messagingSenderId: "55722936642",
  //appId: "1:55722936642:web:8063e0582ff26f593be0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//need for the authentication
export const auth = getAuth();

//method to handle login
export const handleLogin = (email, password) => 
    signInWithEmailAndPassword(auth, email, password)

//method to handle registration
export const handleReg = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password)

//database
export const db = getFirestore();

//Add new data to firestore
export const addTraining= async (titolo, goal, email) =>
{
  try {
    const docRef = await addDoc(collection(db, "users-trainings").collection(db, email), {
      title: titolo,
      goal: goal,
      
    });
  console.log("Document written with ID: ", docRef.id);
  } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Query for reading the user's trainings 
const userTrainings = (email) => 
  doc(db, "users-trainings", email, "trainings");
