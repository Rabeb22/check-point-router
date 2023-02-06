// import Heading from "../Header/Heading";
import "./MainNav.css";
import React from "react";
import { Link } from "react-router-dom";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TheatersIcon from "@mui/icons-material/Theaters";

import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';




const MainNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="navbar-brand intro" style={{marginLeft:100}}>
        <h4 data-text= "RMKids"/>
       </div> 

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  nav__link" style={{marginLeft:200}}>
              <Link className="nav-link" to="/" >
              <HomeIcon
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                    
                  }}
                />
          
                Home 
              </Link>
            </li>
            
            <li className="nav-item  nav__link" style={{marginLeft:100}}>
              <Link className="nav-link" to="/cinema" >
              <MovieIcon 
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                  }}
                />
                Movies
              </Link>
            </li>
            <li className="nav-item nav__link" style={{marginLeft:100}}>
              <Link className="nav-link" to="/tv">
              <TheatersIcon 
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                  }}
                />
                TvSeries
              </Link>
            </li>
            <li className="nav-item  nav__link" style={{marginLeft:100}}>
              <Link className="nav-link" to="/ajout">
                <AddBoxIcon
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                  }}
                />
                Add
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/not">
                Search
              </Link>
            </li> */}
          </ul>

          <div className="all__right" style={{marginLeft:200}}>
            <div className="btn-login">
              <Link to="/login">
                <button className=" login-btn">login</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
