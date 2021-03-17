import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';


function Footer () {

return (

<div>
<footer class="bg- text-center text-white " style ={{backgroundColor:'#222021'}}>
    
    <div class="container p-3 ">
    
    <section class="mb-4 pt-1">
        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
        ></a>

        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
        ></a>

        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
        ></a>

    
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
        ></a>

        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
        ></a>

        
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
        ></a>

    </section>
    
    
        <form action="">        
                     
            <div class="col-auto">
            
            <button type="submit" class="btn btn-outline-light mb-4">
                Sign up
            </button>
            
            
        </div>
        
        </form>    
        <p>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        </p>
    
    
    <section class="">
        
        <div class="row" style={{marginBottom:'-15px', marginLeft:'-180px',marginRight:'-180px',paddingLeft:'180px',paddingRight:'180px'}}>
        
        <div class="col-lg-3 col-md-1 mb-1 mb-md-4">
        <br></br>
            <h5 class="text-uppercase">Contact</h5>

            <ul class="list-unstyled mb-1">
            <li>
                <a href="#!" class="text-white">Email</a>
            </li>
            <li>
                <a href="#!" class="text-white">Link 2</a>
            </li>
            
            </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-4">
        <br></br>
            <h5 class="text-uppercase">Privacy policy</h5>

            <ul class="list-unstyled mb-0">
            <li>
                <a href="#!" class="text-white">Link 1</a>
            </li>
            
            </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-4">
        <br></br>
            <h5 class="text-uppercase">Upcomming Features</h5>

            <ul class="list-unstyled mb-0"> 
        
            <li>
                <a href="#!" class="text-white">feature 01</a>
            </li>
            </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-4">
        <br></br>
            <h5 class="text-uppercase">About Us</h5>  
        </div>
        
        </div>
        
    </section>
    
    </div>
    
    <div class="text-center p-3" style={{backgroundColor :'black'}}>
    © 2021 Copyright:
    <a class="text-white" href="#!">Reboot Rebels</a>
    </div>
    
</footer>
</div>
)

}

export default Footer;