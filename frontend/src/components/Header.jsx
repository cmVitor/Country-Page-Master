import React from 'react';
import '../styles/Header.css'
import worldRanksLogo from '../assets/resources/Logo.svg'
import heroImage from '../assets/resources/hero-image.jpg'

const Header = () => {
    return (
        <div className="header">
            <div className="image-wrapper">
                <img src={heroImage} alt="Background Image"  className='hero-image'/>
                <img src= {worldRanksLogo} alt="World Ranks Icon" className='world-ranks-logo'/>   
            </div>
        </div>
    );
};

export default Header