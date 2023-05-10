import React from 'react'
import Review from './Review'

// a one to five-star rating component that allows users to rate something 
//(movies in this case, but remember that components are reusable, so you could use it elsewhere!)



function Stars() {
    return (
        <div className="card w-100">
            <div className="card-footer bg-dark text-white">
                Stars
            </div>
        </div>
      )  
}

export default Stars