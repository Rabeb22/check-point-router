import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";

const Filter = ({fil_cine,topm,newm}) => {
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(0)

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(title.trim()!=="" && rate !==0) {
      fil_cine(title,rate);
      setTitle("");}
      else{alert("Veuillez saisir un titre et une évaluation")}
    }
    const ratingChanged = (newRating) => {
      setRate(newRating);
    };
  return (
    <div className='filter' >
     {/* <Navbar bg="rgba(93, 12, 255, 1) " expand="lg">
      <Container fluid>  */}
        {/* <Navbar.Brand href="#"><img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/01_Giant_Owl_Animated_Logo_by_Alphabetical_on_BPO.gif?auto=format&q=60&fit=max&w=930" style={{height:'150px',width:'200px'}} alt=""/></Navbar.Brand> */}
       
        
           <div style={{display:'flex'}}>
           

          <Form className="d-flex" onSubmit={handleSubmit} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
              style={{width:300}}
            />
            <Button type="submit" variant="outline-success" class="glow-on-hover">Search</Button>
            
          </Form>
          <Button variant="outline-secondary" onClick={topm} style={{marginLeft:50,color:"white",border:'none'}}><h5>Top</h5></Button>
          <Button variant="outline-secondary" onClick={newm} style={{marginLeft:50,color:"white",border:'none'}}><h5>New</h5></Button>
          </div>
          <ReactStars
              count={5}
              size={24}
              isHalf={true}
             
              activeColor="#ffd700"
              emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
              onChange={ratingChanged}
            />
            
       {/* </Container>
    </Navbar>  */}
    </div>
  );
}

export default Filter;

