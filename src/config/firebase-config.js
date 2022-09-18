// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmP0Ze_EmErqEmSq5kDIt3fDDbKyLQMb0",
  authDomain: "hackathon-project-5045c.firebaseapp.com",
  projectId: "hackathon-project-5045c",
  storageBucket: "hackathon-project-5045c.appspot.com",
  messagingSenderId: "896747442524",
  appId: "1:896747442524:web:2bf7f96c1eef6737783199",
  measurementId: "G-12Z33EVQ8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
