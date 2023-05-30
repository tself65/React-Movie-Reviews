import React from 'react' 
import Review from './Review'





//a component that represents movie data (i.e. image, synopsis, rating, etc…)


function Movie({name,synopsis,img,rated,runTime}) {


  return (
        <div className="card w-50 mx-auto">
            <div className="card-header bg-dark text-white">
                <img src={img} width= "50%"/><br/> 
                <h2>{name}</h2><br />
                <h5>Rated {rated}</h5>
                <h5>Run Time: {runTime} min.</h5>
                <h5>{synopsis}</h5>
                <Review />
            </div>
        </div>

  )  
}

export default Movie