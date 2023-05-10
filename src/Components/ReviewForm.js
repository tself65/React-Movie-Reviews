import React from 'react'
import { useState } from 'react';

//a form at the bottom of a Movie component that allows users to leave reviews. 
//When submitted, the review should be added to the movie. 
//All this data can be stored in an array, no networking or database needed for this assignment.

//Function should add data to the listOfReviews array

let listOfReviews = [" "];
// listOfReviews = listOfReviews.map((movieReview) => {
//     return {
//         review: {review},
//         rating: {rating}
//     }

// })

function ReviewForm() {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(""); 
    

    // let showReviews = listOfReviews.map((movieReview,i) => {
    //   return (
    //     <div>
    //       <h4>{listOfReviews.review}</h4>
    //       <h4>{listOfReviews.rating}</h4>

    //     </div>
        
    //   )
    // })
    
      const handleChange = (event) => {
        setReview(event.target.value)   
      }
      
      const handleRating = (event) => {
        setRating(event.target.value)
      }
      const handleSubmit = (event) => {
        event.preventDefault();

      }

   
  return (
    <div className="form-group">
        <form onSubmit={handleSubmit}>
           <br/> <textarea value={review} onChange={handleChange} rows="3" cols="30" placeholder="How did you like this film?" />  <br/>
           <input className="col-sm-5" type="number" value={rating} onChange={handleRating} placeholder="Rate it 1-5" min="1" max="5"/><br/>
            <input type="Submit" className="btn btn-primary"/><br/>
        </form>
        
    </div>
    
  )
}

export default ReviewForm