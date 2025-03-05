// Offer.jsx
import React from 'react';
import './Offer.css';
import offer from '../../assets/offer.png';
import { motion } from 'framer-motion';

function Offer() {
  return (
    <section className="offer">
      <h1 className="offer-header">Special Offer</h1>
      <div className="offer-container">
        <div className="offer-content">
          <motion.h1 
            className="offer-amount"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Up To 50% Off
          </motion.h1>
          
          <motion.p 
            className="offer-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            At our cafe, we take pride in providing our customers with the best coffee around.
            Our carefully-selected coffees come from some of the most renowned coffee growing 
            regions in the world, ensuring that each cup is unrivaled in flavor and freshness.
          </motion.p>

          <motion.button 
            className="offer-button"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            Shop Now
          </motion.button>
        </div>

        <motion.img 
          src={offer} 
          alt="offer" 
          className="offer-image"
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}

export default Offer;