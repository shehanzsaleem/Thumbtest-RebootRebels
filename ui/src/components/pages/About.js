import React from "react";
function About() {
    return (
        /*<div>
        <h1>This is the about page to be designed</h1>
        </div>*/
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-6'>
                    <div className='image'>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='contentAbout'>
                        <h2>About</h2>
                      
                        <p>bla.... bla....</p>
                        <ul className='icons'>
                            <li>
                                <i class="fa fa-github" aria-hidden="true">
                                </i>
                            </li>
                            <li>
                                <i class="fa fa-facebook" aria-hidden="true">
                                </i>
                            </li>
                            <li>
                                <i class="fa fa-instagram" aria-hidden="true">
                                </i>
                            </li>
                            <li>
                                <i class="fa fa-twitter" aria-hidden="true">
                                </i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;