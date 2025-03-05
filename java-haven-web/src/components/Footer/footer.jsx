import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css';
import blender from '../../assets/Footer/blender.png';
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.footer 
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Social Media Section */}
            <div className="social-section">
                <motion.h2 
                    className="social-title"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Join Our Coffee Community
                </motion.h2>
                <div className="social-container">
                    {[
                        { icon: <FaFacebook />, link: "https://facebook.com" },
                        { icon: <FaTwitter />, link: "https://twitter.com" },
                        { icon: <FaInstagram />, link: "https://instagram.com" },
                        { icon: <FaLinkedin />, link: "https://linkedin.com" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="main-footer">
                <motion.img 
                    src={blender} 
                    alt="coffee elements" 
                    className="footer-image"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="footer-grid">
                    {[
                        { 
                            title: "About",
                            items: ["Our Story", "F&Q", "Careers"]
                        },
                        {
                            title: "Resources",
                            items: ["Menu", "Locations", "Support"]
                        },
                        {
                            title: "Services",
                            items: ["Payment Options", "Refund Policy", "Legal"]
                        },
                        {
                            title: "Contact",
                            items: [
                                "No:125, Main Street, Galle",
                                "javahaven@gmail.com",
                                "+91-745 5512 456"
                            ]
                        }
                    ].map((column, index) => (
                        <div key={index} className="footer-column">
                            <h3 className="column-title">{column.title}</h3>
                            {column.items.map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    className="column-item"
                                    whileHover={{ x: 5 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright Section */}
            <motion.div 
                className="copyright"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <p className="developer">Developed by Sayuru Priyanjana</p>
                <p className="rights">© 2025 Java Haven. All Rights Reserved</p>
            </motion.div>
        </motion.footer>
    );
}

export default Footer;