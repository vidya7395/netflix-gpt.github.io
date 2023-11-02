// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTta2ra7shlllNktyYg9uueEkm3OVZQDs",
  authDomain: "netflix-gpt-b933c.firebaseapp.com",
  projectId: "netflix-gpt-b933c",
  storageBucket: "netflix-gpt-b933c.appspot.com",
  messagingSenderId: "997872239702",
  appId: "1:997872239702:web:8ef891bb8c24c5a005e7f7",
  measurementId: "G-Q1QLP4VE9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
