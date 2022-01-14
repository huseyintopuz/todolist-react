// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyADJtn6-1pswqrIT0ZiizJYPGZoW3tTT1w",
  authDomain: "todo-list-48596.firebaseapp.com",
  databaseURL: "https://todo-list-48596-default-rtdb.firebaseio.com",
  projectId: "todo-list-48596",
  storageBucket: "todo-list-48596.appspot.com",
  messagingSenderId: "644518595498",
  appId: "1:644518595498:web:580fcb6ba925465c3e39d3",
  measurementId: "G-9JMRK51TXK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



