import "./HomeNav.css";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {Link} from "react-router-dom"

const HomeNav = ({movies}) => {
    // const [movies, setMovies] = useState(films);
    const items = movies.map((item) => (
        <div
          key={item.id}
          className="main__nav"
          style={{backgroundImage:`url( ${item.foto})`}}
        >
        
          <div className="nav">
            <h3>{item.title}</h3>
            <h5 style={{ color: "#abb7c4" }}>
              {item.media_type === "tv" ? "Tv Series" : "Movie"}
            </h5>
    
            
            <div className="back__btn">
            <Link to={`/carte/${item.id}`}>
              <button>
              
                LEARN MORE
              </button>
              </Link>
            </div>
          </div>
        </div>
      ));

      return (
        <AliceCarousel
          infinite
          autoPlay
          disableButtonsControls
          disableDotsControls
          mouseTracking
          autoPlayInterval={1500}
          items={items}
          //   responsive={responsive}
        />
      );
}
export default HomeNav;