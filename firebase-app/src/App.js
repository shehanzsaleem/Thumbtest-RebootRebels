import React, {useState,useEffect} from 'react';
import './App.css';
import fire from './fire';
import Login from './Login';

const App = () =>{

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

  return(
    <div className="App">
    <Login 
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
    </div>
  );
;}

export default App;
