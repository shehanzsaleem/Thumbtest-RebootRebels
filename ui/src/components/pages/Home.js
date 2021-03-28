import React from 'react';
import HeroSection from '../layouts/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../data/Data-Home';


function Home(){
    return(

<>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} /> 
      
      
    </>


    );

}

export default Home;