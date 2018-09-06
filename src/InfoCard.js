import React from 'react'
// import { CSSTransitionGroup } from 'react-transition-group'
// import './InfoCard.css'


function InfoCard(props) {

  return(
    <div className="section-wrapper">
      <section className="label">
        <p>{props.card.label}</p>
      </section>
      <section className="icon">
       <i className={props.card.icon}></i>
      </section>
      <section className="data">
        {props.card.data}
      </section> 
  </div>

  )
}

export default InfoCard