import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar }  from '@fortawesome/free-solid-svg-icons';


//a container inside of a Movie that houses Review components.

//create an array that houses all the movie reviews of any given movie. 


function ReviewList({reviewList}) {


    const [showReviews, setShowReviews] = useState(false);

    const handleClick = () => {
     setShowReviews(!showReviews); 
    } 

    const star = <FontAwesomeIcon icon={faStar} color = {"#FFBA5A"}/>; 
    

    let movieReviews = reviewList.map((review,i) => {
        return (
            <div key={i}>"{review.review}" - {review.name}<br/> 
           {review.rating} {star}'s
           </div> 
        ) 
    }) 
    
  


    return (
        <div className="card w-100 bg-dark text-white">
            <div className="card-body text-white">
            <button onClick={() => handleClick()} className="btn btn-primary">See Reviews</button> 
            {showReviews ? <div>{movieReviews}</div>: null} 
            </div>
        </div>
        )
}

export default ReviewList