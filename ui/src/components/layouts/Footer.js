import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import logo from './Logo-02.png';
const date = new Date();
const nthYear = date.getFullYear();
function Footer() {
    return (
        <footer>


            <div class="bg-dark footer text-white " style={{ backgroundColor: '#111111' }}>
                <div class="container p-3 ">
{/* 
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
                                    Sign up</button>
                            </div>
                        </form>
                        <p>
                            The Easiest way to Analise and Optimise your Thumnail </p>
                    </section>
                     */}



                    <section class="">
                        <div class="row">
                            <div class="col-lg-5 col-md-10 mb-4 mt-4 mb-md-4">
                                <img src={logo} alt="logo" style={{ position:'relative', left:'-5px', width: '150px' }} />
                           
                                <p className='mt-3'>
                                    The Ultimate Thumnail Tool for Youtubers
 </p>
                                <hr />
                                <p className='small'>
                                    Powered by Machine Learning
                                    Score Your Youtube Thumnail based on Machine Learning
                                    Score your Thumbnail in Seconds
 </p>

                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mt-4 mb-md-4">

                                <h5 class="fw-bold">Thumbnail Testing Tools</h5>
                                <ul class="list-unstyled mb-0">




                                    <li>
                                        <a href="#!" class="text-white">Test Your Thumbnail</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Test Thumbnail Accuracy</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Unit Test Thumbnail Accuracy</a>
                                    </li>

                                    <li>
                                        <a href="#!" class="text-white">Comment Analiser</a>
                                    </li>







                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 mb-4 mt-4 mb-md-4">

                                <h5 class="fw-bold">New Features</h5>
                                <ul class="list-unstyled mb-0">




                                    <li>
                                        <a href="#!" class="text-white">Generate Thumbnail from Video</a>
                                    </li>

                                    <li>
                                        <a href="#!" class="text-white">Test Thumbnail Accuracy</a>
                                    </li>

                                    <li>
                                        <a href="#!" class="text-white">Unit Test Thumbnail Accuracy</a>
                                    </li>


                                    <li>
                                        <a href="#!" class="text-white">Comment Analiser</a>
                                    </li>







                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="text-center p-3" >
                    <p>

                 
                    © {nthYear} Copyright
 <a class="text-white" href="#!"> Reboot Rebels</a>
 </p>
        </div>
            </div>

        </footer>
    )
}
export default Footer;