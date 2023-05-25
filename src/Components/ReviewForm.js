import React from 'react'
import { useState } from 'react';
import ReviewList from './ReviewList';
import Stars from './Stars'

//a form at the bottom of a Movie component that allows users to leave reviews. 
//When submitted, the review should be added to the movie. 
//All this data can be stored in an array, no networking or database needed for this assignment.

//Function should add data to the reviewList array



function ReviewForm() {
    const [userName, setUserName] = useState();
    const [review, setReview] = useState();
    const [rating, setRating] = useState(); 
    const [reviewList, setReviewList] = useState([]); 

      const handleName = (event) => {
        setUserName(event.target.value)
      }  

      const handleChange = (event) => {
        setReview(event.target.value)   
      }
      
      const handleRating = (event) => {
        setRating(event.target.value)
      }

     

      const handleSubmit = (event) => {
        event.preventDefault(); 

        setReviewList(review, rating, userName) 
          const newReview = {
            name: userName, 
            review: review, 
            rating: rating, 
          }
          setReviewList([...reviewList, newReview]); 
          setUserName('');
          setReview('');
       
        


      }

      
   
  return (
    <div className="form-group"><br/>
        <form onSubmit={handleSubmit}>
        <Stars value={rating} onChange={handleRating}/>
           <br/><textarea value={review} onChange={handleChange} rows="2" cols="30" placeholder="How did you like this film?" />  <br/>
           <input className="col-sm" value={userName} type="text" onChange={handleName} placeholder="Your name" /><br />
          <input type="Submit" className="btn btn-primary"/><br/>
        </form><br/>

       
        <ReviewList reviewList = {reviewList} />

    </div>
    
  )
}

export default ReviewForm