// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpZUreQqHXD99c1IxPLoZUlOZ3D47uDU",
  authDomain: "instaclone-8f102.firebaseapp.com",
  projectId: "instaclone-8f102",
  storageBucket: "instaclone-8f102.appspot.com",
  messagingSenderId: "481507232766",
  appId: "1:481507232766:web:8269a529bbb16fbf510eaf",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
