import React from "react";
import Coffee2 from '../../assets/coffee2.png';
import './CoffeeCard.css';

const coffee = {
  image: Coffee2,
  name: 'Cappuccino',
  price: '$20.00',
  description: 'Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts.',
  rating: 5.0
};

const CoffeeCard = () => {
  return (
    <div className="coffee-card">
      <div className="coffee-card-image-container">
        <img src={coffee.image} alt={coffee.name} className="coffee-card-image" />
      </div>
      <div className="coffee-card-content">
        <h2 className="coffee-card-name">{coffee.name}</h2>
        <p className="coffee-card-description">{coffee.description}</p>
        <p className="coffee-card-rating">Ratings {coffee.rating} <span className="star">★</span></p>
        <div className="coffee-card-footer">
          <p className="coffee-card-price">JUST {coffee.price}</p>
          <button className="coffee-card-button">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
