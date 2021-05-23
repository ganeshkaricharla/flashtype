import React from 'react';
import './Landing.css';
import hero from './../../assets/hero.png'
import Typewriter from 'typewriter-effect'
const Landing = () => {
    return(
        <div className="landing-container">
            <div className="landing-left" data-aos="fade-up-right">
                <h1 className="landing-header">CAN YOU TYPE</h1>
                <div className="typewriter-container">
                        <Typewriter 
                            options={{
                                strings: ['FAST?','ACCURATE?'],
                                autoStart:true,
                                loop:true,
                            }}
                        />
                </div>
            </div>

            <div className="landing-right">
                <img src={hero} alt="Hero" data-aos="fade-down-left" className="landing-hero"/>
            </div>


        </div>
    );
}


export default Landing;

