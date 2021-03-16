import firebase from'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCkyk2gdGk_swTnXUeKR00uyeX0ACES4aE",
    authDomain: "first-cf358.firebaseapp.com",
    projectId: "first-cf358",
    storageBucket: "first-cf358.appspot.com",
    messagingSenderId: "491460850264",
    appId: "1:491460850264:web:79d9f2443ec6edc249d02d"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;