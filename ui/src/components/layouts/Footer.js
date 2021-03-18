import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';


import logo from './Logo-02.png';


const date = new Date();
const nthYear = date.getFullYear();
function Footer() {
    return (
        

            <footer class="bg- footer text-white " style={{ backgroundColor: '#222021' }}>

                <div class="container-fluid p-3 ">

                  

                    <section class="text-center mb-4 pt-1">

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i class="fab fa-facebook-f">
                            </i>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i class="fab fa-twitter">
                            </i>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i class="fab fa-google">
                            </i>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i class="fab fa-instagram">
                            </i>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i class="fab fa-linkedin-in">
                            </i>
                        </a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i class="fab fa-github">
                            </i>
                        </a>
                    </section>

                    <section class="text-center">
                    <form action="">

                        <div class="col-auto">

                            <button type="submit" class="btn btn-outline-light mb-4">
                                Sign up
 </button>


                        </div>

                    </form>
                    
                    <p>
                      The Easiest way to Analise and Optimise your Thumnail </p>
                      
</section>

                    <section class="">

                        <div class="row">

                            <div class="col-lg-6 col-md-12 mb-4 mt-4 mb-md-4">
                                 
                            <img src={logo} alt="logo" style={{ width: '150px' }} />
                               

                               <p className='ml-1 mt-3'>
                               The Ultimate Thumnail Tool for Youtubers  
                               </p>
                               
                        
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mt-4 mb-md-4">
                                 
                                 
                                <h5 class="text-uppercase">Upcomming Tools</h5>
                                <ul class="list-unstyled mb-0">

                                    <li>
                                        <a href="#!" class="text-white">Thumbnail Generator from Video</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Advertisment CTR Predictor</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Title Optimizer</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Comment Analiser</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mt-4 mb-md-4">
                                 
                                 
                                <h5 class="text-uppercase">About Us</h5>

                                <p className='small'>
                                Powered by Machine Learning
Score Your Youtube Thumnail based on Machine Learning 

Score your Thumbnail in Seconds 


                                </p>
                            </div>

                        </div>

                    </section>

                </div>

                <div class="text-center p-3" style={{ backgroundColor: 'black' }}>




                    © {nthYear} Copyright
 <a class="text-white" href="#!"> Reboot Rebels</a>
                </div>

            </footer>
        
    )
}
export default Footer;