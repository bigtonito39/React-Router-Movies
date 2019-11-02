import React from 'react';
import {NavLink, Route} from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
     {/* NavLink is use to add additional styling using the 
     bult in class*/}
      <NavLink to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
                        
      </div>
      
  </div>
);

export default SavedList;
