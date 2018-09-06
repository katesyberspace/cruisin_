import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './MainNoData.css'


function MainNoData(props){

  return (
    <section className="main-no-data">
      <CSSTransitionGroup
        transitionName="welcome"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}>
        <h2>Welcome to Cruisin! </h2>
     </CSSTransitionGroup>

      <CSSTransitionGroup
        transitionName="directions"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}>
        <p>Search a country to get practical travel info and you'll be cruising in no time.</p>
     </CSSTransitionGroup>

    <div className="roller-wrapper"><i id="roller" className='fas fa-globe-americas'></i></div>


    </section>
  )
}

export default MainNoData