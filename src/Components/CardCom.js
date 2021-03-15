import React from 'react'




const CardCom=(props)=>{
return(<>
  <div className="card">
    <img className="card-img-top" src={props.img} alt="Card image cap" style={{maxHeight:'250px'}}/>
     <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      {props.linkValid ? <button className="btn btn-outline-dark btn-block" >Visit</button>:<button className="btn btn-outline-dark btn-block disabled" >Visit</button>}
    </div>
    </div>
</>)
}

export default CardCom