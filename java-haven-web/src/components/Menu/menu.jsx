import React from "react";
import './menu.css';

import menu from '../../assets/Menu/menu.png';

function Menu(){

    return(
        <div className="menu">

            <h1 className="menu-header">Populer Menu</h1>

            <div className="menu-container">

                <div className="menuleft">

                    <div className="item">
                        <h3 className="item-price">$40.00</h3>
                        <h2 className="item-name">Chocolate</h2>
                    </div>

                    <br />

                    <div className="item">
                        <h3 className="item-price">$25.00</h3>
                        <h2 className="item-name">Double Es</h2>
                    </div>

                    <div className="item">
                        <h3 className="item-price">$45.00</h3>
                        <h2 className="item-name">Carmet</h2>
                    </div>

                    <br />

                    <div className="item">
                        <h3 className="item-price">$50.00</h3>
                        <h2 className="item-name">Doppio</h2>
                    </div>

                </div>

                <img src={menu} alt="menu image" className="menu-image"/>

                <div className="menuright">

                    <div className="item">
                        <h3 className="item-price">$30.00</h3>
                        <h2 className="item-name">Espersso</h2>
                    </div>

                    <br />

                    <div className="item">
                        <h3 className="item-price">$30.00</h3>
                        <h2 className="item-name">Cappuccino</h2>
                    </div>

                    <div className="item">
                        <h3 className="item-price">$25.00</h3>
                        <h2 className="item-name">Mocha</h2>
                    </div>
                    <br />

                    <div className="item">
                        <h3 className="item-price">$25.00</h3>
                        <h2 className="item-name">Latte</h2>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Menu;