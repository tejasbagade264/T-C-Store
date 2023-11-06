// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKeB5PkL7kePBlW8ZRgHn10Nhjih6Wh5U",
  authDomain: "user-auth-397810.firebaseapp.com",
  projectId: "user-auth-397810",
  storageBucket: "user-auth-397810.appspot.com",
  messagingSenderId: "967483345530",
  appId: "1:967483345530:web:7e99f0bd8c29f65018c9c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth();
const db = getFirestore(app);

export {app, auth,db};

