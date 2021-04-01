import firebase from 'firebase';


// Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyDDAHBXMPNTWSTRo47GT7p279KaDYQc8eY",
  authDomain: "thumbtest-f4efc.firebaseapp.com",
  projectId: "thumbtest-f4efc",
  storageBucket: "thumbtest-f4efc.appspot.com",
  messagingSenderId: "1040553873006",
  appId: "1:1040553873006:web:b70fadc59b2917aadea07f",
  measurementId: "G-BJHLS9XH93"
};

  const firebase = firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export default firebase;