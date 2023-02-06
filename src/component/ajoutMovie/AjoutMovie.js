
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactStars from 'react-rating-stars-component';

function AjoutMovie({ajout}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [desc, setDesc] = useState("")
  const [poster, setPoster] = useState("")
  const [rate, setRate] = useState(0)
  const [trail, setTrail] = useState("")
  // const [trail, setTrail] = useState("")
  
  
  const handleSubmit=(e)=>{
    e.preventDefault()
   if(title.trim()!=="" && date.trim()!=="" && desc.trim()!=="" && poster.trim()!=="" && rate!==0)  
    {ajout(title,date,desc,poster,rate,trail);
    setTitle("");setDate("");setDesc("");setPoster("");setRate(0);setTrail("")}
    else{alert("Veuillez saisir touts les champs")}
    
  }
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  const fermer=(e)=>{
    e.preventDefault();
    handleClose();

  }

  return (
    
        <div className="add" style={{marginTop:100}}>
    <br/><br/><br/>
    <form onSubmit={handleSubmit} action="">
    <h3>Titre</h3>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <h3>Date</h3>
    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
    <h3>Description</h3>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
    <h3>Poster</h3>
    <input type="url" value={poster} onChange={(e)=>setPoster(e.target.value)}/>
    <h3>Rate</h3>
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
    {/* <input type="text" value={rate} onChange={(e)=>setRate(e.target.value)}/>*/}
    <h3>Trail</h3>
    <input type="url" value={trail} onChange={(e)=>setTrail(e.target.value)}/> 
   <br/><br/>
    <button type="submit" >Add</button>
    </form>
    <form> <button onClick={fermer}>Close</button></form>
   
</div>
        
  );
}

export default AjoutMovie;