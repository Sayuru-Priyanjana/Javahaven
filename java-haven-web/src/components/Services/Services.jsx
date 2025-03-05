import React from "react";
import { motion } from "framer-motion";
import './Services.css';

import equipment from '../../assets/Services/equipment.png';
import coffee from '../../assets/Services/coffee.png';
import takeaway from '../../assets/Services/takeaway.png';
import beans from '../../assets/Services/beans.png';
import pastry from '../../assets/Services/pastry.png';
import appointment from '../../assets/Services/appointment.png';

function Services() {
  const services = [
    { icon: equipment, title: "Equipment" },
    { icon: coffee, title: "Type of Coffee" },
    { icon: takeaway, title: "Take away" },
    { icon: beans, title: "Beans Variant" },
    { icon: pastry, title: "Pastry" },
    { icon: appointment, title: "Appointment" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="services">
      <motion.h1 
        className="header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Services
      </motion.h1>

      <motion.div 
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={service.icon} alt="Icon" className="icon" />
            <h2 className="title">{service.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;