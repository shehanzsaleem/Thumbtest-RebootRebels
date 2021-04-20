import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom'
function Contact() {
    return (
     
            <section className='contact'>
                <div className='content'>
                <h1 className='large-heading center'>
          Get in touch with us
              </h1>
                    <p className='home__jumbo-subtitle'>We'd love to help you start exceeding your goals.</p>
                </div>
                <div className='container mt-5'>
                    
                <div className='row align-items-center'>
                    <div className='col-6'>
                        <div className='contactBox'>
                            <div class='iconContact'><i class="fa fa-phone" aria-hidden="true"></i></div>
                            <div className='contactText'>
                                <h3>Phone</h3>
                                <p>+94-77-205-5372<br></br>
                                +94-77-205-5372
                            </p>
                            </div>
                        </div>
                        <div className='contactBox'>
                            <div className='iconContact'><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                            <div className='contactText'>
                                <h3>Email</h3>
                                <p>tumbtest@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/*<div className='col-6'>*/}
                    <div className='col-6'>
                    <div className='contactBox'>
                        <form>
                            
                            <h2>Send Message</h2>
                            <div className='inputBox'>
                                <input type='text' name='' required='required'></input>
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                <input type='text' name='' required='required'></input>
                                <span>Email</span>
                            </div>
                            <div className='inputBox'>
                                <textarea required='required'></textarea>
                                <span>Type our Message...</span>
                            </div>
                            <div className='inputBox'>
                                <input type='submit' name='' value='Send'></input>
                            </div>
                        </form>
                        </div>  </div>
                    
                    
               
                </div>
              
                </div>
            </section>
      
    );
}
export default Contact;
