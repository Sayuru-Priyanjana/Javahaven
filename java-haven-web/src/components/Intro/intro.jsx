import React from "react";
import ourstory from "../../assets/image-ourstory.png";
import "./intro.css";

function Intro() {
  return (

    <div className="our-story">

      <div className="big-frame">
        
        
      <h1 className="header">Our Story</h1>
        <div className="sub-frame">
          <img src={ourstory} alt="our story" className="image-ourstory" />
          
          <p className="text"> 
          Java Haven is where coffee meets comfort, and every visit feels like a
           moment of bliss. Born from a love of rich, flavorful brews, we’ve created
            a cozy space where the aroma of freshly roasted beans fills the air and 
            every cup is crafted with care. Our passion is more than just great coffee—it’s 
            about bringing people together, sharing stories, and creating a haven for connection.
             Whether you’re here to unwind or catch up with friends, Java Haven is your perfect escape,
              one delightful sip at a time.From the first sip to the last, we’re dedicated to making every
               experience special. We believe that coffee is more than a drink—it’s a way to savor life’s simple
                pleasures and create memories. At Java Haven, you’re not just a customer, you’re part of our community, 
                and we’re excited to share this journey with you.
          </p>
        
        </div>
        
       
        
        

      </div>

    </div>


   

  );
}   

export default Intro;