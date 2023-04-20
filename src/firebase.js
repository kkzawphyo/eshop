// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCN3lia6o59b3UoPOZO0DH3oDgmOAtzBx8",
    authDomain: "eshop-17283.firebaseapp.com",
    projectId: "eshop-17283",
    storageBucket: "eshop-17283.appspot.com",
    messagingSenderId: "366925009697",
    appId: "1:366925009697:web:1014eae084debf4277a460",
    measurementId: "G-M1GYYS16QW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };