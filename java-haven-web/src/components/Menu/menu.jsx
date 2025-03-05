import React from "react";
import './menu.css';
import menu from '../../assets/Menu/menu.png';

function Menu() {
    return(
        <div className="menu">
            <h1 className="menu-header">Popular Menu</h1>

            <div className="menu-container">
                <div className="menuleft">
                    {[40, 25, 45, 50].map((price, index) => (
                        <div className="item" key={`left-${index}`}>
                            <h3 className="item-price">${price}.00</h3>
                            <h2 className="item-name">{
                                ["Chocolate", "Double Es", "Carmet", "Doppio"][index]
                            }</h2>
                        </div>
                    ))}
                </div>

                <img src={menu} alt="menu" className="menu-image"/>

                <div className="menuright">
                    {[30, 30, 25, 25].map((price, index) => (
                        <div className="item" key={`right-${index}`}>
                            <h3 className="item-price">${price}.00</h3>
                            <h2 className="item-name">{
                                ["Espresso", "Cappuccino", "Mocha", "Latte"][index]
                            }</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;