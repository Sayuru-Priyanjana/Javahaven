import React from "react";
import CoffeeCard from "../CoffeeCard/coffeecard";
import './CoffeeItems.css'; // Assuming you have a CSS file for styling
import woodback from '../../assets/order.jpg'; // Assuming you have an image file
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const CoffeeItems = () => {
    return (
        <div className="coffee-items"
        
        >       
                
            <div className="coffee-grid">
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard /> 
                <CoffeeCard />
                <CoffeeCard />              
            </div>
        </div>
    );
}

export default CoffeeItems;
