import React from 'react'
import img from '../img/shanto.jpg'



const CardCom=(props)=>{
return(<>
  <div className="card">
    <img className="card-img-top" src={props.img} alt="Card image cap" style={{maxHeight:'250px'}}/>
     <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <button className="btn btn-outline-dark btn-block">Visit</button>
    </div>
    </div>
</>)
}

export default CardCom