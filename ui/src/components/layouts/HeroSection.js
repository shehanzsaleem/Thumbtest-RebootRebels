import React from 'react';
import { Link } from 'react-router-dom';
function HeroSection({
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
            <div className='home__hero-text-wrapper'>
              <div className='top-line'>{topLine}
              </div>
              <h1 className={lightText ? 'heading' : 'heading dark'}
              > {headline}
              </h1>
              <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}
              > {description}
              </p>
              <Link to='./Model'>
                <button type="button" className="btn btn-outline-secondary ml-center">Begin</button>
              </Link>
            </div>
          </div>

          <div className='col'>
            <div className='home__hero-img-wrapper' style={{height:'400px',marginRight:'50px'}} >
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default HeroSection;
