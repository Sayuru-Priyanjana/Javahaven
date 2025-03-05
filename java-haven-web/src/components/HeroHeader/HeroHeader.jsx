import React from 'react';
import { motion } from 'framer-motion';
import './HeroHeader.css';
import coffeeImage from '../../assets/coffee2.png';

const HeroHeader = () => {
    return (
        <header className="hero-header">

            <div className="hero-content">
                <motion.div 
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p 
                        className="top-p"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Artisanal Coffee Experience
                    </motion.p>

                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Brew Perfection
                    </motion.h1>

                    <motion.p
                        className="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Crafted with precision, served with passion
                    </motion.p>

                    <motion.button 
                        className="order-now"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        onClick={() => window.location.href = '/viewall'}
                    >
                      
                       
                       Explore Blends →
                            
                    </motion.button>
                </motion.div>



                <motion.div 
                    className="coffee-container"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <motion.img 
                        src={coffeeImage} 
                        alt="Artisan Coffee" 
                        className="magic-coffee"
                        animate={{
                            y: [-15, 15],
                            rotate: [-100, 100],
                        }}
                        transition={{
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'easeInOut',
                            },
                            rotate: {
                                duration: 30,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'linear',
                            }
                        }}
                        whileHover={{
                            scale: 1.2,
                            rotate: -30,
                            filter: "brightness(1.15) drop-shadow(0 0 25px rgba(255, 215, 0, 0.5))"
                        }}
                        // transition={{ 
                        //     default: { type: 'spring', stiffness: 300 },
                        //     filter: { duration: 0.3 }
                        // }}
                    />
                    
                    {/* Hidden Text Elements */}
                    <div className="hover-text top">Arabica Beans</div>
                    <div className="hover-text right">185°F Perfect Brew</div>
                    <div className="hover-text bottom">Slow Roasted</div>
                    <div className="hover-text left">Organic Origin</div>
                </motion.div>


            </div>
        </header>
    );
};

export default HeroHeader;