// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// apiKey: "AIzaSyDwWGiZdN559DfqJFKcldIBorwCfkDcolk",
//   authDomain: "music-instrument-fa53a.firebaseapp.com",
//   projectId: "music-instrument-fa53a",
//   storageBucket: "music-instrument-fa53a.appspot.com",
//   messagingSenderId: "372365501938",
//   appId: "1:372365501938:web:c6b54165042553c59fb76b"