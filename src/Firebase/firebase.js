// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2qtFy4hqUGJzWWFwA4Ht0qEtFY7bEHIg",
  authDomain: "react-contest-loginform.firebaseapp.com",
  projectId: "react-contest-loginform",
  storageBucket: "react-contest-loginform.appspot.com",
  messagingSenderId: "346467622863",
  appId: "1:346467622863:web:2624275f5feb479aad7cba"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export default app ;