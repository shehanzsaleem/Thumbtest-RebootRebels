import React from "react";

//import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom'

function Contact() {
    return (


        <div className='contactUs'>


            <section className='contact'>


                <div className='content'>
                    <h2>Get in touch with us</h2>
                    <p>We'd love to help you start exceeding your CX goals. bla.. bla... </p>
                </div>

                <div className='container'>
                    
                <div className='col-6'>

                    <div className='contactInfo'>
                        <div className='contactBox'>
                            <div class='icon'><i class="fa fa-phone" aria-hidden="true"></i></div>
                            <div className='contactText'>
                                <h3>Phone</h3>
                                <p>+94-77-205-5372<br></br>
                                +94-77-205-5372
                            </p>
                            </div>
                        </div>
                        <div className='contactBox'>
                            <div className='icon'><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                            <div className='contactText'>
                                <h3>Email</h3>
                                <p>tumbtest@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className='col-6'>

                    <div className='contactForm'>
                        <form>
                            <h2>Send Massage</h2>

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
                    </div>
                    </div>
                </div>




            </section>
        </div>





    );

}

export default Contact;

