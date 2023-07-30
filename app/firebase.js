// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOcGJ0gjRFU_rIAGDxXJCzh7TRlNtfeg",
  authDomain: "expense-tracker-8bc16.firebaseapp.com",
  projectId: "expense-tracker-8bc16",
  storageBucket: "expense-tracker-8bc16.appspot.com",
  messagingSenderId: "863686822257",
  appId: "1:863686822257:web:638f1cb8964b34050e0ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)