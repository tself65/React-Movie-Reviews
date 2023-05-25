import React, { useState } from 'react'
import ReviewForm from './ReviewForm';
import Movie from './Movie'; 

//A text review a user can leave on a movie.

//Create a textarea form where users can create a text review
//Give the reviews a word cap so the reviews can be concise 


function Review() {

  const [showForm, setShowForm] = useState(false);


  const handleClick = () => {
   setShowForm(!showForm); 
  }

  return (
    <div className="form-group bg-dark">
        <button onClick={() => handleClick()} className="btn btn-primary">Leave a Review</button>

        {showForm ? <ReviewForm /> : null}
    </div>


  )
}

export default Review