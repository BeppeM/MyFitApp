// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  where,
  collection,
  getDocs,
  query,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
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

//method to handle the normal login
export const handleLogin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

//method to handle normal registration
export const handleReg = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

//firestore database
export const db = getFirestore();

//ref
const workRef = collection(db, "workouts");

//query to get the personal workouts of the user
export const queryWorkout = (email) =>
  query(collection(db, email), where("owner", "==", email));

//Read data
export const readWorkouts = (q) => getDocs(q);

//Write workout of the user into firestore
export const writeUserWorkout = async (workout) => {
  await setDoc(doc(db, workout.owner, workout.title), {
    owner: workout.owner,
    title: workout.title,
    allenamento: workout.allenamento,
  });
};

//Delete workout of the user
export const deleteWorkout = async (id, email) => {
  await deleteDoc(doc(db, email, id));
};
