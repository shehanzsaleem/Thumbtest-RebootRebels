import React from 'react';
import { Link } from 'react-router-dom';




function JumboTron({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart }) {

  return (




    
    



    <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
      <div className='container'>

        <div className='row home__hero-row' style={{
          display: 'flex',
          flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
        }} >

          <div className='col'>
            <div className='home__jumbo-text-wrapper'>
          
              {/* <h3 className='top-line'>{topLine}
              </h3> */}

              
              <h1 className={lightText ? 'large-heading center' : 'large-heading dark'}
              > {headline}
              </h1>

              
              <p className={lightTextDesc ? 'home__jumbo-subtitle' : 'home__jumbo-subtitle dark'}
              > {description}
              </p>


<div className="d-flex justify-content-center">

              <Link to='./Model'>
                <button type="button" className="btn btn-secondary ml-center">Begin</button>
              </Link>

            

              </div>
            </div>
          </div>

          {/* <div className='col'>
            <div className='home__hero-img-wrapper' style={{height:'400px',marginRight:'50px'}} >
            </div>
          </div> */}

        </div>
      </div>
    </div>






  );
}





export default JumboTron;