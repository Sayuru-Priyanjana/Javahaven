import React from "react";
import "./reserve.css";

import reserve from "../../assets/reserve.png";

function Reserve() {
  return (
    <div className="reserve">
        <h1 className="reserve-header">Reserve a Table</h1>
        <div className="reserve-container">
            <img className="reserve-image" src={reserve} alt="reserve image" />
            <div className="reserve-form">  

                <form action="" method="post">
                    <div className="form-single"><input type="text" name="date" id="date" placeholder="Date" required /></div>
                    <div className="form-multiple">
                        <input type="text" name="time" id="time" placeholder="Time" required />
                        <input type="text" name="guest" id="guest" placeholder="Guest" required />
                    
                    </div>
                    <div className="form-single"><input type="text" name="name" id="name" placeholder="Your name" required /></div>
                    <div className="form-single"><input type="text" name="phone" id="phone" placeholder="Your Phone" required /></div>
                    <div className="form-rows">
                        <input type="text" name="email" id="email" placeholder="Your Email" required />
                        <button className="reserve-submit">Reserve</button>

                    </div>
                    
                </form>

            </div>
        </div>
      
    </div>
  );
}

export default Reserve;