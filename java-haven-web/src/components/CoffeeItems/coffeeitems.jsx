import React from "react";
import CoffeeCard from "../CoffeeCard/coffeecard";
import './CoffeeItems.css'; // Assuming you have a CSS file for styling
import woodback from '../../assets/8.jpg'; // Assuming you have an image file

const CoffeeItems = () => {
    return (
        <div className="coffee-items"
        style={{ backgroundImage: `url(${woodback})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        >
            
        <div className="coffee-grid">
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
