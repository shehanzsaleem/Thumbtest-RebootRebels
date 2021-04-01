import React, { useState, useCallback,useEffect } from 'react';

import{Route, Link} from 'react-router-dom';
// import React from "react"; 

import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';

 
import './App.css';

// import './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Score from './components/pages/Home';
import Contact from './components/pages/Contact';
import Login from './components/layouts/Login';


import Model from './components/pages/Model';


import Video from './components/pages/Video';


import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import fire from './components/layouts/fire';
// import Predict from './static/predict.js';
// import predict from './components/pages/predict';

// import { ModelContext } from './components/context/model-context';
// // import Selector from './components/utils/Selector';
// import LoadingSpinner from './components/utils/LoadingSpinner';




// const MODEL_URL = process.env.PUBLIC_URL + '/model/';
// const LABELS_URL = MODEL_URL + 'labels.json';
// const MODEL_JSON = MODEL_URL + 'model.json';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [emailError , setEmaiError] = useState('');
  const  [passwordError , setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');

const clearInputs = ()=>{
  setEmail('');
  setPassword('');
}  

const clearErrors = () => {
  setEmaiError('');
  setPasswordError('');
}

const handleLogin = () =>
{
  clearErrors();
  fire

  .auth()
  .signInWithEmailAndPassword(email , password)
  .catch((err)=>{
    switch (err.code){
      case "auth/invalid-emai":
      case "auth/user-disabled":
      case "suth/user-not-found":
        setEmaiError(err.message);
        break;
      case "auth/wrong-password":
        setPasswordError(err.message);
        break;

    }
  });
};

const handleSignup = () =>
{
  clearErrors();
    fire
  .auth()
  .createUserWithEmailAndPassword(email , password)
  .catch((err)=>{
    switch (err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
      
        setEmaiError(err.message);
        break;
      case "auth/weak-password":
        setPasswordError(err.message);
        break;

    }
  });
}

const handleLogout = () =>{

  fire.auth().signOut();
};


const authListener = () =>{
  fire.auth().onAuthStateChanged((user) =>{
    if(user){
      clearInputs();
      setUser(user);

    }else{
      setUser("");
    }

  });
};


useEffect (() =>{
  authListener();
},[]);







//   let express = require("express");
// let app = express();

// app.use(express.static("./static"));

// app.listen(81, function() {
//     console.log("Listening on port 81");
// });
















  return (
    
    
    <div className="App">


      <Navbar/>
      
     
    


     <Route exact path="/" component={Home}/>
     <Route  path="/About" component={About}/>
     <Route  path="/Contact" component={Contact}/>
     <Route  path="/Model" component={Model}/>
     <Route  path="/Video" component={Video}/>
     <Route path ="/Login" component={Login} 
      email={email} 
    setEmail ={setEmail} 
    password={password} 
    setPassword={setPassword} 
    handleLogin={handleLogin} 
    handleSignup={handleSignup} 
    hasAccount={hasAccount} 
    sethasAccount={setHasAccount}
    emailError = {emailError}
    passwordError={passwordError}/>
     
     

     
     
      <Footer/>
     
     
     {/* <Route path ="/predict" component={predict}/> */}

     
    </div>
    
  );}


export default App;