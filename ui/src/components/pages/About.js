import React from "react";
import './About.css';

function About(){
    return(

/*<div>
    <h1>This is the about page to be designed</h1>
</div>*/
        <body>
            <div className='aboutUs'>
                <section className='about'>
                    <div className='image'></div>
                    <div className='contentAbout'>
                        <h2>About</h2>
                        <span></span>

                        <p>bla.... bla....</p>

                        <ul className='icons'>
                            <li>
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </li>

                            <li>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </li>
                               
                            <li>   
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </li>

                            <li>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>       
                </section>
            </div>
        </body>


    );

}

export default About;