import React from 'react'
import { useState } from 'react';
import ReviewList from './ReviewList'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar }  from '@fortawesome/free-solid-svg-icons'; 
 

//a form at the bottom of a Movie component that allows users to leave reviews. 
//When submitted, the review should be added to the movie. 
//All this data can be stored in an array, no networking or database needed for this assignment.

//Function should add data to the reviewList array



function ReviewForm() {
    const [userName, setUserName] = useState();
    const [review, setReview] = useState();
    const [reviewList, setReviewList] = useState([]);  
    const [currentRating, setCurrentRating] = useState(0); 
    const [hoverValue, setHoverValue] = useState(null);
    const stars = Array(5).fill(0);
    const colors = {
      orange: "#FFBA5A", 
      grey: "#a9a9a9"
  }

      const handleName = (event) => {
        setUserName(event.target.value)
      }  

      const handleChange = (event) => {
        setReview(event.target.value); 
      }
      

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

     

      const handleSubmit = (event) => {
        event.preventDefault(); 
         

        setReviewList(review, currentRating, userName) 
          const newReview = {
            name: userName, 
            review: review, 
            rating: currentRating, 
          }
          setReviewList([...reviewList, newReview]); 
          setUserName('');
          setReview('');
       
        


      }

      
   
  return (
    <div className="form-group"><br/>
        <form onSubmit={handleSubmit}>
        <div className="container">
                {stars.map((_, index) => {
                    const ratingValue = index + 1; 
                    return (
                        <label>
                            <input type="radio" name="rating" value={ratingValue} onClick={() => setCurrentRating(ratingValue)} />
                            <FontAwesomeIcon icon={faStar} 
                             key={index}
                             style={{
                                marginRight: 10, 
                                cursor: "pointer"
                                
                        }} 
                        color={(hoverValue || currentRating) > index ? colors.orange : colors.grey}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}/>
                        </label>  
                        
                    ) 
                })} 
          </div>
           <br/><textarea value={review} onChange={handleChange} rows="2" cols="30" placeholder="How did you like this film?" />  <br/>
           <input className="col-sm" value={userName} type="text" onChange={handleName} placeholder="Your name" /><br />
          <input type="Submit" className="btn btn-primary"/><br/>
        </form><br/>

       
        <ReviewList reviewList = {reviewList} />

    </div>
    
  )
}

export default ReviewForm 

