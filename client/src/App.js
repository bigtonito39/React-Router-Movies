import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import {Route} from "react-router-dom"
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  


  const addToSavedList = movie => {
  
    const movieLookup = savedList.find(data => movie.id === data.id)
    if (movieLookup) {
      setSavedList( {savedList:"You already added this movie"})
    }
    else{
      savedList.push([movie])
  }
   };

   

  return (
    <div>
      <SavedList list={savedList} />
      
      <div>
      <Route exact path="/" component={MovieList} />
      <Route path="/Movies/:id" render= {props =>(<Movie {...props} Movie={Movie} />)}/>
      
      
      </div>
    </div>
  );
};

export default App;
