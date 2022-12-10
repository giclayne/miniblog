// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirebase} from 'firebase/firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU9-BRTFvVZ88ngzxZM8wxdELnsISv6zc",
  authDomain: "miniblog-8db41.firebaseapp.com",
  projectId: "miniblog-8db41",
  storageBucket: "miniblog-8db41.appspot.com",
  messagingSenderId: "420698285473",
  appId: "1:420698285473:web:42fa469a317cf51cbc17e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
