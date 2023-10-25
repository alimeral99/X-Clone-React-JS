// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_sXmxQb0bD31fy4DIgcjkVlxpS0AAR0M",
  authDomain: "x-clone-150f5.firebaseapp.com",
  projectId: "x-clone-150f5",
  storageBucket: "x-clone-150f5.appspot.com",
  messagingSenderId: "322663160256",
  appId: "1:322663160256:web:87f58dbab727a512755025",
  measurementId: "G-H4L40J34VJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };