 import React, { Component } from 'react';

 
import logo from '../images/Logo/Logo-02.png';
import '../index.css';


 class Header extends Component {
     state = {  }
     render() { 
         return ( 
            <header className="topnav" id="myTopnav">
            <a href="#home">
              <img id="logo" src={logo} />
            </a>
    
          </header>
          );
     }
 }
  
 export default Header;