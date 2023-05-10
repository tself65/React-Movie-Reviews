import React, { useState } from 'react'
import ReviewForm from './ReviewForm';

//a container inside of a Movie that houses Review components.

//create an array that houses all the movie reviews of any given movie. 



function ReviewList({listOfReviews}) {

    const [showReviews, setShowReviews] = useState(false);

    const handleClick = () => {
     setShowReviews(!showReviews); 
    }
    return (
        <div className="card w-100">
            <div className="card-body bg-dark text-white">
            <button onClick={() => handleClick()} className="btn btn-primary">See Reviews</button> 

            {showReviews ? <h4>{listOfReviews}</h4> : null}
            </div>
        </div>
      )  
}

export default ReviewList