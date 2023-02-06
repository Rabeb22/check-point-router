import React from 'react';
// import HomeNav from '../homeNav/HomeNav';
import MovieCard from '../movieCard/MovieCard';
import Filtertv from '../filter/Filtertv'


const ListCinéma = ({movies,del,fil_tv,topv,newv}) => {
  const tv=movies.filter(el=>el.media_type==="tv")  
  return (
    <div className='route'>
    <Filtertv fil_tv={fil_tv} topv={topv} newv={newv}/>
    <hr/><br/>
    <h3 style={{color:"white"}}>List TV SERIES</h3>
    
    <div className='listmovie'>
    
      {tv.map(movie=><MovieCard  key={movies.id}   movie={movie} del={del} />)}
      
  
    </div>
    </div>
  
  );
}

export default ListCinéma;
