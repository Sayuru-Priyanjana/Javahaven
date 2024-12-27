// HeroHeader.jsx
import React from 'react';
import './HeroHeader.css';
import coffeeImage from '../../assets/coffee2.png';

const HeroHeader = () => {
    return (
        <header className="hero-header">
            <div className="hero-content">
                <div className="hero-text"> {/* Wrap text in a div */}
                    <h1>Coffee</h1>
                    <p>It is best to start your day with a cup of coffee. Discover the best flavours you will ever love. We provide the best for our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="order-now">Order Now</button>
                </div>
                <img src={coffeeImage} alt="Rotating Coffee" className="rotatingCoffee" />
            </div>
        </header>
    );
};

export default HeroHeader;