
import{Route, Link} from 'react-router-dom';
import './App.css';
import './Home';
import React from "react"; 
import Home from './Home';
import About from './About/About';
import Score from './Score/Score';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/About/About" component={About}/>
     <Route exact path="/Contact/Contact" component={Contact}/>
     <Route exact path="/Score/Score" component={Score}/>

     
    </div>
  );
}

export default App;
