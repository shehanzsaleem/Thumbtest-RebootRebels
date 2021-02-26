
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

    



    <div className="App">
      <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route  path="/About" component={About}/>
     <Route  path="/Contact" component={Contact}/>
     <Route  path="/Score" component={Score}/>

     
    </div>
  );
}

export default App;
