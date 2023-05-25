import React from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar }  from '@fortawesome/free-solid-svg-icons'; 

// a one to five-star rating component that allows users to rate something 
//(movies in this case, but remember that components are reusable, so you could use it elsewhere!)


const colors = {
    orange: "#FFBA5A", 
    grey: "#a9a9a9"
}

function Stars() {

    const stars = Array(5).fill(0); 

    const [currentRating, setCurrentRating] = useState(0); 
    const [hoverValue, setHoverValue] = useState(null);

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
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

      )  
}

export default Stars