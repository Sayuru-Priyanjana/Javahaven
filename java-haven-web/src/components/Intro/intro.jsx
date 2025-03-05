import React from "react";
import { motion } from "framer-motion";
import ourstory from "../../assets/image-ourstory.png";
import "./intro.css";

function Intro() {
  return (
    <div className="our-story">
      <motion.div 
        className="big-frame"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          whileHover={{ scale: 1.05 }}
        >
          Our Story
        </motion.h1>
        
        <motion.div 
          className="sub-frame"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1]
          }}
        >
          <motion.img 
            src={ourstory} 
            alt="our story" 
            className="image-ourstory"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          />
          
          <motion.p 
            className="text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            Java Haven is where coffee meets comfort, and every visit feels like a
            moment of bliss. Born from a love of rich, flavorful brews, we've created
            a cozy space where the aroma of freshly roasted beans fills the air and 
            every cup is crafted with care.
            Java Haven is where coffee meets comfort, and every visit feels like a
            moment of bliss. Born from a love of rich, flavorful brews, we've created
            a cozy space where the aroma of freshly roasted beans fills the air and 
            every cup is crafted with care.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Intro;