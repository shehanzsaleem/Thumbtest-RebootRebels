import React from 'react';
// import { Button } from './Button';
// import './score.css';
// import { FaFire } from 'react-icons/fa';
// import { BsXDiamondFill } from 'react-icons/bs';
// import { GiCrystalize } from 'react-icons/gi';
// import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import './Home.css';


function score() {
  return (

    // <IconContext.Provider value={{ color: '#fff', size: 64 }}>
    
      <div className='score__section'>
        <div className='score__wrapper'>
          <h1 className='score__heading'>Your Scores</h1>
          <div className='score__container'>
            <div className='score__container-card'>
              <div className='score__container-cardInfo'>
                {/* <div className='icon'>
                  <FaFire />
                </div> */}
                <h3>Second </h3>
                <h4>76.80%</h4>
                <img className="score_second" /*src="./sample_thumbnail_01"*//>
                {/* <p>per month</p>
                <ul className='score__container-features'>
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li>
                </ul> */}
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button> */}
              </div>
            </div>
            <div className='score__container-card'>
              <div className='score__container-cardInfo'>
                {/* <div className='icon'>
                  <BsXDiamondFill />
                </div> */}
                <h3>Best</h3>
                <h4>95.00%</h4>
                <img className="score_best" /*src="./sample_thumbnail_01"*//>
                {/* <p>per month</p>
                <ul className='score__container-features'>
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>
                  <li>$100,000 Limit</li>
                </ul> */}
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button> */}
              </div>
            </div>
            <div className='score__container-card'>
              <div className='score__container-cardInfo'>
                {/* <div className='icon'>
                  <GiCrystalize />
                </div> */}
                <h3>Third</h3>
                
                <h4>80.08%</h4>
                <img className="score_third" /*src="./sample_thumbnail_01"*//>
                {/* <div className="score_third"></div> */}
                {/* <p>per month</p>
                <ul className='score__container-features'>
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul> */}
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
  );
}
export default score;
