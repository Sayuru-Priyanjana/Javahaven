import React from "react";
import './Offer.css'

import offer from '../../assets/offer.png'


function Offer() {
  return (
    <div className="offer">
      <h1 className="offer-header">Offer</h1>
      <div className="offer-container">

       <div className="offer virtical">
            <h1 className="offer-amount">Up To 50% Off</h1>
            <p className="offer-text">At our cafe, we take pride in providing our customers with the best coffee around.
                Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, 
                ensuring that each cup is unrivaled in flavor and freshness.
            </p>

            <button className="offer-button">Shop Now</button>
       </div>

       <img src={offer} alt="offer image" className="offer-image"/>





      </div>
    </div>
  );
}


export default Offer;