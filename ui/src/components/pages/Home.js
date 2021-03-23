import React from 'react';
import HeroSection from '../layouts/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../data/Data-Home';


function Home(){
    return(

<>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
      
      
    </>


    );

}

export default Home;