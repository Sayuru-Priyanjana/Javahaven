import React from "react";
import './review.css';

import profile1 from '../../assets/Review/profile1.jpeg';

function Review(){

    return(
        <div className="review">
            <h1 className="review-header">Costormer Review</h1>

            <div className="review-container">

                <div className="review-card">
                    <img className="review-profile" src={profile1} alt="profile pic" />

                    <h1 className="review-name">Tyler</h1>
                    <h2 className="review-roll">Student</h2>

                    <p className="review-comment">I love spending my downtime in a cozy coffee shop, 
                        surrounded by the sweet aroma of freshly brewed drinks and pastries.
                    </p>
                
                </div>

                <div className="review-card">
                    <img className="review-profile" src={profile1} alt="profile pic" />

                    <h1 className="review-name">Jhon</h1>
                    <h2 className="review-roll">Doctor</h2>

                    <p className="review-comment">I love spending my downtime in a cozy coffee shop, 
                        surrounded by the sweet aroma of freshly brewed drinks and pastries.
                    </p>
                
                </div>

                <div className="review-card">
                    <img className="review-profile" src={profile1} alt="profile pic" />

                    <h1 className="review-name">Sayuru</h1>
                    <h2 className="review-roll">Engineer</h2>

                    <p className="review-comment">I love spending my downtime in a cozy coffee shop, 
                        surrounded by the sweet aroma of freshly brewed drinks and pastries.
                    </p>
                
                </div>


                

            </div>



        </div>

    );
}

export default Review;