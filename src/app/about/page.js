import React from 'react';
import Herosection from '../components/HeroSection';

function About(){
    return(
        <>
          {/* it is hero section */}
          <Herosection title={"OUR STORY"} imageUrl={"/about1.svg"}/>
        </>
    )
}

export default About;