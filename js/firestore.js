import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD441Cu6-kbRYVXKDv9LMZ2cXRsBz1KYQY",
    authDomain: "website-18fda.firebaseapp.com",
    projectId: "website-18fda",
    storageBucket: "website-18fda.appspot.com",
    messagingSenderId: "985057721578",
    appId: "1:985057721578:web:0d6d4be3ab3b343023ab93",
    measurementId: "G-3YREW5KW7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const saveData = (username, email, password) =>
    addDoc(collection(db, "account"), { username, email, password });
export const searchData = (username) => (getDocs(query(collection(db, "account"), where("username", "==", username))));