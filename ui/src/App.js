<<<<<<< HEAD

import{Route, Link} from 'react-router-dom';
import './App.css';
// import './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"; 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Score from './components/pages/Score';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
=======
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
import Score from './components/pages/Score';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';

import { ModelContext } from './components/context/model-context';
// import Selector from './components/utils/Selector';
import LoadingSpinner from './components/utils/LoadingSpinner';

const MODEL_URL = process.env.PUBLIC_URL + '/model/';
const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const App = () => {

  const [model, setModel] = useState(null);
  const [labels, setLabels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const fetchModel = useCallback((model) => {
      setModel(model);
  }, []);

  const fetchLabels = useCallback((labels) => {
      setLabels(labels);
  }, []);

  const selectMode = useCallback((selected) => {
      setSelected(selected)
  }, [])

  const loadModel = async () => {
    setLoading(true);
    const model = await tf.loadGraphModel(MODEL_JSON);
    fetchModel(model);
    const response = await fetch(LABELS_URL);
    let labels = await response.json();
    fetchLabels(labels)
    setLoading(false);
  }



















  return (
    
    
>>>>>>> main
    <div className="App">
      <Navbar/>
     <Route exact path="/" component={Score}/>
     <Route  path="/About" component={About}/>
     <Route  path="/Contact" component={Contact}/>
     <Route  path="/Home" component={Home}/>

     
    </div>
<<<<<<< HEAD
=======
    
>>>>>>> main
  );
}

export default App;