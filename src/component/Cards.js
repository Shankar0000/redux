import React from "react";
import './index.css';
import Images from "./Images";
function Card(props){
  return(
    <>
  <div className='cards'>
  <div className='card'>
  <Images className='card_img' imgsrc={props.imgsrc} />
    <div className='card_inf'>
      <span className='card_category'>{props.title}</span>
      <h3 className='card_title'>{props.sname}</h3>
      <a href={props.link} target='_blank'>
        <button className="button1" >Add to Cart</button>
      </a>
    </div>
  </div>
  </div>
  </>
  )
}

export default Card;