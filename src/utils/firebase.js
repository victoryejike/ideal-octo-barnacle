// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5VuhpdV3URljgStFkQQfsB46xwlLp8mc",
  authDomain: "tesla-clone-46356.firebaseapp.com",
  projectId: "tesla-clone-46356",
  storageBucket: "tesla-clone-46356.appspot.com",
  messagingSenderId: "161201421021",
  appId: "1:161201421021:web:20494f77494f2107c07934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
