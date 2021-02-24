import React from "react";
import logo from './Logo-02.png';
import './Navbar.css';


function Navbar () 
{
    return(
<div>
    <body>
<div class="topnav" id="myTopnav">
        <a href="#home">
            <img id="logo" aria-activedescendant="" src={logo} />
        </a>
        
        {/* <button id="btnHelp" onClick={() => history.push('/About')}>About</button>; */}


        
    </div>
    </body>
</div>


    );
    
}

export default Navbar;