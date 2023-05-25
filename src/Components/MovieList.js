import React from 'react'
import Movie from './Movie'; 



// a container for all the Movie components and their data. 


function MovieList() {

    return (
        <div className="card w-100">
            <div className="card-header bg-primary text-white">
                <h1>MovieReviews.com</h1>
            </div>
            <div className="card-body bg-dark">
            <Movie 
            name= {'The Lord of the Rings: The Two Towers'}
            img= {'Lotr.jpg'}
            synopsis={"They're taking the hobbits to Isengard"}
            rated= {"PG-13"}
            runTime= {100}
            
            />
            <Movie 
            name= {'The Dark Knight'}
            img= {'DarkKnight.jpg'}
            synopsis={'Crazy clown fights emo man'}
            rated= {"PG-13"}
            runTime= {100}
            />
            <Movie name= {'The Hunger Games'}
            img= {'HungerGames.jpg'}
            synopsis={'Angsty teens fight to the death'}
            rated= {"PG-13"}
            runTime= {100}
            />
            <Movie 
            name= {'Avengers Infinity War'}
            img= {'Avengers.jpg'}
            synopsis={'Mad Titan wants to destroy half of all life'}
            rated= {"PG-13"}
            runTime= {100}
            />
            <Movie name= {'It Chapter One'}
            img= {'It.jpg'}
            synopsis={"Alien Clown feeds off of children's fear"}
            rated= {"R"}
            runTime= {100}
            />
            </div>

        </div>
    );
 
}

export default MovieList