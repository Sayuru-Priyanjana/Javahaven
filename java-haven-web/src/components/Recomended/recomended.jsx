import React from "react";

import "./recomended.css";

import item1 from "../../assets/Recomend/item1.png";
import item2 from "../../assets/Recomend/item2.png";
import item3 from "../../assets/Recomend/item3.png";

import info from '../../assets/Recomend/about.png';
import cart from '../../assets/Recomend/cart.png';

function Recomended() {

    return(
        <div className="recomend">
            <h1 className="recomend-header">Recomended</h1>
            <div className="recomend-container">

                <div className="recomend-card">
                    <div className="upper">
                        <img src={info} alt="inco" className="info"/>
                        <img className="recomend-image" src={item1} alt="recomend image" />
                        <img src={cart} alt="Cart" className="cart"/>
                    </div>
                    <div className="lower">
                       <div className="names">
                            <h2 className="recomend-name1">Arabica</h2>
                            <h2 className="recomend-name2">|</h2>
                            <h2 className="recomend-name3">Dark Roast</h2>
                       </div>
                    </div>   
                </div>


                <div className="recomend-card">
                    <div className="upper">
                        <img src={info} alt="inco" className="info"/>
                        <img className="recomend-image" src={item2} alt="recomend image" />
                        <img src={cart} alt="Cart" className="cart"/>
                    </div>
                    <div className="lower">
                       <div className="names">
                            <h2 className="recomend-name1">House Blend</h2>
                            <h2 className="recomend-name2">|</h2>
                            <h2 className="recomend-name3">Dark Roast</h2>
                       </div>
                    </div>   
                </div>


                <div className="recomend-card">
                    <div className="upper">
                        <img src={info} alt="inco" className="info"/>
                        <img className="recomend-image" src={item3} alt="recomend image" />
                        <img src={cart} alt="Cart" className="cart"/>
                    </div>
                    <div className="lower">
                       <div className="names">
                            <h2 className="recomend-name1">Robusta</h2>
                            <h2 className="recomend-name2">|</h2>
                            <h2 className="recomend-name3">Dark Roast</h2>
                       </div>
                    </div>   
                </div>

               



            </div>

        </div>

    );

}

export default Recomended;