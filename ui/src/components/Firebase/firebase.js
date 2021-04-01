import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCGMZUof938gNb-dR5ZlmDNgbFKCo5B2_k",
  authDomain: "thumbtest-01.firebaseapp.com",
  projectId: "thumbtest-01",
  storageBucket: "thumbtest-01.appspot.com",
  messagingSenderId: "586744027449",
  appId: "1:586744027449:web:2ab0909df7ce19a1e5f0e8"
})

export const auth = app.auth()
export default app
