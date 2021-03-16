import React, { useState, useCallback } from 'react';
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

import Model from './components/pages/Model';

import Navbar from './components/layouts/Navbar';
// import Predict from './static/predict.js';
// import predict from './components/pages/predict';

// import { ModelContext } from './components/context/model-context';
// // import Selector from './components/utils/Selector';
// import LoadingSpinner from './components/utils/LoadingSpinner';




// const MODEL_URL = process.env.PUBLIC_URL + '/model/';
// const LABELS_URL = MODEL_URL + 'labels.json';
// const MODEL_JSON = MODEL_URL + 'model.json';

const App = () => {






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
     
     
     {/* <Route path ="/predict" component={predict}/> */}

     
    </div>
    
  );}


export default App;