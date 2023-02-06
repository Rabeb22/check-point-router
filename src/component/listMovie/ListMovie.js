import React from 'react';
import HomeNav from '../homeNav/HomeNav';
import MovieCard from '../movieCard/MovieCard';


const ListMovie = ({movies,del}) => {
  return (
    <div><HomeNav movies={movies}/>
    <div className='listmovie'>
    
      {movies.map(movie=><MovieCard  key={movies.id}   movie={movie} del={del} />)}
      
    </div>
    </div>
  );
}

export default ListMovie;
