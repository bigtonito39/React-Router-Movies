import React from 'react';
import {Link} from "react-router-dom"

//refacturing to make code dry, only passing data from MovieList though, in order to 
//leave old version in the Movie component as future reference
const MovieCard = props => {

  return(
    <div className="movie-card">
 <Link to={`/Movie/${props.id}`}>{`Check out ${props.title} Now!`}</Link>
      <h2>{props.title}</h2>
      
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>
   
      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
     
    </div>
  );

};

export default MovieCard;
