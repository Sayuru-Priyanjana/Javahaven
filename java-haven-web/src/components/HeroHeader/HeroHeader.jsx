// HeroHeader.jsx
import React from 'react';
import './HeroHeader.css';
import coffeeImage from '../../assets/coffee2.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const HeroHeader = () => {
    return (
        <header className="hero-header">
            <div className="hero-content">
                <div className="hero-text"> 
                    <p className='top-p'>It is best to start your day with a cup of coffee.</p>

                    <h1>Coffee</h1>
                    <p>It is best to start your day with a cup of coffee. Discover the best flavours you will ever
                        love. We provide the best for our customers.</p>
                    <button className="order-now">Order Now</button>
                </div>
                <img src={coffeeImage} alt="Rotating Coffee" className="rotatingCoffee" />
                
                

                
            </div>
        </header>
    );
};




export default HeroHeader;