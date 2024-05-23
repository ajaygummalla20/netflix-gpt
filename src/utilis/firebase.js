// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsD0UOx7KshS64xaLnm7zRTfUIk-qmYWE",
  authDomain: "netflix-gpt-12b07.firebaseapp.com",
  projectId: "netflix-gpt-12b07",
  storageBucket: "netflix-gpt-12b07.appspot.com",
  messagingSenderId: "373296195192",
  appId: "1:373296195192:web:8a23edf5dabe94cc28ef8d",
  measurementId: "G-3CX7G7NPMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);