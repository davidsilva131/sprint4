import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBCnn5HYy-XnueeLkitAVpiT5wV5GeM1dg",
    authDomain: "sprint-final-23fa8.firebaseapp.com",
    projectId: "sprint-final-23fa8",
    storageBucket: "sprint-final-23fa8.appspot.com",
    messagingSenderId: "1091385817926",
    appId: "1:1091385817926:web:294c0aad16fa696c238347"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)
