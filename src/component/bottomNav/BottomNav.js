import * as React from "react";
import Box from "@mui/material/Box";
import MuiBottomNavigation from "@mui/material/BottomNavigation";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TheatersIcon from "@mui/icons-material/Theaters";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import "./BottomNav.css";
const BottomNavigationAction = styled(MuiBottomNavigationAction)(`

  &.MuiBottomNavigationAction-root{
    color:#abb7c4;
  },  &.Mui-selected {
    color: #1a9be7;
  }
  
`);
const BottomNavigation = styled(MuiBottomNavigation)(`
    background:rgba(1, 0, 12, 0.5) !important;
    border-top-right-radius: 10px !important;
    border-top-left-radius: 10px !important;


 
`);
export default function BottomNav() {
   const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (value === "home") navigate("/");
    else if (value === "tread") navigate("/treading");
    else if (value === "movies") navigate("/all-movies");
    else if (value === "series") navigate("/all-series");
    // eslint-disable-next-line
  }, [value, history]);

  return (
    <Box
      style={{ zIndex: "2000" }}
      className="BottomNav"
      sx={{
        width: "100%",
        position: "fixed",
        left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    
        justifyContent:"space-between",
      }}
    >
    
      <BottomNavigation
        style={{
          background: "black",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
      <div className=" intro"><h4 data-text= "R.H Moovie">R.H Moovie</h4></div>
        

        <BottomNavigationAction
          className="BottomNavIcon"
          label="Home"
          icon={<HomeIcon />}
          color="primary"
          value="home"
        />


        <BottomNavigationAction
          className="BottomNavIcon"
          label="Treading"
          icon={<WhatshotIcon />}
          color="primary"
          value="tread"
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
          value="movies"
        />
        <BottomNavigationAction
          label="Series"
          icon={<TheatersIcon />}
          value="series"
        />

<BottomNavigationAction
          className="BottomNavIcon"
          label=""
          icon={<button className=" login-btn">login</button>}
          color="primary"
          value="login"
        />
      </BottomNavigation>
    </Box>
  );
}
