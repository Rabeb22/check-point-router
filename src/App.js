
import './App.css';
import {films} from './fiche'
import React,{ useState }   from 'react'
import ListMovie from './component/listMovie/ListMovie'

import Filter from './component/filter/Filter';
import AjoutMovie from './component/ajoutMovie/AjoutMovie'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Details from './component/details/Details'

import Footer from './component/footer/Footer';
// import HomeNav from './component/homeNav/HomeNav';
import MainNav from './component/mainNav/MainNav';
import ListCinéma from './component/listMovie/ListCinéma';
import ListTv from './component/listMovie/ListTv';

// import MovieCard from './component/movieCard/MovieCard';



function App() {
  const [movies, setMovies] = useState(films);
  const handledelete=(movId)=>{
setMovies(movies.filter(el=>el.id!==movId))
  }

  const handleAdd=(titl,dat,des,poster,rate)=>{
    const newmovie={id:Math.random(),title:titl,date:dat, posterURL:poster,rating:rate,description:des}
    setMovies([...movies,newmovie])
  }

 

  const fil_cine=(titre,rate)=>{

    
    setMovies(movies.filter(el=>(el.media_type==="movie" && el.title.toLowerCase().trim().includes(titre.toLowerCase().trim()))&&(el.rating >= rate)))
  }
  const top_rat=()=>{
    setMovies(movies.filter(el=>el.media_type==="movie" && Number(el.rating)===5))
  }
  const new_mov=()=>{
    setMovies(movies.filter(el=>el.media_type==="movie" && Number(el.date.trim().slice(-4))>=2022))
  }
  

  

  const fil_tv=(titre,rate)=>{

    
    setMovies(movies.filter(el=>(el.media_type==="tv" && el.title.toLowerCase().trim().includes(titre.toLowerCase().trim()))&&(el.rating >= rate)))
  }
  const top_ratv=()=>{
    setMovies(movies.filter(el=>el.media_type==="tv" && Number(el.rating)===5))
  }
  const new_tv=()=>{
    setMovies(movies.filter(el=>el.media_type==="tv" && Number(el.date.trim().slice(-4))>=2022))
  }
  return(
  
    <div className="App">
        {/*  */}
        <BrowserRouter>
        {/* <Filter filtrer={filtrer}/> */}
        <div>
        <MainNav/>
        </div>

        <div>
        <Routes>
        

          <Route path="/" element={<ListMovie movies={movies} del={handledelete}/>}/>
          <Route path="/cinema" element={<ListCinéma movies={movies} del={handledelete} fil_cine={fil_cine} topm={top_rat} newm={new_mov}/>}/>
          <Route path="/tv" element={<ListTv movies={movies} del={handledelete} fil_tv={fil_tv} topv={top_ratv} newv={new_tv}/>}/>
          <Route path="/ajout" element={<AjoutMovie  ajout={handleAdd}/>}/>
          <Route path="/carte/:id" element={<Details movies={movies}  />}/>
          

        </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App;
