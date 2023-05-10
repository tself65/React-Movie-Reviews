import React from 'react' 
import Stars from './Stars'
import ReviewList from './ReviewList'
import Review from './Review'



//a component that represents movie data (i.e. image, synopsis, rating, etc…)


function Movie({name,synopsis,img,rating,runTime}) {


  return (
        <div className="card w-50 mx-auto">
            <div className="card-header bg-dark text-white">
                <img src={img} width= "50%"/><br/>
                <h2>{name}</h2><br />
                <h5>Rated {rating}</h5>
                <h5>Run Time: {runTime} min.</h5>
                <h5>{synopsis}</h5>
                <Stars />
            </div>
            <ReviewList /> 
            <Review />
        </div>

  )  
}

export default Movie