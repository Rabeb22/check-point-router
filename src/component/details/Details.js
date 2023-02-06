import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = ({movies}) => {
    const params=useParams()
    const movie=movies.find(el=>el.id===Number(params.id))
  return (
    <div>
    <div>
             
             <div
               className="open__modal"
               style={{
                 backgroundImage: `url( ${movie.foto})`,
               }}
             >
               {/* <img
                 className="poster__img"
                 src= {movie.posterURL}
                 alt=""
               /> */}
               <iframe className="poster__img" src={movie.trailer}
                title="movie" ></iframe>
                 
                
               
               <div className="open__detailsPage">
                 <h3>{movie.title}</h3>
                 <div
                   style={{
                     zIndex: "1000",
                     marginTop: "10px",
                     textAlign: "left",
                   }}
                   className="year"
                 >
                   {movie.date.trim().slice(-4)}{" "}
                   .
                   <b className="title_me">
                     {movie.media_type === "tv" ? "Tv Series ." : "Movie ."}
                   </b>
                   <b className="vote_back">
                     <b className="tmdb">RMKids</b>
                     <b className="vote_ave">-⭐{movie.rating}</b>
                   </b>
                 </div>
                 

                
                 
                 <div className="overview">
                   <p>{movie.description}</p>
                 </div>
                 <div className="other_lists">
                   <ul>
                     <li>
                       DURATION:{" "}
                       <span>
                         {movie.media_type === "tv"
                           ? `${movie.run_time} en episode`
                           : `${movie.run_time} `}
                       </span>
                     </li>
                     {movie.media_type === "tv" ? (
                       <li>
                         SEASONS: <span>{movie.number_of_seasons}</span>
                       </li>
                     ) : (
                       ""
                     )}

                     
                     {movie.mediaType === "movie" ? (
                       <li>
                         RELEASE DATE: <span>{movie.date}</span>
                       </li>
                     ) : (
                       ""
                     )}
                     <li>
                       STATUS: <span>{movie.status}</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           
         </div>
        </div>
  );
}

export default Details;
