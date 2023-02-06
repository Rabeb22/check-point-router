import React from 'react';
// import HomeNav from '../homeNav/HomeNav';
import MovieCard from '../movieCard/MovieCard';
import Filter from '../filter/Filter'


const ListCinéma = ({movies,del,fil_cine,topm,newm}) => {
    const cinema=movies.filter(el=>el.media_type==="movie")
  return (
    <div className='route'>
    <Filter fil_cine={fil_cine} topm={topm} newm={newm}/>
    <hr/><br/>
    <h3 style={{color:"white"}}>List MOVIES</h3>
    
    <div className='listmovie'>
    
      {cinema.map(movie=><MovieCard  key={movies.id}   movie={movie} del={del} />)}
      
  
    </div>
    </div>
  );
}

export default ListCinéma;
