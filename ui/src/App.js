import React, { useState, useCallback,useEffect } from 'react';
import{Route, Link,BrowserRouter as Router, Switch } from 'react-router-dom';
import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Model from './components/pages/Model';
import Video from './components/pages/Video';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Dashboard from "./components/layouts/Dashboard"
import Login from "./components/layouts/Login"
import PrivateRoute from "./components/layouts/PrivateRoute"
import ForgotPassword from "./components/layouts/ForgotPassword"
import UpdateProfile from "./components/layouts/UpdateProfile"
import Signup from "./components/layouts/Signup"


import Feedback from "./components/pages/Feedback"


// import { Container } from "react-bootstrap"
import { AuthProvider } from "./components/layouts/AuthContext"
// import { BsJustify } from 'react-icons/bs';
const App = () =>{
  
  return (
    
    
    <div className="App">
 <Navbar/>
 <body>
      
       
          <AuthProvider>
            <div className="d-flex align-items-center justify-content-center" >
            <div className="w-100 " style={{ maxWidth: "400px"   }}>
              <PrivateRoute  path="/Dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              </div>
              </div></AuthProvider>
              
              
             
              <Route exact path="/" component={Home}/>
             <Route  path="/About" component={About}/>
             <Route  path="/Contact" component={Contact}/>
             <Route  path="/Model" component={Model}/>
             <Route  path="/Video" component={Video}/>

             <Route  path="/Feedback" component={Feedback}/>

             
          
        
      
    
     
      
      
    
     
     
     
     </body>
     
      <Footer/>
     
     
     {/* <Route path ="/predict" component={predict}/> */}
     
    </div>
    
  );}
export default App;