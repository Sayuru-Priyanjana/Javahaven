import React from "react";
import './footer.css';

import blender from '../../assets/Footer/blender.png'

function Footer(){


    return(
        <div className="footer">

            <h2 className="social-media">Social Media</h2>
            <div className="social-media-container">

            </div>

            <div className="colored-footer">
                <img className="footer-blender" src={blender} alt="blender" />
                <div className="sub-footer">
                    <div className="column-data">
                        <h2 className="footer-title">About</h2>
                        <h3 className="footer-item">Our Story</h3>
                        <h3 className="footer-item">F&Q</h3>
                        <h3 className="footer-item">Careers</h3>
                    </div>

                    <div className="column-data">
                        <h2 className="footer-title">Costomer Recourses</h2>
                        <h3 className="footer-item">Menu</h3>
                        <h3 className="footer-item">Locations</h3>
                        <h3 className="footer-item">Support</h3>
                    </div>

                    <div className="column-data">
                        <h2 className="footer-title">Services</h2>
                        <h3 className="footer-item">Payment Options</h3>
                        <h3 className="footer-item">Refund and Exchange</h3>
                        <h3 className="footer-item">Limitation Of Liability</h3>
                    </div>

                    <div className="column-data">
                        <h3 className="footer-item">No:125, Main Streat, Galle</h3>
                        <h3 className="footer-item">javahaven@gmail.com</h3>
                        <h3 className="footer-item">+91-745 5512 456</h3>
                    </div>

                </div>

                
                

            </div>
                <div className="copyright">
                    <h2 className="developer">Devoloped by Sayuru Priyanjana</h2>
                    <h3 className="year">Copyright 2025 Java Haven. All Rights Reserved</h3>
                </div>
        </div>
    );
}

export default Footer;