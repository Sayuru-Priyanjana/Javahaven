import React from "react";
import './Services.css';

import equipment from '../../assets/Services/equipment.png';
import coffee from '../../assets/Services/coffee.png';
import takeaway from '../../assets/Services/takeaway.png';
import beans from '../../assets/Services/beans.png';
import pastry from '../../assets/Services/pastry.png';
import appointment from '../../assets/Services/appointment.png';

function Services() {

  return (
    <div className="services">

      <h1 className="header">Services</h1>

        <div className="services-container">

            <div className="service">
                <img src={equipment} alt="Icon" className="icon" />
                <h2 className="title">Equipment</h2>
            </div>

            <div className="service">
                <img src={coffee} alt="Icon" className="icon" />
                <h2 className="title">Type of Coffee</h2>
            </div>

            <div className="service">
                <img src={takeaway} alt="Icon" className="icon" />
                <h2 className="title">Take away</h2>
            </div>

            <div className="service">
                <img src={beans} alt="Icon" className="icon" />
                <h2 className="title">Beans Varient</h2>
            </div>

            <div className="service">
                <img src={pastry} alt="Icon" className="icon" />
                <h2 className="title">Pastry</h2>
            </div>

            <div className="service">
                <img src={appointment} alt="Icon" className="icon" />
                <h2 className="title">Appointment</h2>
            </div>

        </div>

    </div>
  );
}

export default Services;