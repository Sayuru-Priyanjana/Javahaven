import React from "react";
import CoffeeCard from "../CoffeeCard/coffeecard";
import './CoffeeItems.css'; // Assuming you have a CSS file for styling


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
